/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { Form, IconButton } from "@vector-im/compound-web";
import { useViewModel } from "@element-hq/web-shared-components";
import type React from "react";
import KeyIcon from "@vector-im/compound-design-tokens/assets/web/icons/key";
import ChevronLeftIcon from "@vector-im/compound-design-tokens/assets/web/icons/chevron-left";
import type {
    RecoveryKeyEntryStepViewModel,
    RecoveryKeyEntryStepViewSnapshot,
} from "./RecoveryKeyEntryStepViewModel";
import type { ScreenProps } from "../../../utils/ScreenProps";
import { SetupScreenLayout, setupScreenStyles } from "../../../SetupScreen/SetupScreenLayout";
import { SetupScreenHeader } from "../../../SetupScreen/SetupScreenHeader";

/**
 * Screen for entering a recovery key to verify identity.
 */
export const RecoveryKeyEntryScreen: React.FC<
    ScreenProps<RecoveryKeyEntryStepViewModel>
> = ({ viewModel }) => {
    const { recoveryKey, error, isVerifying } = useViewModel(
        viewModel,
    ) as RecoveryKeyEntryStepViewSnapshot;

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
                Icon={KeyIcon}
                title="Enter recovery key"
                subtitle="Enter your recovery key to access your encrypted messages."
            />

            {error && (
                <div
                    style={{
                        padding: "var(--cpd-space-3x)",
                        marginBottom: "var(--cpd-space-4x)",
                        backgroundColor:
                            "var(--cpd-color-bg-critical-subtle)",
                        borderRadius: "var(--cpd-radius-pill-effect)",
                        color: "var(--cpd-color-text-critical-primary)",
                    }}
                >
                    {error}
                </div>
            )}

            <Form.Root
                onSubmit={async (e) => {
                    e.preventDefault();
                    await viewModel.submit();
                }}
            >
                <Form.Field name="recoveryKey">
                    <Form.Label>Recovery Key</Form.Label>
                    <Form.TextControl
                        type="password"
                        value={recoveryKey}
                        placeholder="Enter your recovery key"
                        onChange={(e) =>
                            viewModel.setRecoveryKey(e.target.value)
                        }
                        disabled={isVerifying}
                    />
                </Form.Field>

                <Form.Submit disabled={!recoveryKey.trim() || isVerifying}>
                    {isVerifying ? "Verifying..." : "Continue"}
                </Form.Submit>
            </Form.Root>
        </SetupScreenLayout>
    );
};
