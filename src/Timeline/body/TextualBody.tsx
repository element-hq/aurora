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
    const contentVm = useMemo(
        () =>
            new StaticViewModel({
                body,
                formattedBody: sanitize(formatted),
                dir: "auto" as const,
            }),
        [body, formatted],
    );
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
