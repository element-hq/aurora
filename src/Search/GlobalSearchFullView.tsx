/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { useViewModel } from "@element-hq/web-shared-components";
import { type JSX, useEffect } from "react";
import type { DirectorySearchViewModel } from "./DirectorySearchViewModel";
import styles from "./GlobalSearch.module.css";
import {
    GlobalSearchFilter,
    type GlobalSearchViewModel,
} from "./GlobalSearchViewModel";
import type { MessageSearchViewModel } from "./MessageSearchViewModel";
import {
    EmptyState,
    FilterChips,
    FullViewSectionHeader,
    MessageCard,
    MessageSubFilters,
    MoreLink,
    PersonCard,
    RoomCard,
} from "./SearchResultViews";

const FULL_VIEW_FILTERS = [
    GlobalSearchFilter.All,
    GlobalSearchFilter.People,
    GlobalSearchFilter.Rooms,
    GlobalSearchFilter.Messages,
    GlobalSearchFilter.Spaces,
    GlobalSearchFilter.Files,
] as const;

/** How many results of each kind the All filter shows before "More". */
const MAX_CATEGORY_RESULTS = 8;

interface GlobalSearchFullViewProps {
    vm: GlobalSearchViewModel;
}

/**
 * The expanded search: an overlay over the room list and room view with the
 * full filter bar and grouped result cards. Renders nothing while collapsed.
 */
