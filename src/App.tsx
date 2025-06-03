import type React from "react";
import {
    useSyncExternalStore,
} from "react";
import "./App.css";
import type ClientStore from "./ClientStore.tsx";
import { ClientState } from "./ClientStore.tsx";
import {
    MembershipChange,
} from "./index.web.ts";
import { Login } from "./Login.tsx";
import { Client } from "./Client.tsx";

console.log("running App.tsx");

interface AppProps {
    clientStore: ClientStore;
}

export const App: React.FC<AppProps> = ({ clientStore }) => {
    const clientState = useSyncExternalStore(
        clientStore.subscribe,
        clientStore.getSnapshot,
    );

    return (
        <div className="mx_App cpd-theme-dark">
            {clientState == ClientState.Unknown ? null : clientState ==
                ClientState.LoggedIn ? (
                <Client clientStore={clientStore} />
            ) : (
                <Login clientStore={clientStore} />
            )}
        </div>
    );
};

export default App;

export function getChangeDescription(membershipChange: MembershipChange): string {
    switch (membershipChange) {
        case MembershipChange.None:
            return "did nothing";
        case MembershipChange.Error:
            return "<error>";
        case MembershipChange.Joined:
            return "joined";
        case MembershipChange.Left:
            return "left";
        case MembershipChange.Banned:
            return "was banned";
        case MembershipChange.Unbanned:
            return "was unbanned";
        case MembershipChange.Kicked:
            return "was kicked";
        case MembershipChange.Invited:
            return "was invited";
        case MembershipChange.InvitationAccepted:
            return "accepted an invite";
        case MembershipChange.InvitationRejected:
            return "rejected an invite";
        case MembershipChange.InvitationRevoked:
            return "was uninvited";
        case MembershipChange.Knocked:
            return "knocked";
        case MembershipChange.KnockAccepted:
            return "was accepted";
        case MembershipChange.KnockRetracted:
            return "stoped knocking";
        case MembershipChange.KnockDenied:
            return "was rejected";
        case MembershipChange.NotImplemented:
            return "<unimplemented>";
        default:
            return "<unknown>";
    }
}
