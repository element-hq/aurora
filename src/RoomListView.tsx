/*
 * Copyright 2025 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import "./RoomListView.css";
import { type JSX, useCallback, useSyncExternalStore } from "react";
import { AutoSizer, List, type ListRowProps } from "react-virtualized";
import { RoomListItemView } from "./RoomListItemView";
import type RoomListStore from "./RoomListStore";
import type { RoomListItem } from "./RoomListStore";

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
	const rooms: RoomListItem[] = useSyncExternalStore(
		vm.subscribe,
		vm.getSnapshot,
	);

	const roomRendererMemoized = useCallback(
		({ key, index, style }: ListRowProps) => (
			<RoomListItemView
				room={rooms[index]}
				key={key}
				style={style}
				isSelected={currentRoomId === rooms[index].roomId}
				onClick={() => onRoomSelected(rooms[index].roomId)}
			/>
		),
		[rooms, currentRoomId, onRoomSelected],
	);

	// The first div is needed to make the virtualized list take all the remaining space and scroll correctly
	return (
		<div className="mx_RoomList">
			<AutoSizer>
				{({ height, width }) => (
					<List
						className="mx_RoomList_List"
						rowRenderer={roomRendererMemoized}
						rowCount={rooms.length}
						rowHeight={48}
						height={height}
						width={width}
						tabIndex={-1}
					/>
				)}
			</AutoSizer>
		</div>
	);
}
