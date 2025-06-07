# aurora

A highly experimental attempt to plug matrix-rust-sdk into the browser (and originally Tauri), in order to
investigate what Element X Web/Desktop could look like.

![Screenshot 2025-06-06 at 14 12 09](https://github.com/user-attachments/assets/5406ae5d-d9af-426e-bd5d-799e66b8eee1)
![Screenshot 2024-03-11 at 09 56 17](https://github.com/element-hq/aurora/assets/1294269/52b77b95-4434-46bf-8ea2-a00f91988a07)

## Prereqs

```bash
cargo install wasm-bindgen-cli
yarn install
```

## To create the bindings

Do *not* run this - bindings are currently vendored into the repo.

```bash
yarn ubrn:checkout
yarn ubrn:web:build
// Will fail, edit rust_modules/matrix-rust-sdk/Cargo.toml to include bindings/wasm in the build targets
yarn ubrn:web:build
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

## Philosophy

Aurora is quite an opinionated experiment, making the following tradeoffs:

- Speed of dev, in order to get an instant feedback loop (and quick dopamine hit), in order to spike/port rapidly and
  be fun to hack on.
  - HMR via Vite - JS and CSS edits get picked up instantly (the rust SDK typically doesn't even get reloaded). Most
    changes in the rust layer are pretty quick too.
  - Minimal rust - using matrix-sdk-ui directly from JS with minimal FFI layer. (It's debatable how well this has worked out)
- Desktop first.
  - Tauri makes it [very easy](https://tauri.app/v1/guides/features/command/) to rapidly splice rust-sdk into a
    javascript app and get up and running, with maximum speed via native Rust (hooray) and none of the complexities
    of looping Rust code back into the JS runtime for storage, HTTP, etc.
  - However, the matrix-rust-sdk layer is abstracted by the tauri::command interface, such that one could in theory
    switch this easily for a [WASM](https://github.com/matrix-org/matrix-rust-sdk/compare/main...matthew/wasm) build
    of rust-sdk in-browser in future.
- Functional React components & hooks throughout.
  - Using React rather than Svelte or similar for familiarity with existing tooling and to make it way easier and fast
    to port code direct from Element Web
  - React may not be perfect, but it's good enough
  - Group code into related modules, rather than juggling loads of fiddly little files (see also speed of dev).
- Add abstractions incrementally as needed. (For instance, aurora's rust-sdk interface only supports subscribing to a single
  timeline at a time currently).
- `useSyncStateStore` for selectively exposing rust-sdk's state into the app. No fancy/mindbending Redux or MobX style
  stores.
- [Compound](https://compound.element.io) for CSS (albeit freestyling for now where tokens and components don't exist)
- Typescript throughout
- Minimum featureset, so one can test it with a real account to see how it feels and performs, but not use it (yet) as
  a daily driver.
- Keep It Simple & Stupid.

There aren't any tests yet (but if doing this for real, we should absolutely have each component come with its own tests,
both of its model and its UI).

Stuff that hasn't really been on the radar, but probably should be:

- MVVM for nice modular and testable components
- Progressive loading (unless vite does that automatically)

Stuff that is deliberately not in focus

- Features beyond the absolute bare essentials. This is meant to be a test jig for experimenting with EX, and piling
  on features for parity with EW only makes sense if it's going somewhere.

## Findings

Tauri is fun to work with and makes the process of calling matrix-rust-sdk trivial. Its DevX is super speedy and fun.

The problems along the way are:

- Tauri works by serialising everything to JSON when passing to the web layer. As a result, when using a high-level
  API like matrix-sdk-ui's Timeline API, the whole struct tree in Rust needs to derive serde::Serialize. Most of the
  time this is okay, but it's effectively gutwrenching the private API of matrix-rust-sdk. This has the following
  problems:
  - You have to sprinkle Serialize _everywhere_; including APIs which are clearly intended to be private (e.g. Ruma's
    `FullStateEventContent<_>`). In some places this is okay and it can be upstreamed; others, not so much.
  - You end up coupled to the private implementation of rust-sdk (and its dependencies), given you're exposing data
    rather than accessors.
  - You lose all the typing from the rust layer, and have to rebuild it in TS and manually keep it in sync.
  - Rust datastructures are not idiomatic in JavaScript. For instance it's common to do something like:

```rust
pub enum Event {
    MessageEvent(MessageContent),
    FileEvent(FileEvent),
    OtherEvent,
}
```

...which then gets serialised to:

```json
{
    "event": {
        "MessageEvent": {
            "content": { ... }
        }
    }
}
```

or

```json
{
  "event": "OtherEvent"
}
```

- In other words, the data type of the enum is stored as the key of an object field (ugh), and the data type of the
  MessageEvent key could either be a string or an object (double ugh).
- Structs which use a fancy enum as an object key won't serialize to JSON at all.
- Gut wrenching is super fragile; if your TS type mapping doesn't match rust-sdk's internals it'll just put nulls in
  things which are not meant to be nullable. The typing helps the app developer but doesn't actually provide any
  real safety.

So, in terms of the FFI problem, my conclusions are:

- Mapping to sensible FFI structures should be done in the rust SDK, not the calling app, to abstract the rust SDK's
  internals.
- This is what the rust SDK's uniffi FFI layer is already doing (albeit with too much business logic present)
- The right way to do this would be to modify the current uniffi layer to emit an FFI layer suitable for Tauri as well
  as WASMS (i.e. turning the `uniffi::Record`s into `serde::Serialize`s for Tauri, and emitting wasm-bindgen annotations
  for WASM). This would then propagate type safety correctly from Rust to TS.

However, it's a lot more motivating and fun to do that work now there's a plausible test jig on top to connect to, and
the minimum viable API surface that Aurora uses is tiny...

```rust
tauri::generate_handler![
            reset,
            login,
            subscribe_timeline,
            get_timeline_update,
            unsubscribe_timeline,
            subscribe_roomlist,
            get_roomlist_update,
            unsubscribe_roomlist,
            get_room_info,
            send_message,
        ]
```

...so it could be much easier and fun to finish the job by hooking up a proper FFI, having got a working framework to
iterate on.

Another thought is whether the FFI should try to expose the same object model as js-sdk (in terms of the shape of rooms
and events, at least), to make it easier to shift over things like event tiles directly from react-sdk.
This is probably a no brainer, but right now the FFI mirrors the rust-sdk's internal API rather than mapping to a
js-sdk shape. This might be an argument in favour of having web-specific FFI rather than reusing the existing
uniffi one.
