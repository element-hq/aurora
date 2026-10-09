/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import type { UserStatus } from "@element-hq/web-shared-components";
import type {
    UserStatus as SdkUserStatus,
    UserCall,
} from "../generated/matrix_sdk_ffi";

// MSC4426 limits status text to 256 bytes of UTF-8.
const MAX_STATUS_TEXT_BYTES = 256;

const ON_A_CALL_STATUS: UserStatus = { emoji: "📞", text: "On a call" };

const intlSegmenter = new Intl.Segmenter();
const textEncoder = new TextEncoder();

function validateUserStatus(status?: SdkUserStatus): UserStatus | undefined {
    if (!status?.emoji || !status.text) return undefined;

    // Only show the first grapheme of the emoji, so a status can't be used to
    // make one user's name look like another's (see MSC4426 "Impersonation").
    const emoji = [...intlSegmenter.segment(status.emoji)][0]?.segment;
    const text =
        textEncoder.encode(status.text).length <= MAX_STATUS_TEXT_BYTES
            ? status.text
            : `${status.text.slice(0, MAX_STATUS_TEXT_BYTES)}…`;
    return { emoji, text };
}

/**
 * Works out what MSC4426 status to show for a user from their `m.status` and
 * `m.call` profile fields. `m.status` takes precedence; failing that, a user
 * who is in a call is shown as "On a call".
 */
export function userStatusFromProfile(
    status?: SdkUserStatus,
    call?: UserCall,
): UserStatus | undefined {
    const userStatus = validateUserStatus(status);
    if (userStatus) return userStatus;

    // The SDK maps an absent or null `m.call` to undefined, so any value means
    // the user is in a call. Treat an explicit zero timestamp as not in one.
    if (call && call.callJoinedTs !== BigInt(0)) return ON_A_CALL_STATUS;

    return undefined;
}
