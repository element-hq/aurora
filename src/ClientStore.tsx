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
import { printRustError } from "./utils.ts";

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
            printRustError("login failed", e);
            this.clientState = ClientState.Unknown;
            this.emit();
            release();
            return;
        }

        try {
            const syncServiceBuilder = client.syncService();
            this.syncService = await syncServiceBuilder
                .withOfflineMode()
                .finish();
            this.roomListService = this.syncService.roomListService();
            await this.syncService.start();
            console.log("syncing...");
        } catch (e) {
            printRustError("syncing failed", e);
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
        const release = await this.mutex.acquire(); // to block during login
        release();
        let store = this.timelineStores.get(roomId);
        if (!store) {
            store = new TimelineStore(this.client!.getRoom(roomId)!);
            this.timelineStores.set(roomId, store);
        }
        return store;
    };

    getRoomListStore = async () => {
        await this.mutex.waitForUnlock(); // to block during login
        this.roomListStore ||= new RoomListStore(
            this.syncService!,
            this.roomListService!,
        );
        return this.roomListStore;
    };

    subscribe = (listener: CallableFunction) => {
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
