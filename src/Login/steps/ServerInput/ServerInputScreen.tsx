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
} from "./ServerInputViewModel";
import type { ScreenProps } from "../../../utils/ScreenProps";
import { SetupScreenHeader } from "../../../SetupScreen/SetupScreenHeader";

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
            <SetupScreenHeader
                Icon={HostIcon}
                title="Select your server"
                subtitle="What is the address of your server?"
            />

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
