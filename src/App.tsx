import type React from "react";
import { type ReactNode, useEffect, useState } from "react";
import "./App.css";
import {
    type I18nApi,
    I18nContext,
    useViewModel,
} from "@element-hq/web-shared-components";
import { TooltipProvider } from "@vector-im/compound-web";
import { Client } from "./Client.tsx";
import { useClientStoreContext } from "./context/ClientStoreContext";
import { useClientStoresContext } from "./context/ClientStoresContext";
import { useSessionStoreContext } from "./context/SessionStoreContext";
import { Encryption } from "./Encryption.tsx";
import { LoadingScreen } from "./LoadingScreen/LoadingScreen.tsx";
import { Login } from "./Login.tsx";
import { OidcCallback } from "./OidcCallback.tsx";
import { createI18nApi } from "./utils/i18nApi.ts";
import { ClientViewModel } from "./viewmodel/ClientViewModel";
import { ClientState } from "./viewmodel/client-view.types";

console.log("running App.tsx");

const App: React.FC = () => {
    const [clientViewModel, setClientViewModel] = useClientStoreContext();
    const [, addClientStore] = useClientStoresContext();
    const sessionStore = useSessionStoreContext();
    const i18nApi = useI18nApi();

    // Check if we're on the OIDC callback route
    const isOidcCallback = window.location.pathname === "/oidc/callback";

    // If this is the OIDC callback, render the callback handler
    if (isOidcCallback) {
        return <OidcCallback />;
    }

    const { clientState, loginFlowViewModel, encryptionFlowViewModel } =
        useViewModel(clientViewModel);
    console.log("App rendering with clientState:", clientState);

    let component: ReactNode;
    if (
        clientState === ClientState.Unknown ||
        clientState === ClientState.LoadingSession
    ) {
        component = (
            <LoadingScreen>
                <h2>Loading Session...</h2>
            </LoadingScreen>
        );
    } else if (clientState === ClientState.SettingUpEncryption) {
        component = encryptionFlowViewModel ? (
            <Encryption encryptionFlowViewModel={encryptionFlowViewModel} />
        ) : null;
    } else if (clientState === ClientState.Syncing) {
        component = (
            <Client
                onAddAccount={() => {
                    console.log(
                        "Add Account clicked - creating new ClientViewModel",
                    );
                    const newClientViewModel = new ClientViewModel({
                        sessionStore,
                        onLogin: addClientStore,
                    });
                    console.log("Setting new ClientViewModel as active");
                    setClientViewModel(newClientViewModel);
                    console.log(
                        "Calling tryLoadSession (should transition to LoggedOut)",
                    );
                    newClientViewModel.tryLoadSession();
                }}
            />
        );
    } else if (
        clientState === ClientState.LoggedOut ||
        clientState === ClientState.LoggingIn
    ) {
        component = loginFlowViewModel ? (
            <Login loginFlowViewModel={loginFlowViewModel} />
        ) : null;
    }

    if (!i18nApi) {
        return (
            <div className="mx_App">
                <LoadingScreen>Loading translations</LoadingScreen>
            </div>
        );
    }
    return (
        <div className="mx_App">
            <I18nContext.Provider value={i18nApi}>
                <TooltipProvider>{component}</TooltipProvider>
            </I18nContext.Provider>
        </div>
    );
};

export default App;

/**
 * A  hook that initializes and provides an I18n API instance.
 * @returns
 */
function useI18nApi(): I18nApi | undefined {
    const [i18nApi, setI18nApi] = useState<I18nApi>();

    useEffect(() => {
        createI18nApi().then((api) => setI18nApi(api));
    }, []);

    return i18nApi;
}
