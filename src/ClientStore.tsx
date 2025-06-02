import { invoke } from "@tauri-apps/api/core";
import TimelineStore from "./TimelineStore.tsx";
import RoomListStore from "./RoomListStore.tsx";
import { Mutex } from "async-mutex";

interface LoginParams {
	username: string;
	password: string;
	server: string;
}

export enum ClientState {
	Unknown = 0,
	LoggedIn = 1,
	LoggedOut = 2,
}

class ClientStore {
	timelineStores: Map<string, TimelineStore> = new Map();
	roomListStore?: RoomListStore;

	mutex: Mutex = new Mutex();

	clientState: ClientState = ClientState.Unknown;
	listeners: CallableFunction[] = [];

	login = async ({ username, password, server }: LoginParams) => {
		const release = await this.mutex.acquire();

		//await new Promise(r => setTimeout(r, 2000));
		console.log("starting sdk...");
		await invoke("reset");
		try {
			await invoke("login", {
				params: {
					user_name: username,
					password: password,
					homeserver: server,
				},
			});

			console.log("logged in...");
			this.clientState = ClientState.LoggedIn;
		} catch (e) {
			console.log("login failed", e);
			this.clientState = ClientState.LoggedOut;
		}

		this.emit();
		release();
	};

	getTimelineStore = async (roomId: string) => {
		if (roomId === "") return;
		const release = await this.mutex.acquire();
		release();
		let store = this.timelineStores.get(roomId);
		if (!store) {
			store = new TimelineStore(roomId);
			this.timelineStores.set(roomId, store);
		}
		return store;
	};

	getRoomListStore = async () => {
		const release = await this.mutex.acquire();
		release();
		this.roomListStore ||= new RoomListStore();
		return this.roomListStore;
	};

	subscribe = (listener: any) => {
		this.listeners = [...this.listeners, listener];
		return () => {
			this.listeners = this.listeners.filter((l) => l !== listener);
		};
	};

	getSnapshot = (): ClientState => {
		return this.clientState;
	};

	emit = () => {
		for (const listener of this.listeners) {
			listener();
		}
	};
}

export default ClientStore;
