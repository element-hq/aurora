/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { useViewModel } from "@element-hq/web-shared-components";
import ChevronLeftIcon from "@vector-im/compound-design-tokens/assets/web/icons/chevron-left";
import ChevronRightIcon from "@vector-im/compound-design-tokens/assets/web/icons/chevron-right";
import CloseIcon from "@vector-im/compound-design-tokens/assets/web/icons/close";
import HistoryIcon from "@vector-im/compound-design-tokens/assets/web/icons/history";
import { Tooltip } from "@vector-im/compound-web";
import classNames from "classnames";
import {
    type JSX,
    type KeyboardEvent,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import elementLogoUrl from "../assets/element-logo.svg";
import type { ClientViewModel } from "../ClientViewModel";
import type { RoomHistoryEntry } from "../client-view.types";
import BaseAvatar from "../MemberList/BaseAvatar";
import { GlobalSearchDropdown } from "../Search/GlobalSearchDropdown";
import {
    GlobalSearchFilter,
    type GlobalSearchViewModel,
} from "../Search/GlobalSearchViewModel";
import { UserMenu } from "../UserMenu";
import styles from "./TopBar.module.css";

interface TopBarProps {
    clientViewModel: ClientViewModel;
    onAddAccount: () => void;
}

/**
 * The bar at the top of the app: Element logo, room navigation and global
 * search in the centre, and the user menu on the right.
 */
export function TopBar({
    clientViewModel,
    onAddAccount,
}: TopBarProps): JSX.Element {
    const { globalSearchViewModel, canGoBack, canGoForward, recentRooms } =
        useViewModel(clientViewModel);

    return (
        <header className={styles.topBar}>
            <div className={styles.side}>
                <ElementLogo />
            </div>

            <div className={styles.centre}>
                <div className={styles.nav}>
                    <Tooltip label="Go back">
                        <button
                            type="button"
                            className={styles.navButton}
                            aria-label="Go back"
                            disabled={!canGoBack}
                            onClick={() => {
                                globalSearchViewModel?.onReset();
                                clientViewModel.goBack();
                            }}
                        >
                            <ChevronLeftIcon />
                        </button>
                    </Tooltip>
                    <Tooltip label="Go forward">
                        <button
                            type="button"
                            className={styles.navButton}
                            aria-label="Go forward"
                            disabled={!canGoForward}
                            onClick={() => {
                                globalSearchViewModel?.onReset();
                                clientViewModel.goForward();
                            }}
                        >
                            <ChevronRightIcon />
                        </button>
                    </Tooltip>
                    <HistoryMenu
                        rooms={recentRooms}
                        onRoomClick={(roomId) => {
                            globalSearchViewModel?.onReset();
                            clientViewModel.openRoom(roomId);
                        }}
                    />
                </div>

                {globalSearchViewModel && (
                    <GlobalSearchField vm={globalSearchViewModel} />
                )}
            </div>

            <div className={classNames(styles.side, styles.right)}>
                <UserMenu onAddAccount={onAddAccount} />
            </div>
        </header>
    );
}

function ElementLogo(): JSX.Element {
    return (
        <div className={styles.logo}>
            <img
                src={elementLogoUrl}
                alt="Element"
                className={styles.logoImage}
            />
            <span className={styles.wordmark}>element</span>
            <span className={styles.proPill}>Aurora</span>
        </div>
    );
}

// ── History ───────────────────────────────────────────────────────────────────

function HistoryMenu({
    rooms,
    onRoomClick,
}: {
    rooms: RoomHistoryEntry[];
    onRoomClick: (roomId: string) => void;
}): JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useClickOutside(ref, isOpen, () => setIsOpen(false));

    return (
        <div ref={ref} className={styles.historyWrap}>
            <Tooltip label="History">
                <button
                    type="button"
                    className={classNames(styles.navButton, {
                        [styles.active]: isOpen,
                    })}
                    aria-label="History"
                    aria-expanded={isOpen}
                    onClick={() => setIsOpen((open) => !open)}
                >
                    <HistoryIcon />
                </button>
            </Tooltip>
            {isOpen && (
                <div className={styles.historyDropdown}>
                    <div className={styles.historyHeader}>Recent</div>
                    <div className={styles.historyItems}>
                        {rooms.length === 0 ? (
                            <div className={styles.historyEmpty}>
                                No recently viewed rooms
                            </div>
                        ) : (
                            rooms.map((room) => (
                                <button
                                    key={room.roomId}
                                    type="button"
                                    className={styles.historyItem}
                                    onClick={() => {
                                        setIsOpen(false);
                                        onRoomClick(room.roomId);
                                    }}
                                >
                                    <BaseAvatar
                                        idName={room.roomId}
                                        name={room.name}
                                        url={room.avatarUrl}
                                        size="32px"
                                    />
                                    <span className={styles.historyItemText}>
                                        <span
                                            className={classNames(
                                                styles.historyItemName,
                                                styles.truncate,
                                            )}
                                        >
                                            {room.name}
                                        </span>
                                        <span
                                            className={classNames(
                                                styles.historyItemSubtitle,
                                                styles.truncate,
                                            )}
                                        >
                                            {room.address}
                                        </span>
                                    </span>
                                </button>
                            ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

// ── Search field ──────────────────────────────────────────────────────────────

function GlobalSearchField({ vm }: { vm: GlobalSearchViewModel }): JSX.Element {
    const { query, filter, isOpen, isFullView } = useViewModel(vm);
    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const isFilterActive = filter !== GlobalSearchFilter.All;

    // Clicking outside the field and its dropdown closes the dropdown. The
    // full view lives elsewhere in the tree, so leave it alone.
    useClickOutside(containerRef, isOpen && !isFullView, vm.onClose);

    // ⌘K / Ctrl+K focuses the search from anywhere.
    useEffect(() => {
        const onKeyDown = (e: globalThis.KeyboardEvent): void => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                inputRef.current?.focus();
                vm.onOpen();
            }
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [vm]);

    const onKeyDown = useCallback(
        (e: KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Escape") {
                vm.onClose();
                inputRef.current?.blur();
            } else if (e.key === "Enter") {
                vm.onExpandToFullView();
            } else if (
                e.key === "Backspace" &&
                isFilterActive &&
                query.length === 0
            ) {
                // Backspace on an empty query removes the filter prefix.
                vm.onFilterChange(filter);
            }
        },
        [vm, isFilterActive, query, filter],
    );

    return (
        <div ref={containerRef} className={styles.searchWrap}>
            {/* A label so clicking anywhere on the pill focuses the input. */}
            <label className={styles.pill}>
                {isFilterActive && (
                    <span
                        className={styles.filterPrefix}
                    >{`is:${filter}`}</span>
                )}
                <input
                    ref={inputRef}
                    type="search"
                    className={styles.input}
                    placeholder={isFilterActive ? "" : "Search…"}
                    value={query}
                    onChange={(e) => vm.onQueryChange(e.target.value)}
                    onFocus={vm.onOpen}
                    onKeyDown={onKeyDown}
                    role="combobox"
                    aria-label="Global search"
                    aria-expanded={isOpen}
                    aria-controls="global-search-dropdown"
                    aria-autocomplete="list"
                />
                {(isFilterActive || query.length > 0) && (
                    <button
                        type="button"
                        className={styles.clear}
                        aria-label="Clear search"
                        onClick={vm.onReset}
                    >
                        <CloseIcon />
                    </button>
                )}
            </label>
            {isOpen && !isFullView && <GlobalSearchDropdown vm={vm} />}
        </div>
    );
}

/** Call `onOutside` on pointer down outside `ref` while `active`. */
function useClickOutside(
    ref: React.RefObject<HTMLElement | null>,
    active: boolean,
    onOutside: () => void,
): void {
    useEffect(() => {
        if (!active) return;
        const onPointerDown = (e: PointerEvent): void => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                onOutside();
            }
        };
        document.addEventListener("pointerdown", onPointerDown);
        return () => document.removeEventListener("pointerdown", onPointerDown);
    }, [ref, active, onOutside]);
}
