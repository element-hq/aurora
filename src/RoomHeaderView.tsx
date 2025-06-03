/*
 * Copyright 2025 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import "./RoomHeaderView.css";
import "./TimelineStore";
import { Avatar } from "@vector-im/compound-web";
import type React from "react";
import { useMemo, useSyncExternalStore } from "react";
import type RoomListStore from "./RoomListStore.tsx";

type RoomHeaderViewProps = {
    roomListStore: RoomListStore;
    currentRoomId: string;
};

function mxcToUrl(mxcUrl: string): string {
    return `${mxcUrl.replace(
        /^mxc:\/\//,
        "https://matrix.org/_matrix/media/v3/thumbnail/",
    )}?width=48&height=48`;
}

export const RoomHeaderView: React.FC<RoomHeaderViewProps> = ({
    roomListStore,
    currentRoomId,
}) => {
    const { rooms } = useSyncExternalStore(
        roomListStore.subscribe,
        roomListStore.getSnapshot,
    );
    const room = useMemo(
        () => rooms.find((room) => room.roomId === currentRoomId),
        [currentRoomId, rooms],
    );

    const roomInfo = useSyncExternalStore(
        room?.subscribe || (() => () => undefined),
        room?.getSnapshot || (() => undefined),
    );

    return (
        <div className="mx_RoomHeader">
            <div className="mx_RoomHeader_avatar">
                <Avatar
                    id={currentRoomId}
                    name={roomInfo?.displayName || ""}
                    src={
                        roomInfo?.avatarUrl ? mxcToUrl(roomInfo.avatarUrl) : ""
                    }
                    size="40px"
                />
            </div>
            <div className="mx_RoomHeader_name">{room?.getName()}</div>
        </div>
    );
};
