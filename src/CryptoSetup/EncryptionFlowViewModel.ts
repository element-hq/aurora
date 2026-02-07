/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { BaseViewModel } from "@element-hq/web-shared-components";
import type { FlowStepViewModel } from "./FlowStepViewModel";
import type {
    ClientInterface,
    EncryptionInterface,
} from "../index.web";
import { ConfirmIdentityStepViewModel, IdentityConfirmationAction } from "./ConfirmIdentityStepViewModel";
import { RecoveryKeyEntryStepViewModel } from "./RecoveryKeyEntryStepViewModel";
import { SetupRecoveryStepViewModel } from "./SetupRecoveryStepViewModel";
import { SaveRecoveryKeyStepViewModel } from "./SaveRecoveryKeyStepViewModel";
import { ResetIdentityWarningStepViewModel } from "./ResetIdentityWarningStepViewModel";
import { ResetIdentityPasswordStepViewModel } from "./ResetIdentityPasswordStepViewModel";
import { EnablingRecoveryStepViewModel } from "./EnablingRecoveryStepViewModel";
import { printRustError } from "../utils";

/**
 * Result of the encryption flow
 */
export type EncryptionFlowResult =
    | { type: "success" }
    | { type: "cancelled" };

/**
 * Props for EncryptionFlowViewModel
 */
export interface EncryptionFlowViewModelProps {
    /** Client interface to get encryption */
    client: ClientInterface;
    /** Callback when encryption is complete */
    onComplete?: () => void;
}

/**
 * Snapshot for the encryption flow - exposes the current screen
 */
export interface EncryptionFlowViewSnapshot {
    /** The current child ViewModel, or null if flow not started/complete */
    currentScreen: FlowStepViewModel<unknown, unknown, unknown> | null;
    /** Screen type for registry lookup */
    screenType: string | null;
    /** Whether the flow is active */
    isActive: boolean;
    /** Is the flow loading initial data */
    isLoading: boolean;
}

/**
 * Actions on the encryption flow
 */
export interface EncryptionFlowViewActions {
    /** Start the encryption flow */
    startFlow(): Promise<EncryptionFlowResult>;
    /** Cancel the entire flow */
    cancel(): void;
}

/**
 * Coordinates the multi-step encryption flow using async/await.
 *
 * The flow can go multiple paths:
 * 1. Recovery exists: Confirm Identity → Enter Recovery Key → Complete
 * 2. No recovery, has devices: Confirm Identity → Interactive Verification → Complete
 * 3. Cannot confirm: Confirm Identity → Reset Warning → (OIDC popup | Password) → Setup Recovery → Enable → Save Key → Complete
 */
