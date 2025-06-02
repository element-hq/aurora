import { invoke } from "@tauri-apps/api/tauri";
import { Mutex } from "async-mutex";
import {
	type ClientInterface,
	TimelineChange,
	type TimelineDiffInterface,
	type TimelineItemInterface,
} from "./index.web.ts";

class TimelineStore {
	roomId: string;
	client: ClientInterface;
	running = false;
	items: TimelineItemInterface[] = [];
	listeners: CallableFunction[] = [];

	// for now, lock between subs/unsubs across all timeline instances
	// hence static, until the rust layer can handle multiple timelines simultaneously
	static mutex: Mutex = new Mutex();

	constructor(roomId: string, client: ClientInterface) {
		this.roomId = roomId;
		this.client = client;
	}

	sendMessage = async (msg: string) => {
		await invoke("send_message", { roomId: this.roomId, msg });
	};

	onUpdate = async (diff: TimelineDiffInterface[]): Promise<void> => {
		let items = [...this.items];

		for (const update of diff) {
			console.log("@@ timelineUpdate", update, items);
			switch (update.change()) {
				case TimelineChange.Set: {
					const data = update.set();
					if (!data) throw Error();
					items[data.index] = data.item;
					items = [...items];
					break;
				}
				case TimelineChange.PopBack:
					items.pop();
					items = [...items];
					break;
				case TimelineChange.PushFront: {
					const data = update.pushFront();
					if (!data) throw Error();
					items = [data, ...items];
					break;
				}
				case TimelineChange.Clear:
					items = [];
					break;
				case TimelineChange.PopFront:
					items.shift();
					items = [...items];
					break;
				case TimelineChange.PushBack: {
					const data = update.pushBack();
					if (!data) throw Error();
					items = [...items, data];
					break;
				}
				case TimelineChange.Insert: {
					const data = update.insert();
					if (!data) throw Error();
					items.splice(data.index, 0, data.item);
					items = [...items];
					break;
				}
				case TimelineChange.Remove: {
					const data = update.remove();
					if (!data) throw Error();
					items.splice(data, 1);
					items = [...items];
					break;
				}
				case TimelineChange.Truncate: {
					const data = update.truncate();
					if (!data) throw Error();
					items = items.slice(0, data);
					break;
				}
				case TimelineChange.Reset: {
					const data = update.reset();
					if (!data) throw Error();
					items = [...(await Promise.all(data))];
					break;
				}
				case TimelineChange.Append: {
					const data = update.append();
					if (!data) throw Error();
					items = [...items, ...(await Promise.all(data))];
					break;
				}
			}

			console.log("@@ timelinepdated", items);
			this.items = items;
			this.emit();
		}
	};

	run = () => {
		if (!this.roomId) return;

		(async () => {
			console.log("=> acquiring lock while subscribing to", this.roomId);
			const release = await TimelineStore.mutex.acquire();
			console.log("<= got lock while subscribing to", this.roomId);
			if (this.running)
				console.warn(
					"got timeline lock while TLS already running for",
					this.roomId,
				);
			console.log("subscribing to timeline", this.roomId);

			const room = this.client.getRoom(this.roomId);
			if (!room) return;
			const timeline = await room.timeline();
			this.running = true;
			timeline.addListener(this);
			this.emit();

			console.log("timeline items", this.items);

			// console.log(
			// 	"== releasing lock after timeline subscription & polling",
			// 	this.roomId,
			// );
			// release();
			// console.log("no longer subscribed to", this.roomId);
		})();
	};

	subscribe = (listener: CallableFunction) => {
		this.listeners = [...this.listeners, listener];

		return () => {
			(async () => {
				// XXX: we should grab a mutex to avoid overlapping unsubscribes
				// and ensure we only unsubscribe from the timeline we think we're
				// unsubscribing to.
				// await invoke("unsubscribe_timeline", { roomId: this.roomId });
				// this.running = false;
			})();
			this.listeners = this.listeners.filter((l) => l !== listener);
		};
	};

	getSnapshot = (): TimelineItemInterface[] => {
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
