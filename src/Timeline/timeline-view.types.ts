/*
 *
 *  * Copyright 2025 New Vector Ltd.
 *  *
 *  * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 *  * Please see LICENSE files in the repository root for full details.
 *
 */

import type { TimelineViewSnapshot } from "@element-hq/web-shared-components";
import type {
    EventOrTransactionId,
    RoomInterface,
} from "../generated/matrix_sdk_ffi";

export type {
    TimelineViewActions,
    TimelineViewSnapshot,
} from "@element-hq/web-shared-components";

export interface Props {
    room: RoomInterface;
}

/** What Aurora's event tiles need on top of the shared timeline snapshot. */
export interface AuroraTimelineSnapshot extends TimelineViewSnapshot {
    /** Our own user ID, once we know it. */
    ownUserId?: string;
    /** Whether the room's power levels let us react. */
    canReact: boolean;
    /** Whether the room's power levels let us remove our own reactions. */
    canRedactOwn: boolean;
    /** Display names of the room members we've come across, by user ID. */
    memberNames: ReadonlyMap<string, string>;
}

/** Actions Aurora needs on top of the shared timeline contract. */
export interface AuroraTimelineActions {
    sendMessage(msg: string): Promise<void>;
    toggleReaction(itemId: EventOrTransactionId, key: string): Promise<void>;
}
