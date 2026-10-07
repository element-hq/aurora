import type React from "react";
import { type ReactNode, useRef, useState } from "react";
import { useViewModel } from "@element-hq/web-shared-components";
import { EventTile } from "./EventTile";
import { type TimelineViewModel, TimelineItem } from "./TimelineViewModel";
import { Virtuoso, type VirtuosoHandle } from "react-virtuoso";
import { InlineSpinner } from "@vector-im/compound-web";
import type { ClientInterface } from "../generated/matrix_sdk_ffi";

export interface TimelineProps {
    timelineViewModel: TimelineViewModel;
    client: ClientInterface;
}

export const Timeline: React.FC<TimelineProps> = ({
    timelineViewModel: timeline,
    client,
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
                            <EventTile item={item} client={client} />
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
