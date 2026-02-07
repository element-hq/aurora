/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import type { ComponentType } from "react";
import type { ViewModel } from "@element-hq/web-shared-components";

// Login screens
import { ServerInputScreen } from "./Login/ServerInputScreen";
import { OidcLoginScreen } from "./Login/OidcLoginScreen";
import { PasswordLoginScreen } from "./Login/PasswordLoginScreen";

// Encryption screens
import { ConfirmIdentityScreen } from "./CryptoSetup/ConfirmIdentityScreen";
import { RecoveryKeyEntryScreen } from "./CryptoSetup/RecoveryKeyEntryScreen";
import { SetupRecoveryScreen } from "./CryptoSetup/SetupRecoveryScreen";
import { SaveRecoveryKeyScreen } from "./CryptoSetup/SaveRecoveryKeyScreen";
import { EnablingRecoveryScreen } from "./CryptoSetup/EnablingRecoveryScreen";
import { ResetIdentityWarningScreen } from "./CryptoSetup/ResetIdentityWarningScreen";
import { ResetIdentityPasswordScreen } from "./CryptoSetup/ResetIdentityPasswordScreen";

/**
 * Props that all screen components receive
 */
export interface ScreenProps<TViewModel = ViewModel<unknown>> {
    viewModel: TViewModel;
}

/**
 * Registry mapping screen type strings to React components.
 *
 * Screen components receive their ViewModel as a prop.
 * The ModalFlowOverlay uses this registry to render the appropriate
 * component based on the screenType from the flow ViewModel.
 *
 * To add a new screen:
 * 1. Create the screen component in src/screens/
 * 2. Create the ViewModel in src/viewmodel/
 * 3. Add an entry here mapping screenType -> component
 */
export const screenRegistry: Record<
    string,
    ComponentType<ScreenProps<ViewModel<unknown>>>
> = {
    // Login flow screens
    "server-input": ServerInputScreen as ComponentType<ScreenProps>,
    "oidc-login": OidcLoginScreen as ComponentType<ScreenProps>,
    "password-login": PasswordLoginScreen as ComponentType<ScreenProps>,

    // Encryption flow screens
    "confirm-identity": ConfirmIdentityScreen as ComponentType<ScreenProps>,
    "recovery-key-entry": RecoveryKeyEntryScreen as ComponentType<ScreenProps>,
    "setup-recovery": SetupRecoveryScreen as ComponentType<ScreenProps>,
    "save-recovery-key": SaveRecoveryKeyScreen as ComponentType<ScreenProps>,
    "enabling-recovery": EnablingRecoveryScreen as ComponentType<ScreenProps>,
    "reset-identity-warning": ResetIdentityWarningScreen as ComponentType<ScreenProps>,
    "reset-identity-password": ResetIdentityPasswordScreen as ComponentType<ScreenProps>,
};
