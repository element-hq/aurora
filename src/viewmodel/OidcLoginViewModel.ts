/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { FlowStepViewModel } from "./FlowStepViewModel";
import type { OAuthAuthorizationDataInterface } from "../index.web";

/**
 * Result from OIDC login step
 */
export type OidcLoginResult =
    | { outcome: "success" }
    | { outcome: "usePassword" };

/**
 * Props for OidcLoginViewModel
 */
export interface OidcLoginViewModelProps {
    /** The server to log in to */
    server: string;
    /** Whether password login is also available as fallback */
    supportsPassword: boolean;
    /** Get OIDC auth URL */
    onGetOidcAuthUrl: (
        server: string,
        loginHint?: string,
    ) => Promise<OAuthAuthorizationDataInterface>;
    /** Complete OIDC login with callback URL */
    onLoginWithOidcCallback: (
        callbackUrl: string,
        homeserverUrl: string,
    ) => Promise<void>;
    /** Abort OIDC login (cleanup) */
    onAbortOidcLogin: () => Promise<void>;
}

/**
 * Observable state for the OIDC login screen
 */
export interface OidcLoginViewSnapshot {
    /** The server being logged into */
    server: string;
    /** Whether password login is available as fallback */
    supportsPassword: boolean;
    /** Whether login is in progress */
    loggingIn: boolean;
    /** Error message if login fails */
    error: string | null;
}

/**
 * Actions available on the OIDC login screen
 */
export interface OidcLoginViewActions {
    loginWithOidc(): Promise<void>;
    usePasswordInstead(): void;
    changeServer(): void;
}

/**
 * ViewModel for the OIDC login step.
 *
 * Result: OidcLoginResult on success/fallback, or back (change server)
 */
export class OidcLoginViewModel
    extends FlowStepViewModel<
        OidcLoginViewSnapshot,
        OidcLoginViewModelProps,
        OidcLoginResult
    >
    implements OidcLoginViewActions
{
    public readonly screenType = "oidc-login";

    public constructor(props: OidcLoginViewModelProps) {
        super(props, {
            server: props.server,
            supportsPassword: props.supportsPassword,
            loggingIn: false,
            error: null,
        });
    }

    public async loginWithOidc(): Promise<void> {
        const { server } = this.getSnapshot();

        try {
            this.snapshot.merge({ loggingIn: true, error: null });

            const authData = await this.props.onGetOidcAuthUrl(server);
            const loginUrl = authData.loginUrl();

            console.log("Opening OIDC login URL:", loginUrl);

            // Open OIDC provider in a popup window
            const width = 600;
            const height = 700;
            const left = window.screenX + (window.outerWidth - width) / 2;
            const top = window.screenY + (window.outerHeight - height) / 2;

            const popup = window.open(
                loginUrl,
                "oidc-login",
                `width=${width},height=${height},left=${left},top=${top},scrollbars=yes`,
            );

            if (!popup) {
                throw new Error(
                    "Failed to open popup window. Please allow popups for this site.",
                );
            }

            // Track whether login completed successfully
            let loginCompleted = false;

            // Clean up event listeners and intervals
            const cleanup = () => {
                window.removeEventListener("message", handleMessage);
                clearInterval(popupChecker);
            };

            // Listen for the callback from the popup
            const handleMessage = async (event: MessageEvent) => {
                if (event.origin !== window.location.origin) {
                    return;
                }

                if (event.data?.type === "oidc-callback") {
                    loginCompleted = true;
                    cleanup();
                    await this.completeOidcLogin(event.data.callbackUrl);
                }
            };

            // Check if popup was closed (user cancelled)
            const popupChecker = setInterval(async () => {
                if (popup.closed) {
                    cleanup();
                    if (!loginCompleted) {
                        console.log("OIDC popup closed - user cancelled");
                        await this.props.onAbortOidcLogin();
                        this.snapshot.merge({ loggingIn: false });
                    }
                }
            }, 500);

            window.addEventListener("message", handleMessage);
        } catch (e) {
            console.error("OIDC login error:", e);
            this.snapshot.merge({
                error:
                    e instanceof Error
                        ? e.message
                        : "Failed to start OIDC login",
                loggingIn: false,
            });
        }
    }

    private async completeOidcLogin(callbackUrl: string): Promise<void> {
        const { server } = this.getSnapshot();

        try {
            await this.props.onLoginWithOidcCallback(callbackUrl, server);
            // Success!
            this.complete({ outcome: "success" });
        } catch (e) {
            const errorMessage = e instanceof Error ? e.message : String(e);

            // Check if this is a user cancellation error
            if (errorMessage.includes("OidcError.Cancelled")) {
                console.log("OIDC login cancelled by user");
                await this.props.onAbortOidcLogin();
                this.snapshot.merge({ loggingIn: false });
                return;
            }

            // Actual error
            console.error("OIDC callback error:", e);
            this.snapshot.merge({
                error: errorMessage || "Failed to complete OIDC login",
                loggingIn: false,
            });
        }
    }

    public usePasswordInstead(): void {
        this.complete({ outcome: "usePassword" });
    }

    public changeServer(): void {
        this.goBack();
    }
}
