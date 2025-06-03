import { Mutex } from "async-mutex";
import RoomListStore from "./RoomListStore.tsx";
import TimelineStore from "./TimelineStore.tsx";
import {
    ClientBuilder,
    type ClientInterface,
    LogLevel,
    type RoomListServiceInterface,
    Session,
    SlidingSyncVersionBuilder,
    type SyncServiceInterface,
    initPlatform,
} from "./index.web.ts";
import { MemberListStore } from "./MemberList/MemberListStore.tsx";
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

/**
 * Stores Matrix client session (username, token, etc) in localStorage
 */
class SessionStore {
    load(): Session | undefined {
        const stored = localStorage.getItem("mx_session");
        const session = stored ? JSON.parse(stored) : undefined;
        return session ? Session.new(session) : undefined;
    }
    save(session: Session): void {
        localStorage.setItem("mx_session", JSON.stringify(session));
    }

    clear(): void {
        localStorage.removeItem("mx_session");
    }
}

class ClientStore {
    sessionStore = new SessionStore();

    timelineStores: Map<string, TimelineStore> = new Map();
    roomListStore?: RoomListStore;
    client?: ClientInterface;
    syncService?: SyncServiceInterface;
    memberListStore: Map<string, MemberListStore> = new Map();
    roomListService?: RoomListServiceInterface;

    mutex: Mutex = new Mutex();

    clientState: ClientState = ClientState.Unknown;
    listeners: CallableFunction[] = [];

    getClientBuilder = () =>
        new ClientBuilder().slidingSyncVersionBuilder(
            SlidingSyncVersionBuilder.DiscoverNative,
        );

    tryLoadSession = async () => {
        const release = await this.mutex.acquire();
        try {
            const session = this.sessionStore.load();
            if (!session) {
                this.clientState = ClientState.LoggedOut;
                this.emit();
                return;
            }

            const client = await this.getClientBuilder()
                .homeserverUrl(session.homeserverUrl)
                .build();
            await client.restoreSession(session);

            this.client = client;
            this.clientState = ClientState.LoggedIn;
        } catch (e) {
            printRustError("Failed to restore session", e);
        } finally {
            release();
        }

        await this.sync();

        this.emit();
        release();
    };

    logout = () => {
        this.sessionStore.clear();
        this.client = undefined;
        this.timelineStores = new Map();
        this.roomListStore = undefined;
        this.roomListService = undefined;
        this.syncService = undefined;
        this.clientState = ClientState.LoggedOut;
        this.emit();
    };

    login = async ({ username, password, server }: LoginParams) => {
        const release = await this.mutex.acquire();
        const client = await this.getClientBuilder()
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

            this.sessionStore.save(client.session());

            this.client = client;
            this.clientState = ClientState.LoggedIn;
        } catch (e) {
            printRustError("login failed", e);
            this.clientState = ClientState.Unknown;
            this.emit();
            release();
            return;
        }

        await this.sync();

        this.emit();
        release();
    };

    sync = async () => {
        try {
            const syncServiceBuilder = this.client!.syncService();
            this.syncService = await syncServiceBuilder
                .withOfflineMode()
                .finish();
            this.roomListService = this.syncService.roomListService();
            await this.syncService.start();
            console.log("syncing...");
            this.emit();
        } catch (e) {
            printRustError("syncing failed", e);
            this.clientState = ClientState.Unknown;
            return;
        }
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

    getMemberListStore = async (roomId: string) => {
        const release = await this.mutex.acquire();
        release();
        let store = this.memberListStore.get(roomId);
        if (!store) {
            store = new MemberListStore(roomId, this.client!);
            this.memberListStore.set(roomId, store);
        }
        return store;
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
