import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import { invoke } from "@tauri-apps/api/tauri";

console.log("creating App");

(async () => {
    console.log("starting sdk...");
    await invoke("login", {
        params: {
            homeserver: "https://matrix.org",
            user_name: "matthewtest",
            password: "",
        }
    });

    console.log("subscribing to timeline...");
    const timeline_items = await invoke("subscribe_timeline", {
        roomId: "!QQpfJfZvqxbCfeDgCj:matrix.org",
    });

    console.log("timeline_items", timeline_items);

    const timeline_diffs = await invoke("get_timeline_update");
    console.log("timeline_diffs", timeline_diffs);
})();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
