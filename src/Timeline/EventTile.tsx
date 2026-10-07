import {
    DateSeparatorView,
    DecryptionFailureBodyView,
    DecryptionFailureReason,
    MessageTimestampView,
    RedactedBodyView,
    TextualEventView,
    TimelineSeparator,
} from "@element-hq/web-shared-components";
import { Avatar, InlineSpinner } from "@vector-im/compound-web";
import type React from "react";
import type { ReactElement, ReactNode } from "react";
import sanitizeHtml from "sanitize-html";
import { UtdCause } from "../generated/matrix_sdk_crypto";
import {
    type ClientInterface,
    EncryptedMessage,
    MembershipChange,
    MessageFormat_Tags,
    MessageType,
    MsgLikeKind,
    ProfileDetails,
    TimelineItemContent,
    VirtualTimelineItem,
} from "../index.web";
import { mxcToUrl } from "../utils/mxcToUrl";
import { StaticViewModel } from "../utils/StaticViewModel";
import {
    isVirtualEvent,
    type TimelineItem,
    type TimelineItemKind,
} from "./TimelineViewModel";

interface EventTileProp {
    item: TimelineItem<any>;
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

export const EventTile: React.FC<EventTileProp> = ({ item, client }) => {
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
                <DateSeparatorView
                    vm={
                        new StaticViewModel({
                            label: new Date(
                                Number(item.item.inner.ts),
                            ).toDateString(),
                        })
                    }
                />
            );
        }
        if (VirtualTimelineItem.ReadMarker.instanceOf(item.item)) {
            return (
                <TimelineSeparator
                    className="mx_ReadMarker"
                    label="New Messages"
                >
                    New Messages
                </TimelineSeparator>
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
                            ? mxcToUrl(
                                  client,
                                  event.item.content.inner.prevAvatarUrl,
                              )
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
                            ? mxcToUrl(
                                  client,
                                  event.item.content.inner.avatarUrl,
                              )
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
                                        event.item.sender
                                    }
                                    id={event.item.sender}
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
                                {event.item.sender} {stateChange}
                            </>
                        ),
                    })
                }
            />
        );
    }

    const sentAt = new Date(Number(event.item.timestamp));

    return (
        <div
            className={`mx_EventTile${item.continuation ? " mx_EventTile_continuation" : ""}`}
        >
            <MessageTimestampView
                className="mx_Timestamp"
                vm={
                    new StaticViewModel({
                        ts: sentAt.toLocaleTimeString(),
                        tsSentAt: sentAt.toLocaleString(),
                    })
                }
            />
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
                                    ? mxcToUrl(client, senderProfile.avatarUrl)
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
