/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import {
    BaseViewModel,
    type NotificationDecorationData,
    type RoomListSectionHeaderActions,
    type RoomListSectionHeaderViewSnapshot,
} from "@element-hq/web-shared-components";
import type { RoomSummary } from "./RoomSummary.ts";
import {
    getAcceptedRoomKind,
    getSectionTitle,
    isSectionExpanded,
    type SectionTag,
    setSectionExpanded,
} from "./sections.ts";

interface RoomListSectionHeaderViewModelProps {
    tag: SectionTag;
    /** Called when the user expands or collapses the section */
    onToggleExpanded: () => void;
}

/**
 * Combine the notification states of a section's rooms into one decoration for its header.
 */
function combineNotifications(
    rooms: RoomSummary[],
): NotificationDecorationData | undefined {
    const states = rooms.map((r) => r.notificationState);
    if (!states.some((s) => s.hasAnyNotificationOrActivity)) return undefined;

    const isMention = states.some((s) => s.isMention);
    const isNotification = states.some((s) => s.isNotification);
    return {
        hasAnyNotificationOrActivity: true,
        isUnsentMessage: false,
        invited: states.some((s) => s.invited),
        isMention,
        isNotification,
        isActivityNotification:
            !isMention &&
            !isNotification &&
            states.some((s) => s.isActivityNotification),
        hasUnreadCount: rooms.some((r) => r.unreadMessagesCount > 0),
        count: 0, // Don't show counts for now, matching the room list items
        muted: false,
    };
}

/**
 * View model for the header of one of the room list's default sections.
 */
export class RoomListSectionHeaderViewModel
    extends BaseViewModel<
        RoomListSectionHeaderViewSnapshot,
        RoomListSectionHeaderViewModelProps
    >
    implements RoomListSectionHeaderActions
{
    public constructor(props: RoomListSectionHeaderViewModelProps) {
        super(props, {
            id: props.tag,
            title: getSectionTitle(props.tag),
            isExpanded: isSectionExpanded(props.tag),
            isUnread: false,
            // Default sections can't be edited, removed or reordered
            displaySectionMenu: false,
            canBeReordered: false,
            acceptedRoomKind: getAcceptedRoomKind(props.tag),
        });
    }

    public onClick = (): void => {
        this.isExpanded = !this.isExpanded;
        this.props.onToggleExpanded();
    };

    public get isExpanded(): boolean {
        return this.snapshot.current.isExpanded;
    }

    /**
     * Set whether the section is expanded, without triggering onToggleExpanded.
     */
    public set isExpanded(isExpanded: boolean) {
        setSectionExpanded(this.props.tag, isExpanded);
        this.snapshot.merge({ isExpanded });
    }

    /**
     * Update the header from the rooms currently in the section.
     */
    public setRooms(rooms: RoomSummary[]): void {
        // Collapse Invites once it empties, so it is closed the next time an invitation makes it appear
        if (this.props.tag === "invites" && rooms.length === 0) {
            this.snapshot.merge({ isExpanded: false });
        }

        const notification = combineNotifications(rooms);
        this.snapshot.merge({ isUnread: notification !== undefined });
        // Only replace the decoration object when its contents change, so the view doesn't re-render
        if (
            JSON.stringify(notification) !==
            JSON.stringify(this.snapshot.current.notification)
        ) {
            this.snapshot.merge({ notification });
        }
    }

    public editSection = (): void => {
        // No-op: default sections have no section menu
    };

    public removeSection = (): void => {
        // No-op: default sections have no section menu
    };
}
