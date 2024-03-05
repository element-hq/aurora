import { useEffect } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {

    useEffect(() => {

        (async () => {
            await invoke("login", {
                params: {
                    homeserver: "https://matrix.org",
                    user_name: "matthewtest",
                    password: "",
                }
            });

            const timeline_items = await invoke("subscribe_timeline", {
                roomId: "!QQpfJfZvqxbCfeDgCj:matrix.org",
            });

            console.log(timeline_items);
        })();

    }, []);

    return (
        <div className="container">
            <h1>aurora</h1>
        </div>
    );
}

export default App;
