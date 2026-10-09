/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

const STORAGE_KEY = "mx_recent_emojis";

/** How many recently used emoji to remember. */
const MAX_RECENT = 24;

/** The emoji the user has picked most recently, newest first. */
export function getRecentEmojis(): string[] {
    try {
        const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
        return Array.isArray(stored) ? stored : [];
    } catch {
        // Storage can be unavailable or hold something we didn't write
        return [];
    }
}

/** Move an emoji to the front of the recently used list, and return the new list. */
export function recordRecentEmoji(unicode: string): string[] {
    const recent = [
        unicode,
        ...getRecentEmojis().filter((e) => e !== unicode),
    ].slice(0, MAX_RECENT);
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(recent));
    } catch {
        // Not remembering recent emoji is no great loss
    }
    return recent;
}
