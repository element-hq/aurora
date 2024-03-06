import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import TimelineStore from "./TimelineStore.tsx";

const timeline = new TimelineStore();
timeline.run();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App timeline={timeline}/>
  </React.StrictMode>,
);
