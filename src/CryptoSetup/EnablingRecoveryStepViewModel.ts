/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { FlowStepViewModel } from "./FlowStepViewModel";
import type {
    EncryptionInterface,
    EnableRecoveryProgressListener,
    EnableRecoveryProgress,
} from "../index.web";
import { EnableRecoveryProgress_Tags } from "../index.web";
import { printRustError } from "../utils";

/**
 * Result from enabling recovery step
 */
export type EnablingRecoveryResult = { outcome: "complete"; recoveryKey: string };

/**
 * Props for EnablingRecoveryStepViewModel
 */
export interface EnablingRecoveryStepViewModelProps {
    /** Encryption interface */
    encryption: EncryptionInterface;
}

/**
 * Observable state for enabling recovery screen
 */
export interface EnablingRecoveryStepViewSnapshot {
    /** Progress message */
    progressMessage: string;
    /** Error if enabling fails */
    error: string | null;
}

/**
 * ViewModel for the enabling recovery step.
 * Shows progress while enabling recovery and generating the key.
 */
export class EnablingRecoveryStepViewModel
    extends FlowStepViewModel<
        EnablingRecoveryStepViewSnapshot,
        EnablingRecoveryStepViewModelProps,
        EnablingRecoveryResult
    >
{
    public readonly screenType = "enabling-recovery";

    public constructor(props: EnablingRecoveryStepViewModelProps) {
        super(props, {
            progressMessage: "Starting recovery setup...",
            error: null,
        });

        // Start enabling recovery immediately
        this.enableRecovery();
    }

    private async enableRecovery(): Promise<void> {
        try {
            const progressListener: EnableRecoveryProgressListener = {
                onUpdate: (progress: EnableRecoveryProgress) => {
                    switch (progress.tag) {
                        case EnableRecoveryProgress_Tags.Starting:
                            this.snapshot.merge({
                                progressMessage: "Starting...",
                            });
                            break;
                        case EnableRecoveryProgress_Tags.CreatingBackup:
                            this.snapshot.merge({
                                progressMessage: "Creating backup...",
                            });
                            break;
                        case EnableRecoveryProgress_Tags.CreatingRecoveryKey:
                            this.snapshot.merge({
                                progressMessage: "Creating recovery key...",
                            });
                            break;
                        case EnableRecoveryProgress_Tags.BackingUp:
                            this.snapshot.merge({
                                progressMessage: `Backing up keys: ${progress.inner.backedUpCount}/${progress.inner.totalCount}`,
                            });
                            break;
                        case EnableRecoveryProgress_Tags.RoomKeyUploadError:
                            this.snapshot.merge({
                                progressMessage: "Error uploading room keys",
                                error: "Failed to upload some room keys",
                            });
                            break;
                        case EnableRecoveryProgress_Tags.Done:
                            console.log(
                                "Recovery setup complete! Recovery key:",
                                progress.inner.recoveryKey,
                            );
                            this.complete({
                                outcome: "complete",
                                recoveryKey: progress.inner.recoveryKey,
                            });
                            break;
                    }
                },
            };

            // Enable recovery with auto-generated key
            await this.props.encryption.enableRecovery(
                false,
                undefined,
                progressListener,
            );
        } catch (e) {
            printRustError("Failed to enable recovery", e);
            this.snapshot.merge({
                error: "Failed to enable recovery. Please try again.",
            });
            // Don't complete - user needs to retry or go back
        }
    }
}
