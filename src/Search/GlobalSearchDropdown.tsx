/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { useViewModel } from "@element-hq/web-shared-components";
import type { JSX } from "react";
import type { PersonResult, RoomResult } from "./DirectorySearchViewModel";
import styles from "./GlobalSearch.module.css";
import {
    GlobalSearchFilter,
    type GlobalSearchViewModel,
} from "./GlobalSearchViewModel";
import {
    FilterChips,
    LabelRow,
    Notice,
    PersonRow,
    RoomRow,
    SearchForRow,
    SectionHeader,
    ViewAllButton,
} from "./SearchResultViews";

const DROPDOWN_FILTERS = [
    GlobalSearchFilter.People,
    GlobalSearchFilter.Rooms,
    GlobalSearchFilter.Messages,
    GlobalSearchFilter.Spaces,
] as const;

const FILTER_LABELS: Record<GlobalSearchFilter, string> = {
    [GlobalSearchFilter.All]: "results",
    [GlobalSearchFilter.People]: "people",
    [GlobalSearchFilter.Rooms]: "rooms",
    [GlobalSearchFilter.Messages]: "messages",
    [GlobalSearchFilter.Spaces]: "spaces",
    [GlobalSearchFilter.Files]: "files",
};

const GROUPED_LIMIT = 3;
const SCOPED_LIMIT = 6;

interface GlobalSearchDropdownProps {
    vm: GlobalSearchViewModel;
}

/**
 * The panel under the search field: filter chips, then recent searches,
 * grouped results, or results scoped to the active filter.
 */
