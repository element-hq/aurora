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
 * Result from reset identity warning step
 */
export type ResetIdentityWarningResult =
    | { outcome: "needsPassword"; handle: IdentityResetHandleInterface }
    | { outcome: "resetComplete" }
    | { outcome: "oidcApprovalStarted"; handle: IdentityResetHandleInterface };

/**
 * Props for ResetIdentityWarningStepViewModel
 */
export interface ResetIdentityWarningStepViewModelProps {
    /** Encryption interface for reset */
    encryption: EncryptionInterface;
}

/**
 * Observable state for reset identity warning screen
 */
export interface ResetIdentityWarningStepViewSnapshot {
    /** Whether reset is in progress */
    isResetting: boolean;
    /** Error message if reset fails */
    error: string | null;
}

/**
 * Actions available on the reset identity warning screen
 */
export interface ResetIdentityWarningStepViewActions {
    confirmReset(): Promise<void>;
    back(): void;
}

/**
 * ViewModel for the reset identity warning step.
 * Shows warning before resetting identity and initiates reset.
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
        super(props, {
            isResetting: false,
            error: null,
        });
    }

    public async confirmReset(): Promise<void> {
        this.snapshot.merge({ isResetting: true, error: null });

        try {
            console.log("Resetting identity...");
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
                // OIDC: Need to open approval URL in popup
                const approvalUrl = authType.inner.info.approvalUrl;

                const width = 600;
                const height = 900;
                const left = window.screenX + (window.outerWidth - width) / 2;
                const top = window.screenY + (window.outerHeight - height) / 2;

                const popup = window.open(
                    approvalUrl,
                    "oidc-reset-approval",
                    `width=${width},height=${height},left=${left},top=${top},scrollbars=yes`,
                );

                if (!popup) {
                    this.snapshot.merge({
                        error: "Failed to open popup window. Please allow popups for this site.",
                        isResetting: false,
                    });
                    return;
                }

                // Clear loading state - popup is open
                this.snapshot.merge({ isResetting: false });

                // Now wait for OIDC approval and complete reset
                try {
                    await handle.reset(undefined);
                    console.log("OIDC reset complete");
                    if (popup && !popup.closed) {
                        popup.close();
                    }
                    this.complete({ outcome: "resetComplete" });
                } catch (e) {
                    if (popup && !popup.closed) {
                        popup.close();
                    }
                    printRustError("OIDC reset failed", e);
                    this.snapshot.merge({
                        error: "Reset failed. Please try again.",
                        isResetting: false,
                    });
                }
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

    public back(): void {
        this.goBack();
    }
}
