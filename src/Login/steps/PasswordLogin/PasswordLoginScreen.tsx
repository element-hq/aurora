/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { Button, Form, InlineSpinner } from "@vector-im/compound-web";
import { useViewModel } from "@element-hq/web-shared-components";
import type React from "react";
import type {
    PasswordLoginViewModel,
    PasswordLoginViewActions,
    PasswordLoginViewSnapshot,
} from "./PasswordLoginViewModel";
import type { ScreenProps } from "../../../utils/ScreenProps";

type PasswordLoginScreenViewModel = PasswordLoginViewModel &
    PasswordLoginViewActions;

/**
 * Screen for username/password login.
 */
export const PasswordLoginScreen: React.FC<
    ScreenProps<PasswordLoginScreenViewModel>
> = ({ viewModel }) => {
    const { server, username, password, canSubmit, loggingIn, error } =
        useViewModel(viewModel) as PasswordLoginViewSnapshot;

    return (
        <Form.Root
            style={{ padding: "var(--cpd-space-5x)" }}
            onSubmit={async (e) => {
                e.preventDefault();
                await viewModel.submit();
            }}
        >
            <Form.Field name="server">
                <Form.Label>Homeserver</Form.Label>
                <Form.TextControl disabled={true} value={server} />
            </Form.Field>

            <Form.Field name="username">
                <Form.Label>Username</Form.Label>
                <Form.TextControl
                    disabled={loggingIn}
                    value={username}
                    onChange={(e) => viewModel.setUsername(e.target.value)}
                />
            </Form.Field>

            <Form.Field name="password">
                <Form.Label>Password</Form.Label>
                <Form.PasswordControl
                    disabled={loggingIn}
                    value={password}
                    onChange={(e) => viewModel.setPassword(e.target.value)}
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

            <Form.Submit disabled={!canSubmit || loggingIn}>
                {loggingIn ? <InlineSpinner /> : "Login"}
            </Form.Submit>

            <Button
                kind="tertiary"
                size="sm"
                style={{
                    width: "100%",
                    marginTop: "var(--cpd-space-2x)",
                }}
                disabled={loggingIn}
                onClick={() => viewModel.changeServer()}
            >
                Change account provider
            </Button>
        </Form.Root>
    );
};
