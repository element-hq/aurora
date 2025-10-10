import { MemberListStore } from "./MemberList/MemberListStore.tsx";
import RoomListStore from "./RoomListStore.tsx";
import type { SessionStore } from "./SessionStore";
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
import { printRustError } from "./utils.ts";

interface LoginParams {
    username: string;
    password: string;
    server: string;
}

export enum ClientState {
    Unknown = 0,
    LoadingSession = 1,
    LoggedOut = 3,
    LoggingIn = 4,
    LoggedIn = 2,
}

class ClientStore {
    timelineStore?: TimelineStore;
    roomListStore?: RoomListStore;
    client?: ClientInterface;
    syncService?: SyncServiceInterface;
    memberListStore?: MemberListStore;
    roomListService?: RoomListServiceInterface;

    clientState: ClientState = ClientState.Unknown;
    listeners: CallableFunction[] = [];

    constructor(
        private sessionStore: SessionStore,
        private userIdForLoading?: string,
    ) {}

    async registerServiceWorker() {
        const registration = await navigator.serviceWorker.register("sw.js");
        if (!registration) {
            throw new Error("Service worker registration failed");
        }

        navigator.serviceWorker.addEventListener(
            "message",
            this.onServiceWorkerPostMessage,
        );
        await registration.update();
    }

    private onServiceWorkerPostMessage = (event: MessageEvent): void => {
        if (!this.client) return;
        try {
            if (
                event.origin === window.origin &&
                (event.data as any)?.type === "userinfo" &&
                (event.data as any)?.responseKey
            ) {
                const accessToken = this.client.session().accessToken;
                const homeserver = this.client.homeserver();
                event.source?.postMessage({
                    responseKey: (event.data as any).responseKey,
                    accessToken,
                    homeserver,
                });
            }
        } catch (e) {
            console.error("Error responding to service worker: ", e);
        }
    };

    getClientBuilder = () =>
        new ClientBuilder().slidingSyncVersionBuilder(
            SlidingSyncVersionBuilder.DiscoverNative,
        );

    tryLoadSession = async () => {
        this.clientState = ClientState.LoadingSession;
        this.emit();
        try {
            // No session to load
            // For the first login, we don't have a user ID yet
            if (!this.userIdForLoading) throw new Error("No user ID provided");

            const sessions = this.sessionStore.load();
            if (!sessions) throw new Error("No sessions found");

            const session = sessions[this.userIdForLoading];
            if (!session) {
                throw new Error("No session found");
            }

            const client = await this.getClientBuilder()
                .homeserverUrl(session.homeserverUrl)
                .build();
            await client.restoreSession(session);

            this.client = client;
            this.clientState = ClientState.LoggedIn;
        } catch (e) {
            printRustError("Failed to restore session", e);
            this.clientState = ClientState.LoggedOut;
            this.emit();
            return;
        }

        await this.sync();
        this.emit();
    };

    logout = () => {
        this.sessionStore.clear(this.client?.userId()!);
        this.client = undefined;
        this.timelineStore = undefined;
        this.roomListStore = undefined;
        this.roomListService = undefined;
        this.syncService = undefined;
        this.clientState = ClientState.LoggedOut;
        this.emit();
    };

    login = async ({ username, password, server }: LoginParams) => {
        this.clientState = ClientState.LoggingIn;
        this.emit();
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
            return;
        }

        await this.sync();
        this.emit();
    };

    sync = async () => {
        this.registerServiceWorker();

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

    getTimelineStore = (roomId: string) => {
        if (roomId === "") return;
        if (this.timelineStore?.room.id() !== roomId) {
            this.timelineStore?.stop();
            const store = new TimelineStore(this.client!.getRoom(roomId)!);
            store.run();
            this.timelineStore = store;
        }
        return this.timelineStore;
    };

    getRoomListStore = () => {
        console.log("getRoomListStore called");
        if (!this.roomListStore) {
            const store = new RoomListStore(
                this.syncService!,
                this.roomListService!,
            );
            store.run();
            this.roomListStore = store;
        }
        return this.roomListStore;
    };

    getMemberListStore = (roomId: string) => {
        if (roomId === "") return;
        if (this.memberListStore?.roomId !== roomId) {
            const store = new MemberListStore(roomId, this.client!);
            store.run();
            this.memberListStore = store;
        }
        return this.memberListStore;
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