export function GlobalSearchDropdown({
    vm,
}: GlobalSearchDropdownProps): JSX.Element {
    const { query, filter, recentSearches, directorySearchViewModel } =
        useViewModel(vm);
    const { people, rooms, spaces } = useViewModel(directorySearchViewModel);

    const hasQuery = query.trim().length > 0;
    const isFilterActive = filter !== GlobalSearchFilter.All;

    // Command mode: the user typed "is:" and no filter is active yet.
    const isCommandMode =
        !isFilterActive && query.toLowerCase().startsWith("is:");
    const commandSearch = isCommandMode ? query.slice(3).toLowerCase() : "";
    const matchingCommands = isCommandMode
        ? DROPDOWN_FILTERS.filter((f) =>
              f.toLowerCase().startsWith(commandSearch),
          )
        : [];

    const onPerson = (person: PersonResult): void => {
        vm.onPersonClick(person);
    };
    const onRoom = (room: RoomResult): void => vm.onRoomClick(room.roomId);
    const expand = (): void => vm.onExpandToFullView();
    const expandMessages = (): void =>
        vm.onExpandToFullView(GlobalSearchFilter.Messages);

    const hasDirectoryResults =
        people.length > 0 || rooms.length > 0 || spaces.length > 0;

    let content: JSX.Element;
    if (isCommandMode) {
        content = (
            <div className={styles.group}>
                {matchingCommands.length > 0 ? (
                    matchingCommands.map((f) => (
                        <LabelRow
                            key={f}
                            icon="filter"
                            onClick={() => vm.onCommandSelect(f)}
                        >
                            is:<strong>{f}</strong>
                        </LabelRow>
                    ))
                ) : (
                    <Notice>No matching filter</Notice>
                )}
            </div>
        );
    } else if (!isFilterActive && !hasQuery) {
        // Default state: recent searches.
        content =
            recentSearches.length > 0 ? (
                <div className={styles.group}>
                    <SectionHeader label="Recent searches" />
                    {recentSearches.slice(0, SCOPED_LIMIT).map((recent) => (
                        <RoomRow
                            key={recent.roomId}
                            room={recent}
                            onClick={() => vm.onRoomClick(recent.roomId)}
                        />
                    ))}
                </div>
            ) : (
                <Notice icon="history">No recent search to show</Notice>
            );
    } else if (!isFilterActive) {
        // Query without a filter: grouped results.
        content = (
            <>
                {people.length > 0 && (
                    <div className={styles.group}>
                        <SectionHeader label="People" />
                        {people.slice(0, GROUPED_LIMIT).map((person) => (
                            <PersonRow
                                key={person.userId}
                                person={person}
                                onClick={() => onPerson(person)}
                            />
                        ))}
                    </div>
                )}
                {rooms.length > 0 && (
                    <div className={styles.group}>
                        <SectionHeader label="Rooms" />
                        {rooms.slice(0, GROUPED_LIMIT).map((room) => (
                            <RoomRow
                                key={room.roomId}
                                room={room}
                                onClick={() => onRoom(room)}
                            />
                        ))}
                    </div>
                )}
                {spaces.length > 0 && (
                    <div className={styles.group}>
                        <SectionHeader label="Spaces" />
                        {spaces.slice(0, GROUPED_LIMIT).map((space) => (
                            <RoomRow
                                key={space.roomId}
                                room={{ ...space, isSpace: true }}
                                onClick={() => onRoom(space)}
                            />
                        ))}
                    </div>
                )}
                <div className={styles.group}>
                    {!hasDirectoryResults && (
                        <SearchForRow query={query} onClick={expand} />
                    )}
                    <LabelRow icon="message" onClick={expandMessages}>
                        See messages for “{query}”
                    </LabelRow>
                </div>
                <ViewAllButton label="View all results" onClick={expand} />
            </>
        );
    } else {
        // A filter is active: scoped suggestions (no query) or results.
        const viewAllLabel = `View all ${FILTER_LABELS[filter]}`;
        let scoped: JSX.Element;
        switch (filter) {
            case GlobalSearchFilter.People:
                scoped = (
                    <ScopedList
                        hasQuery={hasQuery}
                        query={query}
                        count={people.length}
                        onSearchFor={expand}
                    >
                        {people.slice(0, SCOPED_LIMIT).map((person) => (
                            <PersonRow
                                key={person.userId}
                                person={person}
                                onClick={() => onPerson(person)}
                            />
                        ))}
                    </ScopedList>
                );
                break;
            case GlobalSearchFilter.Rooms:
                scoped = (
                    <ScopedList
                        hasQuery={hasQuery}
                        query={query}
                        count={rooms.length}
                        onSearchFor={expand}
                    >
                        {rooms.slice(0, SCOPED_LIMIT).map((room) => (
                            <RoomRow
                                key={room.roomId}
                                room={room}
                                onClick={() => onRoom(room)}
                            />
                        ))}
                    </ScopedList>
                );
                break;
            case GlobalSearchFilter.Spaces:
                scoped = (
                    <ScopedList
                        hasQuery={hasQuery}
                        query={query}
                        count={spaces.length}
                        onSearchFor={expand}
                    >
                        {spaces.slice(0, SCOPED_LIMIT).map((space) => (
                            <RoomRow
                                key={space.roomId}
                                room={{ ...space, isSpace: true }}
                                onClick={() => onRoom(space)}
                            />
                        ))}
                    </ScopedList>
                );
                break;
            default:
                // Messages and files only show in the full view.
                scoped = hasQuery ? (
                    <div className={styles.group}>
                        <LabelRow icon="message" onClick={expand}>
                            See messages for “{query}”
                        </LabelRow>
                    </div>
                ) : (
                    <Notice icon="history">Start typing to search</Notice>
                );
        }
        content = (
            <>
                {scoped}
                <ViewAllButton label={viewAllLabel} onClick={expand} />
            </>
        );
    }

    return (
        <div
            id="global-search-dropdown"
            role="dialog"
            aria-label="Search"
            className={styles.dropdown}
        >
            <div className={styles.dropdownFilters}>
                <FilterChips
                    filters={DROPDOWN_FILTERS}
                    active={filter}
                    onChange={vm.onFilterChange}
                />
            </div>
            {content}
        </div>
    );
}

/**
 * A scoped list for one filter: a "Suggestions" header without a query, the
 * matching rows with one, or the "Search results for" fallback when empty.
 */
function ScopedList({
    hasQuery,
    query,
    count,
    onSearchFor,
    children,
}: {
    hasQuery: boolean;
    query: string;
    count: number;
    onSearchFor: () => void;
    children: JSX.Element[];
}): JSX.Element {
    if (count === 0) {
        return hasQuery ? (
            <div className={styles.group}>
                <SearchForRow query={query} onClick={onSearchFor} />
            </div>
        ) : (
            <Notice icon="history">No suggestions to show</Notice>
        );
    }
    return (
        <div className={styles.group}>
            {!hasQuery && <SectionHeader label="Suggestions" />}
            {children}
        </div>
    );
}
