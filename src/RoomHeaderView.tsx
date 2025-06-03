/*
 * Copyright 2025 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import "./RoomHeaderView.css";
import "./TimelineStore";
import { type JSX, useCallback, useSyncExternalStore } from "react";
import TimelineStore from "./TimelineStore";

type RoomHeaderViewProps = {
    timelineStore: TimelineStore;
};

export const RoomHeaderView: React.FC<RoomHeaderViewProps> = ({
    timelineStore: timeline,
}) => {
    const items = useSyncExternalStore(
        timeline.subscribe,
        timeline.getSnapshot,
    );

    return (
        <div className="mx_RoomHeader">
            <div className="mx_RoomHeader_avatar">
                <img src=""/>
            </div>
            <div className="mx_RoomHeader_name">
                timeline.
            </div>
        </div>
    );
}
