/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { BaseViewModel } from "@element-hq/web-shared-components";
import {
    type ClientInterface,
    type RoomInterface,
    type RoomListDynamicEntriesControllerInterface,
    RoomListEntriesDynamicFilterKind,
    type RoomListEntriesUpdate,
    RoomListEntriesUpdate_Tags,
    type RoomListEntriesWithDynamicAdaptersResultInterface,
    type RoomListServiceInterface,
    type UserProfile,
} from "../index.web";
import { mxcToUrl } from "../utils/mxcToUrl";
import { printRustError } from "../utils/printRustError";

/** A user matching the query: a DM contact or a user directory hit. */
export interface PersonResult {
    kind: "person";
    userId: string;
    name: string;
    avatarUrl?: string;
    /** The existing DM room with this person, if there is one. */
    dmRoomId?: string;
}

/** A joined room or space matching the query. */
export interface RoomResult {
    kind: "room" | "space";
    roomId: string;
    name: string;
    /** The canonical alias, when the room has one. */
    address?: string;
    avatarUrl?: string;
}

export interface DirectorySearchSnapshot {
    people: PersonResult[];
    rooms: RoomResult[];
    spaces: RoomResult[];
    /** Whether a user directory request is in flight. */
    peopleLoading: boolean;
}

export interface DirectorySearchViewModelProps {
    client: ClientInterface;
    roomListService: RoomListServiceInterface;
}

const PAGE_SIZE = 100;
const USER_DIRECTORY_LIMIT = 20n;
const USER_DIRECTORY_DEBOUNCE_MS = 300;

/**
 * Searches the rooms the user is in (split into people, rooms and spaces) and
 * the homeserver's user directory.
 *
 * Rooms come from a second dynamic view on the SDK's room list, filtered by
 * (normalised) room name, so DMs match on the other person's name. With an
 * empty query the view simply lists the most recent rooms, which the UI shows
 * as suggestions.
 */
export class DirectorySearchViewModel extends BaseViewModel<
    DirectorySearchSnapshot,
    DirectorySearchViewModelProps
