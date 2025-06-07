/*
Copyright 2024 New Vector Ltd.

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only OR LicenseRef-Element-Commercial
Please see LICENSE files in the repository root for full details.
*/

const serverSupportMap = {};

self.addEventListener("install", (event) => {
    // We skipWaiting() to update the service worker more frequently, particularly in development environments.
    event.waitUntil(skipWaiting());
});

self.addEventListener("activate", (event) => {
    // We force all clients to be under our control, immediately. This could be old tabs.
    event.waitUntil(clients.claim());
});

self.addEventListener("fetch", (event) => {
    // This is the authenticated media (MSC3916) check, proxying what was unauthenticated to the authenticated variants.

    if (event.request.method !== "GET") {
        return; // not important to us
    }

    // Note: ideally we'd keep the request headers etc, but in practice we can't even see those details.
    // See https://stackoverflow.com/a/59152482
    const url = new URL(event.request.url);

    // We only intercept v3 download and thumbnail requests as presumably everything else is deliberate.
    // For example, `/_matrix/media/unstable` or `/_matrix/media/v3/preview_url` are something well within
    // the control of the application, and appear to be choices made at a higher level than us.
    if (
        !url.pathname.startsWith("/_matrix/media/v3/download") &&
        !url.pathname.startsWith("/_matrix/media/v3/thumbnail")
    ) {
        return; // not a URL we care about
    }

    // We need to call respondWith synchronously, otherwise we may never execute properly. This means
    // later on we need to proxy the request through if it turns out the server doesn't support authentication.
    event.respondWith(
        (async () => {
            let auth;
            try {
                // Figure out which homeserver we're communicating with
                const csApi = url.origin;

                // Add jitter to reduce request spam, particularly to `/versions` on initial page load
                await new Promise((resolve) =>
                    setTimeout(() => resolve(), Math.random() * 10),
                );

                // Locate the access token and homeserver url
                const client = await self.clients.get(event.clientId);
                auth = await getAuthData(client);

                // Is this request actually going to the homeserver?
                const isRequestToHomeServer =
                    url.origin === new URL(auth.homeserver).origin;
                if (!isRequestToHomeServer) {
                    throw new Error(
                        "Request appears to be for media endpoint but wrong homeserver!",
                    );
                }

                // Update or populate the server support map using a (usually) authenticated `/versions` call.
                await tryUpdateServerSupportMap(csApi, auth.accessToken);

                // If we have server support (and a means of authentication), rewrite the URL to use MSC3916 endpoints.
                if (
                    serverSupportMap[csApi].supportsAuthedMedia &&
                    auth.accessToken
                ) {
                    url.href = url.href.replace(
                        /\/media\/v3\/(.*)\//,
                        "/client/v1/media/$1/",
                    );
                } // else by default we make no changes
            } catch (err) {
                // In case of some error, we stay safe by not adding the access-token to the request.
                auth = undefined;
                console.error("SW: Error in request rewrite.", err);
            }

            // Add authentication and send the request. We add authentication even if MSC3916 endpoints aren't
            // being used to ensure patches like this work:
            // https://github.com/matrix-org/synapse/commit/2390b66bf0ec3ff5ffb0c7333f3c9b239eeb92bb
            return fetch(url, fetchConfigForToken(auth?.accessToken));
        })(),
    );
});

async function tryUpdateServerSupportMap(clientApiUrl, accessToken) {
    // only update if we don't know about it, or if the data is stale
    if (
        serverSupportMap[clientApiUrl]?.cacheExpiryTimeMs > new Date().getTime()
    ) {
        return; // up to date
    }

    const config = fetchConfigForToken(accessToken);
    const versions = await (
        await fetch(`${clientApiUrl}/_matrix/client/versions`, config)
    ).json();
    console.log(
        `[ServiceWorker] /versions response for '${clientApiUrl}': ${JSON.stringify(versions)}`,
    );

    serverSupportMap[clientApiUrl] = {
        supportsAuthedMedia: Boolean(versions?.versions?.includes("v1.11")),
        cacheExpiryTimeMs: new Date().getTime() + 2 * 60 * 60 * 1000, // 2 hours from now
    };
    console.log(
        `[ServiceWorker] serverSupportMap update for '${clientApiUrl}': ${JSON.stringify(serverSupportMap[clientApiUrl])}`,
    );
}

// Ideally we'd use the `Client` interface for `client`, but since it's not available (see 'fetch' listener), we use
// unknown for now and force-cast it to something close enough later.
async function getAuthData(client) {
    return await askClientForUserIdParams(client);
}

// Ideally we'd use the `Client` interface for `client`, but since it's not available (see 'fetch' listener), we use
// unknown for now and force-cast it to something close enough inside the function.
async function askClientForUserIdParams(client) {
    return new Promise((resolve, reject) => {
        // Avoid stalling the tab in case something goes wrong.
        const timeoutId = setTimeout(
            () => reject(new Error("timeout in postMessage")),
            1000,
        );

        // We don't need particularly good randomness here - we just use this to generate a request ID, so we know
        // which postMessage reply is for our active request.
        const responseKey = Math.random().toString(36);

        // Add the listener first, just in case the tab is *really* fast.
        const listener = (event) => {
            if (event.data?.responseKey !== responseKey) return; // not for us
            clearTimeout(timeoutId); // do this as soon as possible, avoiding a race between resolve and reject.
            resolve(event.data); // "unblock" the remainder of the thread, if that were such a thing in JavaScript.
            self.removeEventListener("message", listener); // cleanup, since we're not going to do anything else.
        };
        self.addEventListener("message", listener);

        // Ask the tab for the information we need. This is handled by WebPlatform.
        client.postMessage({ responseKey, type: "userinfo" });
    });
}

function fetchConfigForToken(accessToken) {
    if (!accessToken) {
        return undefined; // no headers/config to specify
    }

    return {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };
}
