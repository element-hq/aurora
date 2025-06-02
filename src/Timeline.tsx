import { useRef } from "react";
import type TimelineStore from "./TimelineStore";
import { Virtuoso, type VirtuosoHandle } from "react-virtuoso";
import {
	ContentType,
	type EventTimelineItem,
	TimelineItemKind,
	type TimelineItem,
} from "./TimelineStore";
import { EventTile } from "./EventTile";

interface TimelineProps {
	timelineStore: TimelineStore;
}

const Timeline: React.FC<TimelineProps> = ({ timelineStore: timeline }) => {
	const items: TimelineItem[] = []; //useSyncExternalStore(timeline.subscribe, timeline.getSnapshot);
	const virtuosoRef = useRef<VirtuosoHandle | null>(null);

	return (
		<div className="mx_Timeline">
			<ol>
				<Virtuoso
					ref={virtuosoRef}
					// className={classes}
					// style={style}
					data={items}
					alignToBottom={true}
					// logLevel={LogLevel.DEBUG}
					// isScrolling={(isScrolling) => {
					// 	if (isScrolling && !this.state.isScrolling) {
					// 		this.setState({ isScrolling });
					// 		return;
					// 	}
					// 	clearTimeout(this.scrollingTimeout);
					// 	this.scrollingTimeout = window.setTimeout(() => {
					// 		if (this.state.isScrolling != isScrolling) {
					// 			this.setState({ isScrolling });
					// 		}
					// 	}, 1000);
					// }}
					// rangeChanged={this.setVisibleRange}
					// startReached={onStartReached}
					// increaseViewportBy={{ top: 3000, bottom: 3000 }}
					// overscan={{ main: 1000, reverse: 1000 }}
					itemContent={(i, item, context) => (
						<li key={item.getInternalId()} value={item.getInternalId()}>
							<EventTile
								item={item}
								continuation={
									i > 0 &&
									item.kind === TimelineItemKind.Event &&
									items[i - 1].kind === TimelineItemKind.Event &&
									(item as EventTimelineItem).getContent().type ===
										ContentType[ContentType.Message] &&
									(items[i - 1] as EventTimelineItem).getContent().type ===
										ContentType[ContentType.Message] &&
									(item as EventTimelineItem).getSender() ===
										(items[i - 1] as EventTimelineItem).getSender()
								}
							/>
						</li>
					)}
					// components={{ Header: () => SpinnerIcon, Footer: () => SpinnerIcon }}
					// onScroll={(e) => "ONSCROLL!"}
				/>
			</ol>
		</div>
	);
};
