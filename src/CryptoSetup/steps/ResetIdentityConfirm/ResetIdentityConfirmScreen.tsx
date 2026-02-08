/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { Button } from "@vector-im/compound-web";
import type React from "react";
import ErrorIcon from "@vector-im/compound-design-tokens/assets/web/icons/error-solid";
import type { ResetIdentityConfirmStepViewModel } from "./ResetIdentityConfirmStepViewModel";
import type { ScreenProps } from "../../../utils/ScreenProps";
import { SetupScreenLayout } from "../../../SetupScreen/SetupScreenLayout";
import { SetupScreenHeader } from "../../../SetupScreen/SetupScreenHeader";

/**
 * Final confirmation screen before resetting identity.
 * Matches mobile UX: "Are you sure? This is irreversible"
 */
export const ResetIdentityConfirmScreen: React.FC<
    ScreenProps<ResetIdentityConfirmStepViewModel>
> = ({ viewModel }) => {
    return (
        <SetupScreenLayout>
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
