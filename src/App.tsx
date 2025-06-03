import type React from "react";
import type { ReactNode } from "react";
import {
    type ReactElement,
    useEffect,
    useState,
    useSyncExternalStore,
} from "react";
import "./App.css";
import { Avatar, Form, Glass, TooltipProvider } from "@vector-im/compound-web";
import sanitizeHtml from "sanitize-html";
import type ClientStore from "./ClientStore.tsx";
import { ClientState } from "./ClientStore.tsx";
import { RoomListFiltersView } from "./RoomListFiltersView";
import type RoomListStore from "./RoomListStore.tsx";
import { RoomListView } from "./RoomListView";
import type TimelineStore from "./TimelineStore.tsx";
import { isRealEvent } from "./TimelineStore.tsx";
import {
    type TimelineItem,
    type TimelineItemKind,
    isVirtualEvent,
} from "./TimelineStore.tsx";
import {
    MembershipChange,
    MessageFormat_Tags,
    MessageType,
    MsgLikeKind,
    ProfileDetails,
    TimelineItemContent,
    VirtualTimelineItem,
} from "./index.web.ts";

console.log("running App.tsx");

interface EventTileProp {
    item: TimelineItem<any>;
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
    let showAvatar = !continuation;

    if (isVirtualEvent(item)) {
        showAvatar = false;
        if (VirtualTimelineItem.DateDivider.instanceOf(item.item)) {
            return (
                <div className="mx_Separator">
                    <span>
                        &nbsp;&nbsp;
                        {new Date(Number(item.item.inner.ts)).toDateString()}
                        &nbsp;&nbsp;
                    </span>
                </div>
            );
        }
        if (VirtualTimelineItem.ReadMarker.instanceOf(item.item)) {
            return (
                <div className="mx_Separator mx_ReadMarker">
                    <span>&nbsp;&nbsp;New Messages&nbsp;&nbsp;</span>
                </div>
            );
        }
        return `Unknown virtual event ${item.item.tag}`;
    }

    const event = item as TimelineItem<TimelineItemKind.Event>;

    const senderProfile: Partial<{
        displayName?: string;
        displayNameAmbiguous?: boolean;
        avatarUrl?: string;
    }> = ProfileDetails.Ready.instanceOf(event.item.senderProfile)
        ? event.item.senderProfile.inner
        : {};

    let body: string | ReactElement | undefined;
    let stateChange: ReactNode[] | ReactNode | undefined = undefined;
    if (TimelineItemContent.MsgLike.instanceOf(event.item.content)) {
        const message = event.item.content.inner.content;

        if (MsgLikeKind.Redacted.instanceOf(message.kind)) {
            body = "Redacted";
        } else if (MsgLikeKind.UnableToDecrypt.instanceOf(message.kind)) {
            body = "UTD";
        } else if (
            MsgLikeKind.Message.instanceOf(message.kind) &&
            MessageType.Text.instanceOf(message.kind.inner.content.msgType)
        ) {
            if (
                message.kind.inner.content.msgType.inner.content.formatted
                    ?.body &&
                message.kind.inner.content.msgType.inner.content.formatted
                    ?.format?.tag === MessageFormat_Tags.Html
            ) {
                const html = sanitizeHtml(
                    message.kind.inner.content.msgType.inner.content.formatted
                        .body,
                    {
                        // FIXME: actually implement full sanitization as per react-sdk
                        transformTags: {
                            a: sanitizeHtml.simpleTransform("a", {
                                target: "_blank",
                            }),
                        },
                    },
                );
                body = <span dangerouslySetInnerHTML={{ __html: html }} />;
            } else {
                body =
                    message.kind.inner.content.msgType.inner.content.body || "";
            }
        }
    } else if (
        TimelineItemContent.ProfileChange.instanceOf(event.item.content)
    ) {
        const changes: ReactNode[] = [];
        changes.push("changed their ");
        if (
            event.item.content.inner.avatarUrl !==
            event.item.content.inner.prevAvatarUrl
        ) {
            changes.push([
                "avatar from ",
                <Avatar
                    className="mx_StateAvatar"
                    name={senderProfile.displayName || event.item.sender}
                    id={event.item.sender}
                    src={
                        event.item.content.inner.prevAvatarUrl
                            ? mxcToUrl(event.item.content.inner.prevAvatarUrl)
                            : ""
                    }
                    size="16px"
                />,
                " to ",
                <Avatar
                    className="mx_StateAvatar"
                    name={senderProfile.displayName || event.item.sender}
                    id={event.item.sender}
                    src={
                        event.item.content.inner.avatarUrl
                            ? mxcToUrl(event.item.content.inner.avatarUrl)
                            : ""
                    }
                    size="16px"
                />,
            ]);
            if (
                event.item.content.inner.displayName !==
                event.item.content.inner.prevDisplayName
            )
                changes.push(" and changed their ");
        }
        if (
            event.item.content.inner.displayName !==
            event.item.content.inner.prevDisplayName
        ) {
            changes.push(
                `displayname from ${event.item.content.inner.prevDisplayName} to ${event.item.content.inner.displayName}`,
            );
        }
        stateChange = changes;
    } else if (
        TimelineItemContent.RoomMembership.instanceOf(event.item.content)
    ) {
        if (event.item.content.inner.change) {
            stateChange = getChangeDescription(event.item.content.inner.change);
            // } else if (event.item.content.tag) {
            // 	stateChange = `redacted ${membershipChange.content.Redacted?.membership}`;
            // } else {
            // 	stateChange = `unknown membership change ${membershipChange.content}`;
        }
    } else {
        body = `Unknown event type ${event.item.content.tag}`;
    }
    // TODO redactions

