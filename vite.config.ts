import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
    plugins: [react(), topLevelAwait()],

    // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
    //
    // 1. prevent vite from obscuring rust errors
    //   clearScreen: false,
    //   // 2. tauri expects a fixed port, fail if that port is not available
    //   server: {
    //     port: 1420,
    //     strictPort: true,
    //     watch: {
    //       // 3. tell vite to ignore watching `src-tauri`
    //       ignored: ["**/src-tauri/**"],
    //     },
    //   },
}));
