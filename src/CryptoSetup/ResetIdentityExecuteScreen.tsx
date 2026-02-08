/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { Button, InlineSpinner } from "@vector-im/compound-web";
import { useViewModel } from "@element-hq/web-shared-components";
import type React from "react";
import ErrorIcon from "@vector-im/compound-design-tokens/assets/web/icons/error-solid";
import type {
    ResetIdentityExecuteStepViewModel,
    ResetIdentityExecuteStepViewSnapshot,
} from "./ResetIdentityExecuteStepViewModel";
import type { ScreenProps } from "./screenRegistry.types";
import { SetupScreenLayout, SetupScreenHeader } from "../SetupScreen";

/**
 * Screen shown while identity reset is executing.
 * Shows loading state or error with retry option.
 */
export const ResetIdentityExecuteScreen: React.FC<
    ScreenProps<ResetIdentityExecuteStepViewModel>
> = ({ viewModel }) => {
    const { isResetting, error } = useViewModel(
        viewModel,
    ) as ResetIdentityExecuteStepViewSnapshot;

    if (isResetting) {
        return (
            <SetupScreenLayout>
                <SetupScreenHeader
                    Icon={ErrorIcon}
                    title="Resetting identity..."
                    variant="critical"
                    subtitle="Please wait while we reset your cryptographic identity."
                />

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "var(--cpd-space-8x)",
                    }}
                >
                    <InlineSpinner />
                </div>
            </SetupScreenLayout>
        );
    }

    // Error state - show error with retry
    return (
        <SetupScreenLayout>
            <SetupScreenHeader
                Icon={ErrorIcon}
                title="Reset failed"
                variant="critical"
                subtitle={error || "An unknown error occurred."}
            />

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--cpd-space-4x)",
                }}
            >
                <Button
                    kind="primary"
                    size="lg"
                    onClick={() => viewModel.retry()}
                >
                    Try again
                </Button>
            </div>
        </SetupScreenLayout>
    );
};
