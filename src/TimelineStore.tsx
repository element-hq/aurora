import { invoke } from "@tauri-apps/api/tauri";

class TimelineStore {

    items: Array<any> = [];
    listeners: Array<CallableFunction> = [];

    run = () => {
        (async () => {
            console.log("starting sdk...");
            await invoke("login", {
                params: {
                    homeserver: "https://matrix.org",
                    user_name: "matthewtest",
                    password: "",
                }
            });
        
            console.log("subscribing to timeline...");
            const timeline_items = await invoke("subscribe_timeline", {
                roomId: "!QQpfJfZvqxbCfeDgCj:matrix.org",
            });
        
            console.log("timeline items");
            console.log(JSON.stringify(timeline_items, undefined, 4));
        
            // FIXME: infinite loop breaks hot reloading, probably
            while(true) {
                const diff: any = await invoke("get_timeline_update");
                console.log("timeline diff", diff);
                //console.log(JSON.stringify(diff, undefined, 4));
                
                const k = Object.keys(diff)[0];
                const v = Object.values(diff)[0] as any;
                switch (k) {
                    case "Set":
                        this.items[v.index] = v.value;
                        this.items = [...this.items];
                        break;
                    case "PushBack":
                        this.items = [...this.items, v.value];
                        break;
                    case "PushFront":
                        this.items = [v.value, ...this.items];
                        break;
                    case "Clear":
                        this.items = [];
                        break;
                    case "PopFront":
                        this.items.pop();
                        this.items = [...this.items];
                        break;
                    case "PopBack":
                        this.items.shift();
                        this.items = [...this.items];
                        break;    
                    case "Insert":
                        this.items.splice(v.index, 0, v.value);
                        this.items = [...this.items];
                        break;
                    case "Remove":
                        this.items.splice(v.index, 1);
                        this.items = [...this.items];
                        break;
                    case "Truncate":
                        this.items = this.items.slice(0, v.length);
                        break;
                    case "Reset":
                        this.items = [...v.values];
                        break;
                    case "Append":
                        this.items = [...this.items, ...v.values];
                        break;
                }
                this.emit();
            }
        })();
    };

    getSnapshot = (): Array<any> => {
        return this.items;
    }

    subscribe = (listener: any) => {
        this.listeners = [...this.listeners, listener];
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    };

    emit = () => {
        for (let listener of this.listeners) {
            listener();
        }        
    }   
}

export default TimelineStore;