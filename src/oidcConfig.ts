import type { OAuthConfiguration } from "./generated/matrix_sdk_ffi";

export const getOidcConfiguration = (): OAuthConfiguration => {
    const currentOrigin = window.location.origin;
    const redirectUri = `${currentOrigin}/oidc/callback`;
    const clientUri = currentOrigin.includes("localhost")
        ? "https://element.io"
        : currentOrigin;

    return {
        clientName: "Aurora",
        redirectUri,
        clientUri,
        logoUri: undefined,
        tosUri: undefined,
        policyUri: undefined,
        staticRegistrations: new Map(),
    };
};
