/*
 *
 *  * Copyright 2025 New Vector Ltd.
 *  *
 *  * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 *  * Please see LICENSE files in the repository root for full details.
 *
 */

/**
 * Username and password credentials for password-based login
 */
export interface UsernamePasswordCredential {
    type: "password";
    username: string;
    password: string;
}

/**
 * OIDC callback URL credential for OIDC-based login
 */
export interface OidcCredential {
    type: "oidc";
    callbackUrl: string;
}

/**
 * Union type representing all possible login credential types
 */
export type Credential = UsernamePasswordCredential | OidcCredential;
