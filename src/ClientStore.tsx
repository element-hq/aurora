import { invoke } from "@tauri-apps/api/tauri";
import TimelineStore from "./TimelineStore.tsx";
import RoomListStore from "./RoomListStore.tsx";

class ClientStore {

    timelineStores: Map<String, TimelineStore> = new Map();
    roomListStore: RoomListStore;

    constructor() {
        this.roomListStore = new RoomListStore();
    }

    run = () => {
        (async () => {
            //await new Promise(r => setTimeout(r, 2000));
            await invoke("reset");

            console.log("starting sdk...");
            await invoke("login", {
                params: {
                    homeserver: "https://matrix.org",
                    user_name: "matthewtest",
                    password: "",
                }
            });
        })();
    }

    getTimelineStore = ( roomId: string ) => {
        let store = this.timelineStores.get(roomId);
        if (!store) {
            store = new TimelineStore(roomId);
            this.timelineStores.set(roomId, store);
        }
        return store;
    }

    getRoomListStore = () => this.roomListStore;
}

export default ClientStore;