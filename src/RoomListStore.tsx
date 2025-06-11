import { debounce } from "lodash-es";
import type { ListRange } from "react-virtuoso";
import { applyDiff } from "./DiffUtils.ts";
import { FILTERS, type SupportedFilters } from "./Filter";
import {
    type EventTimelineItem,
    type RoomInfo,
    type RoomInterface,
    type RoomListDynamicEntriesControllerInterface,
    RoomListEntriesDynamicFilterKind_Tags,
    type RoomListEntriesUpdate,
    type RoomListEntriesWithDynamicAdaptersResultInterface,
    RoomListLoadingState,
    type RoomListServiceInterface,
    type SyncServiceInterface,
    type TaskHandleInterface,
} from "./index.web";
import { StateStore } from "./StateStore.tsx";

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

interface RoomListViewState {
    rooms: Array<RoomListItem>;
    numRooms: number;
    filter: SupportedFilters;
}

class RoomListStore extends StateStore<RoomListViewState> {
    running = false;
    controller?: RoomListDynamicEntriesControllerInterface;
    activeRoom?: string;
    loadingState?: RoomListLoadingState;
    stateStream?: TaskHandleInterface;
    visibleRooms: string[] = [];

    constructor(
        private readonly syncServiceInterface: SyncServiceInterface,
        private readonly roomListService: RoomListServiceInterface,
    ) {
        super({
            rooms: [],
            numRooms: -1,
            filter: RoomListEntriesDynamicFilterKind_Tags.NonLeft,
        });
        console.log("RoomListStore constructed");
    }

    private parseRoom(room: RoomInterface): RoomListItem {
        const rli = new RoomListItem(room);
        return rli;
    }

    onUpdate = async (updates: RoomListEntriesUpdate[]): Promise<void> => {
        this.setState({
            ...this.viewState,
            rooms: applyDiff(this.viewState.rooms, updates, this.parseRoom),
        });
    };

    onLoadingStateUpdate = (state: RoomListLoadingState) => {
        this.loadingState = state;
        if (
            RoomListLoadingState.Loaded.instanceOf(state) &&
            state.inner.maximumNumberOfRooms !== undefined
        ) {
            this.setState({
                ...this.viewState,
                numRooms: state.inner.maximumNumberOfRooms,
            });
        }
    };

    roomListEntriesWithDynamicAdapters?: RoomListEntriesWithDynamicAdaptersResultInterface;
    run = () => {
        console.log("Running roomlist store with state", this.running);

        (async () => {
            console.log("subscribing to roomlist");

            this.running = true;
            const abortController = new AbortController();
            const roomList = await this.roomListService.allRooms({
                signal: abortController.signal,
            });
            const { state, stateStream } = roomList.loadingState({
                onUpdate: this.onLoadingStateUpdate,
            });
            this.stateStream = stateStream;
            this.loadingState = state;
            this.roomListEntriesWithDynamicAdapters ||=
                roomList.entriesWithDynamicAdapters(50, this);
            this.controller =
                this.roomListEntriesWithDynamicAdapters.controller();
            console.log("Apply filter", this.viewState.filter);
            this.controller.setFilter(FILTERS[this.viewState.filter].method);
            this.controller.addOnePage();
        })();
    };

    subscribeToRooms = (): void => {
        const rooms = new Set(this.visibleRooms);
        if (this.activeRoom) rooms.add(this.activeRoom);
        this.roomListService.subscribeToRooms([...rooms]);
    };

    subscribeToRoomsDebounced = debounce(
        (): void => {
            this.subscribeToRooms();
        },
        500,
        { trailing: true },
    );

    setActiveRoom = (roomId: string) => {
        this.activeRoom = roomId;
        this.subscribeToRooms();
    };

    rangeChanged = (range: ListRange): void => {
        this.visibleRooms = this.viewState.rooms
            .slice(range.startIndex, range.endIndex)
            .map((room) => room.roomId);
        this.subscribeToRoomsDebounced();
    };

    loadMore = (): void => {
        console.log("Loading more rooms", this.loadingState?.tag);
        this.controller?.addOnePage();
    };

    toggleFilter = (filter: SupportedFilters) => {
        console.log("Toggling filter", filter, this.viewState.filter);
        if (filter === this.viewState.filter) {
            console.log("Filter is already set, resetting to 'All'");
            this.viewState.filter =
                RoomListEntriesDynamicFilterKind_Tags.NonLeft;
        } else {
            console.log("Setting filter to", filter);
            this.viewState.filter = filter;
        }

        this.run();
    };

    isAllFilter = (): boolean => {
        return (
            this.viewState.filter ===
            RoomListEntriesDynamicFilterKind_Tags.NonLeft
        );
    };
}

export default RoomListStore;
