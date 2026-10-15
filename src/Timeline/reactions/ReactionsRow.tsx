/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import {
    ReactionsRowButtonView,
    ReactionsRowView,
    useCreateAutoDisposedViewModel,
    useViewModel,
} from "@element-hq/web-shared-components";
import { useEffect, useMemo } from "react";
import type {
    EventOrTransactionId,
    Reaction,
} from "../../generated/matrix_sdk_ffi";
import {
    ReactionsRowButtonViewModel,
    type ReactionsRowButtonViewModelProps,
} from "./ReactionsRowButtonViewModel";
import {
    MAX_ITEMS_WHEN_LIMITED,
    ReactionsRowViewModel,
} from "./ReactionsRowViewModel";
import type { ReactionPickerTarget } from "./ReactionPicker";

/** What every event tile needs to show and toggle reactions, from the timeline. */
export interface ReactionsContext {
    ownUserId?: string;
    canReact: boolean;
    canRedactOwn: boolean;
    memberNames: ReadonlyMap<string, string>;
    toggleReaction: (itemId: EventOrTransactionId, key: string) => void;
    /** Open the reaction picker for a message, or close it if it's already open there. */
    toggleReactionPicker: (target: ReactionPickerTarget) => void;
    /** The tile the reaction picker is open for, if it's open. */
    reactionPickerTileId?: string;
}

/** The reactions we've made to a message. */
export function ownReactionKeys(
    reactions: Reaction[],
    ownUserId?: string,
): Set<string> {
    return new Set(
        reactions
            .filter((r) => r.senders.some((s) => s.senderId === ownUserId))
            .map((r) => r.key),
    );
}

function ReactionsRowButton(props: ReactionsRowButtonViewModelProps) {
    const vm = useCreateAutoDisposedViewModel(
        () => new ReactionsRowButtonViewModel(props),
    );
    useEffect(() => {
        vm.update(props);
    });
    return <ReactionsRowButtonView vm={vm} />;
}

/** When a reaction was first used, so the buttons keep their order as counts change. */
function firstUsed(reaction: Reaction): number {
    return Math.min(...reaction.senders.map((s) => Number(s.timestamp)));
}

interface ReactionsRowProps {
    /** The timeline item's unique key. */
    tileId: string;
    /** The message the reactions are on. */
    itemId: EventOrTransactionId;
    reactions: Reaction[];
    context: ReactionsContext;
}

/**
 * The reactions under a message, each of which can be clicked to add or
 * remove our own.
 */
export function ReactionsRow({
    tileId,
    itemId,
    reactions,
    context,
}: ReactionsRowProps) {
    const {
        ownUserId,
        canReact,
        canRedactOwn,
        memberNames,
        toggleReaction,
        toggleReactionPicker,
        reactionPickerTileId,
    } = context;
    const sorted = useMemo(
        () =>
            reactions
                .filter((r) => r.senders.length > 0)
                .sort((a, b) => firstUsed(a) - firstUsed(b)),
        [reactions],
    );

    const rowProps = {
        reactionCount: sorted.length,
        canReact,
        isPickerOpen: reactionPickerTileId === tileId,
        onAddReaction: (anchor: HTMLElement) =>
            toggleReactionPicker({
                tileId,
                itemId,
                anchor,
                selected: ownReactionKeys(reactions, ownUserId),
            }),
    };
    const vm = useCreateAutoDisposedViewModel(
        () => new ReactionsRowViewModel(rowProps),
    );
    useEffect(() => {
        vm.update(rowProps);
    });
    const { isVisible, showAllButtonVisible } = useViewModel(vm);

    if (!isVisible) return null;

    const onToggle = (key: string) => toggleReaction(itemId, key);
    const shown = showAllButtonVisible
        ? sorted.slice(0, MAX_ITEMS_WHEN_LIMITED)
        : sorted;

    return (
        <ReactionsRowView vm={vm}>
            {shown.map((reaction) => (
                <ReactionsRowButton
                    key={reaction.key}
                    reaction={reaction}
                    onToggle={onToggle}
                    ownUserId={ownUserId}
                    canReact={canReact}
                    canRedactOwn={canRedactOwn}
                    memberNames={memberNames}
                />
            ))}
        </ReactionsRowView>
    );
}
