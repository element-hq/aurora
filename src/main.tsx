import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import ClientStore from "./ClientStore.tsx";
import { uniffiInitAsync } from "./index.web.ts";

await uniffiInitAsync();
const clientStore = new ClientStore();
clientStore.tryLoadSession();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App clientStore={clientStore} />
    </React.StrictMode>,
);
