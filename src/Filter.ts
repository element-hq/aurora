import {
    RoomListEntriesDynamicFilterKind,
    RoomListEntriesDynamicFilterKind_Tags,
} from "./generated/matrix_sdk_ffi";

type FiltersToBePicked = typeof RoomListEntriesDynamicFilterKind_Tags;

export type SupportedFilters = keyof Pick<
    FiltersToBePicked,
    "NonLeft" | "Unread" | "Favourite" | "Invite"
>;

export const FILTERS = {
    [RoomListEntriesDynamicFilterKind_Tags.NonLeft]: {
        name: "All",
        method: new RoomListEntriesDynamicFilterKind.All({
            filters: [
                new RoomListEntriesDynamicFilterKind.NonLeft(),
                new RoomListEntriesDynamicFilterKind.DeduplicateVersions(),
            ],
        }),
    },
    [RoomListEntriesDynamicFilterKind_Tags.Unread]: {
        name: "Unreads",
        method: new RoomListEntriesDynamicFilterKind.All({
            filters: [
                new RoomListEntriesDynamicFilterKind.Unread(),
                new RoomListEntriesDynamicFilterKind.DeduplicateVersions(),
            ],
        }),
    },
    [RoomListEntriesDynamicFilterKind_Tags.Favourite]: {
        name: "Favourites",
        method: new RoomListEntriesDynamicFilterKind.All({
            filters: [
                new RoomListEntriesDynamicFilterKind.Favourite(),
                new RoomListEntriesDynamicFilterKind.DeduplicateVersions(),
            ],
        }),
    },
    [RoomListEntriesDynamicFilterKind_Tags.Invite]: {
        name: "Invites",
        method: new RoomListEntriesDynamicFilterKind.All({
            filters: [
                new RoomListEntriesDynamicFilterKind.Invite(),
                new RoomListEntriesDynamicFilterKind.DeduplicateVersions(),
            ],
        }),
    },
};
