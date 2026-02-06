import { TooltipProvider } from "@vector-im/compound-web";
import { useViewModel } from "@element-hq/web-shared-components";
import { useEffect, useRef } from "react";
import type React from "react";
import type { LoginViewModel } from "./viewmodel/LoginViewModel";
import { LoginFlow } from "./viewmodel/login-view.types";
import { ServerInputScreen } from "./ServerInputScreen";
import { OidcLoginScreen } from "./OidcLoginScreen";
import { UsernamePasswordScreen } from "./UsernamePasswordScreen";
import { ModalManager } from "./ModalManager.tsx";
import { Dialog } from "./Dialog";
import { MockViewModel } from "@element-hq/web-shared-components";
import type {
    DialogViewSnapshot,
    DialogViewActions,
} from "./viewmodel/dialog-view.types";

export interface LoginProps {
    loginViewModel: LoginViewModel;
}

export const Login: React.FC<LoginProps> = ({ loginViewModel }) => {
    const { flow } = useViewModel(loginViewModel);
    const dialogShownRef = useRef(false);

    const renderFlow = () => {
        switch (flow) {
            case LoginFlow.ServerInput:
                return <ServerInputScreen loginViewModel={loginViewModel} />;
            case LoginFlow.OIDC:
                return <OidcLoginScreen loginViewModel={loginViewModel} />;
            case LoginFlow.UsernamePassword:
                return (
                    <UsernamePasswordScreen loginViewModel={loginViewModel} />
                );
        }
    };

    useEffect(() => {
        if (!dialogShownRef.current) {
            dialogShownRef.current = true;

            // Create a mock dialog view model (no submit/cancel for login)
            const dialogVM = new MockViewModel<DialogViewSnapshot>({
                canSubmit: false,
                title: "",
                actionLabel: "",
                isSubmitting: false,
            }) as unknown as MockViewModel<DialogViewSnapshot> &
                DialogViewActions;

            // Add no-op actions
            dialogVM.submit = async () => {};
            dialogVM.cancel = () => {};
            dialogVM.setCanSubmit = () => {};
            dialogVM.setError = () => {};
            dialogVM.clearError = () => {};

            ModalManager.showDialog(
                dialogVM,
                <TooltipProvider>{renderFlow()}</TooltipProvider>,
                "aurora_LoginDialog",
                false, // not dismissible
                false, // no backdrop
            );
        }
    }, []);

    // Re-render dialog content when flow changes
    useEffect(() => {
        if (dialogShownRef.current) {
            // Close and re-open with new content
            const container = document.querySelector(".aurora_DialogBackdrop");
            if (container) {
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

                const contentElement = container.querySelector(
                    ".aurora_Dialog_content",
                );
                if (contentElement) {
                    // Update in place rather than recreating
                    ModalManager.showDialog(
                        dialogVM,
                        <TooltipProvider>{renderFlow()}</TooltipProvider>,
                        "aurora_LoginDialog",
                        false, // not dismissible
                        false, // no backdrop
                    );
                }
            }
        }
    }, [flow]);

    return <div className="mx_LoginPage" />;
};
