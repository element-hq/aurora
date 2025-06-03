import { applyDiff } from "./DiffUtils.ts";
import {
    type EventTimelineItem,
    type RoomInfo,
    type RoomInterface,
    type RoomListDynamicEntriesControllerInterface,
    RoomListEntriesDynamicFilterKind,
    RoomListEntriesDynamicFilterKind_Tags,
    type RoomListEntriesUpdate,
    RoomListEntriesWithDynamicAdaptersResult,
    type RoomListEntriesWithDynamicAdaptersResultInterface,
    RoomListLoadingState,
    type RoomListServiceInterface,
    type SyncServiceInterface,
} from "./index.web";

import { FILTERS, type SupportedFilters } from "./Filter";

interface Event {
    sender: string;
    type: string;
    origin_server_ts: number;
    content: {
        body?: string;
        msgtype?: string;
    };
}

export interface NotificationState {
    hasAnyNotificationOrActivity: boolean;
    invited: boolean;
    isMention: boolean;
    isActivityNotification: boolean;
    isNotification: boolean;
}

export class RoomListItem {
    info?: RoomInfo;
    latestEvent?: EventTimelineItem;
    listeners: CallableFunction[] = [];

    constructor(private readonly room: RoomInterface) {
        this.load();
    }

    get roomId() {
        return this.room.id();
    }

    load = async () => {
        [this.info, this.latestEvent] = await Promise.all([
            this.room.roomInfo(),
            this.room.latestEvent(),
        ]);
        this.emit();
    };

    subscribe = (listener: CallableFunction) => {
        this.listeners = [...this.listeners, listener];

        return () => {
            this.listeners = this.listeners.filter((l) => l !== listener);
        };
    };

    getSnapshot = (): RoomInfo | undefined => {
        return this.info;
    };

    emit = () => {
        for (const listener of this.listeners) {
            listener();
        }
    };

    getName = () => {
        return this.info?.displayName;
    };

    getAvatar = () => {
        return this.info?.avatarUrl;
    };

    hasVideoCall = (): boolean => {
        return Boolean(this.info?.hasRoomCall);
    };
}

class RoomListStore {
    running = false;
    rooms: Array<RoomListItem> = [];
    numRooms = -1;
    listeners: Array<CallableFunction> = [];
    filter: SupportedFilters = RoomListEntriesDynamicFilterKind_Tags.NonLeft;

    controller?: RoomListDynamicEntriesControllerInterface;

    constructor(
        private readonly syncServiceInterface: SyncServiceInterface,
        private readonly roomListService: RoomListServiceInterface,
    ) {
        console.log("RoomListStore constructed");
    }

    private parseRoom(room: RoomInterface): RoomListItem {
        const rli = new RoomListItem(room);
        return rli;
    }

    onUpdate = async (updates: RoomListEntriesUpdate[]): Promise<void> => {
        this.rooms = applyDiff(this.rooms, updates, this.parseRoom);
        // console.log("@@ roomListUpdated", this.rooms);
        for (const update of updates) {
            console.log("~~update", update.tag, {
                index: (update as any).inner?.index,
                value: (update as any).inner?.value?.id(),
                values: (update as any).inner?.values?.map((l: any) => l.id()),
            });
        }
        this.emit();
    };

    loadingState?: RoomListLoadingState;
    onLoadingStateUpdate = (state: RoomListLoadingState) => {
        this.loadingState = state;
        if (
            RoomListLoadingState.Loaded.instanceOf(state) &&
            state.inner.maximumNumberOfRooms !== undefined
        ) {
            this.numRooms = state.inner.maximumNumberOfRooms;
            this.emit();
        }
    };

    roomListEntriesWithDynamicAdapters?: RoomListEntriesWithDynamicAdaptersResultInterface;
    run = () => {
        console.log("Running roomlist store with state", this.running);

        (async () => {
            // console.log("=> acquiring lock while subscribing to roomlist");
            // console.log("<= got lock while subscribing to roomlist");
            // if (this.running) console.warn("got RLS lock while RLS already running");
            console.log("subscribing to roomlist");

            this.running = true;
            const abortController = new AbortController();
            const roomListInterface = await this.roomListService.allRooms({
                signal: abortController.signal,
            });
            this.loadingState ||= roomListInterface.loadingState({
                onUpdate: this.onLoadingStateUpdate,
            }).state;
            this.roomListEntriesWithDynamicAdapters ||=
                roomListInterface.entriesWithDynamicAdapters(20, this);
            this.controller =
                this.roomListEntriesWithDynamicAdapters.controller();
            console.log("Apply filter", this.filter);
            this.controller.setFilter(FILTERS[this.filter].method);
            this.controller.addOnePage();

            this.emit();
        })();
    };

    snapshot?: {
        rooms: RoomListItem[];
        numRooms: number;
    };
    getSnapshot = (): {
        rooms: RoomListItem[];
        numRooms: number;
    } => {
        return this.snapshot!;
    };

    loadMore = (): void => {
        console.log("Loading more rooms", this.loadingState?.tag);
        this.controller?.addOnePage();
    };

    toggleFilter = (filter: SupportedFilters) => {
        console.log("Toggling filter", filter, this.filter);
        if (filter === this.filter) {
            console.log("Filter is already set, resetting to 'All'");
            this.filter = RoomListEntriesDynamicFilterKind_Tags.NonLeft;
        } else {
            console.log("Setting filter to", filter);
            this.filter = filter;
        }

        this.run();
    };

    subscribe = (listener: CallableFunction) => {
        this.listeners = [...this.listeners, listener];
        return () => {
            this.listeners = this.listeners.filter((l) => l !== listener);
        };
    };

    emit = () => {
        this.snapshot = {
            rooms: this.rooms,
            numRooms: this.numRooms,
        };
        for (const listener of this.listeners) {
            listener();
        }
    };
}

export default RoomListStore;
