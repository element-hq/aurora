/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import type { ClientInterface } from "../generated/matrix_sdk_ffi";

/**
 * Convert an mxc:// URI into an http thumbnail URL on the client's homeserver
 * that can be used in an img src.
 */
export function mxcToUrl(
    client: ClientInterface,
    mxcUrl: string,
    size = 48,
): string {
    const homeserver = client.homeserver().replace(/\/+$/, "");
    return `${mxcUrl.replace(
        /^mxc:\/\//,
        `${homeserver}/_matrix/media/v3/thumbnail/`,
    )}?width=${size}&height=${size}`;
}
