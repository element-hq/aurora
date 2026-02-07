/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useViewModel } from "@element-hq/web-shared-components";
import { InlineSpinner, Glass, TooltipProvider } from "@vector-im/compound-web";
import FocusLock from "react-focus-lock";
import LockIcon from "@vector-im/compound-design-tokens/assets/web/icons/lock";
import type React from "react";
import type { EncryptionFlowViewModel } from "./CryptoSetup";
import { ModalFlowOverlay } from "./ModalFlowOverlay";
import { SetupScreenLayout, SetupScreenHeader } from "./SetupScreen";

export interface EncryptionProps {
    encryptionFlowViewModel: EncryptionFlowViewModel;
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
    const { isLoading, isActive } = useViewModel(encryptionFlowViewModel);

    useEffect(() => {
        if (!flowStartedRef.current) {
            flowStartedRef.current = true;
            // Start the encryption flow - runs async
            encryptionFlowViewModel.startFlow();
        }
    }, [encryptionFlowViewModel]);

    // Loading state shown in a dialog
    const loadingContent = isLoading
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
            {isActive && !isLoading && (
                <ModalFlowOverlay
                    flow={encryptionFlowViewModel}
                    dismissible={false}
                    showBackdrop={false}
                />
            )}
        </div>
    );
};
