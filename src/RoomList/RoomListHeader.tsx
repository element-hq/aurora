/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import {
    RoomListHeaderView,
    useCreateAutoDisposedViewModel,
} from "@element-hq/web-shared-components";
import { RoomListHeaderViewModel } from "./RoomListHeaderViewModel";
import type { RoomListViewViewModel } from "./RoomListViewViewModel";

interface RoomListHeaderProps {
    roomList: RoomListViewViewModel;
}

export function RoomListHeader({ roomList }: RoomListHeaderProps) {
    const vm = useCreateAutoDisposedViewModel(
        () => new RoomListHeaderViewModel({ roomList }),
    );

    return <RoomListHeaderView vm={vm} />;
}
