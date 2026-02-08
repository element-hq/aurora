/*
 * Copyright 2025 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import PlusIcon from "@vector-im/compound-design-tokens/assets/web/icons/plus";
import PopOutIcon from "@vector-im/compound-design-tokens/assets/web/icons/pop-out";
import SignOutIcon from "@vector-im/compound-design-tokens/assets/web/icons/sign-out";

import React, {
    type JSX,
    type MouseEventHandler,
    useEffect,
    useState,
} from "react";
import { useViewModel } from "@element-hq/web-shared-components";
import BaseAvatar from "./MemberList/BaseAvatar";
import { useClientStoreContext } from "./context/ClientStoreContext";

import { Button, Menu, Separator } from "@vector-im/compound-web";
import styles from "./UserMenu.module.css";
import { useClientStoresContext } from "./context/ClientStoresContext";
import type { ClientViewModel } from "./ClientViewModel";

function mxcToUrl(mxcUrl: string): string {
    return `${mxcUrl.replace(
        /^mxc:\/\//,
        "https://matrix.org/_matrix/media/v3/thumbnail/",
    )}?width=48&height=48`;
}

interface UserMenuProps {
    onAddAccount: () => void;
}

export function UserMenu({ onAddAccount }: UserMenuProps): JSX.Element {
    const [clientStores, , removeClientStore] = useClientStoresContext();
    const [clientViewModel, setClientViewModel] = useClientStoreContext();
    const { userId, displayName, avatarUrl } = useViewModel(clientViewModel);
    const [open, setOpen] = useState(false);

    const hasMultipleAccounts = Object.keys(clientStores).length > 1;
    const otherAccounts = Object.keys(clientStores).filter(
        (id) => id !== userId,
    );

    return (
        <Menu
            title="user menu"
            showTitle={false}
            open={open}
            onOpenChange={setOpen}
            trigger={
                <button
                    type="button"
                    className={styles.button}
                    onClick={() => setOpen((isOpen) => !isOpen)}
                >
                    <BaseAvatar
                        size="32px"
                        name={userId}
                        idName={userId}
                        title={userId}
                        url={avatarUrl ? mxcToUrl(avatarUrl) : undefined}
                        altText={"User"}
                    />
                </button>
            }
        >
            <div className={styles.content}>
                <div className={styles.top}>
                    <BaseAvatar
                        size="88px"
                        name={userId}
                        idName={userId}
                        title={userId}
                        url={avatarUrl ? mxcToUrl(avatarUrl) : undefined}
                        altText={"User"}
                    />
                    <div className={styles.names}>
                        <div>
                            <span className={styles.displayName}>
                                {displayName}
                            </span>
                        </div>
                        <div>
                            <span className={styles.userId}>{userId}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.actions}>
                    <Button size="sm" Icon={PopOutIcon} kind="tertiary">
                        Manage
                    </Button>
                    <Button
                        size="sm"
                        destructive={true}
                        Icon={SignOutIcon}
                        kind="tertiary"
                        onClick={() => {
                            if (userId) {
                                removeClientStore(userId);
                            }

                            // change to another account if there is one
                            if (hasMultipleAccounts) {
                                const firstAccount = otherAccounts[0];
                                setClientViewModel(clientStores[firstAccount]);
                            }
                            clientViewModel.logout();
                            setOpen(false);
                        }}
                    >
                        Sign out
                    </Button>
                </div>
                {hasMultipleAccounts && (
                    <>
                        <Separator className={styles.separator} />
                        <ul className={styles.list}>
                            {otherAccounts.map((id) => {
                                const viewModel = clientStores[id];
                                return (
                                    <li key={id}>
                                        <Account
                                            clientViewModel={viewModel}
                                            onClick={() => {
                                                setClientViewModel(viewModel);
                                                setOpen(false);
                                            }}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                        <Separator className={styles.separator} />
                    </>
                )}
                <Button
                    Icon={PlusIcon}
                    size="sm"
                    kind="secondary"
                    onClick={onAddAccount}
                >
                    Add account
                </Button>
            </div>
        </Menu>
    );
}

type AccountProps = {
    clientViewModel: ClientViewModel;
    onClick: MouseEventHandler;
};

function Account({ clientViewModel, onClick }: AccountProps): JSX.Element {
    const { userId, displayName, avatarUrl } = useViewModel(clientViewModel);

    return (
        <button className={styles.account} type="button" onClick={onClick}>
            <BaseAvatar
                className={styles.account_avatar}
                size="32px"
                name={userId}
                idName={userId}
                title={userId}
                url={avatarUrl ? mxcToUrl(avatarUrl) : undefined}
                altText={"User"}
            />
            <span className={styles.account_userName}>{displayName}</span>
            <span className={styles.account_userId}>{userId}</span>
        </button>
    );
}
