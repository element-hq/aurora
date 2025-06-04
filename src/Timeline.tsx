import type React from "react";
import { useSyncExternalStore } from "react";
import { EventTile } from "./EventTile";
import { TimelineItemContent } from "./index.web";
import type TimelineStore from "./TimelineStore";
import { isRealEvent } from "./TimelineStore";

export interface TimelineProps {
    timelineStore: TimelineStore;
}

export const Timeline: React.FC<TimelineProps> = ({
    timelineStore: timeline,
}) => {
    const items = useSyncExternalStore(
        timeline.subscribe,
        timeline.getSnapshot,
    );

    return (
        <div className="mx_Timeline">
            <ol>
                {items.map((item, i) => {
                    const prevItem = items[i - 1];
                    return (
                        <li
                            key={item.getInternalId()}
                            value={item.getInternalId()}
                        >
                            <EventTile item={item} />
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};
