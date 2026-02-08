/*
 *
 *  * Copyright 2025 New Vector Ltd.
 *  *
 *  * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 *  * Please see LICENSE files in the repository root for full details.
 *
 */

import type {
    HomeserverLoginDetailsInterface,
    OAuthAuthorizationDataInterface,
} from "../index.web";

export interface LoginParams {
    username: string;
    password: string;
    server: string;
}

/**
 * Represents the current login flow state
 */
export enum LoginFlow {
    /** User is entering server URL */
    ServerInput = "ServerInput",
    /** OIDC login flow */
    OIDC = "OIDC",
    /** Username/password login flow */
    UsernamePassword = "UsernamePassword",
}

/**
 * Props passed to LoginViewModel constructor
 */
export interface Props {
    onLogin: (params: LoginParams) => Promise<void>;
    onCheckHomeserver: (
        server: string,
    ) => Promise<HomeserverLoginDetailsInterface>;
    onGetOidcAuthUrl: (
        server: string,
        loginHint?: string,
    ) => Promise<OAuthAuthorizationDataInterface>;
    onLoginWithOidcCallback: (
        callbackUrl: string,
        homeserverUrl: string,
    ) => Promise<void>;
    onAbortOidcLogin: () => Promise<void>;
}

/**
 * Snapshot represents the complete state of the login view
 */
export interface LoginViewSnapshot {
    /** Current login flow */
    flow: LoginFlow;

    /** Username field value */
    username: string;

    /** Password field value */
    password: string;

    /** Server field value (without https:// prefix) */
    server: string;

    /** Whether the login form is valid and can be submitted */
    canSubmit: boolean;

    /** Whether login is currently in progress */
    loggingIn: boolean;

    /** Error message if login fails */
    error: string | null;

    /** Whether we're checking homeserver capabilities */
    checking: boolean;

    /** Whether the homeserver supports OIDC */
    supportsOidc: boolean | null;

    /** Whether the homeserver supports password login */
    supportsPassword: boolean | null;
}

/**
 * Actions that views can call on the LoginViewModel
 */
export interface LoginViewActions {
    /**
     * Update the username field
     */
    setUsername(username: string): void;

    /**
     * Update the password field
     */
    setPassword(password: string): void;

    /**
     * Update the server field
     */
    setServer(server: string): void;

    /**
     * Submit the login form (password login)
     */
    login(): Promise<void>;

    /**
     * Check homeserver capabilities and proceed with appropriate login method
     */
    checkCapabilitiesAndContinue(): Promise<void>;

    /**
     * Initiate OIDC login flow
     */
    loginWithOidc(): Promise<void>;

    /**
     * Complete OIDC login with callback URL
     */
    completeOidcLogin(callbackUrl: string): Promise<void>;

    /**
     * Switch to password login if OIDC is available
     */
    usePasswordInstead(): void;

    /**
     * Go back to server selection
     */
    changeServer(): void;
}
