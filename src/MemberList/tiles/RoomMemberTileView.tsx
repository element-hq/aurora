/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, { useEffect, useState, type JSX } from "react";

// import DisambiguatedProfile from "../../../messages/DisambiguatedProfile";
import {
    MembershipState_Tags,
    type RoomMember,
} from "../../generated/matrix_sdk_ffi";
// import { useMemberTileViewModel } from "../../../../viewmodels/memberlist/tiles/MemberTileViewModel";
// import { E2EIconView } from "./common/E2EIconView";
// import AvatarPresenceIconView from "./common/PresenceIconView";
import BaseAvatar from "../BaseAvatar";
import { InvitedIconView } from "./common/InvitedIconView";
import { MemberTileView } from "./common/MemberTileView";

interface IProps {
    member: RoomMember;
    showPresence?: boolean;
}

export function RoomMemberTileView(props: IProps): JSX.Element {
    const vm = props;

    const [member, setMember] = useState(vm.member);

    useEffect(() => {
        setMember(vm.member);
    }, [vm.member]);

    const av = (
        <BaseAvatar
            size="32px"
            name={member.displayName}
            idName={member.userId}
            title={member.userId}
            url={member.avatarUrl}
            altText={"User avatar"}
        />
    );
    // const nameJSX = (
    // 	<DisambiguatedProfile member={member} fallbackName={name || ""} />
    // );
    const nameJSX = member.displayName || member.userId;

    // const presenceState = member.presenceState;
    // let presenceJSX: JSX.Element | undefined;
    // if (vm.showPresence && presenceState) {
    // 	presenceJSX = <AvatarPresenceIconView presenceState={presenceState} />;
    // }

    let iconJsx: JSX.Element | undefined;
    // if (vm.e2eStatus) {
    // 	iconJsx = <E2EIconView status={vm.e2eStatus} />;
    // }
    if (member.membership.tag === MembershipState_Tags.Invite) {
        iconJsx = <InvitedIconView isThreePid={false} />;
    }

    return (
        <MemberTileView
            title={member.displayName}
            onClick={() => {}}
            avatarJsx={av}
            nameJsx={nameJSX}
            userLabel={member.userId}
            iconJsx={iconJsx}
            role={member.suggestedRoleForPowerLevel}
        />
    );
}
