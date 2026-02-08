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
import { ResetIdentityConfirmStepViewModel } from "./ResetIdentityConfirmStepViewModel";
import { ResetIdentityExecuteStepViewModel } from "./ResetIdentityExecuteStepViewModel";
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

    private cleanup(): void {
        console.log("[EncryptionFlow] cleanup - clearing state");
        this.snapshot.merge({
            currentScreen: null,
            screenType: null,
            isActive: false,
        });
    }

    /**
     * Start the encryption flow. Runs until complete or user cancels.
     */
    public async startFlow(): Promise<EncryptionFlowResult> {
        console.log("[EncryptionFlow] startFlow called");
        this.cancelled = false;
        this.snapshot.merge({ isActive: true, isLoading: true });
        console.log("[EncryptionFlow] Set isActive: true, isLoading: true");

        try {
            // Check initial state to determine available options
            console.log("[EncryptionFlow] Checking initial state...");
            const [backupExistsOnServer, hasDevicesToVerifyAgainst] = await Promise.all([
                this.checkBackupExistsOnServer(),
                this.checkHasDevicesToVerifyAgainst(),
            ]);

            const recoveryState = this.encryption.recoveryState();
            // RecoveryState: Unknown=0, Enabled=1, Disabled=2, Incomplete=3
            console.log("[EncryptionFlow] Initial state:", { backupExistsOnServer, hasDevicesToVerifyAgainst, recoveryState });

            // Compute available actions
            const availableActions: IdentityConfirmationAction[] = [];

            if (hasDevicesToVerifyAgainst) {
                availableActions.push(IdentityConfirmationAction.InteractiveVerification);
            }

            // Show "Use recovery key" if recovery is enabled or incomplete
            if (recoveryState === 1 || recoveryState === 3) {
                availableActions.push(IdentityConfirmationAction.Recovery);
            }

            console.log("[EncryptionFlow] Available actions:", availableActions);

            // Always run the confirm identity flow - even if no actions available,
            // the user can still choose "Can't confirm" which leads to reset
            console.log("[EncryptionFlow] Starting confirm identity flow");
            while (!this.cancelled) {
                const confirmResult = await this.runConfirmIdentityStep(availableActions);

                if (confirmResult.type === "cancel") {
                    this.cleanup();
                    return { type: "cancelled" };
                }

                if (confirmResult.type === "back") {
                    // Can't go back from first step
                    this.cleanup();
                    return { type: "cancelled" };
                }

                const { outcome } = confirmResult.data;

                if (outcome === "useRecoveryKey") {
                    const recoveryResult = await this.runRecoveryKeyEntryFlow();
                    if (recoveryResult.type === "success") {
                        this.props.onComplete?.();
                        this.cleanup();
                        return { type: "success" };
                    }
                    if (recoveryResult.type === "cancel") {
                        this.cleanup();
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
                        this.cleanup();
                        return setupResult;
                    }
                    if (resetResult.type === "cancel") {
                        this.cleanup();
                        return { type: "cancelled" };
                    }
                    // back - continue loop to show confirm identity again
                    continue;
                }
            }

            this.cleanup();
            return { type: "cancelled" };
        } catch (e) {
            printRustError("Encryption flow failed", e);
            console.log("[EncryptionFlow] Error in startFlow:", e);
            this.cleanup();
            return { type: "cancelled" };
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
        console.log("[EncryptionFlow] runConfirmIdentityStep - creating VM");
        const vm = new ConfirmIdentityStepViewModel({
            availableActions,
        });

        console.log("[EncryptionFlow] runConfirmIdentityStep - setting currentScreen and isLoading: false");
        this.snapshot.merge({
            currentScreen: vm as FlowStepViewModel<unknown, unknown, unknown>,
            screenType: vm.screenType,
            isLoading: false,
        });
        console.log("[EncryptionFlow] runConfirmIdentityStep - state updated, waiting for result");

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
        // Step 1: Show reset warning (consequences)
        const warningVm = new ResetIdentityWarningStepViewModel({});

        this.snapshot.merge({
            currentScreen: warningVm as FlowStepViewModel<unknown, unknown, unknown>,
            screenType: warningVm.screenType,
        });

        const warningResult = await warningVm.result;

        if (warningResult.type !== "success") {
            return warningResult;
        }

        // User wants to proceed - run confirm and execute steps
        return this.runResetConfirmAndExecute();
    }

    /**
     * Runs the confirm and execute steps of the reset flow.
     * Called after user has already seen the warning screen.
     */
    private async runResetConfirmAndExecute(): Promise<
        | { type: "success" }
        | { type: "back" }
        | { type: "cancel" }
    > {
        // Step 2: Show final "Are you sure? This is irreversible" confirmation
        const confirmVm = new ResetIdentityConfirmStepViewModel({});

        this.snapshot.merge({
            currentScreen: confirmVm as FlowStepViewModel<unknown, unknown, unknown>,
            screenType: confirmVm.screenType,
        });

        const confirmResult = await confirmVm.result;

        if (confirmResult.type !== "success") {
            // User cancelled or went back - return to warning
            if (confirmResult.type === "back") {
                return this.runResetIdentityFlow();
            }
            return confirmResult;
        }

        // User confirmed - now actually perform the reset
        // Step 3: Execute the reset
        const executeVm = new ResetIdentityExecuteStepViewModel({
            encryption: this.encryption,
        });

        this.snapshot.merge({
            currentScreen: executeVm as FlowStepViewModel<unknown, unknown, unknown>,
            screenType: executeVm.screenType,
        });

        const executeResult = await executeVm.result;

        if (executeResult.type !== "success") {
            return executeResult;
        }

        const { outcome } = executeResult.data;

        if (outcome === "resetComplete") {
            return { type: "success" };
        }

        if (outcome === "needsOidc") {
            // OIDC flow: Show a fresh warning screen while popup is open
            const { handle, approvalUrl } = executeResult.data;

            // Create a NEW warningVm instance (the old one's promise is already resolved)
            const oidcWarningVm = new ResetIdentityWarningStepViewModel({});

            this.snapshot.merge({
                currentScreen: oidcWarningVm as FlowStepViewModel<unknown, unknown, unknown>,
                screenType: oidcWarningVm.screenType,
            });

            // Open OIDC popup
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
                console.error("Failed to open OIDC popup");
                // Let user try again from warning screen
                const retryResult = await oidcWarningVm.result;
                if (retryResult.type === "success") {
                    // User wants to try again - skip warning, go to confirm
                    return this.runResetConfirmAndExecute();
                }
                return retryResult;
            }

            // Race between OIDC completion and user action on warning screen
            const oidcPromise = handle.reset(undefined).then(() => ({ type: "oidc-complete" as const })).catch((e) => {
                printRustError("OIDC reset failed", e);
                return { type: "oidc-failed" as const };
            });

            const userActionPromise = oidcWarningVm.result.then((result) => ({
                type: "user-action" as const,
                result,
            }));

            const raceResult = await Promise.race([oidcPromise, userActionPromise]);

            if (raceResult.type === "oidc-complete") {
                console.log("OIDC reset complete");
                if (popup && !popup.closed) {
                    popup.close();
                }
                // oidcWarningVm is no longer needed - just return success
                return { type: "success" };
            }

            if (raceResult.type === "oidc-failed") {
                if (popup && !popup.closed) {
                    popup.close();
                }
                // User can try again from warning screen
                const retryResult = await oidcWarningVm.result;
                if (retryResult.type === "success") {
                    // Skip warning, go directly to confirm
                    return this.runResetConfirmAndExecute();
                }
                return retryResult;
            }

            // User interacted with warning screen
            if (popup && !popup.closed) {
                popup.close();
            }

            if (raceResult.result.type === "success") {
                // User clicked "Continue Reset" - skip warning, go to confirm
                return this.runResetConfirmAndExecute();
            }

            // User went back or cancelled
            return raceResult.result;
        }

        if (outcome === "needsPassword") {
            // Need password for UIAA
            const { handle } = executeResult.data;
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

            // If back from password, we can't really go back since reset is in progress
            // Just return the result
            return passwordResult.type === "cancel" ? { type: "cancel" } : { type: "back" };
        }

        return { type: "success" };
    }

    private async runSetupRecoveryFlow(): Promise<EncryptionFlowResult> {
        console.log("[EncryptionFlow] runSetupRecoveryFlow - creating SetupRecoveryStepViewModel");
        // Show setup recovery step
        const setupVm = new SetupRecoveryStepViewModel({});

        console.log("[EncryptionFlow] runSetupRecoveryFlow - setting currentScreen and isLoading: false");
        this.snapshot.merge({
            currentScreen: setupVm as FlowStepViewModel<unknown, unknown, unknown>,
            screenType: setupVm.screenType,
            isLoading: false,
        });

        console.log("[EncryptionFlow] runSetupRecoveryFlow - waiting for setupVm.result");
        const setupResult = await setupVm.result;
        console.log("[EncryptionFlow] runSetupRecoveryFlow - setupResult:", setupResult);

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
        this.cleanup();
        const { currentScreen } = this.getSnapshot();
        if (currentScreen) {
            // Force cancel on current screen if needed
        }
    }
}