    if (stateChange) {
        return (
            <div className="mx_StateEventTile">
                <Avatar
                    className="mx_StateAvatar"
                    name={senderProfile.displayName || event.item.sender}
                    id={event.item.sender}
                    src={
                        senderProfile.avatarUrl
                            ? mxcToUrl(senderProfile.avatarUrl)
                            : ""
                    }
                    size="16px"
                />{" "}
                {event.item.sender} {stateChange}
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
                {new Date(Number(event.item.timestamp)).toLocaleTimeString()}
            </span>
            {showAvatar ? (
                <>
                    <span className="mx_Avatar">
                        <Avatar
                            name={
                                senderProfile.displayName || event.item.sender
                            }
                            id={event.item.sender}
                            src={
                                senderProfile.avatarUrl
                                    ? mxcToUrl(senderProfile.avatarUrl)
                                    : ""
                            }
                            size="32px"
                        />
                    </span>
                    <span className="mx_Sender">
                        {senderProfile.displayName}
                    </span>
                </>
            ) : null}
            <span className="mx_Content">{body}</span>
        </div>
    );
};

interface TimelineProps {
    timelineStore: TimelineStore;
}

const Timeline: React.FC<TimelineProps> = ({ timelineStore: timeline }) => {
    const items = useSyncExternalStore(
        timeline.subscribe,
        timeline.getSnapshot,
    );

    return (
        <div className="mx_Timeline">
            <ol>
                {items.map((item, i) => {
                    const prevItem = items[i - 1];
                    return (
                        <li
                            key={item.getInternalId()}
                            value={item.getInternalId()}
                        >
                            <EventTile
                                item={item}
                                continuation={
                                    prevItem &&
                                    isRealEvent(item) &&
                                    isRealEvent(prevItem) &&
                                    TimelineItemContent.MsgLike.instanceOf(
                                        item.item.content,
                                    ) &&
                                    TimelineItemContent.MsgLike.instanceOf(
                                        prevItem.item.content,
                                    ) &&
                                    item.item.sender === prevItem.item.sender
                                }
                            />
                        </li>
                    );
                })}
            </ol>
        </div>
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
                rls.run();
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
						<>
							<RoomListFiltersView store={roomListStore} />
							<RoomListView
								vm={roomListStore}
								currentRoomId={currentRoomId}
								onRoomSelected={(roomId) => {
									setCurrentRoomId(roomId);
								}}
							/>
						</>
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
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                    />
                                </Form.Field>

                                <Form.Field name="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.PasswordControl
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </Form.Field>

                                <Form.Field name="server">
                                    <Form.Label>Server</Form.Label>
                                    <Form.TextControl
                                        value={server}
                                        onChange={(e) =>
                                            setServer(e.target.value)
                                        }
                                    />
                                </Form.Field>

                                <Form.Submit
                                    disabled={!username || !password || !server}
                                >
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
        <div className="mx_App cpd-theme-dark">
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

function getChangeDescription(membershipChange: MembershipChange): string {
    switch (membershipChange) {
        case MembershipChange.None:
            return "did nothing";
        case MembershipChange.Error:
            return "<error>";
        case MembershipChange.Joined:
            return "joined";
        case MembershipChange.Left:
            return "left";
        case MembershipChange.Banned:
            return "was banned";
        case MembershipChange.Unbanned:
            return "was unbanned";
        case MembershipChange.Kicked:
            return "was kicked";
        case MembershipChange.Invited:
            return "was invited";
        case MembershipChange.InvitationAccepted:
            return "accepted an invite";
        case MembershipChange.InvitationRejected:
            return "rejected an invite";
        case MembershipChange.InvitationRevoked:
            return "was uninvited";
        case MembershipChange.Knocked:
            return "knocked";
        case MembershipChange.KnockAccepted:
            return "was accepted";
        case MembershipChange.KnockRetracted:
            return "stoped knocking";
        case MembershipChange.KnockDenied:
            return "was rejected";
        case MembershipChange.NotImplemented:
            return "<unimplemented>";
        default:
            return "<unknown>";
    }
}
