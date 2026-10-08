/*
 *
 *  * Copyright 2025 New Vector Ltd.
 *  *
 *  * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 *  * Please see LICENSE files in the repository root for full details.
 *
 */

import {
    BACKWARD_LOADING_KEY,
    BaseViewModel,
    type EventSendState,
    type ImmediateScroll,
    type TimelineItem,
} from "@element-hq/web-shared-components";
import {
    EventOrTransactionId,
    EventSendState_Tags,
    type EventTimelineItem,
    MessageType,
    ReceiptType,
    type RoomInfo,
    type TimelineDiff,
    TimelineDiff_Tags,
    type TimelineInterface,
    TimelineItemContent,
    type TimelineItemInterface,
    VirtualTimelineItem,
} from "../generated/matrix_sdk_ffi.ts";
import { printRustError } from "../utils/printRustError";
import type {
    AuroraTimelineActions,
    Props,
    TimelineViewActions,
    TimelineViewSnapshot,
} from "./timeline-view.types";

/** How many events to ask for on each back-pagination. */
const PAGINATE_SIZE = 50;

/**
 * How many events we try to have before showing the timeline for the first time. The view
 * keeps the reader's place by adjusting the scroll position, which does nothing for a list
 * too short to scroll, so older history arriving above would shove the rows about.
 */
const MIN_INITIAL_EVENTS = 40;
const MAX_INITIAL_FILL_REQUESTS = 2;

/** How long after the last scroll to wait before sending a read receipt (ms). */
const READ_RECEIPT_DEBOUNCE_MS = 500;

/** Two messages further apart than this are not drawn as a continuation (ms). */
const CONTINUATION_MAX_INTERVAL = 5 * 60 * 1000;

const READ_MARKER_KEY = "read-marker";

function lastOf<T>(list: T[]): T | undefined {
    return list[list.length - 1];
}

/** An SDK timeline item, parsed once when its diff arrives. */
type SdkItem =
    | { key: string; event: EventTimelineItem }
    | { key: string; virtual?: VirtualTimelineItem };

function parseItem(item: TimelineItemInterface): SdkItem {
    const key = item.uniqueId().id;
    const event = item.asEvent();
    if (event) return { key, event };
    return { key, virtual: item.asVirtual() };
}

function eventIdOf(event: EventTimelineItem): string | undefined {
    return EventOrTransactionId.EventId.instanceOf(event.eventOrTransactionId)
        ? event.eventOrTransactionId.inner.eventId
        : undefined;
}

function sendStateOf(event: EventTimelineItem): EventSendState | undefined {
    switch (event.localSendState?.tag) {
        case EventSendState_Tags.NotSentYet:
            return "sending";
        case EventSendState_Tags.SendingFailed:
            return "failed";
        case EventSendState_Tags.Sent:
            return "sent";
        default:
            return undefined;
    }
}

