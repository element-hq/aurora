/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

// Screens
export { ConfirmIdentityScreen } from "./ConfirmIdentityScreen";
export { RecoveryKeyEntryScreen } from "./RecoveryKeyEntryScreen";
export { SetupRecoveryScreen } from "./SetupRecoveryScreen";
export { SaveRecoveryKeyScreen } from "./SaveRecoveryKeyScreen";
export { EnablingRecoveryScreen } from "./EnablingRecoveryScreen";
export { ResetIdentityWarningScreen } from "./ResetIdentityWarningScreen";
export { ResetIdentityConfirmScreen } from "./ResetIdentityConfirmScreen";
export { ResetIdentityExecuteScreen } from "./ResetIdentityExecuteScreen";
export { ResetIdentityPasswordScreen } from "./ResetIdentityPasswordScreen";

// ViewModels
export { ConfirmIdentityStepViewModel } from "./ConfirmIdentityStepViewModel";
export type {
    ConfirmIdentityStepViewSnapshot,
    ConfirmIdentityStepViewActions,
    ConfirmIdentityResult,
    ConfirmIdentityStepViewModelProps,
} from "./ConfirmIdentityStepViewModel";
export { IdentityConfirmationAction } from "./ConfirmIdentityStepViewModel";

export { RecoveryKeyEntryStepViewModel } from "./RecoveryKeyEntryStepViewModel";
export type {
    RecoveryKeyEntryStepViewSnapshot,
    RecoveryKeyEntryStepViewActions,
    RecoveryKeyEntryResult,
    RecoveryKeyEntryStepViewModelProps,
} from "./RecoveryKeyEntryStepViewModel";

export { SetupRecoveryStepViewModel } from "./SetupRecoveryStepViewModel";
export type {
    SetupRecoveryStepViewSnapshot,
    SetupRecoveryStepViewActions,
    SetupRecoveryResult,
    SetupRecoveryStepViewModelProps,
} from "./SetupRecoveryStepViewModel";

export { SaveRecoveryKeyStepViewModel } from "./SaveRecoveryKeyStepViewModel";
export type {
    SaveRecoveryKeyStepViewSnapshot,
    SaveRecoveryKeyStepViewActions,
    SaveRecoveryKeyResult,
    SaveRecoveryKeyStepViewModelProps,
} from "./SaveRecoveryKeyStepViewModel";

export { EnablingRecoveryStepViewModel } from "./EnablingRecoveryStepViewModel";
export type {
    EnablingRecoveryStepViewSnapshot,
    EnablingRecoveryResult,
    EnablingRecoveryStepViewModelProps,
} from "./EnablingRecoveryStepViewModel";

export { ResetIdentityWarningStepViewModel } from "./ResetIdentityWarningStepViewModel";
export type {
    ResetIdentityWarningStepViewSnapshot,
    ResetIdentityWarningStepViewActions,
    ResetIdentityWarningResult,
    ResetIdentityWarningStepViewModelProps,
} from "./ResetIdentityWarningStepViewModel";

export { ResetIdentityConfirmStepViewModel } from "./ResetIdentityConfirmStepViewModel";
export type {
    ResetIdentityConfirmStepViewSnapshot,
    ResetIdentityConfirmStepViewActions,
    ResetIdentityConfirmResult,
    ResetIdentityConfirmStepViewModelProps,
} from "./ResetIdentityConfirmStepViewModel";

export { ResetIdentityExecuteStepViewModel } from "./ResetIdentityExecuteStepViewModel";
export type {
    ResetIdentityExecuteStepViewSnapshot,
    ResetIdentityExecuteStepViewActions,
    ResetIdentityExecuteResult,
    ResetIdentityExecuteStepViewModelProps,
} from "./ResetIdentityExecuteStepViewModel";

export { ResetIdentityPasswordStepViewModel } from "./ResetIdentityPasswordStepViewModel";
export type {
    ResetIdentityPasswordStepViewSnapshot,
    ResetIdentityPasswordStepViewActions,
    ResetIdentityPasswordResult,
    ResetIdentityPasswordStepViewModelProps,
} from "./ResetIdentityPasswordStepViewModel";

export { EncryptionFlowViewModel } from "./EncryptionFlowViewModel";
export type {
    EncryptionFlowViewSnapshot,
    EncryptionFlowViewActions,
    EncryptionFlowResult,
    EncryptionFlowViewModelProps,
} from "./EncryptionFlowViewModel";

export { FlowStepViewModel } from "./FlowStepViewModel";
export type { FlowStepResult } from "./FlowStepViewModel";

// Types
export type { ScreenProps } from "./screenRegistry.types";
export {
    EncryptionFlow,
} from "./encryption-view.types";
export type { EncryptionViewSnapshot } from "./encryption-view.types";
