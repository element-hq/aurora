/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import {
    AudioPlayerView,
    FileBodyView,
    ImageBodyView,
    useCreateAutoDisposedViewModel,
    VideoBodyView,
} from "@element-hq/web-shared-components";
import type {
    AudioMessageContent,
    ClientInterface,
    FileMessageContent,
    ImageMessageContent,
    VideoMessageContent,
} from "../../generated/matrix_sdk_ffi";
import { AudioBodyViewModel } from "./AudioBodyViewModel";
import { FileBodyViewModel } from "./FileBodyViewModel";
import { ImageBodyViewModel } from "./ImageBodyViewModel";
import { VideoBodyViewModel } from "./VideoBodyViewModel";

interface MediaBodyProps<C> {
    client: ClientInterface;
    content: C;
}

export function ImageBody({
    client,
    content,
}: MediaBodyProps<ImageMessageContent>) {
    const vm = useCreateAutoDisposedViewModel(
        () => new ImageBodyViewModel({ client, content }),
    );
    return <ImageBodyView vm={vm} />;
}

export function VideoBody({
    client,
    content,
}: MediaBodyProps<VideoMessageContent>) {
    const vm = useCreateAutoDisposedViewModel(
        () => new VideoBodyViewModel({ client, content }),
    );
    return <VideoBodyView vm={vm} />;
}

export function FileBody({
    client,
    content,
}: MediaBodyProps<FileMessageContent>) {
    const vm = useCreateAutoDisposedViewModel(
        () => new FileBodyViewModel({ client, content }),
    );
    return <FileBodyView vm={vm} />;
}

export function AudioBody({
    client,
    content,
}: MediaBodyProps<AudioMessageContent>) {
    const vm = useCreateAutoDisposedViewModel(
        () => new AudioBodyViewModel({ client, content }),
    );
    return <AudioPlayerView vm={vm} />;
}
