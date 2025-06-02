import type React from "react";
import {
	type ReactElement,
	useEffect,
	useState,
	useSyncExternalStore,
} from "react";
import "./App.css";
import type TimelineStore from "./TimelineStore.tsx";
import {
	ContentType,
	type DayDivider,
	type EventTimelineItem,
	MembershipChange,
	type MembershipChangeContent,
	type MessageContent,
	type ProfileChangeContent,
	type TimelineItem,
	TimelineItemKind,
	type VirtualTimelineItem,
	VirtualTimelineItemInnerType,
} from "./TimelineStore.tsx";
import type RoomListStore from "./RoomListStore.tsx";
import { RoomListEntry, type RoomListItem } from "./RoomListStore.tsx";
import type ClientStore from "./ClientStore.tsx";
import { ClientState } from "./ClientStore.tsx";
import sanitizeHtml from "sanitize-html";
import { Avatar, Form, Glass, TooltipProvider } from "@vector-im/compound-web";
import { RoomInterface } from "./index.web.ts";

console.log("running App.tsx");

interface EventTileProp {
	item: TimelineItem;
	continuation: boolean;
}

function mxcToUrl(mxcUrl: string): string {
	return (
		mxcUrl.replace(
			/^mxc:\/\//,
			"https://matrix.org/_matrix/media/v3/thumbnail/",
		) + "?width=48&height=48"
	);
}

const EventTile: React.FC<EventTileProp> = ({ item, continuation }) => {
	switch (item.kind) {
		case TimelineItemKind.Virtual:
			const virtual = item as VirtualTimelineItem;
			switch (virtual.virtualItem?.type) {
				case VirtualTimelineItemInnerType.DayDivider:
					const dayDivider = virtual.virtualItem as DayDivider;
					return (
						<div className="mx_Separator">
							<span>
								&nbsp;&nbsp;{dayDivider.getDate().toDateString()}&nbsp;&nbsp;
							</span>
						</div>
					);
				case VirtualTimelineItemInnerType.ReadMarker:
					return (
						<div className="mx_Separator mx_ReadMarker">
							<span>&nbsp;&nbsp;New Messages&nbsp;&nbsp;</span>
						</div>
					);
				default:
					return `Unknown virtual event ${virtual.virtualItem?.type}`;
			}
			break;
		case TimelineItemKind.Event:
			const event = item as EventTimelineItem;

			let body: string | ReactElement | undefined;
			let stateChange;
			switch (event.getContent().type) {
				case ContentType[ContentType.Message]:
					const message = (event.getContent() as MessageContent).getMessage();
					if (message.msgtype?.format === "org.matrix.custom.html") {
						const html = sanitizeHtml(message.msgtype?.formatted_body || "", {
							// FIXME: actually implement full sanitization as per react-sdk
							transformTags: {
								a: sanitizeHtml.simpleTransform("a", { target: "_blank" }),
							},
						});
						body = <span dangerouslySetInnerHTML={{ __html: html }}></span>;
					} else {
						body = message.msgtype?.body || "";
					}
					break;
				case ContentType[ContentType.ProfileChange]:
					const profileChange = (
						event.getContent() as ProfileChangeContent
					).getProfileChange();
					const changes = [];
					changes.push("changed their ");
					if (profileChange.avatar_url_change) {
						changes.push([
							"avatar from ",
							<Avatar
								className="mx_StateAvatar"
								name={
									event.getSenderProfile()?.display_name ||
									event.getSender().charAt(1)
								}
								id={event.getSender()}
								src={
									profileChange.avatar_url_change.old
										? mxcToUrl(profileChange.avatar_url_change.old)
										: ""
								}
								size="16px"
							/>,
							" to ",
							<Avatar
								className="mx_StateAvatar"
								name={
									event.getSenderProfile()?.display_name ||
									event.getSender().charAt(1)
								}
								id={event.getSender()}
								src={
									profileChange.avatar_url_change.new
										? mxcToUrl(profileChange.avatar_url_change.new)
										: ""
								}
								size="16px"
							/>,
						]);
						if (profileChange.displayname_change)
							changes.push(" and changed their ");
					}
					if (profileChange.displayname_change) {
						changes.push(
							`displayname from ${profileChange.displayname_change.old} to ${profileChange.displayname_change.new}`,
						);
					}
					stateChange = changes;
					break;
				case ContentType[ContentType.MembershipChange]:
					const membershipChange = (
						event.getContent() as MembershipChangeContent
					).getMembershipChange();
					if (membershipChange.change) {
						stateChange = getChangeDescription(membershipChange.change);
					} else if (membershipChange.content.Redacted) {
						stateChange = `redacted ${membershipChange.content.Redacted?.membership}`;
					} else {
						stateChange = `unknown membership change ${membershipChange.content}`;
					}
					break;
				case ContentType[ContentType.RedactedMessage]:
					body = <span className="mx_EventTile_redacted">redacted</span>;
					break;
				default:
					body = `Unknown event type ${event.getContent().type}`;
			}

			if (stateChange) {
				return (
					<div className="mx_StateEventTile">
						<Avatar
							className="mx_StateAvatar"
							name={
								event.getSenderProfile()?.display_name ||
								event.getSender().charAt(1)
							}
							id={event.getSender()}
							src={
								event.getSenderProfile()?.avatar_url
									? mxcToUrl(event.getSenderProfile()?.avatar_url || "")
									: ""
							}
							size="16px"
						/>{" "}
						{event.getSender()} {stateChange}
					</div>
				);
			}

			return (
				<div
					className={`mx_EventTile${
						continuation ? " mx_EventTile_continuation" : ""
					}`}
				>
					<span className="mx_Timestamp">
						{new Date(event.getTimestamp()).toLocaleTimeString()}
					</span>
					{!continuation ? (
						<>
							<span className="mx_Avatar">
								<Avatar
									name={
										event.getSenderProfile()?.display_name ||
										event.getSender().charAt(1)
									}
									id={event.getSender()}
									src={
										event.getSenderProfile()?.avatar_url
											? mxcToUrl(event.getSenderProfile()?.avatar_url || "")
											: ""
									}
									size="32px"
								/>
							</span>
							<span className="mx_Sender">
								{event.getSenderProfile()?.display_name
									? event.getSenderProfile()?.display_name
									: event.getSender()}
							</span>
						</>
					) : null}
					<span className="mx_Content">{body}</span>
				</div>
			);
		default:
			return `Unknown timeline item ${item.kind}`;
	}
};

