/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

export function printRustError(msg: string, e: unknown) {
    if (typeof e === "object" && e !== null && "inner" in e) {
        console.error(msg, e, e.inner);
    }
    console.error(msg, e);
}
