import type React from "react";
import { useSyncExternalStore } from "react";
import { EventTile } from "./EventTile";
import { TimelineItemContent } from "./index.web";
import TimelineStore, { isRealEvent } from "./TimelineStore";

export interface TimelineProps {
    timelineStore: TimelineStore;
}

export const Timeline: React.FC<TimelineProps> = ({ timelineStore: timeline }) => {
    const items = useSyncExternalStore(
        timeline.subscribe,
        timeline.getSnapshot
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
                            <EventTile
                                item={item}
                                continuation={prevItem &&
                                    isRealEvent(item) &&
                                    isRealEvent(prevItem) &&
                                    TimelineItemContent.MsgLike.instanceOf(
                                        item.item.content
                                    ) &&
                                    TimelineItemContent.MsgLike.instanceOf(
                                        prevItem.item.content
                                    ) &&
                                    item.item.sender === prevItem.item.sender} />
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};
