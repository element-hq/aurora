import {
    DateSeparatorView,
    ReadMarker,
    type TimelineItem,
    TimelineView,
} from "@element-hq/web-shared-components";
import { InlineSpinner } from "@vector-im/compound-web";
import type React from "react";
import { type ReactNode, useCallback, useEffect, useRef } from "react";
import type {
    ClientInterface,
    EventTimelineItem,
} from "../generated/matrix_sdk_ffi";
import { StaticViewModel } from "../utils/StaticViewModel";
import { EventTile } from "./EventTile";
import type { TimelineViewModel } from "./TimelineViewModel";

export interface TimelineProps {
    timelineViewModel: TimelineViewModel;
    client: ClientInterface;
}

type DateSeparatorVm = StaticViewModel<{ label: string }>;

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
                dsVm = new StaticViewModel({
                    label: new Date(ts).toDateString(),
                });
                dateSeparatorVms.current.set(key, dsVm);
            }
            return dsVm;
        },
        [],
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
                            event={item.event as EventTimelineItem}
                            continuation={item.continuation}
                            lastInSection={item.lastInSection}
                            sendState={item.sendState}
                            client={client}
                        />
                    );
                default:
                    return null;
            }
        },
        [client, dateSeparatorVm],
    );

    return (
        <div className="mx_Timeline">
            <TimelineView vm={vm} renderItem={renderItem} />
        </div>
    );
};
