/*
 *
 *  * Copyright 2025 New Vector Ltd.
 *  *
 *  * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 *  * Please see LICENSE files in the repository root for full details.
 *
 */

import { BaseViewModel } from "@element-hq/web-shared-components";
import { MembershipState_Tags, type RoomMember } from "../index.web";
import type {
    MemberListViewActions,
    MemberListViewSnapshot,
    MemberWithSeparator,
    Props,
} from "./member-list-view.types";
import { SEPARATOR } from "./member-list-view.types";

// Regex applied to filter our punctuation in member names before applying sort, to fuzzy it a little
// matches all ASCII punctuation: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
const SORT_REGEX = /[\x21-\x2F\x3A-\x40\x5B-\x60\x7B-\x7E]+/g;

export class MemberListViewModel
    extends BaseViewModel<MemberListViewSnapshot, Props>
    implements MemberListViewActions
{
    // cache of Display Name -> name to sort based on. This strips out special symbols like @.
    private readonly sortNames = new Map<string, string>();
    private collator: Intl.Collator;

    public constructor(props: Props) {
        super(props, {
            members: [],
            memberCount: 0,
            shouldShowInvite: false,
            shouldShowSearch: true,
            isLoading: false,
            canInvite: false,
        });

        const language = "en";
        this.collator = new Intl.Collator(language, {
            sensitivity: "base",
            ignorePunctuation: false,
        });

        this.run();
    }

    private async run(searchQuery?: string): Promise<void> {
        console.log("Running member list store", this.props.room.id());
        const { joined: joinedSdk, invited: invitedSdk } =
            await this.loadMemberList(searchQuery);

        console.log("members", joinedSdk, invitedSdk);
        const newMemberMap = new Map<string, MemberWithSeparator>();

        // First add the joined room members
        for (const member of joinedSdk) {
            newMemberMap.set(member.userId, member);
        }

        // Then a separator if needed
        if (joinedSdk.length > 0 && invitedSdk.length > 0) {
            newMemberMap.set(SEPARATOR, SEPARATOR);
        }

        // Then add the invited room members
        for (const member of invitedSdk) {
            newMemberMap.set(member.userId, member);
        }

        const members = Array.from(newMemberMap.values());
        const memberCount = joinedSdk.length + invitedSdk.length;

        console.log("memberlist store run count", memberCount);
        console.log("memberlist store run newMemberMap", newMemberMap);

        this.snapshot.merge({
            members,
            memberCount,
        });
    }

    /**
     * Load the member list. Call this whenever the list may have changed.
     * @param searchQuery Optional search query to filter the list.
     * @returns A list of filtered and sorted room members, grouped by membership.
     */
    private async loadMemberList(
        searchQuery?: string,
    ): Promise<Record<"joined" | "invited", RoomMember[]>> {
        const members = await this.loadMembers();

        // Filter then sort as it's more efficient than sorting tons of members we will just filter out later.
        // Also sort each group, as there's no point comparing invited/joined users when they aren't in the same list!
        const membersByMembership = this.filterMembers(members, searchQuery);
        console.log("filtered members in loadmemberlist", membersByMembership);
        membersByMembership.joined.sort((a: RoomMember, b: RoomMember) => {
            return this.sortMembers(a, b);
        });
        membersByMembership.invited.sort((a: RoomMember, b: RoomMember) => {
            return this.sortMembers(a, b);
        });

        return {
            joined: membersByMembership.joined,
            invited: membersByMembership.invited,
        };
    }

    private async loadMembers(): Promise<RoomMember[]> {
        const members = await this.props.room.members();
        const allMembers: RoomMember[] = [];

        if (members.len()) {
            let chunk = members.nextChunk(100);
            while (chunk) {
                allMembers.push(...chunk);
                chunk = members.nextChunk(100);
            }
        }

        return allMembers;
    }

    /**
     * Filter out members based on an optional search query. Groups by membership state.
     * @param members The list of members to filter.
     * @param query The textual query to filter based on.
     * @returns An object with a list of joined and invited users respectively.
     */
    private filterMembers(
        members: Array<RoomMember>,
        query?: string,
    ): Record<"joined" | "invited", RoomMember[]> {
        const result: Record<"joined" | "invited", RoomMember[]> = {
            joined: [],
            invited: [],
        };
        for (const m of members) {
            if (
                m.membership.tag !== MembershipState_Tags.Join &&
                m.membership.tag !== MembershipState_Tags.Invite
            ) {
                continue; // bail early for left/banned users
            }

            if (query) {
                const queryString = query.toLowerCase();
                const matchesName = m.displayName
                    ?.toLowerCase()
                    .includes(queryString);
                const matchesId = m.userId.toLowerCase().includes(queryString);
                if (!matchesName && !matchesId) {
                    continue;
                }
            }

            switch (m.membership.tag) {
                case MembershipState_Tags.Join:
                    result.joined.push(m);
                    break;
                case MembershipState_Tags.Invite:
                    result.invited.push(m);
                    break;
            }
        }
        return result;
    }

    /**
     * Sort algorithm for room members.
     * @param memberA
     * @param memberB
     * @returns Negative if A comes before B, 0 if A and B are equivalent, Positive is A comes after B.
     */
    private sortMembers(memberA: RoomMember, memberB: RoomMember): number {
        // order by presence, with "active now" first.
        // ...and then by power level
        // ...and then by last active
        // ...and then alphabetically.
        // We could tiebreak instead by "last recently spoken in this room" if we wanted to.

        const userA = memberA;
        const userB = memberB;

        if (!userA && !userB) return 0;
        if (userA && !userB) return -1;
        if (!userA && userB) return 1;

        // Second by power level
        if (memberA.powerLevel !== memberB.powerLevel) {
            // Convert to Number in case powerLevel is bigint
            return Number(memberB.powerLevel) - Number(memberA.powerLevel);
        }

        // Fourth by name (alphabetical)
        return this.collator.compare(
            this.canonicalisedName(memberA.displayName ?? ""),
            this.canonicalisedName(memberB.displayName ?? ""),
        );
    }

    /**
     * Calculate the canonicalised name for the input name.
     * @param name The member display name
     * @returns The name to sort on
     */
    private canonicalisedName(name: string): string {
        let result = this.sortNames.get(name);
        if (result) {
            return result;
        }
        result = (name[0] === "@" ? name.slice(1) : name).replace(
            SORT_REGEX,
            "",
        );
        this.sortNames.set(name, result);
        return result;
    }

    public search(query: string): void {
        this.run(query);
    }
}
