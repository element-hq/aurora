import {
    ActionBarAction,
    ActionBarView,
    DecryptionFailureBodyView,
    DecryptionFailureReason,
    DisambiguatedProfileView,
    type EventSendState,
    EventTileView,
    MessageTimestampView,
    RedactedBodyView,
    TextualEventView,
} from "@element-hq/web-shared-components";
import { Avatar, useIdColorHash } from "@vector-im/compound-web";
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
import { isStateEvent, stateEventText } from "./stateEventText";

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
    /** Our own user ID, so state events can say "you". */
    ownUserId?: string;
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

// How element-web shows times and dates in the timeline (DateUtils.ts)
const timeFormat = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
});
const fullDateFormat = new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
});

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
    ownUserId,
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
    const senderColorClass = `mx_Username_color${useIdColorHash(event.sender)}`;

    const sentAt = new Date(Number(event.timestamp));
    const eventOrTxnId = event.eventOrTransactionId;
    const eventId = EventOrTransactionId.EventId.instanceOf(eventOrTxnId)
        ? eventOrTxnId.inner.eventId
        : undefined;
    const timestamp = (
        <MessageTimestampView
            vm={
                new StaticViewModel({
                    ts: timeFormat.format(sentAt),
                    tsSentAt: fullDateFormat.format(sentAt),
                })
            }
        />
    );
    const senderAvatar = (size: string): ReactElement => (
        <Avatar
            name={senderProfile.displayName || event.sender}
            id={event.sender}
            src={
                senderProfile.avatarUrl
                    ? mxcToUrl(client, senderProfile.avatarUrl)
                    : ""
            }
            size={size}
        />
    );

    // State events are a line of text with a small avatar, as in element-web
    if (isStateEvent(event)) {
        const text = stateEventText(event, ownUserId);
        // The timeline view model leaves out the ones that have nothing to say
        if (!text) return null;
        return (
            <EventTileView
                root={{
                    id,
                    as: "div",
                    eventId,
                    shape: "Room",
                    state: {
                        isOwnEvent: event.isOwn,
                        hasReply: false,
                        info: true,
                    },
                }}
                classNames={{
                    root: "mx_EventTile",
                    slotTimestamp: "mx_EventTile_timestamp",
                }}
                slots={{
                    avatar: senderAvatar("14px"),
                    timestamp,
                    body: (
                        <TextualEventView
                            vm={new StaticViewModel({ content: text })}
                        />
                    ),
                }}
            />
        );
    }
    // Calls and events the SDK couldn't parse: the view model leaves these out too
    if (!TimelineItemContent.MsgLike.instanceOf(event.content)) return null;

    let body: string | ReactElement | undefined;
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
    }

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
                eventId,
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
                avatar: continuation ? undefined : senderAvatar("30px"),
                sender: continuation ? undefined : (
                    <DisambiguatedProfileView
                        vm={
                            new StaticViewModel({
                                displayName:
                                    senderProfile.displayName || event.sender,
                                colorClass: senderColorClass,
                                emphasizeDisplayName: true,
                                // Someone else has the same name: show who this is
                                displayIdentifier:
                                    senderProfile.displayNameAmbiguous
                                        ? event.sender
                                        : undefined,
                                userStatus: userStatusFromProfile(
                                    senderProfile.status,
                                    senderProfile.call,
                                ),
                            })
                        }
                    />
                ),
                timestamp,
                body: <div className="mx_Content">{body || "No content"}</div>,
                footer,
                actionBar,
            }}
        />
    );
};
