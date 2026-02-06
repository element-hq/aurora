/*
 *
 *  * Copyright 2026 New Vector Ltd.
 *  *
 *  * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 *  * Please see LICENSE files in the repository root for full details.
 *
 */

import {
    InlineSpinner,
    TooltipProvider,
    IconButton,
} from "@vector-im/compound-web";
import { useViewModel, MockViewModel } from "@element-hq/web-shared-components";
import { useEffect, useRef } from "react";
import type React from "react";
import type { EncryptionViewModel } from "./viewmodel/EncryptionViewModel";
import { EncryptionFlow } from "./viewmodel/encryption-view.types";
import LockIcon from "@vector-im/compound-design-tokens/assets/web/icons/lock-solid";
import KeyIconSolid from "@vector-im/compound-design-tokens/assets/web/icons/key-solid";
import InfoSolidIcon from "@vector-im/compound-design-tokens/assets/web/icons/info-solid";
import ChevronLeftIcon from "@vector-im/compound-design-tokens/assets/web/icons/chevron-left";
import CheckCircle from "@vector-im/compound-design-tokens/assets/web/icons/check-circle";
import { ConfirmIdentityScreen } from "./ConfirmIdentityScreen";
import { RecoveryKeyEntryScreen } from "./RecoveryKeyEntryScreen";
import { SetupRecoveryScreen } from "./SetupRecoveryScreen";
import { EnablingRecoveryScreen } from "./EnablingRecoveryScreen";
import { SaveRecoveryKeyScreen } from "./SaveRecoveryKeyScreen";
import { ResetIdentityWarningScreen } from "./ResetIdentityWarningScreen";
import { ResetIdentityPasswordScreen } from "./ResetIdentityPasswordScreen";
import { ModalManager, type DialogHandle } from "./ModalManager.tsx";
import type {
    DialogViewSnapshot,
    DialogViewActions,
} from "./viewmodel/dialog-view.types";
import styles from "./Encryption.module.css";

export interface EncryptionProps {
    encryptionViewModel: EncryptionViewModel;
}

