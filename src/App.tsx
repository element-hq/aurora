import React, { Key, useEffect, useSyncExternalStore } from "react";
import "./App.css";
import TimelineStore from "./TimelineStore.tsx";
import RoomListStore from "./RoomListStore.tsx";
import ClientStore from "./ClientStore.tsx";
import { cli } from "@tauri-apps/api";

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

interface TimelineProps {
    timeline: TimelineStore;
}

const Timeline: React.FC<TimelineProps> = ( { timeline } ) => {
    const items = useSyncExternalStore(timeline.subscribe, timeline.getSnapshot);

    return (
        <ol>
            { items.map(i => <li key={ i.internal_id } value={ i.internal_id }><EventTile item={i}/></li>) }
        </ol>
    );
}

interface RoomTileProp {
    room: any;
}

const RoomTile: React.FC<RoomTileProp> = ({ room }) => {
    return (
        <div className="mx_RoomTile">
            { JSON.stringify(room) }
        </div>
    );
}

interface RoomListProps {
    roomList: RoomListStore;
}

const RoomList: React.FC<RoomListProps> = ( { roomList } ) => {
    const rooms = useSyncExternalStore(roomList.subscribe, roomList.getSnapshot);

    return (
        <ol start={ 0 }>
            { rooms.map(r => <li key={ Object.values(r)[0] as Key }><RoomTile room={r}/></li>) }
        </ol>
    );
}

interface AppProps {
    clientStore: ClientStore;
}

const App: React.FC<AppProps> = ( { clientStore } ) => {
    const roomListStore = clientStore.getRoomListStore();
    const timelineStore = clientStore.getTimelineStore("!QQpfJfZvqxbCfeDgCj:matrix.org");

    useEffect(()=>{ 
        // is this the right place to get SDK to subscribe? or should it be done in the store before passing it here somehow?
        console.log("(re)running roomListStore");
        clientStore.getRoomListStore().run();
        console.log("(re)running timelineStore");
        timelineStore.run();
    });
    return (
        <div className="mx_App">
            <nav className="mx_RoomList">
                <RoomList roomList={ roomListStore }/>
            </nav>
            <main className="mx_Timeline">
                <Timeline timeline={ timelineStore }/>
            </main>
        </div>
    );
}

export default App;
