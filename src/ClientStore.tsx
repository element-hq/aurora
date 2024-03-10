import { invoke } from "@tauri-apps/api/tauri";
import TimelineStore from "./TimelineStore.tsx";
import RoomListStore from "./RoomListStore.tsx";

class ClientStore {

    timelineStores: Map<String, TimelineStore> = new Map();
    roomListStore?: RoomListStore;

    startup: Promise<void>;
    resolve: (value: void | PromiseLike<void>) => void;

    constructor() {
        this.resolve = () => {};
        this.startup = new Promise<void>((resolve) => { this.resolve = resolve; });
    }

    run = () => {
        (async () => {
            //await new Promise(r => setTimeout(r, 2000));
            console.log("starting sdk...");
            await invoke("reset");
            await invoke("login", {
                params: {
                    homeserver: "https://matrix.org",
                    user_name: "matthewtest",
                    password: "",
                }
            });
            console.log("logged in...");

            console.log("resolving startup promise");
            this.resolve();
        })();
    }

    getTimelineStore = async ( roomId: string ) => {
        if (roomId === '') return;
        await this.startup;
        let store = this.timelineStores.get(roomId);
        if (!store) {
            store = new TimelineStore(roomId);
            this.timelineStores.set(roomId, store);
        }
        return store;
    }

    getRoomListStore = async () => {
        await this.startup;
        this.roomListStore ||= new RoomListStore();
        return this.roomListStore;
    }
}

export default ClientStore;