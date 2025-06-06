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
import {
    RoomPaginationStatus,
    RoomPaginationStatus_Tags,
} from "./index.web.ts";
import { printRustError } from "./utils.ts";

interface TimelineViewState {
    items: TimelineItem<any>[];
    showTopSpinner: boolean;
    firstItemIndex: number;
}

export enum TimelineItemKind {
    Event = 0,
    Virtual = 1,
}

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
    K extends TimelineItemKind.Event | TimelineItemKind.Virtual,
> {
    item: K extends TimelineItemKind.Event
        ? EventTimelineItem
        : VirtualTimelineItem;
    kind: K;
    continuation = false;

    constructor(
        kind: K,
        item: K extends TimelineItemKind.Event
            ? EventTimelineItem
            : VirtualTimelineItem,
    ) {
        this.kind = kind;
        this.item = item;
    }

    getInternalId = (): string => {
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

class TimelineStore {
    running = false;
    listeners: CallableFunction[] = [];

    paginationStatus?: RoomPaginationStatus;
    // items: TimelineItem<any>[] = [];
    viewState: TimelineViewState = {
        items: [],
        showTopSpinner: false,
        firstItemIndex: 10000,
    };

    private timelinePromise: Promise<TimelineInterface>;

    constructor(public readonly room: RoomInterface) {
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

    backPaginate = async (i: number): Promise<void> => {
        console.log(`!! backPaginate ${i}.`);
        console.log();
        if (RoomPaginationStatus.Paginating.instanceOf(this.paginationStatus)) {
            return;
        }
        const timeline = await this.timelinePromise;
        await timeline.paginateBackwards(10);
    };

    onPaginationStatusUpdate = async (status: RoomPaginationStatus) => {
        this.paginationStatus = status;
        this.viewState = {
            ...this.viewState,
            showTopSpinner: RoomPaginationStatus.Paginating.instanceOf(status),
        };
        this.emit();
    };

    onUpdate = (updates: TimelineDiffInterface[]): void => {
        console.log("onUpdate!!!!");
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
        newItems.map((curr, i, arr) => {
            if (i > 0) {
                curr.updateContinuation(arr[i - 1]);
            }
            return curr;
        });

        const diffCount = newItems.length - this.viewState.items.length;
        const firstItemIndex = this.viewState.firstItemIndex - diffCount;
        // this.items = newItems;
        console.log("newItems");
        console.log(newItems);
        this.viewState = { ...this.viewState, items: newItems, firstItemIndex };
        this.emit();
    };

    timelineListener?: TaskHandleInterface;
    run = () => {
        if (!this.room) return;

        (async () => {
            console.log("subscribing to timeline", this.room.id());
            const timeline = await this.room.timeline();
            this.timelineListener = await timeline.addListener(this);
            timeline.subscribeToBackPaginationStatus({
                onUpdate: this.onPaginationStatusUpdate,
            });
            // await timeline.paginateBackwards(10);
            // await timeline.paginateBackwards(10);
            // await timeline.paginateBackwards(10);
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

    subscribe = (listener: CallableFunction) => {
        this.listeners = [...this.listeners, listener];

        return () => {
            (async () => {
                this.running = false;
            })();
            this.listeners = this.listeners.filter((l) => l !== listener);
        };
    };

    getSnapshot = (): TimelineViewState => {
        return this.viewState;
    };

    emit = () => {
        for (const listener of this.listeners) {
            listener();
        }
    };

    // private logItems(timeline_items: any[]) {
    //     console.log("timeline items", timeline_items);
    //     for (let i = 0; i < timeline_items.length; i++) {
    //         const value = timeline_items[i];
    //         const kind = value.kind ? Object.keys(value.kind)[0] : null;
    //         const event = value?.kind.Event;
    //         const content = event?.content;
    //         console.log(`Item index=${i} internal_id=${value.internal_id} sender=${event?.sender_profile.Ready ?
    //                 event?.sender_profile.Ready.display_name :
    //                 event?.sender} kind=${kind} content=${content?.Message?.msgtype?.body || content}`);
    //     }
    // }

    // private logDiff(k: string, v: any) {
    //     const kind = v.value?.kind ? Object.keys(v.value?.kind)[0] : null;
    //     const event = v.value?.kind.Event;
    //     const content = v.value?.kind.Event?.content;

    //     console.log(`${k} index=${v.index} internal_id=${v.value?.internal_id} sender=${event?.sender_profile.Ready ?
    //             event?.sender_profile.Ready.display_name :
    //             event?.sender} kind=${kind} content=${content?.Message?.msgtype?.body || content}`);
    // }
}

export default TimelineStore;
