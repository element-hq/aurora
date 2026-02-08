/*
 *
 *  * Copyright 2025 New Vector Ltd.
 *  *
 *  * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 *  * Please see LICENSE files in the repository root for full details.
 *
 */

import { createContext, useContext } from "react";
import type { ClientViewModel } from "../ClientViewModel";

/**
 * A mapping of user IDs to their respective ClientViewModel instances.
 */
export type ClientStores = Record<string, ClientViewModel>;
type ContextType = [
    ClientStores,
    // To add a new ClientViewModel
    (userId: string, store: ClientViewModel) => void,
    // To remove a ClientViewModel
    (userId: string) => void,
];

export const ClientStoresContext = createContext<ContextType>(
    null as unknown as ContextType,
);
ClientStoresContext.displayName = "ClientStoresContext";

export function useClientStoresContext(): ContextType {
    return useContext(ClientStoresContext);
}
