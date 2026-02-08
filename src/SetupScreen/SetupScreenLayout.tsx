/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import type React from "react";
import styles from "./SetupScreenLayout.module.css";

export interface SetupScreenLayoutProps {
    /** Child content to render in the layout */
    children: React.ReactNode;
    /** Optional additional CSS class */
    className?: string;
}

/**
 * Standard layout wrapper for flow screens.
 * Provides consistent padding and structure.
 */
export const SetupScreenLayout: React.FC<SetupScreenLayoutProps> = ({
    children,
    className,
}) => {
    return (
        <div className={`${styles.container} ${className ?? ""}`}>
            {children}
        </div>
    );
};
