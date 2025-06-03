import { Mutex } from "async-mutex";
import { applyDiff } from "./DiffUtils.ts";
import {
    Membership,
    type RoomInfo,
    type RoomInterface,
    RoomListEntriesDynamicFilterKind_Tags,
    type RoomListEntriesUpdate,
    type RoomListServiceInterface,
} from "./index.web";

import { FILTERS } from "./Filter";

export enum RoomListEntry {
    Empty = 0,
    Invalidated = 1,
    Filled = 2,
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

export interface NotificationState {
    hasAnyNotificationOrActivity: boolean;
    isUnsentMessage: boolean;
    invited: boolean;
    isMention: boolean;
    isActivityNotification: boolean;
    isNotification: boolean;
    count: number;
    muted: boolean;
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

    getLatestEvent = (): Event | undefined => {
        return undefined;
        // return this.info?.latest_event?.event?.event;
    };

    getNotifications = (): NotificationState => {
        return {
            count: Number(this.info.notificationCount),
            isMention: Number(this.info.numUnreadMentions) > 0,
            isNotification: Number(this.info.numUnreadNotifications) > 0,
            isActivityNotification: Number(this.info.numUnreadMessages) > 0,
            hasAnyNotificationOrActivity:
                Number(this.info.notificationCount) > 0,
            invited: this.info.membership === Membership.Invited,
            muted: false, // TODO
            isUnsentMessage: false, // TODO
        };
    };

    hasVideoCall = (): boolean => {
        return Boolean(this.info.hasRoomCall);
    };
}

class RoomListStore {
    running = false;
    rooms: Array<RoomListItem> = [];
    listeners: Array<CallableFunction> = [];
    filter = RoomListEntriesDynamicFilterKind_Tags.NonLeft;

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
            console.log("Apply filter", this.filter);
            controller.setFilter(FILTERS[this.filter].method);
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

    toggleFilter = (filter: RoomListEntriesDynamicFilterKind_Tags) => {
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
