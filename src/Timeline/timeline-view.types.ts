/*
 *
 *  * Copyright 2025 New Vector Ltd.
 *  *
 *  * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 *  * Please see LICENSE files in the repository root for full details.
 *
 */

import type { RoomInterface } from "../generated/matrix_sdk_ffi";
import type { TimelineItem } from "./TimelineViewModel";

export interface Props {
    room: RoomInterface;
}

export interface TimelineViewSnapshot {
    items: TimelineItem<any>[];
    showTopSpinner: boolean;
    firstItemIndex: number;
    roomId: string;
}

export interface TimelineViewActions {
    sendMessage(msg: string): Promise<void>;
    backPaginate(): Promise<void>;
}