export class TimelineViewModel
    extends BaseViewModel<TimelineViewSnapshot, Props>
    implements TimelineViewActions, AuroraTimelineActions
{
    private started = false;
    private timelinePromise?: Promise<TimelineInterface>;
    private sdkItems: SdkItem[] = [];
    private diffQueue: Promise<void> = Promise.resolve();

    /** False until the first batch has been gathered; nothing is published before then. */
    private initialFillDone = false;

    /** The in-flight back-pagination chain, or undefined when idle. */
    private paginating?: Promise<void>;
    /** Set when another pagination was asked for while one was running. */
    private paginateAgain = false;
    private startReached = false;

    /**
     * Whether each message is a continuation, decided the first time we see it and never
     * revisited. Otherwise the first message of a batch could lose its avatar when older
     * history loads above it, and the row shrinking would move the text being read.
     */
    private continuationCache = new Map<string, boolean>();

    private readReceiptTimer?: ReturnType<typeof setTimeout>;
    private lastReceiptEventId?: string;
    /** Whether the reader has had the read marker on screen since it last moved. */
    private readMarkerSeen = false;
    private roomInfo?: RoomInfo;

    public constructor(props: Props) {
        super(props, {
            items: [],
            atLiveEnd: true,
            pendingAnchor: null,
            highlightedEventId: null,
            isAtBottom: true,
            canJumpToReadMarker: false,
            numUnreadMessages: 0,
            hasHighlights: false,
        });
        this.disposables.track(() => clearTimeout(this.readReceiptTimer));
    }

    /**
     * Subscribe to the room's timeline. Kept out of the constructor so that a view model
     * React creates and throws away never starts anything; calling it twice is a no-op.
     */
    public start(): void {
        if (this.started) return;
        this.started = true;

        const timelinePromise = this.props.room.timeline();
        this.timelinePromise = timelinePromise;

        const roomInfoHandle = this.props.room.subscribeToRoomInfoUpdates({
            call: (roomInfo) => {
                this.roomInfo = roomInfo;
                this.updateUnreadCounts();
            },
        });
        this.disposables.track(() => roomInfoHandle.cancel());

        (async () => {
            try {
                const timeline = await timelinePromise;
                if (this.isDisposed) return;
                const listener = await timeline.addListener(this);
                this.disposables.track(() => listener.cancel());
                await this.initialFill(timeline);
            } catch (e) {
                printRustError("Failed to start timeline", e);
            }
            this.initialFillDone = true;
            this.publish();
        })();
    }

    /** Load enough history to fill the window before the first publish. */
    private async initialFill(timeline: TimelineInterface): Promise<void> {
        for (let i = 0; i < MAX_INITIAL_FILL_REQUESTS; i++) {
            await this.diffQueue;
            const events = this.sdkItems.filter((i) => "event" in i).length;
            if (events >= MIN_INITIAL_EVENTS || this.startReached) break;
            this.startReached = await timeline.paginateBackwards(PAGINATE_SIZE);
            if (this.isDisposed) return;
        }
        await this.diffQueue;
    }

    // ── SDK updates ──────────────────────────────────────────────────

    public onUpdate = (diff: TimelineDiff[]): void => {
        this.diffQueue = this.diffQueue.then(() => this.applyDiff(diff));
    };

    private applyDiff(diff: TimelineDiff[]): void {
        let items = [...this.sdkItems];
        const lastKeyBefore = lastOf(items)?.key;

        for (const update of diff) {
            switch (update.tag) {
                case TimelineDiff_Tags.Set:
                    items[update.inner.index] = parseItem(update.inner.value);
                    break;
                case TimelineDiff_Tags.PushBack:
                    items.push(parseItem(update.inner.value));
                    break;
                case TimelineDiff_Tags.PushFront:
                    items.unshift(parseItem(update.inner.value));
                    break;
                case TimelineDiff_Tags.Clear:
                    items = [];
                    break;
                case TimelineDiff_Tags.PopFront:
                    items.shift();
                    break;
                case TimelineDiff_Tags.PopBack:
                    items.pop();
                    break;
                case TimelineDiff_Tags.Insert:
                    items.splice(
                        update.inner.index,
                        0,
                        parseItem(update.inner.value),
                    );
                    break;
                case TimelineDiff_Tags.Remove:
                    items.splice(update.inner.index, 1);
                    break;
                case TimelineDiff_Tags.Truncate:
                    items = items.slice(0, update.inner.length);
                    break;
                case TimelineDiff_Tags.Reset:
                    items = update.inner.values.map(parseItem);
                    break;
                case TimelineDiff_Tags.Append:
                    items.push(...update.inner.values.map(parseItem));
                    break;
            }
        }

        this.sdkItems = items;
        // Something new at the bottom while we're there: send a receipt for it, since the
        // visible range may not change if the view follows it down.
        if (
            this.snapshot.current.isAtBottom &&
            lastOf(items)?.key !== lastKeyBefore
        ) {
            this.scheduleReadReceipt(this.lastConfirmedEventId(items.length));
        }
        this.publish();
    }

    // ── Building the items ───────────────────────────────────────────

    private publish(): void {
        if (!this.initialFillDone || this.isDisposed) return;
        const items = this.buildItems();
        const wasEmpty = this.snapshot.current.items.length === 0;
        const extra: Partial<TimelineViewSnapshot> = {};
        const last = lastOf(items);
        if (wasEmpty && last) {
            extra.pendingAnchor = {
                targetKey: last.key,
                align: "end",
            };
        }
        if (!items.some((i) => i.kind === "read-marker")) {
            extra.canJumpToReadMarker = false;
        }
        this.snapshot.merge({ items, ...extra });
    }

    private buildItems(): TimelineItem[] {
        const items: TimelineItem[] = [];
        if (this.paginating && !this.startReached) {
            items.push({ key: BACKWARD_LOADING_KEY, kind: "loading" });
        }

        let prevEvent: EventTimelineItem | null = null;
        let lastEventItem: Extract<TimelineItem, { kind: "event" }> | null =
            null;
        for (const sdkItem of this.sdkItems) {
            if ("event" in sdkItem) {
                const { key, event } = sdkItem;
                const item: Extract<TimelineItem, { kind: "event" }> = {
                    key,
                    kind: "event",
                    event,
                    continuation: this.getCachedContinuation(
                        key,
                        prevEvent,
                        event,
                    ),
                    // Worked out below, once we know whether the next row continues this one.
                    lastInSection: false,
                    sendState: sendStateOf(event),
                };
                if (lastEventItem) {
                    lastEventItem.lastInSection = !item.continuation;
                }
                items.push(item);
                lastEventItem = item;
                prevEvent = event;
                continue;
            }

            const { virtual } = sdkItem;
            // Anything that isn't a message ends the group above it.
            if (lastEventItem) lastEventItem.lastInSection = true;
            lastEventItem = null;
            if (VirtualTimelineItem.DateDivider.instanceOf(virtual)) {
                const ts = Number(virtual.inner.ts);
                items.push({ key: `date-${ts}`, kind: "date-separator", ts });
                prevEvent = null;
            } else if (VirtualTimelineItem.ReadMarker.instanceOf(virtual)) {
                items.push({ key: READ_MARKER_KEY, kind: "read-marker" });
            }
            // TimelineStart draws nothing.
        }
        if (lastEventItem) lastEventItem.lastInSection = true;
        return items;
    }

    private getCachedContinuation(
        key: string,
        prev: EventTimelineItem | null,
        cur: EventTimelineItem,
    ): boolean {
        const cached = this.continuationCache.get(key);
        if (cached !== undefined) return cached;
        const value =
            prev !== null &&
            prev.sender === cur.sender &&
            TimelineItemContent.MsgLike.instanceOf(prev.content) &&
            TimelineItemContent.MsgLike.instanceOf(cur.content) &&
            Number(cur.timestamp) - Number(prev.timestamp) <=
                CONTINUATION_MAX_INTERVAL;
        this.continuationCache.set(key, value);
        return value;
    }

    // ── TimelineViewActions ──────────────────────────────────────────

    public onStartReached = (): void => {
        if (this.startReached || this.snapshot.current.pendingAnchor) return;
        void this.paginateBackwards();
    };

    /** Always at the live end, so there is never anything further down to load. */
    public onEndReached = (): void => {};

    public onAnchorReached = (): void => {
        if (this.snapshot.current.pendingAnchor === null) return;
        this.snapshot.merge({ pendingAnchor: null });
    };

    public onVisibleRangeChanged = (start: number, end: number): void => {
        const items = this.snapshot.current.items;
        this.scheduleReadReceipt(this.lastConfirmedEventId(end + 1, items));

        const markerIndex = items.findIndex((i) => i.kind === "read-marker");
        let canJumpToReadMarker: TimelineViewSnapshot["canJumpToReadMarker"] = false;
        if (markerIndex >= 0) {
            if (markerIndex < start) canJumpToReadMarker = "above";
            else if (markerIndex > end) canJumpToReadMarker = "below";
            else this.readMarkerSeen = true;
        }
        if (canJumpToReadMarker !== this.snapshot.current.canJumpToReadMarker) {
            this.snapshot.merge({ canJumpToReadMarker });
        }
    };

    public onAtBottomStateChange = (atBottom: boolean): void => {
        this.snapshot.merge({ isAtBottom: atBottom });
        this.updateUnreadCounts();
    };

    public onJumpToReadMarker = (scrollNow: ImmediateScroll): void => {
        if (
            this.snapshot.current.items.some((i) => i.key === READ_MARKER_KEY)
        ) {
            scrollNow({ targetKey: READ_MARKER_KEY, align: "center" });
            return;
        }
        void this.paginateUntilReadMarker();
    };

    public onMarkAllAsRead = (): void => {
        this.snapshot.merge({ canJumpToReadMarker: false });
        void (async () => {
            try {
                const timeline = await this.timelinePromise;
                await timeline?.markAsRead(ReceiptType.Read);
                await timeline?.markAsRead(ReceiptType.FullyRead);
            } catch (e) {
                printRustError("Failed to mark room as read", e);
            }
        })();
    };

    public onJumpToLive = (scrollNow: ImmediateScroll): void => {
        const lastKey = lastOf(this.snapshot.current.items)?.key;
        if (lastKey) scrollNow({ targetKey: lastKey, align: "end" });
        this.snapshot.merge({ numUnreadMessages: 0, hasHighlights: false });
    };

    // ── Aurora actions ───────────────────────────────────────────────

    public sendMessage = async (msg: string): Promise<void> => {
        try {
            const timeline = await this.timelinePromise;
            if (!timeline) return;
            const event = timeline.createMessageContent(
                MessageType.Text.new({
                    content: {
                        body: msg,
                        formatted: undefined,
                    },
                }),
            )!;
            await timeline.send(event);
        } catch (e) {
            printRustError("Failed to send message", e);
        }
    };

    // ── Helpers ──────────────────────────────────────────────────────

    /**
     * Run back-paginations one after another. A request that arrives while one is running
     * is remembered and run once it finishes, rather than being dropped.
     */
    private paginateBackwards(): Promise<void> {
        if (this.paginating) {
            this.paginateAgain = true;
            return this.paginating;
        }
        this.paginating = (async () => {
            this.publish();
            try {
                const timeline = await this.timelinePromise;
                do {
                    this.paginateAgain = false;
                    if (!timeline || this.isDisposed) break;
                    this.startReached =
                        await timeline.paginateBackwards(PAGINATE_SIZE);
                } while (this.paginateAgain && !this.startReached);
            } catch (e) {
                printRustError("Failed to paginate backwards", e);
            }
            // Take the spinner away in the same update that adds the new events.
            await this.diffQueue;
            this.paginating = undefined;
            this.publish();
        })();
        return this.paginating;
    }

    private async paginateUntilReadMarker(): Promise<void> {
        while (
            !this.startReached &&
            !this.isDisposed &&
            !this.snapshot.current.items.some((i) => i.key === READ_MARKER_KEY)
        ) {
            await this.paginateBackwards();
        }
        if (
            this.snapshot.current.items.some((i) => i.key === READ_MARKER_KEY)
        ) {
            this.snapshot.merge({
                pendingAnchor: { targetKey: READ_MARKER_KEY, align: "center" },
            });
        }
    }

    /** The id of the last event the server has confirmed among the first `count` rows. */
    private lastConfirmedEventId(
        count: number,
        items: (SdkItem | TimelineItem)[] = this.sdkItems,
    ): string | undefined {
        for (let i = Math.min(count, items.length) - 1; i >= 0; i--) {
            const item = items[i];
            if (!("event" in item)) continue;
            const id = eventIdOf(item.event as EventTimelineItem);
            if (id) return id;
        }
        return undefined;
    }

    private scheduleReadReceipt(eventId: string | undefined): void {
        if (!eventId || eventId === this.lastReceiptEventId) return;
        clearTimeout(this.readReceiptTimer);
        this.readReceiptTimer = setTimeout(
            () => void this.sendReadReceipt(eventId),
            READ_RECEIPT_DEBOUNCE_MS,
        );
    }

    private async sendReadReceipt(eventId: string): Promise<void> {
        const timeline = await this.timelinePromise;
        if (!timeline || this.isDisposed) return;
        this.lastReceiptEventId = eventId;
        try {
            await timeline.sendReadReceipt(ReceiptType.Read, eventId);
            // Once the reader has seen the read marker and moved on past it, move it to
            // where they've read up to.
            if (
                this.readMarkerSeen &&
                this.snapshot.current.canJumpToReadMarker === "above"
            ) {
                this.readMarkerSeen = false;
                await timeline.sendReadReceipt(ReceiptType.FullyRead, eventId);
            }
        } catch (e) {
            printRustError("Failed to send read receipt", e);
        }
    }

    private updateUnreadCounts(): void {
        if (this.isDisposed) return;
        if (this.snapshot.current.isAtBottom || !this.roomInfo) {
            this.snapshot.merge({ numUnreadMessages: 0, hasHighlights: false });
            return;
        }
        this.snapshot.merge({
            numUnreadMessages: Number(this.roomInfo.numUnreadMessages),
            hasHighlights: Number(this.roomInfo.numUnreadMentions) > 0,
        });
    }
}
