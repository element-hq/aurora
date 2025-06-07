/*
 * Copyright 2025 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import "./RoomListHeaderView.css";
import { type JSX, useCallback, useSyncExternalStore } from "react";

//import OverflowHorizontalIcon from "@vector-im/compound-design-tokens/assets/web/icons/overflow-horizontal";
import FilterIcon from "@vector-im/compound-design-tokens/assets/web/icons/filter";
import ComposeIcon from "@vector-im/compound-design-tokens/assets/web/icons/compose";

type RoomListHeaderViewProps = {};

export function RoomListHeaderView({}: RoomListHeaderViewProps): JSX.Element {
    return (
        <div className="mx_RoomListHeader">
            <div className="mx_RoomListHeader_name">Chats</div>
            <button className="mx_RoomListHeader_icon">
                <FilterIcon fill="var(--cpd-color-icon-secondary)" />
            </button>
            <button className="mx_RoomListHeader_icon">
                <ComposeIcon fill="var(--cpd-color-icon-secondary)" />
            </button>
        </div>
    );
}