interface TimelineProps {
	timelineStore: TimelineStore;
}

const Timeline: React.FC<TimelineProps> = ({ timelineStore: timeline }) => {
	const items = useSyncExternalStore(timeline.subscribe, timeline.getSnapshot);

	return (
		<div className="mx_Timeline">
			<ol>
				{items.map((item, i) => (
					<li key={item.getInternalId()} value={item.getInternalId()}>
						<EventTile
							item={item}
							continuation={
								i > 0 &&
								item.kind == TimelineItemKind.Event &&
								items[i - 1].kind == TimelineItemKind.Event &&
								(item as EventTimelineItem).getContent().type ===
									ContentType[ContentType.Message] &&
								(items[i - 1] as EventTimelineItem).getContent().type ===
									ContentType[ContentType.Message] &&
								(item as EventTimelineItem).getSender() ===
									(items[i - 1] as EventTimelineItem).getSender()
							}
						/>
					</li>
				))}
			</ol>
		</div>
	);
};

interface RoomTileProp {
	room: RoomListItem;
}

const RoomTile: React.FC<RoomTileProp> = ({ room }) => {
	let preview;
	if (room.getLatestEvent()?.content?.body) {
		preview = `${room.getLatestEvent()?.content?.body}`;
	}
	return (
		<div className="mx_RoomTile">
			{room.entry !== RoomListEntry.Empty ? (
				<>
					<Avatar
						className="mx_RoomTile_avatar"
						id={room.roomId}
						name={room.getName()}
						src={room.getAvatar() ? mxcToUrl(room.getAvatar()) : ""}
						size="26px"
					/>
					<div className="mx_RoomTile_name" title={room.getName()}>
						{room.getName()}
					</div>
					<div className="mx_RoomTile_preview" title={preview}>
						{preview ? preview : <>&nbsp;</>}
					</div>
				</>
			) : (
				" "
			)}
		</div>
	);
};

interface RoomListProps {
	roomListStore: RoomListStore;
	selectedRoomId: string;
	setRoom: (roomId: string) => void;
}

const RoomList: React.FC<RoomListProps> = ({
	roomListStore: roomList,
	selectedRoomId,
	setRoom,
}) => {
	const rooms: RoomListItem[] = []; // useSyncExternalStore(roomList.subscribe, roomList.getSnapshot);

	return (
		<ol start={0}>
			{rooms.map((r: RoomListItem) => {
				return (
					<li
						key={r.roomId}
						className={
							r.roomId === selectedRoomId ? "mx_RoomTile_selected" : ""
						}
						onClick={() => {
							if (r.roomId) setRoom(r.roomId);
						}}
					>
						<RoomTile room={r} />
					</li>
				);
			})}
		</ol>
	);
};

interface ComposerProps {
	timelineStore: TimelineStore;
}

const Composer: React.FC<ComposerProps> = ({ timelineStore }) => {
	const [composer, setComposer] = useState("");

	return (
		<div className="mx_Composer">
			<textarea
				id="mx_Composer_textarea"
				placeholder="Send a message"
				rows={1}
				value={composer}
				onChange={(e) => setComposer(e.currentTarget.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter" && composer) {
						timelineStore.sendMessage(composer);
						setComposer("");
					}
				}}
			></textarea>
			<button
				id="mx_Composer_send"
				onClick={() => {
					if (composer) {
						timelineStore.sendMessage(composer);
						setComposer("");
					}
				}}
			>
				Send
			</button>
		</div>
	);
};

interface ClientProps {
	clientStore: ClientStore;
}

