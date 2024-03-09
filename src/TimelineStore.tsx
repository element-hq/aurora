import { invoke } from "@tauri-apps/api/tauri";
import { applyDiff } from "./DiffUtils.ts";

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

export enum VirtualTimelineItemType {
    DayDivider,
    ReadMarker,
}

export class VirtualTimelineItem extends TimelineItem {
    virtualItem: VirtualTimelineItemSubtype;

    constructor(item: any) {
        super(item);
        const type = VirtualTimelineItemType[Object.keys(item.kind.Virtual)[0] as keyof typeof VirtualTimelineItemType];
        switch (type) {
            case VirtualTimelineItemType.DayDivider:
                this.virtualItem = new DayDivider(item.kind.Virtual);
                break;
            case VirtualTimelineItemType.ReadMarker:
                this.virtualItem = new ReadMarker(item.kind.Virtual);
                break;
        }
    }
}

export class VirtualTimelineItemSubtype {
    item: any;
    type: VirtualTimelineItemType;

    constructor(item: any) {
        this.item = item;
        this.type = VirtualTimelineItemType[Object.keys(item)[0] as keyof typeof VirtualTimelineItemType];
    }
}

export class DayDivider extends VirtualTimelineItemSubtype {
    getDate = (): Date => {
        return new Date(this.item.DayDivider);
    }
}

export class ReadMarker extends VirtualTimelineItemSubtype {
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

    run = () => {
        if (!this.roomId) return;
        
        if (this.running) {
            console.log("timeline already subscribed");
            return;
        }

        this.running = true;

        (async () => {
            console.log("subscribing to timeline", this.roomId);
            const rawItems: any[] = await invoke("subscribe_timeline", { roomId: this.roomId });

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
                if (!diff) continue;

                //console.log("timeline diff", diff);
                //console.log(JSON.stringify(diff, undefined, 4));
                
                this.items = applyDiff<TimelineItem>(diff, this.items, this.parseItem);
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