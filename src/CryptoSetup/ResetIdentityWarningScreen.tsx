/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { Button, IconButton, InlineSpinner } from "@vector-im/compound-web";
import { useViewModel } from "@element-hq/web-shared-components";
import type React from "react";
import WarningIcon from "@vector-im/compound-design-tokens/assets/web/icons/warning";
import ChevronLeftIcon from "@vector-im/compound-design-tokens/assets/web/icons/chevron-left";
import type {
    ResetIdentityWarningStepViewModel,
    ResetIdentityWarningStepViewSnapshot,
} from "./ResetIdentityWarningStepViewModel";
import type { ScreenProps } from "./screenRegistry.types";
import { SetupScreenLayout, SetupScreenHeader, setupScreenStyles } from "../SetupScreen";

/**
 * Screen warning user about identity reset consequences.
 * Shown before resetting cross-signing keys.
 */
export const ResetIdentityWarningScreen: React.FC<
    ScreenProps<ResetIdentityWarningStepViewModel>
> = ({ viewModel }) => {
    const { error, isResetting } = useViewModel(
        viewModel,
    ) as ResetIdentityWarningStepViewSnapshot;

    return (
        <SetupScreenLayout>
            <div className={setupScreenStyles.backButton}>
                <IconButton
                    onClick={() => viewModel.back()}
                    aria-label="Go back"
                    disabled={isResetting}
                >
                    <ChevronLeftIcon />
                </IconButton>
            </div>

            <SetupScreenHeader
                Icon={WarningIcon}
                title="Reset identity?"
                variant="critical"
                subtitle={
                    <>
                        <p>
                            This will reset your cryptographic identity. Other
                            users will see a warning that you've reset your
                            identity.
                        </p>
                        <p>
                            Your previous message history will no longer be
                            accessible.
                        </p>
                    </>
                }
            />

            {error && (
                <div
                    style={{
                        padding: "var(--cpd-space-3x)",
                        marginBottom: "var(--cpd-space-4x)",
                        backgroundColor: "var(--cpd-color-bg-critical-subtle)",
                        borderRadius: "var(--cpd-radius-pill-effect)",
                        color: "var(--cpd-color-text-critical-primary)",
                        textAlign: "center",
                    }}
                >
                    {error}
                </div>
            )}

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--cpd-space-4x)",
                }}
            >
                <Button
                    kind="primary"
                    destructive
                    size="lg"
                    onClick={() => viewModel.confirmReset()}
                    disabled={isResetting}
                >
                    {isResetting ? (
                        <>
                            <InlineSpinner />
                            Resetting...
                        </>
                    ) : (
                        "Reset identity"
                    )}
                </Button>

                <Button
                    kind="tertiary"
                    size="lg"
                    onClick={() => viewModel.back()}
                    disabled={isResetting}
                >
                    Cancel
                </Button>
            </div>
        </SetupScreenLayout>
    );
};
