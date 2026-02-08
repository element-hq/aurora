/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import {
    BaseViewModel,
    type RoomListItemSnapshot,
    RoomNotifState,
} from "@element-hq/web-shared-components";
import type { RoomSummary } from "./RoomSummary.ts";
import { buildRoomSummary } from "./RoomSummary.ts";
import type { RoomDisplayInfo } from "./RoomListViewViewModel";
import {
    ReceiptType,
    RoomNotificationMode,
    type ClientInterface,
} from "../generated/matrix_sdk_ffi.ts";

/**
 * View model for a room list item.
 * Wraps a RoomSummary and uses the client to perform actions on the room.
 */
export class RoomListItemViewModel extends BaseViewModel<
    RoomListItemSnapshot,
    {
        summary: RoomSummary;
        client: ClientInterface;
        openRoom: (roomId: string) => void;
    }
> {
    /**
     * Map notification mode from Rust SDK to RoomNotifState
     */
    private static mapNotificationModeToState(
        mode?: RoomNotificationMode,
    ): RoomNotifState {
        if (mode === undefined) {
            return RoomNotifState.AllMessages;
        }
        switch (mode) {
            case RoomNotificationMode.AllMessages:
                return RoomNotifState.AllMessagesLoud;
            case RoomNotificationMode.MentionsAndKeywordsOnly:
                return RoomNotifState.MentionsOnly;
            case RoomNotificationMode.Mute:
                return RoomNotifState.Mute;
            default:
                return RoomNotifState.AllMessages;
        }
    }

    public constructor(
        summary: RoomSummary,
        client: ClientInterface,
        openRoom: (roomId: string) => void,
    ) {
        const roomDisplayInfo: RoomDisplayInfo = {
            id: summary.id,
            name: summary.name,
            avatar: summary.avatar,
        };

        super(
            { summary, client, openRoom },
            {
                id: summary.id,
                room: roomDisplayInfo,
                name: summary.name,
                isBold: summary.isBold,
                messagePreview: summary.messagePreview,
                notification: {
                    hasAnyNotificationOrActivity:
                        summary.notificationState.hasAnyNotificationOrActivity,
                    isUnsentMessage: false,
                    invited: summary.notificationState.invited,
                    isMention: summary.notificationState.isMention,
                    isActivityNotification:
                        summary.notificationState.isActivityNotification,
                    isNotification: summary.notificationState.isNotification,
                    hasUnreadCount: summary.unreadMessagesCount > 0,
                    count: 0, // Don't show counts for now, EXMobile doesn't either.
                    muted: false,
                },
                showMoreOptionsMenu: true,
                showNotificationMenu: true,
                isFavourite: summary.isFavourite,
                isLowPriority: false,
                canInvite: true,
                canCopyRoomLink: true,
                canMarkAsRead:
                    summary.unreadMessagesCount > 0 || summary.isMarkedUnread,
                canMarkAsUnread:
                    summary.unreadMessagesCount === 0 &&
                    !summary.isMarkedUnread,
                roomNotifState: RoomNotifState.AllMessages, // Will be fetched asynchronously
            },
        );

        // Fetch the actual notification mode
        this.fetchNotificationMode();

        // Subscribe to room info updates to reactively update notification state
        this.subscribeToRoomInfoUpdates();
    }

    /**
     * Fetch the notification mode for this room from the server
     */
    private async fetchNotificationMode(): Promise<void> {
        try {
            const notificationSettings =
                await this.props.client.getNotificationSettings();
            const mode =
                await notificationSettings.getUserDefinedRoomNotificationMode(
                    this.props.summary.id,
                );

            this.snapshot.merge({
                roomNotifState:
                    RoomListItemViewModel.mapNotificationModeToState(mode),
            });
        } catch (error) {
            console.error(
                `Failed to fetch notification mode for room ${this.props.summary.id}:`,
                error,
            );
        }
    }

    /**
     * Subscribe to room info updates to reactively update when notification state changes
     */
    private subscribeToRoomInfoUpdates(): void {
        console.log(
            `[RoomListItemViewModel] Subscribing to room info updates for ${this.props.summary.name} (${this.props.summary.id})`,
        );

        const roomInfoToken =
            this.props.summary.room.subscribeToRoomInfoUpdates({
                call: async (roomInfo) => {
                    console.log(
                        `[RoomListItemViewModel] Received room info update for ${this.props.summary.name}:`,
                        {
                            numUnreadNotifications:
                                roomInfo.numUnreadNotifications,
                            numUnreadMentions: roomInfo.numUnreadMentions,
                            numUnreadMessages: roomInfo.numUnreadMessages,
                            isMarkedUnread: roomInfo.isMarkedUnread,
                        },
                    );

                    // When room info changes (including unread counts), rebuild the summary
                    const latestEvent =
                        await this.props.summary.room.latestEvent();
                    const updatedSummary = buildRoomSummary(
                        this.props.summary.room,
                        roomInfo,
                        latestEvent,
                    );

                    // Update the snapshot with the new notification state
                    this.updateSummary(updatedSummary);
                },
            });

        this.disposables.track(() => {
            console.log(
                `[RoomListItemViewModel] Unsubscribing from room info updates for ${this.props.summary.name} (${this.props.summary.id})`,
            );
            roomInfoToken.cancel();
        });
    }

    /**
     * Update the view model with new room summary data.
     * Called when the room list receives updates from the Rust SDK.
     */
    public updateSummary(summary: RoomSummary): void {
        // Update props
        this.props.summary = summary;

        // Update snapshot with new data
        const roomDisplayInfo: RoomDisplayInfo = {
            id: summary.id,
            name: summary.name,
            avatar: summary.avatar,
        };

        this.snapshot.merge({
            room: roomDisplayInfo,
            name: summary.name,
            isBold: summary.isBold,
            messagePreview: summary.messagePreview,
            notification: {
                hasAnyNotificationOrActivity:
                    summary.notificationState.hasAnyNotificationOrActivity,
                isUnsentMessage: false,
                invited: summary.notificationState.invited,
                isMention: summary.notificationState.isMention,
                isActivityNotification:
                    summary.notificationState.isActivityNotification,
                isNotification: summary.notificationState.isNotification,
                hasUnreadCount: summary.unreadMessagesCount > 0,
                count: 0, // Don't show counts for now, EXMobile doesn't either.
                muted: false,
            },
            isFavourite: summary.isFavourite,
            canMarkAsRead:
                summary.unreadMessagesCount > 0 || summary.isMarkedUnread,
            canMarkAsUnread:
                summary.unreadMessagesCount === 0 && !summary.isMarkedUnread,
        });

        // Refetch notification mode when room updates
        this.fetchNotificationMode();
    }

    // Action implementations
    public onOpenRoom = (): void => {
        this.props.openRoom(this.props.summary.id);

        this.onMarkAsRead();
    };

    public onMarkAsRead = async (): Promise<void> => {
        try {
            await this.props.summary.room.markAsRead(ReceiptType.Read);
        } catch (error) {
            console.error(
                `Failed to mark room ${this.props.summary.id} as read:`,
                error,
            );
        }
    };

    public onMarkAsUnread = async (): Promise<void> => {
        try {
            await this.props.summary.room.setUnreadFlag(true);
        } catch (error) {
            console.error(
                `Failed to mark room ${this.props.summary.id} as unread:`,
                error,
            );
        }
    };

    public onToggleFavorite = async (): Promise<void> => {
        try {
            await this.props.summary.room.setIsFavourite(
                !this.props.summary.isFavourite,
                undefined,
            );
        } catch (error) {
            console.error(
                `Failed to toggle favorite for room ${this.props.summary.id}:`,
                error,
            );
        }
    };

    public onToggleLowPriority = async (): Promise<void> => {
        // Low priority isn't tracked in RoomSummary yet, so we'll need to track current state
        // For now, just call the method - the UI will update when the room list refreshes
        try {
            // We don't have isLowPriority in RoomSummary, so just toggle it
            // The exact state will be determined by the room list update
            await this.props.summary.room.setIsLowPriority(true, undefined);
        } catch (error) {
            console.error(
                `Failed to toggle low priority for room ${this.props.summary.id}:`,
                error,
            );
        }
    };

    public onInvite = (): void => {
        // TODO: Implement invite dialog
        console.log("Invite to room not yet implemented");
    };

    public onCopyRoomLink = async (): Promise<void> => {
        try {
            const roomId = this.props.summary.id;
            // Construct a matrix.to URL for the room
            const url = `https://matrix.to/#/${roomId}`;
            await navigator.clipboard.writeText(url);
        } catch (error) {
            console.error(
                `Failed to copy room link for ${this.props.summary.id}:`,
                error,
            );
        }
    };

    public onLeaveRoom = async (): Promise<void> => {
        try {
            await this.props.summary.room.leave();
        } catch (error) {
            console.error(
                `Failed to leave room ${this.props.summary.id}:`,
                error,
            );
        }
    };

    public onSetRoomNotifState = async (
        state: RoomNotifState,
    ): Promise<void> => {
        try {
            const notificationSettings =
                await this.props.client.getNotificationSettings();

            // AllMessages = "Match default settings" - this should clear the user-defined setting
            if (state === RoomNotifState.AllMessages) {
                await notificationSettings.restoreDefaultRoomNotificationMode(
                    this.props.summary.id,
                );
            } else {
                // Import the RoomNotificationMode enum
                const { RoomNotificationMode } = await import(
                    "../generated/matrix_sdk_ffi.ts"
                );

                // Map RoomNotifState to RoomNotificationMode for user-defined settings
                let mode: (typeof RoomNotificationMode)[keyof typeof RoomNotificationMode];
                switch (state) {
                    case RoomNotifState.AllMessagesLoud:
                        mode = RoomNotificationMode.AllMessages;
                        break;
                    case RoomNotifState.MentionsOnly:
                        mode = RoomNotificationMode.MentionsAndKeywordsOnly;
                        break;
                    case RoomNotifState.Mute:
                        mode = RoomNotificationMode.Mute;
                        break;
                    default:
                        console.error(`Unknown notification state: ${state}`);
                        return;
                }

                // Set the user-defined notification mode
                await notificationSettings.setRoomNotificationMode(
                    this.props.summary.id,
                    mode,
                );
            }

            // Immediately update the snapshot to reflect the change
            this.snapshot.merge({
                roomNotifState: state,
            });
        } catch (error) {
            console.error(
                `Failed to set notification state for room ${this.props.summary.id}:`,
                error,
            );
        }
    };
}
