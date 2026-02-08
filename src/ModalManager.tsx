/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import React, { type ReactNode } from "react";
import { createRoot, type Root } from "react-dom/client";
import type { ViewModel } from "@element-hq/web-shared-components";
import { Dialog } from "./Dialog/Dialog";
import type {
    DialogViewSnapshot,
    DialogViewActions,
    DialogResult,
} from "./Dialog/dialog-view.types";

/**
 * Handle for a dialog that's been opened.
 * Provides methods to close the dialog and get the result.
 */
export interface DialogHandle<T = unknown> {
    /**
     * Promise that resolves when the dialog is closed.
     */
    finished: Promise<DialogResult<T>>;

    /**
     * Manually close the dialog.
     */
    close(): void;
}

/**
 * Modal manager for displaying dialogs.
 * Handles creating and managing dialog instances using React portals.
 */
export class ModalManager {
    private static root?: Root;
    private static container?: HTMLDivElement;
    private static currentDialog?: {
        root: Root;
        container: HTMLDivElement;
        resolve: (result: DialogResult<unknown>) => void;
    };

    /**
     * Get or create the dialog container in the DOM.
     */
    private static getOrCreateContainer(): HTMLDivElement {
        if (!this.container) {
            this.container = document.createElement("div");
            this.container.id = "aurora_dialog_container";
            this.container.style.position = "fixed";
            this.container.style.zIndex = "4000";
            document.body.appendChild(this.container);
        }
        return this.container;
    }

    /**
     * Show a dialog with a custom view model and content.
     *
     * @param viewModel - The view model controlling the dialog.
     * @param content - The content to render inside the dialog.
     * @param className - Optional CSS class name for the dialog.
     * @param dismissible - Whether the dialog can be dismissed. Default: true.
     * @param showBackdrop - Whether to show the darkened backdrop. Default: true.
     * @returns A handle to the dialog with a promise that resolves when closed.
     *
     * @example
     * ```tsx
     * const vm = new MyDialogViewModel({
     *   title: "Confirm",
     *   actionLabel: "OK",
     *   onSubmit: (data) => handle.close(),
     *   onCancel: () => handle.close(),
     * });
     *
     * const handle = ModalManager.showDialog(
     *   vm,
     *   <p>Content here</p>
     * );
     *
     * const result = await handle.finished;
     * ```
     */
    public static showDialog<T = unknown>(
        viewModel: ViewModel<DialogViewSnapshot> & DialogViewActions,
        content: ReactNode,
        className?: string,
        dismissible: boolean = true,
        showBackdrop: boolean = true,
    ): DialogHandle<T> {
        // Close any existing dialog
        this.closeCurrentDialog();

        const container = this.getOrCreateContainer();
        const dialogContainer = document.createElement("div");
        dialogContainer.className = showBackdrop
            ? "aurora_DialogBackdrop aurora_DialogBackdrop--with-backdrop"
            : "aurora_DialogBackdrop";

        // Create promise that will resolve when dialog closes
        let resolvePromise: (result: DialogResult<T>) => void;
        const finishedPromise = new Promise<DialogResult<T>>((resolve) => {
            resolvePromise = resolve;
        });

        const handleBackdropClick = (e: React.MouseEvent): void => {
            if (dismissible && e.target === e.currentTarget) {
                viewModel.cancel();
            }
        };

        // Add click handler to the container directly
        dialogContainer.addEventListener("click", (e: MouseEvent) => {
            if (dismissible && e.target === e.currentTarget) {
                viewModel.cancel();
            }
        });

        const root = createRoot(dialogContainer);

        // Store current dialog info
        this.currentDialog = {
            root,
            container: dialogContainer,
            resolve: resolvePromise! as (result: DialogResult<unknown>) => void,
        };

        // Render the dialog directly (no extra wrapper needed)
        root.render(
            <Dialog
                viewModel={viewModel}
                className={className}
                dismissible={dismissible}
            >
                {content}
            </Dialog>,
        );

        container.appendChild(dialogContainer);

        return {
            finished: finishedPromise,
            close: () => {
                this.closeCurrentDialog(false);
            },
        };
    }

    /**
     * Close the currently open dialog.
     * @param submitted - Whether the dialog was submitted or cancelled.
     */
    private static closeCurrentDialog(submitted: boolean = false): void {
        if (this.currentDialog) {
            const { root, container, resolve } = this.currentDialog;

            // Clean up DOM
            root.unmount();
            container.remove();

            // Resolve the promise
            resolve({ submitted });

            this.currentDialog = undefined;
        }
    }

    /**
     * Create a dialog with automatic lifecycle management.
     * The dialog will automatically close when onSubmit or onCancel is called.
     *
     * @param ViewModelClass - The view model class to instantiate.
     * @param props - Props to pass to the view model constructor.
     * @param content - The content to render inside the dialog.
     * @param className - Optional CSS class name for the dialog.
     * @returns A promise that resolves with the dialog result.
     *
     * @example
     * ```tsx
     * const result = await ModalManager.createDialog(
     *   MyDialogViewModel,
     *   { title: "Confirm", actionLabel: "OK" },
     *   <p>Are you sure?</p>
     * );
     *
     * if (result.submitted) {
     *   console.log("User confirmed");
     * }
     * ```
     */
    public static async createDialog<
        T,
        VM extends ViewModel<DialogViewSnapshot> & DialogViewActions,
        P extends { onSubmit?: (data: T) => void; onCancel?: () => void },
    >(
        ViewModelClass: new (props: P) => VM,
        props: Omit<P, "onSubmit" | "onCancel">,
        content: ReactNode,
        className?: string,
    ): Promise<DialogResult<T>> {
        let dialogHandle: DialogHandle<T>;
        let submitData: T | undefined;

        const viewModel = new ViewModelClass({
            ...props,
            onSubmit: (data: T) => {
                submitData = data;
                ModalManager.closeCurrentDialog(true);
            },
            onCancel: () => {
                ModalManager.closeCurrentDialog(false);
            },
        } as P);

        dialogHandle = this.showDialog<T>(viewModel, content, className);

        const result = await dialogHandle.finished;

        // Clean up view model
        if ("dispose" in viewModel && typeof viewModel.dispose === "function") {
            viewModel.dispose();
        }

        return {
            submitted: result.submitted,
            data: submitData,
        };
    }
}
