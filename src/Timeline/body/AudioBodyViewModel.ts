/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import {
    type AudioPlayerViewSnapshot,
    BaseViewModel,
} from "@element-hq/web-shared-components";
import type { ChangeEvent, KeyboardEvent } from "react";
import type {
    AudioMessageContent,
    ClientInterface,
} from "../../generated/matrix_sdk_ffi";
import { getMediaUrl } from "../../utils/mediaUrl";

interface AudioBodyViewModelProps {
    client: ClientInterface;
    content: AudioMessageContent;
}

/** How far the arrow keys skip, in seconds. */
const SEEK_STEP = 5;

/**
 * View model for an audio message: downloads the audio the first time it's
 * played, then drives an audio element.
 */
export class AudioBodyViewModel extends BaseViewModel<
    AudioPlayerViewSnapshot,
    AudioBodyViewModelProps
> {
    private audio?: Promise<HTMLAudioElement>;

    public constructor(props: AudioBodyViewModelProps) {
        const { filename, info } = props.content;
        super(props, {
            playbackState: "stopped",
            mediaName: filename,
            sizeBytes: info?.size !== undefined ? Number(info.size) : undefined,
            // The SDK gives durations in milliseconds
            durationSeconds: (info?.duration ?? 0) / 1000,
            percentComplete: 0,
            playedSeconds: 0,
            error: false,
        });

        this.disposables.track(() => {
            this.audio?.then((audio) => audio.pause()).catch(() => {});
        });
    }

    /** Download the audio and set up an element to play it, the first time we need it. */
    private getAudio(): Promise<HTMLAudioElement> {
        if (!this.audio) {
            this.audio = this.loadAudio();
            // Let a later attempt try again
            this.audio.catch(() => {
                this.audio = undefined;
            });
        }
        return this.audio;
    }

    private async loadAudio(): Promise<HTMLAudioElement> {
        const { client, content } = this.props;
        this.snapshot.merge({ playbackState: "decoding", error: false });

        const audio = new Audio(
            await getMediaUrl(client, content.source, content.info?.mimetype),
        );
        audio.addEventListener("loadedmetadata", () => {
            if (Number.isFinite(audio.duration)) {
                this.snapshot.merge({ durationSeconds: audio.duration });
            }
        });
        audio.addEventListener("timeupdate", () => {
            const { durationSeconds } = this.getSnapshot();
            this.snapshot.merge({
                playedSeconds: audio.currentTime,
                percentComplete: durationSeconds
                    ? (audio.currentTime / durationSeconds) * 100
                    : 0,
            });
        });
        audio.addEventListener("play", () => {
            this.snapshot.merge({ playbackState: "playing" });
        });
        audio.addEventListener("pause", () => {
            this.snapshot.merge({ playbackState: "paused" });
        });
        audio.addEventListener("ended", () => {
            this.snapshot.merge({ playbackState: "stopped" });
            audio.currentTime = 0;
        });

        this.snapshot.merge({ playbackState: "stopped" });
        return audio;
    }

    private async withAudio(
        action: (audio: HTMLAudioElement) => unknown,
    ): Promise<void> {
        try {
            const audio = await this.getAudio();
            if (!this.isDisposed) await action(audio);
        } catch (e) {
            console.error(
                `Failed to play audio ${this.props.content.filename}`,
                e,
            );
            if (!this.isDisposed) {
                this.snapshot.merge({ playbackState: "stopped", error: true });
            }
        }
    }

    private seekTo(seconds: number): void {
        this.withAudio((audio) => {
            const duration = Number.isFinite(audio.duration)
                ? audio.duration
                : this.getSnapshot().durationSeconds;
            audio.currentTime = Math.max(0, Math.min(seconds, duration));
        });
    }

    public togglePlay = (): void => {
        this.withAudio((audio) =>
            audio.paused ? audio.play() : audio.pause(),
        );
    };

    public onSeekbarChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const percent = Number(e.target.value);
        this.seekTo((percent / 100) * this.getSnapshot().durationSeconds);
    };

    public onKeyDown = (e: KeyboardEvent<HTMLDivElement>): void => {
        const { playedSeconds } = this.getSnapshot();
        if (e.key === " ") {
            this.togglePlay();
        } else if (e.key === "ArrowLeft") {
            this.seekTo(playedSeconds - SEEK_STEP);
        } else if (e.key === "ArrowRight") {
            this.seekTo(playedSeconds + SEEK_STEP);
        } else {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
    };
}
