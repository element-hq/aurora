#!/bin/bash

echo "==> Step 1: Cleaning..."
yarn ubrn:clean

echo "==> Step 2: Checking out..."
yarn ubrn:checkout

echo "==> Step 3: Resetting any modifications after checkout..."
git -C rust_modules/matrix-rust-sdk reset --hard HEAD
echo "    ✓ Repository clean"

echo "==> Step 4: Fetching full git history for patch application..."
git -C rust_modules/matrix-rust-sdk fetch --unshallow

echo "==> Step 5: Applying uniffi downgrade patch..."
if git -C rust_modules/matrix-rust-sdk apply ../../patches/0001-Downgrade-uniffi-to-0.29.4.patch; then
    echo "    ✓ Patch applied (uniffi downgrade to 0.29.4)"
else
    echo "    ✗ Patch failed!"
    exit 1
fi

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
    echo "    ✓ Import fixed"
else
    echo "    ⚠ $INDEX_FILE not found, skipping import fix"
fi

echo "==> Step 11: Optimizing wasm binary with wasm-opt..."
WASM_FILE="src/generated/wasm-bindgen/index_bg.wasm"
if [ -f "$WASM_FILE" ]; then
    echo "    Optimizing $WASM_FILE (this may take a few minutes)..."
    wasm-opt -Oz "$WASM_FILE" -o "${WASM_FILE}.tmp" && mv "${WASM_FILE}.tmp" "$WASM_FILE"
    echo "    ✓ wasm binary optimized"
else
    echo "    ⚠ wasm file not found at $WASM_FILE, skipping optimization"
fi

echo "==> ✓ All steps completed successfully!"
