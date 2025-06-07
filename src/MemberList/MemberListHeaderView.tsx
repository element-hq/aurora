/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import {
    Search,
    Text,
    Button,
    Tooltip,
    InlineSpinner,
} from "@vector-im/compound-web";
import type React from "react";
import InviteIcon from "@vector-im/compound-design-tokens/assets/web/icons/user-add-solid";
import { UserAddIcon } from "@vector-im/compound-design-tokens/assets/web/icons";

import { Flex } from "../utils/Flex";
import type { MemberListStore } from "./MemberListStore";

interface TooltipProps {
    canInvite: boolean;
    children: React.ReactNode;
}

const OptionalTooltip: React.FC<TooltipProps> = ({ canInvite, children }) => {
    if (canInvite) return children;
    // If the user isn't allowed to invite others to this room, wrap with a relevant tooltip.
    return (
        <Tooltip
            label={"You don't have permission to invite others to this room"}
        >
            {children}
        </Tooltip>
    );
};

interface Props {
    vm: MemberListStore;
}

const InviteButton: React.FC<Props> = ({ vm }) => {
    const shouldShowInvite = vm.shouldShowInvite;
    const shouldShowSearch = vm.shouldShowSearch;
    const disabled = !vm.canInvite;

    if (!shouldShowInvite) {
        // In this case, invite button should not be rendered.
        return null;
    }

    if (shouldShowSearch) {
        /// When rendered alongside a search box, the invite button is just an icon.
        return (
            <OptionalTooltip canInvite={vm.canInvite}>
                <Button
                    className="mx_MemberListHeaderView_invite_small"
                    kind="primary"
                    onClick={vm.onInviteButtonClick}
                    size="sm"
                    iconOnly={true}
                    Icon={InviteIcon}
                    disabled={disabled}
                    aria-label="Invite"
                    type="button"
                />
            </OptionalTooltip>
        );
    }

    // Without a search box, invite button is a full size button.
    return (
        <OptionalTooltip canInvite={vm.canInvite}>
            <Button
                kind="secondary"
                size="sm"
                Icon={UserAddIcon}
                className="mx_MemberListHeaderView_invite_large"
                disabled={!vm.canInvite}
                onClick={vm.onInviteButtonClick}
                type="button"
            >
                Invite
            </Button>
        </OptionalTooltip>
    );
};

/**
 * This should be:
 * A loading text with spinner while the memberlist loads.
 * Member count of the room when there's nothing in the search field.
 * Number of matching members during search or 'No result' if search found nothing.
 */
function getHeaderLabelJSX(vm: MemberListStore): React.ReactNode {
    if (vm.isLoading) {
        return (
            <Flex align="center" gap="8px">
                <InlineSpinner /> Loading...
            </Flex>
        );
    }
    if (vm.memberCount === 0) {
        return "No matches";
    }
    return `${vm.memberCount} members`;
}

export const MemberListHeaderView: React.FC<Props> = (props: Props) => {
    const vm = props.vm;
    console.log("memberlist header view render", vm.memberCount);
    let contentJSX: React.ReactNode;

    if (vm.shouldShowSearch) {
        // When we need to show the search box
        contentJSX = (
            <Flex
                justify="center"
                className="mx_MemberListHeaderView_container"
            >
                <Search
                    className="mx_MemberListHeaderView_search mx_no_textinput"
                    name="searchMembers"
                    placeholder="Filter members"
                    onChange={(e) =>
                        vm.search(
                            (e as React.ChangeEvent<HTMLInputElement>).target
                                .value,
                        )
                    }
                />
                <InviteButton vm={vm} />
            </Flex>
        );
    } else if (!vm.shouldShowSearch && vm.shouldShowInvite) {
        // When we don't need to show the search box but still need an invite button
        contentJSX = (
            <Flex
                justify="center"
                className="mx_MemberListHeaderView_container"
            >
                <InviteButton vm={vm} />
            </Flex>
        );
    } else {
        // No search box and no invite icon, so nothing to render!
        contentJSX = null;
    }

    return (
        <Flex
            className="mx_MemberListHeaderView"
            as="header"
            align="center"
            justify="space-between"
            direction="column"
        >
            {!vm.isLoading && contentJSX}
            <Text
                as="div"
                size="sm"
                weight="semibold"
                className="mx_MemberListHeaderView_label"
            >
                {getHeaderLabelJSX(vm)}
            </Text>
        </Flex>
    );
};
