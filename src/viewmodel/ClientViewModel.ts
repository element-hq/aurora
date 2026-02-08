/*
 *
 *  * Copyright 2025 New Vector Ltd.
 *  *
 *  * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 *  * Please see LICENSE files in the repository root for full details.
 *
 */

import {
    createAuthenticationClient,
    restoreClient,
    validateNativeSlidingSync,
} from "../utils/clientBuilder";
import { BaseViewModel } from "@element-hq/web-shared-components";
import { MemberListViewModel } from "./MemberListViewModel.ts";
import { TimelineViewModel } from "./TimelineViewModel";
import { RoomViewModel } from "./RoomViewModel";
import {
    type ClientInterface,
    type ClientSessionDelegate,
    type HomeserverLoginDetailsInterface,
    LogLevel,
    type OAuthAuthorizationDataInterface,
    OidcPrompt,
    type RoomListServiceInterface,
    type Session,
    type SyncServiceInterface,
    type TaskHandleInterface,
    initPlatform,
} from "../index.web.ts";
import { getOidcConfiguration } from "../oidcConfig";
import { printRustError } from "../utils.ts";
import {
    ClientState,
    type ClientViewActions,
    type ClientViewSnapshot,
    type LoginParams,
    type Props,
} from "./client-view.types";
import type { Credential } from "../Login/credentials.types";
import { EncryptionFlowViewModel } from "../CryptoSetup";
import { LoginFlowViewModel } from "../Login/LoginFlowViewModel";
import { RoomListViewViewModel } from "../RoomList/RoomListViewViewModel";

