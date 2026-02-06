/*
 * Copyright (c) 2025 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import type { MemberListViewModel } from "./MemberListViewModel";
import type { SessionStore } from "../SessionStore";
import type { TimelineViewModel } from "./TimelineViewModel";
import type { ClientViewModel } from "./ClientViewModel";
import type { EncryptionViewModel } from "./EncryptionViewModel";
import type { LoginViewModel } from "./LoginViewModel";
import type { RoomListViewViewModel } from "../RoomList/RoomListViewViewModel";
import type { RoomViewModel } from "./RoomViewModel";

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

/**
 * Snapshot represents the complete state of the client view
 */
export interface ClientViewSnapshot {
    /** Current authentication state */
    clientState: ClientState;

    /** ViewModel for the current room */
    roomViewModel?: RoomViewModel;

    /** ViewModel for the login form */
    loginViewModel?: LoginViewModel;

    /** ViewModel for the list of all rooms */
    roomListViewModel?: RoomListViewViewModel;

    /** ViewModel for encryption and recovery management */
    encryptionViewModel?: EncryptionViewModel;

    /** Current user ID */
    userId?: string;

    /** Current user's display name */
    displayName?: string;

    /** Current user's avatar URL */
    avatarUrl?: string;
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
}
