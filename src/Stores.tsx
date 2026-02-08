/*
 *
 *  * Copyright 2025 New Vector Ltd.
 *  *
 *  * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 *  * Please see LICENSE files in the repository root for full details.
 *
 */

import { omit } from "lodash-es";
import {
    type PropsWithChildren,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import { SessionStore } from "./SessionStore";
import { ClientStoreContext } from "./context/ClientStoreContext";
import {
    type ClientStores,
    ClientStoresContext,
} from "./context/ClientStoresContext";
import { SessionStoreContext } from "./context/SessionStoreContext";
import { ClientViewModel } from "./ClientViewModel";

export function Stores({ children }: PropsWithChildren) {
    const [clientStores, setClientStores] = useState<ClientStores>({});

    const [activeClientViewModel, setActiveClientViewModel] =
        useState<ClientViewModel>();
    const sessionStore = useMemo(() => new SessionStore(), []);
    const loadInitiated = useRef(false);

    const addClientStore = useCallback(
        (userId: string, viewModel: ClientViewModel) => {
            setClientStores((prev) => ({ ...prev, [userId]: viewModel }));
        },
        [],
    );

    useEffect(() => {
        // Guard against duplicate calls in strict mode
        if (loadInitiated.current) {
            console.log(
                "[Stores] Load already initiated, skipping duplicate call",
            );
            return;
        }

        loadInitiated.current = true;
        console.log("[Stores] Starting load...");

        const load = async () => {
            const sessions = await sessionStore.load();

            if (!sessions || Object.keys(sessions).length === 0) {
                const viewModel = new ClientViewModel({
                    sessionStore,
                    onLogin: addClientStore,
                });
                await viewModel.tryLoadSession();
                setActiveClientViewModel(viewModel);
                return;
            }

            const stores: ClientStores = {};
            for (const sessionData of Object.values(sessions)) {
                const viewModel = new ClientViewModel({
                    sessionStore,
                    userIdForLoading: sessionData.session.userId,
                    onLogin: addClientStore,
                });
                await viewModel.tryLoadSession();
                stores[sessionData.session.userId] = viewModel;
            }

            console.log("Loaded stores", stores);

            setClientStores(stores);
            setActiveClientViewModel(stores[Object.keys(stores)[0]]); // Select the first store as active
        };

        load();
    }, [sessionStore, addClientStore]);

    const removeClientStore = useCallback((userId: string) => {
        setClientStores((prev) => omit(prev, userId));
    }, []);

    if (!activeClientViewModel) return;

    return (
        <SessionStoreContext.Provider value={sessionStore}>
            <ClientStoresContext.Provider
                value={[clientStores, addClientStore, removeClientStore]}
            >
                <ClientStoreContext.Provider
                    value={[activeClientViewModel, setActiveClientViewModel]}
                >
                    {children}
                </ClientStoreContext.Provider>
            </ClientStoresContext.Provider>
        </SessionStoreContext.Provider>
    );
}
