/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import {
    EventContentBodyView,
    TextualBodyView,
    type TextualBodyViewKind,
} from "@element-hq/web-shared-components";
import classNames from "classnames";
import { useMemo } from "react";
import sanitizeHtml from "sanitize-html";
import {
    type FormattedBody,
    MessageFormat_Tags,
} from "../../generated/matrix_sdk_ffi";
import { StaticViewModel } from "../../utils/StaticViewModel";

interface TextualBodyProps {
    kind: TextualBodyViewKind;
    /** The plain text body, shown if there's no HTML body. */
    body: string;
    formatted?: FormattedBody;
    isEdited?: boolean;
    /** The sender's name, shown before an emote. */
    emoteSenderName?: string;
}

// One emoji: an RGI emoji sequence (optionally with the emoji presentation
// selector, but not the text one), or a lone regional indicator. Built with the
// constructor so platforms without regex v mode don't fail to parse this file;
// they just never get big emoji. The same as element-web's (HtmlUtils.tsx).
const BIG_EMOJI_REGEX = (() => {
    try {
        // biome-ignore lint/complexity/useRegexLiterals: a v-mode literal is a syntax error on platforms without it
        return new RegExp(
            "^(?:\\p{RGI_Emoji}(?!\\uFE0E)(?:(?<!\\uFE0F)\\uFE0F)?|[\\u{1f1e6}-\\u{1f1ff}])+$",
            "v",
        );
    } catch {
        return /(?!)/;
    }
})();

/** Whether a message is only emoji (ignoring spaces), so is shown large. */
function isEmojiOnly(body: string, formatted?: string): boolean {
    // A link whose text is emoji (e.g. a pill for an emoji-only name) isn't an emoji message
    if (formatted?.includes("http:") || formatted?.includes("https:")) {
        return false;
    }
    const stripped = body.replace(/[​\s]/g, "");
    return stripped.length > 0 && BIG_EMOJI_REGEX.test(stripped);
}

function sanitize(formatted?: FormattedBody): string | undefined {
    if (formatted?.format.tag !== MessageFormat_Tags.Html) return undefined;
    return sanitizeHtml(formatted.body, {
        // FIXME: actually implement full sanitization as per react-sdk
        transformTags: {
            a: sanitizeHtml.simpleTransform("a", {
                target: "_blank",
            }),
        },
    });
}

/**
 * The body of a text, notice or emote message, or a media caption.
 */
export function TextualBody({
    kind,
    body,
    formatted,
    isEdited,
    emoteSenderName,
}: TextualBodyProps) {
    const contentVm = useMemo(() => {
        const formattedBody = sanitize(formatted);
        const bigEmoji = isEmojiOnly(body, formattedBody);
        return new StaticViewModel({
            body,
            formattedBody,
            dir: "auto" as const,
            // The classes element-web gives a message body, which App.css styles
            className: classNames("mx_EventTile_body", {
                mx_EventTile_bigEmoji: bigEmoji,
                "markdown-body": formattedBody !== undefined && !bigEmoji,
            }),
        });
    }, [body, formatted]);
    const vm = useMemo(
        () =>
            new StaticViewModel({
                kind,
                showEditedMarker: isEdited,
                editedMarkerText: "(edited)",
                emoteSenderName,
            }),
        [kind, isEdited, emoteSenderName],
    );

    return (
        <TextualBodyView
            vm={vm}
            body={<EventContentBodyView as="div" vm={contentVm} />}
        />
    );
}
