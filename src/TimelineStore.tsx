import { Mutex } from "async-mutex";
import {
	EventOrTransactionId,
	type EventTimelineItem,
	MessageType,
	type ProfileDetails,
	type RoomInterface,
	TimelineChange,
	type TimelineDiffInterface,
	type TimelineInterface,
	type TimelineItemInterface,
	VirtualTimelineItem,
} from "./generated/matrix_sdk_ffi.ts";
import { printRustError } from "./utils.ts";

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
		if (EventOrTransactionId.EventId.instanceOf(event.eventOrTransactionId)) {
			return event.eventOrTransactionId.inner.eventId;
		}
		if (
			EventOrTransactionId.TransactionId.instanceOf(event.eventOrTransactionId)
		) {
			return event.eventOrTransactionId.inner.transactionId;
		}
		return "1";
	};
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
	items: TimelineItem<any>[] = [];
	listeners: CallableFunction[] = [];

	mutex: Mutex = new Mutex();
	private timelinePromise: Promise<TimelineInterface>;

	constructor(private readonly room: RoomInterface) {
		this.timelinePromise = this.room.timeline();
	}

	private async parseItem(
		item?: TimelineItemInterface,
	): Promise<TimelineItem<any>> {
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
			await timeline.send(event);
		} catch (e) {
			printRustError("Failed to send message", e);
		}
	};

	onUpdate = async (updates: TimelineDiffInterface[]): Promise<void> => {
		const release = await this.mutex.acquire();

		let newItems = [...this.items];

		for (const update of updates) {
			console.log("@@ timelineStoreUpdate", update.change(), update.reset());
			switch (update.change()) {
				case TimelineChange.Set: {
					newItems[update.set()!.index] = await this.parseItem(
						update.set()?.item,
					);
					newItems = [...newItems];
					break;
				}
				case TimelineChange.PushBack:
					newItems = [...newItems, await this.parseItem(update.pushBack())];
					break;
				case TimelineChange.PushFront:
					newItems = [await this.parseItem(update.pushFront()), ...newItems];
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
						await this.parseItem(update.insert()?.item),
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
					newItems = [
						...(await Promise.all(update.reset()!.map(this.parseItem))),
					];
					break;
				case TimelineChange.Append:
					newItems = [
						...newItems,
						...(await Promise.all(update.append()!.map(this.parseItem))),
					];
					break;
			}
		}

		release();
		this.items = newItems;
		this.emit();
	};

	run = () => {
		if (!this.room) return;

		(async () => {
			console.log("subscribing to timeline", this.room.id);
			const timelineInterface = await this.room.timeline();
			await timelineInterface.addListener(this);
			await timelineInterface.paginateBackwards(10);
			console.log("subscribed to timeline", this.room.id);
			this.running = true;
		})();
	};

	subscribe = (listener: CallableFunction) => {
		this.listeners = [...this.listeners, listener];

		return () => {
			(async () => {
				// XXX: we should grab a mutex to avoid overlapping unsubscribes
				// and ensure we only unsubscribe from the timeline we think we're
				// unsubscribing to.
				// await invoke("unsubscribe_timeline", { roomId: this.room.id });
				this.running = false;
			})();
			this.listeners = this.listeners.filter((l) => l !== listener);
		};
	};

	getSnapshot = (): TimelineItem<any>[] => {
		return this.items;
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
