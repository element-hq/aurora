/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import {
    BaseViewModel,
    type VideoBodyViewSnapshot,
    VideoBodyViewState,
} from "@element-hq/web-shared-components";
import type {
    ClientInterface,
    VideoMessageContent,
} from "../../generated/matrix_sdk_ffi";
import { getMediaUrl, thumbnailSize } from "../../utils/mediaUrl";

interface VideoBodyViewModelProps {
    client: ClientInterface;
    content: VideoMessageContent;
}

/**
 * View model for a video message: downloads the video and its thumbnail,
 * showing a spinner until the video is ready to play.
 */
export class VideoBodyViewModel extends BaseViewModel<
    VideoBodyViewSnapshot,
    VideoBodyViewModelProps
> {
    public constructor(props: VideoBodyViewModelProps) {
        const { filename, info } = props.content;
        super(props, {
            state: VideoBodyViewState.LOADING,
            videoLabel: filename,
            videoTitle: filename,
            controls: true,
            preload: "metadata",
            ...thumbnailSize(info?.width, info?.height),
        });

        this.load();
    }

    private async load(): Promise<void> {
        const { client, content } = this.props;
        const thumbnailSource = content.info?.thumbnailSource;

        try {
            // FIXME: this downloads the whole video before it can be played
            const [src, poster] = await Promise.all([
                getMediaUrl(client, content.source, content.info?.mimetype),
                // The video is still worth showing without its thumbnail
                thumbnailSource
                    ? getMediaUrl(
                          client,
                          thumbnailSource,
                          content.info?.thumbnailInfo?.mimetype,
                      ).catch(() => undefined)
                    : undefined,
            ]);
            if (this.isDisposed) return;
            this.snapshot.merge({
                state: VideoBodyViewState.READY,
                src,
                poster,
            });
        } catch (e) {
            console.error(`Failed to load video ${content.filename}`, e);
            if (this.isDisposed) return;
            this.snapshot.merge({
                state: VideoBodyViewState.ERROR,
                errorLabel: "Unable to show video",
            });
        }
    }
}
