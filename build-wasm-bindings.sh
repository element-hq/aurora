#!/bin/bash

set -e

echo "==> Step 1: Cleaning..."
pnpm ubrn:clean

echo "==> Step 2: Checking out..."
pnpm ubrn:checkout

echo "==> Step 3: Resetting any modifications after checkout..."
git -C rust_modules/matrix-rust-sdk reset --hard HEAD
echo "    ✓ Repository clean"

echo "==> Step 4: Fetching full git history for patch application..."
git -C rust_modules/matrix-rust-sdk fetch --unshallow

echo "==> Step 5: Applying wasm SystemTime fix patch..."
if git -C rust_modules/matrix-rust-sdk apply ../../patches/0002-Fix-wasm-SystemTime-in-automatic-call-status.patch; then
    echo "    ✓ Patch applied (wasm-safe timestamp in automatic_call_status)"
else
    echo "    ✗ Patch failed!"
    exit 1
fi

echo "==> Step 5b: Removing forced experimental-search from matrix-sdk-ffi..."
# matrix-sdk-ffi enables matrix-sdk/experimental-search unconditionally, which
# pulls in tantivy (and rustix/errno) that can't build for wasm32-unknown-unknown.
# The ffi's own experimental-search feature still gates it, and is off for web.
sed -i.bak '/^matrix-sdk = /,/^\] }/{/^    "experimental-search"$/d;}' rust_modules/matrix-rust-sdk/bindings/matrix-sdk-ffi/Cargo.toml
echo "    ✓ Removed"

echo "==> Step 5c: Pinning tracing-appender to 0.2.4..."
# tracing-appender 0.2.5 depends on the `symlink` crate, which doesn't build for
# wasm32-unknown-unknown. The ffi only uses `rolling::Rotation`, present in 0.2.4.
sed -i.bak -E 's/^tracing-appender = \{ version = "[^"]+"/tracing-appender = { version = "=0.2.4"/' rust_modules/matrix-rust-sdk/Cargo.toml
echo "    ✓ Pinned"

echo "==> Step 6: Removing bindings/wasm from workspace..."
# Remove the non-existent bindings/wasm from workspace members
sed -i.bak '/bindings\/wasm/d' rust_modules/matrix-rust-sdk/Cargo.toml
echo "    ✓ Removed from workspace"

echo "==> Step 7: Building web (first pass to generate wasm bindings)..."
pnpm ubrn:web:build:release || echo "    (First pass may have warnings)"

echo "==> Step 8: Adding bindings/wasm back to workspace..."
# Add bindings/wasm back to workspace members now that it exists
sed -i.bak '/"xtask",/a\
    "bindings/wasm",
' rust_modules/matrix-rust-sdk/Cargo.toml
echo "    ✓ Added back to workspace"

echo "==> Step 9: Building web (second pass with complete workspace)..."
set -e
pnpm ubrn:web:build:release

echo "==> Step 10: Fixing index.web.ts import..."
INDEX_FILE="src/index.web.ts"
if [ -f "$INDEX_FILE" ]; then
    sed -i.bak -E "s/index_bg\\.wasm/index_bg.wasm?url/" "$INDEX_FILE"
    rm -f "$INDEX_FILE.bak"
    echo "    ✓ Import fixed"
else
    echo "    ⚠ $INDEX_FILE not found, skipping import fix"
fi

echo "==> Step 11: Optimizing wasm binary with wasm-opt..."
WASM_FILE="src/generated/wasm-bindgen/index_bg.wasm"
if ! command -v wasm-opt > /dev/null; then
    echo "    ⚠ wasm-opt not found (install binaryen), skipping optimization"
elif [ -f "$WASM_FILE" ]; then
    echo "    Optimizing $WASM_FILE (this may take a few minutes)..."
    wasm-opt -Oz "$WASM_FILE" -o "${WASM_FILE}.tmp"
    mv "${WASM_FILE}.tmp" "$WASM_FILE"
    echo "    ✓ wasm binary optimized"
else
    echo "    ⚠ wasm file not found at $WASM_FILE, skipping optimization"
fi

echo "==> ✓ All steps completed successfully!"
