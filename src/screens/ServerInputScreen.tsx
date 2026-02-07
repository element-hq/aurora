/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { Form, InlineSpinner } from "@vector-im/compound-web";
import { useViewModel } from "@element-hq/web-shared-components";
import type React from "react";
import HostIcon from "@vector-im/compound-design-tokens/assets/web/icons/host";
import type {
    ServerInputViewModel,
    ServerInputViewActions,
    ServerInputViewSnapshot,
} from "../viewmodel/ServerInputViewModel";
import type { ScreenProps } from "../screenRegistry";

type ServerInputScreenViewModel = ServerInputViewModel & ServerInputViewActions;

/**
 * Screen for entering the homeserver URL.
 * Used as the first step of the login flow.
 */
export const ServerInputScreen: React.FC<
    ScreenProps<ServerInputScreenViewModel>
> = ({ viewModel }) => {
    const { server, checking, error } = useViewModel(
        viewModel,
    ) as ServerInputViewSnapshot;

    return (
        <Form.Root
            style={{ padding: "var(--cpd-space-5x)" }}
            onSubmit={async (e) => {
                e.preventDefault();
                await viewModel.submit();
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "var(--cpd-space-2x)",
                    marginBottom: "var(--cpd-space-9x)",
                }}
            >
                <div
                    style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "14px",
                        backgroundColor: "var(--cpd-color-bg-subtle-secondary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "var(--cpd-space-2x)",
                    }}
                >
                    <HostIcon
                        width="32px"
                        height="32px"
                        style={{
                            color: "var(--cpd-color-icon-secondary)",
                        }}
                    />
                </div>

                <h2
                    style={{
                        textAlign: "center",
                        margin: 0,
                        fontSize: "var(--cpd-font-size-heading-md)",
                        fontWeight: "var(--cpd-font-weight-semibold)",
                    }}
                >
                    Select your server
                </h2>

                <p
                    style={{
                        textAlign: "center",
                        margin: 0,
                        color: "var(--cpd-color-text-secondary)",
                    }}
                >
                    What is the address of your server?
                </p>
            </div>

            <Form.Field name="server">
                <Form.Label>Homeserver URL</Form.Label>
                <Form.TextControl
                    disabled={checking}
                    value={server}
                    placeholder="matrix.org"
                    onChange={(e) => viewModel.setServer(e.target.value)}
                />
            </Form.Field>

            {error && (
                <div
                    style={{
                        color: "var(--cpd-color-text-critical-primary)",
                        marginBottom: "var(--cpd-space-4x)",
                    }}
                >
                    {error}
                </div>
            )}

            <Form.Submit disabled={!server || checking}>
                {checking ? <InlineSpinner /> : "Continue"}
            </Form.Submit>
        </Form.Root>
    );
};
