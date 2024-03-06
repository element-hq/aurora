import { invoke } from "@tauri-apps/api/tauri";

class TimelineStore {

    items: Array<any> = [];
    listeners: Array<CallableFunction> = [];

    run = () => {
        (async () => {
            await new Promise(r => setTimeout(r, 2000));
            
            console.log("starting sdk...");
            await invoke("login", {
                params: {
                    homeserver: "https://matrix.org",
                    user_name: "matthewtest",
                    password: "",
                }
            });
        
            console.log("subscribing to timeline...");
            const timeline_items: Array<any> = await invoke("subscribe_timeline", {
                roomId: "!QQpfJfZvqxbCfeDgCj:matrix.org",
            });

            this.items = timeline_items;
            this.emit();

            console.log("timeline items", timeline_items);
            for (let i = 0; i < timeline_items.length; i++) {
                const value = timeline_items[i];
                const kind = value.kind ? Object.keys(value.kind)[0] : null;
                const event = value?.kind.Event;
                const content = event?.content;
                console.log(`Item index=${i} internal_id=${value.internal_id} sender=${
                    event?.sender_profile.Ready ?
                    event?.sender_profile.Ready.display_name :
                    event?.sender
                } kind=${kind} content=${content?.Message?.msgtype?.body || content}`);
            }

            //console.log(JSON.stringify(timeline_items, undefined, 4));
        
            while(true) {
                await new Promise(r => setTimeout(r, 250));

                const diff: any = await invoke("get_timeline_update");
                //console.log("timeline diff", diff);
                //console.log(JSON.stringify(diff, undefined, 4));
                
                const k = Object.keys(diff)[0];
                const v = Object.values(diff)[0] as any;
                const kind = v.value?.kind ? Object.keys(v.value?.kind)[0] : null;
                const event = v.value?.kind.Event;
                const content = v.value?.kind.Event?.content;

                console.log(`${k} index=${v.index} internal_id=${v.value?.internal_id} sender=${
                    event?.sender_profile.Ready ?
                    event?.sender_profile.Ready.display_name :
                    event?.sender
                } kind=${kind} content=${content?.Message?.msgtype?.body || content}`);

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
                        this.items.shift();
                        this.items = [...this.items];
                        break;
                    case "PopBack":
                        this.items.pop();
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