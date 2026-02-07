/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import type { RecoveryState, BackupState } from "../index.web";

/**
 * Represents different stages of the encryption setup flow
 */
export enum EncryptionFlow {
    /** Initial loading/checking state */
    Loading = "loading",
    /** User needs to confirm their identity (entry point for incomplete recovery) */
    ConfirmIdentity = "confirm_identity",
    /** User enters recovery key */
    EnterRecoveryKey = "enter_recovery_key",
    /** User needs to set up recovery for the first time */
    SetupRecovery = "setup_recovery",
    /** Recovery is being enabled (shows progress) */
    EnablingRecovery = "enabling_recovery",
    /** Recovery key was just created and needs to be saved */
    SaveRecoveryKey = "save_recovery_key",
    /** Warning screen before resetting identity */
    ResetIdentityWarning = "reset_identity_warning",
    /** Password entry for UIAA reset */
    ResetIdentityPassword = "reset_identity_password",
    /** Recovery is complete and enabled */
    Complete = "complete",
}

/**
 * Available actions on the Confirm Identity screen
 */
export enum IdentityConfirmationAction {
    /** Use recovery key to verify */
    Recovery = "recovery",
    /** Use another device for interactive verification */
    InteractiveVerification = "interactive_verification",
}

export interface EncryptionViewSnapshot {
    /** Current flow step */
    flow: EncryptionFlow;
    /** Recovery state from SDK */
    recoveryState: RecoveryState;
    /** Backup state from SDK */
    backupState: BackupState | undefined;
    /** Whether a backup exists on the server */
    backupExistsOnServer: boolean | undefined;
    /** Whether the user has other devices they can verify against */
    hasDevicesToVerifyAgainst: boolean | undefined;
    /** Available actions for identity confirmation */
    availableActions: IdentityConfirmationAction[] | undefined;
    /** Progress message while enabling recovery */
    enableRecoveryProgress: string;
    /** Recovery key that was just generated (needs to be saved) */
    recoveryKey: string | undefined;
    /** Error message if any */
    error: string | undefined;
    /** Whether the user can navigate back from the current screen */
    canGoBack: boolean;
    /** Whether we are currently verifying the recovery key */
    isVerifying: boolean;
    /** Whether we are currently resetting identity */
    isResetting: boolean;
}
