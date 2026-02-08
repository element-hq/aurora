/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { BaseViewModel } from "@element-hq/web-shared-components";
import type {
    DialogViewSnapshot,
    DialogViewActions,
} from "./dialog-view.types";

export interface DialogViewModelProps<T = unknown> {
    /**
     * Initial title for the dialog.
     */
    title: string;

    /**
     * Label for the submit/action button.
     */
    actionLabel: string;

    /**
     * Optional label for the cancel button.
     */
    cancelLabel?: string;

    /**
     * Callback when the dialog is cancelled.
     */
    onCancel?: () => void;

    /**
     * Callback when the dialog is submitted successfully.
     * @param data - The data to return from the dialog.
     */
    onSubmit?: (data: T) => void;
}

/**
 * Base view model for dialogs.
 * Provides common dialog functionality like submit/cancel actions,
 * submit state management, and error handling.
 *
 * @template T - The type of data returned when the dialog is submitted.
 * @template P - The type of props passed to the view model.
 */
export abstract class DialogViewModel<
        T = unknown,
        P extends DialogViewModelProps<T> = DialogViewModelProps<T>,
    >
    extends BaseViewModel<DialogViewSnapshot, P>
    implements DialogViewActions
{
    protected constructor(
        props: P,
        initialSnapshot?: Partial<DialogViewSnapshot>,
    ) {
        super(props, {
            canSubmit: true,
            title: props.title,
            actionLabel: props.actionLabel,
            cancelLabel: props.cancelLabel,
            isSubmitting: false,
            error: undefined,
            ...initialSnapshot,
        });
    }

    /**
     * Cancel the dialog.
     * Calls the onCancel callback if provided.
     */
    public cancel(): void {
        if (this.getSnapshot().isSubmitting) {
            // Don't allow cancelling while submitting
            return;
        }
        this.props.onCancel?.();
    }

    /**
     * Submit the dialog.
     * Sets isSubmitting state, calls validateAndSubmit, then calls onSubmit callback.
     */
    public async submit(): Promise<void> {
        const snapshot = this.getSnapshot();
        if (!snapshot.canSubmit || snapshot.isSubmitting) {
            return;
        }

        this.snapshot.merge({ isSubmitting: true, error: undefined });

        try {
            const data = await this.validateAndSubmit();
            this.props.onSubmit?.(data);
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : "An error occurred";
            this.snapshot.merge({ error: errorMessage, isSubmitting: false });
        }
    }

    /**
     * Validate and perform the submit action.
     * Subclasses should override this to implement their submit logic.
     *
     * @returns The data to return from the dialog.
     * @throws Error if validation or submission fails.
     */
    protected abstract validateAndSubmit(): Promise<T>;

    /**
     * Update whether the dialog can be submitted.
     */
    public setCanSubmit(canSubmit: boolean): void {
        this.snapshot.merge({ canSubmit });
    }

    /**
     * Set an error message.
     */
    public setError(error?: string): void {
        this.snapshot.merge({ error });
    }

    /**
     * Clear any error message.
     */
    public clearError(): void {
        this.snapshot.merge({ error: undefined });
    }
}
