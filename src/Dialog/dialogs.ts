/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

// Component
export { Dialog, type DialogProps } from "./Dialog.tsx";

// ViewModel
export {
    DialogViewModel,
    type DialogViewModelProps,
} from "./DialogViewModel";

// Types
export type {
    DialogViewSnapshot,
    DialogViewActions,
    DialogResult,
} from "./dialog-view.types";

// Modal Manager
export { ModalManager, type DialogHandle } from "../ModalManager.tsx";
