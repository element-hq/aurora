#!/bin/bash

set -e

# matrix-rust-sdk needs a recent stable; override with RUSTUP_TOOLCHAIN=...
export RUSTUP_TOOLCHAIN="${RUSTUP_TOOLCHAIN:-1.96}"
SDK_DIR=rust_modules/matrix-rust-sdk
# tantivy (the search engine behind the SDK's message search) with a patch that
# lets it run without threads, as in the browser. The SDK patches point its
# `[patch.crates-io]` at this checkout.
TANTIVY_DIR=rust_modules/tantivy-wasm
TANTIVY_TAG=0.26.2

echo "==> Step 1: Cleaning..."
pnpm ubrn:clean
rm -rf "$TANTIVY_DIR"

echo "==> Step 2: Checking out..."
pnpm ubrn:checkout

echo "==> Step 3: Resetting any modifications after checkout..."
git -C "$SDK_DIR" reset --hard HEAD
# Also drop files added by previously applied patches (build output is ignored, so it stays).
git -C "$SDK_DIR" clean -fd --quiet
echo "    ✓ Repository clean"

echo "==> Step 4: Checking out tantivy $TANTIVY_TAG..."
git clone --quiet --depth 1 --branch "$TANTIVY_TAG" https://github.com/quickwit-oss/tantivy "$TANTIVY_DIR"
for patch in patches/tantivy/*.patch; do
    if git -C "$TANTIVY_DIR" apply "../../$patch"; then
        echo "    ✓ Applied $patch"
    else
        echo "    ✗ Patch $patch failed!"
        exit 1
    fi
done

echo "==> Step 5: Applying matrix-rust-sdk patches..."
for patch in patches/matrix-rust-sdk/*.patch; do
    if git -C "$SDK_DIR" apply "../../$patch"; then
        echo "    ✓ Applied $patch"
    else
        echo "    ✗ Patch $patch failed!"
        exit 1
    fi
done

echo "==> Step 6: Removing bindings/wasm from workspace..."
# Remove the non-existent bindings/wasm from workspace members
sed -i.bak '/bindings\/wasm/d' "$SDK_DIR/Cargo.toml"
echo "    ✓ Removed from workspace"

echo "==> Step 7: Building web (first pass to generate wasm bindings)..."
pnpm ubrn:web:build:release || echo "    (First pass may have warnings)"

echo "==> Step 8: Adding bindings/wasm back to workspace..."
# Add bindings/wasm back to workspace members now that it exists
sed -i.bak '/"xtask",/a\
    "bindings/wasm",
' "$SDK_DIR/Cargo.toml"
echo "    ✓ Added back to workspace"

echo "==> Step 9: Building web (second pass with complete workspace)..."
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
# Prefer a wasm-opt on the PATH, else the one from the binaryen npm package.
WASM_OPT=$(command -v wasm-opt || echo "node_modules/.bin/wasm-opt")
if [ ! -x "$WASM_OPT" ]; then
    echo "    ⚠ wasm-opt not found (install binaryen), skipping optimization"
elif [ -f "$WASM_FILE" ]; then
    echo "    Optimizing $WASM_FILE (this may take a few minutes)..."
    "$WASM_OPT" -Oz "$WASM_FILE" -o "${WASM_FILE}.tmp" && mv "${WASM_FILE}.tmp" "$WASM_FILE"
    echo "    ✓ wasm binary optimized"
else
    echo "    ⚠ wasm file not found at $WASM_FILE, skipping optimization"
fi

echo "==> ✓ All steps completed successfully!"
