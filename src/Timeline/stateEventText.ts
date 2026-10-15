/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

/*
 * The sentences shown for state events: "Alice joined the room", "You changed the topic to: …".
 *
 * Ported from element-x-ios's RoomStateEventStringBuilder, which works from the same Rust SDK
 * types, so aurora describes and hides the same events the mobile apps do. The strings are
 * element-x's English ones (shared with Android through Localazy), named by their Localazy keys
 * so they can be swapped for translations later.
 */

import {
    type EventTimelineItem,
    MembershipChange,
    OtherState,
    ProfileDetails,
    RoomPinnedEventsChange,
    TimelineItemContent,
} from "../index.web";

const strings = {
    state_event_avatar_changed_too: () => "(avatar was changed too)",
    state_event_avatar_url_changed: (member: string) =>
        `${member} changed their avatar`,
    state_event_avatar_url_changed_by_you: () => "You changed your avatar",
    state_event_display_name_changed_from: (
        member: string,
        from: string,
        to: string,
    ) => `${member} changed their display name from ${from} to ${to}`,
    state_event_display_name_changed_from_by_you: (from: string, to: string) =>
        `You changed your display name from ${from} to ${to}`,
    state_event_display_name_removed: (member: string, was: string) =>
        `${member} removed their display name (it was ${was})`,
    state_event_display_name_removed_by_you: (was: string) =>
        `You removed your display name (it was ${was})`,
    state_event_display_name_set: (member: string, name: string) =>
        `${member} set their display name to ${name}`,
    state_event_display_name_set_by_you: (name: string) =>
        `You set your display name to ${name}`,
    state_event_room_avatar_changed: (sender: string) =>
        `${sender} changed the room avatar`,
    state_event_room_avatar_changed_by_you: () => "You changed the room avatar",
    state_event_room_avatar_removed: (sender: string) =>
        `${sender} removed the room avatar`,
    state_event_room_avatar_removed_by_you: () => "You removed the room avatar",
    state_event_room_ban: (sender: string, member: string) =>
        `${sender} banned ${member}`,
    state_event_room_ban_by_you: (member: string) => `You banned ${member}`,
    state_event_room_ban_by_you_with_reason: (member: string, reason: string) =>
        `You banned ${member}: ${reason}`,
    state_event_room_ban_with_reason: (
        sender: string,
        member: string,
        reason: string,
    ) => `${sender} banned ${member}: ${reason}`,
    state_event_room_created: (sender: string) => `${sender} created the room`,
    state_event_room_created_by_you: () => "You created the room",
    state_event_room_invite: (sender: string, member: string) =>
        `${sender} invited ${member}`,
    state_event_room_invite_accepted: (member: string) =>
        `${member} accepted the invite`,
    state_event_room_invite_accepted_by_you: () => "You accepted the invite",
    state_event_room_invite_by_you: (member: string) => `You invited ${member}`,
    state_event_room_invite_you: (sender: string) => `${sender} invited you`,
    state_event_room_join: (sender: string) => `${sender} joined the room`,
    state_event_room_join_by_you: () => "You joined the room",
    state_event_room_knock: (member: string) =>
        `${member} is requesting to join`,
    state_event_room_knock_accepted: (sender: string, member: string) =>
        `${sender} granted access to ${member}`,
    state_event_room_knock_accepted_by_you: (member: string) =>
        `You allowed ${member} to join`,
    state_event_room_knock_by_you: () => "You requested to join",
    state_event_room_knock_denied: (sender: string, member: string) =>
        `${sender} rejected ${member}'s request to join`,
    state_event_room_knock_denied_by_you: (member: string) =>
        `You rejected ${member}'s request to join`,
    state_event_room_knock_denied_you: (sender: string) =>
        `${sender} rejected your request to join`,
    state_event_room_knock_retracted: (member: string) =>
        `${member} is no longer interested in joining`,
    state_event_room_knock_retracted_by_you: () =>
        "You cancelled your request to join",
    state_event_room_leave: (member: string) => `${member} left the room`,
    state_event_room_leave_by_you: () => "You left the room",
    state_event_room_name_changed: (sender: string, name: string) =>
        `${sender} changed the room name to: ${name}`,
    state_event_room_name_changed_by_you: (name: string) =>
        `You changed the room name to: ${name}`,
    state_event_room_name_removed: (sender: string) =>
        `${sender} removed the room name`,
    state_event_room_name_removed_by_you: () => "You removed the room name",
    state_event_room_pinned_events_changed: (sender: string) =>
        `${sender} changed the pinned messages`,
    state_event_room_pinned_events_changed_by_you: () =>
        "You changed the pinned messages",
    state_event_room_pinned_events_pinned: (sender: string) =>
        `${sender} pinned a message`,
    state_event_room_pinned_events_pinned_by_you: () => "You pinned a message",
    state_event_room_pinned_events_unpinned: (sender: string) =>
        `${sender} unpinned a message`,
    state_event_room_pinned_events_unpinned_by_you: () =>
        "You unpinned a message",
    state_event_room_reject: (sender: string) =>
        `${sender} rejected the invitation`,
    state_event_room_reject_by_you: () => "You rejected the invitation",
    state_event_room_remove: (sender: string, member: string) =>
        `${sender} removed ${member}`,
    state_event_room_remove_by_you: (member: string) => `You removed ${member}`,
    state_event_room_remove_by_you_with_reason: (
        member: string,
        reason: string,
    ) => `You removed ${member}: ${reason}`,
    state_event_room_remove_with_reason: (
        sender: string,
        member: string,
        reason: string,
    ) => `${sender} removed ${member}: ${reason}`,
    state_event_room_third_party_invite: (sender: string, invitee: string) =>
        `${sender} sent an invitation to ${invitee} to join the room`,
    state_event_room_third_party_invite_by_you: (invitee: string) =>
        `You sent an invitation to ${invitee} to join the room`,
    state_event_room_third_party_revoked_invite: (
        sender: string,
        member: string,
    ) => `${sender} revoked the invitation for ${member} to join the room`,
    state_event_room_third_party_revoked_invite_by_you: (member: string) =>
        `You revoked the invitation for ${member} to join the room`,
    state_event_room_topic_changed: (sender: string, topic: string) =>
        `${sender} changed the topic to: ${topic}`,
    state_event_room_topic_changed_by_you: (topic: string) =>
        `You changed the topic to: ${topic}`,
    state_event_room_topic_removed: (sender: string) =>
        `${sender} removed the room topic`,
    state_event_room_topic_removed_by_you: () => "You removed the room topic",
    state_event_room_unban: (sender: string, member: string) =>
        `${sender} unbanned ${member}`,
    state_event_room_unban_by_you: (member: string) => `You unbanned ${member}`,
    common_encryption_enabled: () => "Encryption enabled",
};