export const Encryption: React.FC<EncryptionProps> = ({
    encryptionViewModel,
}) => {
    const { flow, canGoBack } = useViewModel(encryptionViewModel);

    const renderFlow = () => {
        switch (flow) {
            case EncryptionFlow.Loading:
                return (
                    <div className={styles.loadingContainer}>
                        <InlineSpinner />
                        <p className={styles.loadingText}>
                            Checking encryption status...
                        </p>
                    </div>
                );
            case EncryptionFlow.ConfirmIdentity:
                return (
                    <ConfirmIdentityScreen
                        encryptionViewModel={encryptionViewModel}
                    />
                );
            case EncryptionFlow.EnterRecoveryKey:
                return (
                    <RecoveryKeyEntryScreen
                        encryptionViewModel={encryptionViewModel}
                    />
                );
            case EncryptionFlow.SetupRecovery:
                return (
                    <SetupRecoveryScreen
                        encryptionViewModel={encryptionViewModel}
                    />
                );
            case EncryptionFlow.EnablingRecovery:
                return (
                    <EnablingRecoveryScreen
                        encryptionViewModel={encryptionViewModel}
                    />
                );
            case EncryptionFlow.SaveRecoveryKey:
                return (
                    <SaveRecoveryKeyScreen
                        encryptionViewModel={encryptionViewModel}
                    />
                );
            case EncryptionFlow.ResetIdentityWarning:
                return (
                    <ResetIdentityWarningScreen
                        encryptionViewModel={encryptionViewModel}
                    />
                );
            case EncryptionFlow.ResetIdentityPassword:
                return (
                    <ResetIdentityPasswordScreen
                        encryptionViewModel={encryptionViewModel}
                    />
                );
            case EncryptionFlow.Complete:
                return null;
        }
    };

    const getTitle = () => {
        switch (flow) {
            case EncryptionFlow.Loading:
                return "Loading...";
            case EncryptionFlow.EnablingRecovery:
                return "Enabling Recovery...";
            case EncryptionFlow.ConfirmIdentity:
                return "Confirm your identity";
            case EncryptionFlow.EnterRecoveryKey:
                return "Enter recovery key";
            case EncryptionFlow.SetupRecovery:
                return "Set up recovery";
            case EncryptionFlow.SaveRecoveryKey:
                return "Save your recovery key somewhere safe";
            case EncryptionFlow.ResetIdentityWarning:
                return "Can't confirm? You'll need to reset your identity.";
            case EncryptionFlow.ResetIdentityPassword:
                return "Enter your account password to continue";
            case EncryptionFlow.Complete:
                return "Recovery Enabled";
        }
    };

    const getSubtitle = () => {
        switch (flow) {
            case EncryptionFlow.Loading:
            case EncryptionFlow.EnablingRecovery:
            case EncryptionFlow.ResetIdentityWarning:
            case EncryptionFlow.ResetIdentityPassword:
            case EncryptionFlow.Complete:
                return null;
            case EncryptionFlow.ConfirmIdentity:
                return "Verify this device to setup up secure messaging.";
            case EncryptionFlow.EnterRecoveryKey:
                return "Make sure nobody can see this screen!";
            case EncryptionFlow.SetupRecovery:
                return "Your key storage is protected by a recovery key.";
            case EncryptionFlow.SaveRecoveryKey:
                return "Write down this recovery key somewhere safe, like a password manager, encrypted note, or physical safe.";
        }
    };

    const getIcon = () => {
        switch (flow) {
            case EncryptionFlow.Complete:
                return CheckCircle;
            case EncryptionFlow.ConfirmIdentity:
                return LockIcon;
            case EncryptionFlow.Loading:
            case EncryptionFlow.EnablingRecovery:
            case EncryptionFlow.ResetIdentityPassword:
            case EncryptionFlow.EnterRecoveryKey:
            case EncryptionFlow.SetupRecovery:
            case EncryptionFlow.SaveRecoveryKey:
                return KeyIconSolid;
            case EncryptionFlow.ResetIdentityWarning:
                return InfoSolidIcon;
        }
    };

    const getLearnMoreLink = (): string | null => {
        switch (flow) {
            case EncryptionFlow.ConfirmIdentity:
                return "https://element.io/en/help#encryption-device-verification";
            default:
                return null;
        }
    };

    const dialogShownRef = useRef(false);
    const dialogHandleRef = useRef<DialogHandle | null>(null);

    const handleGoBack = () => {
        encryptionViewModel.goBack();
    };

    const Icon = getIcon();
    const isCriticalFlow = flow === EncryptionFlow.ResetIdentityWarning;
    const learnMoreLink = getLearnMoreLink();

    const dialogContent = (
        <div className={styles.dialog}>
            <TooltipProvider>
                {canGoBack && (
                    <div className={styles.backButton}>
                        <IconButton
                            kind="secondary"
                            onClick={handleGoBack}
                            aria-label="Go back"
                        >
                            <ChevronLeftIcon />
                        </IconButton>
                    </div>
                )}

                <div className={styles.header}>
                    <div
                        className={`${styles.iconContainer} ${isCriticalFlow ? styles.iconContainerCritical : ""}`}
                    >
                        <Icon
                            width="32px"
                            height="32px"
                            className={
                                isCriticalFlow
                                    ? styles.iconCritical
                                    : styles.icon
                            }
                        />
                    </div>

                    <h2 className={styles.title}>{getTitle()}</h2>

                    {getSubtitle() && (
                        <p className={styles.subtitle}>{getSubtitle()}</p>
                    )}

                    {learnMoreLink && (
                        <div className={styles.learnMore}>
                            <a
                                href={learnMoreLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.learnMoreLink}
                            >
                                Learn more
                            </a>
                        </div>
                    )}
                </div>

                {renderFlow()}
            </TooltipProvider>
        </div>
    );

    useEffect(() => {
        if (!dialogShownRef.current) {
            dialogShownRef.current = true;

            // Create a mock dialog view model (no submit/cancel for encryption flows)
            const dialogVM = new MockViewModel<DialogViewSnapshot>({
                canSubmit: false,
                title: "",
                actionLabel: "",
                isSubmitting: false,
            }) as unknown as MockViewModel<DialogViewSnapshot> &
                DialogViewActions;

            dialogVM.submit = async () => {};
            dialogVM.cancel = () => {};
            dialogVM.setCanSubmit = () => {};
            dialogVM.setError = () => {};
            dialogVM.clearError = () => {};

            const handle = ModalManager.showDialog(
                dialogVM,
                dialogContent,
                "aurora_EncryptionDialog",
                false, // not dismissible
                false, // no backdrop
            );
            dialogHandleRef.current = handle;
        }
    }, []);

    // Close dialog when encryption flow is complete
    useEffect(() => {
        if (flow === EncryptionFlow.Complete && dialogHandleRef.current) {
            dialogHandleRef.current.close();
            dialogHandleRef.current = null;
        }
    }, [flow]);

    // Re-render dialog content when flow changes
    useEffect(() => {
        if (dialogShownRef.current && flow !== EncryptionFlow.Complete) {
            const dialogVM = new MockViewModel<DialogViewSnapshot>({
                canSubmit: false,
                title: "",
                actionLabel: "",
                isSubmitting: false,
            }) as unknown as MockViewModel<DialogViewSnapshot> &
                DialogViewActions;

            dialogVM.submit = async () => {};
            dialogVM.cancel = () => {};
            dialogVM.setCanSubmit = () => {};
            dialogVM.setError = () => {};
            dialogVM.clearError = () => {};

            const handle = ModalManager.showDialog(
                dialogVM,
                dialogContent,
                "aurora_EncryptionDialog",
                false, // not dismissible
                false, // no backdrop
            );
            dialogHandleRef.current = handle;
        }
    }, [flow, canGoBack]);

    return <div className="mx_LoginPage" />;
};
