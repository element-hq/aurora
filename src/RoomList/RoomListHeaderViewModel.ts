/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import {
    BaseViewModel,
    type RoomListHeaderViewModel as RoomListHeaderViewModelInterface,
    type RoomListHeaderViewSnapshot,
} from "@element-hq/web-shared-components";

export class RoomListHeaderViewModel
    extends BaseViewModel<RoomListHeaderViewSnapshot, null>
    implements RoomListHeaderViewModelInterface
{
    constructor() {
        super(null, {
            title: "Chats",
            displaySpaceMenu: false,
            canCreateRoom: true,
            canCreateVideoRoom: true,
            canInviteInSpace: true,
            canAccessSpaceSettings: false,
            activeSortOption: "recent",
            isMessagePreviewEnabled: false,
            areSectionsEnabled: false,
            displaySectionReleaseAnnouncement: false,
        });
    }

    createChatRoom(): void {
        // TODO: Implement create chat room logic here
    }

    createRoom(): void {
        // TODO: Implement create room logic here
    }

    createVideoRoom(): void {
        // TODO: Implement create video room logic here
    }

    openSpaceHome(): void {
        // TODO: Implement open space home logic here
    }

    inviteInSpace(): void {
        // TODO: Implement invite in space logic here
    }

    openSpacePreferences(): void {
        // TODO: Implement open space preferences logic here
    }

    openSpaceSettings(): void {
        // TODO: Implement open space settings logic here
    }

    sort(): void {
        // TODO: Implement sort logic here
    }

    toggleMessagePreview(): void {
        // TODO: Implement toggle message preview logic here
    }

    createSection(): void {
        // Sections are disabled (areSectionsEnabled: false)
    }

    collapseOrExpandSections(): void {
        // Sections are disabled (areSectionsEnabled: false)
    }

    closeSectionReleaseAnnouncement(): void {
        // Announcement is never displayed
    }
}