/** The name to use for the event's sender: their display name, or their user ID. */
function senderName(event: EventTimelineItem): string {
    return (
        (ProfileDetails.Ready.instanceOf(event.senderProfile) &&
            event.senderProfile.inner.displayName) ||
        event.sender
    );
}

function membershipText(
    change: MembershipChange | undefined,
    reason: string | undefined,
    memberUserId: string,
    memberDisplayName: string | undefined,
    sender: string,
    senderIsYou: boolean,
    ownUserId: string | undefined,
): string | undefined {
    if (change === undefined) return undefined;
    const memberIsYou = memberUserId === ownUserId;
    const member = memberDisplayName ?? memberUserId;

    switch (change) {
        case MembershipChange.Joined:
            return memberIsYou
                ? strings.state_event_room_join_by_you()
                : strings.state_event_room_join(sender);
        case MembershipChange.Left:
            return memberIsYou
                ? strings.state_event_room_leave_by_you()
                : strings.state_event_room_leave(member);
        case MembershipChange.Banned:
        case MembershipChange.KickedAndBanned:
            if (senderIsYou) {
                return reason
                    ? strings.state_event_room_ban_by_you_with_reason(
                          member,
                          reason,
                      )
                    : strings.state_event_room_ban_by_you(member);
            }
            return reason
                ? strings.state_event_room_ban_with_reason(
                      sender,
                      member,
                      reason,
                  )
                : strings.state_event_room_ban(sender, member);
        case MembershipChange.Unbanned:
            return senderIsYou
                ? strings.state_event_room_unban_by_you(member)
                : strings.state_event_room_unban(sender, member);
        case MembershipChange.Kicked:
            if (senderIsYou) {
                return reason
                    ? strings.state_event_room_remove_by_you_with_reason(
                          member,
                          reason,
                      )
                    : strings.state_event_room_remove_by_you(member);
            }
            return reason
                ? strings.state_event_room_remove_with_reason(
                      sender,
                      member,
                      reason,
                  )
                : strings.state_event_room_remove(sender, member);
        case MembershipChange.Invited:
            if (senderIsYou)
                return strings.state_event_room_invite_by_you(member);
            if (memberIsYou) return strings.state_event_room_invite_you(sender);
            return strings.state_event_room_invite(sender, member);
        case MembershipChange.InvitationAccepted:
            return memberIsYou
                ? strings.state_event_room_invite_accepted_by_you()
                : strings.state_event_room_invite_accepted(member);
        case MembershipChange.InvitationRejected:
            return memberIsYou
                ? strings.state_event_room_reject_by_you()
                : strings.state_event_room_reject(sender);
        case MembershipChange.InvitationRevoked:
            return senderIsYou
                ? strings.state_event_room_third_party_revoked_invite_by_you(
                      member,
                  )
                : strings.state_event_room_third_party_revoked_invite(
                      sender,
                      member,
                  );
        case MembershipChange.Knocked:
            return memberIsYou
                ? strings.state_event_room_knock_by_you()
                : strings.state_event_room_knock(member);
        case MembershipChange.KnockAccepted:
            return senderIsYou
                ? strings.state_event_room_knock_accepted_by_you(member)
                : strings.state_event_room_knock_accepted(sender, member);
        case MembershipChange.KnockRetracted:
            return memberIsYou
                ? strings.state_event_room_knock_retracted_by_you()
                : strings.state_event_room_knock_retracted(member);
        case MembershipChange.KnockDenied:
            if (senderIsYou)
                return strings.state_event_room_knock_denied_by_you(member);
            if (memberIsYou)
                return strings.state_event_room_knock_denied_you(sender);
            return strings.state_event_room_knock_denied(sender, member);
        default:
            // None, Error and NotImplemented: nothing useful to tell the user.
            return undefined;
    }
}

