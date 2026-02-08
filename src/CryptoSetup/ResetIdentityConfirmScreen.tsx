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
import type { ResetIdentityConfirmStepViewModel } from "./ResetIdentityConfirmStepViewModel";
import type { ScreenProps } from "./screenRegistry.types";
import {
    SetupScreenLayout,
    SetupScreenHeader,
    setupScreenStyles,
} from "../SetupScreen";

/**
 * Final confirmation screen before resetting identity.
 * Matches mobile UX: "Are you sure? This is irreversible"
 */
export const ResetIdentityConfirmScreen: React.FC<
    ScreenProps<ResetIdentityConfirmStepViewModel>
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
                title="Are you sure you want to reset your identity?"
                variant="critical"
                subtitle="This process is irreversible."
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
                    destructive
                    size="lg"
                    onClick={() => viewModel.confirmReset()}
                >
                    Yes, reset now
                </Button>

                <Button
                    kind="tertiary"
                    size="lg"
                    onClick={() => viewModel.back()}
                >
                    Cancel
                </Button>
            </div>
        </SetupScreenLayout>
    );
};
