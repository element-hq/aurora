/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/
import "./MemberTileView.css";

import React, { type JSX } from "react";
import { RoomMemberRole } from "../../../generated/matrix_sdk";

interface Props {
    avatarJsx: JSX.Element;
    nameJsx: JSX.Element | string;
    onClick: () => void;
    title?: string;
    userLabel: string;
    iconJsx?: JSX.Element;
    role: RoomMemberRole;
}

export function MemberTileView(props: Props): JSX.Element {
    const userRoleLabel = getUserRole(props.role);

    return (
        <div
            className="mx_MemberTileView"
            title={props.title}
            onClick={props.onClick}
        >
            <div className="mx_MemberTileView_left">
                <div className="mx_MemberTileView_avatar">
                    {props.avatarJsx}
                </div>
                <div className="mx_MemberTileView_name">{props.nameJsx}</div>
            </div>
            {userRoleLabel && (
                <div className="mx_MemberTileView_right">{userRoleLabel}</div>
            )}
        </div>
    );
}

function getUserRole(role: RoomMemberRole): string | null {
    switch (role) {
        case RoomMemberRole.Administrator:
            return "Admin";
        case RoomMemberRole.Moderator:
            return "Moderator";
        default:
            return null;
    }
}
