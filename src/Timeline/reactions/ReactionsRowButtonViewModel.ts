/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import {
    BaseViewModel,
    type ReactionsRowButtonTooltipViewSnapshot,
    type ReactionsRowButtonViewSnapshot,
} from "@element-hq/web-shared-components";
import type { Reaction } from "../../generated/matrix_sdk_ffi";

/** How many reactors to name before summarising the rest. */
const MAX_NAMED_REACTORS = 6;

export interface ReactionsRowButtonViewModelProps {
    reaction: Reaction;
    ownUserId?: string;
    canReact: boolean;
    canRedactOwn: boolean;
    memberNames: ReadonlyMap<string, string>;
    /** Add our reaction with this key, or take it away. */
    onToggle: (key: string) => void;
}

/** "A, B and C", or "A, B, … F and 3 others" when there are lots. */
function formatNames(names: string[]): string {
    if (names.length <= 1) return names[0] ?? "";
    if (names.length > MAX_NAMED_REACTORS) {
        const others = names.length - MAX_NAMED_REACTORS;
        return `${names.slice(0, MAX_NAMED_REACTORS).join(", ")} and ${others} ${others === 1 ? "other" : "others"}`;
    }
    return `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`;
}

function reactorNames({
    reaction,
    memberNames,
}: ReactionsRowButtonViewModelProps): string {
    return formatNames(
        reaction.senders.map(
            ({ senderId }) => memberNames.get(senderId) ?? senderId,
        ),
    );
}

/** View model for the tooltip listing who reacted. */
class ReactionsRowButtonTooltipViewModel extends BaseViewModel<
    ReactionsRowButtonTooltipViewSnapshot,
    ReactionsRowButtonViewModelProps
> {
    private static computeSnapshot(
        props: ReactionsRowButtonViewModelProps,
    ): ReactionsRowButtonTooltipViewSnapshot {
        return {
            formattedSenders: reactorNames(props),
            caption: props.reaction.key,
        };
    }

    public constructor(props: ReactionsRowButtonViewModelProps) {
        super(props, ReactionsRowButtonTooltipViewModel.computeSnapshot(props));
    }

    public update(props: ReactionsRowButtonViewModelProps): void {
        this.props = props;
        this.snapshot.merge(
            ReactionsRowButtonTooltipViewModel.computeSnapshot(props),
        );
    }
}

/**
 * View model for one reaction under a message: its key, how many people
 * reacted with it, and whether we did.
 */
export class ReactionsRowButtonViewModel extends BaseViewModel<
    ReactionsRowButtonViewSnapshot,
    ReactionsRowButtonViewModelProps
> {
    private readonly tooltipVm: ReactionsRowButtonTooltipViewModel;

    private static computeSnapshot(
        props: ReactionsRowButtonViewModelProps,
        tooltipVm: ReactionsRowButtonTooltipViewModel,
    ): ReactionsRowButtonViewSnapshot {
        const { reaction, ownUserId, canReact, canRedactOwn } = props;
        const isSelected = reaction.senders.some(
            ({ senderId }) => senderId === ownUserId,
        );
        return {
            content: reaction.key,
            count: reaction.senders.length,
            isSelected,
            isDisabled: !canReact || (isSelected && !canRedactOwn),
            "aria-label": `${reactorNames(props)} reacted with ${reaction.key}`,
            tooltipVm,
        };
    }

    public constructor(props: ReactionsRowButtonViewModelProps) {
        const tooltipVm = new ReactionsRowButtonTooltipViewModel(props);
        super(
            props,
            ReactionsRowButtonViewModel.computeSnapshot(props, tooltipVm),
        );
        this.tooltipVm = tooltipVm;
        this.disposables.track(tooltipVm);
    }

    /** Only changed fields are merged, so an open tooltip doesn't flicker on timeline updates. */
    public update(props: ReactionsRowButtonViewModelProps): void {
        this.props = props;
        this.tooltipVm.update(props);
        this.snapshot.merge(
            ReactionsRowButtonViewModel.computeSnapshot(props, this.tooltipVm),
        );
    }

    public onClick = (): void => {
        if (this.getSnapshot().isDisabled) return;
        this.props.onToggle(this.props.reaction.key);
    };
}
