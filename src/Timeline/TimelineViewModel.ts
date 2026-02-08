/*
 *
 *  * Copyright 2025 New Vector Ltd.
 *  *
 *  * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 *  * Please see LICENSE files in the repository root for full details.
 *
 */

import { BaseViewModel } from "@element-hq/web-shared-components";
import {
    EventOrTransactionId,
    type EventTimelineItem,
    MessageType,
    type TaskHandleInterface,
    type TimelineDiff,
    TimelineDiff_Tags,
    type TimelineInterface,
    TimelineItemContent,
    type TimelineItemInterface,
    VirtualTimelineItem,
} from "../generated/matrix_sdk_ffi.ts";
import type { RoomPaginationStatus } from "../index.web.ts";
import { printRustError } from "../utils/printRustError";
import type {
    Props,
    TimelineViewActions,
    TimelineViewSnapshot,
} from "./timeline-view.types";

export enum TimelineItemKind {
    Event = 0,
    Virtual = 1,
    Spinner = 2,
}

export const Spinner = "spinner";

export function isVirtualEvent(
    item: TimelineItem<any> | undefined,
): item is TimelineItem<TimelineItemKind.Virtual> {
    return item?.kind === TimelineItemKind.Virtual;
}

export function isRealEvent(
    item: TimelineItem<any> | undefined,
): item is TimelineItem<TimelineItemKind.Event> {
    return item?.kind === TimelineItemKind.Event;
}

export class TimelineItem<
    K extends TimelineItemKind.Event | TimelineItemKind.Virtual | "spinner",
> {
    item: K extends TimelineItemKind.Event
        ? EventTimelineItem
        : K extends "spinner"
          ? "spinner"
          : VirtualTimelineItem;
    kind: K;
    continuation = false;

    constructor(
        kind: K,
        item: K extends TimelineItemKind.Event
            ? EventTimelineItem
            : K extends "spinner"
              ? "spinner"
              : VirtualTimelineItem,
    ) {
        this.kind = kind;
        this.item = item;
    }

    getInternalId = (): string => {
        if (this.kind === "spinner") {
            return "spinner";
        }
        if (isVirtualEvent(this)) {
            if (VirtualTimelineItem.TimelineStart.instanceOf(this.item)) {
                return "start";
            }
            if (VirtualTimelineItem.DateDivider.instanceOf(this.item)) {
                return `divider-${this.item.inner.ts}`;
            }
            if (VirtualTimelineItem.ReadMarker.instanceOf(this.item)) {
                return "readmarker";
            }
            return "0";
        }
        const event = this.item as EventTimelineItem;
        if (
            EventOrTransactionId.EventId.instanceOf(event.eventOrTransactionId)
        ) {
            return event.eventOrTransactionId.inner.eventId;
        }
        if (
            EventOrTransactionId.TransactionId.instanceOf(
                event.eventOrTransactionId,
            )
        ) {
            return event.eventOrTransactionId.inner.transactionId;
        }
        return "1";
    };

    updateContinuation(prevItem: TimelineItem<any>) {
        this.continuation =
            prevItem &&
            isRealEvent(this) &&
            isRealEvent(prevItem) &&
            TimelineItemContent.MsgLike.instanceOf(this.item.content) &&
            TimelineItemContent.MsgLike.instanceOf(prevItem.item.content) &&
            this.item.sender === prevItem.item.sender;
    }
}

export class WrapperVirtualTimelineItem extends TimelineItem<TimelineItemKind.Virtual> {
    constructor(item: VirtualTimelineItem) {
        super(TimelineItemKind.Virtual, item);
    }
}

export class RealEventTimelineItem extends TimelineItem<TimelineItemKind.Event> {
    constructor(item: EventTimelineItem) {
        super(TimelineItemKind.Event, item);
    }
}

const INITIAL_FIRST_TIME_INDEX = 10000;

