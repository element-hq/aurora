/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import {
    BaseViewModel,
    type CollapseSectionsOption,
    type RoomListViewSnapshot,
    type FilterId,
    type RoomListViewActions,
    type RoomListSection,
} from "@element-hq/web-shared-components";
import {
    type RoomInterface,
    type RoomListDynamicEntriesControllerInterface,
    RoomListEntriesDynamicFilterKind,
    type RoomListEntriesUpdate,
    RoomListEntriesUpdate_Tags,
    type RoomListEntriesWithDynamicAdaptersResultInterface,
    RoomListLoadingState,
    type TaskHandleInterface,
    type RoomListServiceInterface,
    type SyncServiceInterface,
    RoomListFilterCategory,
    RoomListFilterReadReceipts,
} from "../index.web";
import { buildRoomSummary, type RoomSummary } from "./RoomSummary.ts";
import { RoomListItemViewModel } from "./RoomListItemViewModel";
import { RoomListSectionHeaderViewModel } from "./RoomListSectionHeaderViewModel";
import {
    getSectionForRoom,
    isSectionTag,
    partitionRooms,
    type SectionTag,
} from "./sections.ts";

/**
 * While a filter is active the list is flat, which shared-components models as a single section.
 */
const FLAT_LIST_SECTION_ID = "all";

/**
 * Number of rooms the Rust SDK loads per page.
 */
const PAGE_SIZE = 200;

/**
 * Simple room display information for rendering avatars.
 * This is what gets passed as the opaque "room" in the RoomListItemViewSnapshot.
 */
export interface RoomDisplayInfo {
    id: string;
    name: string;
    avatar?: string;
}

import type { ClientInterface } from "../generated/matrix_sdk_ffi.ts";

interface RoomListViewViewModelProps {
    syncServiceInterface: SyncServiceInterface;
    roomListService: RoomListServiceInterface;
    client: ClientInterface;
    openRoom: (roomId: string) => void;
}

/**
 * Map FilterId from shared-components to Rust SDK filter methods
 */
const filterIdToRustFilter: Map<FilterId, RoomListEntriesDynamicFilterKind> =
    new Map([
        [
            "unread",
            new RoomListEntriesDynamicFilterKind.All({
                filters: [
                    new RoomListEntriesDynamicFilterKind.ReadReceipts({
                        expect: RoomListFilterReadReceipts.Notifications,
                    }),
                    new RoomListEntriesDynamicFilterKind.DeduplicateVersions(),
                ],
            }),
        ],
        [
            "people",
            new RoomListEntriesDynamicFilterKind.All({
                filters: [
                    new RoomListEntriesDynamicFilterKind.Category({
                        expect: RoomListFilterCategory.People,
                    }),
                    new RoomListEntriesDynamicFilterKind.Joined(),
                    new RoomListEntriesDynamicFilterKind.DeduplicateVersions(),
                ],
            }),
        ],
        [
            "rooms",
            new RoomListEntriesDynamicFilterKind.All({
                filters: [
                    new RoomListEntriesDynamicFilterKind.Category({
                        expect: RoomListFilterCategory.Group,
                    }),
                    new RoomListEntriesDynamicFilterKind.Joined(),
                    new RoomListEntriesDynamicFilterKind.DeduplicateVersions(),
                ],
            }),
        ],
    ]);

function sectionsEqual(a: RoomListSection[], b: RoomListSection[]): boolean {
    return (
        a.length === b.length &&
        a.every(
            (section, i) =>
                section.id === b[i].id &&
                section.roomIds.length === b[i].roomIds.length &&
                section.roomIds.every((id, j) => id === b[i].roomIds[j]),
        )
    );
}

/**
 * RoomListViewViewModel for Aurora that implements the shared-components interface
 * but is backed by the Rust SDK room list service.
 */
