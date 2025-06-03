import { Form, TooltipProvider } from "@vector-im/compound-web";
import type React from "react";
import { useSyncExternalStore } from "react";
import { type JSX } from "react";
import { Virtuoso } from "react-virtuoso";

import { Flex } from "../utils/Flex";
import BaseCard from "./BaseCard";
import { MemberListHeaderView } from "./MemberListHeaderView";
import {
    type MemberListStore,
    type MemberWithSeparator,
    SEPARATOR,
} from "./MemberListStore";
import { RoomMemberTileView } from "./tiles/RoomMemberTileView";
import "./MemberList.css";

interface IProps {
    vm: MemberListStore;
}

const MemberListView: React.FC<IProps> = (props: IProps) => {
    const { vm } = props;

    const { members, memberCount } = useSyncExternalStore(
        vm.subscribe,
        vm.getSnapshot,
    );

    const getRowComponent = (item: MemberWithSeparator): JSX.Element => {
        if (item === SEPARATOR) {
            return <hr className="mx_MemberListView_separator" />;
            // } else if (item.member) {
        }
        return (
            <RoomMemberTileView
                member={item}
                showPresence={vm.isPresenceEnabled()}
            />
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
        } else if (memberCount && index === memberCount) {
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

    const rowRenderer = ({
        index,
        data,
    }: { index: number; data: MemberWithSeparator }): JSX.Element => {
        if (index === memberCount) {
            // We've rendered all the members,
            // now we render an empty div to add some space to the end of the list.
            return (
                <div
                    key={`key_${index}_spacer`}
                    style={{ height: getRowHeight({ index }) }}
                />
            );
        }

        return (
            <div
                key={
                    data === SEPARATOR
                        ? "separator"
                        : `key_${index}_${data.displayName ?? "separator"}`
                }
                style={{ height: getRowHeight({ index }) }}
            >
                {getRowComponent(data)}
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
                    <Virtuoso
                        totalCount={memberCount}
                        data={members}
                        itemContent={(index, data) =>
                            rowRenderer({ index, data })
                        }
                    />
                </Flex>
            </BaseCard>
        </TooltipProvider>
    );
};

export default MemberListView;
