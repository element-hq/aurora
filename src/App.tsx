import React, { Key, MouseEventHandler, ReactElement, useEffect, useState, useSyncExternalStore } from "react";
import "./App.css";
import TimelineStore, { DayDivider, EventTimelineItem, MessageContent, TimelineItem, TimelineItemKind, VirtualTimelineItem, VirtualTimelineItemType } from "./TimelineStore.tsx";
import RoomListStore, { RoomListItem}  from "./RoomListStore.tsx";
import ClientStore from "./ClientStore.tsx";
import sanitizeHtml from "sanitize-html";

console.log("running App.tsx");

interface EventTileProp {
    item: TimelineItem;
}

function mxcToUrl(mxcUrl: string): string {
    return mxcUrl.replace(/^mxc:\/\//, "https://matrix.org/_matrix/media/v3/thumbnail/") + 
        "?width=48&height=48";
}

const EventTile: React.FC<EventTileProp> = ({ item }) => {

    switch (item.kind) {
        case TimelineItemKind.Virtual:
            const virtual = item as VirtualTimelineItem;
            if (virtual.virtualItem.type === VirtualTimelineItemType.DayDivider) {
                const dayDivider = virtual.virtualItem as DayDivider;
                return (
                    <div className="mx_EventTile">
                        --- { dayDivider.getDate().toDateString() } ---
                    </div>
                );
            }
            else {
                return `Unknown virtual event ${virtual.virtualItem.type}`
            }
            break;
        case TimelineItemKind.Event:
            const event = item as EventTimelineItem;

            let body: String | ReactElement;
            if (event.getContent().type === 'Message') {
                const content = (event.getContent() as MessageContent).getContent();
                if (content.msgtype?.format === 'org.matrix.custom.html') {
                    const html = sanitizeHtml(content.msgtype?.formatted_body, {
                        transformTags: {
                            'a': sanitizeHtml.simpleTransform('a', {target: '_blank'})
                        }                         
                    });
                    body = <span dangerouslySetInnerHTML={{__html: html}}></span>;
                }
                else {
                    body = content.msgtype?.body || '';
                }
            }
            else {
                body = `Unknown event type ${event.getContent().type}`;
            }
            
            return (
                <div className="mx_EventTile">
                    <span className="mx_Timestamp">{ new Date(event.getTimestamp()).toLocaleTimeString() }</span>
                    <span className="mx_Avatar">{
                        event.getSenderProfile()?.avatar_url ? <img src={ mxcToUrl(event.getSenderProfile()?.avatar_url ?? '') }/> : null 
                    }</span>
                    <span className="mx_Sender">{
                        event.getSenderProfile()?.display_name ?
                        event.getSenderProfile()?.display_name :
                        event.getSender()
                    }</span>
                    <span className="mx_Content">{ body }</span>
                </div>
            );
        default:
            return `Unknown timeline item ${item.kind}`
    }
}

interface TimelineProps {
    timeline: TimelineStore;
}

const Timeline: React.FC<TimelineProps> = ( { timeline } ) => {
    const items = useSyncExternalStore(timeline.subscribe, timeline.getSnapshot);

    return (
        <ol>
            { items.map(i => <li key={ i.getInternalId() } value={ i.getInternalId() }><EventTile item={i}/></li>) }
        </ol>
    );
}

interface RoomTileProp {
    room: RoomListItem;
}

const RoomTile: React.FC<RoomTileProp> = ({ room }) => {
    return (
        <div className="mx_RoomTile">
            <span className="mx_Avatar">{
                room.getAvatar() ? <img src={ mxcToUrl(room.getAvatar()) } /> : null
            }</span>
            <span className="mx_RoomTile_name" title={ room.getName() }>
                { room.getName() }
            </span>
        </div>
    );
}

interface RoomListProps {
    roomList: RoomListStore;
    selectedRoomId: string;
    setRoom: (roomId: string) => void;
}

const RoomList: React.FC<RoomListProps> = ( { roomList, selectedRoomId, setRoom } ) => {
    const rooms = useSyncExternalStore(roomList.subscribe, roomList.getSnapshot);

    return (
        <ol start={ 0 }>
            { 
                rooms.map((r: RoomListItem) => {
                    return <li
                        key={ r.roomId }
                        className={ r.roomId === selectedRoomId ? 'mx_RoomTile_selected' : '' }
                        onClick={ () => setRoom(r.roomId) }>
                            <RoomTile room={r}/>
                    </li>;
                })
            }
        </ol>
    );
}

interface AppProps {
    clientStore: ClientStore;
}

const App: React.FC<AppProps> = ( { clientStore } ) => {
    const [currentRoomId, setCurrentRoomId] = useState('');

    const roomListStore = clientStore.getRoomListStore();
    const timelineStore = clientStore.getTimelineStore(currentRoomId);

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
                <RoomList
                    roomList={ roomListStore }
                    selectedRoomId={ currentRoomId }
                    setRoom={ (roomId) => { setCurrentRoomId(roomId); } }
                />
            </nav>
            { timelineStore ?
                <main className="mx_Timeline">
                    <Timeline timeline={ timelineStore }/>
                </main>
              : null
            }
        </div>
    );
}

export default App;
