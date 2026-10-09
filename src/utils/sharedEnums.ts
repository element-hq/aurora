/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import type {
    ImageBodyViewPlaceholder,
    ImageBodyViewState,
    TextualBodyViewKind,
} from "@element-hq/web-shared-components";

/*
 * The shared components declare these as const enums, which can't be read
 * with isolatedModules, so we spell out their values here.
 * Shared component could just use a regular enum if we wanted this to work.
 */

export const TextualBodyKind = {
    TEXT: "TEXT" as TextualBodyViewKind,
    NOTICE: "NOTICE" as TextualBodyViewKind,
    EMOTE: "EMOTE" as TextualBodyViewKind,
    CAPTION: "CAPTION" as TextualBodyViewKind,
};

export const ImageBodyState = {
    ERROR: "ERROR" as ImageBodyViewState,
    HIDDEN: "HIDDEN" as ImageBodyViewState,
    READY: "READY" as ImageBodyViewState,
};

export const ImageBodyPlaceholder = {
    NONE: "NONE" as ImageBodyViewPlaceholder,
    SPINNER: "SPINNER" as ImageBodyViewPlaceholder,
    BLURHASH: "BLURHASH" as ImageBodyViewPlaceholder,
};
