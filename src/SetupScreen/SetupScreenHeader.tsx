/*
 * Copyright 2026 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import type React from "react";
import type { ComponentType, ReactNode, SVGProps } from "react";
import styles from "./SetupScreenHeader.module.css";

export type SetupScreenHeaderVariant = "default" | "success" | "critical";

export interface SetupScreenHeaderProps {
    /** The icon component to display */
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
    /** Title text */
    title: string;
    /** Optional subtitle - can be a string or ReactNode for multiple paragraphs */
    subtitle?: ReactNode;
    /** Visual variant - affects icon background and color */
    variant?: SetupScreenHeaderVariant;
    /** Optional additional CSS class */
    className?: string;
}

/**
 * Reusable header component for flow screens.
 * Displays an icon, title, and optional subtitle with consistent styling.
 *
 * @example
 * ```tsx
 * <SetupScreenHeader
 *   Icon={KeyIcon}
 *   title="Confirm your identity"
 *   subtitle="To access your encrypted messages, verify your identity."
 * />
 *
 * // With multiple paragraphs:
 * <SetupScreenHeader
 *   Icon={WarningIcon}
 *   title="Reset identity?"
 *   variant="critical"
 *   subtitle={
 *     <>
 *       <p>This will reset your cryptographic identity.</p>
 *       <p>Your previous message history will no longer be accessible.</p>
 *     </>
 *   }
 * />
 * ```
 */
export const SetupScreenHeader: React.FC<SetupScreenHeaderProps> = ({
    Icon,
    title,
    subtitle,
    variant = "default",
    className,
}) => {
    const iconContainerClass = `${styles.iconContainer} ${
        variant === "critical"
            ? styles.iconContainerCritical
            : variant === "success"
              ? styles.iconContainerSuccess
              : ""
    }`;

    const iconClass =
        variant === "critical"
            ? styles.iconCritical
            : variant === "success"
              ? styles.iconSuccess
              : styles.icon;

    // Render subtitle - wrap string in <p>, otherwise render as-is
    const renderSubtitle = () => {
        if (!subtitle) return null;
        if (typeof subtitle === "string") {
            return <p className={styles.subtitle}>{subtitle}</p>;
        }
        return <div className={styles.subtitleContainer}>{subtitle}</div>;
    };

    return (
        <div className={`${styles.header} ${className ?? ""}`}>
            <div className={iconContainerClass}>
                <Icon width="32px" height="32px" className={iconClass} />
            </div>

            <h2 className={styles.title}>{title}</h2>

            {renderSubtitle()}
        </div>
    );
};
