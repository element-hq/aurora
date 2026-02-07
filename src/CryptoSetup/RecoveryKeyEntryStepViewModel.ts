/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { FlowStepViewModel } from "./FlowStepViewModel";
import type { EncryptionInterface } from "../index.web";
import { printRustError } from "../utils";

/**
 * Result from recovery key entry
 */
export type RecoveryKeyEntryResult = { outcome: "verified" };

/**
 * Props for RecoveryKeyEntryStepViewModel
 */
export interface RecoveryKeyEntryStepViewModelProps {
    /** Encryption interface for recovery */
    encryption: EncryptionInterface;
}

/**
 * Observable state for recovery key entry screen
 */
export interface RecoveryKeyEntryStepViewSnapshot {
    /** Current recovery key input */
    recoveryKey: string;
    /** Whether verification is in progress */
    isVerifying: boolean;
    /** Error message if verification fails */
    error: string | null;
}

/**
 * Actions available on the recovery key entry screen
 */
export interface RecoveryKeyEntryStepViewActions {
    setRecoveryKey(key: string): void;
    submit(): Promise<void>;
    back(): void;
}

/**
 * ViewModel for the recovery key entry step.
 * User enters their recovery key to verify identity.
 */
export class RecoveryKeyEntryStepViewModel
    extends FlowStepViewModel<
        RecoveryKeyEntryStepViewSnapshot,
        RecoveryKeyEntryStepViewModelProps,
        RecoveryKeyEntryResult
    >
    implements RecoveryKeyEntryStepViewActions
{
    public readonly screenType = "recovery-key-entry";

    public constructor(props: RecoveryKeyEntryStepViewModelProps) {
        super(props, {
            recoveryKey: "",
            isVerifying: false,
            error: null,
        });
    }

    public setRecoveryKey(key: string): void {
        this.snapshot.merge({ recoveryKey: key, error: null });
    }

    public async submit(): Promise<void> {
        const { recoveryKey } = this.getSnapshot();
        if (!recoveryKey.trim()) return;

        this.snapshot.merge({ isVerifying: true, error: null });

        try {
            await this.props.encryption.recover(recoveryKey);
            console.log("Recovery successful");
            this.complete({ outcome: "verified" });
        } catch (e) {
            printRustError("Failed to recover", e);
            this.snapshot.merge({
                error: "Invalid recovery key. Please try again.",
                isVerifying: false,
            });
        }
    }

    public back(): void {
        this.goBack();
    }
}
