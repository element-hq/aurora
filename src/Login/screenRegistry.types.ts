/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import type { ViewModel } from "@element-hq/web-shared-components";

/**
 * Props that all screen components receive
 */
export interface ScreenProps<TViewModel = ViewModel<unknown>> {
    viewModel: TViewModel;
}
