/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { Button } from "@vector-im/compound-web";
import type React from "react";
import KeyIcon from "@vector-im/compound-design-tokens/assets/web/icons/key";
import type { SetupRecoveryStepViewModel } from "./SetupRecoveryStepViewModel";
import type { ScreenProps } from "./screenRegistry.types";
import { SetupScreenLayout, SetupScreenHeader } from "../SetupScreen";

/**
 * Screen prompting user to set up recovery.
 * Shown when user needs to generate a new recovery key.
 */
export const SetupRecoveryScreen: React.FC<
    ScreenProps<SetupRecoveryStepViewModel>
> = ({ viewModel }) => {
    return (
        <SetupScreenLayout>
            <SetupScreenHeader
                Icon={KeyIcon}
                title="Set up recovery"
                subtitle="Create a recovery key to access your encrypted messages if you lose access to your devices."
            />

            <Button
                kind="primary"
                size="lg"
                style={{ width: "100%" }}
                onClick={() => viewModel.generateRecoveryKey()}
            >
                Generate recovery key
            </Button>
        </SetupScreenLayout>
    );
};
