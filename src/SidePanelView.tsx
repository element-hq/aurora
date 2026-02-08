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
import type { ClientViewModel } from "./ClientViewModel";
import BaseAvatar from "./MemberList/BaseAvatar";
import { UserMenu } from "./UserMenu";

type SidePanelViewProps = {
    clientStore: ClientViewModel;
    onAddAccount: () => void;
};

function onSpaceClick() {
    // TODO
}

function onSettingsClick() {
    // TODO
}

export function SidePanelView({
    clientStore,
    onAddAccount,
}: SidePanelViewProps): JSX.Element {
    return (
        <>
            <div className="mx_SidePanel_avatar">
                <UserMenu onAddAccount={onAddAccount} />
            </div>
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
