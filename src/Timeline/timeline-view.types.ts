/*
 *
 *  * Copyright 2025 New Vector Ltd.
 *  *
 *  * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 *  * Please see LICENSE files in the repository root for full details.
 *
 */

import type { RoomInterface } from "../generated/matrix_sdk_ffi";

export type {
    TimelineViewActions,
    TimelineViewSnapshot,
} from "@element-hq/web-shared-components";

export interface Props {
    room: RoomInterface;
}

/** Actions Aurora needs on top of the shared timeline contract. */
export interface AuroraTimelineActions {
    sendMessage(msg: string): Promise<void>;
}