/**
 * The SDK only sets the new and previous values of whichever of the display name and avatar
 * changed. Display name changes name the member by user ID, as element-x does, since their
 * display name is the thing that changed.
 */
function profileChangeText(
    displayName: string | undefined,
    prevDisplayName: string | undefined,
    avatarUrl: string | undefined,
    prevAvatarUrl: string | undefined,
    memberId: string,
    memberDisplayName: string,
    memberIsYou: boolean,
): string | undefined {
    const displayNameChanged = displayName !== prevDisplayName;
    const avatarChanged = avatarUrl !== prevAvatarUrl;

    if (displayNameChanged && avatarChanged) {
        const text = profileChangeText(
            displayName,
            prevDisplayName,
            undefined,
            undefined,
            memberId,
            memberDisplayName,
            memberIsYou,
        );
        return text && `${text}\n${strings.state_event_avatar_changed_too()}`;
    }
    if (displayNameChanged) {
        if (displayName !== undefined && prevDisplayName !== undefined) {
            return memberIsYou
                ? strings.state_event_display_name_changed_from_by_you(
                      prevDisplayName,
                      displayName,
                  )
                : strings.state_event_display_name_changed_from(
                      memberId,
                      prevDisplayName,
                      displayName,
                  );
        }
        if (displayName !== undefined) {
            return memberIsYou
                ? strings.state_event_display_name_set_by_you(displayName)
                : strings.state_event_display_name_set(memberId, displayName);
        }
        if (prevDisplayName !== undefined) {
            return memberIsYou
                ? strings.state_event_display_name_removed_by_you(
                      prevDisplayName,
                  )
                : strings.state_event_display_name_removed(
                      memberId,
                      prevDisplayName,
                  );
        }
        return undefined;
    }
    if (avatarChanged) {
        return memberIsYou
            ? strings.state_event_avatar_url_changed_by_you()
            : strings.state_event_avatar_url_changed(memberDisplayName);
    }
    return undefined;
}

