/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { EmojiPicker } from "@element-hq/web-shared-components";
import {
    type CSSProperties,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import { createPortal } from "react-dom";
import FocusLock from "react-focus-lock";
import type { EventOrTransactionId } from "../../generated/matrix_sdk_ffi";
import { getRecentEmojis, recordRecentEmoji } from "../../utils/recentEmojis";

/** The message the reaction picker was opened for, and the button that opened it. */
export interface ReactionPickerTarget {
    /** The timeline item's unique key. */
    tileId: string;
    itemId: EventOrTransactionId;
    anchor: HTMLElement;
    /** The reactions we've already made to the message. */
    selected: Set<string>;
}

/** The gap between the picker and the button that opened it, or the edge of the window. */
const MARGIN = 8;

function clamp(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(value, max));
}

/**
 * Put the picker above the button and lined up with its right edge, or below
 * it if there's no room above, while keeping it inside the window.
 */
function placeNear(
    anchor: DOMRect,
    width: number,
    height: number,
): CSSProperties {
    let top = anchor.top - height - MARGIN;
    if (top < MARGIN) top = anchor.bottom + MARGIN;
    return {
        top: clamp(top, MARGIN, window.innerHeight - height - MARGIN),
        left: clamp(
            anchor.right - width,
            MARGIN,
            window.innerWidth - width - MARGIN,
        ),
    };
}

interface ReactionPickerProps {
    target: ReactionPickerTarget;
    /** Whether we can take away a reaction we've already made. */
    canRedactOwn: boolean;
    onChoose: (key: string) => void;
    onFinished: () => void;
}

/**
 * The emoji picker for reacting to a message, floating next to the button
 * that opened it.
 */
export function ReactionPicker({
    target,
    canRedactOwn,
    onChoose,
    onFinished,
}: ReactionPickerProps) {
    const ref = useRef<HTMLDivElement>(null);
    // Invisible until we've measured it, but still focusable so the focus lock can move into it
    const [position, setPosition] = useState<CSSProperties>({ opacity: 0 });
    const [recentEmojis, setRecentEmojis] = useState(getRecentEmojis);

    useLayoutEffect(() => {
        const picker = ref.current;
        if (!picker) return;
        setPosition(
            placeNear(
                target.anchor.getBoundingClientRect(),
                picker.offsetWidth,
                picker.offsetHeight,
            ),
        );
    }, [target.anchor]);

    useEffect(() => {
        const onPointerDown = (e: PointerEvent): void => {
            const clicked = e.target as Node;
            // The button that opened the picker closes it itself
            if (ref.current?.contains(clicked)) return;
            if (target.anchor.contains(clicked)) return;
            onFinished();
        };
        document.addEventListener("pointerdown", onPointerDown);
        return () => document.removeEventListener("pointerdown", onPointerDown);
    }, [target.anchor, onFinished]);

    return createPortal(
        <FocusLock returnFocus>
            {/* Escape bubbles up from whichever part of the picker has focus */}
            {/* biome-ignore lint/a11y/noStaticElementInteractions: the picker inside handles its own keyboard use */}
            <div
                ref={ref}
                className="mx_ReactionPicker"
                style={position}
                onKeyDown={(e) => {
                    if (e.key !== "Escape") return;
                    e.stopPropagation();
                    onFinished();
                }}
            >
                <EmojiPicker
                    showQuickReactions
                    selectedEmojis={target.selected}
                    isEmojiDisabled={
                        canRedactOwn
                            ? undefined
                            : (unicode) => target.selected.has(unicode)
                    }
                    recentEmojis={recentEmojis}
                    onRecordRecent={(unicode) =>
                        setRecentEmojis(recordRecentEmoji(unicode))
                    }
                    onChoose={(unicode) => {
                        onChoose(unicode);
                        onFinished();
                        return true;
                    }}
                    onFinished={onFinished}
                />
            </div>
        </FocusLock>,
        document.body,
    );
}
