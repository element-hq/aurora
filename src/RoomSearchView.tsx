/*
 * Copyright 2025 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import "./RoomSearchView.css";
import { type JSX, useCallback, useSyncExternalStore } from "react";

//import OverflowHorizontalIcon from "@vector-im/compound-design-tokens/assets/web/icons/overflow-horizontal";
import SearchIcon from "@vector-im/compound-design-tokens/assets/web/icons/search";
import ExploreIcon from "@vector-im/compound-design-tokens/assets/web/icons/explore";

type RoomSearchViewProps = {};

export function RoomSearchView({}: RoomSearchViewProps): JSX.Element {
    return (
        <div className="mx_RoomSearch">
            <button className="mx_RoomSearch_search">
                <SearchIcon fill="var(--cpd-color-icon-secondary)" />
                <div className="mx_RoomSearch_label">Search</div>
                <div className="mx_RoomSearch_shortcut">⌘ K</div>
            </button>
            <button className="mx_RoomSearch_icon">
                <ExploreIcon fill="var(--cpd-color-icon-secondary)" />
            </button>
        </div>
    );
}
