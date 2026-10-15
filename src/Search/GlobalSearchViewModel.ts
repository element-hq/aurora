/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { BaseViewModel } from "@element-hq/web-shared-components";
import {
    type ClientInterface,
    type RoomListServiceInterface,
    RoomPreset,
    RoomVisibility,
} from "../index.web";
import { mxcToUrl } from "../utils/mxcToUrl";
import { printRustError } from "../utils/printRustError";
import {
    DirectorySearchViewModel,
    type PersonResult,
} from "./DirectorySearchViewModel";
import { MessageSearchViewModel } from "./MessageSearchViewModel";

export enum GlobalSearchFilter {
    All = "All",
    People = "People",
    Rooms = "Rooms",
    Messages = "Messages",
    Spaces = "Spaces",
    Files = "Files",
}

/** A room the user previously opened from search. */
export interface RecentSearch {
    roomId: string;
    name: string;
    /** Canonical alias or room ID, shown under the name. */
    address: string;
    avatarUrl?: string;
    isSpace: boolean;
}

export interface GlobalSearchSnapshot {
    query: string;
    filter: GlobalSearchFilter;
    /** Whether the dropdown under the search field is open. */
    isOpen: boolean;
    /** Whether the full-view panel is open (instead of the dropdown). */
    isFullView: boolean;
    recentSearches: RecentSearch[];
    directorySearchViewModel: DirectorySearchViewModel;
    messageSearchViewModel: MessageSearchViewModel;
}

export interface GlobalSearchViewModelProps {
    client: ClientInterface;
    roomListService: RoomListServiceInterface;
    /** Open a room in the main panel. */
    openRoom: (roomId: string) => void;
}

const MAX_RECENT_SEARCHES = 10;

/**
 * State for the global search in the top bar: the query and filter, whether
 * the dropdown or full view is showing, recent searches, and the two search
 * sources (rooms/people and messages).
 */
export class GlobalSearchViewModel extends BaseViewModel<
    GlobalSearchSnapshot,
    GlobalSearchViewModelProps
> {
    private readonly recentSearchesKey: string;

    public constructor(props: GlobalSearchViewModelProps) {
        const directorySearchViewModel = new DirectorySearchViewModel({
            client: props.client,
            roomListService: props.roomListService,
        });
        const messageSearchViewModel = new MessageSearchViewModel({
            client: props.client,
        });
        super(props, {
            query: "",
            filter: GlobalSearchFilter.All,
            isOpen: false,
            isFullView: false,
            recentSearches: [],
            directorySearchViewModel,
            messageSearchViewModel,
        });
        this.disposables.track(directorySearchViewModel);
        this.disposables.track(messageSearchViewModel);
        this.recentSearchesKey = `aurora.globalSearch.recent.${props.client.userId()}`;
        this.loadRecentSearches();
    }

    // ── Query and filter ──────────────────────────────────────────────────

    public onQueryChange = (query: string): void => {
        this.snapshot.merge({ query, isOpen: true });
        this.propagateQuery(query);
    };

    /** Clicking the active filter deselects it, reverting to All. */
    public onFilterChange = (filter: GlobalSearchFilter): void => {
        const current = this.getSnapshot().filter;
        this.snapshot.merge({
            filter: current === filter ? GlobalSearchFilter.All : filter,
        });
    };

    /** Apply a filter from the `is:` command list, clearing the command. */
    public onCommandSelect = (filter: GlobalSearchFilter): void => {
        this.snapshot.merge({ filter, query: "" });
        this.propagateQuery("");
    };

    private propagateQuery(query: string): void {
        const { directorySearchViewModel, messageSearchViewModel } =
            this.getSnapshot();
        directorySearchViewModel.setQuery(query);
        messageSearchViewModel.setQuery(query);
    }

    // ── Open / close ──────────────────────────────────────────────────────

    public onOpen = (): void => {
        this.snapshot.merge({ isOpen: true });
    };

    public onClose = (): void => {
        this.snapshot.merge({ isOpen: false, isFullView: false });
    };

    public onExpandToFullView = (filter?: GlobalSearchFilter): void => {
        this.snapshot.merge({
            isOpen: true,
            isFullView: true,
            ...(filter ? { filter } : {}),
        });
    };

    public onCollapseToDropdown = (): void => {
        this.snapshot.merge({ isFullView: false });
    };

    /** Clear query and filter and close everything. */
    public onReset = (): void => {
        this.snapshot.merge({
            query: "",
            filter: GlobalSearchFilter.All,
            isOpen: false,
            isFullView: false,
        });
        this.propagateQuery("");
    };

    // ── Result actions ────────────────────────────────────────────────────

    public onRoomClick = (roomId: string): void => {
        this.rememberRoom(roomId);
        this.props.openRoom(roomId);
        this.onReset();
    };

    /** Open the DM with a person, creating one if there isn't one yet. */
    public onPersonClick = async (person: PersonResult): Promise<void> => {
        const existing = person.dmRoomId ?? this.findDmRoom(person.userId);
        if (existing) {
            this.onRoomClick(existing);
            return;
        }
        this.onReset();
        try {
            const roomId = await this.props.client.createRoom({
                isDirect: true,
                isEncrypted: true,
                invite: [person.userId],
                preset: RoomPreset.TrustedPrivateChat,
                visibility: new RoomVisibility.Private(),
                isSpace: false,
            });
            this.rememberRoom(roomId);
            this.props.openRoom(roomId);
        } catch (e) {
            printRustError(`Failed to start a chat with ${person.userId}`, e);
        }
    };

    public onMessageClick = (roomId: string, _eventId: string): void => {
        // Jumping to the event isn't supported by the timeline yet.
        this.onRoomClick(roomId);
    };

    private findDmRoom(userId: string): string | undefined {
        try {
            return this.props.client.getDmRoom(userId)?.id();
        } catch {
            return undefined;
        }
    }

    // ── Recent searches ───────────────────────────────────────────────────

    public onClearRecentSearches = (): void => {
        localStorage.removeItem(this.recentSearchesKey);
        this.snapshot.merge({ recentSearches: [] });
    };

    private readStoredRoomIds(): string[] {
        try {
            const raw = localStorage.getItem(this.recentSearchesKey);
            const ids: unknown = raw ? JSON.parse(raw) : [];
            return Array.isArray(ids)
                ? ids.filter((id): id is string => typeof id === "string")
                : [];
        } catch {
            return [];
        }
    }

    private rememberRoom(roomId: string): void {
        const ids = [
            roomId,
            ...this.readStoredRoomIds().filter((id) => id !== roomId),
        ].slice(0, MAX_RECENT_SEARCHES);
        localStorage.setItem(this.recentSearchesKey, JSON.stringify(ids));
        this.loadRecentSearches();
    }

    /** Resolve the stored room IDs against the client's rooms. */
    private async loadRecentSearches(): Promise<void> {
        const entries = await Promise.all(
            this.readStoredRoomIds().map(async (roomId) => {
                try {
                    const room = this.props.client.getRoom(roomId);
                    if (!room) return undefined;
                    const info = await room.roomInfo();
                    return {
                        roomId,
                        name: info.displayName?.trim() || roomId,
                        address: info.canonicalAlias ?? roomId,
                        avatarUrl: info.avatarUrl
                            ? mxcToUrl(this.props.client, info.avatarUrl)
                            : undefined,
                        isSpace: info.isSpace,
                    } satisfies RecentSearch;
                } catch {
                    return undefined;
                }
            }),
        );
        this.snapshot.merge({
            recentSearches: entries.filter((e) => e !== undefined),
        });
    }
}
