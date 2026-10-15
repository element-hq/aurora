/*
 *
 *  * Copyright 2025 New Vector Ltd.
 *  *
 *  * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 *  * Please see LICENSE files in the repository root for full details.
 *
 */

import { BaseViewModel } from "@element-hq/web-shared-components";
import { EncryptionFlowViewModel } from "./CryptoSetup/EncryptionFlowViewModel";
import {
    ClientState,
    type ClientViewActions,
    type ClientViewSnapshot,
    type LoginParams,
    type Props,
    type RoomHistoryEntry,
} from "./client-view.types";
import {
    type ClientInterface,
    type ClientSessionDelegate,
    type HomeserverLoginDetailsInterface,
    initPlatform,
    LogLevel,
    type OAuthAuthorizationDataInterface,
    OAuthPrompt,
    type RoomListServiceInterface,
    type Session,
    type SyncServiceInterface,
    type TaskHandleInterface,
} from "./index.web.ts";
import type { Credential } from "./Login/credentials.types";
import { LoginFlowViewModel } from "./Login/LoginFlowViewModel";
import { getOidcConfiguration } from "./oidcConfig";
import { RoomViewModel } from "./Room/RoomViewModel";
import { RoomListViewViewModel } from "./RoomList/RoomListViewViewModel";
import { GlobalSearchViewModel } from "./Search/GlobalSearchViewModel";
import { SetStatusViewModel } from "./UserStatus/SetStatusViewModel";
import {
    createAuthenticationClient,
    restoreClient,
    validateNativeSlidingSync,
} from "./utils/clientBuilder";
import { mxcToUrl } from "./utils/mxcToUrl";
import { printRustError } from "./utils/printRustError";
import { userStatusFromProfile } from "./utils/userStatus";

let platformInitialised = false;

/**
 * Set up the SDK's logging once per page: it can only be initialised once,
 * and both session restore and login need it.
 */
function ensurePlatformInitialised(): void {
    if (platformInitialised) return;
    platformInitialised = true;
    initPlatform(
        {
            logLevel: LogLevel.Info,
            // Add e.g. TraceLogPacks.Search or TraceLogPacks.EventCache here to
            // debug the search index; they're very chatty.
            traceLogPacks: [],
            extraTargets: [],
            writeToStdoutOrSystem: true,
            writeToFiles: undefined,
        },
        true,
    );
}

