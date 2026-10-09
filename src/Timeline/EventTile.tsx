import {
    ActionBarAction,
    ActionBarView,
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
import { type ReactElement, type ReactNode, useState } from "react";
import { UtdCause } from "../generated/matrix_sdk_crypto";
import {
    type ClientInterface,
    EncryptedMessage,
    EventOrTransactionId,
    type EventTimelineItem,
    type FormattedBody,
    MembershipChange,
    type MessageContent,
    MessageType,
    MsgLikeKind,
    ProfileDetails,
    type UserStatus as SdkUserStatus,
    TimelineItemContent,
    type UserCall,
} from "../index.web";
import { mxcToUrl } from "../utils/mxcToUrl";
import { TextualBodyKind } from "../utils/sharedEnums";
import { StaticViewModel, staticViewModel } from "../utils/StaticViewModel";
import { userStatusFromProfile } from "../utils/userStatus";
import { AudioBody, FileBody, ImageBody, VideoBody } from "./body/MediaBodies";
import {
    ownReactionKeys,
    type ReactionsContext,
    ReactionsRow,
} from "./reactions/ReactionsRow";
import { TextualBody } from "./body/TextualBody";

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
    reactions: ReactionsContext;
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

/** Show a media message's caption under it, if it has one. */
function withCaption(
    media: ReactElement,
    content: { caption?: string; formattedCaption?: FormattedBody },
): ReactElement {
    if (!content.caption) return media;
    return (
        <>
            {media}
            <TextualBody
                kind={TextualBodyKind.CAPTION}
                body={content.caption}
                formatted={content.formattedCaption}
            />
        </>
    );
}

function renderMessageBody(
    content: MessageContent,
    senderName: string,
    client: ClientInterface,
): ReactElement | undefined {
    const { msgType, isEdited } = content;
    if (MessageType.Text.instanceOf(msgType)) {
        return (
            <TextualBody
                kind={TextualBodyKind.TEXT}
                body={msgType.inner.content.body}
                formatted={msgType.inner.content.formatted}
                isEdited={isEdited}
            />
        );
    }
    if (MessageType.Notice.instanceOf(msgType)) {
        return (
            <TextualBody
                kind={TextualBodyKind.NOTICE}
                body={msgType.inner.content.body}
                formatted={msgType.inner.content.formatted}
                isEdited={isEdited}
            />
        );
    }
    if (MessageType.Emote.instanceOf(msgType)) {
        return (
            <TextualBody
                kind={TextualBodyKind.EMOTE}
                body={msgType.inner.content.body}
                formatted={msgType.inner.content.formatted}
                isEdited={isEdited}
                emoteSenderName={senderName}
            />
        );
    }
    if (MessageType.Image.instanceOf(msgType)) {
        const media = msgType.inner.content;
        return withCaption(
            <ImageBody client={client} content={media} />,
            media,
        );
    }
    if (MessageType.Video.instanceOf(msgType)) {
        const media = msgType.inner.content;
        return withCaption(
            <VideoBody client={client} content={media} />,
            media,
        );
    }
    if (MessageType.File.instanceOf(msgType)) {
        const media = msgType.inner.content;
        return withCaption(<FileBody client={client} content={media} />, media);
    }
    if (MessageType.Audio.instanceOf(msgType)) {
        const media = msgType.inner.content;
        return withCaption(
            <AudioBody client={client} content={media} />,
            media,
        );
    }
    return undefined;
}

export const EventTile: React.FC<EventTileProp> = ({
    id,
    event,
    continuation,
    lastInSection,
    sendState,
    client,
    reactions,
}) => {
    // The action bar shows while the tile is hovered or has focus
    const [isHovered, setHovered] = useState(false);
    const [hasFocus, setHasFocus] = useState(false);

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
    let footer: ReactNode;
    let actionBar: ReactNode;
    if (TimelineItemContent.MsgLike.instanceOf(event.content)) {
        const message = event.content.inner.content;
        msgLikeKind = message.kind;
        // Undecryptable and deleted messages can't be reacted to
        const canHaveReactions =
            !MsgLikeKind.Redacted.instanceOf(message.kind) &&
            !MsgLikeKind.UnableToDecrypt.instanceOf(message.kind);
        if (canHaveReactions && message.reactions.length > 0) {
            footer = (
                <ReactionsRow
                    tileId={id}
                    itemId={event.eventOrTransactionId}
                    reactions={message.reactions}
                    context={reactions}
                />
            );
        }
        // Keep the action bar while its picker is open, so focus has somewhere to go back to
        const isPickerOpen = reactions.reactionPickerTileId === id;
        if (
            canHaveReactions &&
            reactions.canReact &&
            (isHovered || hasFocus || isPickerOpen)
        ) {
            actionBar = (
                <ActionBarView
                    vm={staticViewModel(
                        {
                            actions: [ActionBarAction.React],
                            isDownloadEncrypted: false,
                            isDownloadLoading: false,
                            isPinned: false,
                            isQuoteExpanded: false,
                            isThreadReplyAllowed: false,
                        },
                        {
                            onReactionsClick: (anchor: HTMLElement | null) => {
                                if (!anchor) return;
                                reactions.toggleReactionPicker({
                                    tileId: id,
                                    itemId: event.eventOrTransactionId,
                                    anchor,
                                    selected: ownReactionKeys(
                                        message.reactions,
                                        reactions.ownUserId,
                                    ),
                                });
                            },
                        },
                    )}
                />
            );
        }

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
            body = renderMessageBody(
                message.kind.inner.content,
                senderProfile.displayName || event.sender,
                client,
            );
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
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onFocus={() => setHasFocus(true)}
            onBlur={(e) => {
                // Focus moving between things inside the tile doesn't count
                if (!e.currentTarget.contains(e.relatedTarget)) {
                    setHasFocus(false);
                }
            }}
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
                footer,
                actionBar,
            }}
        />
    );
};