function otherStateText(
    state: OtherState,
    sender: string,
    senderIsYou: boolean,
): string | undefined {
    if (OtherState.RoomAvatar.instanceOf(state)) {
        if (state.inner.url) {
            return senderIsYou
                ? strings.state_event_room_avatar_changed_by_you()
                : strings.state_event_room_avatar_changed(sender);
        }
        return senderIsYou
            ? strings.state_event_room_avatar_removed_by_you()
            : strings.state_event_room_avatar_removed(sender);
    }
    if (OtherState.RoomCreate.instanceOf(state)) {
        return senderIsYou
            ? strings.state_event_room_created_by_you()
            : strings.state_event_room_created(sender);
    }
    if (OtherState.RoomEncryption.instanceOf(state)) {
        return strings.common_encryption_enabled();
    }
    if (OtherState.RoomName.instanceOf(state)) {
        const { name } = state.inner;
        if (name) {
            return senderIsYou
                ? strings.state_event_room_name_changed_by_you(name)
                : strings.state_event_room_name_changed(sender, name);
        }
        return senderIsYou
            ? strings.state_event_room_name_removed_by_you()
            : strings.state_event_room_name_removed(sender);
    }
    if (OtherState.RoomThirdPartyInvite.instanceOf(state)) {
        const invitee = state.inner.displayName;
        if (!invitee) return undefined;
        return senderIsYou
            ? strings.state_event_room_third_party_invite_by_you(invitee)
            : strings.state_event_room_third_party_invite(sender, invitee);
    }
    if (OtherState.RoomTopic.instanceOf(state)) {
        const { topic } = state.inner;
        if (topic) {
            return senderIsYou
                ? strings.state_event_room_topic_changed_by_you(topic)
                : strings.state_event_room_topic_changed(sender, topic);
        }
        return senderIsYou
            ? strings.state_event_room_topic_removed_by_you()
            : strings.state_event_room_topic_removed(sender);
    }
    if (OtherState.RoomPinnedEvents.instanceOf(state)) {
        switch (state.inner.change) {
            case RoomPinnedEventsChange.Added:
                return senderIsYou
                    ? strings.state_event_room_pinned_events_pinned_by_you()
                    : strings.state_event_room_pinned_events_pinned(sender);
            case RoomPinnedEventsChange.Removed:
                return senderIsYou
                    ? strings.state_event_room_pinned_events_unpinned_by_you()
                    : strings.state_event_room_pinned_events_unpinned(sender);
            default:
                return senderIsYou
                    ? strings.state_event_room_pinned_events_changed_by_you()
                    : strings.state_event_room_pinned_events_changed(sender);
        }
    }
    // Power levels, join rules, history visibility, guest access, server ACLs, aliases,
    // tombstones, space links, policy rules and custom state: the SDK either doesn't tell us
    // what changed or there's nothing useful to say, so these aren't shown.
    return undefined;
}

/** Whether a timeline item is a state event, shown as a line of text rather than a message. */
export function isStateEvent(event: EventTimelineItem): boolean {
    return (
        TimelineItemContent.RoomMembership.instanceOf(event.content) ||
        TimelineItemContent.ProfileChange.instanceOf(event.content) ||
        TimelineItemContent.State.instanceOf(event.content)
    );
}

/**
 * The sentence describing a state event, or undefined if it isn't one or shouldn't be shown.
 */
export function stateEventText(
    event: EventTimelineItem,
    ownUserId: string | undefined,
): string | undefined {
    const sender = senderName(event);
    const senderIsYou = event.isOwn;
    const { content } = event;

    if (TimelineItemContent.RoomMembership.instanceOf(content)) {
        const { change, reason, userId, userDisplayName } = content.inner;
        return membershipText(
            change,
            reason,
            userId,
            userDisplayName,
            sender,
            senderIsYou,
            ownUserId,
        );
    }
    if (TimelineItemContent.ProfileChange.instanceOf(content)) {
        const { displayName, prevDisplayName, avatarUrl, prevAvatarUrl } =
            content.inner;
        return profileChangeText(
            displayName,
            prevDisplayName,
            avatarUrl,
            prevAvatarUrl,
            event.sender,
            sender,
            event.sender === ownUserId,
        );
    }
    if (TimelineItemContent.State.instanceOf(content)) {
        return otherStateText(content.inner.content, sender, senderIsYou);
    }
    return undefined;
}
