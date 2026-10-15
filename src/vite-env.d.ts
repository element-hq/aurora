/// <reference types="vite/client" />

interface Window {
    /** Dev only; see ClientViewModel.exposeClearCaches. */
    auroraClearCaches?: () => Promise<void>;
}
