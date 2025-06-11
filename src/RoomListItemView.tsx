/*
 * Copyright 2025 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import classNames from "classnames";
import type React from "react";
import { type JSX, memo, useSyncExternalStore } from "react";
import "./RoomListItemView.css";

import { Avatar } from "@vector-im/compound-web";
import { NotificationDecoration } from "./NotificationDecoration";
import type { RoomListItem } from "./RoomListStore";
import {
    Membership,
    MsgLikeKind,
    TimelineItemContent,
} from "./generated/matrix_sdk_ffi.ts";
import { Flex } from "./utils/Flex";

function mxcToUrl(mxcUrl: string): string {
    return `${mxcUrl.replace(
        /^mxc:\/\//,
        "https://matrix.org/_matrix/media/v3/thumbnail/",
    )}?width=48&height=48`;
}

interface RoomListItemViewProps
    extends React.HTMLAttributes<HTMLButtonElement> {
    /**
     * The room to display
     */
    room: RoomListItem;
    /**
     * Whether the room is selected
     */
    isSelected: boolean;
}

/**
 * An item in the room list
 */
export const RoomListItemView = memo(function RoomListItemView({
    room,
    isSelected,
    ...props
}: RoomListItemViewProps): JSX.Element {
    const vm = useRoomListItemViewModel(room);

    return (
        <button
            className={classNames("mx_RoomListItemView", {
                mx_RoomListItemView_selected: isSelected,
                mx_RoomListItemView_bold: vm.isBold,
            })}
            type="button"
            aria-selected={isSelected}
            {...props}
        >
            {/* We need this extra div between the button and the content in order to add a padding which is not messing with the virtualized list */}
            <Flex
                className="mx_RoomListItemView_container"
                gap="var(--cpd-space-3x)"
                align="center"
            >
                <Avatar
                    id={room.roomId}
                    name={vm.name}
                    src={vm.avatar}
                    size="26px"
                />
                <Flex
                    className="mx_RoomListItemView_content"
                    gap="var(--cpd-space-2x)"
                    align="center"
                    justify="space-between"
                >
                    {/* We truncate the room name when too long. Title here is to show the full name on hover */}
                    <div className="mx_RoomListItemView_text">
                        <div
                            className="mx_RoomListItemView_roomName"
                            title={vm.name}
                        >
                            {vm.name}
                        </div>
                        <div className="mx_RoomListItemView_messagePreview">
                            {vm.messagePreview}
                        </div>
                    </div>
                    <>
                        {/* aria-hidden because we summarise the unread count/notification status in a11yLabel variable */}
                        {vm.showNotificationDecoration && (
                            <NotificationDecoration
                                notificationState={vm.notificationState}
                                aria-hidden={true}
                                hasVideoCall={vm.hasParticipantInCall}
                            />
                        )}
                    </>
                </Flex>
            </Flex>
        </button>
    );
});

function useRoomListItemViewModel(room: RoomListItem) {
    const info = useSyncExternalStore(room.subscribe, room.getSnapshot);
    const isNotification = Number(info?.numUnreadMessages) > 0;
    const invited = info?.membership === Membership.Invited;

    const notificationState = {
        isMention: Number(info?.numUnreadMentions) > 0,
        isNotification,
        isActivityNotification:
            Number(info?.numUnreadNotifications) > 0 && !isNotification,
        hasAnyNotificationOrActivity:
            Number(info?.numUnreadNotifications) > 0 || invited,
        invited,
    };
    const avatar = room.getAvatar();
    return {
        name: room.getName() || "placeholder name",
        avatar: avatar ? mxcToUrl(avatar) : undefined,
        showNotificationDecoration:
            notificationState.hasAnyNotificationOrActivity,
        notificationState,
        hasParticipantInCall: room.hasVideoCall(),
        messagePreview:
            room.latestEvent &&
            TimelineItemContent.MsgLike.instanceOf(room.latestEvent.content) &&
            MsgLikeKind.Message.instanceOf(
                room.latestEvent.content.inner.content.kind,
            )
                ? room.latestEvent.content.inner.content.kind.inner.content.body
                : undefined,
        isBold: notificationState.hasAnyNotificationOrActivity,
    };
}
