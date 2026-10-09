/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import {
    BaseViewModel,
    type FileBodyViewActions,
    FileBodyViewInfoIcon,
    type FileBodyViewSnapshot,
    FileBodyViewState,
    formatBytes,
} from "@element-hq/web-shared-components";
import type {
    ClientInterface,
    FileMessageContent,
} from "../../generated/matrix_sdk_ffi";
import { getMediaUrl } from "../../utils/mediaUrl";

interface FileBodyViewModelProps {
    client: ClientInterface;
    content: FileMessageContent;
}

/**
 * View model for a file message: shows the file's name and size, and
 * downloads it when asked.
 */
export class FileBodyViewModel
    extends BaseViewModel<FileBodyViewSnapshot, FileBodyViewModelProps>
    implements FileBodyViewActions
{
    public constructor(props: FileBodyViewModelProps) {
        const { filename, info } = props.content;
        super(props, {
            // We download through the view model, whether or not the file is encrypted
            state: FileBodyViewState.DECRYPTION_PENDING,
            showInfo: true,
            infoLabel:
                info?.size !== undefined
                    ? `${filename} (${formatBytes(Number(info.size))})`
                    : filename,
            infoIcon: FileBodyViewInfoIcon.ATTACHMENT,
            showDownload: true,
            downloadLabel: "Download",
        });
    }

    private async download(): Promise<void> {
        const { client, content } = this.props;
        try {
            const url = await getMediaUrl(
                client,
                content.source,
                content.info?.mimetype,
            );
            const link = document.createElement("a");
            link.href = url;
            link.download = content.filename;
            link.click();
        } catch (e) {
            console.error(`Failed to download ${content.filename}`, e);
        }
    }

    public onInfoClick = (): void => {
        this.download();
    };

    public onDownloadClick = (): void => {
        this.download();
    };
}
