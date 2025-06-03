import type React from "react";
import {
	useSyncExternalStore,
} from "react";
import "./App.css";
import type ClientStore from "./ClientStore.tsx";
import { ClientState } from "./ClientStore.tsx";
import { Login } from "./Login.tsx";
import { Client } from "./Client.tsx";

console.log("running App.tsx");

interface AppProps {
	clientStore: ClientStore;
}

export const App: React.FC<AppProps> = ({ clientStore }) => {
	const clientState = useSyncExternalStore(
		clientStore.subscribe,
		clientStore.getSnapshot,
	);

	return (
		<div className="mx_App cpd-theme-dark">
			{clientState == ClientState.Unknown ? null : clientState ==
				ClientState.LoggedIn ? (
				<Client clientStore={clientStore} />
			) : (
				<Login clientStore={clientStore} />
			)}
		</div>
	);
};

export default App;
