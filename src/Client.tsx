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

    const [roomListStore, setRoomListStore] = useState<RoomListStore>();
    const [timelineStore, setTimelineStore] = useState<TimelineStore>();
    const [memberListStore, setMemberListStore] = useState<MemberListStore>();

    useEffect(() => {
        // is this the right place to get SDK to subscribe? or should it be done in the store before passing it here somehow?
        // the double-start in strict mode is pretty horrible
        (async () => {
            // console.log("trying to get tls for ", currentRoomId);
            const rls = await clientStore.getRoomListStore();
            const tls = await clientStore.getTimelineStore(currentRoomId);
            const mls = await clientStore.getMemberListStore(currentRoomId);
            // console.log("got tls for ", currentRoomId, tls);

            if (rls && rls !== roomListStore) {
                console.log("(re)running roomListStore");
                rls.run();
            }
            if (tls && tls !== timelineStore) {
                console.log("(re)running timelineStore");
                timelineStore?.stop();
                tls.run();
            }
            if (mls && mls !== memberListStore) {
                console.log("(re)running memberListStore");
                mls.run();
            }

            setRoomListStore(rls);
            setTimelineStore(tls);
            setMemberListStore(mls);
        })();
    });

    useEffect(() => {
        roomListStore?.setActiveRoom(currentRoomId);
    }, [roomListStore, currentRoomId]);

    return (
        <>
            <header className="mx_Header"> </header>
            <section className="mx_Client">
                <nav className="mx_SidePanel">
                    <SidePanelView clientStore={clientStore} />
                </nav>
                <nav className="mx_RoomList">
                    <RoomSearchView />
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
                {timelineStore && memberListStore ? (
                    <>
                        <main className="mx_MainPanel">
                            <RoomHeaderView
                                roomListStore={roomListStore!}
                                currentRoomId={currentRoomId}
                            />
                            <Timeline
                                timelineStore={timelineStore}
                                currentRoomId={currentRoomId}
                            />
                            <Composer timelineStore={timelineStore} />
                        </main>
                        <MemberListView vm={memberListStore} />
                    </>
                ) : (
                    <SplashView />
                )}
            </section>
        </>
    );
};
