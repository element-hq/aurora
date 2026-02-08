/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { FlowStepViewModel } from "../../../utils/FlowStepViewModel";

/**
 * Available actions on the Confirm Identity screen
 */
export enum IdentityConfirmationAction {
    /** Use recovery key to verify */
    Recovery = "recovery",
    /** Use another device for interactive verification */
    InteractiveVerification = "interactive_verification",
}

/**
 * Result from the confirm identity step
 */
export type ConfirmIdentityResult =
    | { outcome: "useRecoveryKey" }
    | { outcome: "resetIdentity" }
    | { outcome: "interactiveVerification" };

/**
 * Props for ConfirmIdentityStepViewModel
 */
export interface ConfirmIdentityStepViewModelProps {
    /** Available confirmation actions */
    availableActions: IdentityConfirmationAction[];
}

/**
 * Observable state for confirm identity screen
 */
export interface ConfirmIdentityStepViewSnapshot {
    /** Available confirmation actions */
    availableActions: IdentityConfirmationAction[];
}

/**
 * Actions available on the confirm identity screen
 */
export interface ConfirmIdentityStepViewActions {
    useRecoveryKey(): void;
    useInteractiveVerification(): void;
    cannotConfirm(): void;
}

/**
 * ViewModel for the confirm identity step.
 * Entry point for the encryption flow - user chooses how to verify.
 */
export class ConfirmIdentityStepViewModel
    extends FlowStepViewModel<
        ConfirmIdentityStepViewSnapshot,
        ConfirmIdentityStepViewModelProps,
        ConfirmIdentityResult
    >
    implements ConfirmIdentityStepViewActions
{
    public readonly screenType = "confirm-identity";

    public constructor(props: ConfirmIdentityStepViewModelProps) {
        super(props, {
            availableActions: props.availableActions,
        });
    }

    public useRecoveryKey(): void {
        this.complete({ outcome: "useRecoveryKey" });
    }

    public useInteractiveVerification(): void {
        this.complete({ outcome: "interactiveVerification" });
    }

    public cannotConfirm(): void {
        this.complete({ outcome: "resetIdentity" });
    }
}
