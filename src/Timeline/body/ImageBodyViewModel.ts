/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import {
    BaseViewModel,
    type ImageBodyViewActions,
    type ImageBodyViewSnapshot,
} from "@element-hq/web-shared-components";
import type {
    ClientInterface,
    ImageMessageContent,
} from "../../generated/matrix_sdk_ffi";
import { getMediaUrl, thumbnailSize } from "../../utils/mediaUrl";
import { ImageBodyPlaceholder, ImageBodyState } from "../../utils/sharedEnums";

interface ImageBodyViewModelProps {
    client: ClientInterface;
    content: ImageMessageContent;
}

const ERROR_LABEL = "Unable to show image";

/**
 * View model for an image message: downloads the image (or its thumbnail)
 * and shows a placeholder until it has loaded.
 */
export class ImageBodyViewModel
    extends BaseViewModel<ImageBodyViewSnapshot, ImageBodyViewModelProps>
    implements ImageBodyViewActions
{
    public constructor(props: ImageBodyViewModelProps) {
        const { filename, info } = props.content;
        super(props, {
            state: ImageBodyState.READY,
            alt: filename,
            placeholder: info?.blurhash
                ? ImageBodyPlaceholder.BLURHASH
                : ImageBodyPlaceholder.SPINNER,
            blurhash: info?.blurhash,
            isSvg: info?.mimetype === "image/svg+xml",
            ...thumbnailSize(info?.width, info?.height),
        });

        this.load();
    }

    private async load(): Promise<void> {
        const { client, content } = this.props;
        // Thumbnails of animated images are still frames, so show the original
        const thumbnailSource = content.info?.isAnimated
            ? undefined
            : content.info?.thumbnailSource;

        try {
            const src = thumbnailSource
                ? await getMediaUrl(
                      client,
                      thumbnailSource,
                      content.info?.thumbnailInfo?.mimetype,
                  )
                : await getMediaUrl(
                      client,
                      content.source,
                      content.info?.mimetype,
                  );
            if (!this.isDisposed) this.snapshot.merge({ src });
        } catch (e) {
            console.error(`Failed to load image ${content.filename}`, e);
            this.showError();
        }
    }

    private showError(): void {
        if (this.isDisposed) return;
        this.snapshot.merge({
            state: ImageBodyState.ERROR,
            errorLabel: ERROR_LABEL,
        });
    }

    public onImageLoad = (): void => {
        this.snapshot.merge({ placeholder: ImageBodyPlaceholder.NONE });
    };

    public onImageError = (): void => {
        this.showError();
    };
}
