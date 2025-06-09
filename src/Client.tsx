import type React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import type ClientStore from "./ClientStore.tsx";
import { Composer } from "./Composer.tsx";
import type { MemberListStore } from "./MemberList/MemberListStore.tsx";
import MemberListView from "./MemberList/MemberListView.tsx";
import { RoomHeaderView } from "./RoomHeaderView";
import { RoomListFiltersView } from "./RoomListFiltersView";
import { RoomListHeaderView } from "./RoomListHeaderView";
import type RoomListStore from "./RoomListStore.tsx";
import { RoomListView } from "./RoomListView";
import { RoomSearchView } from "./RoomSearchView";
import { SidePanelView } from "./SidePanelView.tsx";
import { SplashView } from "./SplashView.tsx";
import { Timeline } from "./Timeline.tsx";
import type TimelineStore from "./TimelineStore.tsx";

console.log("running Client.tsx");

interface ClientProps {
    clientStore: ClientStore;
}

export const Client: React.FC<ClientProps> = ({ clientStore }) => {
    const [currentRoomId, setCurrentRoomId] = useState("");

    const rls = clientStore.getRoomListStore();
    useEffect(() => {
        rls.setActiveRoom(currentRoomId);
    }, [rls, currentRoomId]);

    const tls = currentRoomId
        ? clientStore.getTimelineStore(currentRoomId)
        : undefined;
    const mls = currentRoomId
        ? clientStore.getMemberListStore(currentRoomId)
        : undefined;
    console.log(
        `rls: ${rls}, tls: ${tls}, mls: ${mls}, currentRoomId: ${currentRoomId}`,
    );
    return (
        <>
            <header className="mx_Header"> </header>
            <section className="mx_Client">
                <nav className="mx_SidePanel">
                    <SidePanelView clientStore={clientStore} />
                </nav>
                <nav className="mx_RoomList">
                    <RoomSearchView />
                    {
                        <>
                            <RoomListHeaderView />
                            <RoomListFiltersView store={rls} />
                            <RoomListView
                                vm={rls}
                                currentRoomId={currentRoomId}
                                onRoomSelected={(roomId) => {
                                    setCurrentRoomId(roomId);
                                }}
                            />
                        </>
                    }
                </nav>
                {tls && mls ? (
                    <>
                        <main className="mx_MainPanel">
                            <RoomHeaderView
                                roomListStore={rls}
                                currentRoomId={currentRoomId}
                            />
                            <Timeline
                                timelineStore={tls}
                                currentRoomId={currentRoomId}
                            />
                            <Composer timelineStore={tls} />
                        </main>
                        <MemberListView vm={mls} />
                    </>
                ) : (
                    <SplashView />
                )}
            </section>
        </>
    );
};
