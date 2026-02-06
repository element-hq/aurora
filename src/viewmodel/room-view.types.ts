/*
 *
 *  * Copyright 2025 New Vector Ltd.
 *  *
 *  * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 *  * Please see LICENSE files in the repository root for full details.
 *
 */

import type { RoomInterface } from "../index.web";
import type { MemberListViewModel } from "./MemberListViewModel";
import type { TimelineViewModel } from "./TimelineViewModel";
import type { RoomSummary } from "../RoomList/RoomSummary";

export interface RoomViewSnapshot {
    timelineViewModel: TimelineViewModel;
    memberListViewModel: MemberListViewModel;
    roomHeaderViewModel?: RoomSummary;
    roomId: string;
}

export interface Props {
    room: RoomInterface;
}
