/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import type { AcceptedRoomKind } from "@element-hq/web-shared-components";
import { Membership } from "../generated/matrix_sdk_ffi.ts";
import type { RoomSummary } from "./RoomSummary.ts";

/**
 * The room list sections, matching element-web's default sections.
 * The favourite and low priority section IDs are the room tags that put a room in them.
 */
export type SectionTag =
    | "invites"
    | "m.favourite"
    | "people"
    | "chats"
    | "m.lowpriority";

/**
 * Sections in the order they are displayed, top to bottom.
 */
export const ORDERED_SECTIONS: readonly SectionTag[] = [
    "invites",
    "m.favourite",
    "people",
    "chats",
    "m.lowpriority",
];

const SECTION_TITLES: Record<SectionTag, string> = {
    invites: "Invites",
    "m.favourite": "Favourites",
    people: "People",
    chats: "Rooms",
    "m.lowpriority": "Low priority",
};

export function isSectionTag(tag: string): tag is SectionTag {
    return (ORDERED_SECTIONS as readonly string[]).includes(tag);
}

export function getSectionTitle(tag: SectionTag): string {
    return SECTION_TITLES[tag];
}

/**
 * The kind of room that can be dragged into a section. People and Rooms are decided by whether the
 * room is a DM rather than by a tag, so a room can only be dropped into the one matching its kind.
 */
export function getAcceptedRoomKind(tag: SectionTag): AcceptedRoomKind {
    switch (tag) {
        case "invites":
            // Membership decides what is in the Invites section
            return "none";
        case "people":
            return "dm";
        case "chats":
            return "nonDm";
        default:
            return "any";
    }
}

/**
 * Work out which section a room belongs in. Each room is in exactly one section.
 */
export function getSectionForRoom(summary: RoomSummary): SectionTag {
    if (summary.membership === Membership.Invited) return "invites";
    if (summary.isFavourite) return "m.favourite";
    if (summary.isLowPriority) return "m.lowpriority";
    return summary.isDm ? "people" : "chats";
}

/**
 * Split the rooms into sections, keeping their order within each section.
 */
export function partitionRooms(
    rooms: RoomSummary[],
): Map<SectionTag, RoomSummary[]> {
    const sections = new Map<SectionTag, RoomSummary[]>(
        ORDERED_SECTIONS.map((tag) => [tag, []]),
    );
    for (const room of rooms) {
        sections.get(getSectionForRoom(room))?.push(room);
    }
    return sections;
}

const EXPANSION_STORAGE_KEY = "aurora.roomList.sectionExpansion";

function readExpansionState(): Partial<Record<SectionTag, boolean>> {
    try {
        const stored = localStorage.getItem(EXPANSION_STORAGE_KEY);
        return stored ? JSON.parse(stored) : {};
    } catch {
        return {};
    }
}

/**
 * Whether the section was last left expanded. Sections default to expanded,
 * except Invites, which always starts collapsed.
 */
export function isSectionExpanded(tag: SectionTag): boolean {
    if (tag === "invites") return false;
    return readExpansionState()[tag] ?? true;
}

/**
 * Remember whether a section is expanded. The Invites section's state isn't saved.
 */
export function setSectionExpanded(tag: SectionTag, isExpanded: boolean): void {
    if (tag === "invites") return;
    try {
        localStorage.setItem(
            EXPANSION_STORAGE_KEY,
            JSON.stringify({ ...readExpansionState(), [tag]: isExpanded }),
        );
    } catch {
        // Not critical: the section will just be expanded again next time
    }
}
