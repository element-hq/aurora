/*
 * Copyright 2025 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import EmailIcon from "@vector-im/compound-design-tokens/assets/web/icons/email-solid";
import ErrorIcon from "@vector-im/compound-design-tokens/assets/web/icons/error-solid";
import MentionIcon from "@vector-im/compound-design-tokens/assets/web/icons/mention";
import NotificationOffIcon from "@vector-im/compound-design-tokens/assets/web/icons/notifications-off-solid";
import VideoCallIcon from "@vector-im/compound-design-tokens/assets/web/icons/video-call-solid";
import { Unread, UnreadCounter } from "@vector-im/compound-web";
import type { HTMLProps, JSX } from "react";
import "./NotificationDecoration.css";

import type { NotificationState } from "./RoomListStore";
import { Flex } from "./utils/Flex";
interface NotificationDecorationProps extends HTMLProps<HTMLDivElement> {
    /**
     * The notification state of the room or thread.
     */
    notificationState: NotificationState;
    /**
     * Whether the room has a video call.
     */
    hasVideoCall: boolean;
}

/**
 * Displays the notification decoration for a room or a thread.
 */
export function NotificationDecoration({
    notificationState,
    hasVideoCall,
    ...props
}: NotificationDecorationProps): JSX.Element | null {
    // Listen to the notification state and update the component when it changes
    const {
        hasAnyNotificationOrActivity,
        invited,
        isMention,
        isActivityNotification,
        isNotification,
    } = notificationState;

    if (!hasAnyNotificationOrActivity && !hasVideoCall) return null;

    return (
        <Flex
            className="mx_NotificationDecoration"
            align="center"
            justify="center"
            gap="var(--cpd-space-1x)"
            {...props}
            data-testid="notification-decoration"
        >
            {hasVideoCall && (
                <VideoCallIcon
                    width="20px"
                    height="20px"
                    fill="var(--cpd-color-icon-accent-primary)"
                />
            )}
            {invited && (
                <EmailIcon
                    width="20px"
                    height="20px"
                    fill="var(--cpd-color-icon-accent-primary)"
                />
            )}
            {isMention && (
                <MentionIcon
                    width="20px"
                    height="20px"
                    fill="var(--cpd-color-icon-accent-primary)"
                />
            )}
            {(isMention || isNotification) && <Unread data-color="green" />}
            {isActivityNotification && <Unread />}
        </Flex>
    );
}