export class ClientViewModel
    extends BaseViewModel<ClientViewSnapshot, Props>
    implements ClientViewActions
{
    private syncService?: SyncServiceInterface;
    private roomListService?: RoomListServiceInterface;
    private oidcAuthData?: OAuthAuthorizationDataInterface;
    private clientDelegateHandle?: TaskHandleInterface;
    private ownProfileHandle?: TaskHandleInterface;
    private client?: ClientInterface;
    private storagePassphrase?: string;
    private storageStoreId?: string;
    private currentRoomId?: string;
    /** Rooms viewed in order, for back/forward navigation. */
    private roomHistory: string[] = [];
    private roomHistoryIndex = -1;
    private roomHistoryEntries = new Map<string, RoomHistoryEntry>();

    public constructor(props: Props) {
        super(props, {
            clientState: ClientState.Unknown,
            roomViewModel: undefined,
            roomListViewModel: undefined,
            loginFlowViewModel: undefined,
            globalSearchViewModel: undefined,
            canGoBack: false,
            canGoForward: false,
            recentRooms: [],
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
    /**
     * The underlying SDK client, if one has been created
     */
    public getClient(): ClientInterface | undefined {
        return this.client;
    }

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
                `[SessionDelegate] Returning session with oauthData: ${!!sessionData.session.oauthData}`,
            );
            return sessionData.session;
        },
        saveSessionInKeychain: (session: Session): void => {
            console.log(
                `[SessionDelegate] SDK triggered session save for ${session.userId}`,
            );
            console.log(
                `[SessionDelegate] Session details: hasOauthData=${!!session.oauthData}, ` +
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

            ensurePlatformInitialised();

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
        this.getSnapshot().globalSearchViewModel?.dispose();
        this.roomHistory = [];
        this.roomHistoryIndex = -1;
        this.roomHistoryEntries.clear();

        this.ownProfileHandle?.cancel();
        this.ownProfileHandle = undefined;
        this.getSnapshot().setStatusViewModel?.dispose();

        this.snapshot.set({
            clientState: ClientState.LoggedOut,
            roomViewModel: undefined,
            roomListViewModel: undefined,
            userId: undefined,
            displayName: undefined,
            globalSearchViewModel: undefined,
            canGoBack: false,
            canGoForward: false,
            recentRooms: [],
            avatarUrl: undefined,
            userStatus: undefined,
            setStatusViewModel: undefined,
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
            ensurePlatformInitialised();

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
                await this.client.loginWithOauthCallback(
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
            const authData = await this.client.urlForOauth(
                oidcConfig,
                OAuthPrompt.Consent.new(),
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
            await this.client.abortOauthAuth(this.oidcAuthData);
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
                onBackgroundTaskErrorReport: (taskName, error) => {
                    console.error(`Background task ${taskName} failed:`, error);
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

            if (import.meta.env.DEV) this.exposeClearCaches();

            const globalSearchViewModel = new GlobalSearchViewModel({
                client: this.client,
                roomListService: this.roomListService,
                openRoom: this.openRoom.bind(this),
            });

            console.log("Sync services created, transitioning to Syncing");
            this.snapshot.merge({
                clientState: ClientState.Syncing,
                roomListViewModel,
                globalSearchViewModel,
            });
            this.subscribeToOwnProfile();
            await this.syncService.start();
            console.log("syncing...");

            // The search index lives in memory, so seed it with the history
            // already in the event cache; new events are indexed as they arrive.
            this.client
                .indexCachedEvents()
                .then(() =>
                    console.log("Search index seeded from the event cache"),
                )
                .catch((e) =>
                    printRustError("Failed to seed the search index", e),
                );
        } catch (e) {
            printRustError("syncing failed", e);
            this.snapshot.merge({ clientState: ClientState.Unknown });
            return;
        }
    }

    /**
     * Dev only: `auroraClearCaches()` in the console empties the SDK's caches (every room's
     * event cache included) and reloads, so rooms load from the server again. The session
     * is kept, so there's no need to log in again.
     */
    private exposeClearCaches(): void {
        window.auroraClearCaches = async () => {
            try {
                await this.client?.clearCaches(this.syncService);
            } catch (e) {
                printRustError("Failed to clear caches", e);
                return;
            }
            // The client can't be used after clearing its caches.
            window.location.reload();
        };
        this.disposables.track(() => {
            delete window.auroraClearCaches;
        });
    }

    /**
     * Keep the user's own profile up to date, including their MSC4426 status.
     * This relies on the sliding sync profiles extension, which user status
     * support also requires, so we only do this when status is supported.
     */
    private async subscribeToOwnProfile(): Promise<void> {
        const client = this.client;
        if (!client) return;

        try {
            if (!(await client.isUserStatusSupported())) {
                console.log("User status not supported by homeserver");
                return;
            }
        } catch (e) {
            printRustError("Failed to check user status support", e);
            return;
        }
        // We may have logged out while waiting
        if (this.client !== client) return;

        const setStatusViewModel = new SetStatusViewModel({ client });
        this.disposables.track(setStatusViewModel);
        this.snapshot.merge({ setStatusViewModel });

        try {
            this.ownProfileHandle = client.subscribeToOwnProfile({
                onUpdate: (profile) => {
                    const userStatus = userStatusFromProfile(
                        profile.status,
                        profile.call,
                    );
                    setStatusViewModel.setUserStatus(userStatus);
                    this.snapshot.merge({
                        displayName: profile.displayName,
                        avatarUrl: profile.avatarUrl,
                        userStatus,
                    });
                },
            });
            this.disposables.track(() => this.ownProfileHandle?.cancel());
        } catch (e) {
            printRustError("Failed to subscribe to own profile", e);
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

        const roomViewModel = new RoomViewModel({
            room,
            client: this.client,
        });

        this.currentRoomId = roomId;

        this.snapshot.merge({
            roomViewModel,
        });

        snapshot.roomListViewModel?.setActiveRoom(roomId);
    }

    /**
     * Open a room as a user navigation: drops any forward history and
     * records the room so back/forward and the history menu can return to it.
     */
    public openRoom(roomId: string): void {
        if (roomId === "" || roomId === this.currentRoomId) return;

        this.roomHistory = this.roomHistory.slice(0, this.roomHistoryIndex + 1);
        this.roomHistory.push(roomId);
        this.roomHistoryIndex = this.roomHistory.length - 1;

        this.setCurrentRoom(roomId);
        this.updateNavigationState();
    }

    public goBack(): void {
        if (this.roomHistoryIndex <= 0) return;
        this.roomHistoryIndex--;
        this.setCurrentRoom(this.roomHistory[this.roomHistoryIndex]);
        this.updateNavigationState();
    }

    public goForward(): void {
        if (this.roomHistoryIndex >= this.roomHistory.length - 1) return;
        this.roomHistoryIndex++;
        this.setCurrentRoom(this.roomHistory[this.roomHistoryIndex]);
        this.updateNavigationState();
    }

    private updateNavigationState(): void {
        // Most recently viewed first, each room once.
        const recentIds = Array.from(new Set([...this.roomHistory].reverse()));
        this.snapshot.merge({
            canGoBack: this.roomHistoryIndex > 0,
            canGoForward: this.roomHistoryIndex < this.roomHistory.length - 1,
            recentRooms: recentIds
                .map((id) => this.roomHistoryEntries.get(id))
                .filter((entry) => entry !== undefined),
        });
        // Fill in names and avatars for rooms we haven't resolved yet.
        for (const id of recentIds) {
            if (!this.roomHistoryEntries.has(id)) this.resolveHistoryEntry(id);
        }
    }

    private async resolveHistoryEntry(roomId: string): Promise<void> {
        try {
            const client = this.client;
            const room = client?.getRoom(roomId);
            if (!client || !room) return;
            const info = await room.roomInfo();
            this.roomHistoryEntries.set(roomId, {
                roomId,
                name: info.displayName?.trim() || roomId,
                address: info.canonicalAlias ?? roomId,
                avatarUrl: info.avatarUrl
                    ? mxcToUrl(client, info.avatarUrl)
                    : undefined,
            });
            this.updateNavigationState();
        } catch (e) {
            printRustError(`Failed to load room ${roomId} for history`, e);
        }
    }
}
