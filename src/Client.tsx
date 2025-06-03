import type React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import type ClientStore from "./ClientStore.tsx";
import { RoomListHeaderView } from "./RoomListHeaderView";
import { RoomListFiltersView } from "./RoomListFiltersView";
import type RoomListStore from "./RoomListStore.tsx";
import { RoomListView } from "./RoomListView";
import type TimelineStore from "./TimelineStore.tsx";
import { Timeline } from "./Timeline.tsx";
import { SidePanelView } from "./SidePanelView.tsx";
import { Composer } from "./Composer.tsx";

console.log("running App.tsx");

interface ClientProps {
    clientStore: ClientStore;
}

export const Client: React.FC<ClientProps> = ({ clientStore }) => {
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
                <nav className="mx_SidePanel">
                    <SidePanelView/>
                </nav>
                <nav className="mx_RoomList">
                    {roomListStore ? (
                        <>
                            <RoomListHeaderView />
                            <RoomListFiltersView store={roomListStore} />
                            <RoomListView
                                vm={roomListStore}
                                currentRoomId={currentRoomId}
                                onRoomSelected={(roomId) => {
                                    setCurrentRoomId(roomId);
                                }}
                            />
                        </>
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
