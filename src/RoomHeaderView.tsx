/*
 * Copyright 2025 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import "./RoomHeaderView.css";
import "./viewmodel/TimelineViewModel";
import { Avatar } from "@vector-im/compound-web";
import type React from "react";
import type { RoomSummary } from "./RoomList/RoomSummary";

type RoomHeaderViewProps = {
    roomHeaderViewModel?: RoomSummary;
};

export const RoomHeaderView: React.FC<RoomHeaderViewProps> = ({
    roomHeaderViewModel,
}) => {
    if (!roomHeaderViewModel) {
        return null;
    }

    return (
        <div className="mx_RoomHeader">
            <div className="mx_RoomHeader_avatar">
                <Avatar
                    id={roomHeaderViewModel.id}
                    name={roomHeaderViewModel.name}
                    src={roomHeaderViewModel.avatar || ""}
                    size="40px"
                />
            </div>
            <div className="mx_RoomHeader_name">{roomHeaderViewModel.name}</div>
        </div>
    );
};
