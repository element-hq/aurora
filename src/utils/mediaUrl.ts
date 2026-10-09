/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import type {
    ClientInterface,
    MediaSourceLike,
} from "../generated/matrix_sdk_ffi";

/**
 * Object URLs for media we've already downloaded, keyed by media source, so a
 * tile that scrolls back into view doesn't download (and decrypt) it again.
 * FIXME: these are never revoked, so downloaded media stays in memory for the session.
 */
const mediaUrls = new Map<string, Promise<string>>();

/**
 * Download a piece of media, decrypting it if needed, and get a URL for it
 * that can be used in an img, video or audio src.
 */
export function getMediaUrl(
    client: ClientInterface,
    source: MediaSourceLike,
    mimetype?: string,
): Promise<string> {
    const key = source.toJson();
    let url = mediaUrls.get(key);
    if (!url) {
        url = client
            .getMediaContent(source)
            .then((data) =>
                URL.createObjectURL(new Blob([data], { type: mimetype })),
            );
        mediaUrls.set(key, url);
        // Let a later attempt try again
        url.catch(() => mediaUrls.delete(key));
    }
    return url;
}

/** The largest an image or video is shown in the timeline, in either direction. */
const MAX_THUMBNAIL_SIZE = 324;

/**
 * Fit a piece of media into the timeline's thumbnail box, keeping its aspect
 * ratio and never scaling it up.
 */
export function thumbnailSize(
    width?: bigint,
    height?: bigint,
): { maxWidth: number; maxHeight: number; aspectRatio?: string } {
    if (!width || !height) {
        return { maxWidth: MAX_THUMBNAIL_SIZE, maxHeight: MAX_THUMBNAIL_SIZE };
    }
    const w = Number(width);
    const h = Number(height);
    const scale = Math.min(1, MAX_THUMBNAIL_SIZE / w, MAX_THUMBNAIL_SIZE / h);
    return {
        maxWidth: Math.round(w * scale),
        maxHeight: Math.round(h * scale),
        aspectRatio: `${w} / ${h}`,
    };
}
