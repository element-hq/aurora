/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

/**
 * Snapshot for the Dialog view model.
 * This represents the current state of a dialog.
 */
export interface DialogViewSnapshot {
    /**
     * Whether the dialog can be submitted.
     * When false, the submit button will be disabled.
     */
    canSubmit: boolean;

    /**
     * The title displayed in the dialog header.
     */
    title: string;

    /**
     * The label for the submit/action button.
     */
    actionLabel: string;

    /**
     * Optional label for the cancel button.
     * Defaults to "Cancel" if not provided.
     */
    cancelLabel?: string;

    /**
     * Whether the dialog is currently processing a submit action.
     */
    isSubmitting?: boolean;

    /**
     * Optional error message to display.
     */
    error?: string;
}

/**
 * Actions available on the Dialog view model.
 */
export interface DialogViewActions {
    /**
     * Called when the user clicks the cancel button or presses Escape.
     */
    cancel(): void;

    /**
     * Called when the user clicks the submit button.
     * Should return a promise that resolves when submission is complete.
     */
    submit(): Promise<void>;

    /**
     * Updates whether the dialog can be submitted.
     */
    setCanSubmit(canSubmit: boolean): void;

    /**
     * Sets an error message.
     */
    setError(error?: string): void;

    /**
     * Clears any error message.
     */
    clearError(): void;
}

/**
 * Result of a dialog interaction.
 * @template T - The type of data returned when the dialog is submitted.
 */
export interface DialogResult<T = unknown> {
    /**
     * Whether the dialog was submitted (true) or cancelled (false).
     */
    submitted: boolean;

    /**
     * The data returned from the dialog, if submitted.
     */
    data?: T;
}
