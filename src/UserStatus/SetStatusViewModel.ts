/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import {
    BaseViewModel,
    type SetStatusViewActions,
    type SetStatusViewSnapshot,
    type UserStatus,
} from "@element-hq/web-shared-components";
import type { ClientInterface } from "../index.web";
import { printRustError } from "../utils/printRustError";

interface Props {
    client: ClientInterface;
    userStatus?: UserStatus;
}

/**
 * View model for setting or clearing the current user's MSC4426 status.
 * Updates optimistically and rolls back if the request fails.
 */
export class SetStatusViewModel
    extends BaseViewModel<SetStatusViewSnapshot, Props>
    implements SetStatusViewActions
{
    public constructor(props: Props) {
        super(props, { userStatus: props.userStatus });
    }

    /**
     * Update the displayed status, e.g. when the own profile changes on
     * another device.
     */
    public setUserStatus(userStatus?: UserStatus): void {
        this.snapshot.merge({ userStatus });
    }

    public setStatus = (userStatus: UserStatus): void => {
        const oldStatus = this.snapshot.current.userStatus;

        this.snapshot.merge({ userStatus });
        this.props.client.setUserStatus(userStatus).catch((e) => {
            this.snapshot.merge({ userStatus: oldStatus });
            printRustError("Failed to set user status", e);
        });
    };

    public clearStatus = (): void => {
        const oldStatus = this.snapshot.current.userStatus;

        this.snapshot.merge({ userStatus: undefined });
        this.props.client.clearUserStatus().catch((e) => {
            this.snapshot.merge({ userStatus: oldStatus });
            printRustError("Failed to clear user status", e);
        });
    };
}
