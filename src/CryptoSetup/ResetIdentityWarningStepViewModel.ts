/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { FlowStepViewModel } from "./FlowStepViewModel";

/**
 * Result from reset identity warning step
 */
export type ResetIdentityWarningResult = { outcome: "proceed" };

/**
 * Props for ResetIdentityWarningStepViewModel
 */
export interface ResetIdentityWarningStepViewModelProps {
    // No props needed - just shows warning
}

/**
 * Observable state for reset identity warning screen
 */
export interface ResetIdentityWarningStepViewSnapshot {
    // No state needed - static content
}

/**
 * Actions available on the reset identity warning screen
 */
export interface ResetIdentityWarningStepViewActions {
    confirmReset(): void;
    back(): void;
}

/**
 * ViewModel for the reset identity warning step.
 * Shows warning about consequences of resetting identity.
 * Does NOT perform any destructive operations - just signals intent to proceed.
 */
export class ResetIdentityWarningStepViewModel
    extends FlowStepViewModel<
        ResetIdentityWarningStepViewSnapshot,
        ResetIdentityWarningStepViewModelProps,
        ResetIdentityWarningResult
    >
    implements ResetIdentityWarningStepViewActions
{
    public readonly screenType = "reset-identity-warning";

    public constructor(props: ResetIdentityWarningStepViewModelProps) {
        super(props, {});
    }

    public confirmReset(): void {
        // Just signal intent to proceed - no destructive action here
        this.complete({ outcome: "proceed" });
    }

    public back(): void {
        this.goBack();
    }
}
