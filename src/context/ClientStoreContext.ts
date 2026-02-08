/*
 *
 *  * Copyright 2025 New Vector Ltd.
 *  *
 *  * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 *  * Please see LICENSE files in the repository root for full details.
 *
 */

import {
    type Dispatch,
    type SetStateAction,
    createContext,
    useContext,
} from "react";
import type { ClientViewModel } from "../ClientViewModel";

type ContextType = [
    ClientViewModel,
    Dispatch<SetStateAction<ClientViewModel | undefined>>,
];

export const ClientStoreContext = createContext<ContextType>(
    null as unknown as ContextType,
);
ClientStoreContext.displayName = "ClientStoreContext";

export function useClientStoreContext(): ContextType {
    return useContext(ClientStoreContext);
}
