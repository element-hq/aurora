import type React from "react";
import { type ReactNode, useSyncExternalStore } from "react";
import "./App.css";
import type ClientStore from "./ClientStore.tsx";
import { ClientState } from "./ClientStore.tsx";
import { Login } from "./Login.tsx";
import { Client } from "./Client.tsx";
import { InlineSpinner } from "@vector-im/compound-web";

console.log("running App.tsx");

interface AppProps {
    clientStore: ClientStore;
}

export const App: React.FC<AppProps> = ({ clientStore }) => {
    const clientState = useSyncExternalStore(
        clientStore.subscribe,
        clientStore.getSnapshot,
    );

    let component: ReactNode;
    if (
        clientState === ClientState.Unknown ||
        clientState === ClientState.LoadingSession
    ) {
        component = (
            <div className="mx_LoadingSession">
                <InlineSpinner size={32} />
                <h2>Loading Session...</h2>
            </div>
        );
    } else if (clientState === ClientState.LoggedIn) {
        component = <Client clientStore={clientStore} />;
    } else if (
        clientState === ClientState.LoggedOut ||
        clientState === ClientState.LoggingIn
    ) {
        component = (
            <Login
                clientStore={clientStore}
                loggingIn={clientState === ClientState.LoggingIn}
            />
        );
    }

    return <div className="mx_App cpd-theme-dark">{component}</div>;
};

export default App;
