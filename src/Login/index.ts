/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

// Screens
export { ServerInputScreen } from "./ServerInputScreen";
export { OidcLoginScreen } from "./OidcLoginScreen";
export { PasswordLoginScreen } from "./PasswordLoginScreen";

// ViewModels
export { ServerInputViewModel } from "./ServerInputViewModel";
export type {
    ServerInputViewSnapshot,
    ServerInputViewActions,
    ServerCapabilities,
    ServerInputViewModelProps,
} from "./ServerInputViewModel";

export { OidcLoginViewModel } from "./OidcLoginViewModel";
export type {
    OidcLoginViewSnapshot,
    OidcLoginViewActions,
    OidcLoginResult,
    OidcLoginViewModelProps,
} from "./OidcLoginViewModel";

export { PasswordLoginViewModel } from "./PasswordLoginViewModel";
export type {
    PasswordLoginViewSnapshot,
    PasswordLoginViewActions,
    PasswordLoginResult,
    PasswordLoginViewModelProps,
} from "./PasswordLoginViewModel";

export { LoginFlowViewModel } from "./LoginFlowViewModel";
export type {
    LoginFlowViewSnapshot,
    LoginFlowViewActions,
    LoginFlowResult,
    LoginFlowViewModelProps,
} from "./LoginFlowViewModel";

// Types
export type { ScreenProps } from "./screenRegistry.types";
export type { Credential, UsernamePasswordCredential, OidcCredential } from "./credentials.types";
export { LoginFlow } from "./login-view.types";
export type {
    LoginViewSnapshot,
    LoginViewActions,
    Props as LoginViewProps,
    LoginParams,
} from "./login-view.types";
