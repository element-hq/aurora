import { invoke } from "@tauri-apps/api/tauri";

class TimelineStore {

    roomId: string;
    running: Boolean = false;
    items: Array<any> = [];
    listeners: Array<CallableFunction> = [];

    constructor(roomId: string) {
        this.roomId = roomId;
    }

    run = () => {
        if (!this.roomId) return;
        
        if (this.running) {
            console.log("timeline already subscribed");
            return;
        }

        this.running = true;

        (async () => {
            console.log("subscribing to timeline", this.roomId);
            const timeline_items: Array<any> = await invoke("subscribe_timeline", { roomId: this.roomId });

            this.items = timeline_items;
            this.emit();

            this.logItems(timeline_items);
            //console.log(JSON.stringify(timeline_items, undefined, 4));
        
            // TODO: recover from network outages and laptop sleeping
            while(this.running) {
                //await new Promise(r => setTimeout(r, 250));

                let diff: any = undefined;
                try {
                    diff = await invoke("get_timeline_update");
                }
                catch (error) {
                    console.info(error);
                }
                if (!diff) continue;

                //console.log("timeline diff", diff);
                //console.log(JSON.stringify(diff, undefined, 4));
                
                const k = Object.keys(diff)[0];
                const v = Object.values(diff)[0] as any;
                this.logDiff(k, v);

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

            console.log("no longer subscribed to", this.roomId)
        })();
    };

    subscribe = (listener: any) => {
        this.listeners = [...this.listeners, listener];

        return () => {
            this.running = false;
            (async () => { await invoke("unsubscribe_timeline", { roomId: this.roomId }); })();
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    };

    getSnapshot = (): Array<any> => {
        return this.items;
    }

    emit = () => {
        for (let listener of this.listeners) {
            listener();
        }        
    }   

    private logItems(timeline_items: any[]) {
        console.log("timeline items", timeline_items);
        for (let i = 0; i < timeline_items.length; i++) {
            const value = timeline_items[i];
            const kind = value.kind ? Object.keys(value.kind)[0] : null;
            const event = value?.kind.Event;
            const content = event?.content;
            console.log(`Item index=${i} internal_id=${value.internal_id} sender=${event?.sender_profile.Ready ?
                    event?.sender_profile.Ready.display_name :
                    event?.sender} kind=${kind} content=${content?.Message?.msgtype?.body || content}`);
        }
    }

    private logDiff(k: string, v: any) {
        const kind = v.value?.kind ? Object.keys(v.value?.kind)[0] : null;
        const event = v.value?.kind.Event;
        const content = v.value?.kind.Event?.content;

        console.log(`${k} index=${v.index} internal_id=${v.value?.internal_id} sender=${event?.sender_profile.Ready ?
                event?.sender_profile.Ready.display_name :
                event?.sender} kind=${kind} content=${content?.Message?.msgtype?.body || content}`);
    }
}

export default TimelineStore;