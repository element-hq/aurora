import type React from "react";
import { useRef, useSyncExternalStore } from "react";
import { EventTile } from "./EventTile";
import type TimelineStore from "./TimelineStore";
import { Virtuoso, type VirtuosoHandle } from "react-virtuoso";

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
    const virtuosoRef = useRef<VirtuosoHandle | null>(null);

    return (
        <div className="mx_Timeline">
            <ol>
                <Virtuoso
                    ref={virtuosoRef}
                    data={items}
                    alignToBottom={true}
                    itemContent={(i, item, context) => (
                        <li
                            key={item.getInternalId()}
                            value={item.getInternalId()}
                        >
                            <EventTile item={item} />
                        </li>
                    )}
                />
            </ol>
        </div>
    );
};
