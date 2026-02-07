/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { InlineSpinner } from "@vector-im/compound-web";
import { useViewModel } from "@element-hq/web-shared-components";
import type React from "react";
import KeyIcon from "@vector-im/compound-design-tokens/assets/web/icons/key";
import type {
    EnablingRecoveryStepViewModel,
    EnablingRecoveryStepViewSnapshot,
} from "./EnablingRecoveryStepViewModel";
import type { ScreenProps } from "./screenRegistry.types";
import { SetupScreenLayout, SetupScreenHeader } from "../SetupScreen";

/**
 * Screen showing progress while enabling recovery.
 * Displays progress messages during backup creation.
 */
export const EnablingRecoveryScreen: React.FC<
    ScreenProps<EnablingRecoveryStepViewModel>
> = ({ viewModel }) => {
    const { progressMessage, error } = useViewModel(
        viewModel,
    ) as EnablingRecoveryStepViewSnapshot;

    return (
        <SetupScreenLayout>
            <SetupScreenHeader Icon={KeyIcon} title="Setting up recovery" />

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "var(--cpd-space-4x)",
                }}
            >
                {error ? (
                    <div
                        style={{
                            padding: "var(--cpd-space-3x)",
                            backgroundColor:
                                "var(--cpd-color-bg-critical-subtle)",
                            borderRadius: "var(--cpd-radius-pill-effect)",
                            color: "var(--cpd-color-text-critical-primary)",
                            textAlign: "center",
                        }}
                    >
                        {error}
                    </div>
                ) : (
                    <>
                        <InlineSpinner />
                        <p
                            style={{
                                margin: 0,
                                color: "var(--cpd-color-text-secondary)",
                                textAlign: "center",
                            }}
                        >
                            {progressMessage}
                        </p>
                    </>
                )}
            </div>
        </SetupScreenLayout>
    );
};
