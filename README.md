# aurora

A highly experimental attempt to plug matrix-rust-sdk into the browser (and originally Tauri), in order to
investigate what Element X Web/Desktop could look like.

Try it out at https://element-aurora.netlify.app/ 

![Screenshot 2025-06-06 at 14 12 09](https://github.com/user-attachments/assets/5406ae5d-d9af-426e-bd5d-799e66b8eee1)
![Screenshot 2024-03-11 at 09 56 17](https://github.com/element-hq/aurora/assets/1294269/52b77b95-4434-46bf-8ea2-a00f91988a07)

## Prereqs

```bash
cargo install wasm-bindgen-cli
yarn install
```

## To create the bindings

Bindings are currently vendored into the repo, run this to update them,

```bash
./build-wasm-bindings.sh
```

## To run

```bash
yarn && yarn dev
```

## To build:

```bash
yarn build
```

## For tauri

```bash
yarn tauri dev
yarn tauri build
```