export class TimelineViewModel
    extends BaseViewModel<TimelineViewSnapshot, Props>
    implements TimelineViewActions
{
    private running = false;
    private paginationStatus?: RoomPaginationStatus;
    private firstItemId?: string;
    private hasMoreItems = true;
    private timelinePromise: Promise<TimelineInterface>;
    private timelineListener?: TaskHandleInterface;
    private paginationListener?: TaskHandleInterface;

    public constructor(props: Props) {
        super(props, {
            items: [],
            showTopSpinner: true,
            firstItemIndex: INITIAL_FIRST_TIME_INDEX,
            roomId: props.room.id(),
        });
        this.timelinePromise = this.props.room.timeline();
        this.run();
    }

    private parseItem(item?: TimelineItemInterface): TimelineItem<any> {
        if (item?.asEvent()) {
            return new RealEventTimelineItem(item.asEvent()!);
        }
        if (item?.asVirtual()) {
            return new WrapperVirtualTimelineItem(item.asVirtual()!);
        }
        throw new Error("Something unknown");
    }

    private logTimelineUpdate(update: TimelineDiff): void {
        const tagName = TimelineDiff_Tags[update.tag];
        let updateData: unknown;

        switch (update.tag) {
            case TimelineDiff_Tags.Set:
                updateData = [
                    update.inner.index,
                    this.parseItem(update.inner.value),
                ];
                break;
            case TimelineDiff_Tags.PushBack:
            case TimelineDiff_Tags.PushFront:
                updateData = this.parseItem(update.inner.value);
                break;
            case TimelineDiff_Tags.Insert:
                updateData = [
                    update.inner.index,
                    this.parseItem(update.inner.value),
                ];
                break;
            case TimelineDiff_Tags.Remove:
                updateData = update.inner.index;
                break;
            case TimelineDiff_Tags.Truncate:
                updateData = update.inner.length;
                break;
            case TimelineDiff_Tags.Reset:
            case TimelineDiff_Tags.Append:
                updateData = update.inner.values.map(this.parseItem);
                break;
            case TimelineDiff_Tags.Clear:
            case TimelineDiff_Tags.PopFront:
            case TimelineDiff_Tags.PopBack:
                updateData = "";
                break;
            default:
                updateData = "unknown";
        }
    }

    public sendMessage = async (msg: string): Promise<void> => {
        try {
            const timeline = await this.timelinePromise;
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

    public backPaginate = async (): Promise<void> => {
        const timeline = await this.timelinePromise;
        const hasMore = !(await timeline.paginateBackwards(50));
        const shouldEmit = this.hasMoreItems !== hasMore;
        this.hasMoreItems = hasMore;
        if (shouldEmit) {
            this.snapshot.merge({
                showTopSpinner: hasMore,
            });
        }
    };

    private onPaginationStatusUpdate = async (
        status: RoomPaginationStatus,
    ): Promise<void> => {
        this.paginationStatus = status;
    };

    public onUpdate = (diff: Array<TimelineDiff>): void => {
        const snapshot = this.getSnapshot();
        let newItems = [...snapshot.items];

        for (const update of diff) {
            this.logTimelineUpdate(update);
            switch (update.tag) {
                case TimelineDiff_Tags.Set: {
                    newItems[update.inner.index] = this.parseItem(
                        update.inner.value,
                    );
                    newItems = [...newItems];
                    break;
                }
                case TimelineDiff_Tags.PushBack:
                    newItems = [
                        ...newItems,
                        this.parseItem(update.inner.value),
                    ];
                    break;
                case TimelineDiff_Tags.PushFront:
                    newItems = [
                        this.parseItem(update.inner.value),
                        ...newItems,
                    ];
                    break;
                case TimelineDiff_Tags.Clear:
                    newItems = [];
                    break;
                case TimelineDiff_Tags.PopFront:
                    newItems.shift();
                    newItems = [...newItems];
                    break;
                case TimelineDiff_Tags.PopBack:
                    newItems.pop();
                    newItems = [...newItems];
                    break;
                case TimelineDiff_Tags.Insert:
                    newItems.splice(
                        update.inner.index,
                        0,
                        this.parseItem(update.inner.value),
                    );
                    newItems = [...newItems];
                    break;
                case TimelineDiff_Tags.Remove:
                    newItems.splice(update.inner.index, 1);
                    newItems = [...newItems];
                    break;
                case TimelineDiff_Tags.Truncate:
                    newItems = newItems.slice(0, update.inner.length);
                    break;
                case TimelineDiff_Tags.Reset:
                    newItems = [...update.inner.values.map(this.parseItem)];
                    break;
                case TimelineDiff_Tags.Append:
                    newItems = [
                        ...newItems,
                        ...update.inner.values.map(this.parseItem),
                    ];
                    break;
            }
        }

        function findFirstEventItemId(
            items: TimelineItem<any>[],
        ): string | undefined {
            const eventItem = items.find(
                (item) => item?.kind === TimelineItemKind.Event,
            );
            return eventItem?.getInternalId();
        }

        newItems.map((curr, i, arr) => {
            if (i > 0) {
                curr.updateContinuation(arr[i - 1]);
            }
            return curr;
        });

        // virtuoso requires us to track the "firstItemIndex" so that it knows how to prepend items
        // to the list while maintaining the scroll position without jumps.
        // We use a large number, as per their docs it should never be negative.
        // https://virtuoso.dev/virtuoso-api/interfaces/VirtuosoProps/#firstitemindex
        let firstItemIndex: number = INITIAL_FIRST_TIME_INDEX;
        // We keep a reference to the first item by it's id.
        if (this.firstItemId) {
            // If we have a firstItemId, we need to find its index in the new items
            // and calculate the firstItemIndex based on that.
            const foundIndex = newItems.findIndex(
                (item) => item.getInternalId() === this.firstItemId,
            );

            if (foundIndex) {
                // If we found the item, we set the firstItemIndex to the difference
                // between the initial index and the found index.
                firstItemIndex = INITIAL_FIRST_TIME_INDEX - foundIndex;
            } else {
                // If we didn't find the item, we set the firstItemId to the first event
                this.firstItemId = findFirstEventItemId(newItems);
            }
        } else {
            // If we don't have a firstItemId, we find the first event item id
            this.firstItemId = findFirstEventItemId(newItems);
        }

        this.snapshot.merge({
            items: newItems,
            firstItemIndex,
        });
    };

    private run = (): void => {
        if (this.running) return;

        (async () => {
            const timeline = await this.props.room.timeline();
            this.timelineListener = await timeline.addListener(this);
            this.paginationListener =
                await timeline.subscribeToBackPaginationStatus({
                    onUpdate: this.onPaginationStatusUpdate,
                });
            this.running = true;
        })();

        // Cleanup listeners when the ViewModel is disposed
        this.disposables.track(() => {
            this.timelineListener?.cancel();
            this.paginationListener?.cancel();
            this.running = false;
        });
    };
}
