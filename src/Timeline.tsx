import type React from "react";
import { type ReactNode, useRef, useState, useSyncExternalStore } from "react";
import { EventTile } from "./EventTile";
import type TimelineStore from "./TimelineStore";
import { Virtuoso, type VirtuosoHandle } from "react-virtuoso";
import type { TimelineItem } from "./TimelineStore";
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

    let topSpinner: ReactNode;
    if (viewState.showTopSpinner) {
        topSpinner = (
            <li className="mx_TimelineSpinner" key="_topSpinner">
                <InlineSpinner size={40} />
            </li>
        );
    }

    return (
        <div className="mx_Timeline">
            <ol>
                <Virtuoso
                    ref={virtuosoRef}
                    key={currentRoomId}
                    data={viewState.items}
                    firstItemIndex={viewState.firstItemIndex}
                    initialTopMostItemIndex={viewState.items.length - 1}
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
                    // overscan={{ main: 1000, reverse: 1000 }}
                    startReached={timeline.backPaginate}
                    components={{
                        Header: () => topSpinner,
                    }}
                />
            </ol>
        </div>
    );
};
