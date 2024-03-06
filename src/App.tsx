import React, { useSyncExternalStore } from "react";
import "./App.css";
import TimelineStore from "./TimelineStore.tsx";

console.log("running App.tsx");

interface EventTileProp {
    item: any;
}

function mxcToUrl(mxcUrl: string): string {
    return mxcUrl.replace(/^mxc:\/\//, "https://matrix.org/_matrix/media/v3/thumbnail/") + 
        "?width=48&height=48";
}

const EventTile: React.FC<EventTileProp> = ({ item }) => {
    switch (Object.keys(item.kind)[0]) {
        case "Virtual":
            if (item.kind.Virtual.DayDivider) {
                return (
                    <div className="mx_EventTile">
                        --- { new Date(item.kind.Virtual.DayDivider).toDateString() } ---
                    </div>
                );
            }
            return `Unknown virtual event ${Object.keys(item.kind.Virtual)[0]}`
        case "Event":
            const event = item.kind.Event;
            return (
                <div className="mx_EventTile">
                    <span className="mx_Timestamp">{ new Date(event.timestamp).toLocaleTimeString() }</span>
                    <span className="mx_Avatar">{
                        event.sender_profile.Ready && event.sender_profile.Ready.avatar_url ? <img src={ mxcToUrl(event.sender_profile.Ready.avatar_url) }/> : null 
                    }</span>
                    <span className="mx_Sender">{
                        event.sender_profile.Ready ?
                        event.sender_profile.Ready.display_name :
                        event.sender
                    }</span>
                    <span className="mx_Content">{
                        event.content.Message ?
                        event.content.Message.msgtype.body :
                        `Unknown event type ${Object.keys(event.content)[0]}`
                    }</span>
                </div>
            );
    }
}

interface AppProps {
    timeline: TimelineStore;
}

const App: React.FC<AppProps> = ( { timeline } ) => {
    const items = useSyncExternalStore(timeline.subscribe, timeline.getSnapshot);

    return (
        <ol>
            { items.map(i=><li key={ i.internal_id } value={ i.internal_id }><EventTile item={i}/></li>) }
        </ol>
    );
}

export default App;
