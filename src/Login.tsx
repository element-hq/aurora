/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { useEffect, useRef } from "react";
import type React from "react";
import type { LoginFlowViewModel } from "./viewmodel/LoginFlowViewModel";
import { ModalFlowOverlay } from "./ModalFlowOverlay";

export interface LoginProps {
    loginFlowViewModel: LoginFlowViewModel;
}

/**
 * Login page component.
 *
 * Renders the bloom background and uses ModalFlowOverlay to display
 * the login flow steps. The LoginFlowViewModel coordinates the flow
 * using async/await.
 */
export const Login: React.FC<LoginProps> = ({ loginFlowViewModel }) => {
    const flowStartedRef = useRef(false);

    useEffect(() => {
        if (!flowStartedRef.current) {
            flowStartedRef.current = true;
            // Start the login flow - runs async
            loginFlowViewModel.startFlow();
        }
    }, [loginFlowViewModel]);

    return (
        <div className="mx_LoginPage">
            <ModalFlowOverlay
                flow={loginFlowViewModel}
                dismissible={false}
                showBackdrop={false}
            />
        </div>
    );
};
