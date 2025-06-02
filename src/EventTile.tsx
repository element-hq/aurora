import type { ReactElement } from "react";
import {
	TimelineItemKind,
	type VirtualTimelineItem,
	type TimelineItem,
	VirtualTimelineItemInnerType,
	type DayDivider,
	type EventTimelineItem,
	type MessageContent,
	ContentType,
	type ProfileChangeContent,
	type MembershipChangeContent,
	MembershipChange,
} from "./TimelineStore";
import { Avatar } from "@vector-im/compound-web";
import sanitizeHtml from "sanitize-html";

interface EventTileProp {
	item: TimelineItem;
	continuation: boolean;
}

function mxcToUrl(mxcUrl: string): string {
	const url = mxcUrl.replace(
		/^mxc:\/\//,
		"https://matrix.org/_matrix/media/v3/thumbnail/",
	);
	return `${url}?width=48&height=48`;
}

function getChangeDescription(membershipChange: string): string {
	switch (membershipChange) {
		case MembershipChange[MembershipChange.None]:
			return "did nothing";
		case MembershipChange[MembershipChange.Error]:
			return "<error>";
		case MembershipChange[MembershipChange.Joined]:
			return "joined";
		case MembershipChange[MembershipChange.Left]:
			return "left";
		case MembershipChange[MembershipChange.Banned]:
			return "was banned";
		case MembershipChange[MembershipChange.Unbanned]:
			return "was unbanned";
		case MembershipChange[MembershipChange.Kicked]:
			return "was kicked";
		case MembershipChange[MembershipChange.Invited]:
			return "was invited";
		case MembershipChange[MembershipChange.InvitationAccepted]:
			return "accepted an invite";
		case MembershipChange[MembershipChange.InvitationRejected]:
			return "rejected an invite";
		case MembershipChange[MembershipChange.InvitationRevoked]:
			return "was uninvited";
		case MembershipChange[MembershipChange.Knocked]:
			return "knocked";
		case MembershipChange[MembershipChange.KnockAccepted]:
			return "was accepted";
		case MembershipChange[MembershipChange.KnockRetracted]:
			return "stoped knocking";
		case MembershipChange[MembershipChange.KnockDenied]:
			return "was rejected";
		case MembershipChange[MembershipChange.NotImplemented]:
			return "<unimplemented>";
		default:
			return "<unknown>";
	}
}

export const EventTile: React.FC<EventTileProp> = ({ item, continuation }) => {
	switch (item.kind) {
		case TimelineItemKind.Virtual: {
			const virtual = item as VirtualTimelineItem;
			switch (virtual.virtualItem?.type) {
				case VirtualTimelineItemInnerType.DayDivider: {
					const dayDivider = virtual.virtualItem as DayDivider;
					return (
						<div className="mx_Separator">
							<span>
								&nbsp;&nbsp;{dayDivider.getDate().toDateString()}&nbsp;&nbsp;
							</span>
						</div>
					);
				}
				case VirtualTimelineItemInnerType.ReadMarker:
					return (
						<div className="mx_Separator mx_ReadMarker">
							<span>&nbsp;&nbsp;New Messages&nbsp;&nbsp;</span>
						</div>
					);
				default:
					return `Unknown virtual event ${virtual.virtualItem?.type}`;
			}
		}
		case TimelineItemKind.Event: {
			const event = item as EventTimelineItem;

			let body: string | ReactElement | undefined;
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			let stateChange: any;
			switch (event.getContent().type) {
				case ContentType[ContentType.Message]: {
					const message = (event.getContent() as MessageContent).getMessage();
					if (message.msgtype?.format === "org.matrix.custom.html") {
						const html = sanitizeHtml(message.msgtype?.formatted_body || "", {
							// FIXME: actually implement full sanitization as per react-sdk
							transformTags: {
								a: sanitizeHtml.simpleTransform("a", { target: "_blank" }),
							},
						});
						// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
						body = <span dangerouslySetInnerHTML={{ __html: html }} />;
					} else {
						body = message.msgtype?.body || "";
					}
					break;
				}
				case ContentType[ContentType.ProfileChange]: {
					const profileChange = (
						event.getContent() as ProfileChangeContent
					).getProfileChange();
					// biome-ignore lint/suspicious/noExplicitAny: <explanation>
					const changes: any[] = [];
					changes.push("changed their ");
					if (profileChange.avatar_url_change) {
						changes.push([
							"avatar from ",
							// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
							<Avatar
								className="mx_StateAvatar"
								name={
									event.getSenderProfile()?.display_name ||
									event.getSender().charAt(1)
								}
								id={event.getSender()}
								src={
									profileChange.avatar_url_change.old
										? mxcToUrl(profileChange.avatar_url_change.old)
										: ""
								}
								size="16px"
							/>,
							" to ",
							// biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
							<Avatar
								className="mx_StateAvatar"
								name={
									event.getSenderProfile()?.display_name ||
									event.getSender().charAt(1)
								}
								id={event.getSender()}
								src={
									profileChange.avatar_url_change.new
										? mxcToUrl(profileChange.avatar_url_change.new)
										: ""
								}
								size="16px"
							/>,
						]);
						if (profileChange.displayname_change)
							changes.push(" and changed their ");
					}
					if (profileChange.displayname_change) {
						changes.push(
							`displayname from ${profileChange.displayname_change.old} to ${profileChange.displayname_change.new}`,
						);
					}
					stateChange = changes;
					break;
				}
				case ContentType[ContentType.MembershipChange]: {
					const membershipChange = (
						event.getContent() as MembershipChangeContent
					).getMembershipChange();
					if (membershipChange.change) {
						stateChange = getChangeDescription(membershipChange.change);
					} else if (membershipChange.content.Redacted) {
						stateChange = `redacted ${membershipChange.content.Redacted?.membership}`;
					} else {
						stateChange = `unknown membership change ${membershipChange.content}`;
					}
					break;
				}
				case ContentType[ContentType.RedactedMessage]:
					body = <span className="mx_EventTile_redacted">redacted</span>;
					break;
				default:
					body = `Unknown event type ${event.getContent().type}`;
			}

			if (stateChange) {
				return (
					<div className="mx_StateEventTile">
						<Avatar
							className="mx_StateAvatar"
							name={
								event.getSenderProfile()?.display_name ||
								event.getSender().charAt(1)
							}
							id={event.getSender()}
							src={
								event.getSenderProfile()?.avatar_url
									? mxcToUrl(event.getSenderProfile()?.avatar_url || "")
									: ""
							}
							size="16px"
						/>{" "}
						{event.getSender()} {stateChange}
					</div>
				);
			}

			return (
				<div
					className={`mx_EventTile${
						continuation ? " mx_EventTile_continuation" : ""
					}`}
				>
					<span className="mx_Timestamp">
						{new Date(event.getTimestamp()).toLocaleTimeString()}
					</span>
					{!continuation ? (
						<>
							<span className="mx_Avatar">
								<Avatar
									name={
										event.getSenderProfile()?.display_name ||
										event.getSender().charAt(1)
									}
									id={event.getSender()}
									src={
										event.getSenderProfile()?.avatar_url
											? mxcToUrl(event.getSenderProfile()?.avatar_url || "")
											: ""
									}
									size="32px"
								/>
							</span>
							<span className="mx_Sender">
								{event.getSenderProfile()?.display_name
									? event.getSenderProfile()?.display_name
									: event.getSender()}
							</span>
						</>
					) : null}
					<span className="mx_Content">{body}</span>
				</div>
			);
		}
		default:
			return `Unknown timeline item ${item.kind}`;
	}
};
