/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { FlowStepViewModel } from "./FlowStepViewModel";
import type {
    EncryptionInterface,
    IdentityResetHandleInterface,
} from "../index.web";
import { printRustError } from "../utils";

/**
 * Result from reset identity execute step
 */
export type ResetIdentityExecuteResult =
    | { outcome: "needsPassword"; handle: IdentityResetHandleInterface }
    | { outcome: "needsOidc"; handle: IdentityResetHandleInterface; approvalUrl: string }
    | { outcome: "resetComplete" };

/**
 * Props for ResetIdentityExecuteStepViewModel
 */
export interface ResetIdentityExecuteStepViewModelProps {
    /** Encryption interface for reset */
    encryption: EncryptionInterface;
}

/**
 * Observable state for reset identity execute screen
 */
export interface ResetIdentityExecuteStepViewSnapshot {
    /** Whether reset is in progress */
    isResetting: boolean;
    /** Error message if reset fails */
    error: string | null;
}

/**
 * Actions available on the reset identity execute screen
 */
export interface ResetIdentityExecuteStepViewActions {
    retry(): Promise<void>;
    back(): void;
}

/**
 * ViewModel that actually executes the identity reset.
 * Shown after user has confirmed they want to proceed.
 * This is where the destructive operation happens.
 */
export class ResetIdentityExecuteStepViewModel
    extends FlowStepViewModel<
        ResetIdentityExecuteStepViewSnapshot,
        ResetIdentityExecuteStepViewModelProps,
        ResetIdentityExecuteResult
    >
    implements ResetIdentityExecuteStepViewActions
{
    public readonly screenType = "reset-identity-execute";

    public constructor(props: ResetIdentityExecuteStepViewModelProps) {
        super(props, {
            isResetting: true,
            error: null,
        });

        // Start the reset immediately
        this.executeReset();
    }

    private async executeReset(): Promise<void> {
        this.snapshot.merge({ isResetting: true, error: null });

        try {
            console.log("Executing identity reset...");
            const handle = await this.props.encryption.resetIdentity();

            if (!handle) {
                // Reset completed without auth
                console.log("Reset completed without auth");
                this.complete({ outcome: "resetComplete" });
                return;
            }

            // Check auth type
            const authType = handle.authType();
            console.log("Reset auth type:", authType);

            if (authType?.tag === "Oidc") {
                // OIDC: Return to flow to handle - will go back to warning screen
                const approvalUrl = authType.inner.info.approvalUrl;
                this.snapshot.merge({ isResetting: false });
                this.complete({ outcome: "needsOidc", handle, approvalUrl });
                return;
            }

            if (authType?.tag === "Uiaa") {
                // Password-based: Need to get password
                this.snapshot.merge({ isResetting: false });
                this.complete({ outcome: "needsPassword", handle });
                return;
            }

            // Unknown auth type - try without auth
            await handle.reset(undefined);
            this.complete({ outcome: "resetComplete" });
        } catch (e) {
            printRustError("Failed to reset identity", e);
            this.snapshot.merge({
                error: "Failed to reset identity. Please try again.",
                isResetting: false,
            });
        }
    }

    public async retry(): Promise<void> {
        await this.executeReset();
    }

    public back(): void {
        // Can't go back after we've started - the reset may already be in progress
        // Just show the error and let user retry
    }
}
