/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import { BaseViewModel } from "@element-hq/web-shared-components";

/**
 * Result types that all flow steps can return
 */
export type FlowStepResult<T> =
    | { type: "success"; data: T }
    | { type: "back" }
    | { type: "cancel" };

/**
 * Base ViewModel for a step in a multi-step flow.
 *
 * Each step has:
 * - Constructor inputs (props)
 * - Observable snapshot state
 * - A `result` Promise that resolves when the step completes
 * - A `screenType` for registry lookup
 *
 * @typeParam TSnapshot - The shape of the observable state
 * @typeParam TProps - Constructor props
 * @typeParam TResult - The data type returned on success
 */
export abstract class FlowStepViewModel<
    TSnapshot,
    TProps,
    TResult,
> extends BaseViewModel<TSnapshot, TProps> {
    /**
     * Screen type identifier for the screen registry.
     * View layer uses this to look up which component to render.
     */
    public abstract readonly screenType: string;

    /**
     * Promise that resolves when this step completes.
     * Resolves with success data, back navigation, or cancellation.
     */
    public readonly result: Promise<FlowStepResult<TResult>>;

    protected resolveResult!: (value: FlowStepResult<TResult>) => void;
    protected rejectResult!: (error: Error) => void;

    public constructor(props: TProps, initialState: TSnapshot) {
        super(props, initialState);
        this.result = new Promise((resolve, reject) => {
            this.resolveResult = resolve;
            this.rejectResult = reject;
        });
    }

    /**
     * Complete this step successfully with the given data.
     */
    protected complete(data: TResult): void {
        this.resolveResult({ type: "success", data });
    }

    /**
     * Signal that user wants to go back to the previous step.
     */
    protected goBack(): void {
        this.resolveResult({ type: "back" });
    }

    /**
     * Signal that user wants to cancel the entire flow.
     */
    protected cancelFlow(): void {
        this.resolveResult({ type: "cancel" });
    }
}
