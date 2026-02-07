/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import type { ComponentType } from "react";
import type { ViewModel } from "@element-hq/web-shared-components";

import { ServerInputScreen } from "./screens/ServerInputScreen";
import { OidcLoginScreen } from "./screens/OidcLoginScreen";
import { PasswordLoginScreen } from "./screens/PasswordLoginScreen";

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
    "server-input": ServerInputScreen as ComponentType<ScreenProps>,
    "oidc-login": OidcLoginScreen as ComponentType<ScreenProps>,
    "password-login": PasswordLoginScreen as ComponentType<ScreenProps>,
};
