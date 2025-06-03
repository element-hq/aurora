export function printRustError(msg: string, e: unknown) {
    if (typeof e === "object" && e !== null && "inner" in e) {
        console.error(msg, e, e.inner);
    }
    console.error(msg, e);
}
