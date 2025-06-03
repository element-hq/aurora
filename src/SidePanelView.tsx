/*
 * Copyright 2025 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import "./SidePanelView.css";
import React, { type JSX, useEffect, useState } from "react";

import ChatIcon from "@vector-im/compound-design-tokens/assets/web/icons/chat";
import LeaveIcon from "@vector-im/compound-design-tokens/assets/web/icons/leave";
import SettingsIcon from "@vector-im/compound-design-tokens/assets/web/icons/settings";
import type ClientStore from "./ClientStore.tsx";
import BaseAvatar from "./MemberList/BaseAvatar";

type SidePanelViewProps = {
    clientStore: ClientStore;
};

function onSpaceClick() {
    // TODO
}

function onSettingsClick() {
    // TODO
}

function mxcToUrl(mxcUrl: string): string {
    return `${mxcUrl.replace(
        /^mxc:\/\//,
        "https://matrix.org/_matrix/media/v3/thumbnail/",
    )}?width=48&height=48`;
}

export function SidePanelView({
    clientStore,
}: SidePanelViewProps): JSX.Element {
    const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

    useEffect(() => {
        clientStore.client?.avatarUrl()?.then((avatarUrl) => {
            avatarUrl ? setAvatarUrl(mxcToUrl(avatarUrl)) : setAvatarUrl(null);
        });
    }, [clientStore]);

    return (
        <>
            <BaseAvatar
                className="mx_SidePanel_avatar"
                size="32px"
                name={clientStore.client?.userId()}
                idName={clientStore.client?.userId()}
                title={clientStore.client?.userId()}
                url={avatarUrl}
                altText={"User"}
            />
            <button
                className="mx_SidePanel_icon mx_SidePanel_icon_selected"
                onClick={() => onSpaceClick()}
                type="button"
            >
                <ChatIcon fill="var(--cpd-color-icon-primary)" />
            </button>
            <div className="mx_SidePanel_bottom">
                <button
                    className="mx_SidePanel_icon"
                    onClick={() => onSettingsClick()}
                    type="button"
                >
                    <SettingsIcon fill="var(--cpd-color-icon-primary)" />
                </button>
                <button
                    className="mx_SidePanel_icon"
                    onClick={() => clientStore.logout()}
                    type="button"
                >
                    <LeaveIcon fill="var(--cpd-color-icon-critical-primary)" />
                </button>
            </div>
        </>
    );
}