export class ClientViewModel
    extends BaseViewModel<ClientViewSnapshot, Props>
    implements ClientViewActions
{
    private syncService?: SyncServiceInterface;
    private roomListService?: RoomListServiceInterface;
    private oidcAuthData?: OAuthAuthorizationDataInterface;
    private clientDelegateHandle?: TaskHandleInterface;
    private client?: ClientInterface;
    private storagePassphrase?: string;
    private storageStoreId?: string;
    private currentRoomId?: string;

    public constructor(props: Props) {
        super(props, {
            clientState: ClientState.Unknown,
            roomViewModel: undefined,
            roomListViewModel: undefined,
            loginFlowViewModel: undefined,
            userId: undefined,
            displayName: undefined,
            avatarUrl: undefined,
        });

        // Create loginFlowViewModel after super() call
        this.snapshot.merge({
            loginFlowViewModel: this.initLoginFlowViewModel(),
        });
    }

    private initLoginFlowViewModel(): LoginFlowViewModel {
        return new LoginFlowViewModel({
            onLogin: this.login.bind(this),
            onCheckHomeserver: this.checkHomeserverCapabilities.bind(this),
            onGetOidcAuthUrl: this.getOidcAuthUrl.bind(this),
            onLoginWithOidcCallback: this.loginWithOidcCallback.bind(this),
            onAbortOidcLogin: this.abortOidcLogin.bind(this),
        });
    }

    /**
     * Safely fetch avatar URL, handling cases where the server returns null
     * instead of omitting the field (which causes deserialization errors)
     */
    private async getAvatarUrlSafely(): Promise<string | undefined> {
        if (!this.client) return undefined;

        try {
            return await this.client.avatarUrl();
        } catch (e) {
            console.log("No avatar URL available for user");
            return undefined;
        }
    }

    private async registerServiceWorker() {
        const registration = await navigator.serviceWorker.register("sw.js");
        if (!registration) {
            throw new Error("Service worker registration failed");
        }

        navigator.serviceWorker.addEventListener(
            "message",
            this.onServiceWorkerPostMessage,
        );
        await registration.update();
    }

    private onServiceWorkerPostMessage = (event: MessageEvent): void => {
        if (!this.client) return;
        try {
            const data = event.data as { type?: string; responseKey?: string };
            if (
                event.origin === window.origin &&
                data?.type === "userinfo" &&
                data?.responseKey
            ) {
                const accessToken = this.client.session().accessToken;
                const homeserver = this.client.homeserver();
                const source = event.source;
                if (source) {
                    source.postMessage({
                        responseKey: data.responseKey,
                        accessToken,
                        homeserver,
                    });
                }
            }
        } catch (e) {
            console.error("Error responding to service worker: ", e);
        }
    };

    /**
     * Create a session delegate that handles saving and retrieving sessions
     * The SDK will call this delegate to persist session updates when tokens are refreshed
     */
    private getSessionDelegate = (): ClientSessionDelegate => ({
        retrieveSessionFromKeychain: (userId: string): Session => {
            console.log(
                `[SessionDelegate] SDK requesting session for user: ${userId}`,
            );
            const sessions = this.props.sessionStore.loadSessionsSync();
            if (!sessions || !sessions[userId]) {
                throw new Error(`No session found for user ${userId}`);
            }
            const sessionData = sessions[userId];
            console.log(
                `[SessionDelegate] Returning session with oidcData: ${!!sessionData.session.oidcData}`,
            );
            return sessionData.session;
        },
        saveSessionInKeychain: (session: Session): void => {
            console.log(
                `[SessionDelegate] SDK triggered session save for ${session.userId}`,
            );
            console.log(
                `[SessionDelegate] Session details: hasOidcData=${!!session.oidcData}, ` +
                    `hasAccessToken=${!!session.accessToken}, ` +
                    `hasRefreshToken=${!!session.refreshToken}`,
            );
            // When saving session updates (e.g., token refresh), the passphrase is already in storage
            this.props.sessionStore.save(session);
        },
    });

    public async tryLoadSession(): Promise<void> {
        console.log(
            "tryLoadSession called with userIdForLoading:",
            this.props.userIdForLoading,
        );
        this.snapshot.merge({ clientState: ClientState.LoadingSession });

        try {
            // No session to load
            // For the first login, we don't have a user ID yet
            if (!this.props.userIdForLoading) {
                console.log(
                    "No userIdForLoading provided, transitioning to LoggedOut",
                );
                throw new Error("No user ID provided");
            }

            const sessions = await this.props.sessionStore.load();
            if (!sessions) throw new Error("No sessions found");

            const sessionData = sessions[this.props.userIdForLoading];
            if (!sessionData) {
                throw new Error("No session found");
            }

            // Try to restore the client - if this fails due to decryption errors,
            // clean up the corrupted store to prevent getting stuck in a loop
            try {
                this.client = await restoreClient(
                    sessionData.session,
                    sessionData.passphrase,
                    sessionData.storeId,
                    this.getSessionDelegate(),
                );
            } catch (restoreError) {
                console.error("Failed to restore client, cleaning up store");
                // Delete the corrupted store
                await this.props.sessionStore.deleteStoreById(
                    sessionData.storeId,
                );
                // Clear the session data
                await this.props.sessionStore.clear(
                    this.props.userIdForLoading,
                );
                // Re-throw to be caught by outer catch
                throw restoreError;
            }

            const userId = this.client.userId();
            const displayName = await this.client.displayName();
            const avatarUrl = await this.getAvatarUrlSafely();

            console.log("Session restored");

            this.snapshot.merge({
                userId,
                displayName,
                avatarUrl,
            });
        } catch (e) {
            printRustError("Failed to restore session", e);
            console.log("Setting clientState to LoggedOut");
            this.snapshot.merge({ clientState: ClientState.LoggedOut });
            return;
        }

        // Continue to sync after successful restore
        await this.sync();
    }

    /**
     * Log out the current user
     * This can be called either:
     * 1. By the user explicitly logging out
     * 2. Automatically when the SDK detects an auth error (e.g. M_UNKNOWN_TOKEN)
     *
     * Note: Currently treats all logouts as hard logouts (clearing all session data).
     * Soft logout support can be added later.
     */
    public logout(): void {
        const userId = this.client?.userId();
        if (userId) {
            this.props.sessionStore.clear(userId);
        }

        this.client = undefined;

        this.snapshot.set({
            clientState: ClientState.LoggedOut,
            roomViewModel: undefined,
            roomListViewModel: undefined,
            userId: undefined,
            displayName: undefined,
            avatarUrl: undefined,
            encryptionFlowViewModel: undefined,
            // Keep loginFlowViewModel so we can log in again
            loginFlowViewModel: this.initLoginFlowViewModel(),
        });
    }

    /**
     * Handle login failure
     */
    private handleLoginFailure(error: unknown, errorMessage: string): void {
        printRustError(errorMessage, error);
        this.snapshot.merge({ clientState: ClientState.Unknown });
    }

    /**
     * Perform login with the given credentials
     * Supports both password and OIDC callback credentials
     */
    private async performLogin(credentials: Credential): Promise<void> {
        this.snapshot.merge({ clientState: ClientState.LoggingIn });

        if (!this.client) {
            throw new Error(
                "No client available. Call checkHomeserverCapabilities first.",
            );
        }

        try {
            initPlatform(
                {
                    logLevel: LogLevel.Trace,
                    traceLogPacks: [],
                    extraTargets: [],
                    writeToStdoutOrSystem: true,
                    writeToFiles: undefined,
                },
                true,
            );

            // Call the appropriate login method based on credential type
            if (credentials.type === "password") {
                await this.client.login(
                    credentials.username,
                    credentials.password,
                    "rust-sdk",
                    undefined,
                );
                console.log("Password login successful");
            } else {
                await this.client.loginWithOidcCallback(
                    credentials.callbackUrl,
                );
                console.log("OIDC login successful");
            }

            // Validate that we're using native sliding sync (we don't support proxy)
            validateNativeSlidingSync(this.client);
            await this.startEncryptionSetup();
        } catch (e) {
            const errorMessage =
                credentials.type === "password"
                    ? "Password login failed"
                    : "OIDC login failed";
            this.handleLoginFailure(e, errorMessage);
            throw e;
        }
    }

    public async login({ username, password }: LoginParams): Promise<void> {
        await this.performLogin({ type: "password", username, password });
    }

    /**
     * Complete OIDC login with the callback URL
     * Called after the user successfully authenticates with the OIDC provider
     * Expects client to already exist from checkHomeserverCapabilities
     */
    public async loginWithOidcCallback(callbackUrl: string): Promise<void> {
        await this.performLogin({ type: "oidc", callbackUrl });
    }

    /**
     * Complete login after authentication succeeds
     * Saves session, updates state, and starts sync
     */
    private async startEncryptionSetup(): Promise<void> {
        if (!this.client) {
            throw new Error(
                "No client available. Call checkHomeserverCapabilities first.",
            );
        }
        const userId = this.client.userId();
        const displayName = await this.client.displayName();
        const avatarUrl = await this.getAvatarUrlSafely();

        // Create encryption flow view model now that we have a client
        const encryptionFlowViewModel = new EncryptionFlowViewModel({
            client: this.client,
            onComplete: () => {
                // When recovery is enabled, continue to sync with the recovery key
                this.continueAfterEncryptionSetup();
            },
        });

        this.snapshot.merge({
            clientState: ClientState.SettingUpEncryption,
            userId,
            displayName,
            avatarUrl,
            encryptionFlowViewModel,
        });

        // Notify parent that login completed
        if (this.props.onLogin && userId) {
            this.props.onLogin(userId, this);
        }
    }

    /**
     * Continue to sync after encryption setup
     */
    public async continueAfterEncryptionSetup(): Promise<void> {
        const currentState = this.getSnapshot().clientState;
        if (currentState !== ClientState.SettingUpEncryption) {
            return;
        }

        if (!this.client) {
            console.error("No client available during encryption setup");
            return;
        }

        try {
            const session = this.client.session();

            console.log("Saving session with passphrase from auth flow");

            // Use the passphrase that was generated when the authentication client was created
            // This ensures we can decrypt the IndexedDB on restore
            if (!this.storagePassphrase) {
                throw new Error("No passphrase available from authentication");
            }
            this.props.sessionStore.save(
                session,
                this.storagePassphrase,
                this.storageStoreId,
            );
            this.storagePassphrase = undefined;
            this.storageStoreId = undefined;

            // Start syncing directly - no need for intermediate LoggedIn state
            await this.sync();
        } catch (e) {
            printRustError("Failed to save session after encryption setup", e);
            this.snapshot.merge({ clientState: ClientState.Unknown });
        }
    }

    /**
     * Check what login methods a homeserver supports
     * Returns login details including OIDC and password support
     */
    public async checkHomeserverCapabilities(
        server: string,
    ): Promise<HomeserverLoginDetailsInterface> {
        try {
            const { client, passphrase, storeId } =
                await createAuthenticationClient(
                    server,
                    this.getSessionDelegate(),
                );
            this.client = client;
            this.storagePassphrase = passphrase;
            this.storageStoreId = storeId;

            const loginDetails = await this.client.homeserverLoginDetails();

            return loginDetails;
        } catch (e) {
            printRustError("Failed to check homeserver capabilities", e);
            throw e;
        }
    }

    /**
     * Get OIDC authorization URL for a given server
     * This initiates the OIDC login flow
     * Expects client to already exist from checkHomeserverCapabilities
     */
    public async getOidcAuthUrl(
        _server: string,
        loginHint?: string,
    ): Promise<OAuthAuthorizationDataInterface> {
        if (!this.client) {
            throw new Error(
                "No client available. Call checkHomeserverCapabilities first.",
            );
        }

        try {
            const oidcConfig = getOidcConfiguration();

            // Use "Consent" prompt for login
            const authData = await this.client.urlForOidc(
                oidcConfig,
                OidcPrompt.Consent.new(),
                loginHint,
                undefined, // deviceId - let SDK generate
                undefined, // additionalScopes
            );

            // Store auth data for later use
            this.oidcAuthData = authData;

            return authData;
        } catch (e) {
            printRustError("Failed to get OIDC auth URL", e);
            throw e;
        }
    }

    /**
     * Abort an in-progress OIDC login
     * Should be called if the user cancels the login flow
     */
    public async abortOidcLogin(): Promise<void> {
        if (!this.client || !this.oidcAuthData) {
            console.warn("No OIDC login in progress to abort");
            return;
        }

        try {
            await this.client.abortOidcAuth(this.oidcAuthData);
            console.log("OIDC login aborted");
        } catch (e) {
            printRustError("Failed to abort OIDC login", e);
        } finally {
            this.oidcAuthData = undefined;
            this.storagePassphrase = undefined;
            this.storageStoreId = undefined;
            this.snapshot.merge({ clientState: ClientState.LoggedOut });
        }
    }

    private async sync(): Promise<void> {
        this.registerServiceWorker();

        if (!this.client) {
            console.error("Cannot sync without client");
            return;
        }

        try {
            // Set up client delegate to handle auth errors
            const delegateHandle = this.client.setDelegate({
                didReceiveAuthError: (isSoftLogout: boolean) => {
                    console.error(
                        `Received authentication error, soft logout: ${isSoftLogout}`,
                    );
                    // For now, treat all auth errors as hard logout
                    // We can add soft logout support later
                    this.logout();
                },
            });

            // Track the delegate handle so it gets cleaned up properly
            if (delegateHandle) {
                this.clientDelegateHandle = delegateHandle;
                this.disposables.track(() => {
                    this.clientDelegateHandle?.cancel();
                });
            } else {
                console.error(
                    "Failed to set client delegate - no handle returned",
                );
            }

            const syncServiceBuilder = this.client.syncService();
            this.syncService = await syncServiceBuilder
                .withOfflineMode()
                .finish();
            this.roomListService = this.syncService.roomListService();

            // Initialize room list view model now that sync services are ready
            const roomListViewModel = new RoomListViewViewModel({
                syncServiceInterface: this.syncService,
                roomListService: this.roomListService,
                client: this.client,
                openRoom: this.openRoom.bind(this),
            });

            console.log("Sync services created, transitioning to Syncing");
            this.snapshot.merge({
                clientState: ClientState.Syncing,
                roomListViewModel,
            });
            await this.syncService.start();
            console.log("syncing...");
        } catch (e) {
            printRustError("syncing failed", e);
            this.snapshot.merge({ clientState: ClientState.Unknown });
            return;
        }
    }

    public setCurrentRoom(roomId: string): void {
        if (roomId === "") return;

        const snapshot = this.getSnapshot();

        // Check if we're already viewing this room
        if (this.currentRoomId === roomId) {
            return;
        }

        // Dispose the current room view model
        snapshot.roomViewModel?.dispose();

        if (!this.client) return;

        const room = this.client.getRoom(roomId);
        if (!room) return;

        const roomViewModel = new RoomViewModel({ room });

        this.currentRoomId = roomId;

        this.snapshot.merge({
            roomViewModel,
        });

        snapshot.roomListViewModel?.setActiveRoom(roomId);
    }

    public openRoom(roomId: string): void {
        this.setCurrentRoom(roomId);
    }
}
