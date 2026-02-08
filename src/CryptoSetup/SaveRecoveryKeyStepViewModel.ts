/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { FlowStepViewModel } from "./FlowStepViewModel";

/**
 * Result from save recovery key step
 */
export type SaveRecoveryKeyResult = { outcome: "saved" };

/**
 * Props for SaveRecoveryKeyStepViewModel
 */
export interface SaveRecoveryKeyStepViewModelProps {
    /** The recovery key to display and save */
    recoveryKey: string;
}

/**
 * Observable state for save recovery key screen
 */
export interface SaveRecoveryKeyStepViewSnapshot {
    /** The recovery key to save */
    recoveryKey: string;
    /** Whether the key has been copied */
    copied: boolean;
}

/**
 * Actions available on the save recovery key screen
 */
export interface SaveRecoveryKeyStepViewActions {
    copyToClipboard(): Promise<void>;
    confirmSaved(): void;
}

/**
 * ViewModel for the save recovery key step.
 * User must save their recovery key before continuing.
 */
export class SaveRecoveryKeyStepViewModel
    extends FlowStepViewModel<
        SaveRecoveryKeyStepViewSnapshot,
        SaveRecoveryKeyStepViewModelProps,
        SaveRecoveryKeyResult
    >
    implements SaveRecoveryKeyStepViewActions
{
    public readonly screenType = "save-recovery-key";

    public constructor(props: SaveRecoveryKeyStepViewModelProps) {
        super(props, {
            recoveryKey: props.recoveryKey,
            copied: false,
        });
    }

    public async copyToClipboard(): Promise<void> {
        const { recoveryKey } = this.getSnapshot();
        await navigator.clipboard.writeText(recoveryKey);
        this.snapshot.merge({ copied: true });

        // Reset copied state after 2 seconds
        setTimeout(() => {
            this.snapshot.merge({ copied: false });
        }, 2000);
    }

    public confirmSaved(): void {
        this.complete({ outcome: "saved" });
    }
}
