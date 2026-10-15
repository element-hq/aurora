/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { BaseViewModel } from "@element-hq/web-shared-components";
import {
    type ClientInterface,
    type MessageSearchResult,
    MsgLikeKind,
    ProfileDetails,
    type SearchServiceInterface,
    type SearchServicePaginationState,
    SearchServicePaginationState_Tags,
    type SearchServiceResult,
    SearchServiceResult_Tags,
    type SearchServiceResultsUpdate,
    SearchServiceResultsUpdate_Tags,
    type TaskHandleInterface,
    TimelineItemContent,
} from "../index.web";
import { mxcToUrl } from "../utils/mxcToUrl";
import { printRustError } from "../utils/printRustError";

/** A message matching the query, as shown in the results list. */
export interface MessageResultItem {
    roomId: string;
    roomName?: string;
    eventId: string;
    sender: string;
    senderDisplayName?: string;
    senderAvatarUrl?: string;
    /** Unix timestamp in milliseconds. */
    timestamp: number;
    /** The plain text body of the message. */
    body: string;
}

export interface MessageSearchSnapshot {
    results: MessageResultItem[];
    /** Whether a page of results is being loaded. */
    loading: boolean;
    /** Whether there are no more results for the current query. */
    endReached: boolean;
}

export interface MessageSearchViewModelProps {
    client: ClientInterface;
}

/**
 * Message search backed by the Rust SDK's search service, which keeps a
 * reactive, paginated list of results for the current query.
 */
export class MessageSearchViewModel extends BaseViewModel<
    MessageSearchSnapshot,
    MessageSearchViewModelProps
> {
    private searchService: SearchServiceInterface;
    private resultsHandle?: TaskHandleInterface;
    private paginationHandle?: TaskHandleInterface;
    private results: MessageResultItem[] = [];
    private diffQueue: Promise<void> = Promise.resolve();
    private query = "";

    public constructor(props: MessageSearchViewModelProps) {
        super(props, {
            results: [],
            loading: false,
            endReached: false,
        });
        this.searchService = props.client.searchService();
        this.subscribeToService();
    }

    private async subscribeToService(): Promise<void> {
        try {
            this.paginationHandle =
                this.searchService.subscribeToPaginationStateUpdates({
                    onUpdate: this.onPaginationState,
                });
            this.resultsHandle = await this.searchService.subscribeToResults({
                onUpdate: this.onResultsUpdate,
            });
        } catch (e) {
            printRustError("Failed to subscribe to search results", e);
        }
    }

    public setQuery = (query: string): void => {
        const trimmed = query.trim();
        if (trimmed === this.query) return;
        this.query = trimmed;
        this.searchService.setQuery(trimmed).catch((e) => {
            printRustError("Failed to set search query", e);
        });
    };

    public loadMore = (): void => {
        this.searchService.paginate().catch((e) => {
            printRustError("Failed to load more search results", e);
        });
    };

    private onPaginationState = (state: SearchServicePaginationState): void => {
        switch (state.tag) {
            case SearchServicePaginationState_Tags.Loading:
                this.snapshot.merge({ loading: true });
                break;
            case SearchServicePaginationState_Tags.Idle:
                this.snapshot.merge({
                    loading: false,
                    endReached: state.inner.endReached,
                });
                break;
        }
    };

    private onResultsUpdate = (updates: SearchServiceResultsUpdate[]): void => {
        this.diffQueue = this.diffQueue.then(() => this.applyDiff(updates));
    };

    private applyDiff(updates: SearchServiceResultsUpdate[]): void {
        let results = [...this.results];
        for (const update of updates) {
            switch (update.tag) {
                case SearchServiceResultsUpdate_Tags.Append:
                    results.push(...update.inner.values.map(this.toItem));
                    break;
                case SearchServiceResultsUpdate_Tags.Clear:
                    results = [];
                    break;
                case SearchServiceResultsUpdate_Tags.PushFront:
                    results.unshift(this.toItem(update.inner.value));
                    break;
                case SearchServiceResultsUpdate_Tags.PushBack:
                    results.push(this.toItem(update.inner.value));
                    break;
                case SearchServiceResultsUpdate_Tags.PopFront:
                    results.shift();
                    break;
                case SearchServiceResultsUpdate_Tags.PopBack:
                    results.pop();
                    break;
                case SearchServiceResultsUpdate_Tags.Insert:
                    results.splice(
                        update.inner.index,
                        0,
                        this.toItem(update.inner.value),
                    );
                    break;
                case SearchServiceResultsUpdate_Tags.Set:
                    results[update.inner.index] = this.toItem(
                        update.inner.value,
                    );
                    break;
                case SearchServiceResultsUpdate_Tags.Remove:
                    results.splice(update.inner.index, 1);
                    break;
                case SearchServiceResultsUpdate_Tags.Truncate:
                    results = results.slice(0, update.inner.length);
                    break;
                case SearchServiceResultsUpdate_Tags.Reset:
                    results = update.inner.values.map(this.toItem);
                    break;
            }
        }
        this.results = results;
        this.snapshot.merge({ results });
    }

    private toItem = (result: SearchServiceResult): MessageResultItem => {
        switch (result.tag) {
            case SearchServiceResult_Tags.Message: {
                const { roomId, result: message } = result.inner;
                const profile = readyProfile(message);
                return {
                    roomId,
                    roomName: this.roomName(roomId),
                    eventId: message.eventId,
                    sender: message.sender,
                    senderDisplayName: profile?.displayName ?? undefined,
                    senderAvatarUrl: profile?.avatarUrl
                        ? mxcToUrl(this.props.client, profile.avatarUrl)
                        : undefined,
                    timestamp: Number(message.timestamp),
                    body: messageBody(message),
                };
            }
        }
    };

    private roomName(roomId: string): string | undefined {
        try {
            return this.props.client.getRoom(roomId)?.displayName();
        } catch {
            return undefined;
        }
    }

    public dispose(): void {
        this.resultsHandle?.cancel();
        this.paginationHandle?.cancel();
        super.dispose();
    }
}

function readyProfile(
    message: MessageSearchResult,
): { displayName?: string; avatarUrl?: string } | undefined {
    const profile = message.senderProfile;
    // Only a ready profile carries a display name and avatar.
    return ProfileDetails.Ready.instanceOf(profile) ? profile.inner : undefined;
}

function messageBody(message: MessageSearchResult): string {
    const content = message.content;
    if (!TimelineItemContent.MsgLike.instanceOf(content)) return "";
    const kind = content.inner.content.kind;
    if (MsgLikeKind.Message.instanceOf(kind)) {
        return kind.inner.content.body;
    }
    if (MsgLikeKind.Redacted.instanceOf(kind)) return "Message deleted";
    if (MsgLikeKind.UnableToDecrypt.instanceOf(kind)) {
        return "Unable to decrypt";
    }
    return "";
}
