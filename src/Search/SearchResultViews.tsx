/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import ChatIcon from "@vector-im/compound-design-tokens/assets/web/icons/chat";
import ChevronDownIcon from "@vector-im/compound-design-tokens/assets/web/icons/chevron-down";
import CopyIcon from "@vector-im/compound-design-tokens/assets/web/icons/copy";
import FilterIcon from "@vector-im/compound-design-tokens/assets/web/icons/filter";
import HistoryIcon from "@vector-im/compound-design-tokens/assets/web/icons/history";
import OverflowHorizontalIcon from "@vector-im/compound-design-tokens/assets/web/icons/overflow-horizontal";
import SearchIcon from "@vector-im/compound-design-tokens/assets/web/icons/search";
import { ChatFilter, IconButton, Link, Tooltip } from "@vector-im/compound-web";
import classNames from "classnames";
import type { JSX, ReactNode } from "react";
import BaseAvatar from "../MemberList/BaseAvatar";
import type { PersonResult, RoomResult } from "./DirectorySearchViewModel";
import styles from "./GlobalSearch.module.css";
import type { GlobalSearchFilter } from "./GlobalSearchViewModel";
import type { MessageResultItem } from "./MessageSearchViewModel";

// ── Text highlight ────────────────────────────────────────────────────────────

interface HighlightedTextProps {
    text: string;
    query: string;
    className?: string;
}

/** Render `text` with every case-insensitive occurrence of `query` marked. */
export function HighlightedText({
    text,
    query,
    className,
}: HighlightedTextProps): JSX.Element {
    const trimmed = query.trim();
    if (!trimmed) return <span className={className}>{text}</span>;

    const lcText = text.toLowerCase();
    const lcQuery = trimmed.toLowerCase();
    const parts: ReactNode[] = [];
    let cursor = 0;
    let idx = lcText.indexOf(lcQuery);
    while (idx !== -1) {
        if (idx > cursor) parts.push(text.slice(cursor, idx));
        parts.push(
            <mark key={idx} className={styles.highlight}>
                {text.slice(idx, idx + lcQuery.length)}
            </mark>,
        );
        cursor = idx + lcQuery.length;
        idx = lcText.indexOf(lcQuery, cursor);
    }
    if (cursor < text.length) parts.push(text.slice(cursor));

    return <span className={className}>{parts}</span>;
}

// ── Filter chips ──────────────────────────────────────────────────────────────

interface FilterChipsProps {
    filters: readonly GlobalSearchFilter[];
    active: GlobalSearchFilter;
    onChange: (filter: GlobalSearchFilter) => void;
}

export function FilterChips({
    filters,
    active,
    onChange,
}: FilterChipsProps): JSX.Element {
    return (
        <div
            role="tablist"
            aria-label="Search filters"
            className={styles.filterBar}
        >
            {filters.map((filter) => (
                <ChatFilter
                    key={filter}
                    selected={active === filter}
                    onClick={() => onChange(filter)}
                >
                    {filter}
                </ChatFilter>
            ))}
        </div>
    );
}

// ── Dropdown rows ─────────────────────────────────────────────────────────────

export function SectionHeader({ label }: { label: string }): JSX.Element {
    return <div className={styles.sectionHeader}>{label}</div>;
}

function Row({
    onClick,
    children,
    className,
}: {
    onClick: () => void;
    children: ReactNode;
    className?: string;
}): JSX.Element {
    return (
        <button
            type="button"
            onClick={onClick}
            className={classNames(styles.clickable, styles.row, className)}
        >
            {children}
        </button>
    );
}

function RowDetails({
    primary,
    secondary,
}: {
    primary: string;
    secondary?: string;
}): JSX.Element {
    return (
        <span className={styles.rowDetails}>
            <span className={classNames(styles.rowPrimary, styles.truncate)}>
                {primary}
            </span>
            {secondary && (
                <span
                    className={classNames(styles.rowSecondary, styles.truncate)}
                >
                    {secondary}
                </span>
            )}
        </span>
    );
}

