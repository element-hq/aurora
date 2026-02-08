/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { FlowStepViewModel } from "./FlowStepViewModel";

/**
 * Result from reset identity confirm step
 */
export type ResetIdentityConfirmResult = { outcome: "confirmed" };

/**
 * Props for ResetIdentityConfirmStepViewModel
 */
export interface ResetIdentityConfirmStepViewModelProps {
    // No props needed - this is just a confirmation gate
}

/**
 * Observable state for reset identity confirm screen
 */
export interface ResetIdentityConfirmStepViewSnapshot {
    // No state needed - just static content
}

/**
 * Actions available on the reset identity confirm screen
 */
export interface ResetIdentityConfirmStepViewActions {
    confirmReset(): void;
    back(): void;
}

/**
 * ViewModel for the final reset identity confirmation step.
 * Shows "Are you sure? This is irreversible" before actually resetting.
 * This is a non-destructive gate - no reset happens until confirmed.
 */
export class ResetIdentityConfirmStepViewModel
    extends FlowStepViewModel<
        ResetIdentityConfirmStepViewSnapshot,
        ResetIdentityConfirmStepViewModelProps,
        ResetIdentityConfirmResult
    >
    implements ResetIdentityConfirmStepViewActions
{
    public readonly screenType = "reset-identity-confirm";

    public constructor(props: ResetIdentityConfirmStepViewModelProps) {
        super(props, {});
    }

    public confirmReset(): void {
        this.complete({ outcome: "confirmed" });
    }

    public back(): void {
        this.goBack();
    }
}
