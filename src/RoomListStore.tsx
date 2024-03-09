import { invoke } from "@tauri-apps/api/tauri";

enum RoomListEntry {
    Empty,
    Invalidated,
    Filled,
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
    }

    getAvatar = () => {
        return this.info?.base_info.avatar?.Original?.content.url;
    }
}

class RoomListStore {

    running: Boolean = false;
    rooms: Array<RoomListItem> = [];
    listeners: Array<CallableFunction> = [];

    constructor() {
        console.log("RoomListStore constructed");
    }

    // turn the wodges of JSON from rust-sdk into something typed
    private async parseRoom(room: any): Promise<RoomListItem> {
        const entry: RoomListEntry = RoomListEntry[Object.keys(room)[0] as keyof typeof RoomListEntry];
        const roomId: string = Object.values(room)[0] as string;
        // XXX: is hammering on invoke like this a good idea?
        const info: any = await invoke("get_room_info", { roomId });
        const rli = new RoomListItem(entry, roomId, info);
        return (rli);
    }

    run = () => {
        console.log("Running roomlist store with state", this.running);

        if (this.running) {
            console.log("roomlist already subscribed");
            return;
        }

        this.running = true;

        (async () => {
            console.log("subscribing to room list");
            const rawRooms: Array<any> = await invoke("subscribe_roomlist");
            console.log("subscribed to room list");

            this.rooms = await Promise.all(rawRooms.map(async room => await this.parseRoom(room)));
            this.emit();
        
            // TODO: recover from network outages and laptop sleeping
            while(this.running) {
                console.log("waiting for roomlist_update");
                const diffs: any = await invoke("get_roomlist_update");

                for (const diff of diffs) {                
                    const k = Object.keys(diff)[0];
                    const v = Object.values(diff)[0] as any;

                    console.log("got roomlist_update", diff);

                    let room: RoomListItem;
                    let rooms: RoomListItem[];

                    // XXX: deduplicate VecDiff processing with the TimelineStore
                    switch (k) {
                        case "Set":
                            room = await this.parseRoom(v.value);
                            this.rooms[v.index] = room;
                            this.rooms = [...this.rooms];
                            break;
                        case "PushBack":
                            room = await this.parseRoom(v.value);
                            this.rooms = [...this.rooms, room];
                            break;
                        case "PushFront":
                            room = await this.parseRoom(v.value);
                            this.rooms = [room, ...this.rooms];
                            break;
                        case "Clear":
                            this.rooms = [];
                            break;
                        case "PopFront":
                            this.rooms.shift();
                            this.rooms = [...this.rooms];
                            break;
                        case "PopBack":
                            this.rooms.pop();
                            this.rooms = [...this.rooms];
                            break;    
                        case "Insert":
                            room = await this.parseRoom(v.value);
                            this.rooms.splice(v.index, 0, room);
                            this.rooms = [...this.rooms];
                            break;
                        case "Remove":
                            this.rooms.splice(v.index, 1);
                            this.rooms = [...this.rooms];
                            break;
                        case "Truncate":
                            this.rooms = this.rooms.slice(0, v.length);
                            break;
                        case "Reset":
                            rooms = await Promise.all(v.values.map(async (room: any) => await this.parseRoom(room)));
                            this.rooms = [...rooms];
                            break;
                        case "Append":
                            rooms = await Promise.all(v.values.map(async (room: any) => await this.parseRoom(room)));
                            this.rooms = [...this.rooms, ...rooms];
                            break;
                    }
                }
                this.emit();
            }

            console.log("stopped polling");
        })();
    };

    getSnapshot = (): RoomListItem[] => {
        return this.rooms;
    }

    subscribe = (listener: CallableFunction) => {
        this.listeners = [...this.listeners, listener];
        return () => {
            console.log("unsubscribing roomlist");
            (async () => { await invoke("unsubscribe_roomlist"); })();
            this.running = false;
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    };

    emit = () => {
        for (let listener of this.listeners) {
            listener();
        }        
    }   
}


export default RoomListStore;