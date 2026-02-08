/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { Button, IconButton } from "@vector-im/compound-web";
import type React from "react";
import ErrorIcon from "@vector-im/compound-design-tokens/assets/web/icons/error-solid";
import ChevronLeftIcon from "@vector-im/compound-design-tokens/assets/web/icons/chevron-left";
import CheckIcon from "@vector-im/compound-design-tokens/assets/web/icons/check";
import InfoIcon from "@vector-im/compound-design-tokens/assets/web/icons/info";
import type { ResetIdentityWarningStepViewModel } from "./ResetIdentityWarningStepViewModel";
import type { ScreenProps } from "./screenRegistry.types";
import { SetupScreenLayout, SetupScreenHeader, setupScreenStyles } from "../SetupScreen";

/**
 * Screen warning user about identity reset consequences.
 * Shown before resetting cross-signing keys.
 */
export const ResetIdentityWarningScreen: React.FC<
    ScreenProps<ResetIdentityWarningStepViewModel>
> = ({ viewModel }) => {
    return (
        <SetupScreenLayout>
            <div className={setupScreenStyles.backButton}>
                <IconButton
                    onClick={() => viewModel.back()}
                    aria-label="Go back"
                >
                    <ChevronLeftIcon />
                </IconButton>
            </div>

            <SetupScreenHeader
                Icon={ErrorIcon}
                title="Can't confirm? You'll need to reset your identity."
                variant="critical"
            />

            {/* Info box with bullet points matching main */}
            <div
                style={{
                    backgroundColor: "var(--cpd-color-bg-subtle-secondary)",
                    borderRadius: "var(--cpd-radius-md)",
                    padding: "var(--cpd-space-4x)",
                    marginBottom: "var(--cpd-space-4x)",
                }}
            >
                <div style={{ display: "flex", gap: "var(--cpd-space-2x)", marginBottom: "var(--cpd-space-3x)" }}>
                    <CheckIcon style={{ width: 20, height: 20, flexShrink: 0, color: "var(--cpd-color-icon-success-primary)" }} />
                    <span>Your account details, contacts, preferences, and chat list will be kept</span>
                </div>
                <div style={{ display: "flex", gap: "var(--cpd-space-2x)", marginBottom: "var(--cpd-space-3x)" }}>
                    <InfoIcon style={{ width: 20, height: 20, flexShrink: 0, color: "var(--cpd-color-icon-secondary)" }} />
                    <span>You will lose any message history that's stored only on the server</span>
                </div>
                <div style={{ display: "flex", gap: "var(--cpd-space-2x)" }}>
                    <InfoIcon style={{ width: 20, height: 20, flexShrink: 0, color: "var(--cpd-color-icon-secondary)" }} />
                    <span>You will need to verify all your existing devices and contacts again</span>
                </div>
            </div>

            <p style={{ textAlign: "center", margin: "0 0 var(--cpd-space-4x) 0", fontWeight: 600 }}>
                Only reset your identity if you don't have access to another signed-in device and you've lost your recovery key.
            </p>

            <Button
                kind="primary"
                destructive
                size="lg"
                style={{ width: "100%" }}
                onClick={() => viewModel.confirmReset()}
            >
                Continue Reset
            </Button>
        </SetupScreenLayout>
    );
};