> {
    private entries?: RoomListEntriesWithDynamicAdaptersResultInterface;
    private controller?: RoomListDynamicEntriesControllerInterface;
    private rooms: RoomInterface[] = [];
    private diffQueue: Promise<void> = Promise.resolve();
    private query = "";
    private directoryResults: UserProfile[] = [];
    private directoryTimer?: ReturnType<typeof setTimeout>;
    private directoryRequest = 0;

    public constructor(props: DirectorySearchViewModelProps) {
        super(props, {
            people: [],
            rooms: [],
            spaces: [],
            peopleLoading: false,
        });
        this.run();
    }

    private async run(): Promise<void> {
        try {
            const roomList = await this.props.roomListService.allRooms();
            this.entries = roomList.entriesWithDynamicAdapters(PAGE_SIZE, this);
            this.controller = this.entries.controller();
            this.controller.setFilter(roomFilter(this.query));
            this.controller.addOnePage();
            this.disposables.track(() => {
                this.entries?.entriesStream().cancel();
            });
        } catch (e) {
            printRustError("Failed to start room search", e);
        }
    }

    public setQuery = (query: string): void => {
        const trimmed = query.trim();
        if (trimmed === this.query) return;
        this.query = trimmed;
        // The SDK resets the entries when the filter changes, so the next
        // update starts from a clean list.
        this.controller?.setFilter(roomFilter(trimmed));
        this.searchUserDirectory(trimmed);
    };

    /** Called by the SDK when the filtered room list changes. */
    public onUpdate = (updates: RoomListEntriesUpdate[]): void => {
        this.diffQueue = this.diffQueue.then(() => this.applyDiff(updates));
    };

    private async applyDiff(updates: RoomListEntriesUpdate[]): Promise<void> {
        let rooms = [...this.rooms];
        for (const update of updates) {
            switch (update.tag) {
                case RoomListEntriesUpdate_Tags.Append:
                    rooms.push(...update.inner.values);
                    break;
                case RoomListEntriesUpdate_Tags.Clear:
                    rooms = [];
                    break;
                case RoomListEntriesUpdate_Tags.PushFront:
                    rooms.unshift(update.inner.value);
                    break;
                case RoomListEntriesUpdate_Tags.PushBack:
                    rooms.push(update.inner.value);
                    break;
                case RoomListEntriesUpdate_Tags.PopFront:
                    rooms.shift();
                    break;
                case RoomListEntriesUpdate_Tags.PopBack:
                    rooms.pop();
                    break;
                case RoomListEntriesUpdate_Tags.Insert:
                    rooms.splice(update.inner.index, 0, update.inner.value);
                    break;
                case RoomListEntriesUpdate_Tags.Set:
                    rooms[update.inner.index] = update.inner.value;
                    break;
                case RoomListEntriesUpdate_Tags.Remove:
                    rooms.splice(update.inner.index, 1);
                    break;
                case RoomListEntriesUpdate_Tags.Truncate:
                    rooms = rooms.slice(0, update.inner.length);
                    break;
                case RoomListEntriesUpdate_Tags.Reset:
                    rooms = [...update.inner.values];
                    break;
            }
        }
        this.rooms = rooms;
        await this.publish();
    }

    /** Rebuild the people/rooms/spaces lists from the current rooms. */
    private async publish(): Promise<void> {
        const people: PersonResult[] = [];
        const rooms: RoomResult[] = [];
        const spaces: RoomResult[] = [];
        const myUserId = this.props.client.userId();

        const infos = await Promise.all(
            this.rooms.map(async (room) => {
                try {
                    return await room.roomInfo();
                } catch (e) {
                    printRustError(`Failed to load room ${room.id()}`, e);
                    return undefined;
                }
            }),
        );

        const client = this.props.client;
        for (const info of infos) {
            if (!info) continue;
            const name = info.displayName?.trim() || info.id;
            const avatarUrl = info.avatarUrl
                ? mxcToUrl(client, info.avatarUrl)
                : undefined;
            if (info.isSpace) {
                spaces.push({
                    kind: "space",
                    roomId: info.id,
                    name,
                    address: info.canonicalAlias,
                    avatarUrl,
                });
            } else if (info.isDm || info.isDirect) {
                const hero = info.heroes.find((h) => h.userId !== myUserId);
                if (!hero) continue;
                people.push({
                    kind: "person",
                    userId: hero.userId,
                    name: hero.displayName?.trim() || name,
                    avatarUrl:
                        avatarUrl ??
                        (hero.avatarUrl
                            ? mxcToUrl(client, hero.avatarUrl)
                            : undefined),
                    dmRoomId: info.id,
                });
            } else {
                rooms.push({
                    kind: "room",
                    roomId: info.id,
                    name,
                    address: info.canonicalAlias,
                    avatarUrl,
                });
            }
        }

        this.snapshot.merge({
            people: this.mergeDirectoryResults(people),
            rooms,
            spaces,
        });
    }

    /** Append user directory hits that aren't already DM contacts. */
    private mergeDirectoryResults(contacts: PersonResult[]): PersonResult[] {
        const seen = new Set(contacts.map((p) => p.userId));
        const myUserId = this.props.client.userId();
        const people = [...contacts];
        for (const user of this.directoryResults) {
            if (user.userId === myUserId || seen.has(user.userId)) continue;
            seen.add(user.userId);
            people.push({
                kind: "person",
                userId: user.userId,
                name: user.displayName?.trim() || user.userId,
                avatarUrl: user.avatarUrl
                    ? mxcToUrl(this.props.client, user.avatarUrl)
                    : undefined,
            });
        }
        return people;
    }

    private searchUserDirectory(query: string): void {
        clearTimeout(this.directoryTimer);
        const request = ++this.directoryRequest;

        if (!query) {
            this.directoryResults = [];
            this.snapshot.merge({
                peopleLoading: false,
                people: this.mergeDirectoryResults(
                    this.getSnapshot().people.filter((p) => p.dmRoomId),
                ),
            });
            return;
        }

        this.snapshot.merge({ peopleLoading: true });
        this.directoryTimer = setTimeout(async () => {
            try {
                const { results } = await this.props.client.searchUsers(
                    query,
                    USER_DIRECTORY_LIMIT,
                );
                // Ignore responses to queries that have since been replaced.
                if (request !== this.directoryRequest) return;
                this.directoryResults = results;
            } catch (e) {
                if (request !== this.directoryRequest) return;
                printRustError("User directory search failed", e);
                this.directoryResults = [];
            }
            this.snapshot.merge({
                peopleLoading: false,
                people: this.mergeDirectoryResults(
                    this.getSnapshot().people.filter((p) => p.dmRoomId),
                ),
            });
        }, USER_DIRECTORY_DEBOUNCE_MS);
    }

    public dispose(): void {
        clearTimeout(this.directoryTimer);
        super.dispose();
    }
}

function roomFilter(query: string): RoomListEntriesDynamicFilterKind {
    const filters: RoomListEntriesDynamicFilterKind[] = [
        new RoomListEntriesDynamicFilterKind.NonLeft(),
        new RoomListEntriesDynamicFilterKind.DeduplicateVersions(),
    ];
    if (query) {
        filters.push(
            new RoomListEntriesDynamicFilterKind.NormalizedMatchRoomName({
                pattern: query,
            }),
        );
    }
    return new RoomListEntriesDynamicFilterKind.All({ filters });
}
