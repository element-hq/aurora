import type React from "react";
import { type ReactNode, useRef, useState } from "react";
import { useViewModel } from "@element-hq/web-shared-components";
import { EventTile } from "./EventTile";
import {
    type TimelineViewModel,
    TimelineItem,
} from "./TimelineViewModel";
import { Virtuoso, type VirtuosoHandle } from "react-virtuoso";
import { InlineSpinner } from "@vector-im/compound-web";

export interface TimelineProps {
    timelineViewModel: TimelineViewModel;
}

export const Timeline: React.FC<TimelineProps> = ({
    timelineViewModel: timeline,
}) => {
    const viewState = useViewModel(timeline);
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
                    key={viewState.roomId}
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
