/*
 * Copyright 2026 Element Creations Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import type { ViewModel } from "@element-hq/web-shared-components";

/**
 * A view model whose snapshot never changes, for shared views that only
 * display data we already have (e.g. a timestamp or a redacted message).
 */
export class StaticViewModel<T> implements ViewModel<T> {
    public constructor(private readonly snapshot: T) {}

    public getSnapshot = (): T => this.snapshot;

    public subscribe = (): (() => void) => () => {};
}
