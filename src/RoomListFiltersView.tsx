/*
 * Copyright 2025 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { ChatFilter } from "@vector-im/compound-web";
import React, { type JSX, useSyncExternalStore } from "react";
import "./RoomListFiltersView.css";

import { FILTERS, type SupportedFilters } from "./Filter";
import type RoomListStore from "./RoomListStore";
import { RoomListEntriesDynamicFilterKind_Tags } from "./generated/matrix_sdk_ffi";
import { Flex } from "./utils/Flex";

interface RoomListFiltersViewProps {
    store: RoomListStore;
}

/**
 * The primary filters for the room list
 */
export function RoomListFiltersView({
    store,
}: RoomListFiltersViewProps): JSX.Element {
    const vm = useRoomListViewModel(store);

    return (
        <Flex
            as="ul"
            role="listbox"
            className="mx_RoomListFilters"
            align="center"
            gap="var(--cpd-space-2x)"
            wrap="wrap"
        >
            {vm.filters.map((filter) => (
                <li
                    role="option"
                    aria-selected={filter.active}
                    key={filter.name}
                >
                    <ChatFilter
                        selected={filter.active}
                        onClick={filter.toggle}
                    >
                        {filter.name}
                    </ChatFilter>
                </li>
            ))}
        </Flex>
    );
}

function useRoomListViewModel(store: RoomListStore) {
    const state = useSyncExternalStore(store.subscribe, store.getSnapshot);

    return {
        filters: Object.entries(FILTERS)
            .filter(
                ([key]) =>
                    key !== RoomListEntriesDynamicFilterKind_Tags.NonLeft,
            )
            .map(([key, value]) => {
                return {
                    active: key === state?.filter,
                    name: value.name,
                    toggle: () => store.toggleFilter(key as SupportedFilters),
                };
            }),
    };
}