export function GlobalSearchFullView({
    vm,
}: GlobalSearchFullViewProps): JSX.Element | null {
    const {
        query,
        filter,
        isFullView,
        directorySearchViewModel,
        messageSearchViewModel,
    } = useViewModel(vm);

    // Escape collapses back to the dropdown from anywhere in the full view.
    useEffect(() => {
        if (!isFullView) return;
        const onKeyDown = (e: KeyboardEvent): void => {
            if (e.key === "Escape") vm.onCollapseToDropdown();
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [isFullView, vm]);

    if (!isFullView) return null;

    return (
        <div
            role="dialog"
            aria-label="Global search"
            className={styles.fullView}
        >
            <div className={styles.fullViewFilters}>
                <FilterChips
                    filters={FULL_VIEW_FILTERS}
                    active={filter}
                    onChange={vm.onFilterChange}
                />
            </div>
            <div className={styles.fullViewScroll}>
                {/* Invisible backdrop: clicking the empty canvas collapses. */}
                <button
                    type="button"
                    aria-label="Close search"
                    className={styles.backdrop}
                    onClick={vm.onCollapseToDropdown}
                />
                <ResultsContent
                    vm={vm}
                    query={query}
                    filter={filter}
                    directory={directorySearchViewModel}
                    messages={messageSearchViewModel}
                />
            </div>
        </div>
    );
}

function ResultsContent({
    vm,
    query,
    filter,
    directory,
    messages,
}: {
    vm: GlobalSearchViewModel;
    query: string;
    filter: GlobalSearchFilter;
    directory: DirectorySearchViewModel;
    messages: MessageSearchViewModel;
}): JSX.Element {
    const { people, rooms, spaces } = useViewModel(directory);
    const {
        results: messageResults,
        loading: messagesLoading,
        endReached,
    } = useViewModel(messages);

    if (filter === GlobalSearchFilter.Files) {
        return (
            <EmptyState
                title="Coming soon"
                description="This feature is coming soon."
            />
        );
    }

    if (!query.trim()) {
        return (
            <EmptyState
                title="No results"
                description="Start typing to search."
            />
        );
    }

    if (filter === GlobalSearchFilter.Messages) {
        return (
            <div className={styles.fullViewContent}>
                <MessageSubFilters />
                {messageResults.length > 0 ? (
                    <>
                        <FullViewSectionHeader title="Results" compact />
                        <div
                            className={`${styles.cardList} ${styles.spacious}`}
                        >
                            {messageResults.map((message) => (
                                <MessageCard
                                    key={message.eventId}
                                    message={message}
                                    query={query}
                                    onClick={() =>
                                        vm.onMessageClick(
                                            message.roomId,
                                            message.eventId,
                                        )
                                    }
                                />
                            ))}
                        </div>
                        {messagesLoading ? (
                            <div className={styles.status}>Searching…</div>
                        ) : (
                            !endReached && (
                                <MoreLink
                                    label="More messages"
                                    onClick={messages.loadMore}
                                />
                            )
                        )}
                    </>
                ) : messagesLoading ? (
                    <div className={styles.status}>Searching…</div>
                ) : (
                    <EmptyState
                        title="No results"
                        description={`There are no results for "${query}." Try a new search term.`}
                    />
                )}
            </div>
        );
    }

    const isAll = filter === GlobalSearchFilter.All;
    const showPeople = isAll || filter === GlobalSearchFilter.People;
    const showRooms = isAll || filter === GlobalSearchFilter.Rooms;
    const showSpaces = isAll || filter === GlobalSearchFilter.Spaces;

    const hasPeople = showPeople && people.length > 0;
    const hasRooms = showRooms && rooms.length > 0;
    const hasSpaces = showSpaces && spaces.length > 0;
    const hasMessages = isAll && messageResults.length > 0;

    if (!hasPeople && !hasRooms && !hasSpaces && !hasMessages) {
        return (
            <EmptyState
                title="No results"
                description={`There are no results for "${query}." Try a new search term.`}
            />
        );
    }

    const cap = <T,>(items: T[]): T[] =>
        isAll ? items.slice(0, MAX_CATEGORY_RESULTS) : items;

    return (
        <div className={styles.fullViewContent}>
            {hasPeople && (
                <>
                    <FullViewSectionHeader title="People" />
                    <div className={styles.cardList}>
                        {cap(people).map((person) => (
                            <PersonCard
                                key={person.userId}
                                person={person}
                                query={query}
                                onClick={() => vm.onPersonClick(person)}
                            />
                        ))}
                    </div>
                    {isAll && people.length > MAX_CATEGORY_RESULTS && (
                        <MoreLink
                            label="More people"
                            onClick={() =>
                                vm.onFilterChange(GlobalSearchFilter.People)
                            }
                        />
                    )}
                </>
            )}
            {hasRooms && (
                <>
                    <FullViewSectionHeader title="Rooms" />
                    <div className={styles.cardList}>
                        {cap(rooms).map((room) => (
                            <RoomCard
                                key={room.roomId}
                                room={room}
                                query={query}
                                onClick={() => vm.onRoomClick(room.roomId)}
                            />
                        ))}
                    </div>
                    {isAll && rooms.length > MAX_CATEGORY_RESULTS && (
                        <MoreLink
                            label="More rooms"
                            onClick={() =>
                                vm.onFilterChange(GlobalSearchFilter.Rooms)
                            }
                        />
                    )}
                </>
            )}
            {hasMessages && (
                <>
                    <FullViewSectionHeader title="Messages" />
                    <div className={styles.cardList}>
                        {cap(messageResults).map((message) => (
                            <MessageCard
                                key={message.eventId}
                                message={message}
                                query={query}
                                onClick={() =>
                                    vm.onMessageClick(
                                        message.roomId,
                                        message.eventId,
                                    )
                                }
                            />
                        ))}
                    </div>
                    {(messageResults.length > MAX_CATEGORY_RESULTS ||
                        !endReached) && (
                        <MoreLink
                            label="More messages"
                            onClick={() =>
                                vm.onFilterChange(GlobalSearchFilter.Messages)
                            }
                        />
                    )}
                </>
            )}
            {hasSpaces && (
                <>
                    <FullViewSectionHeader title="Spaces" />
                    <div className={styles.cardList}>
                        {cap(spaces).map((space) => (
                            <RoomCard
                                key={space.roomId}
                                room={space}
                                query={query}
                                onClick={() => vm.onRoomClick(space.roomId)}
                            />
                        ))}
                    </div>
                    {isAll && spaces.length > MAX_CATEGORY_RESULTS && (
                        <MoreLink
                            label="More spaces"
                            onClick={() =>
                                vm.onFilterChange(GlobalSearchFilter.Spaces)
                            }
                        />
                    )}
                </>
            )}
        </div>
    );
}
