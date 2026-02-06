/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import {
    BaseViewModel,
    type RoomListSnapshot,
    type FilterId,
    type RoomListViewActions,
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
} from "../index.web";
import { buildRoomSummary, type RoomSummary } from "./RoomSummary.ts";
import { RoomListItemViewModel } from "./RoomListItemViewModel";

/**
 * Simple room display information for rendering avatars.
 * This is what gets passed as the opaque "room" in the RoomListItemSnapshot.
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
const filterIdToRustFilter: Map<FilterId, RoomListEntriesDynamicFilterKind> = new Map([
    [
        "unread",
        new RoomListEntriesDynamicFilterKind.All({
            filters: [
                new RoomListEntriesDynamicFilterKind.Unread(),
                new RoomListEntriesDynamicFilterKind.DeduplicateVersions(),
            ],
        }),
    ],
    [
        "favourite",
        new RoomListEntriesDynamicFilterKind.All({
            filters: [
                new RoomListEntriesDynamicFilterKind.Favourite(),
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
    [
        "low_priority",
        new RoomListEntriesDynamicFilterKind.All({
            filters: [
                new RoomListEntriesDynamicFilterKind.LowPriority(),
                new RoomListEntriesDynamicFilterKind.Joined(),
                new RoomListEntriesDynamicFilterKind.DeduplicateVersions(),
            ],
        }),
    ],
]);

/**
 * RoomListViewViewModel for Aurora that implements the shared-components interface
 * but is backed by the Rust SDK room list service.
 */
export class RoomListViewViewModel
    extends BaseViewModel<RoomListSnapshot, RoomListViewViewModelProps>
    implements RoomListViewActions
{
    // Rust SDK state
    private controller?: RoomListDynamicEntriesControllerInterface;
    private stateStream?: TaskHandleInterface;
    private roomListEntriesWithDynamicAdapters?: RoomListEntriesWithDynamicAdaptersResultInterface;
    private roomList?: Awaited<ReturnType<typeof this.props.roomListService.allRooms>>;
    private diffQueue: Promise<void> = Promise.resolve();
    private hasSetupEntries = false;

    // State tracking
    private activeFilter?: FilterId;
    private rooms: RoomSummary[] = [];
    private roomsMap = new Map<string, RoomInterface>();
    
    // Child view models
    private roomItemViewModels = new Map<string, RoomListItemViewModel>();

    public constructor(props: RoomListViewViewModelProps) {
        // Determine available filters based on what the Rust SDK supports
        const filterIds: FilterId[] = ["unread", "people", "rooms", "favourite", "low_priority"];

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
            roomIds: [],
            canCreateRoom: true, // Aurora generally allows room creation
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
        this.roomListEntriesWithDynamicAdapters = this.roomList.entriesWithDynamicAdapters(200, this);
        this.controller = this.roomListEntriesWithDynamicAdapters.controller();

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
        this.controller.addOnePage();
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

            // Only setup entries once, even if Loaded fires multiple times
            if (!this.hasSetupEntries) {
                this.setupEntries();
            }
        }
    };

    /**
     * Parse a room from the Rust SDK into a RoomSummary
     */
    private async parseRoom(room: RoomInterface): Promise<RoomSummary> {
        const [roomInfo, latestEvent] = await Promise.all([room.roomInfo(), room.latestEvent()]);
        return buildRoomSummary(room, roomInfo, latestEvent);
    }

    /**
     * Update the roomsMap when rooms change
     */
    private updateRoomsMap(rooms: RoomInterface[]): void {
        this.roomsMap.clear();
        for (const room of rooms) {
            const roomId = room.id();
            this.roomsMap.set(roomId, room);
        }
    }

    /**
     * Called by the Rust SDK when room list updates occur
     */
    public onUpdate = async (updates: RoomListEntriesUpdate[]): Promise<void> => {
        this.diffQueue = this.diffQueue.then(() => this.applyDiff(updates));
    };

    /**
     * Apply diff updates to the room list
     */
    private async applyDiff(updates: RoomListEntriesUpdate[]): Promise<void> {
        let newRooms = [...this.rooms];
        const allRooms: RoomInterface[] = [];

        for (const update of updates) {
            switch (update.tag) {
                case RoomListEntriesUpdate_Tags.Set:
                    newRooms[update.inner.index] = await this.parseRoom(update.inner.value);
                    allRooms.push(update.inner.value);
                    break;
                case RoomListEntriesUpdate_Tags.PushBack:
                    newRooms.push(await this.parseRoom(update.inner.value));
                    allRooms.push(update.inner.value);
                    break;
                case RoomListEntriesUpdate_Tags.PushFront:
                    newRooms.unshift(await this.parseRoom(update.inner.value));
                    allRooms.push(update.inner.value);
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
                    newRooms.splice(update.inner.index, 0, await this.parseRoom(update.inner.value));
                    allRooms.push(update.inner.value);
                    break;
                case RoomListEntriesUpdate_Tags.Remove:
                    newRooms.splice(update.inner.index, 1);
                    break;
                case RoomListEntriesUpdate_Tags.Truncate:
                    newRooms = newRooms.slice(0, update.inner.length);
                    break;
                case RoomListEntriesUpdate_Tags.Reset:
                    newRooms = await Promise.all(update.inner.values.map((room) => this.parseRoom(room)));
                    allRooms.push(...update.inner.values);
                    break;
            }
        }

        this.rooms = newRooms;
        if (allRooms.length > 0) {
            this.updateRoomsMap(allRooms);
        }

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

        this.snapshot.merge({
            roomIds: this.rooms.map((r) => r.id),
            isRoomListEmpty: this.rooms.length === 0,
        });
    }

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
    public getRoomItemViewModel(roomId: string): RoomListItemViewModel {
        // Check if we already have a view model for this room
        let viewModel = this.roomItemViewModels.get(roomId);
        if (viewModel) {
            return viewModel;
        }

        // Find the room summary
        const room = this.rooms.find((r) => r.id === roomId);
        if (!room) {
            throw new Error(`Room ${roomId} not found in rooms list`);
        }

        // Create a new view model and cache it
        viewModel = new RoomListItemViewModel(room, this.props.client, this.props.openRoom);
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

    /**
     * Set the active room.
     * Called by ClientViewModel when a room is selected.
     */
    public setActiveRoom(roomId: string): void {
        // Find the index of the selected room
        const roomIndex = this.rooms.findIndex((r) => r.id === roomId);
        
        this.snapshot.merge({
            roomListState: {
                ...this.getSnapshot().roomListState,
                activeRoomIndex: roomIndex >= 0 ? roomIndex : undefined,
            },
        });
    }
}
