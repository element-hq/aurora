/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { Form, IconButton, InlineSpinner } from "@vector-im/compound-web";
import { useViewModel } from "@element-hq/web-shared-components";
import type React from "react";
import LockIcon from "@vector-im/compound-design-tokens/assets/web/icons/lock";
import ChevronLeftIcon from "@vector-im/compound-design-tokens/assets/web/icons/chevron-left";
import type {
    ResetIdentityPasswordStepViewModel,
    ResetIdentityPasswordStepViewSnapshot,
} from "./ResetIdentityPasswordStepViewModel";
import type { ScreenProps } from "./screenRegistry.types";
import { SetupScreenLayout, SetupScreenHeader, setupScreenStyles } from "../SetupScreen";

/**
 * Screen for entering password to confirm identity reset.
 * Used with UIAA (User-Interactive Authentication API) flow.
 */
export const ResetIdentityPasswordScreen: React.FC<
    ScreenProps<ResetIdentityPasswordStepViewModel>
> = ({ viewModel }) => {
    const { password, error, isResetting } = useViewModel(
        viewModel,
    ) as ResetIdentityPasswordStepViewSnapshot;

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
                Icon={LockIcon}
                title="Confirm with password"
                subtitle="Enter your account password to reset your identity."
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
                        textAlign: "center",
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
                <Form.Field name="password">
                    <Form.Label>Password</Form.Label>
                    <Form.TextControl
                        type="password"
                        value={password}
                        placeholder="Enter your password"
                        onChange={(e) => viewModel.setPassword(e.target.value)}
                        disabled={isResetting}
                    />
                </Form.Field>

                <Form.Submit disabled={!password.trim() || isResetting}>
                    {isResetting ? (
                        <>
                            <InlineSpinner />
                            Resetting...
                        </>
                    ) : (
                        "Reset identity"
                    )}
                </Form.Submit>
            </Form.Root>
        </SetupScreenLayout>
    );
};
