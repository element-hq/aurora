/*
 * Copyright 2025 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import type React from "react";
import { useViewModel } from "@element-hq/web-shared-components";
import { Composer } from "./Composer";
import MemberListView from "./MemberList/MemberListView";
import { RoomHeaderView } from "./RoomHeaderView";
import { Timeline } from "./Timeline";
import type { RoomViewModel } from "./viewmodel/RoomViewModel";

interface RoomViewProps {
    roomViewModel: RoomViewModel;
}

export const RoomView: React.FC<RoomViewProps> = ({ roomViewModel }) => {
    const {
        timelineViewModel,
        memberListViewModel,
        roomHeaderViewModel,
        roomId,
    } = useViewModel(roomViewModel);

    return (
        <>
            <main className="mx_MainPanel">
                <RoomHeaderView roomHeaderViewModel={roomHeaderViewModel} />
                <Timeline timelineViewModel={timelineViewModel} />
                <Composer timelineViewModel={timelineViewModel} />
            </main>
            <MemberListView vm={memberListViewModel} />
        </>
    );
};
