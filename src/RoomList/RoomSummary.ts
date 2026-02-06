/*
 *
 *  * Copyright 2025 New Vector Ltd.
 *  *
 *  * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 *  * Please see LICENSE files in the repository root for full details.
 *
 */

import type {
    EventTimelineItem,
    RoomInfo,
    RoomInterface,
} from "../generated/matrix_sdk_ffi.ts";
import {
    Membership,
    MsgLikeKind,
    RoomNotificationMode,
    TimelineItemContent,
} from "../generated/matrix_sdk_ffi.ts";

function mxcToUrl(mxcUrl: string): string {
    return `${mxcUrl.replace(
        /^mxc:\/\//,
        "https://matrix.org/_matrix/media/v3/thumbnail/",
    )}?width=48&height=48`;
}

export interface NotificationState {
    isMention: boolean;
    isNotification: boolean;
    isActivityNotification: boolean;
    hasAnyNotificationOrActivity: boolean;
    invited: boolean;
}

/**
 * A summary of a room.
 * Contains all the data needed to display a room in the room list.
 */
export interface RoomSummary {
    /** The SDK room object */
    room: RoomInterface;

    /** Room ID */
    id: string;

    /** Display name */
    name: string;

    /** Avatar URL (already converted to http URL) */
    avatar?: string;

    /** Message preview text */
    messagePreview?: string;

    /** Whether to show notification decoration */
    showNotificationDecoration: boolean;

    /** Notification state details */
    notificationState: NotificationState;

    /** Whether there's an active call */
    hasParticipantInCall: boolean;

    /** Whether the room name should be bold */
    isBold: boolean;

    /** Number of unread messages */
    unreadMessagesCount: number;

    /** Number of unread mentions */
    unreadMentionsCount: number;

    /** Number of unread notifications */
    unreadNotificationsCount: number;

    /** Room membership status */
    membership?: Membership;

    /** Whether room is a direct message */
    isDirect: boolean;

    /** Whether room is marked as favourite */
    isFavourite: boolean;

    /** Whether room is explicitly marked as unread */
    isMarkedUnread: boolean;
}

/**
 * Build a RoomSummary from room info and latest event.
 */
export function buildRoomSummary(
    room: RoomInterface,
    roomInfo: RoomInfo,
    latestEvent?: EventTimelineItem,
): RoomSummary {
    // numUnreadNotifications = messages that will notify based on user's notification settings
    // numUnreadMentions = messages with mentions/highlights for the user
    // numUnreadMessages = all "interesting" messages (independent of notification settings)
    const hasNotifications = Number(roomInfo.numUnreadNotifications) > 0;
    const hasMentions = Number(roomInfo.numUnreadMentions) > 0;
    const hasUnreadMessages = Number(roomInfo.numUnreadMessages) > 0;
    const invited = roomInfo.membership === Membership.Invited;
    const isMarkedUnread = roomInfo.isMarkedUnread;

    const notificationState: NotificationState = {
        isMention: hasMentions,
        isNotification: hasNotifications || isMarkedUnread,
        // Activity notification = has unread messages but no notification-level unreads
        // OR the room is explicitly marked as unread (and has no notifications)
        isActivityNotification: (hasUnreadMessages && !hasNotifications),
        hasAnyNotificationOrActivity: hasUnreadMessages || hasNotifications || invited || isMarkedUnread,
        invited,
    };

    // Use room ID as fallback if displayName is missing, matching iOS behavior
    const displayName = roomInfo.displayName?.trim() || roomInfo.id;
    const avatarUrl = roomInfo.avatarUrl;

    const messagePreview =
        latestEvent &&
        TimelineItemContent.MsgLike.instanceOf(latestEvent.content) &&
        MsgLikeKind.Message.instanceOf(latestEvent.content.inner.content.kind)
            ? latestEvent.content.inner.content.kind.inner.content.body
            : undefined;

    return {
        room,
        id: roomInfo.id,
        name: displayName,
        avatar: avatarUrl ? mxcToUrl(avatarUrl) : undefined,
        messagePreview,
        showNotificationDecoration:
            notificationState.hasAnyNotificationOrActivity,
        notificationState,
        hasParticipantInCall: Boolean(roomInfo.hasRoomCall),
        isBold: notificationState.hasAnyNotificationOrActivity,
        unreadMessagesCount: Number(roomInfo.numUnreadMessages),
        unreadMentionsCount: Number(roomInfo.numUnreadMentions),
        unreadNotificationsCount: Number(roomInfo.numUnreadNotifications),
        membership: roomInfo.membership,
        isDirect: roomInfo.isDirect,
        isFavourite: roomInfo.isFavourite,
        isMarkedUnread,
    };
}
