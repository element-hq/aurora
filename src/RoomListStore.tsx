import { Mutex } from "async-mutex";
import { applyDiff } from "./DiffUtils.ts";
import {
	type RoomInfo,
	type RoomInterface,
	RoomListEntriesDynamicFilterKind,
	type RoomListEntriesUpdate,
	type RoomListServiceInterface,
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
	info: Partial<RoomInfo>;

	constructor(entry: RoomListEntry, roomId: string, info: Partial<RoomInfo>) {
		this.entry = entry;
		this.roomId = roomId;
		this.info = info;
	}

	getName = () => {
		return this.info?.displayName;
	};

	getAvatar = () => {
		return this.info?.avatarUrl;
	};

	// getReadReceipts = (): ReadReceipts => {
	// 	return this.info?.read_receipts;
	// };
	//
	// getNotificationCounts = (): NotificationCounts => {
	// 	return this.info?.notification_counts;
	// };

	getLatestEvent = (): Event | undefined => {
		return undefined;
		// return this.info?.latest_event?.event?.event;
	};
}

class RoomListStore {
	running = false;
	rooms: Array<RoomListItem> = [];
	listeners: Array<CallableFunction> = [];

	mutex: Mutex = new Mutex();

	constructor(private readonly roomListService: RoomListServiceInterface) {
		console.log("RoomListStore constructed");
	}

	private async parseRoom(room: RoomInterface): Promise<RoomListItem> {
		const roomId = room.id();
		const info = await room.roomInfo();

		// console.trace("@@ room info", roomId, info);
		const rli = new RoomListItem(RoomListEntry.Filled, roomId, info);
		return rli;
	}

	onUpdate = async (updates: RoomListEntriesUpdate[]): Promise<void> => {
		const release = await this.mutex.acquire();
		this.rooms = await applyDiff(this.rooms, updates, this.parseRoom);
		console.log("@@ roomListUpdated", this.rooms);
		this.emit();
		release();
	};

	run = () => {
		console.log("Running roomlist store with state", this.running);

		(async () => {
			// console.log("=> acquiring lock while subscribing to roomlist");
			// console.log("<= got lock while subscribing to roomlist");
			// if (this.running) console.warn("got RLS lock while RLS already running");
			console.log("subscribing to roomlist");

			this.running = true;
			const abortController = new AbortController();
			const p = await this.roomListService.allRooms({
				signal: abortController.signal,
			});
			const v = p.entriesWithDynamicAdapters(30, this);
			const controller = v.controller();
			controller.setFilter(new RoomListEntriesDynamicFilterKind.NonLeft());
			controller.addOnePage();

			this.emit();

			// while (this.running) {
			// 	// TODO
			// }

			// console.log("== releasing lock after roomlist subscription & polling");
			// release();

			// console.log("stopped polling");
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
				// this.running = false;
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
