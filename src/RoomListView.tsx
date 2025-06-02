/*
 * Copyright 2025 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import "./RoomListView.css";
import { useCallback, type JSX } from "react";
import { AutoSizer, List, type ListRowProps } from "react-virtualized";
import { RoomListItemView } from "./RoomListItemView";
import RoomListStore from "./RoomListStore";

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
	currentRoomId = "TODO",
}: RoomListViewProps): JSX.Element {
	//const vm = {} as any; // Placeholder for the view model, replace with actual implementation

	const roomRendererMemoized = useCallback(
		({ key, index, style }: ListRowProps) => (
			<RoomListItemView
				room={vm.rooms[index]}
				key={key}
				style={style}
				isSelected={currentRoomId === vm.rooms[index].roomId}
			/>
		),
		[vm.rooms, vm],
	);

	// The first div is needed to make the virtualized list take all the remaining space and scroll correctly
	return (
		<div className="mx_RoomList">
			<AutoSizer>
				{({ height, width }) => (
					<List
						className="mx_RoomList_List"
						rowRenderer={roomRendererMemoized}
						rowCount={vm.rooms.length}
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
