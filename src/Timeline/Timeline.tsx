import {
    DateSeparatorView,
    ReadMarker,
    type TimelineItem,
    TimelineView,
    useViewModel,
} from "@element-hq/web-shared-components";
import { InlineSpinner } from "@vector-im/compound-web";
import type React from "react";
import {
    type ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import type {
    ClientInterface,
    EventTimelineItem,
} from "../generated/matrix_sdk_ffi";
import { StaticViewModel } from "../utils/StaticViewModel";
import { EventTile } from "./EventTile";
import {
    ReactionPicker,
    type ReactionPickerTarget,
} from "./reactions/ReactionPicker";
import type { ReactionsContext } from "./reactions/ReactionsRow";
import type { TimelineViewModel } from "./TimelineViewModel";

export interface TimelineProps {
    timelineViewModel: TimelineViewModel;
    client: ClientInterface;
}

type DateSeparatorVm = StaticViewModel<{ label: string }>;

const relativeDayFormat = new Intl.RelativeTimeFormat(undefined, {
    numeric: "auto",
});
const weekdayFormat = new Intl.DateTimeFormat(undefined, { weekday: "long" });
const fullDateFormat = new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
});

/**
 * A date separator's label: "today", "yesterday", the weekday within the last
 * week, otherwise the full date. The same as element-web's DateSeparatorViewModel.
 */
function dateSeparatorLabel(ts: number): string {
    const date = new Date(ts);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    if (date.toDateString() === today.toDateString()) {
        return relativeDayFormat.format(0, "day");
    }
    if (date.toDateString() === yesterday.toDateString()) {
        return relativeDayFormat.format(-1, "day");
    }
    if (today.getTime() - date.getTime() < 6 * 24 * 60 * 60 * 1000) {
        return weekdayFormat.format(date);
    }
    return fullDateFormat.format(date);
}

export const Timeline: React.FC<TimelineProps> = ({
    timelineViewModel: vm,
    client,
}) => {
    useEffect(() => {
        vm.start();
        // The room view model owns and disposes the timeline view model.
    }, [vm]);

    // One view model per date separator, so a row doesn't get a new one every render.
    const dateSeparatorVms = useRef(new Map<string, DateSeparatorVm>());
    const dateSeparatorVm = useCallback(
        (key: string, ts: number): DateSeparatorVm => {
            let dsVm = dateSeparatorVms.current.get(key);
            if (!dsVm) {
                dsVm = new StaticViewModel({ label: dateSeparatorLabel(ts) });
                dateSeparatorVms.current.set(key, dsVm);
            }
            return dsVm;
        },
        [],
    );

    const { ownUserId, canReact, canRedactOwn, memberNames } = useViewModel(vm);

    // One picker for the whole timeline, so it isn't lost when its tile scrolls out of view
    const [reactionPicker, setReactionPicker] =
        useState<ReactionPickerTarget | null>(null);
    const toggleReactionPicker = useCallback(
        (target: ReactionPickerTarget) =>
            setReactionPicker((current) =>
                current?.tileId === target.tileId ? null : target,
            ),
        [],
    );
    const closeReactionPicker = useCallback(() => setReactionPicker(null), []);

    const reactions = useMemo(
        (): ReactionsContext => ({
            ownUserId,
            canReact,
            canRedactOwn,
            memberNames,
            toggleReaction: vm.toggleReaction,
            toggleReactionPicker,
            reactionPickerTileId: reactionPicker?.tileId,
        }),
        [
            vm,
            ownUserId,
            canReact,
            canRedactOwn,
            memberNames,
            toggleReactionPicker,
            reactionPicker?.tileId,
        ],
    );

    const renderItem = useCallback(
        (item: TimelineItem): ReactNode => {
            switch (item.kind) {
                case "date-separator":
                    return (
                        <DateSeparatorView
                            vm={dateSeparatorVm(item.key, item.ts)}
                        />
                    );
                case "read-marker":
                    // A div, because the timeline already puts each row in its own list item.
                    return (
                        <ReadMarker
                            eventId={item.key}
                            kind="current"
                            as="div"
                            label="New"
                        />
                    );
                case "loading":
                    return (
                        <div className="mx_Timeline_loading">
                            <InlineSpinner size={32} />
                        </div>
                    );
                case "gap":
                    return null;
                case "event":
                    return (
                        <EventTile
                            id={item.key}
                            event={item.event as EventTimelineItem}
                            continuation={item.continuation}
                            lastInSection={item.lastInSection}
                            sendState={item.sendState}
                            client={client}
                            reactions={reactions}
                        />
                    );
                default:
                    return null;
            }
        },
        [client, dateSeparatorVm, reactions],
    );

    return (
        <div className="mx_Timeline">
            <TimelineView vm={vm} renderItem={renderItem} />
            {reactionPicker && canReact && (
                <ReactionPicker
                    target={reactionPicker}
                    canRedactOwn={canRedactOwn}
                    onChoose={(key) =>
                        vm.toggleReaction(reactionPicker.itemId, key)
                    }
                    onFinished={closeReactionPicker}
                />
            )}
        </div>
    );
};
