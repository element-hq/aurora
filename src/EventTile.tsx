import { Avatar, InlineSpinner } from "@vector-im/compound-web";
import type React from "react";
import type { ReactElement, ReactNode } from "react";
import sanitizeHtml from "sanitize-html";
import {
    type TimelineItem,
    type TimelineItemKind,
    isVirtualEvent,
} from "./TimelineStore";
import {
    MessageFormat_Tags,
    MessageType,
    MsgLikeKind,
    ProfileDetails,
    TimelineItemContent,
    VirtualTimelineItem,
    MembershipChange,
} from "./index.web";

interface EventTileProp {
    item: TimelineItem<any>;
}
function mxcToUrl(mxcUrl: string, size = 48): string {
    return (
        mxcUrl.replace(
            /^mxc:\/\//,
            "https://matrix.org/_matrix/media/v3/thumbnail/",
        ) + `?width=${size}&height=${size}`
    );
}

export function getChangeDescription(
    membershipChange: MembershipChange,
): string {
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

export const EventTile: React.FC<EventTileProp> = ({ item }) => {
    let showAvatar = !item.continuation;

    if (item.kind === "spinner") {
        return (
            <div className="mx_TimelineSpinner" key="_topSpinner">
                <InlineSpinner size={40} />
            </div>
        );
    }

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
        } else if (MsgLikeKind.Message.instanceOf(message.kind)) {
            if (
                MessageType.Image.instanceOf(message.kind.inner.content.msgType)
            ) {
                const mxc =
                    message.kind.inner.content.msgType.inner.content.source.url();
                body = <img src={mxcToUrl(mxc, 500)} height={250} />;
            } else if (
                MessageType.Text.instanceOf(message.kind.inner.content.msgType)
            ) {
                if (
                    message.kind.inner.content.msgType.inner.content.formatted
                        ?.body &&
                    message.kind.inner.content.msgType.inner.content.formatted
                        ?.format?.tag === MessageFormat_Tags.Html
                ) {
                    const html = sanitizeHtml(
                        message.kind.inner.content.msgType.inner.content
                            .formatted.body,
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
                        message.kind.inner.content.msgType.inner.content.body;
                }
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
            className={`mx_EventTile${item.continuation ? " mx_EventTile_continuation" : ""}`}
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
            <span className="mx_Content">{body || "No content"}</span>
        </div>
    );
};
