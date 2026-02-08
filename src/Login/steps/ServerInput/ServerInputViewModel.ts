/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { FlowStepViewModel } from "../../../utils/FlowStepViewModel";
import type { HomeserverLoginDetailsInterface } from "../../../index.web";

/**
 * Capabilities discovered from the homeserver
 */
export interface ServerCapabilities {
    server: string;
    supportsOidc: boolean;
    supportsPassword: boolean;
}

/**
 * Props for ServerInputViewModel
 */
export interface ServerInputViewModelProps {
    /** Initial server value */
    initialServer: string;
    /** Callback to check homeserver capabilities */
    onCheckHomeserver: (
        server: string,
    ) => Promise<HomeserverLoginDetailsInterface>;
}

/**
 * Observable state for the server input screen
 */
export interface ServerInputViewSnapshot {
    /** Current server value */
    server: string;
    /** Whether we're checking homeserver capabilities */
    checking: boolean;
    /** Error message if check fails */
    error: string | null;
}

/**
 * Actions available on the server input screen
 */
export interface ServerInputViewActions {
    setServer(server: string): void;
    submit(): Promise<void>;
    cancel(): void;
}

/**
 * ViewModel for the server input step of login.
 *
 * Result: ServerCapabilities on success, or back/cancel
 */
export class ServerInputViewModel
    extends FlowStepViewModel<
        ServerInputViewSnapshot,
        ServerInputViewModelProps,
        ServerCapabilities
    >
    implements ServerInputViewActions
{
    public readonly screenType = "server-input";

    public constructor(props: ServerInputViewModelProps) {
        super(props, {
            server: props.initialServer,
            checking: false,
            error: null,
        });
    }

    public setServer(server: string): void {
        this.snapshot.merge({ server, error: null });
    }

    public async submit(): Promise<void> {
        const { server } = this.getSnapshot();
        if (!server) return;

        this.snapshot.merge({ checking: true, error: null });

        try {
            const loginDetails = await this.props.onCheckHomeserver(server);

            const supportsOidc = loginDetails.supportsOidcLogin();
            const supportsPassword = loginDetails.supportsPasswordLogin();

            if (!supportsOidc && !supportsPassword) {
                throw new Error("No supported login methods available");
            }

            // Complete successfully with capabilities
            this.complete({
                server,
                supportsOidc,
                supportsPassword,
            });
        } catch (e) {
            console.error("Failed to check homeserver:", e);
            this.snapshot.merge({
                error:
                    e instanceof Error
                        ? e.message
                        : "Failed to connect to homeserver",
                checking: false,
            });
        }
    }

    public cancel(): void {
        this.cancelFlow();
    }
}