const Client: React.FC<ClientProps> = ({ clientStore }) => {
	const [currentRoomId, setCurrentRoomId] = useState("");

	const [roomListStore, setRoomListStore] = useState<RoomListStore>();
	const [timelineStore, setTimelineStore] = useState<TimelineStore>();

	useEffect(() => {
		// is this the right place to get SDK to subscribe? or should it be done in the store before passing it here somehow?
		// the double-start in strict mode is pretty horrible
		(async () => {
			// console.log("trying to get tls for ", currentRoomId);
			const rls = await clientStore.getRoomListStore();
			const tls = await clientStore.getTimelineStore(currentRoomId);
			// console.log("got tls for ", currentRoomId, tls);

			if (rls && rls !== roomListStore) {
				console.log("(re)running roomListStore");
				// rls.run();
			}
			if (tls && tls !== timelineStore) {
				console.log("(re)running timelineStore");
				tls.run();
			}

			setRoomListStore(rls);
			setTimelineStore(tls);
		})();
	});
	return (
		<>
			<header className="mx_Header"> </header>
			<section className="mx_Client">
				<nav className="mx_RoomList">
					{roomListStore ? (
						<RoomList
							roomListStore={roomListStore}
							selectedRoomId={currentRoomId}
							setRoom={(roomId) => {
								setCurrentRoomId(roomId);
							}}
						/>
					) : null}
				</nav>
				{timelineStore ? (
					<main className="mx_MainPanel">
						<Timeline timelineStore={timelineStore} />
						<Composer timelineStore={timelineStore} />
					</main>
				) : null}
			</section>
		</>
	);
};

interface LoginProps {
	clientStore: ClientStore;
}

const Login: React.FC<LoginProps> = ({ clientStore }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [server, setServer] = useState("matrix.org");

	return (
		<div className="mx_LoginPage">
			<div className="mx_Login">
				<Glass>
					<div className="mx_Login_dialog">
						<TooltipProvider>
							<Form.Root
								style={{ padding: "var(--cpd-space-5x)" }}
								onSubmit={(e) => {
									e.preventDefault();
									clientStore.login({
										username,
										password,
										server: `https://${server}`,
									});
								}}
							>
								<Form.Field name="username">
									<Form.Label>Username</Form.Label>
									<Form.TextControl
										value={username}
										onChange={(e) => setUsername(e.target.value)}
									/>
								</Form.Field>

								<Form.Field name="password">
									<Form.Label>Password</Form.Label>
									<Form.PasswordControl
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</Form.Field>

								<Form.Field name="server">
									<Form.Label>Server</Form.Label>
									<Form.TextControl
										disabled={true}
										value={server}
										onChange={(e) => setServer(e.target.value)}
									/>
								</Form.Field>

								<Form.Submit disabled={!username || !password || !server}>
									Login
								</Form.Submit>
							</Form.Root>
						</TooltipProvider>
					</div>
				</Glass>
			</div>
		</div>
	);
};

interface AppProps {
	clientStore: ClientStore;
}

export const App: React.FC<AppProps> = ({ clientStore }) => {
	const clientState = useSyncExternalStore(
		clientStore.subscribe,
		clientStore.getSnapshot,
	);

	return (
		<div className="mx_App">
			{clientState == ClientState.Unknown ? null : clientState ==
				ClientState.LoggedIn ? (
				<Client clientStore={clientStore} />
			) : (
				<Login clientStore={clientStore} />
			)}
		</div>
	);
};

export default App;

function getChangeDescription(membershipChange: string): string {
	switch (membershipChange) {
		case MembershipChange[MembershipChange.None]:
			return "did nothing";
			break;
		case MembershipChange[MembershipChange.Error]:
			return "<error>";
			break;
		case MembershipChange[MembershipChange.Joined]:
			return "joined";
			break;
		case MembershipChange[MembershipChange.Left]:
			return "left";
			break;
		case MembershipChange[MembershipChange.Banned]:
			return "was banned";
			break;
		case MembershipChange[MembershipChange.Unbanned]:
			return "was unbanned";
			break;
		case MembershipChange[MembershipChange.Kicked]:
			return "was kicked";
			break;
		case MembershipChange[MembershipChange.Invited]:
			return "was invited";
			break;
		case MembershipChange[MembershipChange.InvitationAccepted]:
			return "accepted an invite";
			break;
		case MembershipChange[MembershipChange.InvitationRejected]:
			return "rejected an invite";
			break;
		case MembershipChange[MembershipChange.InvitationRevoked]:
			return "was uninvited";
			break;
		case MembershipChange[MembershipChange.Knocked]:
			return "knocked";
			break;
		case MembershipChange[MembershipChange.KnockAccepted]:
			return "was accepted";
			break;
		case MembershipChange[MembershipChange.KnockRetracted]:
			return "stoped knocking";
			break;
		case MembershipChange[MembershipChange.KnockDenied]:
			return "was rejected";
			break;
		case MembershipChange[MembershipChange.NotImplemented]:
			return "<unimplemented>";
			break;
		default:
			return "<unknown>";
	}
}
