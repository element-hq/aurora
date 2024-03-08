import { invoke } from "@tauri-apps/api/tauri";

class RoomListStore {

    running: Boolean = false;
    rooms: Array<any> = [];
    listeners: Array<CallableFunction> = [];

    constructor() {
        console.log("RoomListStore constructed");
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
            const rooms: Array<any> = await invoke("subscribe_roomlist");
            console.log("subscribed to room list");

            this.rooms = rooms;
            this.emit();
        
            // TODO: recover from network outages and laptop sleeping
            while(this.running) {
                console.log("waiting for roomlist_update");
                const diffs: any = await invoke("get_roomlist_update");

                for (const diff of diffs) {                
                    const k = Object.keys(diff)[0];
                    const v = Object.values(diff)[0] as any;

                    console.log("got roomlist_update", diff);

                    // XXX: deduplicate VecDiff processing with the TimelineStore
                    switch (k) {
                        case "Set":
                            this.rooms[v.index] = v.value;
                            this.rooms = [...this.rooms];
                            break;
                        case "PushBack":
                            this.rooms = [...this.rooms, v.value];
                            break;
                        case "PushFront":
                            this.rooms = [v.value, ...this.rooms];
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
                            this.rooms.splice(v.index, 0, v.value);
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
                            this.rooms = [...v.values];
                            break;
                        case "Append":
                            this.rooms = [...this.rooms, ...v.values];
                            break;
                    }
                }
                this.emit();
            }

            console.log("stopped polling");
        })();
    };

    getSnapshot = (): Array<any> => {
        return this.rooms;
    }

    subscribe = (listener: any) => {
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