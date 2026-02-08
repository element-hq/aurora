/*
 *
 *  * Copyright 2025 New Vector Ltd.
 *  *
 *  * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 *  * Please see LICENSE files in the repository root for full details.
 *
 */

import type { ClientInterface, RoomInterface, RoomMember } from "../index.web";

export const SEPARATOR = "SEPARATOR";
export type MemberWithSeparator = RoomMember | typeof SEPARATOR;

export interface Props {
    room: RoomInterface;
}

export interface MemberListViewSnapshot {
    members: MemberWithSeparator[];
    memberCount: number;
    shouldShowInvite: boolean;
    shouldShowSearch: boolean;
    isLoading: boolean;
    canInvite: boolean;
}

export interface MemberListViewActions {
    search(query: string): void;
}
