/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { FlowStepViewModel } from "../../../utils/FlowStepViewModel";
import type { IdentityResetHandleInterface } from "../../../index.web";
import { AuthData, AuthDataPasswordDetails } from "../../../index.web";
import { printRustError } from "../../../utils/printRustError";

/**
 * Result from reset identity password step
 */
export type ResetIdentityPasswordResult = { outcome: "resetComplete" };

/**
 * Props for ResetIdentityPasswordStepViewModel
 */
export interface ResetIdentityPasswordStepViewModelProps {
    /** The reset handle from the warning screen */
    resetHandle: IdentityResetHandleInterface;
    /** User ID for password auth */
    userId: string;
}

/**
 * Observable state for reset identity password screen
 */
export interface ResetIdentityPasswordStepViewSnapshot {
    /** Password input */
    password: string;
    /** Whether reset is in progress */
    isResetting: boolean;
    /** Error message if reset fails */
    error: string | null;
}

/**
 * Actions available on the reset identity password screen
 */
export interface ResetIdentityPasswordStepViewActions {
    setPassword(password: string): void;
    submit(): Promise<void>;
    back(): void;
}

/**
 * ViewModel for the reset identity password step.
 * User enters password to confirm identity reset (UIAA flow).
 */
export class ResetIdentityPasswordStepViewModel
    extends FlowStepViewModel<
        ResetIdentityPasswordStepViewSnapshot,
        ResetIdentityPasswordStepViewModelProps,
        ResetIdentityPasswordResult
    >
    implements ResetIdentityPasswordStepViewActions
{
    public readonly screenType = "reset-identity-password";

    public constructor(props: ResetIdentityPasswordStepViewModelProps) {
        super(props, {
            password: "",
            isResetting: false,
            error: null,
        });
    }

    public setPassword(password: string): void {
        this.snapshot.merge({ password, error: null });
    }

    public async submit(): Promise<void> {
        const { password } = this.getSnapshot();
        if (!password.trim()) return;

        this.snapshot.merge({ isResetting: true, error: null });

        try {
            // Create password auth data
            const passwordDetails = AuthDataPasswordDetails.create({
                identifier: this.props.userId,
                password: password,
            });

            const authData = AuthData.Password.new({ passwordDetails });

            await this.props.resetHandle.reset(authData);
            this.complete({ outcome: "resetComplete" });
        } catch (e) {
            printRustError("Failed to reset with password", e);
            this.snapshot.merge({
                error: "Incorrect password. Please try again.",
                isResetting: false,
            });
        }
    }

    public back(): void {
        this.goBack();
    }
}
