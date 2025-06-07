/*
Copyright 2024 New Vector Ltd.
Copyright 2020 The Matrix.org Foundation C.I.C.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

import React, {
    type ReactNode,
    type KeyboardEvent,
    type Ref,
    type MouseEvent,
} from "react";
import classNames from "classnames";
import "./BaseCard.css";
import { IconButton, Text } from "@vector-im/compound-web";
import CloseIcon from "@vector-im/compound-design-tokens/assets/web/icons/close";

interface IProps {
    header?: ReactNode | null;
    hideHeaderButtons?: boolean;
    footer?: ReactNode;
    className?: string;
    id?: string;
    role?: "tabpanel";
    ariaLabelledBy?: string;
    closeLabel?: string;
    onClose?(ev: MouseEvent<HTMLButtonElement>): void;
    onKeyDown?(ev: KeyboardEvent): void;
    ref?: Ref<HTMLDivElement>;
    // Ref for the 'close' button the card
    closeButtonRef?: Ref<HTMLButtonElement>;
    children: ReactNode;
}

const BaseCard: React.FC<IProps> = ({
    closeLabel,
    onClose,
    className,
    id,
    ariaLabelledBy,
    role,
    hideHeaderButtons,
    header,
    footer,
    children,
    onKeyDown,
    closeButtonRef,
    ref,
}: IProps) => {
    // let closeButton;
    // if (!hideHeaderButtons) {
    // 	closeButton = (
    // 		<IconButton
    // 			size="28px"
    // 			data-testid="base-card-close-button"
    // 			onClick={onClose}
    // 			ref={closeButtonRef}
    // 			tooltip={closeLabel ?? "Close"}
    // 			subtleBackground
    // 		>
    // 			<CloseIcon />
    // 		</IconButton>
    // 	);
    // }

    const shouldRenderHeader = header || !hideHeaderButtons;

    return (
        <div
            id={id}
            aria-labelledby={ariaLabelledBy}
            role={role}
            className={classNames("mx_BaseCard", className)}
            ref={ref}
            onKeyDown={onKeyDown}
        >
            {shouldRenderHeader && (
                <div className="mx_BaseCard_header">
                    {typeof header === "string" ? (
                        <div className="mx_BaseCard_header_title">
                            <Text
                                size="md"
                                weight="medium"
                                className="mx_BaseCard_header_title_heading"
                                role="heading"
                            >
                                {header}
                            </Text>
                        </div>
                    ) : (
                        (header ?? (
                            <div className="mx_BaseCard_header_spacer" />
                        ))
                    )}
                    {/* {closeButton} */}
                </div>
            )}
            {children}
            {footer && <div className="mx_BaseCard_footer">{footer}</div>}
        </div>
    );
};

export default BaseCard;
