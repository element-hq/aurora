/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import {
    RoomListView as SharedRoomListView,
} from "@element-hq/web-shared-components";
import type { ReactNode } from "react";
import type { RoomListViewViewModel, RoomDisplayInfo } from "./RoomListViewViewModel";
import BaseAvatar from "../MemberList/BaseAvatar";

interface RoomListViewProps {
    vm: RoomListViewViewModel;
}

export function RoomListView({ vm }: RoomListViewProps) {
    const renderAvatar = (room: unknown): ReactNode => {
        const roomInfo = room as RoomDisplayInfo;
        return (
            <BaseAvatar
                idName={roomInfo.id}
                name={roomInfo.name}
                url={roomInfo.avatar}
                size="24px"
            />
        );
    };

    return <SharedRoomListView vm={vm} renderAvatar={renderAvatar} />;
}
