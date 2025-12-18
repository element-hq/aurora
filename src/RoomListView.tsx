/*
 * Copyright 2025 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import "./RoomListView.css";
import { InlineSpinner } from "@vector-im/compound-web";
import type { JSX } from "react";
import { GroupedVirtuoso } from "react-virtuoso";
import { useViewModel } from "@element-hq/web-shared-components";
import { RoomListItemView } from "./RoomListItemView";
import type { RoomListViewModel } from "./viewmodel/RoomListViewModel";

type RoomListViewProps = {
    vm: RoomListViewModel;
    onRoomSelected: (roomId: string) => void;
};

/**
 * A virtualized list of rooms organized into sections.
 */
export function RoomListView({
    vm,
    onRoomSelected,
}: RoomListViewProps): JSX.Element {
    const { rooms, sections, visibleRooms, groupCounts, currentRoomId, loading } =
        useViewModel(vm);

    // Show centered spinner while waiting for room list to load
    if (loading) {
        return (
            <div
                className="mx_RoomListView"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                }}
            >
                <InlineSpinner />
            </div>
        );
    }

    // If there are no rooms at all, show empty state
    if (rooms.length === 0) {
        return <div className="mx_RoomListView">No rooms</div>;
    }

    // The first div is needed to make the virtualized list take all the remaining space and scroll correctly
    return (
        <div className="mx_RoomListView">
            <GroupedVirtuoso
                style={{ height: "100%" }}
                groupCounts={groupCounts}
                components={{
                    Group: ({ style, ...props }) => (
                        <div
                            {...props}
                            style={{
                                ...style,
                                zIndex: 1,
                            }}
                        />
                    ),
                }}
                groupContent={(index) => (
                    <button
                        type="button"
                        className="mx_RoomListView_sectionHeader"
                        onClick={() => vm.toggleSection(index)}
                    >
                        <span
                            style={{
                                transform: sections[index].expanded
                                    ? "rotate(90deg)"
                                    : "rotate(0deg)",
                                transition: "transform 0.2s ease",
                                display: "inline-block",
                            }}
                        >
                            ❯
                        </span>
                        <span>{sections[index].name}</span>
                    </button>
                )}
                itemContent={(index) => {
                    const room = visibleRooms[index];
                    return (
                        <RoomListItemView
                            room={room}
                            isSelected={currentRoomId === room.id}
                            onClick={() => onRoomSelected(room.id)}
                        />
                    );
                }}
            />
        </div>
    );
}
