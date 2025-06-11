import type React from "react";
import { type ReactNode, useRef, useState, useSyncExternalStore } from "react";
import { EventTile } from "./EventTile";
import type TimelineStore from "./TimelineStore";
import { Virtuoso, type VirtuosoHandle } from "react-virtuoso";
import { isVirtualEvent, TimelineItem } from "./TimelineStore";
import { InlineSpinner } from "@vector-im/compound-web";

export interface TimelineProps {
    currentRoomId: string;
    timelineStore: TimelineStore;
}

export const Timeline: React.FC<TimelineProps> = ({
    currentRoomId,
    timelineStore: timeline,
}) => {
    const viewState = useSyncExternalStore(
        timeline.subscribe,
        timeline.getSnapshot,
    );
    const virtuosoRef = useRef<VirtuosoHandle | null>(null);
    let items = viewState.items;
    if (viewState.showTopSpinner) {
        items = [new TimelineItem("spinner", "spinner"), ...items];
    }
    return (
        <div className="mx_Timeline">
            <ol>
                <Virtuoso
                    ref={virtuosoRef}
                    key={currentRoomId}
                    data={items}
                    firstItemIndex={viewState.firstItemIndex}
                    alignToBottom={true}
                    itemContent={(i, item, context) => (
                        <li
                            key={item.getInternalId()}
                            value={item.getInternalId()}
                        >
                            <EventTile item={item} />
                        </li>
                    )}
                    followOutput={true}
                    computeItemKey={(i, item) => item.getInternalId()}
                    startReached={timeline.backPaginate}
                />
            </ol>
        </div>
    );
};
