/*
 *
 *  * Copyright 2025 New Vector Ltd.
 *  *
 *  * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 *  * Please see LICENSE files in the repository root for full details.
 *
 */

import { BaseViewModel } from "@element-hq/web-shared-components";
import { MemberListViewModel } from "../MemberList/MemberListViewModel";
import { TimelineViewModel } from "../Timeline/TimelineViewModel";
import { buildRoomSummary, type RoomSummary } from "../RoomList/RoomSummary";
import type { Props, RoomViewSnapshot } from "./room-view.types";

/** How many rooms' timelines to keep, so that switching back to one is quick. */
const MAX_TIMELINES = 10;

/**
 * The timelines of the rooms opened most recently, per client, least recently opened first.
 * Building the SDK's timeline again reads every event's receipts and thread from IndexedDB,
 * which makes coming back to a room several times slower than drawing what we already have.
 */
const timelines = new WeakMap<object, Map<string, TimelineViewModel>>();

export class RoomViewModel extends BaseViewModel<RoomViewSnapshot, Props> {
    public constructor(props: Props) {
        const roomId = props.room.id();
        let ofClient = timelines.get(props.client);
        if (!ofClient) timelines.set(props.client, (ofClient = new Map()));
        let timelineViewModel = ofClient.get(roomId);
        if (timelineViewModel) {
            ofClient.delete(roomId);
            timelineViewModel.reopen();
        } else {
            timelineViewModel = new TimelineViewModel({ room: props.room });
        }
        ofClient.set(roomId, timelineViewModel);
        for (const [id, oldest] of ofClient) {
            if (ofClient.size <= MAX_TIMELINES) break;
            ofClient.delete(id);
            oldest.dispose();
        }
        const memberListViewModel = new MemberListViewModel({
            room: props.room,
        });

        super(props, {
            timelineViewModel,
            memberListViewModel,
            roomHeaderViewModel: undefined, // Will be set asynchronously
            roomId,
            client: props.client,
        });

        this.disposables.track(() => timelineViewModel.close());
        this.disposables.track(memberListViewModel);

        // Load room summary for header and subscribe to updates
        this.loadRoomHeader();
        this.subscribeToRoomInfoUpdates();
    }

    private async loadRoomHeader(): Promise<void> {
        const [roomInfo, latestEvent] = await Promise.all([
            this.props.room.roomInfo(),
            this.props.room.latestEvent(),
        ]);

        const roomHeaderViewModel = buildRoomSummary(
            this.props.client,
            this.props.room,
            roomInfo,
            latestEvent,
        );

        this.snapshot.merge({ roomHeaderViewModel });
    }

    private subscribeToRoomInfoUpdates(): void {
        // Subscribe to room info updates to keep header reactive
        const roomInfoObservationToken =
            this.props.room.subscribeToRoomInfoUpdates({
                call: async (roomInfo) => {
                    // When room info changes, rebuild the summary
                    const latestEvent = await this.props.room.latestEvent();
                    const roomHeaderViewModel = buildRoomSummary(
                        this.props.client,
                        this.props.room,
                        roomInfo,
                        latestEvent,
                    );
                    this.snapshot.merge({ roomHeaderViewModel });
                },
            });

        this.disposables.track(() => {
            roomInfoObservationToken.cancel();
        });
    }
}