export class RoomListViewViewModel
    extends BaseViewModel<RoomListViewSnapshot, RoomListViewViewModelProps>
    implements RoomListViewActions
{
    // Rust SDK state
    private controller?: RoomListDynamicEntriesControllerInterface;
    private stateStream?: TaskHandleInterface;
    private roomListEntriesWithDynamicAdapters?: RoomListEntriesWithDynamicAdaptersResultInterface;
    private roomList?: Awaited<
        ReturnType<typeof this.props.roomListService.allRooms>
    >;
    private diffQueue: Promise<void> = Promise.resolve();
    private hasSetupEntries = false;

    /** Number of rooms requested from the Rust SDK so far */
    private requestedLimit = 0;
    /** Total number of rooms the server knows about, once known */
    private maximumNumberOfRooms?: number;

    // State tracking
    private activeFilter?: FilterId;
    private activeRoomId?: string;
    private rooms: RoomSummary[] = [];
    /** Room IDs in the order they are displayed, excluding collapsed sections */
    private visibleRoomIds: string[] = [];
    /** Expansion state of each section saved while a drag is in progress */
    private savedExpansionStates = new Map<SectionTag, boolean>();

    // Child view models
    private roomItemViewModels = new Map<string, RoomListItemViewModel>();
    private sectionHeaderViewModels = new Map<
        SectionTag,
        RoomListSectionHeaderViewModel
    >();

    public constructor(props: RoomListViewViewModelProps) {
        // Favourites and Low priority aren't offered as filters because they are sections
        const filterIds: FilterId[] = ["unread", "people", "rooms"];

        super(props, {
            isLoadingRooms: true,
            isRoomListEmpty: true,
            filterIds,
            activeFilterId: undefined,
            roomListState: {
                activeRoomIndex: undefined,
                spaceId: undefined,
                filterKeys: undefined,
            },
            sections: [{ id: FLAT_LIST_SECTION_ID, roomIds: [] }],
            isFlatList: true,
            canCreateRoom: true, // Aurora generally allows room creation
        });

        this.disposables.track(() => {
            for (const vm of this.roomItemViewModels.values()) vm.dispose();
            for (const vm of this.sectionHeaderViewModels.values())
                vm.dispose();
        });

        this.run();
    }

    /**
     * Initialize the room list from the Rust SDK
     */
    private async run(): Promise<void> {
        try {
            // Get the room list from the Rust SDK
            this.roomList = await this.props.roomListService.allRooms();

            // Subscribe to loading state
            const { state, stateStream } = this.roomList.loadingState({
                onUpdate: this.handleLoadingStateChange,
            });
            this.stateStream = stateStream;

            // Handle initial state
            this.handleLoadingStateChange(state);

            this.disposables.track(() => {
                this.stateStream?.cancel();
            });
        } catch (error) {
            console.error("Failed to initialize room list:", error);
            this.snapshot.merge({
                isLoadingRooms: false,
                isRoomListEmpty: true,
            });
        }
    }

    /**
     * Set up the initial room list entries
     */
    private setupEntries(): void {
        if (!this.roomList || this.hasSetupEntries) return;

        this.hasSetupEntries = true;

        // Get the entries with dynamic adapters
        this.roomListEntriesWithDynamicAdapters =
            this.roomList.entriesWithDynamicAdapters(PAGE_SIZE, this);
        this.controller = this.roomListEntriesWithDynamicAdapters.controller();
        this.requestedLimit = PAGE_SIZE;

        // Add filter if one is active
        if (this.activeFilter) {
            const rustFilter = filterIdToRustFilter.get(this.activeFilter);
            if (rustFilter !== undefined) {
                this.controller.setFilter(rustFilter);
            }
        } else {
            // Default filter: NonLeft with deduplication
            this.controller.setFilter(
                new RoomListEntriesDynamicFilterKind.All({
                    filters: [
                        new RoomListEntriesDynamicFilterKind.NonLeft(),
                        new RoomListEntriesDynamicFilterKind.DeduplicateVersions(),
                    ],
                }),
            );
        }

        // Load initial page
        this.loadNextPage();
    }

    /**
     * Ask the Rust SDK for another page of rooms. Like the SDK, stop growing
     * the list once it covers every room the server knows about.
     */
    private loadNextPage(): void {
        if (
            !this.controller ||
            this.maximumNumberOfRooms === undefined ||
            this.requestedLimit >= this.maximumNumberOfRooms
        ) {
            return;
        }
        this.controller.addOnePage();
        this.requestedLimit += PAGE_SIZE;
    }

    /**
     * Handle loading state changes from the room list
     */
    private handleLoadingStateChange = (state: RoomListLoadingState): void => {
        if (RoomListLoadingState.NotLoaded.instanceOf(state)) {
            this.snapshot.merge({
                isLoadingRooms: true,
            });
        } else if (RoomListLoadingState.Loaded.instanceOf(state)) {
            this.snapshot.merge({
                isLoadingRooms: false,
            });
            this.maximumNumberOfRooms = state.inner.maximumNumberOfRooms;

            // Only setup entries once, even if Loaded fires multiple times
            if (!this.hasSetupEntries) {
                this.setupEntries();
            } else {
                // The server may know about more rooms now
                this.maybeLoadNextPage();
            }
        }
    };

    /**
     * Parse a room from the Rust SDK into a RoomSummary
     */
    private async parseRoom(room: RoomInterface): Promise<RoomSummary> {
        const [roomInfo, latestEvent] = await Promise.all([
            room.roomInfo(),
            room.latestEvent(),
        ]);
        return buildRoomSummary(this.props.client, room, roomInfo, latestEvent);
    }

    /**
     * Called by the Rust SDK when room list updates occur
     */
    public onUpdate = async (
        updates: RoomListEntriesUpdate[],
    ): Promise<void> => {
        this.diffQueue = this.diffQueue.then(() => this.applyDiff(updates));
    };

    /**
     * Apply diff updates to the room list
     */
    private async applyDiff(updates: RoomListEntriesUpdate[]): Promise<void> {
        let newRooms = [...this.rooms];

        for (const update of updates) {
            switch (update.tag) {
                case RoomListEntriesUpdate_Tags.Append:
                    newRooms.push(
                        ...(await Promise.all(
                            update.inner.values.map((room) =>
                                this.parseRoom(room),
                            ),
                        )),
                    );
                    break;
                case RoomListEntriesUpdate_Tags.Set:
                    newRooms[update.inner.index] = await this.parseRoom(
                        update.inner.value,
                    );
                    break;
                case RoomListEntriesUpdate_Tags.PushBack:
                    newRooms.push(await this.parseRoom(update.inner.value));
                    break;
                case RoomListEntriesUpdate_Tags.PushFront:
                    newRooms.unshift(await this.parseRoom(update.inner.value));
                    break;
                case RoomListEntriesUpdate_Tags.Clear:
                    newRooms = [];
                    break;
                case RoomListEntriesUpdate_Tags.PopFront:
                    newRooms.shift();
                    break;
                case RoomListEntriesUpdate_Tags.PopBack:
                    newRooms.pop();
                    break;
                case RoomListEntriesUpdate_Tags.Insert:
                    newRooms.splice(
                        update.inner.index,
                        0,
                        await this.parseRoom(update.inner.value),
                    );
                    break;
                case RoomListEntriesUpdate_Tags.Remove:
                    newRooms.splice(update.inner.index, 1);
                    break;
                case RoomListEntriesUpdate_Tags.Truncate:
                    newRooms = newRooms.slice(0, update.inner.length);
                    break;
                case RoomListEntriesUpdate_Tags.Reset:
                    newRooms = await Promise.all(
                        update.inner.values.map((room) => this.parseRoom(room)),
                    );
                    break;
            }
        }

        this.rooms = newRooms;

        // Update existing view models with new room data
        for (const room of this.rooms) {
            const viewModel = this.roomItemViewModels.get(room.id);
            if (viewModel) {
                viewModel.updateSummary(room);
            }
        }

        // Clean up view models for rooms that no longer exist
        const currentRoomIds = new Set(this.rooms.map((r) => r.id));
        for (const roomId of this.roomItemViewModels.keys()) {
            if (!currentRoomIds.has(roomId)) {
                this.roomItemViewModels.get(roomId)?.dispose();
                this.roomItemViewModels.delete(roomId);
            }
        }

        this.updateSections();
        this.maybeLoadNextPage();
    }

    /**
     * Split the rooms into sections and update the snapshot.
     * Collapsed sections keep their header but have no rooms.
     */
    private updateSections(): void {
        let sections: RoomListSection[];
        let isFlatList = true;

        if (this.activeFilter) {
            sections = [
                {
                    id: FLAT_LIST_SECTION_ID,
                    roomIds: this.rooms.map((r) => r.id),
                },
            ];
        } else {
            const partitioned = [...partitionRooms(this.rooms)];
            const nonEmpty = partitioned.filter(
                ([, rooms]) => rooms.length > 0,
            );
            // Create headers for the sections being shown before updating every header
            const headers = nonEmpty.map(([tag]) =>
                this.getSectionHeaderViewModel(tag),
            );
            for (const [tag, rooms] of partitioned) {
                this.sectionHeaderViewModels.get(tag)?.setRooms(rooms);
            }

            // A list with only the Rooms section doesn't need a header
            isFlatList =
                nonEmpty.length === 0 ||
                (nonEmpty.length === 1 && nonEmpty[0][0] === "chats");
            sections = isFlatList
                ? [
                      {
                          id: FLAT_LIST_SECTION_ID,
                          roomIds: this.rooms.map((r) => r.id),
                      },
                  ]
                : nonEmpty.map(([tag, rooms], i) => ({
                      id: tag,
                      roomIds: headers[i].isExpanded
                          ? rooms.map((r) => r.id)
                          : [],
                  }));
        }

        this.visibleRoomIds = sections.flatMap((s) => s.roomIds);

        const current = this.getSnapshot();
        if (!sectionsEqual(current.sections, sections)) {
            this.snapshot.merge({ sections });
        }
        this.snapshot.merge({
            isFlatList,
            isRoomListEmpty: this.rooms.length === 0,
        });
        this.updateActiveRoomIndex();
    }

    /**
     * Request more rooms while the list is full, so every room ends up in a section.
     */
    private maybeLoadNextPage(): void {
        if (this.rooms.length >= this.requestedLimit) {
            this.loadNextPage();
        }
    }

    /**
     * Called when a room list item sees its room info change. Tag changes
     * may arrive this way, so re-split the rooms in case the room has moved section.
     */
    private onRoomSummaryChanged = (summary: RoomSummary): void => {
        // Queue behind any diffs so they don't overwrite each other
        this.diffQueue = this.diffQueue.then(() => {
            const index = this.rooms.findIndex((r) => r.id === summary.id);
            if (index < 0) return;
            this.rooms = [
                ...this.rooms.slice(0, index),
                summary,
                ...this.rooms.slice(index + 1),
            ];
            this.updateSections();
        });
    };

    /**
     * Toggle a filter on/off
     */
    public onToggleFilter = async (filterId: FilterId): Promise<void> => {
        // Toggle: if it's already active, deactivate it
        const newFilter = this.activeFilter === filterId ? undefined : filterId;
        this.activeFilter = newFilter;

        // Update the filter in the Rust SDK controller
        if (!this.controller) return;

        // Apply the new filter
        if (newFilter) {
            const rustFilter = filterIdToRustFilter.get(newFilter);
            if (rustFilter !== undefined) {
                this.controller.setFilter(rustFilter);
            }
        } else {
            // Clear filter by setting to NonLeft (default)
            this.controller.setFilter(
                new RoomListEntriesDynamicFilterKind.All({
                    filters: [
                        new RoomListEntriesDynamicFilterKind.NonLeft(),
                        new RoomListEntriesDynamicFilterKind.DeduplicateVersions(),
                    ],
                }),
            );
        }

        // The onUpdate callback will be triggered automatically with the new filtered list
        this.snapshot.merge({
            activeFilterId: newFilter,
        });
    };

    /**
     * Create a new chat room (DM)
     */
    public createChatRoom = (): void => {
        // TODO: Implement DM creation via Rust SDK
        console.log("Create chat room not yet implemented");
    };

    /**
     * Create a new room
     */
    public createRoom = (): void => {
        // TODO: Implement room creation via Rust SDK
        console.log("Create room not yet implemented");
    };

    /**
     * Get or create a view model for a specific room item.
     * Required by shared-components interface.
     */
    public getRoomItemViewModel(
        roomId: string,
    ): RoomListItemViewModel | undefined {
        // Check if we already have a view model for this room
        let viewModel = this.roomItemViewModels.get(roomId);
        if (viewModel) {
            return viewModel;
        }

        // Find the room summary
        const room = this.rooms.find((r) => r.id === roomId);
        if (!room) {
            return undefined;
        }

        // Create a new view model and cache it
        viewModel = new RoomListItemViewModel(
            room,
            this.props.client,
            this.props.openRoom,
            this.onRoomSummaryChanged,
        );
        this.roomItemViewModels.set(roomId, viewModel);
        return viewModel;
    }

    /**
     * Update which rooms are currently visible.
     * Called by the view when scroll position changes.
     * Currently a no-op since we don't need to manage subscriptions at this level.
     */
    public updateVisibleRooms(startIndex: number, endIndex: number): void {
        // No-op for now - the Rust SDK handles room subscriptions
    }

    public updateVisibleFold(): void {
        // No-op: the unread activity toast isn't supported yet
    }

    public getSectionHeaderViewModel(
        sectionId: string,
    ): RoomListSectionHeaderViewModel {
        if (!isSectionTag(sectionId)) {
            // The flat list section has no header
            throw new Error(`No section header for section ${sectionId}`);
        }

        let viewModel = this.sectionHeaderViewModels.get(sectionId);
        if (!viewModel) {
            viewModel = new RoomListSectionHeaderViewModel({
                tag: sectionId,
                onToggleExpanded: () => this.updateSections(),
            });
            this.sectionHeaderViewModels.set(sectionId, viewModel);
        }
        return viewModel;
    }

    /**
     * Headers of the sections currently shown, which is none for a flat list.
     */
    private get shownSectionHeaders(): RoomListSectionHeaderViewModel[] {
        const { sections, isFlatList } = this.getSnapshot();
        if (isFlatList) return [];
        return sections.map((s) => this.getSectionHeaderViewModel(s.id));
    }

    /**
     * Whether the header's collapse-all button should collapse or expand
     * the sections, or undefined when there are no sections to collapse.
     */
    public getCollapseSectionsOption(): CollapseSectionsOption | undefined {
        const headers = this.shownSectionHeaders;
        if (headers.length === 0) return undefined;
        return headers.some((h) => h.isExpanded) ? "collapse" : "expand";
    }

    /**
     * Collapse every section if any is expanded, otherwise expand them all.
     */
    public collapseOrExpandAllSections(): void {
        const headers = this.shownSectionHeaders;
        const isExpanded = !headers.some((h) => h.isExpanded);
        for (const header of headers) header.isExpanded = isExpanded;
        this.updateSections();
    }

    public closeToast(): void {
        // No-op: toasts are never shown
    }

    public scrollToUnreadActivity(): void {
        // No-op: the unread activity toast isn't supported yet
    }

    public setScrollToIndex(): void {
        // No-op: we don't programmatically scroll the room list yet
    }

    /**
     * Move a room dropped onto a section header into that section by changing its tags.
     * The room moves once the tag change syncs back.
     */
    public changeRoomSection = async (
        roomId: string,
        tag: string,
    ): Promise<void> => {
        const summary = this.rooms.find((r) => r.id === roomId);
        if (
            !summary ||
            !isSectionTag(tag) ||
            getSectionForRoom(summary) === tag
        ) {
            return;
        }

        try {
            switch (tag) {
                case "m.favourite":
                    // This also removes the low priority tag
                    await summary.room.setIsFavourite(true, undefined);
                    break;
                case "m.lowpriority":
                    // This also removes the favourite tag
                    await summary.room.setIsLowPriority(true, undefined);
                    break;
                case "people":
                case "chats":
                    // Whether a room is a DM decides between these, so just remove the tags
                    if (summary.isFavourite) {
                        await summary.room.setIsFavourite(false, undefined);
                    }
                    if (summary.isLowPriority) {
                        await summary.room.setIsLowPriority(false, undefined);
                    }
                    break;
                case "invites":
                    // Membership decides what is in the Invites section
                    break;
            }
        } catch (error) {
            console.error(
                `Failed to move room ${roomId} to section ${tag}:`,
                error,
            );
        }
    };

    public changeSectionOrder(): void {
        // No-op: the default sections can't be reordered
    }

    /**
     * Collapse every section while something is dragged, so the drop targets are all in view.
     */
    public onSectionOrRoomDragStart = (): void => {
        this.savedExpansionStates.clear();
        for (const [tag, header] of this.sectionHeaderViewModels) {
            this.savedExpansionStates.set(tag, header.isExpanded);
            header.isExpanded = false;
        }
        this.updateSections();
    };

    /**
     * Restore the sections collapsed by onSectionOrRoomDragStart.
     */
    public onSectionOrRoomDragEnd = (): void => {
        for (const [tag, isExpanded] of this.savedExpansionStates) {
            const header = this.sectionHeaderViewModels.get(tag);
            if (header) header.isExpanded = isExpanded;
        }
        this.savedExpansionStates.clear();
        this.updateSections();
    };

    /**
     * Set the active room.
     * Called by ClientViewModel when a room is selected.
     */
    public setActiveRoom(roomId: string): void {
        this.activeRoomId = roomId;
        this.updateActiveRoomIndex();
    }

    /**
     * Point activeRoomIndex at the active room's position among the displayed
     * rooms (excluding section headers), or clear it if the room isn't shown.
     */
    private updateActiveRoomIndex(): void {
        const roomIndex = this.activeRoomId
            ? this.visibleRoomIds.indexOf(this.activeRoomId)
            : -1;
        const activeRoomIndex = roomIndex >= 0 ? roomIndex : undefined;
        const { roomListState } = this.getSnapshot();
        if (roomListState.activeRoomIndex === activeRoomIndex) return;

        this.snapshot.merge({
            roomListState: { ...roomListState, activeRoomIndex },
        });
    }
}
