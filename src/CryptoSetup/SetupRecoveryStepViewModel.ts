/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { FlowStepViewModel } from "./FlowStepViewModel";

/**
 * Result from setup recovery step
 */
export type SetupRecoveryResult = { outcome: "startSetup" };

/**
 * Props for SetupRecoveryStepViewModel
 */
export interface SetupRecoveryStepViewModelProps {
    // No props needed - this is just a confirmation screen
}

/**
 * Observable state for setup recovery screen
 */
export interface SetupRecoveryStepViewSnapshot {
    /** Whether setup is starting */
    isStarting: boolean;
}

/**
 * Actions available on the setup recovery screen
 */
export interface SetupRecoveryStepViewActions {
    generateRecoveryKey(): void;
}

/**
 * ViewModel for the setup recovery step.
 * User confirms they want to generate a recovery key.
 */
export class SetupRecoveryStepViewModel
    extends FlowStepViewModel<
        SetupRecoveryStepViewSnapshot,
        SetupRecoveryStepViewModelProps,
        SetupRecoveryResult
    >
    implements SetupRecoveryStepViewActions
{
    public readonly screenType = "setup-recovery";

    public constructor(props: SetupRecoveryStepViewModelProps) {
        super(props, {
            isStarting: false,
        });
    }

    public generateRecoveryKey(): void {
        this.snapshot.merge({ isStarting: true });
        this.complete({ outcome: "startSetup" });
    }
}
