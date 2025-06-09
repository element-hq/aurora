/*
 * Copyright 2025 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import "./RoomListView.css";
import { InlineSpinner } from "@vector-im/compound-web";
import { type JSX, useCallback, useSyncExternalStore } from "react";
import { Virtuoso } from "react-virtuoso";
import { RoomListItemView } from "./RoomListItemView";
import type RoomListStore from "./RoomListStore";

type RoomListViewProps = {
    vm: RoomListStore;
    onRoomSelected: (roomId: string) => void;
    currentRoomId: string;
};

/**
 * A virtualized list of rooms.
 */
export function RoomListView({
    vm,
    onRoomSelected,
    currentRoomId,
}: RoomListViewProps): JSX.Element {
    const { rooms, numRooms } = useSyncExternalStore(
        vm.subscribe,
        vm.getSnapshot,
    );

    // The first div is needed to make the virtualized list take all the remaining space and scroll correctly
    return (
        <div className="mx_RoomListView">
            <Virtuoso
                data={rooms}
                endReached={vm.loadMore}
                increaseViewportBy={200}
                totalCount={numRooms >= 0 ? numRooms : undefined}
                fixedItemHeight={48}
                context={{ currentRoomId, onRoomSelected }}
                rangeChanged={vm.rangeChanged}
                itemContent={(_, room, { currentRoomId, onRoomSelected }) => {
                    return (
                        <RoomListItemView
                            room={room}
                            isSelected={currentRoomId === room.roomId}
                            onClick={() => onRoomSelected(room.roomId)}
                        />
                    );
                }}
                components={{
                    Footer:
                        vm.isAllFilter() && numRooms > rooms.length
                            ? Footer
                            : undefined,
                }}
            />
        </div>
    );
}

const Footer = () => {
    return (
        <div
            style={{
                padding: "2rem",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <InlineSpinner />
        </div>
    );
};
