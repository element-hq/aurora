/*
 * Copyright 2025 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import "./SidePanelView.css";
import { type JSX, useCallback, useSyncExternalStore } from "react";

import ChatIcon from "@vector-im/compound-design-tokens/assets/web/icons/chat";
import SettingsIcon from "@vector-im/compound-design-tokens/assets/web/icons/settings";

type SidePanelViewProps = {
};

function onSpaceClick() {
    // TODO
}

function onSettingsClick() {
    // TODO
}

export function SidePanelView({
}: SidePanelViewProps): JSX.Element {
    return (
        <>
            <button className="mx_SidePanel_avatar"></button>
            <button className="mx_SidePanel_icon mx_SidePanel_icon_selected" onClick={() => onSpaceClick()}>
                <ChatIcon
                    fill="var(--cpd-color-icon-primary)"
                />
            </button>
            <div className="mx_SidePanel_bottom">
                <button className="mx_SidePanel_icon" onClick={() => onSettingsClick()}>
                    <SettingsIcon
                        fill="var(--cpd-color-icon-primary)"
                    />
                </button>
            </div>
        </>
    );
}
