import { Form, TooltipProvider } from "@vector-im/compound-web";
import type React from "react";
import { useEffect, useState, type JSX } from "react";
import { List, type ListRowProps } from "react-virtualized/dist/commonjs/List";
import { AutoSizer } from "react-virtualized";

import { Flex } from "../utils/Flex";
import {
	type MemberListStore,
	type MemberWithSeparator,
	SEPARATOR,
} from "./MemberListStore";
import { RoomMemberTileView } from "./tiles/RoomMemberTileView";
import { MemberListHeaderView } from "./MemberListHeaderView";
import BaseCard from "./BaseCard";
import "./MemberList.css";

interface IProps {
	vm: MemberListStore;
}

const MemberListView: React.FC<IProps> = (props: IProps) => {
	const { vm } = props;
	const [totalRows, setTotalRows] = useState(0);
	const [members, setMembers] = useState<MemberWithSeparator[]>([]);

	useEffect(() => {
		setTotalRows(vm.members.length);
		if (vm.members.length > 0) {
			setMembers(vm.members);
		}
	}, [vm]);

	const getRowComponent = (item: MemberWithSeparator): JSX.Element => {
		if (item === SEPARATOR) {
			return <hr className="mx_MemberListView_separator" />;
			// } else if (item.member) {
		}
		return (
			<RoomMemberTileView member={item} showPresence={vm.isPresenceEnabled()} />
		);
		// }
		// } else {
		// 	return <ThreePidInviteTileView threePidInvite={item.threePidInvite} />;
		// }
	};

	const getRowHeight = ({ index }: { index: number }): number => {
		if (members[index] === SEPARATOR) {
			/**
			 * This is a separator of 2px height rendered between
			 * joined and invited members.
			 */
			return 2;
		} else if (totalRows && index === totalRows) {
			/**
			 * The empty spacer div rendered at the bottom should
			 * have a height of 32px.
			 */
			return 32;
		} else {
			/**
			 * The actual member tiles have a height of 56px.
			 */
			return 56;
		}
	};

	const rowRenderer = ({ key, index, style }: ListRowProps): JSX.Element => {
		if (index === totalRows) {
			// We've rendered all the members,
			// now we render an empty div to add some space to the end of the list.
			return <div key={key} style={style} />;
		}
		const item = members[index];
		return (
			<div key={key} style={style}>
				{getRowComponent(item)}
			</div>
		);
	};

	return (
		<TooltipProvider>
			<BaseCard
				id="memberlist-panel"
				className="mx_MemberListView"
				ariaLabelledBy="memberlist-panel-tab"
				role="tabpanel"
				header={"People"}
				onClose={() => {}}
			>
				<Flex
					align="stretch"
					direction="column"
					className="mx_MemberListView_container"
				>
					<Form.Root>
						<MemberListHeaderView vm={vm} />
					</Form.Root>
					<AutoSizer>
						{({ height, width }) => (
							<List
								rowRenderer={rowRenderer}
								rowHeight={getRowHeight}
								// The +1 refers to the additional empty div that we render at the end of the list.
								rowCount={totalRows + 1}
								// Subtract the height of MemberlistHeaderView so that the parent div does not overflow.
								height={height - 113}
								width={width}
								overscanRowCount={15}
							/>
						)}
					</AutoSizer>
				</Flex>
			</BaseCard>
		</TooltipProvider>
	);
};

export default MemberListView;
