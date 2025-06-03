import { Form, Glass, TooltipProvider } from "@vector-im/compound-web";
import type React from "react";
import { useState } from "react";
import ClientStore from "./ClientStore";


export interface LoginProps {
    clientStore: ClientStore;
}


export const Login: React.FC<LoginProps> = ({ clientStore }) => {
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
                                        onChange={(e) => setUsername(e.target.value)} />
                                </Form.Field>

                                <Form.Field name="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.PasswordControl
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                </Form.Field>

                                <Form.Field name="server">
                                    <Form.Label>Server</Form.Label>
                                    <Form.TextControl
                                        value={server}
                                        onChange={(e) => setServer(e.target.value)} />
                                </Form.Field>

                                <Form.Submit
                                    disabled={!username || !password || !server}
                                >
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