export class EncryptionFlowViewModel
    extends BaseViewModel<EncryptionFlowViewSnapshot, EncryptionFlowViewModelProps>
    implements EncryptionFlowViewActions
{
    private encryption: EncryptionInterface;
    private cancelled = false;

    public constructor(props: EncryptionFlowViewModelProps) {
        super(props, {
            currentScreen: null,
            screenType: null,
            isActive: false,
            isLoading: true,
        });
        this.encryption = props.client.encryption();
    }

    /**
     * Start the encryption flow. Runs until complete or user cancels.
     */
    public async startFlow(): Promise<EncryptionFlowResult> {
        this.cancelled = false;
        this.snapshot.merge({ isActive: true, isLoading: true });

        try {
            // Check initial state to determine available options
            const [backupExistsOnServer, hasDevicesToVerifyAgainst] = await Promise.all([
                this.checkBackupExistsOnServer(),
                this.checkHasDevicesToVerifyAgainst(),
            ]);

            const recoveryState = this.encryption.recoveryState();
            // RecoveryState: Unknown=0, Enabled=1, Disabled=2, Incomplete=3

            // Compute available actions
            const availableActions: IdentityConfirmationAction[] = [];

            if (hasDevicesToVerifyAgainst) {
                availableActions.push(IdentityConfirmationAction.InteractiveVerification);
            }

            // Show "Use recovery key" if recovery is enabled or incomplete
            if (recoveryState === 1 || recoveryState === 3) {
                availableActions.push(IdentityConfirmationAction.Recovery);
            }

            this.snapshot.merge({ isLoading: false });

            // If recovery is disabled and no backup exists and no devices to verify,
            // go straight to setup recovery
            if (
                recoveryState === 2 &&
                !backupExistsOnServer &&
                !hasDevicesToVerifyAgainst
            ) {
                return this.runSetupRecoveryFlow();
            }

            // Otherwise, run the confirm identity flow
            while (!this.cancelled) {
                const confirmResult = await this.runConfirmIdentityStep(availableActions);

                if (confirmResult.type === "cancel") {
                    return { type: "cancelled" };
                }

                if (confirmResult.type === "back") {
                    // Can't go back from first step
                    return { type: "cancelled" };
                }

                const { outcome } = confirmResult.data;

                if (outcome === "useRecoveryKey") {
                    const recoveryResult = await this.runRecoveryKeyEntryFlow();
                    if (recoveryResult.type === "success") {
                        this.props.onComplete?.();
                        return { type: "success" };
                    }
                    if (recoveryResult.type === "cancel") {
                        return { type: "cancelled" };
                    }
                    // back - continue loop to show confirm identity again
                    continue;
                }

                if (outcome === "interactiveVerification") {
                    // TODO: Implement interactive verification
                    // For now, just continue the loop
                    console.log("Interactive verification not yet implemented");
                    continue;
                }

                if (outcome === "resetIdentity") {
                    const resetResult = await this.runResetIdentityFlow();
                    if (resetResult.type === "success") {
                        // After reset, run setup recovery flow
                        const setupResult = await this.runSetupRecoveryFlow();
                        return setupResult;
                    }
                    if (resetResult.type === "cancel") {
                        return { type: "cancelled" };
                    }
                    // back - continue loop to show confirm identity again
                    continue;
                }
            }

            return { type: "cancelled" };
        } catch (e) {
            printRustError("Encryption flow failed", e);
            return { type: "cancelled" };
        } finally {
            this.snapshot.merge({
                currentScreen: null,
                screenType: null,
                isActive: false,
            });
        }
    }

    private async checkBackupExistsOnServer(): Promise<boolean> {
        try {
            return await this.encryption.backupExistsOnServer();
        } catch (e) {
            printRustError("Failed to check backup exists on server", e);
            return false;
        }
    }

    private async checkHasDevicesToVerifyAgainst(): Promise<boolean> {
        try {
            return await this.encryption.hasDevicesToVerifyAgainst();
        } catch (e) {
            printRustError("Failed to check has devices to verify against", e);
            return false;
        }
    }

    private async runConfirmIdentityStep(
        availableActions: IdentityConfirmationAction[],
    ): Promise<
        | { type: "success"; data: { outcome: "useRecoveryKey" | "interactiveVerification" | "resetIdentity" } }
        | { type: "back" }
        | { type: "cancel" }
    > {
        const vm = new ConfirmIdentityStepViewModel({
            availableActions,
        });

        this.snapshot.merge({
            currentScreen: vm as FlowStepViewModel<unknown, unknown, unknown>,
            screenType: vm.screenType,
        });

        return vm.result as Promise<
            | { type: "success"; data: { outcome: "useRecoveryKey" | "interactiveVerification" | "resetIdentity" } }
            | { type: "back" }
            | { type: "cancel" }
        >;
    }

    private async runRecoveryKeyEntryFlow(): Promise<
        | { type: "success" }
        | { type: "back" }
        | { type: "cancel" }
    > {
        const vm = new RecoveryKeyEntryStepViewModel({
            encryption: this.encryption,
        });

        this.snapshot.merge({
            currentScreen: vm as FlowStepViewModel<unknown, unknown, unknown>,
            screenType: vm.screenType,
        });

        const result = await vm.result;
        if (result.type === "success" && result.data.outcome === "verified") {
            return { type: "success" };
        }
        return result.type === "cancel" ? { type: "cancel" } : { type: "back" };
    }

    private async runResetIdentityFlow(): Promise<
        | { type: "success" }
        | { type: "back" }
        | { type: "cancel" }
    > {
        // Show reset warning
        const warningVm = new ResetIdentityWarningStepViewModel({
            encryption: this.encryption,
        });

        this.snapshot.merge({
            currentScreen: warningVm as FlowStepViewModel<unknown, unknown, unknown>,
            screenType: warningVm.screenType,
        });

        const warningResult = await warningVm.result;

        if (warningResult.type !== "success") {
            return warningResult;
        }

        const { outcome } = warningResult.data;

        if (outcome === "resetComplete") {
            // Reset was completed (either no auth required or OIDC approved)
            return { type: "success" };
        }

        if (outcome === "oidcApprovalStarted") {
            // OIDC approval started - popup is open, wait for user
            // The SDK will complete the reset when approved
            // For now, return success and let the flow continue
            return { type: "success" };
        }

        if (outcome === "needsPassword") {
            // Need password for UIAA
            const { handle } = warningResult.data;
            const passwordVm = new ResetIdentityPasswordStepViewModel({
                resetHandle: handle,
                userId: this.props.client.userId(),
            });

            this.snapshot.merge({
                currentScreen: passwordVm as FlowStepViewModel<unknown, unknown, unknown>,
                screenType: passwordVm.screenType,
            });

            const passwordResult = await passwordVm.result;

            if (passwordResult.type === "success") {
                return { type: "success" };
            }

            // If back from password, go back to warning
            if (passwordResult.type === "back") {
                return this.runResetIdentityFlow();
            }

            return { type: "cancel" };
        }

        return { type: "back" };
    }

    private async runSetupRecoveryFlow(): Promise<EncryptionFlowResult> {
        // Show setup recovery step
        const setupVm = new SetupRecoveryStepViewModel({});

        this.snapshot.merge({
            currentScreen: setupVm as FlowStepViewModel<unknown, unknown, unknown>,
            screenType: setupVm.screenType,
        });

        const setupResult = await setupVm.result;

        if (setupResult.type !== "success") {
            return { type: "cancelled" };
        }

        // Show enabling recovery progress
        const enablingVm = new EnablingRecoveryStepViewModel({
            encryption: this.encryption,
        });

        this.snapshot.merge({
            currentScreen: enablingVm as FlowStepViewModel<unknown, unknown, unknown>,
            screenType: enablingVm.screenType,
        });

        const enablingResult = await enablingVm.result;

        if (enablingResult.type !== "success") {
            // Go back to setup if enabling fails
            return this.runSetupRecoveryFlow();
        }

        const { recoveryKey } = enablingResult.data;

        // Show save recovery key step
        const saveVm = new SaveRecoveryKeyStepViewModel({
            recoveryKey,
        });

        this.snapshot.merge({
            currentScreen: saveVm as FlowStepViewModel<unknown, unknown, unknown>,
            screenType: saveVm.screenType,
        });

        const saveResult = await saveVm.result;

        if (saveResult.type === "success") {
            this.props.onComplete?.();
            return { type: "success" };
        }

        return { type: "cancelled" };
    }

    public cancel(): void {
        this.cancelled = true;
        const { currentScreen } = this.getSnapshot();
        if (currentScreen) {
            // Force cancel on current screen if needed
        }
    }
}
