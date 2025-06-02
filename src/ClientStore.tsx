import { Mutex } from "async-mutex";
import RoomListStore from "./RoomListStore.tsx";
import TimelineStore from "./TimelineStore.tsx";
import {
	ClientBuilder,
	type ClientInterface,
	LogLevel,
	type RoomListServiceInterface,
	SlidingSyncVersionBuilder,
	type SyncServiceInterface,
	initPlatform,
} from "./index.web.ts";

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
	client?: ClientInterface;
	syncService?: SyncServiceInterface;
	roomListService?: RoomListServiceInterface;

	mutex: Mutex = new Mutex();

	// XXX: if we had any form of persistence then the state would be unknown until we loaded it,
	// for now we do not so we initialise in a logged out state
	clientState: ClientState = ClientState.LoggedOut;
	listeners: CallableFunction[] = [];

	login = async ({ username, password, server }: LoginParams) => {
		const release = await this.mutex.acquire();
		const client = await new ClientBuilder()
			.slidingSyncVersionBuilder(SlidingSyncVersionBuilder.DiscoverNative)
			.homeserverUrl(server)
			.build();

		console.log("starting sdk...");
		try {
			initPlatform(
				{
					logLevel: LogLevel.Trace,
					traceLogPacks: [],
					extraTargets: [],
					writeToStdoutOrSystem: true,
					writeToFiles: undefined,
					sentryDsn: undefined,
				},
				true,
			);

			await client.login(username, password, "rust-sdk", undefined);
			console.log("logged in...");
			this.client = client;
			this.clientState = ClientState.LoggedIn;
		} catch (e) {
			console.log("login failed", e, e.inner);
			this.clientState = ClientState.Unknown;
			this.emit();
			release();
			return;
		}

		try {
			const syncServiceBuilder = client.syncService();
			this.syncService = await syncServiceBuilder.finish();
			this.roomListService = this.syncService.roomListService();
			await this.syncService.start();
			console.log("syncing...");
		} catch (e) {
			console.log("syncing failed", e, e.inner);
			this.clientState = ClientState.Unknown;
			this.emit();
			release();
			return;
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
		this.roomListStore ||= new RoomListStore(
			this.client!,
			this.roomListService!,
		);
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
