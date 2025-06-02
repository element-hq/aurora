import { Mutex } from "async-mutex";
import type {
	ClientInterface,
	RoomListEntriesUpdate,
	SyncServiceInterface,
} from "./index.web";

export enum RoomListEntry {
	Empty = 0,
	Invalidated = 1,
	Filled = 2,
}

interface ReadReceipts {
	num_mentions: number;
	num_notifications: number;
	num_unread: number;
	pending: string[];
}

interface NotificationCounts {
	highlight_count: number;
	notification_count: number;
}

interface Event {
	sender: string;
	type: string;
	origin_server_ts: number;
	content: {
		body?: string;
		msgtype?: string;
	};
}

export class RoomListItem {
	entry: RoomListEntry;
	roomId: string;
	info: any;

	constructor(entry: RoomListEntry, roomId: string, info: any) {
		this.entry = entry;
		this.roomId = roomId;
		this.info = info;
	}

	getName = () => {
		return this.info?.base_info.name?.Original?.content.name;
	};

	getAvatar = () => {
		return this.info?.base_info.avatar?.Original?.content.url;
	};

	getReadReceipts = (): ReadReceipts => {
		return this.info?.read_receipts;
	};

	getNotificationCounts = (): NotificationCounts => {
		return this.info?.notification_counts;
	};

	getLatestEvent = (): Event | undefined => {
		return this.info?.latest_event?.event?.event;
	};
}

class RoomListStore {
	running = false;
	rooms: Array<RoomListItem> = [];
	listeners: Array<CallableFunction> = [];

	mutex: Mutex = new Mutex();

	constructor(
		private readonly client: ClientInterface,
		private readonly syncService: SyncServiceInterface,
	) {
		console.log("RoomListStore constructed");
	}

	// turn the wodges of JSON from rust-sdk into something typed
	private parseRoom(room: any): RoomListItem {
		const entry: RoomListEntry =
			typeof room === "string"
				? RoomListEntry[room as keyof typeof RoomListEntry]
				: RoomListEntry[Object.keys(room)[0] as keyof typeof RoomListEntry];

		if (entry === RoomListEntry.Empty) {
			return new RoomListItem(entry, "", {});
		}

		const roomId: string = Object.values(room)[0] as string;
		// XXX: is hammering on invoke like this a good idea?
		// const info: any = await invoke("get_room_info", { roomId });

		//console.log(JSON.stringify(info));
		const rli = new RoomListItem(entry, roomId, {});
		return rli;
	}

	onUpdate = async (
		roomEntriesUpdate: RoomListEntriesUpdate[],
	): Promise<void> => {
		let rooms = [...this.rooms];

		console.log("@@", rooms, roomEntriesUpdate);
		for (const update of roomEntriesUpdate) {
			switch (update.tag) {
				case "Append":
					rooms.push(...update.inner.values.map(this.parseRoom));
					break;
				case "Clear":
					rooms = [];
					break;
			}
		}

		this.rooms = rooms;
		this.emit();
	};

	run = () => {
		console.log("Running roomlist store with state", this.running);

		(async () => {
			console.log("=> acquiring lock while subscribing to roomlist");
			const release = await this.mutex.acquire();
			console.log("<= got lock while subscribing to roomlist");
			if (this.running) console.warn("got RLS lock while RLS already running");
			console.log("subscribing to roomlist");

			this.running = true;
			const abortController = new AbortController();
			const roomListService = this.syncService.roomListService();
			const p = await roomListService.allRooms({
				signal: abortController.signal,
			});
			const v = p.entriesWithDynamicAdapters(100, this);

			this.emit();

			// TODO: recover from network outages and laptop sleeping
			// while (this.running) {
			// 	//console.log("waiting for roomlist_update");
			//
			// 	let diffs: any;
			// 	try {
			// 		// diffs = await invoke("get_roomlist_update");
			// 	} catch (error) {
			// 		if (error) {
			// 			console.info(error);
			// 		} else {
			// 			console.info("unexpected error");
			// 		}
			// 	}
			//
			// 	if (!diffs) {
			// 		console.info("stopping roomlist poll due to empty diff");
			// 		this.running = false;
			// 		break;
			// 	}
			//
			// 	for (const diff of diffs) {
			// 		const k = Object.keys(diff)[0];
			// 		const v = Object.values(diff)[0] as any;
			//
			// 		//console.log("got roomlist_update", diff);
			//
			// 		let room: RoomListItem;
			// 		let rooms: RoomListItem[];
			//
			// 		// XXX: deduplicate VecDiff processing with the TimelineStore
			// 		switch (k) {
			// 			case "Set":
			// 				room = await this.parseRoom(v.value);
			// 				this.rooms[v.index] = room;
			// 				this.rooms = [...this.rooms];
			// 				break;
			// 			case "PushBack":
			// 				room = await this.parseRoom(v.value);
			// 				this.rooms = [...this.rooms, room];
			// 				break;
			// 			case "PushFront":
			// 				room = await this.parseRoom(v.value);
			// 				this.rooms = [room, ...this.rooms];
			// 				break;
			// 			case "Clear":
			// 				this.rooms = [];
			// 				break;
			// 			case "PopFront":
			// 				this.rooms.shift();
			// 				this.rooms = [...this.rooms];
			// 				break;
			// 			case "PopBack":
			// 				this.rooms.pop();
			// 				this.rooms = [...this.rooms];
			// 				break;
			// 			case "Insert":
			// 				room = await this.parseRoom(v.value);
			// 				this.rooms.splice(v.index, 0, room);
			// 				this.rooms = [...this.rooms];
			// 				break;
			// 			case "Remove":
			// 				this.rooms.splice(v.index, 1);
			// 				this.rooms = [...this.rooms];
			// 				break;
			// 			case "Truncate":
			// 				this.rooms = this.rooms.slice(0, v.length);
			// 				break;
			// 			case "Reset":
			// 				rooms = await Promise.all(
			// 					v.values.map(async (room: any) => await this.parseRoom(room)),
			// 				);
			// 				this.rooms = [...rooms];
			// 				break;
			// 			case "Append":
			// 				rooms = await Promise.all(
			// 					v.values.map(async (room: any) => await this.parseRoom(room)),
			// 				);
			// 				this.rooms = [...this.rooms, ...rooms];
			// 				break;
			// 		}
			// 	}
			// 	this.emit();
			// }
			// abortController.abort();

			console.log("== releasing lock after roomlist subscription & polling");
			release();

			console.log("stopped polling");
		})();
	};

	getSnapshot = (): RoomListItem[] => {
		return this.rooms;
	};

	subscribe = (listener: CallableFunction) => {
		this.listeners = [...this.listeners, listener];
		return () => {
			console.log("unsubscribing roomlist");
			(async () => {
				// XXX: we should grab a mutex to avoid overlapping unsubscribes
				// await invoke("unsubscribe_roomlist");
				this.running = false;
			})();
			this.listeners = this.listeners.filter((l) => l !== listener);
		};
	};

	emit = () => {
		for (const listener of this.listeners) {
			listener();
		}
	};
}

export default RoomListStore;
