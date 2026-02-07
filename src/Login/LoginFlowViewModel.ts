/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { BaseViewModel } from "@element-hq/web-shared-components";
import type { FlowStepViewModel } from "../CryptoSetup/FlowStepViewModel";
import {
    ServerInputViewModel,
    type ServerCapabilities,
} from "./ServerInputViewModel";
import { OidcLoginViewModel } from "./OidcLoginViewModel";
import { PasswordLoginViewModel } from "./PasswordLoginViewModel";
import type { LoginParams } from "./login-view.types";
import type {
    HomeserverLoginDetailsInterface,
    OAuthAuthorizationDataInterface,
} from "../index.web";

/**
 * Result of the login flow
 */
export type LoginFlowResult = { type: "success" } | { type: "cancelled" };

/**
 * Props for LoginFlowViewModel
 */
export interface LoginFlowViewModelProps {
    /** Initial server to pre-populate */
    initialServer?: string;
    /** Callback to check homeserver capabilities */
    onCheckHomeserver: (
        server: string,
    ) => Promise<HomeserverLoginDetailsInterface>;
    /** Callback to perform password login */
    onLogin: (params: LoginParams) => Promise<void>;
    /** Callback to get OIDC auth URL */
    onGetOidcAuthUrl: (
        server: string,
        loginHint?: string,
    ) => Promise<OAuthAuthorizationDataInterface>;
    /** Callback to complete OIDC login */
    onLoginWithOidcCallback: (
        callbackUrl: string,
        homeserverUrl: string,
    ) => Promise<void>;
    /** Callback to abort OIDC login */
    onAbortOidcLogin: () => Promise<void>;
}

/**
 * Snapshot for the login flow - exposes the current screen
 */
export interface LoginFlowViewSnapshot {
    /** The current child ViewModel, or null if flow not started/complete */
    currentScreen: FlowStepViewModel<unknown, unknown, unknown> | null;
    /** Screen type for registry lookup */
    screenType: string | null;
    /** Whether the flow is active */
    isActive: boolean;
}

/**
 * Actions on the login flow
 */
export interface LoginFlowViewActions {
    /** Start the login flow */
    startFlow(): Promise<LoginFlowResult>;
    /** Cancel the entire flow */
    cancel(): void;
}

/**
 * Coordinates the multi-step login flow using async/await.
 *
 * Creates child ViewModels for each step and exposes the current one
 * via `currentScreen`. The View layer reads this and renders the
 * appropriate component in a dialog.
 */
export class LoginFlowViewModel
    extends BaseViewModel<LoginFlowViewSnapshot, LoginFlowViewModelProps>
    implements LoginFlowViewActions
{
    private cancelled = false;

    public constructor(props: LoginFlowViewModelProps) {
        super(props, {
            currentScreen: null,
            screenType: null,
            isActive: false,
        });
    }

    /**
     * Start the login flow. Runs until login succeeds or user cancels.
     */
    public async startFlow(): Promise<LoginFlowResult> {
        this.cancelled = false;
        this.snapshot.merge({ isActive: true });

        let lastServer = this.props.initialServer ?? "matrix.org";
        let lastCapabilities: ServerCapabilities | null = null;

        try {
            while (!this.cancelled) {
                // Step 1: Get server and capabilities
                const serverResult = await this.runServerInputStep(lastServer);

                if (serverResult.type === "cancel") {
                    return { type: "cancelled" };
                }

                if (serverResult.type === "back") {
                    // Can't go back from first step, treat as cancel
                    return { type: "cancelled" };
                }

                lastServer = serverResult.data.server;
                lastCapabilities = serverResult.data;

                // Step 2: Attempt login based on capabilities
                const loginResult = await this.runLoginStep(lastCapabilities);

                if (loginResult.type === "cancel") {
                    return { type: "cancelled" };
                }

                if (loginResult.type === "back") {
                    // Go back to server selection
                    continue;
                }

                // Success!
                return { type: "success" };
            }

            return { type: "cancelled" };
        } finally {
            this.snapshot.merge({
                currentScreen: null,
                screenType: null,
                isActive: false,
            });
        }
    }

    private async runServerInputStep(
        initialServer: string,
    ): Promise<
        | { type: "success"; data: ServerCapabilities }
        | { type: "back" }
        | { type: "cancel" }
    > {
        const vm = new ServerInputViewModel({
            initialServer,
            onCheckHomeserver: this.props.onCheckHomeserver,
        });

        this.snapshot.merge({
            currentScreen: vm as FlowStepViewModel<unknown, unknown, unknown>,
            screenType: vm.screenType,
        });

        return vm.result;
    }

    private async runLoginStep(
        capabilities: ServerCapabilities,
    ): Promise<
        | { type: "success"; data: unknown }
        | { type: "back" }
        | { type: "cancel" }
    > {
        // Try OIDC first if supported
        if (capabilities.supportsOidc) {
            const oidcResult = await this.runOidcLoginStep(capabilities);

            if (oidcResult.type === "success") {
                if (oidcResult.data.outcome === "success") {
                    return { type: "success", data: undefined };
                }
                if (oidcResult.data.outcome === "usePassword") {
                    // Fall through to password login
                }
            } else {
                return oidcResult;
            }
        }

        // Password login
        if (capabilities.supportsPassword) {
            return this.runPasswordLoginStep(capabilities.server);
        }

        // No supported methods (shouldn't happen due to check in server input)
        return { type: "cancel" };
    }

    private async runOidcLoginStep(
        capabilities: ServerCapabilities,
    ): Promise<
        | { type: "success"; data: { outcome: "success" | "usePassword" } }
        | { type: "back" }
        | { type: "cancel" }
    > {
        const vm = new OidcLoginViewModel({
            server: capabilities.server,
            supportsPassword: capabilities.supportsPassword,
            onGetOidcAuthUrl: this.props.onGetOidcAuthUrl,
            onLoginWithOidcCallback: this.props.onLoginWithOidcCallback,
            onAbortOidcLogin: this.props.onAbortOidcLogin,
        });

        this.snapshot.merge({
            currentScreen: vm as FlowStepViewModel<unknown, unknown, unknown>,
            screenType: vm.screenType,
        });

        return vm.result as Promise<
            | { type: "success"; data: { outcome: "success" | "usePassword" } }
            | { type: "back" }
            | { type: "cancel" }
        >;
    }

    private async runPasswordLoginStep(
        server: string,
    ): Promise<
        | { type: "success"; data: { outcome: "success" } }
        | { type: "back" }
        | { type: "cancel" }
    > {
        const vm = new PasswordLoginViewModel({
            server,
            onLogin: this.props.onLogin,
        });

        this.snapshot.merge({
            currentScreen: vm as FlowStepViewModel<unknown, unknown, unknown>,
            screenType: vm.screenType,
        });

        return vm.result as Promise<
            | { type: "success"; data: { outcome: "success" } }
            | { type: "back" }
            | { type: "cancel" }
        >;
    }

    public cancel(): void {
        this.cancelled = true;
        const { currentScreen } = this.getSnapshot();
        if (currentScreen) {
            // The current step's result promise will resolve with cancel
            // when the VM is disposed, or we can force it
        }
    }
}