export function PersonRow({
    person,
    onClick,
}: {
    person: PersonResult;
    onClick: () => void;
}): JSX.Element {
    return (
        <Row onClick={onClick}>
            <BaseAvatar
                idName={person.userId}
                name={person.name}
                url={person.avatarUrl}
                size="32px"
            />
            <RowDetails primary={person.name} secondary={person.userId} />
        </Row>
    );
}

export function RoomRow({
    room,
    onClick,
}: {
    room: Pick<RoomResult, "roomId" | "name" | "address" | "avatarUrl"> & {
        isSpace?: boolean;
    };
    onClick: () => void;
}): JSX.Element {
    return (
        <Row onClick={onClick}>
            <BaseAvatar
                idName={room.roomId}
                name={room.name}
                url={room.avatarUrl}
                size="32px"
                type={room.isSpace ? "square" : "round"}
            />
            <RowDetails
                primary={room.name}
                secondary={room.address ?? room.roomId}
            />
        </Row>
    );
}

export type SearchTypeIconKind = "message" | "recent" | "filter";

const TYPE_ICONS: Record<SearchTypeIconKind, JSX.Element> = {
    message: <ChatIcon />,
    recent: <HistoryIcon />,
    filter: <FilterIcon />,
};

export function SearchTypeIcon({
    kind,
}: {
    kind: SearchTypeIconKind;
}): JSX.Element {
    return (
        <span className={styles.typeIcon} aria-hidden="true">
            {TYPE_ICONS[kind]}
        </span>
    );
}

/** A row with a type icon and a label, e.g. a filter command or messages CTA. */
export function LabelRow({
    icon,
    children,
    onClick,
}: {
    icon: SearchTypeIconKind;
    children: ReactNode;
    onClick: () => void;
}): JSX.Element {
    return (
        <Row onClick={onClick}>
            <SearchTypeIcon kind={icon} />
            <span className={classNames(styles.commandLabel, styles.truncate)}>
                {children}
            </span>
        </Row>
    );
}

/** The "Search results for: …" fallback row, hinting at Enter. */
export function SearchForRow({
    query,
    onClick,
}: {
    query: string;
    onClick: () => void;
}): JSX.Element {
    return (
        <Row onClick={onClick} className={styles.searchFor}>
            <span className={styles.truncate}>
                Search results for:{" "}
                <span className={styles.searchForQuery}>{query}</span>
            </span>
            <kbd className={styles.kbd}>Enter</kbd>
        </Row>
    );
}

export function Notice({
    icon,
    children,
}: {
    icon?: "history";
    children: ReactNode;
}): JSX.Element {
    return (
        <div className={styles.notice}>
            {icon === "history" && <HistoryIcon />}
            <span>{children}</span>
        </div>
    );
}

export function ViewAllButton({
    label,
    onClick,
}: {
    label: string;
    onClick: () => void;
}): JSX.Element {
    return (
        <div className={styles.viewAll}>
            <button
                type="button"
                className={styles.viewAllButton}
                onClick={onClick}
            >
                {label}
            </button>
        </div>
    );
}

// ── Full-view cards ───────────────────────────────────────────────────────────

export function FullViewSectionHeader({
    title,
    compact,
}: {
    title: string;
    compact?: boolean;
}): JSX.Element {
    return (
        <h2
            className={classNames(styles.fullViewSectionHeader, {
                [styles.compact]: compact,
            })}
        >
            {title}
        </h2>
    );
}

function Card({
    onClick,
    children,
}: {
    onClick: () => void;
    children: ReactNode;
}): JSX.Element {
    return (
        // biome-ignore lint/a11y/useSemanticElements: cards hold their own buttons, which can't nest in a <button>
        <div
            role="button"
            tabIndex={0}
            onClick={onClick}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onClick();
                }
            }}
            className={classNames(styles.clickable, styles.card)}
        >
            {children}
        </div>
    );
}

function CardDetails({
    primary,
    secondary,
    query,
}: {
    primary: string;
    secondary?: string;
    query: string;
}): JSX.Element {
    return (
        <div className={styles.cardDetails}>
            <HighlightedText
                text={primary}
                query={query}
                className={classNames(styles.cardPrimary, styles.truncate)}
            />
            {secondary && (
                <HighlightedText
                    text={secondary}
                    query={query}
                    className={classNames(
                        styles.cardSecondary,
                        styles.truncate,
                    )}
                />
            )}
        </div>
    );
}

