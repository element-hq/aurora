/*
 * Copyright (c) 2025 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import type { UserStatus } from "@element-hq/web-shared-components";
import type { ClientViewModel } from "./ClientViewModel";
import type { EncryptionFlowViewModel } from "./CryptoSetup/EncryptionFlowViewModel";
import type { LoginFlowViewModel } from "./Login/LoginFlowViewModel";
import type { RoomViewModel } from "./Room/RoomViewModel";
import type { RoomListViewViewModel } from "./RoomList/RoomListViewViewModel";
import type { GlobalSearchViewModel } from "./Search/GlobalSearchViewModel";
import type { SessionStore } from "./SessionStore";
import type { SetStatusViewModel } from "./UserStatus/SetStatusViewModel";

export enum ClientState {
    Unknown = 0,
    LoadingSession = 1,
    LoggedOut = 2,
    LoggingIn = 3,
    SettingUpEncryption = 4,
    Syncing = 5,
}

export interface LoginParams {
    username: string;
    password: string;
    server: string;
}

/**
 * Props passed to ClientViewModel constructor
 */
export interface Props {
    sessionStore: SessionStore;
    userIdForLoading?: string;
    onLogin?: (userId: string, clientViewModel: ClientViewModel) => void;
}

/** A room the user viewed, as listed in the top bar's history menu. */
export interface RoomHistoryEntry {
    roomId: string;
    name: string;
    /** Canonical alias or room ID, shown under the name. */
    address: string;
    avatarUrl?: string;
}

/**
 * Snapshot represents the complete state of the client view
 */
export interface ClientViewSnapshot {
    /** Current authentication state */
    clientState: ClientState;

    /** ViewModel for the current room */
    roomViewModel?: RoomViewModel;

    /** ViewModel for the login flow */
    loginFlowViewModel?: LoginFlowViewModel;

    /** ViewModel for the list of all rooms */
    roomListViewModel?: RoomListViewViewModel;

    /** ViewModel for encryption and recovery management */
    encryptionFlowViewModel?: EncryptionFlowViewModel;

    /** ViewModel for the global search in the top bar, once the client is ready */
    globalSearchViewModel?: GlobalSearchViewModel;

    /** Whether there is a previously viewed room to go back to */
    canGoBack: boolean;

    /** Whether there is a room to go forward to after going back */
    canGoForward: boolean;

    /** Recently viewed rooms, most recent first */
    recentRooms: RoomHistoryEntry[];

    /** Current user ID */
    userId?: string;

    /** Current user's display name */
    displayName?: string;

    /** Current user's avatar URL */
    avatarUrl?: string;

    /** Current user's MSC4426 status */
    userStatus?: UserStatus;

    /** ViewModel for setting the user's status, if the server supports it */
    setStatusViewModel?: SetStatusViewModel;
}

/**
 * Actions that views can call on the ClientViewModel
 */
export interface ClientViewActions {
    /**
     * Login with username and password
     */
    login(params: LoginParams): Promise<void>;

    /**
     * Logout the current user
     */
    logout(): void;

    /**
     * Attempt to restore a previous session from storage
     */
    tryLoadSession(): Promise<void>;

    /**
     * Set the current room and initialize its timeline/member stores
     */
    setCurrentRoom(roomId: string): void;

    /**
     * Open a room as a user navigation, recording it in the history
     */
    openRoom(roomId: string): void;

    /**
     * Go back to the previously viewed room
     */
    goBack(): void;

    /**
     * Go forward again after going back
     */
    goForward(): void;
}
