/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { useCallback, type ReactNode, type FormEvent } from "react";
import FocusLock from "react-focus-lock";
import { CloseIcon } from "@vector-im/compound-design-tokens/assets/web/icons";
import { Glass } from "@vector-im/compound-web";
import {
    useViewModel,
    type ViewModel,
} from "@element-hq/web-shared-components";
import type {
    DialogViewSnapshot,
    DialogViewActions,
} from "./viewmodel/dialog-view.types";
import "./Dialog.css";

/**
 * Props for the Dialog component.
 */
export interface DialogProps {
    /**
     * The view model that controls the dialog state and behavior.
     */
    viewModel: ViewModel<DialogViewSnapshot> & DialogViewActions;

    /**
     * The content to render inside the dialog.
     */
    children: ReactNode;

    /**
     * Optional CSS class name to apply to the dialog.
     */
    className?: string;

    /**
     * Optional aria-label for the dialog.
     * If not provided, will use aria-labelledby pointing to the title.
     */
    "aria-label"?: string;

    /**
     * Whether the dialog can be dismissed (via escape key, backdrop click, or close button).
     * Default: true
     */
    dismissible?: boolean;
}

/**
 * A Compound-based scrollable dialog component.
 * Uses MVVM pattern with a ViewModel to control state and behavior.
 *
 * @example
 * ```tsx
 * const vm = new MyDialogViewModel({
 *   title: "Confirm Action",
 *   actionLabel: "Confirm",
 *   onSubmit: (data) => console.log("Submitted:", data),
 *   onCancel: () => console.log("Cancelled"),
 * });
 *
 * <Dialog viewModel={vm}>
 *   <p>Are you sure you want to continue?</p>
 * </Dialog>
 * ```
 */
export function Dialog({
    viewModel,
    children,
    className,
    dismissible = true,
    ...ariaProps
}: DialogProps): React.JSX.Element {
    const snapshot = useViewModel(viewModel);

    const onKeyDown = useCallback(
        (e: React.KeyboardEvent): void => {
            if (dismissible && e.key === "Escape") {
                e.stopPropagation();
                e.preventDefault();
                viewModel.cancel();
            }
        },
        [viewModel, dismissible],
    );

    const onCancel = useCallback((): void => {
        if (dismissible) {
            viewModel.cancel();
        }
    }, [viewModel, dismissible]);

    const onSubmit = useCallback(
        (e: FormEvent): void => {
            e.stopPropagation();
            e.preventDefault();
            if (!snapshot.canSubmit || snapshot.isSubmitting) return;
            void viewModel.submit();
        },
        [viewModel, snapshot.canSubmit, snapshot.isSubmitting],
    );

    const lockProps: Record<string, unknown> = {
        onKeyDown,
        role: "dialog",
        "aria-labelledby": "aurora_Dialog_title",
        "aria-describedby": "aurora_Dialog_content",
    };

    if (ariaProps["aria-label"]) {
        lockProps["aria-label"] = ariaProps["aria-label"];
    }

    const showFooter = snapshot.title || snapshot.actionLabel;

    // Content wrapper - use form only if we have a footer with submit button
    const ContentWrapper = showFooter ? "form" : "div";
    const wrapperProps = showFooter
        ? { onSubmit, className: "aurora_Dialog_form" }
        : { className: "aurora_Dialog_form" };

    return (
        <Glass className="aurora_Dialog_border">
            <FocusLock
                returnFocus={true}
                lockProps={lockProps}
                className={`aurora_Dialog ${className || ""}`}
            >
                <div className="aurora_Dialog_header">
                    <h1 id="aurora_Dialog_title">{snapshot.title}</h1>
                </div>
                {dismissible && (
                    <button
                        type="button"
                        onClick={onCancel}
                        className="aurora_Dialog_cancelButton"
                        aria-label="Close dialog"
                        disabled={snapshot.isSubmitting}
                    >
                        <CloseIcon />
                    </button>
                )}
                <ContentWrapper {...wrapperProps}>
                    <div
                        className="aurora_Dialog_content"
                        id="aurora_Dialog_content"
                    >
                        {snapshot.error && (
                            <div className="aurora_Dialog_error">
                                {snapshot.error}
                            </div>
                        )}
                        {children}
                    </div>
                    {showFooter && (
                        <div className="aurora_Dialog_footer">
                            <button
                                type="button"
                                onClick={onCancel}
                                className="aurora_Dialog_button aurora_Dialog_button--secondary"
                                disabled={snapshot.isSubmitting}
                            >
                                {snapshot.cancelLabel ?? "Cancel"}
                            </button>
                            <button
                                type="submit"
                                className="aurora_Dialog_button aurora_Dialog_button--primary"
                                disabled={
                                    !snapshot.canSubmit || snapshot.isSubmitting
                                }
                            >
                                {snapshot.isSubmitting
                                    ? "Processing..."
                                    : snapshot.actionLabel}
                            </button>
                        </div>
                    )}
                </ContentWrapper>
            </FocusLock>
        </Glass>
    );
}
