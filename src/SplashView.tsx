/*
 * Copyright 2025 New Vector Ltd.
 *
 * SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
 * Please see LICENSE files in the repository root for full details.
 */

import "./SplashView.css";
import { type JSX } from "react";
import splash from "./assets/splash.svg";

export function SplashView(): JSX.Element {
    return (
        <main className="mx_Splash">
            <img src={ splash } height="380"/>
        </main>
    );
}
