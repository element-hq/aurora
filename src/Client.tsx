import type React from "react";
import "./App.css";
import { useViewModel } from "@element-hq/web-shared-components";
import { useClientStoreContext } from "./context/ClientStoreContext";
import { RoomListHeader, RoomListSearch, RoomListView } from "./RoomList";
import { RoomView } from "./RoomView";
import { SidePanelView } from "./SidePanelView.tsx";
import { SplashView } from "./SplashView.tsx";

console.log("running Client.tsx");

interface ClientProps {
    onAddAccount: () => void;
}

export const Client: React.FC<ClientProps> = ({ onAddAccount }) => {
    const [clientViewModel] = useClientStoreContext();
    const { roomListViewModel, roomViewModel } = useViewModel(clientViewModel);

    // Room list view model must be available to render
    if (!roomListViewModel) return null;

    return (
        <>
            <header className="mx_Header"> </header>
            <section className="mx_Client">
                <nav className="mx_SidePanel">
                    <SidePanelView
                        clientStore={clientViewModel}
                        onAddAccount={onAddAccount}
                    />
                </nav>
                <nav className="mx_RoomList">
                    <RoomListSearch />
                    <RoomListHeader />
                    <RoomListView vm={roomListViewModel} />
                </nav>
                {roomViewModel ? (
                    <RoomView roomViewModel={roomViewModel} />
                ) : (
                    <SplashView />
                )}
            </section>
        </>
    );
};
