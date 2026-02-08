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
import CheckIcon from "@vector-im/compound-design-tokens/assets/web/icons/check";
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
                    backgroundColor: "var(--cpd-color-bg-subtle-secondary)",
                    padding: "var(--cpd-space-4x)",
                    borderRadius: "var(--cpd-radius-pill-effect)",
                    marginBottom: "var(--cpd-space-4x)",
                    fontFamily: "monospace",
                    fontSize: "14px",
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                }}
            >
                {recoveryKey}
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "var(--cpd-space-2x)",
                }}
            >
                <Button
                    kind="secondary"
                    size="lg"
                    onClick={() => viewModel.copyToClipboard()}
                >
                    {copied ? (
                        <>
                            <CheckIcon
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    marginRight: "var(--cpd-space-1x)",
                                }}
                            />
                            Copied!
                        </>
                    ) : (
                        <>
                            <CopyIcon
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    marginRight: "var(--cpd-space-1x)",
                                }}
                            />
                            Copy recovery key
                        </>
                    )}
                </Button>
                <Button
                    kind="primary"
                    size="lg"
                    onClick={() => viewModel.confirmSaved()}
                >
                    I've Saved It
                </Button>
            </div>
        </SetupScreenLayout>
    );
};
