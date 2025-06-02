import { invoke } from "@tauri-apps/api/tauri";
import { applyDiff } from "./DiffUtils.ts";
import { Mutex } from "async-mutex";
import {
	ClientInterface,
	Room,
	TimelineChange,
	TimelineDiffInterface,
	TimelineInterface,
	TimelineItemInterface,
} from "./index.web.ts";

// XXX: should we use purely abstract interfaces here, and entirely separate the code
// for parsing the JSON from the types (rather than using a mix of classes and types)?

// XXX: gen these types via uniffi from the rust?
// keeping it in sync manually is going to be very error prone.

export enum TimelineItemKind {
	Event = 0,
	Virtual = 1,
}

export class TimelineItem {
	item: any;
	kind: TimelineItemKind;

	constructor(item: any) {
		this.item = item;
		this.kind =
			TimelineItemKind[
				Object.keys(item.kind)[0] as keyof typeof TimelineItemKind
			];
	}

	getInternalId = (): number => {
		return this.item.internal_id;
	};
}

// VirtualTimelineItems Inner (i.e. item.kind.Virtual) Types

export enum VirtualTimelineItemInnerType {
	DayDivider = 0,
	ReadMarker = 1,
}

export class VirtualTimelineItemInner {
	innerItem: any;
	type: VirtualTimelineItemInnerType;

	constructor(innerItem: any) {
		this.innerItem = innerItem;
		this.type =
			typeof innerItem === "string"
				? VirtualTimelineItemInnerType[
						innerItem as keyof typeof VirtualTimelineItemInnerType
					]
				: VirtualTimelineItemInnerType[
						Object.keys(
							innerItem,
						)[0] as keyof typeof VirtualTimelineItemInnerType
					];
	}
}

export class DayDivider extends VirtualTimelineItemInner {
	getDate = (): Date => {
		return new Date(this.innerItem.DayDivider);
	};
}

export class ReadMarker extends VirtualTimelineItemInner {}

export class VirtualTimelineItem extends TimelineItem {
	virtualItem?: VirtualTimelineItemInner;

