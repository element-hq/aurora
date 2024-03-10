import { invoke } from "@tauri-apps/api/tauri";
import { applyDiff } from "./DiffUtils.ts";
import { Mutex } from 'async-mutex';

// XXX: should we use purely abstract interfaces here, and entirely separate the code
// for parsing the JSON from the types (rather than using a mix of classes and types)?

interface SenderProfile {
    avatar_url: string,
    display_name: string,
    display_name_ambiguous: boolean,
}

export enum TimelineItemKind {
    Event,
    Virtual,
}

export class TimelineItem {
    item: any;
    kind: TimelineItemKind;

    constructor(item: any) {
        this.item = item;
        this.kind = TimelineItemKind[Object.keys(item.kind)[0] as keyof typeof TimelineItemKind];
    }

    getInternalId = (): number => {
        return this.item.internal_id;
    }
}

export enum VirtualTimelineItemInnerType {
    DayDivider,
    ReadMarker,
}

export class VirtualTimelineItem extends TimelineItem {
    virtualItem?: VirtualTimelineItemInner;

    constructor(item: any) {
        super(item);
        const type = (typeof item.kind.Virtual === 'string') ?
            VirtualTimelineItemInnerType[item.kind.Virtualtype as keyof typeof VirtualTimelineItemInnerType] :
            VirtualTimelineItemInnerType[Object.keys(item.kind.Virtual)[0] as keyof typeof VirtualTimelineItemInnerType];

            switch (type) {
            case VirtualTimelineItemInnerType.DayDivider:
                this.virtualItem = new DayDivider(item.kind.Virtual);
                break;
            case VirtualTimelineItemInnerType.ReadMarker:
                this.virtualItem = new ReadMarker(item.kind.Virtual);
                break;
            default:
                console.error("unrecognised virtual item", item.kind.Virtual);
        }
    }
}

export class VirtualTimelineItemInner {
    innerItem: any;
    type: VirtualTimelineItemInnerType;

    constructor(innerItem: any) {
        this.innerItem = innerItem;
        this.type = VirtualTimelineItemInnerType[Object.keys(innerItem)[0] as keyof typeof VirtualTimelineItemInnerType];
    }
}

export class DayDivider extends VirtualTimelineItemInner {
    getDate = (): Date => {
        return new Date(this.innerItem.DayDivider);
    }
}

export class ReadMarker extends VirtualTimelineItemInner {
}

interface MessageType {
    body: string,
    msgtype: string,
    format?: string,
    formatted_body?: string,
}

interface Message {
    edited?: boolean,
    in_reply_to?: string,
    msgtype?: MessageType,
    thread_root?: string,
}

enum ContentType {
    Message,
}

class Content {
    protected content: any;
    type: String;

    constructor(content: any) {
        this.content = content;
        this.type = Object.keys(content)[0];
    }
}

export class MessageContent extends Content {
    getContent = (): Message => {
        return this.content.Message;
    }
}

export class EventTimelineItem extends TimelineItem {
    content: Content;

    constructor(item: any) {
        super(item);
        const contentType = Object.keys(this.item.kind.Event.content)[0];
        switch(contentType) {
            case ContentType[ContentType.Message]:
                this.content = new MessageContent(this.item.kind.Event.content);
                break;
            default:
                this.content = new Content(this.item.kind.Event.content);
        }
    }

    getSenderProfile  = (): SenderProfile | undefined => {
        return this.item.kind.Event.sender_profile.Ready;
    }

    getSender = (): string => {
        return this.item.kind.Event.sender;
    }

    getContent = (): Content => {
        return this.content;
    }

    getTimestamp = (): number => {
        return this.item.kind.Event.timestamp;
    }
}

class TimelineStore {

    roomId: string;
    running: Boolean = false;
    items: TimelineItem[] = [];
    listeners: CallableFunction[] = [];

    // for now, lock between subs/unsubs across all timeline instances
    // hence static, until the rust layer can handle multiple timelines simultaneously
    static mutex: Mutex = new Mutex();

    constructor(roomId: string) {
        this.roomId = roomId;
    }

    private parseItem(item: any): TimelineItem {
        const kind: TimelineItemKind = TimelineItemKind[Object.keys(item.kind)[0] as keyof typeof TimelineItemKind]
        switch (kind) {
            case TimelineItemKind.Event:
                return new EventTimelineItem(item);
            case TimelineItemKind.Virtual:
                return new VirtualTimelineItem(item);
        }
    }

    sendMessage = async (msg: string) => {
        await invoke("send_message", { roomId: this.roomId, msg });
    }

    run = () => {
        if (!this.roomId) return;
        
        (async () => {
            console.log("=> acquiring lock while subscribing to", this.roomId);
            let release = await TimelineStore.mutex.acquire();
            console.log("<= got lock while subscribing to", this.roomId);
            if (this.running) console.warn("got timeline lock while TLS already running for", this.roomId);
            console.log("subscribing to timeline", this.roomId);
            const rawItems: any[] = await invoke("subscribe_timeline", { roomId: this.roomId });
            console.log("subscribed to timeline", this.roomId);
            this.running = true;

            this.items = rawItems.map(this.parseItem);
            this.emit();

            //this.logItems(timeline_items);
        
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
                if (!diff) {
                    console.info("stopping timeline poll due to empty diff");
                    this.running = false;
                    break;
                };

                //console.log("timeline diff", diff);
                //console.log(JSON.stringify(diff, undefined, 4));
                
                this.items = applyDiff<TimelineItem>(diff, this.items, this.parseItem);
                this.emit();
            }            
            console.log("== releasing lock after timeline subscription & polling", this.roomId);
            release();
            console.log("no longer subscribed to", this.roomId);
        })();
    };

    subscribe = (listener: any) => {
        this.listeners = [...this.listeners, listener];

        return () => {
            (async () => {
                // XXX: we should grab a mutex to avoid overlapping unsubscribes
                // and ensure we only unsubscribe from the timeline we think we're
                // unsubscribing to.
                await invoke("unsubscribe_timeline", { roomId: this.roomId });
                this.running = false;
            })();
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    };

    getSnapshot = (): TimelineItem[] => {
        return this.items;
    }

    emit = () => {
        for (let listener of this.listeners) {
            listener();
        }        
    }   

    // private logItems(timeline_items: any[]) {
    //     console.log("timeline items", timeline_items);
    //     for (let i = 0; i < timeline_items.length; i++) {
    //         const value = timeline_items[i];
    //         const kind = value.kind ? Object.keys(value.kind)[0] : null;
    //         const event = value?.kind.Event;
    //         const content = event?.content;
    //         console.log(`Item index=${i} internal_id=${value.internal_id} sender=${event?.sender_profile.Ready ?
    //                 event?.sender_profile.Ready.display_name :
    //                 event?.sender} kind=${kind} content=${content?.Message?.msgtype?.body || content}`);
    //     }
    // }

    // private logDiff(k: string, v: any) {
    //     const kind = v.value?.kind ? Object.keys(v.value?.kind)[0] : null;
    //     const event = v.value?.kind.Event;
    //     const content = v.value?.kind.Event?.content;

    //     console.log(`${k} index=${v.index} internal_id=${v.value?.internal_id} sender=${event?.sender_profile.Ready ?
    //             event?.sender_profile.Ready.display_name :
    //             event?.sender} kind=${kind} content=${content?.Message?.msgtype?.body || content}`);
    // }
}

export default TimelineStore;