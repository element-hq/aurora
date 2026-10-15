import type React from "react";
import "./App.css";
import { useViewModel } from "@element-hq/web-shared-components";
import { useClientStoreContext } from "./context/ClientStoreContext";
import { SplashView } from "./LoadingScreen/SplashView";
import { RoomView } from "./Room/RoomView";
import { RoomListHeader } from "./RoomList/RoomListHeader";
import { RoomListView } from "./RoomList/RoomListView";
import { GlobalSearchFullView } from "./Search/GlobalSearchFullView";
import { SidePanelView } from "./SidePanelView.tsx";
import { TopBar } from "./TopBar/TopBar";

console.log("running Client.tsx");

interface ClientProps {
    onAddAccount: () => void;
}

export const Client: React.FC<ClientProps> = ({ onAddAccount }) => {
    const [clientViewModel] = useClientStoreContext();
    const { roomListViewModel, roomViewModel, globalSearchViewModel } =
        useViewModel(clientViewModel);

    // Room list view model must be available to render
    if (!roomListViewModel) return null;

    return (
        <>
            <header className="mx_Header"> </header>
            <TopBar
                clientViewModel={clientViewModel}
                onAddAccount={onAddAccount}
            />
            <section className="mx_Client">
                <nav className="mx_SidePanel">
                    <SidePanelView clientStore={clientViewModel} />
                </nav>
                <nav className="mx_RoomList">
                    <RoomListHeader roomList={roomListViewModel} />
                    <RoomListView vm={roomListViewModel} />
                </nav>
                {roomViewModel ? (
                    <RoomView roomViewModel={roomViewModel} />
                ) : (
                    <SplashView />
                )}
                {globalSearchViewModel && (
                    <GlobalSearchFullView vm={globalSearchViewModel} />
                )}
            </section>
        </>
    );
};
