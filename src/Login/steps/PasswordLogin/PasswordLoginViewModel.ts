/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { FlowStepViewModel } from "../../../utils/FlowStepViewModel";
import type { LoginParams } from "../../login-view.types";

/**
 * Result from password login step
 */
export type PasswordLoginResult = { outcome: "success" };

/**
 * Props for PasswordLoginViewModel
 */
export interface PasswordLoginViewModelProps {
    /** The server to log in to */
    server: string;
    /** Callback to perform password login */
    onLogin: (params: LoginParams) => Promise<void>;
}

/**
 * Observable state for the password login screen
 */
export interface PasswordLoginViewSnapshot {
    /** The server being logged into */
    server: string;
    /** Username field value */
    username: string;
    /** Password field value */
    password: string;
    /** Whether the form is valid */
    canSubmit: boolean;
    /** Whether login is in progress */
    loggingIn: boolean;
    /** Error message if login fails */
    error: string | null;
}

/**
 * Actions available on the password login screen
 */
export interface PasswordLoginViewActions {
    setUsername(username: string): void;
    setPassword(password: string): void;
    submit(): Promise<void>;
    changeServer(): void;
}

/**
 * ViewModel for the password login step.
 *
 * Result: PasswordLoginResult on success, or back (change server)
 */
export class PasswordLoginViewModel
    extends FlowStepViewModel<
        PasswordLoginViewSnapshot,
        PasswordLoginViewModelProps,
        PasswordLoginResult
    >
    implements PasswordLoginViewActions
{
    public readonly screenType = "password-login";

    public constructor(props: PasswordLoginViewModelProps) {
        super(props, {
            server: props.server,
            username: "",
            password: "",
            canSubmit: false,
            loggingIn: false,
            error: null,
        });
    }

    public setUsername(username: string): void {
        const { password, server } = this.getSnapshot();
        this.snapshot.merge({
            username,
            canSubmit: this.validateForm(username, password, server),
            error: null,
        });
    }

    public setPassword(password: string): void {
        const { username, server } = this.getSnapshot();
        this.snapshot.merge({
            password,
            canSubmit: this.validateForm(username, password, server),
            error: null,
        });
    }

    public async submit(): Promise<void> {
        const { username, password, server } = this.getSnapshot();

        if (!this.validateForm(username, password, server)) {
            return;
        }

        try {
            this.snapshot.merge({ loggingIn: true, error: null });

            await this.props.onLogin({ username, password, server });

            // Success!
            this.complete({ outcome: "success" });
        } catch (e) {
            console.error("Password login error:", e);
            this.snapshot.merge({
                error: e instanceof Error ? e.message : "Login failed",
                loggingIn: false,
            });
        }
    }

    public changeServer(): void {
        this.goBack();
    }

    private validateForm(
        username: string,
        password: string,
        server: string,
    ): boolean {
        return Boolean(username && password && server);
    }
}
