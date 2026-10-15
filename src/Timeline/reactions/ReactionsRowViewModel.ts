/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import {
    BaseViewModel,
    type ReactionsRowViewActions,
    type ReactionsRowViewSnapshot,
} from "@element-hq/web-shared-components";
import type { MouseEvent } from "react";

/** How many reactions to show before hiding the rest behind "Show all". */
export const MAX_ITEMS_WHEN_LIMITED = 8;

export interface ReactionsRowViewModelProps {
    /** How many different reactions the message has. */
    reactionCount: number;
    /** Whether the room's power levels let us react. */
    canReact: boolean;
    /** Whether the reaction picker is open for this message. */
    isPickerOpen: boolean;
    /** Open (or close) the reaction picker next to the given button. */
    onAddReaction: (anchor: HTMLElement) => void;
}

interface InternalProps extends ReactionsRowViewModelProps {
    /** Whether the reader has asked to see all of the reactions. */
    showAll: boolean;
}

/**
 * View model for the row of reactions under a message.
 */
export class ReactionsRowViewModel
    extends BaseViewModel<ReactionsRowViewSnapshot, InternalProps>
    implements ReactionsRowViewActions
{
    private static computeSnapshot({
        reactionCount,
        canReact,
        isPickerOpen,
        showAll,
    }: InternalProps): ReactionsRowViewSnapshot {
        return {
            ariaLabel: "Reactions",
            isVisible: reactionCount > 0,
            // Hiding a single reaction behind a button would save no space
            showAllButtonVisible:
                !showAll && reactionCount > MAX_ITEMS_WHEN_LIMITED + 1,
            showAllButtonLabel: "Show all",
            showAddReactionButton: canReact,
            addReactionButtonLabel: "Add reaction",
            // Keep the button showing while its picker is open
            addReactionButtonActive: isPickerOpen,
        };
    }

    public constructor(props: ReactionsRowViewModelProps) {
        const internalProps = { ...props, showAll: false };
        super(
            internalProps,
            ReactionsRowViewModel.computeSnapshot(internalProps),
        );
    }

    public update(props: ReactionsRowViewModelProps): void {
        this.props = { ...props, showAll: this.props.showAll };
        this.snapshot.merge(ReactionsRowViewModel.computeSnapshot(this.props));
    }

    public onShowAllClick = (): void => {
        this.props = { ...this.props, showAll: true };
        this.snapshot.merge(ReactionsRowViewModel.computeSnapshot(this.props));
    };

    public onAddReactionClick = (e: MouseEvent<HTMLButtonElement>): void => {
        this.props.onAddReaction(e.currentTarget);
    };
}