	constructor(item: any) {
		super(item);
		const type =
			typeof item.kind.Virtual === "string"
				? VirtualTimelineItemInnerType[
						item.kind.Virtual as keyof typeof VirtualTimelineItemInnerType
					]
				: VirtualTimelineItemInnerType[
						Object.keys(
							item.kind.Virtual,
						)[0] as keyof typeof VirtualTimelineItemInnerType
					];

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

// EventTimelineItem Content types

class Content {
	protected content: any;
	type: string;

	constructor(content: any) {
		this.content = content;
		this.type = typeof content === "string" ? content : Object.keys(content)[0];
	}
}

export enum ContentType {
	Message = 0,
	ProfileChange = 1,
	MembershipChange = 2,
	RedactedMessage = 3,
}

interface Message {
	edited?: boolean;
	in_reply_to?: string;
	msgtype?: {
		body: string;
		msgtype: string;
		format?: string;
		formatted_body?: string;
	};
	thread_root?: string;
}

export class MessageContent extends Content {
	getMessage = (): Message => {
		return this.content.Message;
	};
}

interface ProfileChange {
	avatar_url_change: {
		old?: string;
		new?: string;
	};
	displayname_change: {
		old?: string;
		new?: string;
	};
}

export class ProfileChangeContent extends Content {
	getProfileChange = (): ProfileChange => {
		return this.content.ProfileChange;
	};
}

export enum MembershipChange {
	None = 0,
	Error = 1,
	Joined = 2,
	Left = 3,
	Banned = 4,
	Unbanned = 5,
	Kicked = 6,
	Invited = 7,
	KickedAndBanned = 8,
	InvitationAccepted = 9,
	InvitationRejected = 10,
	InvitationRevoked = 11,
	Knocked = 12,
	KnockAccepted = 13,
	KnockRetracted = 14,
	KnockDenied = 15,
	NotImplemented = 16,
}

interface RoomMembershipChange {
	user_id: string;
	change?: string; // string of type MembershipChange
	content: {
		Original?: {
			displayname?: string;
			avatar_url?: string;
			membership: string;
		};
		Redacted?: {
			membership: string;
		};
	};
}

export class MembershipChangeContent extends Content {
	getMembershipChange = (): RoomMembershipChange => {
		return this.content.MembershipChange;
	};
}

interface SenderProfile {
	avatar_url: string;
	display_name: string;
	display_name_ambiguous: boolean;
}

export class EventTimelineItem extends TimelineItem {
	content: Content;

	constructor(item: any) {
		super(item);
		const contentType = Object.keys(this.item.kind.Event.content)[0];
		switch (contentType) {
			case ContentType[ContentType.Message]:
				this.content = new MessageContent(this.item.kind.Event.content);
				break;
			case ContentType[ContentType.ProfileChange]:
				this.content = new ProfileChangeContent(this.item.kind.Event.content);
				break;
			case ContentType[ContentType.MembershipChange]:
				this.content = new MembershipChangeContent(
					this.item.kind.Event.content,
				);
				break;
			default:
				this.content = new Content(this.item.kind.Event.content);
		}
	}

	getSenderProfile = (): SenderProfile | undefined => {
		return this.item.kind.Event.sender_profile.Ready;
	};

	getSender = (): string => {
		return this.item.kind.Event.sender;
	};

	getContent = (): Content => {
		return this.content;
	};

	getTimestamp = (): number => {
		return this.item.kind.Event.timestamp;
	};
}

class TimelineStore {
	roomId: string;
	client: ClientInterface;
	running = false;
	items: TimelineItem[] = [];
	listeners: CallableFunction[] = [];

	// for now, lock between subs/unsubs across all timeline instances
	// hence static, until the rust layer can handle multiple timelines simultaneously
	static mutex: Mutex = new Mutex();

	constructor(roomId: string, client: ClientInterface) {
		this.roomId = roomId;
		this.client = client;
	}

	private parseItem(item: TimelineItemInterface): TimelineItem {
		const kind: TimelineItemKind =
			TimelineItemKind[
				Object.keys(item.kind)[0] as keyof typeof TimelineItemKind
			];
		switch (kind) {
			case TimelineItemKind.Event:
				return new EventTimelineItem(item);
			case TimelineItemKind.Virtual:
				return new VirtualTimelineItem(item);
		}
	}

	sendMessage = async (msg: string) => {
		await invoke("send_message", { roomId: this.roomId, msg });
	};

	onUpdate = async (diff: TimelineDiffInterface[]): Promise<void> => {
		let items = [...this.items];

		for (const update of diff) {
			console.log("@@ timelineUpdate", update, items);
			switch (update.change()) {
				case TimelineChange.Set: {
					const data = update.set();
					if (!data) throw Error();
					items[data.index] = this.parseItem(data.item);
					items = [...items];
					break;
				}
				case TimelineChange.PopBack:
					items.pop();
					items = [...items];
					break;
				case TimelineChange.PushFront: {
					const data = update.pushFront();
					if (!data) throw Error();
					items = [this.parseItem(data), ...items];
					break;
				}
				case TimelineChange.Clear:
					items = [];
					break;
				case TimelineChange.PopFront:
					items.shift();
					items = [...items];
					break;
				case TimelineChange.PushBack: {
					const data = update.pushBack();
					if (!data) throw Error();
					items = [...items, this.parseItem(data)];
					break;
				}
				case TimelineChange.Insert: {
					const data = update.insert();
					if (!data) throw Error();
					items.splice(data.index, 0, this.parseItem(data.item));
					items = [...items];
					break;
				}
				case TimelineChange.Remove: {
					const data = update.remove();
					if (!data) throw Error();
					items.splice(data, 1);
					items = [...items];
					break;
				}
				case TimelineChange.Truncate: {
					const data = update.truncate();
					if (!data) throw Error();
					items = items.slice(0, data);
					break;
				}
				case TimelineChange.Reset: {
					const data = update.reset();
					if (!data) throw Error();
					items = [...(await Promise.all(data.map(this.parseItem)))];
					break;
				}
				case TimelineChange.Append: {
					const data = update.append();
					if (!data) throw Error();
					items = [...items, ...(await Promise.all(data.map(this.parseItem)))];
					break;
				}
			}

			console.log("@@ timelinepdated", items);
			this.items = items;
			this.emit();
		}
	};

	run = () => {
		if (!this.roomId) return;

		(async () => {
			console.log("=> acquiring lock while subscribing to", this.roomId);
			const release = await TimelineStore.mutex.acquire();
			console.log("<= got lock while subscribing to", this.roomId);
			if (this.running)
				console.warn(
					"got timeline lock while TLS already running for",
					this.roomId,
				);
			console.log("subscribing to timeline", this.roomId);

			const room = this.client.getRoom(this.roomId);
			if (!room) return;
			const timeline = await room.timeline();
			this.running = true;
			timeline.addListener(this);
			this.emit();

			console.log("timeline items", this.items);

			// console.log(
			// 	"== releasing lock after timeline subscription & polling",
			// 	this.roomId,
			// );
			// release();
			// console.log("no longer subscribed to", this.roomId);
		})();
	};

	subscribe = (listener: CallableFunction) => {
		this.listeners = [...this.listeners, listener];

		return () => {
			(async () => {
				// XXX: we should grab a mutex to avoid overlapping unsubscribes
				// and ensure we only unsubscribe from the timeline we think we're
				// unsubscribing to.
				// await invoke("unsubscribe_timeline", { roomId: this.roomId });
				// this.running = false;
			})();
			this.listeners = this.listeners.filter((l) => l !== listener);
		};
	};

	getSnapshot = (): TimelineItem[] => {
		return this.items;
	};

	emit = () => {
		for (const listener of this.listeners) {
			listener();
		}
	};

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