export function PersonCard({
    person,
    query,
    onClick,
}: {
    person: PersonResult;
    query: string;
    onClick: () => void;
}): JSX.Element {
    const copyLink = (): void => {
        navigator.clipboard
            .writeText(`https://matrix.to/#/${person.userId}`)
            .catch((e) => console.error("Failed to copy user link", e));
    };
    return (
        <Card onClick={onClick}>
            <BaseAvatar
                idName={person.userId}
                name={person.name}
                url={person.avatarUrl}
                size="36px"
            />
            <CardDetails
                primary={person.name}
                secondary={person.userId}
                query={query}
            />
            <div
                role="toolbar"
                aria-label="Actions"
                className={styles.cardActions}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Tooltip label="More">
                    <IconButton size="28px" aria-label="More">
                        <OverflowHorizontalIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip label="Copy link">
                    <IconButton
                        size="28px"
                        aria-label="Copy link"
                        onClick={copyLink}
                    >
                        <CopyIcon />
                    </IconButton>
                </Tooltip>
            </div>
        </Card>
    );
}

export function RoomCard({
    room,
    query,
    onClick,
}: {
    room: RoomResult;
    query: string;
    onClick: () => void;
}): JSX.Element {
    return (
        <Card onClick={onClick}>
            <BaseAvatar
                idName={room.roomId}
                name={room.name}
                url={room.avatarUrl}
                size="36px"
                type={room.kind === "space" ? "square" : "round"}
            />
            <CardDetails
                primary={room.name}
                secondary={room.address}
                query={query}
            />
        </Card>
    );
}

function formatMessageDate(timestamp: number): string {
    const date = new Date(timestamp);
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    const hh = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    return `${dd}/${mm}/${yyyy} ${hh}:${min}`;
}

export function MessageCard({
    message,
    query,
    onClick,
}: {
    message: MessageResultItem;
    query: string;
    onClick: () => void;
}): JSX.Element {
    const sender = message.senderDisplayName ?? message.sender;
    return (
        <Card onClick={onClick}>
            <BaseAvatar
                idName={message.sender}
                name={sender}
                url={message.senderAvatarUrl}
                size="40px"
            />
            <div className={styles.cardDetails}>
                <div className={styles.messageHeader}>
                    <HighlightedText
                        text={sender}
                        query={query}
                        className={classNames(
                            styles.messageSender,
                            styles.truncate,
                        )}
                    />
                    <span className={styles.messageMeta}>
                        {message.roomName ? `${message.roomName} · ` : ""}
                        {formatMessageDate(message.timestamp)}
                    </span>
                </div>
                <HighlightedText
                    text={message.body}
                    query={query}
                    className={classNames(styles.messageBody, styles.truncate)}
                />
            </div>
        </Card>
    );
}

const MESSAGE_SUB_FILTERS = ["Type", "Date", "Person"] as const;

/** Placeholder sub-filters from the design; not wired up yet. */
export function MessageSubFilters(): JSX.Element {
    return (
        <div className={styles.subFilters}>
            {MESSAGE_SUB_FILTERS.map((label) => (
                <button key={label} type="button" className={styles.subFilter}>
                    {label}
                    <ChevronDownIcon />
                </button>
            ))}
        </div>
    );
}

export function MoreLink({
    label,
    onClick,
}: {
    label: string;
    onClick: () => void;
}): JSX.Element {
    return (
        <div className={styles.more}>
            <Link
                kind="primary"
                href="#"
                onClick={(e) => {
                    e.preventDefault();
                    onClick();
                }}
            >
                {label}
            </Link>
        </div>
    );
}

export function EmptyState({
    title,
    description,
}: {
    title: string;
    description: string;
}): JSX.Element {
    return (
        <div className={styles.emptyState}>
            <div className={styles.emptyIcon} aria-hidden="true">
                <SearchIcon />
            </div>
            <div className={styles.emptyText}>
                <span className={styles.emptyTitle}>{title}</span>
                <span className={styles.emptyDescription}>{description}</span>
            </div>
        </div>
    );
}
