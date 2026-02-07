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
import CopyIcon from "@vector-im/compound-design-tokens/assets/web/icons/copy";
import type {
    SaveRecoveryKeyStepViewModel,
    SaveRecoveryKeyStepViewSnapshot,
} from "./SaveRecoveryKeyStepViewModel";
import type { ScreenProps } from "./screenRegistry.types";
import { SetupScreenLayout, SetupScreenHeader } from "../SetupScreen";

/**
 * Screen for saving the generated recovery key.
 * User must copy/save the key before proceeding.
 */
export const SaveRecoveryKeyScreen: React.FC<
    ScreenProps<SaveRecoveryKeyStepViewModel>
> = ({ viewModel }) => {
    const { recoveryKey, copied } = useViewModel(
        viewModel,
    ) as SaveRecoveryKeyStepViewSnapshot;

    return (
        <SetupScreenLayout>
            <SetupScreenHeader
                Icon={KeyIcon}
                title="Save your recovery key"
                subtitle="Store this key somewhere safe. You'll need it to access your encrypted messages if you lose access to your devices."
                variant="success"
            />

            <div
                style={{
                    position: "relative",
                    marginBottom: "var(--cpd-space-6x)",
                }}
            >
                <div
                    style={{
                        padding: "var(--cpd-space-4x)",
                        backgroundColor: "var(--cpd-color-bg-subtle-secondary)",
                        borderRadius: "var(--cpd-radius-pill-effect)",
                        fontFamily: "var(--cpd-font-family-mono)",
                        fontSize: "var(--cpd-font-size-body-md)",
                        wordBreak: "break-all",
                        textAlign: "center",
                    }}
                >
                    {recoveryKey}
                </div>

                <Button
                    kind="secondary"
                    size="sm"
                    onClick={() => viewModel.copyToClipboard()}
                    style={{
                        position: "absolute",
                        top: "var(--cpd-space-2x)",
                        right: "var(--cpd-space-2x)",
                    }}
                >
                    <CopyIcon width="16" height="16" />
                    {copied ? "Copied!" : "Copy"}
                </Button>
            </div>

            <Button
                kind="primary"
                size="lg"
                style={{ width: "100%" }}
                onClick={() => viewModel.confirmSaved()}
            >
                I've saved my recovery key
            </Button>
        </SetupScreenLayout>
    );
};
