import type React from "react";
import { useEffect, useState, useSyncExternalStore } from "react";
import "./App.css";
import { Avatar, Form, Glass, TooltipProvider } from "@vector-im/compound-web";
import type ClientStore from "./ClientStore.tsx";
import { ClientState } from "./ClientStore.tsx";
import type RoomListStore from "./RoomListStore.tsx";
import { RoomListEntry, type RoomListItem } from "./RoomListStore.tsx";
import { RoomListView } from "./RoomListView";
import type TimelineStore from "./TimelineStore.tsx";

console.log("running App.tsx");

interface ComposerProps {
	timelineStore: TimelineStore;
}

const Composer: React.FC<ComposerProps> = ({ timelineStore }) => {
	const [composer, setComposer] = useState("");

	return (
		<div className="mx_Composer">
			<textarea
				id="mx_Composer_textarea"
				placeholder="Send a message"
				rows={1}
				value={composer}
				onChange={(e) => setComposer(e.currentTarget.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter" && composer) {
						timelineStore.sendMessage(composer);
						setComposer("");
					}
				}}
			></textarea>
			<button
				id="mx_Composer_send"
				onClick={() => {
					if (composer) {
						timelineStore.sendMessage(composer);
						setComposer("");
					}
				}}
			>
				Send
			</button>
		</div>
	);
};

interface ClientProps {
	clientStore: ClientStore;
}

const Client: React.FC<ClientProps> = ({ clientStore }) => {
	const [currentRoomId, setCurrentRoomId] = useState("");

	const [roomListStore, setRoomListStore] = useState<RoomListStore>();
	const [timelineStore, setTimelineStore] = useState<TimelineStore>();

	useEffect(() => {
		// is this the right place to get SDK to subscribe? or should it be done in the store before passing it here somehow?
		// the double-start in strict mode is pretty horrible
		(async () => {
			// console.log("trying to get tls for ", currentRoomId);
			const rls = await clientStore.getRoomListStore();
			const tls = await clientStore.getTimelineStore(currentRoomId);
			// console.log("got tls for ", currentRoomId, tls);

			if (rls && rls !== roomListStore) {
				console.log("(re)running roomListStore");
				rls.run();
			}
			if (tls && tls !== timelineStore) {
				console.log("(re)running timelineStore");
				tls.run();
			}

			setRoomListStore(rls);
			setTimelineStore(tls);
		})();
	});
	return (
		<>
			<header className="mx_Header"> </header>
			<section className="mx_Client">
				<nav className="mx_RoomList">
					{roomListStore ? (
						<RoomListView
							vm={roomListStore}
							currentRoomId={currentRoomId}
							onRoomSelected={(roomId) => {
								setCurrentRoomId(roomId);
							}}
						/>
					) : null}
				</nav>
				{timelineStore ? (
					<main className="mx_MainPanel">
						<Timeline timelineStore={timelineStore} />
						<Composer timelineStore={timelineStore} />
					</main>
				) : null}
			</section>
		</>
	);
};

interface LoginProps {
	clientStore: ClientStore;
}

const Login: React.FC<LoginProps> = ({ clientStore }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [server, setServer] = useState("matrix.org");

	return (
		<div className="mx_LoginPage">
			<div className="mx_Login">
				<Glass>
					<div className="mx_Login_dialog">
						<TooltipProvider>
							<Form.Root
								style={{ padding: "var(--cpd-space-5x)" }}
								onSubmit={(e) => {
									e.preventDefault();
									clientStore.login({
										username,
										password,
										server: `https://${server}`,
									});
								}}
							>
								<Form.Field name="username">
									<Form.Label>Username</Form.Label>
									<Form.TextControl
										value={username}
										onChange={(e) => setUsername(e.target.value)}
									/>
								</Form.Field>

								<Form.Field name="password">
									<Form.Label>Password</Form.Label>
									<Form.PasswordControl
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</Form.Field>

								<Form.Field name="server">
									<Form.Label>Server</Form.Label>
									<Form.TextControl
										value={server}
										onChange={(e) => setServer(e.target.value)}
									/>
								</Form.Field>

								<Form.Submit disabled={!username || !password || !server}>
									Login
								</Form.Submit>
							</Form.Root>
						</TooltipProvider>
					</div>
				</Glass>
			</div>
		</div>
	);
};

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
