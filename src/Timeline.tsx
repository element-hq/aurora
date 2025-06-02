import { useRef, useSyncExternalStore } from "react";
import type TimelineStore from "./TimelineStore";
import { Virtuoso, type VirtuosoHandle } from "react-virtuoso";
import { EventTile } from "./EventTile";
import {
	MsgLikeKind_Tags,
	TimelineItemContent_Tags,
	type TimelineItemInterface,
} from "./index.web";

interface TimelineProps {
	timelineStore: TimelineStore;
}

function continuation(
	i: number,
	item: TimelineItemInterface,
	items: TimelineItemInterface[],
): boolean {
	if (i <= 0) {
		return false;
	}
	const itemContent = item.asEvent()?.content;
	const nextItem = items[i - 1].asEvent();
	const nextItemContent = nextItem?.content;
	return (
		i > 0 &&
		itemContent?.tag === TimelineItemContent_Tags.MsgLike &&
		itemContent?.inner.content.kind.tag === MsgLikeKind_Tags.Message &&
		nextItemContent?.tag === TimelineItemContent_Tags.MsgLike &&
		nextItemContent?.inner.content.kind.tag === MsgLikeKind_Tags.Message &&
		item.asEvent()?.sender === nextItem?.sender
	);
}

const Timeline: React.FC<TimelineProps> = ({ timelineStore: timeline }) => {
	const items: TimelineItemInterface[] = useSyncExternalStore(
		timeline.subscribe,
		timeline.getSnapshot,
	);
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
						<li key={item.uniqueId().id} value={item.uniqueId().id}>
							<EventTile
								item={item}
								continuation={continuation(i, item, items)}
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
