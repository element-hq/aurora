/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useViewModel } from "@element-hq/web-shared-components";
import { InlineSpinner, Glass, TooltipProvider } from "@vector-im/compound-web";
import FocusLock from "react-focus-lock";
import LockIcon from "@vector-im/compound-design-tokens/assets/web/icons/lock";
import type React from "react";
import type { EncryptionFlowViewModel } from "./EncryptionFlowViewModel";
import { ModalFlowOverlay } from "../Dialog/ModalFlowOverlay";
import { SetupScreenLayout } from "../SetupScreen/SetupScreenLayout";
import { SetupScreenHeader } from "../SetupScreen/SetupScreenHeader";

export interface EncryptionProps {
    encryptionFlowViewModel: EncryptionFlowViewModel;
}

/**
 * Opens a centered popup window.
 */
function openPopup(url: string, name: string): Window | null {
    const width = 600;
    const height = 900;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    return window.open(
        url,
        name,
        `width=${width},height=${height},left=${left},top=${top},scrollbars=yes`,
    );
}

/**
 * Encryption page component.
 *
 * Renders the bloom background and uses ModalFlowOverlay to display
 * the encryption flow steps. The EncryptionFlowViewModel coordinates
 * the flow using async/await.
 */
export const Encryption: React.FC<EncryptionProps> = ({
    encryptionFlowViewModel,
}) => {
    const flowStartedRef = useRef(false);
    const { isLoading, isActive, currentScreen, screenType } = useViewModel(encryptionFlowViewModel);

    // Provide the popup opener to the ViewModel (View -> ViewModel callback)
    const popupOpener = useCallback(openPopup, []);
    useEffect(() => {
        encryptionFlowViewModel.setPopupOpener(popupOpener);
    }, [encryptionFlowViewModel, popupOpener]);

    useEffect(() => {
        if (!flowStartedRef.current) {
            flowStartedRef.current = true;
            // Start the encryption flow - runs async
            encryptionFlowViewModel.startFlow();
        }
    }, [encryptionFlowViewModel]);

    // Show loading when:
    // 1. Explicitly loading (isLoading: true), OR
    // 2. Flow is active but no screen is set yet (race condition protection)
    const showLoading = isLoading || (isActive && !currentScreen);

    // Loading state shown in a dialog
    const loadingContent = showLoading
        ? createPortal(
              <FocusLock returnFocus>
                  <div
                      className="aurora_ModalFlowOverlay"
                      role="dialog"
                      aria-modal="true"
                      aria-label="Checking encryption status"
                  >
                      <div className="aurora_ModalFlowOverlay_container">
                          <Glass className="aurora_ModalFlowOverlay_glass">
                              <div className="aurora_ModalFlowOverlay_content">
                                  <TooltipProvider>
                                      <SetupScreenLayout>
                                          <SetupScreenHeader
                                              Icon={LockIcon}
                                              title="Checking encryption status"
                                              subtitle="Please wait while we check your encryption settings..."
                                          />
                                          <div
                                              style={{
                                                  display: "flex",
                                                  justifyContent: "center",
                                              }}
                                          >
                                              <InlineSpinner />
                                          </div>
                                      </SetupScreenLayout>
                                  </TooltipProvider>
                              </div>
                          </Glass>
                      </div>
                  </div>
              </FocusLock>,
              document.body,
          )
        : null;

    return (
        <div className="mx_LoginPage">
            {loadingContent}
            {isActive && currentScreen && !showLoading && (
                <ModalFlowOverlay
                    flow={encryptionFlowViewModel}
                    dismissible={false}
                    showBackdrop={false}
                />
            )}
        </div>
    );
};
