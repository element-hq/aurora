/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { Button } from "@vector-im/compound-web";
import { useViewModel } from "@element-hq/web-shared-components";
import type React from "react";
import KeyIcon from "@vector-im/compound-design-tokens/assets/web/icons/key";
import type {
    ConfirmIdentityStepViewModel,
    ConfirmIdentityStepViewSnapshot,
} from "./ConfirmIdentityStepViewModel";
import { IdentityConfirmationAction } from "./ConfirmIdentityStepViewModel";
import type { ScreenProps } from "./screenRegistry.types";
import { SetupScreenLayout, SetupScreenHeader } from "../SetupScreen";

/**
 * Screen for confirming user identity.
 * Shows available options: recovery key, interactive verification, or reset.
 */
export const ConfirmIdentityScreen: React.FC<
    ScreenProps<ConfirmIdentityStepViewModel>
> = ({ viewModel }) => {
    const { availableActions } = useViewModel(
        viewModel,
    ) as ConfirmIdentityStepViewSnapshot;

    return (
        <SetupScreenLayout>
            <SetupScreenHeader
                Icon={KeyIcon}
                title="Confirm your identity"
                subtitle="To access your encrypted messages, you need to verify your identity."
            />

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--cpd-space-4x)",
                }}
            >
                <Button kind="primary" size="lg" disabled={true}>
                    Use another device (coming soon)
                </Button>

                {availableActions.includes(
                    IdentityConfirmationAction.Recovery,
                ) && (
                    <Button
                        kind="primary"
                        size="lg"
                        onClick={() => viewModel.useRecoveryKey()}
                    >
                        Use recovery key
                    </Button>
                )}

                <Button
                    kind="secondary"
                    size="lg"
                    onClick={() => viewModel.cannotConfirm()}
                >
                    Can't confirm
                </Button>
            </div>
        </SetupScreenLayout>
    );
};
