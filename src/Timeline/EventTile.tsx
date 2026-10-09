import {
    DecryptionFailureBodyView,
    DecryptionFailureReason,
    type EventSendState,
    EventTileView,
    MessageTimestampView,
    RedactedBodyView,
    TextualEventView,
    UserStatusIconView,
} from "@element-hq/web-shared-components";
import { Avatar } from "@vector-im/compound-web";
import classNames from "classnames";
import type React from "react";
import type { ReactElement, ReactNode } from "react";
import sanitizeHtml from "sanitize-html";
import { UtdCause } from "../generated/matrix_sdk_crypto";
import {
    type ClientInterface,
    EncryptedMessage,
    EventOrTransactionId,
    type EventTimelineItem,
    MembershipChange,
    MessageFormat_Tags,
    MessageType,
    MsgLikeKind,
    ProfileDetails,
    type UserStatus as SdkUserStatus,
    TimelineItemContent,
    type UserCall,
} from "../index.web";
import { mxcToUrl } from "../utils/mxcToUrl";
import { StaticViewModel } from "../utils/StaticViewModel";
import { userStatusFromProfile } from "../utils/userStatus";

interface EventTileProp {
    /** The timeline item's unique key. */
    id: string;
    event: EventTimelineItem;
    /** Whether this continues the previous sender's messages (no avatar or name). */
    continuation: boolean;
    /** Whether this closes its group of messages from the same sender. */
    lastInSection: boolean;
    sendState?: EventSendState;
    client: ClientInterface;
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

function getDecryptionFailureReason(
    message: EncryptedMessage,
): DecryptionFailureReason {
    if (!EncryptedMessage.MegolmV1AesSha2.instanceOf(message)) {
        return DecryptionFailureReason.UNABLE_TO_DECRYPT;
    }
    switch (message.inner.cause) {
        case UtdCause.WithheldForUnverifiedOrInsecureDevice:
            return DecryptionFailureReason.MEGOLM_KEY_WITHHELD_FOR_UNVERIFIED_DEVICE;
        case UtdCause.HistoricalMessageAndBackupIsDisabled:
            return DecryptionFailureReason.HISTORICAL_MESSAGE_NO_KEY_BACKUP;
        case UtdCause.HistoricalMessageAndDeviceIsUnverified:
            return DecryptionFailureReason.HISTORICAL_MESSAGE_BACKUP_UNCONFIGURED;
        case UtdCause.SentBeforeWeJoined:
            return DecryptionFailureReason.HISTORICAL_MESSAGE_USER_NOT_JOINED;
        case UtdCause.VerificationViolation:
            return DecryptionFailureReason.SENDER_IDENTITY_PREVIOUSLY_VERIFIED;
        case UtdCause.UnsignedDevice:
        case UtdCause.UnknownDevice:
            return DecryptionFailureReason.UNSIGNED_SENDER_DEVICE;
        default:
            return DecryptionFailureReason.UNABLE_TO_DECRYPT;
    }
}

export const EventTile: React.FC<EventTileProp> = ({
    id,
    event,
    continuation,
    lastInSection,
    sendState,
    client,
}) => {
    const senderProfile: Partial<{
        displayName?: string;
        displayNameAmbiguous?: boolean;
        avatarUrl?: string;
        status?: SdkUserStatus;
        call?: UserCall;
    }> = ProfileDetails.Ready.instanceOf(event.senderProfile)
        ? event.senderProfile.inner
        : {};

    let body: string | ReactElement | undefined;
    let stateChange: ReactNode[] | ReactNode | undefined = undefined;
    let msgLikeKind: MsgLikeKind | undefined;
    if (TimelineItemContent.MsgLike.instanceOf(event.content)) {
        const message = event.content.inner.content;
        msgLikeKind = message.kind;

        if (MsgLikeKind.Redacted.instanceOf(message.kind)) {
            body = (
                <RedactedBodyView
                    vm={new StaticViewModel({ text: "Message deleted" })}
                />
            );
        } else if (MsgLikeKind.UnableToDecrypt.instanceOf(message.kind)) {
            body = (
                <DecryptionFailureBodyView
                    vm={
                        new StaticViewModel({
                            decryptionFailureReason: getDecryptionFailureReason(
                                message.kind.inner.msg,
                            ),
                        })
                    }
                />
            );
        } else if (MsgLikeKind.Message.instanceOf(message.kind)) {
            if (
                MessageType.Image.instanceOf(message.kind.inner.content.msgType)
            ) {
                const mxc =
                    message.kind.inner.content.msgType.inner.content.source.url();
                body = <img src={mxcToUrl(client, mxc, 500)} height={250} />;
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
    } else if (TimelineItemContent.ProfileChange.instanceOf(event.content)) {
        const changes: ReactNode[] = [];
        changes.push("changed their ");
        if (
            event.content.inner.avatarUrl !== event.content.inner.prevAvatarUrl
        ) {
            changes.push([
                "avatar from ",
                <Avatar
                    className="mx_StateAvatar"
                    name={senderProfile.displayName || event.sender}
                    id={event.sender}
                    src={
                        event.content.inner.prevAvatarUrl
                            ? mxcToUrl(
                                  client,
                                  event.content.inner.prevAvatarUrl,
                              )
                            : ""
                    }
                    size="16px"
                />,
                " to ",
                <Avatar
                    className="mx_StateAvatar"
                    name={senderProfile.displayName || event.sender}
                    id={event.sender}
                    src={
                        event.content.inner.avatarUrl
                            ? mxcToUrl(client, event.content.inner.avatarUrl)
                            : ""
                    }
                    size="16px"
                />,
            ]);
            if (
                event.content.inner.displayName !==
                event.content.inner.prevDisplayName
            )
                changes.push(" and changed their ");
        }
        if (
            event.content.inner.displayName !==
            event.content.inner.prevDisplayName
        ) {
            changes.push(
                `displayname from ${event.content.inner.prevDisplayName} to ${event.content.inner.displayName}`,
            );
        }
        stateChange = changes;
    } else if (TimelineItemContent.RoomMembership.instanceOf(event.content)) {
        if (event.content.inner.change) {
            stateChange = getChangeDescription(event.content.inner.change);
            // } else if (event.content.tag) {
            // 	stateChange = `redacted ${membershipChange.content.Redacted?.membership}`;
            // } else {
            // 	stateChange = `unknown membership change ${membershipChange.content}`;
        }
    } else {
        body = `Unknown event type ${event.content.tag}`;
    }
    // TODO redactions
    if (stateChange) {
        return (
            <TextualEventView
                className="mx_StateEventTile"
                vm={
                    new StaticViewModel({
                        content: (
                            <>
                                <Avatar
                                    className="mx_StateAvatar"
                                    name={
                                        senderProfile.displayName ||
                                        event.sender
                                    }
                                    id={event.sender}
                                    src={
                                        senderProfile.avatarUrl
                                            ? mxcToUrl(
                                                  client,
                                                  senderProfile.avatarUrl,
                                              )
                                            : ""
                                    }
                                    size="16px"
                                />{" "}
                                {event.sender} {stateChange}
                            </>
                        ),
                    })
                }
            />
        );
    }

    const sentAt = new Date(Number(event.timestamp));
    const eventOrTxnId = event.eventOrTransactionId;

    return (
        <EventTileView
            root={{
                id,
                // The timeline already puts each row in its own list item.
                as: "div",
                eventId: EventOrTransactionId.EventId.instanceOf(eventOrTxnId)
                    ? eventOrTxnId.inner.eventId
                    : undefined,
                shape: "Room",
                state: {
                    isOwnEvent: event.isOwn,
                    hasReply: false,
                    encryptionFailure:
                        msgLikeKind !== undefined &&
                        MsgLikeKind.UnableToDecrypt.instanceOf(msgLikeKind),
                    continuation,
                    lastInSection,
                },
            }}
            classNames={{
                root: classNames("mx_EventTile", {
                    mx_EventTile_continuation: continuation,
                    mx_EventTile_sending: sendState === "sending",
                    mx_EventTile_failed: sendState === "failed",
                }),
                slotTimestamp: "mx_EventTile_timestamp",
            }}
            slots={{
                avatar: continuation ? undefined : (
                    <Avatar
                        name={senderProfile.displayName || event.sender}
                        id={event.sender}
                        src={
                            senderProfile.avatarUrl
                                ? mxcToUrl(client, senderProfile.avatarUrl)
                                : ""
                        }
                        size="32px"
                    />
                ),
                sender: continuation ? undefined : (
                    <span className="mx_Sender">
                        {senderProfile.displayName || event.sender}
                        <UserStatusIconView
                            vm={
                                new StaticViewModel({
                                    status: userStatusFromProfile(
                                        senderProfile.status,
                                        senderProfile.call,
                                    ),
                                })
                            }
                        />
                    </span>
                ),
                timestamp: (
                    <MessageTimestampView
                        vm={
                            new StaticViewModel({
                                ts: sentAt.toLocaleTimeString(),
                                tsSentAt: sentAt.toLocaleString(),
                            })
                        }
                    />
                ),
                body: <div className="mx_Content">{body || "No content"}</div>,
            }}
        />
    );
};
