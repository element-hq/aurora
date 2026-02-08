/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React from "react";
import { createPortal } from "react-dom";
import {
    useViewModel,
    type ViewModel,
} from "@element-hq/web-shared-components";
import { TooltipProvider, Glass } from "@vector-im/compound-web";
import FocusLock from "react-focus-lock";
import { screenRegistry } from "./screenRegistry";
import type {
    LoginFlowViewModel,
    LoginFlowViewSnapshot,
} from "./Login/LoginFlowViewModel";
import "./ModalFlowOverlay.css";

/**
 * Props for ModalFlowOverlay
 */
export interface ModalFlowOverlayProps {
    /**
     * The flow ViewModel that exposes currentScreen and screenType
     */
    flow: ViewModel<LoginFlowViewSnapshot> & { cancel(): void };

    /**
     * Whether clicking the backdrop dismisses the flow
     */
    dismissible?: boolean;

    /**
     * Whether to show backdrop (dim the background)
     */
    showBackdrop?: boolean;

    /**
     * Optional CSS class for the overlay container
     */
    className?: string;
}

/**
 * Generic overlay component for rendering multi-step flows in a modal.
 *
 * Reads the `currentScreen` and `screenType` from the flow ViewModel,
 * looks up the appropriate component from the screen registry, and
 * renders it in a modal dialog with proper focus trapping and
 * accessibility.
 *
 * @example
 * ```tsx
 * function App() {
 *   const { loginFlow } = useViewModel(appViewModel);
 *
 *   return (
 *     <>
 *       <MainContent />
 *       {loginFlow && (
 *         <ModalFlowOverlay
 *           flow={loginFlow}
 *           dismissible={false}
 *           showBackdrop={true}
 *         />
 *       )}
 *     </>
 *   );
 * }
 * ```
 */
export function ModalFlowOverlay({
    flow,
    dismissible = true,
    showBackdrop = true,
    className,
}: ModalFlowOverlayProps): React.ReactNode {
    const { currentScreen, screenType, isActive } = useViewModel(flow);

    console.log("[ModalFlowOverlay] Render:", { hasCurrentScreen: !!currentScreen, screenType, isActive });

    // No active screen - render nothing
    if (!currentScreen || !screenType || !isActive) {
        console.log("[ModalFlowOverlay] Returning null - no screen to show");
        return null;
    }

    // Look up the component for this screen type
    const ScreenComponent = screenRegistry[screenType];

    if (!ScreenComponent) {
        console.error(`No component registered for screen type: ${screenType}`);
        return null;
    }

    console.log("[ModalFlowOverlay] Rendering screen:", screenType);

    const handleBackdropClick = (): void => {
        if (dismissible) {
            flow.cancel();
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent): void => {
        if (dismissible && e.key === "Escape") {
            e.stopPropagation();
            e.preventDefault();
            flow.cancel();
        }
    };

    const content = (
        <FocusLock returnFocus>
            <div
                className={`aurora_ModalFlowOverlay ${className ?? ""}`}
                role="dialog"
                aria-modal="true"
                onKeyDown={handleKeyDown}
            >
                {showBackdrop && (
                    <div
                        className="aurora_ModalFlowOverlay_backdrop"
                        onClick={handleBackdropClick}
                        aria-hidden="true"
                    />
                )}
                <div className="aurora_ModalFlowOverlay_container">
                    <Glass className="aurora_ModalFlowOverlay_glass">
                        <div className="aurora_ModalFlowOverlay_content">
                            <TooltipProvider>
                                <ScreenComponent
                                    viewModel={
                                        currentScreen as ViewModel<unknown>
                                    }
                                />
                            </TooltipProvider>
                        </div>
                    </Glass>
                </div>
            </div>
        </FocusLock>
    );

    return createPortal(content, document.body);
}
