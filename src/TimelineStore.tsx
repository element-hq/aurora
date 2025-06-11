import {
    EventOrTransactionId,
    type EventTimelineItem,
    MessageType,
    type RoomInterface,
    type TaskHandleInterface,
    TimelineChange,
    type TimelineDiffInterface,
    type TimelineInterface,
    TimelineItemContent,
    type TimelineItemInterface,
    VirtualTimelineItem,
} from "./generated/matrix_sdk_ffi.ts";
import type { RoomPaginationStatus } from "./index.web.ts";
import { StateStore } from "./StateStore.tsx";
import { printRustError } from "./utils.ts";

interface TimelineViewState {
    items: TimelineItem<any>[];
    showTopSpinner: boolean;
    firstItemIndex: number;
}

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
class TimelineStore extends StateStore<TimelineViewState> {
    running = false;
    paginationStatus?: RoomPaginationStatus;
    firstItemId?: string;
    hasMoreItems = true;
    private timelinePromise: Promise<TimelineInterface>;

    constructor(public readonly room: RoomInterface) {
        super({
            items: [],
            showTopSpinner: true,
            firstItemIndex: INITIAL_FIRST_TIME_INDEX,
        });
        this.timelinePromise = this.room.timeline();
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

    sendMessage = async (msg: string) => {
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
            console.log("sending", msg);
            await timeline.send(event);
            console.log("sent", msg);
        } catch (e) {
            printRustError("Failed to send message", e);
        }
    };

    backPaginate = async (): Promise<void> => {
        console.log("backPaginate");
        const timeline = await this.timelinePromise;
        const hasMore = !(await timeline.paginateBackwards(50));
        const shouldEmit = this.hasMoreItems !== hasMore;
        this.hasMoreItems = hasMore;
        if (shouldEmit) {
            this.setState({
                ...this.viewState,
                showTopSpinner: hasMore,
            });
        }
    };

    onPaginationStatusUpdate = async (status: RoomPaginationStatus) => {
        this.paginationStatus = status;
        console.log("onPaginationStatusUpdate", status);
    };

    onUpdate = (updates: TimelineDiffInterface[]): void => {
        let newItems = [...this.viewState.items];

        for (const update of updates) {
            console.log(
                "@@ timelineStoreUpdate",
                TimelineChange[update.change()],
                update.change() == TimelineChange.Set
                    ? [update.set()!.index, this.parseItem(update.set()?.item)]
                    : update.change() == TimelineChange.PushBack
                      ? this.parseItem(update.pushBack())
                      : update.change() == TimelineChange.PushFront
                        ? this.parseItem(update.pushFront())
                        : update.change() == TimelineChange.Clear
                          ? ""
                          : update.change() == TimelineChange.PopFront
                            ? ""
                            : update.change() == TimelineChange.PopBack
                              ? ""
                              : update.change() == TimelineChange.Insert
                                ? [
                                      update.insert()!.index,
                                      this.parseItem(update.insert()?.item),
                                  ]
                                : update.change() == TimelineChange.Remove
                                  ? update.remove()
                                  : update.change() == TimelineChange.Truncate
                                    ? update.truncate()
                                    : update.change() == TimelineChange.Reset
                                      ? update.reset()!.map(this.parseItem)
                                      : update.change() == TimelineChange.Append
                                        ? update.append()!.map(this.parseItem)
                                        : "unknown",
            );
            switch (update.change()) {
                case TimelineChange.Set: {
                    newItems[update.set()!.index] = this.parseItem(
                        update.set()?.item,
                    );
                    newItems = [...newItems];
                    break;
                }
                case TimelineChange.PushBack:
                    newItems = [...newItems, this.parseItem(update.pushBack())];
                    break;
                case TimelineChange.PushFront:
                    newItems = [
                        this.parseItem(update.pushFront()),
                        ...newItems,
                    ];
                    break;
                case TimelineChange.Clear:
                    newItems = [];
                    break;
                case TimelineChange.PopFront:
                    newItems.shift();
                    newItems = [...newItems];
                    break;
                case TimelineChange.PopBack:
                    newItems.pop();
                    newItems = [...newItems];
                    break;
                case TimelineChange.Insert:
                    newItems.splice(
                        update.insert()!.index,
                        0,
                        this.parseItem(update.insert()?.item),
                    );
                    newItems = [...newItems];
                    break;
                case TimelineChange.Remove:
                    newItems.splice(update.remove()!, 1);
                    newItems = [...newItems];
                    break;
                case TimelineChange.Truncate:
                    newItems = newItems.slice(0, update.truncate()!);
                    break;
                case TimelineChange.Reset:
                    newItems = [...update.reset()!.map(this.parseItem)];
                    break;
                case TimelineChange.Append:
                    newItems = [
                        ...newItems,
                        ...update.append()!.map(this.parseItem),
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

        this.setState({
            ...this.viewState,
            items: newItems,
            firstItemIndex,
        });
    };

    timelineListener?: TaskHandleInterface;
    pagintationListener?: TaskHandleInterface;
    run = () => {
        if (!this.room) return;

        (async () => {
            console.log("subscribing to timeline", this.room.id());
            const timeline = await this.room.timeline();
            this.timelineListener = await timeline.addListener(this);
            this.pagintationListener =
                await timeline.subscribeToBackPaginationStatus({
                    onUpdate: this.onPaginationStatusUpdate,
                });
            console.log("subscribed to timeline", this.room.id());
            this.running = true;
        })();
    };
    stop = () => {
        (async () => {
            console.log("unsubscribing to timeline", this.room.id());
            this.timelineListener?.cancel();
            this.running = false;
            console.log("unsubscribed to timeline", this.room.id());
        })();
    };
}

export default TimelineStore;
