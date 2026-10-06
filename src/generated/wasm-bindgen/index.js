/* @ts-self-types="./index.d.ts" */

export class ForeignFutureCompleteF32 {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteF32Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompletef32_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteF32} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteF32);
        wasm.foreignfuturecompletef32_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteF32.prototype[Symbol.dispose] = ForeignFutureCompleteF32.prototype.free;

export class ForeignFutureCompleteF64 {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteF64Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompletef64_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteF64} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteF64);
        wasm.foreignfuturecompletef64_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteF64.prototype[Symbol.dispose] = ForeignFutureCompleteF64.prototype.free;

export class ForeignFutureCompleteI16 {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteI16Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompletei16_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteI16} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteI16);
        wasm.foreignfuturecompletei16_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteI16.prototype[Symbol.dispose] = ForeignFutureCompleteI16.prototype.free;

export class ForeignFutureCompleteI32 {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteI32Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompletei32_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteI32} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteI32);
        wasm.foreignfuturecompletei32_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteI32.prototype[Symbol.dispose] = ForeignFutureCompleteI32.prototype.free;

export class ForeignFutureCompleteI64 {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteI64Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompletei64_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteI64} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteI64);
        wasm.foreignfuturecompletei64_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteI64.prototype[Symbol.dispose] = ForeignFutureCompleteI64.prototype.free;

export class ForeignFutureCompleteI8 {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteI8Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompletei8_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteI8} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteI8);
        wasm.foreignfuturecompletei8_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteI8.prototype[Symbol.dispose] = ForeignFutureCompleteI8.prototype.free;

export class ForeignFutureCompleteRustBuffer {
    static __wrap(ptr) {
        const obj = Object.create(ForeignFutureCompleteRustBuffer.prototype);
        obj.__wbg_ptr = ptr;
        ForeignFutureCompleteRustBufferFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteRustBufferFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompleterustbuffer_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteRustBuffer} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteRustBuffer);
        wasm.foreignfuturecompleterustbuffer_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteRustBuffer.prototype[Symbol.dispose] = ForeignFutureCompleteRustBuffer.prototype.free;

export class ForeignFutureCompleteU16 {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteU16Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompleteu16_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteU16} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteU16);
        wasm.foreignfuturecompleteu16_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteU16.prototype[Symbol.dispose] = ForeignFutureCompleteU16.prototype.free;

export class ForeignFutureCompleteU32 {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteU32Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompleteu32_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteU32} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteU32);
        wasm.foreignfuturecompleteu32_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteU32.prototype[Symbol.dispose] = ForeignFutureCompleteU32.prototype.free;

export class ForeignFutureCompleteU64 {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteU64Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompleteu64_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteU64} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteU64);
        wasm.foreignfuturecompleteu64_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteU64.prototype[Symbol.dispose] = ForeignFutureCompleteU64.prototype.free;

export class ForeignFutureCompleteU8 {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteU8Finalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompleteu8_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteU8} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteU8);
        wasm.foreignfuturecompleteu8_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteU8.prototype[Symbol.dispose] = ForeignFutureCompleteU8.prototype.free;

export class ForeignFutureCompleteVoid {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ForeignFutureCompleteVoidFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_foreignfuturecompletevoid_free(ptr, 0);
    }
    /**
     * @param {ForeignFutureCompleteVoid} _ctx
     * @param {bigint} callback_data
     * @param {any} result
     */
    call(_ctx, callback_data, result) {
        _assertClass(_ctx, ForeignFutureCompleteVoid);
        wasm.foreignfuturecompletevoid_call(this.__wbg_ptr, _ctx.__wbg_ptr, callback_data, result);
    }
}
if (Symbol.dispose) ForeignFutureCompleteVoid.prototype[Symbol.dispose] = ForeignFutureCompleteVoid.prototype.free;

export class RustCallStatus {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RustCallStatusFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_rustcallstatus_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get code() {
        const ret = wasm.__wbg_get_rustcallstatus_code(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {Uint8Array | undefined}
     */
    get errorBuf() {
        const ptr = this.__destroy_into_raw();
        const ret = wasm.rustcallstatus_error_buf(ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    constructor() {
        const ret = wasm.rustcallstatus_new();
        this.__wbg_ptr = ret;
        RustCallStatusFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {Uint8Array | null} [bytes]
     */
    set errorBuf(bytes) {
        var ptr0 = isLikeNone(bytes) ? 0 : passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.rustcallstatus_set_error_buf(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {number} arg0
     */
    set code(arg0) {
        wasm.__wbg_set_rustcallstatus_code(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) RustCallStatus.prototype[Symbol.dispose] = RustCallStatus.prototype.free;

/**
 * A machine-readable representation of the authenticity for a `ShieldState`.
 * @enum {0 | 1 | 2 | 3 | 4 | 5}
 */
export const ShieldStateCode = Object.freeze({
    /**
     * Not enough information available to check the authenticity.
     */
    AuthenticityNotGuaranteed: 0, "0": "AuthenticityNotGuaranteed",
    /**
     * The sending device isn't yet known by the Client.
     */
    UnknownDevice: 1, "1": "UnknownDevice",
    /**
     * The sending device hasn't been verified by the sender.
     */
    UnsignedDevice: 2, "2": "UnsignedDevice",
    /**
     * The sender hasn't been verified by the Client's user.
     */
    UnverifiedIdentity: 3, "3": "UnverifiedIdentity",
    /**
     * The sender was previously verified but changed their identity.
     */
    VerificationViolation: 4, "4": "VerificationViolation",
    /**
     * The `sender` field on the event does not match the owner of the device
     * that established the Megolm session.
     */
    MismatchedSender: 5, "5": "MismatchedSender",
});

/**
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_base_uniffi_contract_version() {
    const ret = wasm.ubrn_ffi_matrix_sdk_base_uniffi_contract_version();
    return ret >>> 0;
}

/**
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_common_uniffi_contract_version() {
    const ret = wasm.ubrn_ffi_matrix_sdk_common_uniffi_contract_version();
    return ret >>> 0;
}

/**
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_contentscanner_uniffi_contract_version() {
    const ret = wasm.ubrn_ffi_matrix_sdk_contentscanner_uniffi_contract_version();
    return ret >>> 0;
}

/**
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_crypto_uniffi_contract_version() {
    const ret = wasm.ubrn_ffi_matrix_sdk_crypto_uniffi_contract_version();
    return ret >>> 0;
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_f32(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_f32(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_f64(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_f64(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i16(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i16(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i32(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i32(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i64(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i64(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i8(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i8(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_rust_buffer(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_rust_buffer(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u16(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u16(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u32(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u32(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u64(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u64(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u8(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u8(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_void(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_void(handle);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_f32(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_f32(handle, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_f64(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_f64(handle, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i16(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i16(handle, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i32(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i32(handle, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i64(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i64(handle, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i8(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i8(handle, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_rust_buffer(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_rust_buffer(handle, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u16(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u16(handle, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u32(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u32(handle, f_status_.__wbg_ptr);
    return ret >>> 0;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u64(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u64(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u8(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u8(handle, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_void(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_complete_void(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_f32(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_f32(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_f64(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_f64(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_i16(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_i16(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_i32(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_i32(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_i64(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_i64(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_i8(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_i8(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_rust_buffer(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_rust_buffer(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_u16(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_u16(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_u32(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_u32(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_u64(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_u64(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_u8(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_u8(handle);
}

/**
 * @param {bigint} handle
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_void(handle) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_free_void(handle);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_f32(handle, callback, callback_data) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_f32(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_f64(handle, callback, callback_data) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_f64(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i16(handle, callback, callback_data) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i16(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i32(handle, callback, callback_data) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i32(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i64(handle, callback, callback_data) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i64(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i8(handle, callback, callback_data) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i8(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_rust_buffer(handle, callback, callback_data) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_rust_buffer(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u16(handle, callback, callback_data) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u16(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u32(handle, callback, callback_data) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u32(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u64(handle, callback, callback_data) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u64(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u8(handle, callback, callback_data) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u8(handle, callback, callback_data);
}

/**
 * @param {bigint} handle
 * @param {any} callback
 * @param {bigint} callback_data
 */
export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_void(handle, callback, callback_data) {
    wasm.ubrn_ffi_matrix_sdk_ffi_rust_future_poll_void(handle, callback, callback_data);
}

/**
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_ffi_uniffi_contract_version() {
    const ret = wasm.ubrn_ffi_matrix_sdk_ffi_uniffi_contract_version();
    return ret >>> 0;
}

/**
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_ui_uniffi_contract_version() {
    const ret = wasm.ubrn_ffi_matrix_sdk_ui_uniffi_contract_version();
    return ret >>> 0;
}

/**
 * @returns {number}
 */
export function ubrn_ffi_matrix_sdk_uniffi_contract_version() {
    const ret = wasm.ubrn_ffi_matrix_sdk_uniffi_contract_version();
    return ret >>> 0;
}

/**
 * @returns {number}
 */
export function ubrn_ffi_ruma_events_uniffi_contract_version() {
    const ret = wasm.ubrn_ffi_ruma_events_uniffi_contract_version();
    return ret >>> 0;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_checksum_method_oauthauthorizationdata_login_url() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_checksum_method_oauthauthorizationdata_login_url();
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_crypto_fn_clone_backupsecrets(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_crypto_fn_clone_backupsecrets(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_crypto_fn_clone_crosssigningsecrets(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_crypto_fn_clone_crosssigningsecrets(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_crypto_fn_clone_secretsbundle(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_crypto_fn_clone_secretsbundle(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_crypto_fn_free_backupsecrets(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_crypto_fn_free_backupsecrets(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_crypto_fn_free_crosssigningsecrets(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_crypto_fn_free_crosssigningsecrets(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_crypto_fn_free_secretsbundle(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_crypto_fn_free_secretsbundle(handle, f_status_.__wbg_ptr);
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_clientbuilder_new() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_clientbuilder_new();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_contentscanner_new() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_contentscanner_new();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_indexeddbstorebuilder_new() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_indexeddbstorebuilder_new();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_mediasource_from_json() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_mediasource_from_json();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_mediasource_from_url() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_mediasource_from_url();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_passwordstrengthestimator_new() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_passwordstrengthestimator_new();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_passwordstrengthestimator_with_modern_defaults2025() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_passwordstrengthestimator_with_modern_defaults2025();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_passwordstrengthestimator_with_zxcvbn_defaults() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_passwordstrengthestimator_with_zxcvbn_defaults();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_qrcodedata_from_bytes() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_qrcodedata_from_bytes();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_secretsbundlewithuserid_from_str() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_secretsbundlewithuserid_from_str();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_span_current() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_span_current();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_span_new() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_span_new();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_span_new_bridge_span() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_span_new_bridge_span();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_content_without_relation_from_message() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_content_without_relation_from_message();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_create_caption_edit() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_create_caption_edit();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_gen_transaction_id() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_gen_transaction_id();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_generate_webview_url() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_generate_webview_url();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_get_element_call_required_permissions() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_get_element_call_required_permissions();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_init_platform() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_init_platform();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_is_room_alias_format_valid() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_is_room_alias_format_valid();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_json_string_contains_secrets_bundle() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_json_string_contains_secrets_bundle();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_log_event() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_log_event();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_make_widget_driver() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_make_widget_driver();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_matrix_to_room_alias_permalink() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_matrix_to_room_alias_permalink();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_matrix_to_user_permalink() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_matrix_to_user_permalink();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_html() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_html();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_html_as_emote() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_html_as_emote();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_markdown() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_markdown();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_markdown_as_emote() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_markdown_as_emote();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_new() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_new();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_new_virtual_element_call_widget() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_new_virtual_element_call_widget();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_parse_matrix_entity_from() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_parse_matrix_entity_from();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_reload_tracing_file_writer() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_reload_tracing_file_writer();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_room_alias_name_from_room_display_name() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_room_alias_name_from_room_display_name();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_sdk_git_sha() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_sdk_git_sha();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_server_name_from_user_id() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_server_name_from_user_id();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_suggested_power_level_for_role() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_suggested_power_level_for_role();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_suggested_role_for_power_level() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_func_suggested_role_for_power_level();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_accountdatalistener_on_change() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_accountdatalistener_on_change();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_backupstatelistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_backupstatelistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_backupsteadystatelistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_backupsteadystatelistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_beaconinfolistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_beaconinfolistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_calldeclinelistener_call() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_calldeclinelistener_call();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_checkcodesender_send() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_checkcodesender_send();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_abort_oauth_auth() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_abort_oauth_auth();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_account_data() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_account_data();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_account_url() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_account_url();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_available_sliding_sync_versions() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_available_sliding_sync_versions();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_avatar_url() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_avatar_url();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_await_room_remote_echo() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_await_room_remote_echo();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_cached_avatar_url() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_cached_avatar_url();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_can_deactivate_account() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_can_deactivate_account();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_clear_caches() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_clear_caches();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_clear_user_status() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_clear_user_status();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_content_scanner() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_content_scanner();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_create_room() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_create_room();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_custom_login_with_jwt() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_custom_login_with_jwt();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_deactivate_account() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_deactivate_account();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_delete_pusher() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_delete_pusher();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_device_id() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_device_id();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_disable_well_known_lookup() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_disable_well_known_lookup();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_display_name() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_display_name();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_enable_all_send_queues() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_enable_all_send_queues();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_enable_automatic_call_status() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_enable_automatic_call_status();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_enable_send_queue_upload_progress() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_enable_send_queue_upload_progress();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_encryption() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_encryption();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_fetch_media_preview_config() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_fetch_media_preview_config();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_dm_room() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_dm_room();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_dm_rooms() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_dm_rooms();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_invite_avatars_display_policy() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_invite_avatars_display_policy();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_max_media_upload_size() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_max_media_upload_size();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_content() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_content();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_file() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_file();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_preview_display_policy() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_preview_display_policy();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_thumbnail() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_thumbnail();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_notification_settings() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_notification_settings();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_profile() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_profile();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_recently_visited_rooms() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_recently_visited_rooms();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_room() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_room();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_room_preview_from_room_alias() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_room_preview_from_room_alias();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_room_preview_from_room_id() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_room_preview_from_room_id();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_session_verification_controller() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_session_verification_controller();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_store_sizes() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_store_sizes();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_url() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_url();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_url_preview() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_url_preview();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_homeserver() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_homeserver();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_homeserver_capabilities() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_homeserver_capabilities();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_homeserver_login_details() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_homeserver_login_details();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_ignore_user() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_ignore_user();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_ignored_users() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_ignored_users();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_livekit_rtc_supported() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_livekit_rtc_supported();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_login_with_qr_code_supported() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_login_with_qr_code_supported();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_profiles_sliding_sync_extension_supported() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_profiles_sliding_sync_extension_supported();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_report_room_api_supported() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_report_room_api_supported();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_room_alias_available() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_room_alias_available();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_user_status_supported() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_user_status_supported();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_join_room_by_id() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_join_room_by_id();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_join_room_by_id_or_alias() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_join_room_by_id_or_alias();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_knock() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_knock();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_login() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_login();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_login_with_email() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_login_with_email();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_login_with_oauth_callback() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_login_with_oauth_callback();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_logout() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_logout();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_mark_all_rooms_as_read() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_mark_all_rooms_as_read();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_new_grant_login_with_qr_code_handler() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_new_grant_login_with_qr_code_handler();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_new_login_with_qr_code_handler() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_new_login_with_qr_code_handler();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_notification_client() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_notification_client();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_notification_client_with_timeouts() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_notification_client_with_timeouts();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_observe_account_data_event() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_observe_account_data_event();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_observe_room_account_data_event() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_observe_room_account_data_event();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_optimize_stores() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_optimize_stores();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_pause() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_pause();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_register_notification_handler() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_register_notification_handler();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_remove_avatar() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_remove_avatar();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_request_openid_token() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_request_openid_token();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_reset_supported_versions() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_reset_supported_versions();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_reset_well_known() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_reset_well_known();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_resolve_room_alias() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_resolve_room_alias();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_restore_session() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_restore_session();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_restore_session_with() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_restore_session_with();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_resume() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_resume();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_room_alias_exists() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_room_alias_exists();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_room_directory_search() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_room_directory_search();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_rooms() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_rooms();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_search_users() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_search_users();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_server() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_server();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_server_vendor_info() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_server_vendor_info();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_session() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_session();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_account_data() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_account_data();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_avatar_url() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_avatar_url();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_content_scanner() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_content_scanner();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_delegate() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_delegate();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_display_name() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_display_name();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_invite_avatars_display_policy() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_invite_avatars_display_policy();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_media_preview_display_policy() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_media_preview_display_policy();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_media_retention_policy() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_media_retention_policy();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_presence() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_presence();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_pusher() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_pusher();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_user_status() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_user_status();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_utd_delegate() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_utd_delegate();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sliding_sync_version() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sliding_sync_version();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_space_service() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_space_service();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_start_sso_login() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_start_sso_login();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_duplicate_key_upload_errors() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_duplicate_key_upload_errors();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_ignored_users() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_ignored_users();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_media_preview_config() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_media_preview_config();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_own_beacon_info_updates() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_own_beacon_info_updates();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_own_profile() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_own_profile();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_room_info() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_room_info();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_send_queue_status() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_send_queue_status();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_send_queue_updates() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_send_queue_updates();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sync_once_v2() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sync_once_v2();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sync_service() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sync_service();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sync_v2() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sync_v2();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_tile_server() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_tile_server();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_total_unread_notifications() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_total_unread_notifications();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_track_recently_visited_room() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_track_recently_visited_room();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_unignore_user() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_unignore_user();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_upload_avatar() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_upload_avatar();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_upload_media() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_upload_media();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_url_for_oauth() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_url_for_oauth();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_user_id() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_user_id();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_user_id_server_name() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_user_id_server_name();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_add_root_certificates() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_add_root_certificates();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_auto_enable_backups() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_auto_enable_backups();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_auto_enable_cross_signing() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_auto_enable_cross_signing();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_backup_download_strategy() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_backup_download_strategy();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_build() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_build();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_cross_process_lock_config() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_cross_process_lock_config();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_decryption_settings() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_decryption_settings();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_automatic_token_refresh() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_automatic_token_refresh();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_built_in_root_certificates() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_built_in_root_certificates();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_ssl_verification() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_ssl_verification();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_well_known_lookup() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_well_known_lookup();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_dm_room_definition() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_dm_room_definition();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_enable_automatic_back_pagination() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_enable_automatic_back_pagination();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_enable_share_history_on_invite() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_enable_share_history_on_invite();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_homeserver_url() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_homeserver_url();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_in_memory_store() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_in_memory_store();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_indexeddb_store() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_indexeddb_store();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_proxy() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_proxy();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_request_config() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_request_config();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_room_key_recipient_strategy() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_room_key_recipient_strategy();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_name() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_name();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_name_from_user_id() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_name_from_user_id();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_name_or_homeserver_url() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_name_or_homeserver_url();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_set_session_delegate() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_set_session_delegate();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_sliding_sync_version_builder() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_sliding_sync_version_builder();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_system_is_memory_constrained() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_system_is_memory_constrained();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_threads_enabled() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_threads_enabled();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_user_agent() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_user_agent();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientdelegate_did_receive_auth_error() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientdelegate_did_receive_auth_error();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientdelegate_on_background_task_error_report() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientdelegate_on_background_task_error_report();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientsessiondelegate_retrieve_session_from_keychain() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientsessiondelegate_retrieve_session_from_keychain();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientsessiondelegate_save_session_in_keychain() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientsessiondelegate_save_session_in_keychain();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_contentscanner_scan() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_contentscanner_scan();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_continuationmessagesender_cancel() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_continuationmessagesender_cancel();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_continuationmessagesender_confirm() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_continuationmessagesender_confirm();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_dehydrateddeviceeventlistener_on_event() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_dehydrateddeviceeventlistener_on_event();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_duplicatekeyuploaderrorlistener_on_duplicate_key_upload_error() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_duplicatekeyuploaderrorlistener_on_duplicate_key_upload_error();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_enablerecoveryprogresslistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_enablerecoveryprogresslistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_exists_on_server() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_exists_on_server();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_state() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_state();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_state_listener() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_state_listener();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_create_dehydrated_device() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_create_dehydrated_device();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_curve25519_key() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_curve25519_key();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_dehydrated_device_event_listener() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_dehydrated_device_event_listener();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_delete_dehydrated_device() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_delete_dehydrated_device();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_disable_recovery() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_disable_recovery();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_ed25519_key() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_ed25519_key();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_enable_backups() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_enable_backups();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_enable_recovery() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_enable_recovery();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_has_devices_to_verify_against() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_has_devices_to_verify_against();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_import_secrets_bundle() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_import_secrets_bundle();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_is_dehydrated_device_supported() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_is_dehydrated_device_supported();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_is_last_device() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_is_last_device();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recover() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recover();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recover_and_fix_backup() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recover_and_fix_backup();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recover_and_reset() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recover_and_reset();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recovery_state() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recovery_state();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recovery_state_listener() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recovery_state_listener();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_rehydrate_dehydrated_device() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_rehydrate_dehydrated_device();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_reset_identity() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_reset_identity();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_reset_recovery_key() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_reset_recovery_key();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_start_dehydrated_devices() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_start_dehydrated_devices();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_stop_dehydrated_devices() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_stop_dehydrated_devices();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_user_identity() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_user_identity();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_verification_state() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_verification_state();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_verification_state_listener() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_verification_state_listener();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_wait_for_backup_upload_steady_state() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_wait_for_backup_upload_steady_state();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_wait_for_e2ee_initialization_tasks() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_wait_for_e2ee_initialization_tasks();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_generatedqrloginprogresslistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_generatedqrloginprogresslistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantgeneratedqrloginprogresslistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantgeneratedqrloginprogresslistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantloginwithqrcodehandler_generate() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantloginwithqrcodehandler_generate();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantloginwithqrcodehandler_scan() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantloginwithqrcodehandler_scan();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantqrloginprogresslistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantqrloginprogresslistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_avatar() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_avatar();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_displayname() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_displayname();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_password() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_password();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_thirdparty_ids() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_thirdparty_ids();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_get_login_token() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_get_login_token();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_extended_profile_fields() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_extended_profile_fields();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_forgets_room_when_leaving() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_forgets_room_when_leaving();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_refresh() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_refresh();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_sliding_sync_version() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_sliding_sync_version();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supported_oauth_prompts() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supported_oauth_prompts();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_oauth_login() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_oauth_login();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_password_login() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_password_login();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_sso_login() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_sso_login();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_url() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_url();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_identityresethandle_auth_type() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_identityresethandle_auth_type();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_identityresethandle_cancel() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_identityresethandle_cancel();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_identityresethandle_reset() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_identityresethandle_reset();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_identitystatuschangelistener_call() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_identitystatuschangelistener_call();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_ignoreduserslistener_call() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_ignoreduserslistener_call();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_indexeddbstorebuilder_passphrase() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_indexeddbstorebuilder_passphrase();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_inreplytodetails_event() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_inreplytodetails_event();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_inreplytodetails_event_id() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_inreplytodetails_event_id();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_accept() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_accept();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_decline() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_decline();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_decline_and_ban() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_decline_and_ban();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_mark_as_seen() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_mark_as_seen();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestslistener_call() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestslistener_call();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_contains_only_emojis() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_contains_only_emojis();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_debug_info() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_debug_info();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_get_send_handle() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_get_send_handle();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_get_shields() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_get_shields();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_latest_json() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_latest_json();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_leavespacehandle_leave() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_leavespacehandle_leave();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_leavespacehandle_rooms() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_leavespacehandle_rooms();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_livelocationslistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_livelocationslistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_livelocationsobserver_subscribe() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_livelocationsobserver_subscribe();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_loginwithqrcodehandler_generate() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_loginwithqrcodehandler_generate();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_loginwithqrcodehandler_scan() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_loginwithqrcodehandler_scan();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediafilehandle_path() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediafilehandle_path();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediafilehandle_persist() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediafilehandle_persist();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediapreviewconfiglistener_on_change() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediapreviewconfiglistener_on_change();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediasource_to_json() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediasource_to_json();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediasource_url() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediasource_url();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_notification() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_notification();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_notifications() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_notifications();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_room() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_room();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_timeouts() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_timeouts();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_can_homeserver_push_encrypted_event_to_device() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_can_homeserver_push_encrypted_event_to_device();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_can_push_encrypted_event_to_device() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_can_push_encrypted_event_to_device();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_contains_keywords_rules() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_contains_keywords_rules();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_default_room_notification_mode() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_default_room_notification_mode();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_raw_push_rules() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_raw_push_rules();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_room_notification_settings() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_room_notification_settings();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_rooms_with_user_defined_rules() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_rooms_with_user_defined_rules();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_user_defined_room_notification_mode() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_user_defined_room_notification_mode();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_call_enabled() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_call_enabled();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_invite_for_me_enabled() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_invite_for_me_enabled();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_room_mention_enabled() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_room_mention_enabled();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_user_mention_enabled() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_user_mention_enabled();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_restore_default_room_notification_mode() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_restore_default_room_notification_mode();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_call_enabled() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_call_enabled();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_custom_push_rule() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_custom_push_rule();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_default_room_notification_mode() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_default_room_notification_mode();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_delegate() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_delegate();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_invite_for_me_enabled() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_invite_for_me_enabled();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_room_mention_enabled() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_room_mention_enabled();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_room_notification_mode() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_room_notification_mode();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_user_mention_enabled() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_user_mention_enabled();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_unmute_room() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_unmute_room();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettingsdelegate_settings_did_change() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettingsdelegate_settings_did_change();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_paginationstatuslistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_paginationstatuslistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_passwordstrengthestimator_estimate() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_passwordstrengthestimator_estimate();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_passwordstrengthestimator_thresholds() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_passwordstrengthestimator_thresholds();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_profilelistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_profilelistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_progresswatcher_transmission_progress() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_progresswatcher_transmission_progress();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_base_url() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_base_url();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_intent() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_intent();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_server_name() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_server_name();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_to_bytes() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_to_bytes();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrloginprogresslistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrloginprogresslistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_recoverystatelistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_recoverystatelistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_active_human_member_ids() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_active_human_member_ids();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_active_human_member_ids_no_sync() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_active_human_member_ids_no_sync();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_active_members_count() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_active_members_count();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_active_room_call_participants() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_active_room_call_participants();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_alternative_aliases() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_alternative_aliases();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_apply_power_level_changes() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_apply_power_level_changes();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_avatar_url() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_avatar_url();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_ban_user() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_ban_user();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_canonical_alias() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_canonical_alias();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_clear_composer_draft() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_clear_composer_draft();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_decline_call() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_decline_call();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_discard_room_key() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_discard_room_key();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_display_name() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_display_name();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_edit() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_edit();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_enable_encryption() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_enable_encryption();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_enable_send_queue() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_enable_send_queue();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_encryption_state() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_encryption_state();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_fetch_thread_subscription() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_fetch_thread_subscription();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_forget() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_forget();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_get_power_levels() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_get_power_levels();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_get_room_visibility() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_get_room_visibility();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_has_active_room_call() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_has_active_room_call();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_heroes() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_heroes();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_id() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_id();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_ignore_device_trust_and_resend() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_ignore_device_trust_and_resend();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_ignore_user() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_ignore_user();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_invite_user_by_id() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_invite_user_by_id();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_invited_members_count() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_invited_members_count();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_inviter() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_inviter();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_direct() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_direct();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_encrypted() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_encrypted();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_public() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_public();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_send_queue_enabled() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_send_queue_enabled();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_space() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_space();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_join() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_join();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_joined_members_count() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_joined_members_count();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_kick_user() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_kick_user();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_latest_encryption_state() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_latest_encryption_state();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_latest_event() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_latest_event();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_leave() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_leave();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_live_locations_observer() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_live_locations_observer();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_load_composer_draft() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_load_composer_draft();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_load_or_fetch_event() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_load_or_fetch_event();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_load_or_fetch_event_with_relations() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_load_or_fetch_event_with_relations();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_load_user_receipt() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_load_user_receipt();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_mark_as_fully_read_unchecked() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_mark_as_fully_read_unchecked();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_mark_as_read() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_mark_as_read();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_matrix_to_event_permalink() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_matrix_to_event_permalink();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_matrix_to_permalink() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_matrix_to_permalink();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member_avatar_url() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member_avatar_url();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member_display_name() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member_display_name();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member_with_sender_info() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member_with_sender_info();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_members() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_members();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_members_no_sync() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_members_no_sync();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_membership() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_membership();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_own_user_id() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_own_user_id();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_predecessor_room() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_predecessor_room();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_preview_room() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_preview_room();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_publish_room_alias_in_room_directory() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_publish_room_alias_in_room_directory();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_raw_name() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_raw_name();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_redact() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_redact();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_remove_avatar() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_remove_avatar();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_remove_room_alias_from_room_directory() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_remove_room_alias_from_room_directory();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_report_content() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_report_content();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_report_room() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_report_room();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_reset_power_levels() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_reset_power_levels();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_room_events_debug_string() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_room_events_debug_string();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_room_info() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_room_info();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_save_composer_draft() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_save_composer_draft();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_live_location() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_live_location();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_raw() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_raw();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_single_receipt() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_single_receipt();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_state_event_raw() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_state_event_raw();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_is_favourite() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_is_favourite();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_is_low_priority() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_is_low_priority();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_name() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_name();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_own_member_display_name() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_own_member_display_name();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_thread_subscription() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_thread_subscription();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_topic() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_topic();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_unread_flag() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_unread_flag();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_start_live_location_share() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_start_live_location_share();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_stop_live_location_share() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_stop_live_location_share();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_call_decline_events() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_call_decline_events();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_identity_status_changes() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_identity_status_changes();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_knock_requests() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_knock_requests();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_room_info_updates() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_room_info_updates();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_send_queue_updates() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_send_queue_updates();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_typing_notifications() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_typing_notifications();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_successor_room() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_successor_room();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_suggested_role_for_user() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_suggested_role_for_user();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_thread_list_service() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_thread_list_service();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_timeline() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_timeline();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_timeline_with_configuration() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_timeline_with_configuration();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_topic() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_topic();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_typing_notice() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_typing_notice();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_unban_user() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_unban_user();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_canonical_alias() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_canonical_alias();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_history_visibility() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_history_visibility();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_join_rules() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_join_rules();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_power_levels_for_users() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_power_levels_for_users();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_room_visibility() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_room_visibility();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_upload_avatar() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_upload_avatar();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_withdraw_verification_and_resend() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_withdraw_verification_and_resend();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomaccountdatalistener_on_change() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomaccountdatalistener_on_change();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_is_at_last_page() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_is_at_last_page();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_loaded_pages() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_loaded_pages();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_next_page() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_next_page();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_results() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_results();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_search() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_search();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearchentrieslistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearchentrieslistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roominfolistener_call() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roominfolistener_call();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlist_entries_with_dynamic_adapters() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlist_entries_with_dynamic_adapters();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlist_loading_state() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlist_loading_state();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlist_room() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlist_room();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_add_one_page() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_add_one_page();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_reset_to_one_page() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_reset_to_one_page();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_set_filter() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_set_filter();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieslistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieslistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieswithdynamicadaptersresult_controller() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieswithdynamicadaptersresult_controller();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieswithdynamicadaptersresult_entries_stream() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieswithdynamicadaptersresult_entries_stream();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistloadingstatelistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistloadingstatelistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_all_rooms() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_all_rooms();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_remove_room_subscriptions() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_remove_room_subscriptions();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_reset_and_add_room_subscriptions() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_reset_and_add_room_subscriptions();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_room() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_room();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_set_room_subscriptions() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_set_room_subscriptions();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_state() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_state();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_sync_indicator() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_sync_indicator();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservicestatelistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservicestatelistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservicesyncindicatorlistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservicesyncindicatorlistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roommembersiterator_len() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roommembersiterator_len();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roommembersiterator_next_chunk() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roommembersiterator_next_chunk();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roommessageeventcontentwithoutrelation_with_mentions() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roommessageeventcontentwithoutrelation_with_mentions();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_ban() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_ban();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_invite() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_invite();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_kick() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_kick();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_pin_unpin() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_pin_unpin();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_redact_other() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_redact_other();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_redact_own() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_redact_own();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_send_message() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_send_message();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_send_state() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_send_state();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_trigger_room_notification() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_trigger_room_notification();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_ban() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_ban();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_invite() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_invite();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_kick() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_kick();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_pin_unpin() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_pin_unpin();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_redact_other() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_redact_other();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_redact_own() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_redact_own();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_send_message() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_send_message();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_send_state() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_send_state();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_trigger_room_notification() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_trigger_room_notification();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_events() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_events();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_user_power_levels() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_user_power_levels();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_values() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_values();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_forget() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_forget();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_info() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_info();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_inviter() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_inviter();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_leave() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_leave();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_own_membership_details() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_own_membership_details();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_secretsbundlewithuserid_contains_backup_key() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_secretsbundlewithuserid_contains_backup_key();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendattachmentjoinhandle_cancel() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendattachmentjoinhandle_cancel();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendattachmentjoinhandle_join() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendattachmentjoinhandle_join();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendhandle_abort() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendhandle_abort();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendhandle_try_resend() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendhandle_try_resend();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendqueuelistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendqueuelistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendqueueroomerrorlistener_on_error() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendqueueroomerrorlistener_on_error();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendqueueroomupdatelistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendqueueroomupdatelistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_accept_verification_request() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_accept_verification_request();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_acknowledge_verification_request() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_acknowledge_verification_request();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_approve_verification() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_approve_verification();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_cancel_verification() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_cancel_verification();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_decline_verification() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_decline_verification();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_request_device_verification() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_request_device_verification();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_request_user_verification() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_request_user_verification();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_set_delegate() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_set_delegate();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_start_sas_verification() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_start_sas_verification();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_accept_verification_request() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_accept_verification_request();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_cancel() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_cancel();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_fail() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_fail();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_finish() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_finish();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_receive_verification_data() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_receive_verification_data();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_receive_verification_request() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_receive_verification_request();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_start_sas_verification() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_start_sas_verification();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationemoji_description() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationemoji_description();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationemoji_symbol() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationemoji_symbol();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_paginate() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_paginate();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_pagination_state() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_pagination_state();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_reset() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_reset();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_rooms() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_rooms();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_space() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_space();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_subscribe_to_pagination_state_updates() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_subscribe_to_pagination_state_updates();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_subscribe_to_room_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_subscribe_to_room_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_subscribe_to_space_updates() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_subscribe_to_space_updates();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlistentrieslistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlistentrieslistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlistpaginationstatelistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlistpaginationstatelistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlistspacelistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlistspacelistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_add_child_to_space() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_add_child_to_space();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_editable_spaces() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_editable_spaces();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_get_space_room() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_get_space_room();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_joined_parent_ids_of_child() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_joined_parent_ids_of_child();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_joined_parents_of_child() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_joined_parents_of_child();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_leave_space() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_leave_space();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_remove_child_from_space() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_remove_child_from_space();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_space_filters() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_space_filters();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_space_room_list() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_space_room_list();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_subscribe_to_space_filters() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_subscribe_to_space_filters();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_subscribe_to_top_level_joined_spaces() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_subscribe_to_top_level_joined_spaces();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_top_level_ancestors_of() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_top_level_ancestors_of();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_top_level_joined_spaces() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_top_level_joined_spaces();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservicejoinedspaceslistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservicejoinedspaceslistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservicespacefilterslistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservicespacefilterslistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_span_enter() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_span_enter();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_span_exit() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_span_exit();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_span_is_none() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_span_is_none();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_ssohandler_finish() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_ssohandler_finish();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_ssohandler_url() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_ssohandler_url();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_synclistenerv2_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_synclistenerv2_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncnotificationlistener_on_notification() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncnotificationlistener_on_notification();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_expire_sessions() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_expire_sessions();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_room_list_service() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_room_list_service();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_start() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_start();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_state() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_state();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_stop() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_stop();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_finish() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_finish();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_offline_mode() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_offline_mode();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_parent_span() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_parent_span();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_room_list_connection_id() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_room_list_connection_id();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_room_list_timeline_limit() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_room_list_timeline_limit();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_share_pos() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_share_pos();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicestateobserver_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicestateobserver_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_taskhandle_cancel() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_taskhandle_cancel();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_taskhandle_is_finished() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_taskhandle_is_finished();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistentrieslistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistentrieslistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistpaginationstatelistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistpaginationstatelistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_items() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_items();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_paginate() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_paginate();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_pagination_state() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_pagination_state();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_reset() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_reset();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_subscribe_to_items_updates() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_subscribe_to_items_updates();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_subscribe_to_pagination_state_updates() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_subscribe_to_pagination_state_updates();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadsummary_latest_event() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadsummary_latest_event();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadsummary_num_replies() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadsummary_num_replies();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_add_listener() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_add_listener();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_create_message_content() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_create_message_content();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_create_poll() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_create_poll();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_edit() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_edit();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_edit_revisions() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_edit_revisions();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_end_poll() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_end_poll();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_fetch_details_for_event() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_fetch_details_for_event();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_fetch_members() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_fetch_members();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_get_event_timeline_item_by_event_id() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_get_event_timeline_item_by_event_id();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_latest_event_id() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_latest_event_id();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_load_reply_details() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_load_reply_details();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_mark_as_read() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_mark_as_read();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_paginate_backwards() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_paginate_backwards();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_paginate_forwards() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_paginate_forwards();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_pin_event() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_pin_event();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_redact_event() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_redact_event();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_retry_decryption() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_retry_decryption();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_audio() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_audio();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_file() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_file();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_image() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_image();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_location() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_location();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_poll_response() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_poll_response();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_read_receipt() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_read_receipt();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_reply() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_reply();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_video() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_video();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_voice_message() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_voice_message();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_with_extra_content() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_with_extra_content();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_subscribe_to_back_pagination_status() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_subscribe_to_back_pagination_status();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_toggle_reaction() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_toggle_reaction();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_toggle_reaction_with_extra_content() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_toggle_reaction_with_extra_content();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_unpin_event() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_unpin_event();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_content() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_content();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_event_id() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_event_id();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_sender_id() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_sender_id();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_thread_root_event_id() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_thread_root_event_id();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_timestamp() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_timestamp();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_as_event() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_as_event();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_as_virtual() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_as_virtual();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_fmt_debug() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_fmt_debug();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_unique_id() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_unique_id();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelinelistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelinelistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_typingnotificationslistener_call() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_typingnotificationslistener_call();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_unabletodecryptdelegate_on_utd() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_unabletodecryptdelegate_on_utd();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_has_notifications() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_has_notifications();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_highlight_count() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_highlight_count();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_notification_count() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_notification_count();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_has_verification_violation() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_has_verification_violation();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_is_verified() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_is_verified();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_master_key() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_master_key();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_pin() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_pin();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_was_previously_verified() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_was_previously_verified();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_withdraw_verification() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_withdraw_verification();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_verificationstatelistener_on_update() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_verificationstatelistener_on_update();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetcapabilitiesprovider_acquire_capabilities() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetcapabilitiesprovider_acquire_capabilities();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetdriver_run() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetdriver_run();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetdriverhandle_recv() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetdriverhandle_recv();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetdriverhandle_send() {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetdriverhandle_send();
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_checkcodesender(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_checkcodesender(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_client(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_client(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_clientbuilder(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_clientbuilder(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_contentscanner(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_contentscanner(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_continuationmessagesender(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_continuationmessagesender(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_encryption(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_encryption(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_grantloginwithqrcodehandler(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_grantloginwithqrcodehandler(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_homeservercapabilities(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_homeservercapabilities(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_homeserverlogindetails(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_homeserverlogindetails(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_identityresethandle(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_identityresethandle(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_indexeddbstorebuilder(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_indexeddbstorebuilder(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_inreplytodetails(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_inreplytodetails(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_knockrequestactions(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_knockrequestactions(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_lazytimelineitemprovider(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_lazytimelineitemprovider(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_leavespacehandle(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_leavespacehandle(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_livelocationsobserver(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_livelocationsobserver(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_loginwithqrcodehandler(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_loginwithqrcodehandler(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_mediafilehandle(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_mediafilehandle(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_mediasource(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_mediasource(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_notificationclient(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_notificationclient(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_notificationsettings(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_notificationsettings(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_passwordstrengthestimator(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_passwordstrengthestimator(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_qrcodedata(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_qrcodedata(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_room(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_room(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomdirectorysearch(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomdirectorysearch(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlist(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlist(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlistdynamicentriescontroller(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlistdynamicentriescontroller(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlistentrieswithdynamicadaptersresult(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlistentrieswithdynamicadaptersresult(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlistservice(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlistservice(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roommembersiterator(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_roommembersiterator(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roommessageeventcontentwithoutrelation(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_roommessageeventcontentwithoutrelation(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roompowerlevels(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_roompowerlevels(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roompreview(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_roompreview(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_secretsbundlewithuserid(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_secretsbundlewithuserid(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_sendattachmentjoinhandle(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_sendattachmentjoinhandle(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_sendhandle(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_sendhandle(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_sessionverificationcontroller(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_sessionverificationcontroller(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_sessionverificationemoji(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_sessionverificationemoji(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_spaceroomlist(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_spaceroomlist(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_spaceservice(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_spaceservice(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_span(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_span(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_ssohandler(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_ssohandler(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_syncservice(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_syncservice(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_syncservicebuilder(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_syncservicebuilder(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_taskhandle(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_taskhandle(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_threadlistservice(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_threadlistservice(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_threadsummary(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_threadsummary(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_timeline(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_timeline(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_timelineevent(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_timelineevent(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_timelineitem(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_timelineitem(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_unreadnotificationscount(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_unreadnotificationscount(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_useridentity(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_useridentity(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_widgetdriver(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_widgetdriver(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_widgetdriverhandle(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_clone_widgetdriverhandle(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_clientbuilder_new(f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_clientbuilder_new(f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} scanner_url
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_contentscanner_new(scanner_url, f_status_) {
    const ptr0 = passArray8ToWasm0(scanner_url, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_contentscanner_new(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} name
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_indexeddbstorebuilder_new(name, f_status_) {
    const ptr0 = passArray8ToWasm0(name, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_indexeddbstorebuilder_new(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} json
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_mediasource_from_json(json, f_status_) {
    const ptr0 = passArray8ToWasm0(json, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_mediasource_from_json(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} url
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_mediasource_from_url(url, f_status_) {
    const ptr0 = passArray8ToWasm0(url, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_mediasource_from_url(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} thresholds
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_passwordstrengthestimator_new(thresholds, f_status_) {
    const ptr0 = passArray8ToWasm0(thresholds, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_passwordstrengthestimator_new(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_passwordstrengthestimator_with_modern_defaults2025(f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_passwordstrengthestimator_with_modern_defaults2025(f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_passwordstrengthestimator_with_zxcvbn_defaults(f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_passwordstrengthestimator_with_zxcvbn_defaults(f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} bytes
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_qrcodedata_from_bytes(bytes, f_status_) {
    const ptr0 = passArray8ToWasm0(bytes, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_qrcodedata_from_bytes(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} user_id
 * @param {Uint8Array} bundle
 * @param {Uint8Array} backup_info
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_secretsbundlewithuserid_from_str(user_id, bundle, backup_info, f_status_) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(bundle, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(backup_info, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_secretsbundlewithuserid_from_str(ptr0, len0, ptr1, len1, ptr2, len2, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_span_current(f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_span_current(f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} file
 * @param {Uint8Array} line
 * @param {Uint8Array} level
 * @param {Uint8Array} target
 * @param {Uint8Array} name
 * @param {Uint8Array} bridge_trace_id
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_span_new(file, line, level, target, name, bridge_trace_id, f_status_) {
    const ptr0 = passArray8ToWasm0(file, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(line, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(level, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ptr3 = passArray8ToWasm0(target, wasm.__wbindgen_malloc);
    const len3 = WASM_VECTOR_LEN;
    const ptr4 = passArray8ToWasm0(name, wasm.__wbindgen_malloc);
    const len4 = WASM_VECTOR_LEN;
    const ptr5 = passArray8ToWasm0(bridge_trace_id, wasm.__wbindgen_malloc);
    const len5 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_span_new(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, ptr5, len5, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} target
 * @param {Uint8Array} parent_trace_id
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_span_new_bridge_span(target, parent_trace_id, f_status_) {
    const ptr0 = passArray8ToWasm0(target, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(parent_trace_id, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_constructor_span_new_bridge_span(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_checkcodesender(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_checkcodesender(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_client(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_client(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_clientbuilder(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_clientbuilder(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_contentscanner(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_contentscanner(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_continuationmessagesender(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_continuationmessagesender(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_encryption(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_encryption(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_grantloginwithqrcodehandler(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_grantloginwithqrcodehandler(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_homeservercapabilities(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_homeservercapabilities(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_homeserverlogindetails(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_homeserverlogindetails(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_identityresethandle(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_identityresethandle(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_indexeddbstorebuilder(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_indexeddbstorebuilder(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_inreplytodetails(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_inreplytodetails(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_knockrequestactions(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_knockrequestactions(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_lazytimelineitemprovider(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_lazytimelineitemprovider(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_leavespacehandle(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_leavespacehandle(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_livelocationsobserver(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_livelocationsobserver(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_loginwithqrcodehandler(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_loginwithqrcodehandler(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_mediafilehandle(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_mediafilehandle(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_mediasource(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_mediasource(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_notificationclient(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_notificationclient(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_notificationsettings(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_notificationsettings(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_passwordstrengthestimator(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_passwordstrengthestimator(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_qrcodedata(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_qrcodedata(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_room(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_room(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roomdirectorysearch(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_roomdirectorysearch(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlist(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlist(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlistdynamicentriescontroller(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlistdynamicentriescontroller(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlistentrieswithdynamicadaptersresult(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlistentrieswithdynamicadaptersresult(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlistservice(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlistservice(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roommembersiterator(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_roommembersiterator(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roommessageeventcontentwithoutrelation(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_roommessageeventcontentwithoutrelation(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roompowerlevels(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_roompowerlevels(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roompreview(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_roompreview(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_secretsbundlewithuserid(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_secretsbundlewithuserid(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_sendattachmentjoinhandle(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_sendattachmentjoinhandle(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_sendhandle(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_sendhandle(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_sessionverificationcontroller(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_sessionverificationcontroller(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_sessionverificationemoji(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_sessionverificationemoji(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_spaceroomlist(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_spaceroomlist(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_spaceservice(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_spaceservice(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_span(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_span(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_ssohandler(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_ssohandler(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_syncservice(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_syncservice(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_syncservicebuilder(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_syncservicebuilder(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_taskhandle(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_taskhandle(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_threadlistservice(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_threadlistservice(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_threadsummary(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_threadsummary(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_timeline(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_timeline(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_timelineevent(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_timelineevent(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_timelineitem(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_timelineitem(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_unreadnotificationscount(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_unreadnotificationscount(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_useridentity(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_useridentity(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_widgetdriver(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_widgetdriver(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_free_widgetdriverhandle(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_free_widgetdriverhandle(handle, f_status_.__wbg_ptr);
}

/**
 * @param {Uint8Array} message
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_content_without_relation_from_message(message, f_status_) {
    const ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_content_without_relation_from_message(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} caption
 * @param {Uint8Array} formatted_caption
 * @param {Uint8Array} mentions
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_create_caption_edit(caption, formatted_caption, mentions, f_status_) {
    const ptr0 = passArray8ToWasm0(caption, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(formatted_caption, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(mentions, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_create_caption_edit(ptr0, len0, ptr1, len1, ptr2, len2, f_status_.__wbg_ptr);
    var v4 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v4;
}

/**
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_gen_transaction_id(f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_gen_transaction_id(f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {Uint8Array} widget_settings
 * @param {bigint} room
 * @param {Uint8Array} props
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_generate_webview_url(widget_settings, room, props) {
    const ptr0 = passArray8ToWasm0(widget_settings, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(props, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_generate_webview_url(ptr0, len0, room, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} own_user_id
 * @param {Uint8Array} own_device_id
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_get_element_call_required_permissions(own_user_id, own_device_id, f_status_) {
    const ptr0 = passArray8ToWasm0(own_user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(own_device_id, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_get_element_call_required_permissions(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    var v3 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v3;
}

/**
 * @param {Uint8Array} config
 * @param {number} use_lightweight_tokio_runtime
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_init_platform(config, use_lightweight_tokio_runtime, f_status_) {
    const ptr0 = passArray8ToWasm0(config, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_init_platform(ptr0, len0, use_lightweight_tokio_runtime, f_status_.__wbg_ptr);
}

/**
 * @param {Uint8Array} alias
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_is_room_alias_format_valid(alias, f_status_) {
    const ptr0 = passArray8ToWasm0(alias, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_is_room_alias_format_valid(ptr0, len0, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {Uint8Array} bundle
 * @param {Uint8Array} backup_info
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_json_string_contains_secrets_bundle(bundle, backup_info, f_status_) {
    const ptr0 = passArray8ToWasm0(bundle, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(backup_info, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_json_string_contains_secrets_bundle(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    var v3 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v3;
}

/**
 * @param {Uint8Array} file
 * @param {Uint8Array} line
 * @param {Uint8Array} level
 * @param {Uint8Array} target
 * @param {Uint8Array} message
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_log_event(file, line, level, target, message, f_status_) {
    const ptr0 = passArray8ToWasm0(file, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(line, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(level, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ptr3 = passArray8ToWasm0(target, wasm.__wbindgen_malloc);
    const len3 = WASM_VECTOR_LEN;
    const ptr4 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
    const len4 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_log_event(ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, f_status_.__wbg_ptr);
}

/**
 * @param {Uint8Array} settings
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_make_widget_driver(settings, f_status_) {
    const ptr0 = passArray8ToWasm0(settings, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_make_widget_driver(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {Uint8Array} room_alias
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_matrix_to_room_alias_permalink(room_alias, f_status_) {
    const ptr0 = passArray8ToWasm0(room_alias, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_matrix_to_room_alias_permalink(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {Uint8Array} user_id
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_matrix_to_user_permalink(user_id, f_status_) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_matrix_to_user_permalink(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {Uint8Array} body
 * @param {Uint8Array} html_body
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_html(body, html_body, f_status_) {
    const ptr0 = passArray8ToWasm0(body, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(html_body, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_html(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} body
 * @param {Uint8Array} html_body
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_html_as_emote(body, html_body, f_status_) {
    const ptr0 = passArray8ToWasm0(body, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(html_body, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_html_as_emote(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} md
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_markdown(md, f_status_) {
    const ptr0 = passArray8ToWasm0(md, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_markdown(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} md
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_markdown_as_emote(md, f_status_) {
    const ptr0 = passArray8ToWasm0(md, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_markdown_as_emote(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} msgtype
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_new(msgtype, f_status_) {
    const ptr0 = passArray8ToWasm0(msgtype, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_new(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} props
 * @param {Uint8Array} config
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_new_virtual_element_call_widget(props, config, f_status_) {
    const ptr0 = passArray8ToWasm0(props, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(config, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_new_virtual_element_call_widget(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    var v3 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v3;
}

/**
 * @param {Uint8Array} uri
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_parse_matrix_entity_from(uri, f_status_) {
    const ptr0 = passArray8ToWasm0(uri, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_parse_matrix_entity_from(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {Uint8Array} configuration
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_reload_tracing_file_writer(configuration, f_status_) {
    const ptr0 = passArray8ToWasm0(configuration, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_reload_tracing_file_writer(ptr0, len0, f_status_.__wbg_ptr);
}

/**
 * @param {Uint8Array} room_name
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_room_alias_name_from_room_display_name(room_name, f_status_) {
    const ptr0 = passArray8ToWasm0(room_name, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_room_alias_name_from_room_display_name(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_sdk_git_sha(f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_sdk_git_sha(f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {Uint8Array} user_id
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_server_name_from_user_id(user_id, f_status_) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_server_name_from_user_id(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {Uint8Array} role
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_suggested_power_level_for_role(role, f_status_) {
    const ptr0 = passArray8ToWasm0(role, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_suggested_power_level_for_role(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {Uint8Array} power_level
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_func_suggested_role_for_power_level(power_level, f_status_) {
    const ptr0 = passArray8ToWasm0(power_level, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_func_suggested_role_for_power_level(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_accountdatalistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_accountdatalistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_backupstatelistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_backupstatelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_backupsteadystatelistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_backupsteadystatelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_beaconinfolistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_beaconinfolistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_calldeclinelistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_calldeclinelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_clientdelegate(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_clientdelegate(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_clientsessiondelegate(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_clientsessiondelegate(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_dehydrateddeviceeventlistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_dehydrateddeviceeventlistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_duplicatekeyuploaderrorlistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_duplicatekeyuploaderrorlistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_enablerecoveryprogresslistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_enablerecoveryprogresslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_generatedqrloginprogresslistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_generatedqrloginprogresslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_grantgeneratedqrloginprogresslistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_grantgeneratedqrloginprogresslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_grantqrloginprogresslistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_grantqrloginprogresslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_identitystatuschangelistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_identitystatuschangelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_ignoreduserslistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_ignoreduserslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_knockrequestslistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_knockrequestslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_livelocationslistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_livelocationslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_mediapreviewconfiglistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_mediapreviewconfiglistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_notificationsettingsdelegate(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_notificationsettingsdelegate(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_paginationstatuslistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_paginationstatuslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_profilelistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_profilelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_progresswatcher(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_progresswatcher(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_qrloginprogresslistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_qrloginprogresslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_recoverystatelistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_recoverystatelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomaccountdatalistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomaccountdatalistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomdirectorysearchentrieslistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomdirectorysearchentrieslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roominfolistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roominfolistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistentrieslistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistentrieslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistloadingstatelistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistloadingstatelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistservicestatelistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistservicestatelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistservicesyncindicatorlistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistservicesyncindicatorlistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sendqueuelistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sendqueuelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sendqueueroomerrorlistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sendqueueroomerrorlistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sendqueueroomupdatelistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sendqueueroomupdatelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sessionverificationcontrollerdelegate(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sessionverificationcontrollerdelegate(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceroomlistentrieslistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceroomlistentrieslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceroomlistpaginationstatelistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceroomlistpaginationstatelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceroomlistspacelistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceroomlistspacelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceservicejoinedspaceslistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceservicejoinedspaceslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceservicespacefilterslistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceservicespacefilterslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_synclistenerv2(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_synclistenerv2(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_syncnotificationlistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_syncnotificationlistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_syncservicestateobserver(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_syncservicestateobserver(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_threadlistentrieslistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_threadlistentrieslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_threadlistpaginationstatelistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_threadlistpaginationstatelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_timelinelistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_timelinelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_typingnotificationslistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_typingnotificationslistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_unabletodecryptdelegate(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_unabletodecryptdelegate(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_verificationstatelistener(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_verificationstatelistener(vtable);
}

/**
 * @param {any} vtable
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_widgetcapabilitiesprovider(vtable) {
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_widgetcapabilitiesprovider(vtable);
}

/**
 * @param {bigint} ptr
 * @param {number} code
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_checkcodesender_send(ptr, code) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_checkcodesender_send(ptr, code);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} authorization_data
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_abort_oauth_auth(ptr, authorization_data) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_abort_oauth_auth(ptr, authorization_data);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_type
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_account_data(ptr, event_type) {
    const ptr0 = passArray8ToWasm0(event_type, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_account_data(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} action
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_account_url(ptr, action) {
    const ptr0 = passArray8ToWasm0(action, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_account_url(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_available_sliding_sync_versions(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_available_sliding_sync_versions(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_avatar_url(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_avatar_url(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_await_room_remote_echo(ptr, room_id) {
    const ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_await_room_remote_echo(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_cached_avatar_url(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_cached_avatar_url(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_can_deactivate_account(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_can_deactivate_account(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} sync_service
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_clear_caches(ptr, sync_service) {
    const ptr0 = passArray8ToWasm0(sync_service, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_clear_caches(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_clear_user_status(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_clear_user_status(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_content_scanner(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_content_scanner(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} request
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_create_room(ptr, request) {
    const ptr0 = passArray8ToWasm0(request, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_create_room(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} jwt
 * @param {Uint8Array} initial_device_name
 * @param {Uint8Array} device_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_custom_login_with_jwt(ptr, jwt, initial_device_name, device_id) {
    const ptr0 = passArray8ToWasm0(jwt, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(initial_device_name, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(device_id, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_custom_login_with_jwt(ptr, ptr0, len0, ptr1, len1, ptr2, len2);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} auth_data
 * @param {number} erase_data
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_deactivate_account(ptr, auth_data, erase_data) {
    const ptr0 = passArray8ToWasm0(auth_data, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_deactivate_account(ptr, ptr0, len0, erase_data);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} identifiers
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_delete_pusher(ptr, identifiers) {
    const ptr0 = passArray8ToWasm0(identifiers, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_delete_pusher(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_device_id(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_device_id(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {number} disable
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_disable_well_known_lookup(ptr, disable, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_disable_well_known_lookup(ptr, disable, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_display_name(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_display_name(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} enable
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_enable_all_send_queues(ptr, enable) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_enable_all_send_queues(ptr, enable);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} enabled
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_enable_automatic_call_status(ptr, enabled, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_enable_automatic_call_status(ptr, enabled, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {number} enable
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_enable_send_queue_upload_progress(ptr, enable, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_enable_send_queue_upload_progress(ptr, enable, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_encryption(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_encryption(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_fetch_media_preview_config(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_fetch_media_preview_config(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_dm_room(ptr, user_id, f_status_) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_dm_room(ptr, ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_dm_rooms(ptr, user_id, f_status_) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_dm_rooms(ptr, ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_invite_avatars_display_policy(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_invite_avatars_display_policy(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_max_media_upload_size(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_max_media_upload_size(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} media_source
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_content(ptr, media_source) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_content(ptr, media_source);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} media_source
 * @param {Uint8Array} filename
 * @param {Uint8Array} mime_type
 * @param {number} use_cache
 * @param {Uint8Array} temp_dir
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_file(ptr, media_source, filename, mime_type, use_cache, temp_dir) {
    const ptr0 = passArray8ToWasm0(filename, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(mime_type, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(temp_dir, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_file(ptr, media_source, ptr0, len0, ptr1, len1, use_cache, ptr2, len2);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_preview_display_policy(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_preview_display_policy(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} media_source
 * @param {bigint} width
 * @param {bigint} height
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_thumbnail(ptr, media_source, width, height) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_thumbnail(ptr, media_source, width, height);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_notification_settings(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_notification_settings(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_profile(ptr, user_id) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_profile(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_recently_visited_rooms(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_recently_visited_rooms(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_room(ptr, room_id, f_status_) {
    const ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_room(ptr, ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_alias
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_room_preview_from_room_alias(ptr, room_alias) {
    const ptr0 = passArray8ToWasm0(room_alias, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_room_preview_from_room_alias(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {Uint8Array} via_servers
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_room_preview_from_room_id(ptr, room_id, via_servers) {
    const ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(via_servers, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_room_preview_from_room_id(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_session_verification_controller(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_session_verification_controller(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_store_sizes(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_store_sizes(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} url
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_url(ptr, url) {
    const ptr0 = passArray8ToWasm0(url, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_url(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} url
 * @param {Uint8Array} ts
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_url_preview(ptr, url, ts) {
    const ptr0 = passArray8ToWasm0(url, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(ts, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_url_preview(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_homeserver(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_homeserver(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_homeserver_capabilities(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_homeserver_capabilities(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_homeserver_login_details(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_homeserver_login_details(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_ignore_user(ptr, user_id) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_ignore_user(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_ignored_users(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_ignored_users(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_livekit_rtc_supported(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_livekit_rtc_supported(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_login_with_qr_code_supported(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_login_with_qr_code_supported(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_profiles_sliding_sync_extension_supported(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_profiles_sliding_sync_extension_supported(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_report_room_api_supported(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_report_room_api_supported(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} alias
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_room_alias_available(ptr, alias) {
    const ptr0 = passArray8ToWasm0(alias, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_room_alias_available(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_user_status_supported(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_user_status_supported(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_join_room_by_id(ptr, room_id) {
    const ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_join_room_by_id(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id_or_alias
 * @param {Uint8Array} server_names
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_join_room_by_id_or_alias(ptr, room_id_or_alias, server_names) {
    const ptr0 = passArray8ToWasm0(room_id_or_alias, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(server_names, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_join_room_by_id_or_alias(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id_or_alias
 * @param {Uint8Array} reason
 * @param {Uint8Array} server_names
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_knock(ptr, room_id_or_alias, reason, server_names) {
    const ptr0 = passArray8ToWasm0(room_id_or_alias, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(reason, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(server_names, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_knock(ptr, ptr0, len0, ptr1, len1, ptr2, len2);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} username
 * @param {Uint8Array} password
 * @param {Uint8Array} initial_device_name
 * @param {Uint8Array} device_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_login(ptr, username, password, initial_device_name, device_id) {
    const ptr0 = passArray8ToWasm0(username, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(password, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(initial_device_name, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ptr3 = passArray8ToWasm0(device_id, wasm.__wbindgen_malloc);
    const len3 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_login(ptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} email
 * @param {Uint8Array} password
 * @param {Uint8Array} initial_device_name
 * @param {Uint8Array} device_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_login_with_email(ptr, email, password, initial_device_name, device_id) {
    const ptr0 = passArray8ToWasm0(email, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(password, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(initial_device_name, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ptr3 = passArray8ToWasm0(device_id, wasm.__wbindgen_malloc);
    const len3 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_login_with_email(ptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} callback_url
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_login_with_oauth_callback(ptr, callback_url) {
    const ptr0 = passArray8ToWasm0(callback_url, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_login_with_oauth_callback(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_logout(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_logout(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_mark_all_rooms_as_read(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_mark_all_rooms_as_read(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_new_grant_login_with_qr_code_handler(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_new_grant_login_with_qr_code_handler(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} oauth_configuration
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_new_login_with_qr_code_handler(ptr, oauth_configuration, f_status_) {
    const ptr0 = passArray8ToWasm0(oauth_configuration, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_new_login_with_qr_code_handler(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} process_setup
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_notification_client(ptr, process_setup) {
    const ptr0 = passArray8ToWasm0(process_setup, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_notification_client(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} process_setup
 * @param {Uint8Array} timeouts
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_notification_client_with_timeouts(ptr, process_setup, timeouts) {
    const ptr0 = passArray8ToWasm0(process_setup, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(timeouts, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_notification_client_with_timeouts(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_type
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_observe_account_data_event(ptr, event_type, listener, f_status_) {
    const ptr0 = passArray8ToWasm0(event_type, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_observe_account_data_event(ptr, ptr0, len0, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {Uint8Array} event_type
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_observe_room_account_data_event(ptr, room_id, event_type, listener, f_status_) {
    const ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(event_type, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_observe_room_account_data_event(ptr, ptr0, len0, ptr1, len1, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_optimize_stores(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_optimize_stores(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_pause(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_pause(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_register_notification_handler(ptr, listener) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_register_notification_handler(ptr, listener);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_remove_avatar(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_remove_avatar(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_request_openid_token(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_request_openid_token(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_reset_supported_versions(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_reset_supported_versions(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_reset_well_known(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_reset_well_known(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_alias
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_resolve_room_alias(ptr, room_alias) {
    const ptr0 = passArray8ToWasm0(room_alias, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_resolve_room_alias(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} session
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_restore_session(ptr, session) {
    const ptr0 = passArray8ToWasm0(session, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_restore_session(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} session
 * @param {Uint8Array} room_load_settings
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_restore_session_with(ptr, session, room_load_settings) {
    const ptr0 = passArray8ToWasm0(session, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(room_load_settings, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_restore_session_with(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_resume(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_resume(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_alias
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_room_alias_exists(ptr, room_alias) {
    const ptr0 = passArray8ToWasm0(room_alias, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_room_alias_exists(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_room_directory_search(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_room_directory_search(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_rooms(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_rooms(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} search_term
 * @param {bigint} limit
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_search_users(ptr, search_term, limit) {
    const ptr0 = passArray8ToWasm0(search_term, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_search_users(ptr, ptr0, len0, limit);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_server(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_server(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_server_vendor_info(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_server_vendor_info(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_session(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_session(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_type
 * @param {Uint8Array} content
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_account_data(ptr, event_type, content) {
    const ptr0 = passArray8ToWasm0(event_type, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(content, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_account_data(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} url
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_avatar_url(ptr, url) {
    const ptr0 = passArray8ToWasm0(url, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_avatar_url(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} content_scanner
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_content_scanner(ptr, content_scanner) {
    const ptr0 = passArray8ToWasm0(content_scanner, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_content_scanner(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} delegate
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_delegate(ptr, delegate, f_status_) {
    const ptr0 = passArray8ToWasm0(delegate, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_delegate(ptr, ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} name
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_display_name(ptr, name) {
    const ptr0 = passArray8ToWasm0(name, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_display_name(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} policy
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_invite_avatars_display_policy(ptr, policy) {
    const ptr0 = passArray8ToWasm0(policy, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_invite_avatars_display_policy(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} policy
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_media_preview_display_policy(ptr, policy) {
    const ptr0 = passArray8ToWasm0(policy, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_media_preview_display_policy(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} policy
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_media_retention_policy(ptr, policy) {
    const ptr0 = passArray8ToWasm0(policy, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_media_retention_policy(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} presence
 * @param {number} immediate
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_presence(ptr, presence, immediate) {
    const ptr0 = passArray8ToWasm0(presence, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_presence(ptr, ptr0, len0, immediate);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} identifiers
 * @param {Uint8Array} kind
 * @param {Uint8Array} app_display_name
 * @param {Uint8Array} device_display_name
 * @param {Uint8Array} profile_tag
 * @param {Uint8Array} lang
 * @param {number} append
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_pusher(ptr, identifiers, kind, app_display_name, device_display_name, profile_tag, lang, append) {
    const ptr0 = passArray8ToWasm0(identifiers, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(kind, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(app_display_name, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ptr3 = passArray8ToWasm0(device_display_name, wasm.__wbindgen_malloc);
    const len3 = WASM_VECTOR_LEN;
    const ptr4 = passArray8ToWasm0(profile_tag, wasm.__wbindgen_malloc);
    const len4 = WASM_VECTOR_LEN;
    const ptr5 = passArray8ToWasm0(lang, wasm.__wbindgen_malloc);
    const len5 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_pusher(ptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, ptr5, len5, append);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} status
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_user_status(ptr, status) {
    const ptr0 = passArray8ToWasm0(status, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_user_status(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} utd_delegate
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_utd_delegate(ptr, utd_delegate) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_utd_delegate(ptr, utd_delegate);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sliding_sync_version(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sliding_sync_version(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_space_service(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_space_service(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} redirect_url
 * @param {Uint8Array} idp_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_start_sso_login(ptr, redirect_url, idp_id) {
    const ptr0 = passArray8ToWasm0(redirect_url, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(idp_id, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_start_sso_login(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_duplicate_key_upload_errors(ptr, listener, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_duplicate_key_upload_errors(ptr, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_ignored_users(ptr, listener, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_ignored_users(ptr, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_media_preview_config(ptr, listener) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_media_preview_config(ptr, listener);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_own_beacon_info_updates(ptr, listener, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_own_beacon_info_updates(ptr, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_own_profile(ptr, listener, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_own_profile(ptr, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_room_info(ptr, room_id, listener) {
    const ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_room_info(ptr, ptr0, len0, listener);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_send_queue_status(ptr, listener, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_send_queue_status(ptr, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_send_queue_updates(ptr, listener) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_send_queue_updates(ptr, listener);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} settings
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sync_once_v2(ptr, settings) {
    const ptr0 = passArray8ToWasm0(settings, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sync_once_v2(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sync_service(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sync_service(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} settings
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sync_v2(ptr, settings, listener, f_status_) {
    const ptr0 = passArray8ToWasm0(settings, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sync_v2(ptr, ptr0, len0, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_tile_server(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_tile_server(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_total_unread_notifications(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_total_unread_notifications(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_track_recently_visited_room(ptr, room) {
    const ptr0 = passArray8ToWasm0(room, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_track_recently_visited_room(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_unignore_user(ptr, user_id) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_unignore_user(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} mime_type
 * @param {Uint8Array} data
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_upload_avatar(ptr, mime_type, data) {
    const ptr0 = passArray8ToWasm0(mime_type, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_upload_avatar(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} mime_type
 * @param {Uint8Array} data
 * @param {Uint8Array} progress_watcher
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_upload_media(ptr, mime_type, data, progress_watcher) {
    const ptr0 = passArray8ToWasm0(mime_type, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(progress_watcher, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_upload_media(ptr, ptr0, len0, ptr1, len1, ptr2, len2);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} oauth_configuration
 * @param {Uint8Array} prompt
 * @param {Uint8Array} login_hint
 * @param {Uint8Array} device_id
 * @param {Uint8Array} additional_scopes
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_url_for_oauth(ptr, oauth_configuration, prompt, login_hint, device_id, additional_scopes) {
    const ptr0 = passArray8ToWasm0(oauth_configuration, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(prompt, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(login_hint, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ptr3 = passArray8ToWasm0(device_id, wasm.__wbindgen_malloc);
    const len3 = WASM_VECTOR_LEN;
    const ptr4 = passArray8ToWasm0(additional_scopes, wasm.__wbindgen_malloc);
    const len4 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_url_for_oauth(ptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_user_id(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_user_id(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_user_id_server_name(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_client_user_id_server_name(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} certificates
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_add_root_certificates(ptr, certificates, f_status_) {
    const ptr0 = passArray8ToWasm0(certificates, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_add_root_certificates(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} auto_enable_backups
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_auto_enable_backups(ptr, auto_enable_backups, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_auto_enable_backups(ptr, auto_enable_backups, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} auto_enable_cross_signing
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_auto_enable_cross_signing(ptr, auto_enable_cross_signing, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_auto_enable_cross_signing(ptr, auto_enable_cross_signing, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} backup_download_strategy
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_backup_download_strategy(ptr, backup_download_strategy, f_status_) {
    const ptr0 = passArray8ToWasm0(backup_download_strategy, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_backup_download_strategy(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_build(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_build(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} cross_process_lock_config
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_cross_process_lock_config(ptr, cross_process_lock_config, f_status_) {
    const ptr0 = passArray8ToWasm0(cross_process_lock_config, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_cross_process_lock_config(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} decryption_settings
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_decryption_settings(ptr, decryption_settings, f_status_) {
    const ptr0 = passArray8ToWasm0(decryption_settings, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_decryption_settings(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_automatic_token_refresh(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_automatic_token_refresh(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_built_in_root_certificates(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_built_in_root_certificates(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_ssl_verification(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_ssl_verification(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} disable_well_known_lookup
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_well_known_lookup(ptr, disable_well_known_lookup, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_well_known_lookup(ptr, disable_well_known_lookup, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} dm_room_definition
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_dm_room_definition(ptr, dm_room_definition, f_status_) {
    const ptr0 = passArray8ToWasm0(dm_room_definition, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_dm_room_definition(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} enable_automatic_back_pagination
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_enable_automatic_back_pagination(ptr, enable_automatic_back_pagination, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_enable_automatic_back_pagination(ptr, enable_automatic_back_pagination, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} enable_share_history_on_invite
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_enable_share_history_on_invite(ptr, enable_share_history_on_invite, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_enable_share_history_on_invite(ptr, enable_share_history_on_invite, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} url
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_homeserver_url(ptr, url, f_status_) {
    const ptr0 = passArray8ToWasm0(url, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_homeserver_url(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_in_memory_store(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_in_memory_store(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} config
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_indexeddb_store(ptr, config, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_indexeddb_store(ptr, config, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} url
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_proxy(ptr, url, f_status_) {
    const ptr0 = passArray8ToWasm0(url, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_proxy(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} config
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_request_config(ptr, config, f_status_) {
    const ptr0 = passArray8ToWasm0(config, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_request_config(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} strategy
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_room_key_recipient_strategy(ptr, strategy, f_status_) {
    const ptr0 = passArray8ToWasm0(strategy, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_room_key_recipient_strategy(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} server_name
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_name(ptr, server_name, f_status_) {
    const ptr0 = passArray8ToWasm0(server_name, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_name(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_name_from_user_id(ptr, user_id, f_status_) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_name_from_user_id(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} server_name_or_url
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_name_or_homeserver_url(ptr, server_name_or_url, f_status_) {
    const ptr0 = passArray8ToWasm0(server_name_or_url, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_name_or_homeserver_url(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} session_delegate
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_set_session_delegate(ptr, session_delegate, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_set_session_delegate(ptr, session_delegate, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} version_builder
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_sliding_sync_version_builder(ptr, version_builder, f_status_) {
    const ptr0 = passArray8ToWasm0(version_builder, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_sliding_sync_version_builder(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_system_is_memory_constrained(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_system_is_memory_constrained(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} enabled
 * @param {number} thread_subscriptions
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_threads_enabled(ptr, enabled, thread_subscriptions, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_threads_enabled(ptr, enabled, thread_subscriptions, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_agent
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_user_agent(ptr, user_agent, f_status_) {
    const ptr0 = passArray8ToWasm0(user_agent, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_user_agent(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} client
 * @param {bigint} media_source
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_contentscanner_scan(ptr, client, media_source) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_contentscanner_scan(ptr, client, media_source);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_continuationmessagesender_cancel(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_continuationmessagesender_cancel(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_continuationmessagesender_confirm(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_continuationmessagesender_confirm(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_backup_exists_on_server(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_backup_exists_on_server(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_backup_state(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_backup_state(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_backup_state_listener(ptr, listener, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_backup_state_listener(ptr, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} display_name
 * @param {Uint8Array} pickle_key
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_create_dehydrated_device(ptr, display_name, pickle_key) {
    const ptr0 = passArray8ToWasm0(display_name, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(pickle_key, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_create_dehydrated_device(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_curve25519_key(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_curve25519_key(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_dehydrated_device_event_listener(ptr, listener, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_dehydrated_device_event_listener(ptr, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_delete_dehydrated_device(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_delete_dehydrated_device(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_disable_recovery(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_disable_recovery(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_ed25519_key(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_ed25519_key(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_enable_backups(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_enable_backups(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} wait_for_backups_to_upload
 * @param {Uint8Array} passphrase
 * @param {bigint} progress_listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_enable_recovery(ptr, wait_for_backups_to_upload, passphrase, progress_listener) {
    const ptr0 = passArray8ToWasm0(passphrase, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_enable_recovery(ptr, wait_for_backups_to_upload, ptr0, len0, progress_listener);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_has_devices_to_verify_against(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_has_devices_to_verify_against(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} secrets_bundle
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_import_secrets_bundle(ptr, secrets_bundle) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_import_secrets_bundle(ptr, secrets_bundle);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_is_dehydrated_device_supported(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_is_dehydrated_device_supported(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_is_last_device(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_is_last_device(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} recovery_key
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recover(ptr, recovery_key) {
    const ptr0 = passArray8ToWasm0(recovery_key, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recover(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} recovery_key
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recover_and_fix_backup(ptr, recovery_key) {
    const ptr0 = passArray8ToWasm0(recovery_key, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recover_and_fix_backup(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} old_recovery_key
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recover_and_reset(ptr, old_recovery_key) {
    const ptr0 = passArray8ToWasm0(old_recovery_key, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recover_and_reset(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recovery_state(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recovery_state(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recovery_state_listener(ptr, listener, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recovery_state_listener(ptr, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} pickle_key
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_rehydrate_dehydrated_device(ptr, pickle_key) {
    const ptr0 = passArray8ToWasm0(pickle_key, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_rehydrate_dehydrated_device(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_reset_identity(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_reset_identity(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_reset_recovery_key(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_reset_recovery_key(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} recovery_key
 * @param {Uint8Array} settings
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_start_dehydrated_devices(ptr, recovery_key, settings) {
    const ptr0 = passArray8ToWasm0(recovery_key, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(settings, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_start_dehydrated_devices(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_stop_dehydrated_devices(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_stop_dehydrated_devices(ptr, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {number} fallback_to_server
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_user_identity(ptr, user_id, fallback_to_server) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_user_identity(ptr, ptr0, len0, fallback_to_server);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_verification_state(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_verification_state(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_verification_state_listener(ptr, listener, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_verification_state_listener(ptr, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} progress_listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_wait_for_backup_upload_steady_state(ptr, progress_listener) {
    const ptr0 = passArray8ToWasm0(progress_listener, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_wait_for_backup_upload_steady_state(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_wait_for_e2ee_initialization_tasks(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_wait_for_e2ee_initialization_tasks(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} ptr
 * @param {Uint8Array} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_ffitimelineeventtype_uniffi_trait_eq_eq(ptr, other, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(other, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_ffitimelineeventtype_uniffi_trait_eq_eq(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {Uint8Array} ptr
 * @param {Uint8Array} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_ffitimelineeventtype_uniffi_trait_eq_ne(ptr, other, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(other, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_ffitimelineeventtype_uniffi_trait_eq_ne(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {Uint8Array} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_ffitimelineeventtype_uniffi_trait_hash(ptr, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_ffitimelineeventtype_uniffi_trait_hash(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} progress_listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_grantloginwithqrcodehandler_generate(ptr, progress_listener) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_grantloginwithqrcodehandler_generate(ptr, progress_listener);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} qr_code_data
 * @param {bigint} progress_listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_grantloginwithqrcodehandler_scan(ptr, qr_code_data, progress_listener) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_grantloginwithqrcodehandler_scan(ptr, qr_code_data, progress_listener);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_avatar(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_avatar(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_displayname(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_displayname(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_password(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_password(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_thirdparty_ids(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_thirdparty_ids(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_get_login_token(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_get_login_token(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_extended_profile_fields(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_extended_profile_fields(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_forgets_room_when_leaving(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_forgets_room_when_leaving(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_refresh(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_refresh(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_sliding_sync_version(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_sliding_sync_version(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supported_oauth_prompts(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supported_oauth_prompts(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_oauth_login(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_oauth_login(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_password_login(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_password_login(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_sso_login(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_sso_login(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_url(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_url(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_identityresethandle_auth_type(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_identityresethandle_auth_type(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_identityresethandle_cancel(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_identityresethandle_cancel(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} auth
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_identityresethandle_reset(ptr, auth) {
    const ptr0 = passArray8ToWasm0(auth, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_identityresethandle_reset(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} passphrase
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_indexeddbstorebuilder_passphrase(ptr, passphrase, f_status_) {
    const ptr0 = passArray8ToWasm0(passphrase, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_indexeddbstorebuilder_passphrase(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_inreplytodetails_event(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_inreplytodetails_event(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_inreplytodetails_event_id(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_inreplytodetails_event_id(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_accept(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_accept(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} reason
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_decline(ptr, reason) {
    const ptr0 = passArray8ToWasm0(reason, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_decline(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} reason
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_decline_and_ban(ptr, reason) {
    const ptr0 = passArray8ToWasm0(reason, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_decline_and_ban(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_mark_as_seen(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_mark_as_seen(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_contains_only_emojis(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_contains_only_emojis(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_debug_info(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_debug_info(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_get_send_handle(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_get_send_handle(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {number} strict
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_get_shields(ptr, strict, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_get_shields(ptr, strict, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_latest_json(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_latest_json(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_ids
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_leavespacehandle_leave(ptr, room_ids) {
    const ptr0 = passArray8ToWasm0(room_ids, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_leavespacehandle_leave(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_leavespacehandle_rooms(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_leavespacehandle_rooms(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_livelocationsobserver_subscribe(ptr, listener, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_livelocationsobserver_subscribe(ptr, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} progress_listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_loginwithqrcodehandler_generate(ptr, progress_listener) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_loginwithqrcodehandler_generate(ptr, progress_listener);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} qr_code_data
 * @param {bigint} progress_listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_loginwithqrcodehandler_scan(ptr, qr_code_data, progress_listener) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_loginwithqrcodehandler_scan(ptr, qr_code_data, progress_listener);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_mediafilehandle_path(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_mediafilehandle_path(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} path
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_mediafilehandle_persist(ptr, path, f_status_) {
    const ptr0 = passArray8ToWasm0(path, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_mediafilehandle_persist(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_mediasource_to_json(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_mediasource_to_json(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_mediasource_url(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_mediasource_url(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_notification(ptr, room_id, event_id) {
    const ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_notification(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} requests
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_notifications(ptr, requests) {
    const ptr0 = passArray8ToWasm0(requests, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_notifications(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_room(ptr, room_id, f_status_) {
    const ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_room(ptr, ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_timeouts(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_timeouts(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_can_homeserver_push_encrypted_event_to_device(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_can_homeserver_push_encrypted_event_to_device(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_can_push_encrypted_event_to_device(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_can_push_encrypted_event_to_device(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_contains_keywords_rules(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_contains_keywords_rules(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} is_encrypted
 * @param {number} is_one_to_one
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_default_room_notification_mode(ptr, is_encrypted, is_one_to_one) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_default_room_notification_mode(ptr, is_encrypted, is_one_to_one);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_raw_push_rules(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_raw_push_rules(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {number} is_encrypted
 * @param {number} is_one_to_one
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_room_notification_settings(ptr, room_id, is_encrypted, is_one_to_one) {
    const ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_room_notification_settings(ptr, ptr0, len0, is_encrypted, is_one_to_one);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} enabled
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_rooms_with_user_defined_rules(ptr, enabled) {
    const ptr0 = passArray8ToWasm0(enabled, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_rooms_with_user_defined_rules(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_user_defined_room_notification_mode(ptr, room_id) {
    const ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_user_defined_room_notification_mode(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_call_enabled(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_call_enabled(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_invite_for_me_enabled(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_invite_for_me_enabled(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_room_mention_enabled(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_room_mention_enabled(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_user_mention_enabled(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_user_mention_enabled(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_restore_default_room_notification_mode(ptr, room_id) {
    const ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_restore_default_room_notification_mode(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} enabled
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_call_enabled(ptr, enabled) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_call_enabled(ptr, enabled);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} rule_id
 * @param {Uint8Array} rule_kind
 * @param {Uint8Array} actions
 * @param {Uint8Array} conditions
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_custom_push_rule(ptr, rule_id, rule_kind, actions, conditions) {
    const ptr0 = passArray8ToWasm0(rule_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(rule_kind, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(actions, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ptr3 = passArray8ToWasm0(conditions, wasm.__wbindgen_malloc);
    const len3 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_custom_push_rule(ptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} is_encrypted
 * @param {number} is_one_to_one
 * @param {Uint8Array} mode
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_default_room_notification_mode(ptr, is_encrypted, is_one_to_one, mode) {
    const ptr0 = passArray8ToWasm0(mode, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_default_room_notification_mode(ptr, is_encrypted, is_one_to_one, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} delegate
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_delegate(ptr, delegate, f_status_) {
    const ptr0 = passArray8ToWasm0(delegate, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_delegate(ptr, ptr0, len0, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {number} enabled
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_invite_for_me_enabled(ptr, enabled) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_invite_for_me_enabled(ptr, enabled);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} enabled
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_room_mention_enabled(ptr, enabled) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_room_mention_enabled(ptr, enabled);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {Uint8Array} mode
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_room_notification_mode(ptr, room_id, mode) {
    const ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(mode, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_room_notification_mode(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} enabled
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_user_mention_enabled(ptr, enabled) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_user_mention_enabled(ptr, enabled);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {number} is_encrypted
 * @param {number} is_one_to_one
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_unmute_room(ptr, room_id, is_encrypted, is_one_to_one) {
    const ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_unmute_room(ptr, ptr0, len0, is_encrypted, is_one_to_one);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} password
 * @param {Uint8Array} user_inputs
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_passwordstrengthestimator_estimate(ptr, password, user_inputs, f_status_) {
    const ptr0 = passArray8ToWasm0(password, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(user_inputs, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_passwordstrengthestimator_estimate(ptr, ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    var v3 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v3;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_passwordstrengthestimator_thresholds(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_passwordstrengthestimator_thresholds(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_base_url(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_base_url(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_intent(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_intent(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_server_name(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_server_name(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_to_bytes(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_to_bytes(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_active_human_member_ids(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_active_human_member_ids(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_active_human_member_ids_no_sync(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_active_human_member_ids_no_sync(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_active_members_count(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_active_members_count(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_active_room_call_participants(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_active_room_call_participants(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_alternative_aliases(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_alternative_aliases(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} changes
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_apply_power_level_changes(ptr, changes) {
    const ptr0 = passArray8ToWasm0(changes, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_apply_power_level_changes(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_avatar_url(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_avatar_url(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {Uint8Array} reason
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_ban_user(ptr, user_id, reason) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(reason, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_ban_user(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_canonical_alias(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_canonical_alias(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} thread_root
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_clear_composer_draft(ptr, thread_root) {
    const ptr0 = passArray8ToWasm0(thread_root, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_clear_composer_draft(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} rtc_notification_event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_decline_call(ptr, rtc_notification_event_id) {
    const ptr0 = passArray8ToWasm0(rtc_notification_event_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_decline_call(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_discard_room_key(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_discard_room_key(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_display_name(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_display_name(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @param {bigint} new_content
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_edit(ptr, event_id, new_content) {
    const ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_edit(ptr, ptr0, len0, new_content);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_enable_encryption(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_enable_encryption(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} enable
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_enable_send_queue(ptr, enable, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_enable_send_queue(ptr, enable, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_encryption_state(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_encryption_state(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} thread_root_event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_fetch_thread_subscription(ptr, thread_root_event_id) {
    const ptr0 = passArray8ToWasm0(thread_root_event_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_fetch_thread_subscription(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_forget(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_forget(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_get_power_levels(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_get_power_levels(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_get_room_visibility(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_get_room_visibility(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_has_active_room_call(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_has_active_room_call(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_heroes(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_heroes(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_id(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_id(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} devices
 * @param {bigint} send_handle
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_ignore_device_trust_and_resend(ptr, devices, send_handle) {
    const ptr0 = passArray8ToWasm0(devices, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_ignore_device_trust_and_resend(ptr, ptr0, len0, send_handle);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_ignore_user(ptr, user_id) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_ignore_user(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_invite_user_by_id(ptr, user_id) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_invite_user_by_id(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_invited_members_count(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_invited_members_count(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_inviter(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_inviter(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_direct(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_direct(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_encrypted(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_encrypted(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_public(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_public(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_send_queue_enabled(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_send_queue_enabled(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_space(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_space(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_join(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_join(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_joined_members_count(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_joined_members_count(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {Uint8Array} reason
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_kick_user(ptr, user_id, reason) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(reason, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_kick_user(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_latest_encryption_state(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_latest_encryption_state(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_latest_event(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_latest_event(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_leave(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_leave(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_live_locations_observer(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_live_locations_observer(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} thread_root
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_load_composer_draft(ptr, thread_root) {
    const ptr0 = passArray8ToWasm0(thread_root, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_load_composer_draft(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_load_or_fetch_event(ptr, event_id) {
    const ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_load_or_fetch_event(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @param {Uint8Array} relation_filter
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_load_or_fetch_event_with_relations(ptr, event_id, relation_filter) {
    const ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(relation_filter, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_load_or_fetch_event_with_relations(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} receipt_type
 * @param {Uint8Array} thread
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_load_user_receipt(ptr, receipt_type, thread, user_id) {
    const ptr0 = passArray8ToWasm0(receipt_type, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(thread, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_load_user_receipt(ptr, ptr0, len0, ptr1, len1, ptr2, len2);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_mark_as_fully_read_unchecked(ptr, event_id) {
    const ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_mark_as_fully_read_unchecked(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} receipt_type
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_mark_as_read(ptr, receipt_type) {
    const ptr0 = passArray8ToWasm0(receipt_type, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_mark_as_read(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_matrix_to_event_permalink(ptr, event_id) {
    const ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_matrix_to_event_permalink(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_matrix_to_permalink(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_matrix_to_permalink(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member(ptr, user_id) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member_avatar_url(ptr, user_id) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member_avatar_url(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member_display_name(ptr, user_id) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member_display_name(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member_with_sender_info(ptr, user_id) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member_with_sender_info(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_members(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_members(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_members_no_sync(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_members_no_sync(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_membership(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_membership(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_own_user_id(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_own_user_id(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_predecessor_room(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_predecessor_room(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} via
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_preview_room(ptr, via) {
    const ptr0 = passArray8ToWasm0(via, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_preview_room(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} alias
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_publish_room_alias_in_room_directory(ptr, alias) {
    const ptr0 = passArray8ToWasm0(alias, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_publish_room_alias_in_room_directory(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_raw_name(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_raw_name(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @param {Uint8Array} reason
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_redact(ptr, event_id, reason) {
    const ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(reason, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_redact(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_remove_avatar(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_remove_avatar(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} alias
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_remove_room_alias_from_room_directory(ptr, alias) {
    const ptr0 = passArray8ToWasm0(alias, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_remove_room_alias_from_room_directory(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @param {Uint8Array} reason
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_report_content(ptr, event_id, reason) {
    const ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(reason, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_report_content(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} reason
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_report_room(ptr, reason) {
    const ptr0 = passArray8ToWasm0(reason, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_report_room(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_reset_power_levels(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_reset_power_levels(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_room_events_debug_string(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_room_events_debug_string(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_room_info(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_room_info(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} draft
 * @param {Uint8Array} thread_root
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_save_composer_draft(ptr, draft, thread_root) {
    const ptr0 = passArray8ToWasm0(draft, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(thread_root, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_save_composer_draft(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} geo_uri
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_live_location(ptr, geo_uri) {
    const ptr0 = passArray8ToWasm0(geo_uri, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_live_location(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_type
 * @param {Uint8Array} content
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_raw(ptr, event_type, content) {
    const ptr0 = passArray8ToWasm0(event_type, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(content, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_raw(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} receipt_type
 * @param {Uint8Array} thread
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_single_receipt(ptr, receipt_type, thread, event_id) {
    const ptr0 = passArray8ToWasm0(receipt_type, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(thread, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_single_receipt(ptr, ptr0, len0, ptr1, len1, ptr2, len2);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_type
 * @param {Uint8Array} state_key
 * @param {Uint8Array} content
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_state_event_raw(ptr, event_type, state_key, content) {
    const ptr0 = passArray8ToWasm0(event_type, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(state_key, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(content, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_state_event_raw(ptr, ptr0, len0, ptr1, len1, ptr2, len2);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} is_favourite
 * @param {Uint8Array} tag_order
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_is_favourite(ptr, is_favourite, tag_order) {
    const ptr0 = passArray8ToWasm0(tag_order, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_is_favourite(ptr, is_favourite, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} is_low_priority
 * @param {Uint8Array} tag_order
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_is_low_priority(ptr, is_low_priority, tag_order) {
    const ptr0 = passArray8ToWasm0(tag_order, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_is_low_priority(ptr, is_low_priority, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} name
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_name(ptr, name) {
    const ptr0 = passArray8ToWasm0(name, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_name(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} display_name
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_own_member_display_name(ptr, display_name) {
    const ptr0 = passArray8ToWasm0(display_name, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_own_member_display_name(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} thread_root_event_id
 * @param {number} subscribed
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_thread_subscription(ptr, thread_root_event_id, subscribed) {
    const ptr0 = passArray8ToWasm0(thread_root_event_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_thread_subscription(ptr, ptr0, len0, subscribed);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} topic
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_topic(ptr, topic) {
    const ptr0 = passArray8ToWasm0(topic, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_topic(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} new_value
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_unread_flag(ptr, new_value) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_unread_flag(ptr, new_value);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} duration_millis
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_start_live_location_share(ptr, duration_millis) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_start_live_location_share(ptr, duration_millis);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_stop_live_location_share(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_stop_live_location_share(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} rtc_notification_event_id
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_call_decline_events(ptr, rtc_notification_event_id, listener, f_status_) {
    const ptr0 = passArray8ToWasm0(rtc_notification_event_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_call_decline_events(ptr, ptr0, len0, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_identity_status_changes(ptr, listener) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_identity_status_changes(ptr, listener);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_knock_requests(ptr, listener) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_knock_requests(ptr, listener);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_room_info_updates(ptr, listener, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_room_info_updates(ptr, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_send_queue_updates(ptr, listener) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_send_queue_updates(ptr, listener);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_typing_notifications(ptr, listener, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_typing_notifications(ptr, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_successor_room(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_successor_room(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_suggested_role_for_user(ptr, user_id) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_suggested_role_for_user(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_thread_list_service(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_thread_list_service(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_timeline(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_timeline(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} configuration
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_timeline_with_configuration(ptr, configuration) {
    const ptr0 = passArray8ToWasm0(configuration, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_timeline_with_configuration(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_topic(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_topic(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {number} is_typing
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_typing_notice(ptr, is_typing) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_typing_notice(ptr, is_typing);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {Uint8Array} reason
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_unban_user(ptr, user_id, reason) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(reason, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_unban_user(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} alias
 * @param {Uint8Array} alt_aliases
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_canonical_alias(ptr, alias, alt_aliases) {
    const ptr0 = passArray8ToWasm0(alias, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(alt_aliases, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_canonical_alias(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} visibility
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_history_visibility(ptr, visibility) {
    const ptr0 = passArray8ToWasm0(visibility, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_history_visibility(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} new_rule
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_join_rules(ptr, new_rule) {
    const ptr0 = passArray8ToWasm0(new_rule, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_join_rules(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} updates
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_power_levels_for_users(ptr, updates) {
    const ptr0 = passArray8ToWasm0(updates, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_power_levels_for_users(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} visibility
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_room_visibility(ptr, visibility) {
    const ptr0 = passArray8ToWasm0(visibility, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_room_visibility(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} mime_type
 * @param {Uint8Array} data
 * @param {Uint8Array} media_info
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_upload_avatar(ptr, mime_type, data, media_info) {
    const ptr0 = passArray8ToWasm0(mime_type, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(data, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(media_info, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_upload_avatar(ptr, ptr0, len0, ptr1, len1, ptr2, len2);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_ids
 * @param {bigint} send_handle
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_withdraw_verification_and_resend(ptr, user_ids, send_handle) {
    const ptr0 = passArray8ToWasm0(user_ids, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_room_withdraw_verification_and_resend(ptr, ptr0, len0, send_handle);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_is_at_last_page(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_is_at_last_page(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_loaded_pages(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_loaded_pages(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_next_page(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_next_page(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_results(ptr, listener) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_results(ptr, listener);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} filter
 * @param {number} batch_size
 * @param {Uint8Array} via_server_name
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_search(ptr, filter, batch_size, via_server_name) {
    const ptr0 = passArray8ToWasm0(filter, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(via_server_name, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_search(ptr, ptr0, len0, batch_size, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} page_size
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlist_entries_with_dynamic_adapters(ptr, page_size, listener, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlist_entries_with_dynamic_adapters(ptr, page_size, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlist_loading_state(ptr, listener, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlist_loading_state(ptr, listener, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlist_room(ptr, room_id, f_status_) {
    const ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlist_room(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_add_one_page(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_add_one_page(ptr, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_reset_to_one_page(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_reset_to_one_page(ptr, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} kind
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_set_filter(ptr, kind, f_status_) {
    const ptr0 = passArray8ToWasm0(kind, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_set_filter(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistentrieswithdynamicadaptersresult_controller(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistentrieswithdynamicadaptersresult_controller(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistentrieswithdynamicadaptersresult_entries_stream(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistentrieswithdynamicadaptersresult_entries_stream(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_all_rooms(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_all_rooms(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_ids
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_remove_room_subscriptions(ptr, room_ids, f_status_) {
    const ptr0 = passArray8ToWasm0(room_ids, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_remove_room_subscriptions(ptr, ptr0, len0, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_ids
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_reset_and_add_room_subscriptions(ptr, room_ids) {
    const ptr0 = passArray8ToWasm0(room_ids, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_reset_and_add_room_subscriptions(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_room(ptr, room_id, f_status_) {
    const ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_room(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_ids
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_set_room_subscriptions(ptr, room_ids) {
    const ptr0 = passArray8ToWasm0(room_ids, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_set_room_subscriptions(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_state(ptr, listener, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_state(ptr, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} delay_before_showing_in_ms
 * @param {number} delay_before_hiding_in_ms
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_sync_indicator(ptr, delay_before_showing_in_ms, delay_before_hiding_in_ms, listener, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_sync_indicator(ptr, delay_before_showing_in_ms, delay_before_hiding_in_ms, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roommembersiterator_len(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roommembersiterator_len(ptr, f_status_.__wbg_ptr);
    return ret >>> 0;
}

/**
 * @param {bigint} ptr
 * @param {number} chunk_size
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roommembersiterator_next_chunk(ptr, chunk_size, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roommembersiterator_next_chunk(ptr, chunk_size, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} mentions
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roommessageeventcontentwithoutrelation_with_mentions(ptr, mentions, f_status_) {
    const ptr0 = passArray8ToWasm0(mentions, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roommessageeventcontentwithoutrelation_with_mentions(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_ban(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_ban(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_invite(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_invite(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_kick(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_kick(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_pin_unpin(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_pin_unpin(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_redact_other(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_redact_other(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_redact_own(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_redact_own(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} message
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_send_message(ptr, message, f_status_) {
    const ptr0 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_send_message(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} state_event
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_send_state(ptr, state_event, f_status_) {
    const ptr0 = passArray8ToWasm0(state_event, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_send_state(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_trigger_room_notification(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_trigger_room_notification(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_ban(ptr, user_id, f_status_) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_ban(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_invite(ptr, user_id, f_status_) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_invite(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_kick(ptr, user_id, f_status_) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_kick(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_pin_unpin(ptr, user_id, f_status_) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_pin_unpin(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_redact_other(ptr, user_id, f_status_) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_redact_other(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_redact_own(ptr, user_id, f_status_) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_redact_own(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {Uint8Array} message
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_send_message(ptr, user_id, message, f_status_) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(message, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_send_message(ptr, ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {Uint8Array} state_event
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_send_state(ptr, user_id, state_event, f_status_) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(state_event, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_send_state(ptr, ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_trigger_room_notification(ptr, user_id, f_status_) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_trigger_room_notification(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_events(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_events(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_user_power_levels(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_user_power_levels(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_values(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_values(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_forget(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_forget(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_info(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_info(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_inviter(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_inviter(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_leave(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_leave(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_own_membership_details(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_own_membership_details(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_secretsbundlewithuserid_contains_backup_key(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_secretsbundlewithuserid_contains_backup_key(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sendattachmentjoinhandle_cancel(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sendattachmentjoinhandle_cancel(ptr, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sendattachmentjoinhandle_join(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sendattachmentjoinhandle_join(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} reason
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sendhandle_abort(ptr, reason) {
    const ptr0 = passArray8ToWasm0(reason, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sendhandle_abort(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sendhandle_try_resend(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sendhandle_try_resend(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_accept_verification_request(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_accept_verification_request(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} sender_id
 * @param {Uint8Array} flow_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_acknowledge_verification_request(ptr, sender_id, flow_id) {
    const ptr0 = passArray8ToWasm0(sender_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(flow_id, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_acknowledge_verification_request(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_approve_verification(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_approve_verification(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_cancel_verification(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_cancel_verification(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_decline_verification(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_decline_verification(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_request_device_verification(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_request_device_verification(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} user_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_request_user_verification(ptr, user_id) {
    const ptr0 = passArray8ToWasm0(user_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_request_user_verification(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} delegate
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_set_delegate(ptr, delegate, f_status_) {
    const ptr0 = passArray8ToWasm0(delegate, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_set_delegate(ptr, ptr0, len0, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_start_sas_verification(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_start_sas_verification(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationemoji_description(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationemoji_description(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationemoji_symbol(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationemoji_symbol(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_paginate(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_paginate(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_pagination_state(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_pagination_state(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_reset(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_reset(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_rooms(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_rooms(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_space(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_space(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_subscribe_to_pagination_state_updates(ptr, listener, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_subscribe_to_pagination_state_updates(ptr, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_subscribe_to_room_update(ptr, listener) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_subscribe_to_room_update(ptr, listener);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_subscribe_to_space_updates(ptr, listener, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_subscribe_to_space_updates(ptr, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} child_id
 * @param {Uint8Array} space_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_add_child_to_space(ptr, child_id, space_id) {
    const ptr0 = passArray8ToWasm0(child_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(space_id, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_add_child_to_space(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_editable_spaces(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_editable_spaces(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} room_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_get_space_room(ptr, room_id) {
    const ptr0 = passArray8ToWasm0(room_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_get_space_room(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} child_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_joined_parent_ids_of_child(ptr, child_id) {
    const ptr0 = passArray8ToWasm0(child_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_joined_parent_ids_of_child(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} child_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_joined_parents_of_child(ptr, child_id) {
    const ptr0 = passArray8ToWasm0(child_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_joined_parents_of_child(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} space_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_leave_space(ptr, space_id) {
    const ptr0 = passArray8ToWasm0(space_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_leave_space(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} child_id
 * @param {Uint8Array} space_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_remove_child_from_space(ptr, child_id, space_id) {
    const ptr0 = passArray8ToWasm0(child_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(space_id, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_remove_child_from_space(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_space_filters(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_space_filters(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} space_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_space_room_list(ptr, space_id) {
    const ptr0 = passArray8ToWasm0(space_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_space_room_list(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_subscribe_to_space_filters(ptr, listener) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_subscribe_to_space_filters(ptr, listener);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_subscribe_to_top_level_joined_spaces(ptr, listener) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_subscribe_to_top_level_joined_spaces(ptr, listener);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} child_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_top_level_ancestors_of(ptr, child_id) {
    const ptr0 = passArray8ToWasm0(child_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_top_level_ancestors_of(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_top_level_joined_spaces(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_top_level_joined_spaces(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_span_enter(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_span_enter(ptr, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_span_exit(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_span_exit(ptr, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_span_is_none(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_span_is_none(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} callback_url
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_ssohandler_finish(ptr, callback_url) {
    const ptr0 = passArray8ToWasm0(callback_url, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_ssohandler_finish(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_ssohandler_url(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_ssohandler_url(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_expire_sessions(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_expire_sessions(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_room_list_service(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_room_list_service(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_start(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_start(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_state(ptr, listener, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_state(ptr, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_stop(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_stop(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_finish(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_finish(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_offline_mode(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_offline_mode(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} span
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_parent_span(ptr, span, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_parent_span(ptr, span, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} connection_id
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_room_list_connection_id(ptr, connection_id, f_status_) {
    const ptr0 = passArray8ToWasm0(connection_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_room_list_connection_id(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} limit
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_room_list_timeline_limit(ptr, limit, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_room_list_timeline_limit(ptr, limit, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} enable
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_share_pos(ptr, enable, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_share_pos(ptr, enable, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} ptr
 * @param {Uint8Array} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_tagname_uniffi_trait_eq_eq(ptr, other, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(other, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_tagname_uniffi_trait_eq_eq(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {Uint8Array} ptr
 * @param {Uint8Array} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_tagname_uniffi_trait_eq_ne(ptr, other, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(other, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_tagname_uniffi_trait_eq_ne(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {Uint8Array} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_tagname_uniffi_trait_hash(ptr, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_tagname_uniffi_trait_hash(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_taskhandle_cancel(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_taskhandle_cancel(ptr, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_taskhandle_is_finished(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_taskhandle_is_finished(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_items(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_items(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_paginate(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_paginate(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_pagination_state(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_pagination_state(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_reset(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_reset(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_subscribe_to_items_updates(ptr, listener, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_subscribe_to_items_updates(ptr, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_subscribe_to_pagination_state_updates(ptr, listener, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_subscribe_to_pagination_state_updates(ptr, listener, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadsummary_latest_event(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_threadsummary_latest_event(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadsummary_num_replies(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_threadsummary_num_replies(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_add_listener(ptr, listener) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_add_listener(ptr, listener);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} msg_type
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_create_message_content(ptr, msg_type, f_status_) {
    const ptr0 = passArray8ToWasm0(msg_type, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_create_message_content(ptr, ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} question
 * @param {Uint8Array} answers
 * @param {number} max_selections
 * @param {Uint8Array} poll_kind
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_create_poll(ptr, question, answers, max_selections, poll_kind) {
    const ptr0 = passArray8ToWasm0(question, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(answers, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(poll_kind, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_create_poll(ptr, ptr0, len0, ptr1, len1, max_selections, ptr2, len2);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_or_transaction_id
 * @param {Uint8Array} new_content
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_edit(ptr, event_or_transaction_id, new_content) {
    const ptr0 = passArray8ToWasm0(event_or_transaction_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(new_content, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_edit(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_edit_revisions(ptr, event_id) {
    const ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_edit_revisions(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} poll_start_event_id
 * @param {Uint8Array} text
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_end_poll(ptr, poll_start_event_id, text) {
    const ptr0 = passArray8ToWasm0(poll_start_event_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(text, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_end_poll(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_fetch_details_for_event(ptr, event_id) {
    const ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_fetch_details_for_event(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_fetch_members(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_fetch_members(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_get_event_timeline_item_by_event_id(ptr, event_id) {
    const ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_get_event_timeline_item_by_event_id(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_latest_event_id(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_latest_event_id(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id_str
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_load_reply_details(ptr, event_id_str) {
    const ptr0 = passArray8ToWasm0(event_id_str, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_load_reply_details(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} receipt_type
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_mark_as_read(ptr, receipt_type) {
    const ptr0 = passArray8ToWasm0(receipt_type, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_mark_as_read(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} num_events
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_paginate_backwards(ptr, num_events) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_paginate_backwards(ptr, num_events);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {number} num_events
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_paginate_forwards(ptr, num_events) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_paginate_forwards(ptr, num_events);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_pin_event(ptr, event_id) {
    const ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_pin_event(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_or_transaction_id
 * @param {Uint8Array} reason
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_redact_event(ptr, event_or_transaction_id, reason) {
    const ptr0 = passArray8ToWasm0(event_or_transaction_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(reason, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_redact_event(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} session_ids
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_retry_decryption(ptr, session_ids, f_status_) {
    const ptr0 = passArray8ToWasm0(session_ids, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_retry_decryption(ptr, ptr0, len0, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {bigint} msg
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send(ptr, msg) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send(ptr, msg);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} params
 * @param {Uint8Array} audio_info
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_audio(ptr, params, audio_info, f_status_) {
    const ptr0 = passArray8ToWasm0(params, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(audio_info, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_audio(ptr, ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} params
 * @param {Uint8Array} file_info
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_file(ptr, params, file_info, f_status_) {
    const ptr0 = passArray8ToWasm0(params, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(file_info, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_file(ptr, ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} params
 * @param {Uint8Array} thumbnail_source
 * @param {Uint8Array} image_info
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_image(ptr, params, thumbnail_source, image_info, f_status_) {
    const ptr0 = passArray8ToWasm0(params, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(thumbnail_source, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(image_info, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_image(ptr, ptr0, len0, ptr1, len1, ptr2, len2, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} body
 * @param {Uint8Array} geo_uri
 * @param {Uint8Array} description
 * @param {Uint8Array} zoom_level
 * @param {Uint8Array} asset_type
 * @param {Uint8Array} replied_to_event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_location(ptr, body, geo_uri, description, zoom_level, asset_type, replied_to_event_id) {
    const ptr0 = passArray8ToWasm0(body, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(geo_uri, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(description, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ptr3 = passArray8ToWasm0(zoom_level, wasm.__wbindgen_malloc);
    const len3 = WASM_VECTOR_LEN;
    const ptr4 = passArray8ToWasm0(asset_type, wasm.__wbindgen_malloc);
    const len4 = WASM_VECTOR_LEN;
    const ptr5 = passArray8ToWasm0(replied_to_event_id, wasm.__wbindgen_malloc);
    const len5 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_location(ptr, ptr0, len0, ptr1, len1, ptr2, len2, ptr3, len3, ptr4, len4, ptr5, len5);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} poll_start_event_id
 * @param {Uint8Array} answers
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_poll_response(ptr, poll_start_event_id, answers) {
    const ptr0 = passArray8ToWasm0(poll_start_event_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(answers, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_poll_response(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} receipt_type
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_read_receipt(ptr, receipt_type, event_id) {
    const ptr0 = passArray8ToWasm0(receipt_type, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_read_receipt(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} msg
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_reply(ptr, msg, event_id) {
    const ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_reply(ptr, msg, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} params
 * @param {Uint8Array} thumbnail_source
 * @param {Uint8Array} video_info
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_video(ptr, params, thumbnail_source, video_info, f_status_) {
    const ptr0 = passArray8ToWasm0(params, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(thumbnail_source, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(video_info, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_video(ptr, ptr0, len0, ptr1, len1, ptr2, len2, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} params
 * @param {Uint8Array} audio_info
 * @param {Uint8Array} waveform
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_voice_message(ptr, params, audio_info, waveform, f_status_) {
    const ptr0 = passArray8ToWasm0(params, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(audio_info, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(waveform, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_voice_message(ptr, ptr0, len0, ptr1, len1, ptr2, len2, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} msg
 * @param {Uint8Array} extra_content_json
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_with_extra_content(ptr, msg, extra_content_json) {
    const ptr0 = passArray8ToWasm0(extra_content_json, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_with_extra_content(ptr, msg, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} listener
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_subscribe_to_back_pagination_status(ptr, listener) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_subscribe_to_back_pagination_status(ptr, listener);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} item_id
 * @param {Uint8Array} key
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_toggle_reaction(ptr, item_id, key) {
    const ptr0 = passArray8ToWasm0(item_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(key, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_toggle_reaction(ptr, ptr0, len0, ptr1, len1);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} item_id
 * @param {Uint8Array} key
 * @param {Uint8Array} extra_content_json
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_toggle_reaction_with_extra_content(ptr, item_id, key, extra_content_json) {
    const ptr0 = passArray8ToWasm0(item_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(key, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    const ptr2 = passArray8ToWasm0(extra_content_json, wasm.__wbindgen_malloc);
    const len2 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_toggle_reaction_with_extra_content(ptr, ptr0, len0, ptr1, len1, ptr2, len2);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} event_id
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_unpin_event(ptr, event_id) {
    const ptr0 = passArray8ToWasm0(event_id, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_unpin_event(ptr, ptr0, len0);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_content(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_content(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_event_id(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_event_id(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_sender_id(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_sender_id(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_thread_root_event_id(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_thread_root_event_id(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_timestamp(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_timestamp(ptr, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_as_event(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_as_event(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_as_virtual(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_as_virtual(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_fmt_debug(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_fmt_debug(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_unique_id(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_unique_id(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_has_notifications(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_has_notifications(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_highlight_count(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_highlight_count(ptr, f_status_.__wbg_ptr);
    return ret >>> 0;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_notification_count(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_notification_count(ptr, f_status_.__wbg_ptr);
    return ret >>> 0;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_has_verification_violation(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_has_verification_violation(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_is_verified(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_is_verified(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_master_key(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_master_key(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_pin(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_pin(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_was_previously_verified(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_was_previously_verified(ptr, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_withdraw_verification(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_withdraw_verification(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {bigint} room
 * @param {bigint} capabilities_provider
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_widgetdriver_run(ptr, room, capabilities_provider) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_widgetdriver_run(ptr, room, capabilities_provider);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_widgetdriverhandle_recv(ptr) {
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_widgetdriverhandle_recv(ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} ptr
 * @param {Uint8Array} msg
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_matrix_sdk_ffi_fn_method_widgetdriverhandle_send(ptr, msg, f_status_) {
    const ptr0 = passArray8ToWasm0(msg, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_ffi_fn_method_widgetdriverhandle_send(ptr, ptr0, len0, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_matrix_sdk_fn_clone_oauthauthorizationdata(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_fn_clone_oauthauthorizationdata(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_matrix_sdk_fn_free_oauthauthorizationdata(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_matrix_sdk_fn_free_oauthauthorizationdata(handle, f_status_.__wbg_ptr);
}

/**
 * @param {bigint} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_matrix_sdk_fn_method_oauthauthorizationdata_login_url(ptr, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_matrix_sdk_fn_method_oauthauthorizationdata_login_url(ptr, f_status_.__wbg_ptr);
    var v1 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v1;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_ruma_events_checksum_func_ephemeral_room_event_type_from_string() {
    const ret = wasm.ubrn_uniffi_ruma_events_checksum_func_ephemeral_room_event_type_from_string();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_ruma_events_checksum_func_global_account_data_event_type_from_string() {
    const ret = wasm.ubrn_uniffi_ruma_events_checksum_func_global_account_data_event_type_from_string();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_ruma_events_checksum_func_message_like_event_type_from_string() {
    const ret = wasm.ubrn_uniffi_ruma_events_checksum_func_message_like_event_type_from_string();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_ruma_events_checksum_func_room_account_data_event_type_from_string() {
    const ret = wasm.ubrn_uniffi_ruma_events_checksum_func_room_account_data_event_type_from_string();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_ruma_events_checksum_func_state_event_type_from_string() {
    const ret = wasm.ubrn_uniffi_ruma_events_checksum_func_state_event_type_from_string();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_ruma_events_checksum_func_timeline_event_type_from_string() {
    const ret = wasm.ubrn_uniffi_ruma_events_checksum_func_timeline_event_type_from_string();
    return ret;
}

/**
 * @returns {number}
 */
export function ubrn_uniffi_ruma_events_checksum_func_to_device_event_type_from_string() {
    const ret = wasm.ubrn_uniffi_ruma_events_checksum_func_to_device_event_type_from_string();
    return ret;
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_ruma_events_fn_clone_privatestring(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_clone_privatestring(handle, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {bigint} handle
 * @param {RustCallStatus} f_status_
 */
export function ubrn_uniffi_ruma_events_fn_free_privatestring(handle, f_status_) {
    _assertClass(f_status_, RustCallStatus);
    wasm.ubrn_uniffi_ruma_events_fn_free_privatestring(handle, f_status_.__wbg_ptr);
}

/**
 * @param {Uint8Array} s
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_ruma_events_fn_func_ephemeral_room_event_type_from_string(s, f_status_) {
    const ptr0 = passArray8ToWasm0(s, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_func_ephemeral_room_event_type_from_string(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {Uint8Array} s
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_ruma_events_fn_func_global_account_data_event_type_from_string(s, f_status_) {
    const ptr0 = passArray8ToWasm0(s, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_func_global_account_data_event_type_from_string(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {Uint8Array} s
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_ruma_events_fn_func_message_like_event_type_from_string(s, f_status_) {
    const ptr0 = passArray8ToWasm0(s, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_func_message_like_event_type_from_string(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {Uint8Array} s
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_ruma_events_fn_func_room_account_data_event_type_from_string(s, f_status_) {
    const ptr0 = passArray8ToWasm0(s, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_func_room_account_data_event_type_from_string(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {Uint8Array} s
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_ruma_events_fn_func_state_event_type_from_string(s, f_status_) {
    const ptr0 = passArray8ToWasm0(s, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_func_state_event_type_from_string(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {Uint8Array} s
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_ruma_events_fn_func_timeline_event_type_from_string(s, f_status_) {
    const ptr0 = passArray8ToWasm0(s, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_func_timeline_event_type_from_string(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {Uint8Array} s
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_ruma_events_fn_func_to_device_event_type_from_string(s, f_status_) {
    const ptr0 = passArray8ToWasm0(s, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_func_to_device_event_type_from_string(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {Uint8Array} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_ruma_events_fn_method_ephemeralroomeventtype_uniffi_trait_display(ptr, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_ephemeralroomeventtype_uniffi_trait_display(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {Uint8Array} ptr
 * @param {Uint8Array} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_ruma_events_fn_method_ephemeralroomeventtype_uniffi_trait_eq_eq(ptr, other, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(other, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_ephemeralroomeventtype_uniffi_trait_eq_eq(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {Uint8Array} ptr
 * @param {Uint8Array} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_ruma_events_fn_method_ephemeralroomeventtype_uniffi_trait_eq_ne(ptr, other, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(other, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_ephemeralroomeventtype_uniffi_trait_eq_ne(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {Uint8Array} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_ruma_events_fn_method_ephemeralroomeventtype_uniffi_trait_hash(ptr, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_ephemeralroomeventtype_uniffi_trait_hash(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_ruma_events_fn_method_globalaccountdataeventtype_uniffi_trait_display(ptr, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_globalaccountdataeventtype_uniffi_trait_display(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {Uint8Array} ptr
 * @param {Uint8Array} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_ruma_events_fn_method_globalaccountdataeventtype_uniffi_trait_eq_eq(ptr, other, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(other, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_globalaccountdataeventtype_uniffi_trait_eq_eq(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {Uint8Array} ptr
 * @param {Uint8Array} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_ruma_events_fn_method_globalaccountdataeventtype_uniffi_trait_eq_ne(ptr, other, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(other, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_globalaccountdataeventtype_uniffi_trait_eq_ne(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {Uint8Array} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_ruma_events_fn_method_globalaccountdataeventtype_uniffi_trait_hash(ptr, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_globalaccountdataeventtype_uniffi_trait_hash(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_ruma_events_fn_method_messagelikeeventtype_uniffi_trait_display(ptr, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_messagelikeeventtype_uniffi_trait_display(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {Uint8Array} ptr
 * @param {Uint8Array} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_ruma_events_fn_method_messagelikeeventtype_uniffi_trait_eq_eq(ptr, other, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(other, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_messagelikeeventtype_uniffi_trait_eq_eq(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {Uint8Array} ptr
 * @param {Uint8Array} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_ruma_events_fn_method_messagelikeeventtype_uniffi_trait_eq_ne(ptr, other, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(other, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_messagelikeeventtype_uniffi_trait_eq_ne(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {Uint8Array} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_ruma_events_fn_method_messagelikeeventtype_uniffi_trait_hash(ptr, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_messagelikeeventtype_uniffi_trait_hash(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_ruma_events_fn_method_roomaccountdataeventtype_uniffi_trait_display(ptr, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_roomaccountdataeventtype_uniffi_trait_display(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {Uint8Array} ptr
 * @param {Uint8Array} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_ruma_events_fn_method_roomaccountdataeventtype_uniffi_trait_eq_eq(ptr, other, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(other, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_roomaccountdataeventtype_uniffi_trait_eq_eq(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {Uint8Array} ptr
 * @param {Uint8Array} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_ruma_events_fn_method_roomaccountdataeventtype_uniffi_trait_eq_ne(ptr, other, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(other, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_roomaccountdataeventtype_uniffi_trait_eq_ne(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {Uint8Array} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_ruma_events_fn_method_roomaccountdataeventtype_uniffi_trait_hash(ptr, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_roomaccountdataeventtype_uniffi_trait_hash(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_ruma_events_fn_method_stateeventtype_uniffi_trait_display(ptr, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_stateeventtype_uniffi_trait_display(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {Uint8Array} ptr
 * @param {Uint8Array} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_ruma_events_fn_method_stateeventtype_uniffi_trait_eq_eq(ptr, other, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(other, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_stateeventtype_uniffi_trait_eq_eq(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {Uint8Array} ptr
 * @param {Uint8Array} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_ruma_events_fn_method_stateeventtype_uniffi_trait_eq_ne(ptr, other, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(other, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_stateeventtype_uniffi_trait_eq_ne(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {Uint8Array} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_ruma_events_fn_method_stateeventtype_uniffi_trait_hash(ptr, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_stateeventtype_uniffi_trait_hash(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_ruma_events_fn_method_timelineeventtype_uniffi_trait_display(ptr, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_timelineeventtype_uniffi_trait_display(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {Uint8Array} ptr
 * @param {Uint8Array} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_ruma_events_fn_method_timelineeventtype_uniffi_trait_eq_eq(ptr, other, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(other, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_timelineeventtype_uniffi_trait_eq_eq(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {Uint8Array} ptr
 * @param {Uint8Array} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_ruma_events_fn_method_timelineeventtype_uniffi_trait_eq_ne(ptr, other, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(other, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_timelineeventtype_uniffi_trait_eq_ne(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {Uint8Array} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_ruma_events_fn_method_timelineeventtype_uniffi_trait_hash(ptr, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_timelineeventtype_uniffi_trait_hash(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}

/**
 * @param {Uint8Array} ptr
 * @param {RustCallStatus} f_status_
 * @returns {Uint8Array}
 */
export function ubrn_uniffi_ruma_events_fn_method_todeviceeventtype_uniffi_trait_display(ptr, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_todeviceeventtype_uniffi_trait_display(ptr0, len0, f_status_.__wbg_ptr);
    var v2 = getArrayU8FromWasm0(ret[0], ret[1]).slice();
    wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
    return v2;
}

/**
 * @param {Uint8Array} ptr
 * @param {Uint8Array} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_ruma_events_fn_method_todeviceeventtype_uniffi_trait_eq_eq(ptr, other, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(other, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_todeviceeventtype_uniffi_trait_eq_eq(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {Uint8Array} ptr
 * @param {Uint8Array} other
 * @param {RustCallStatus} f_status_
 * @returns {number}
 */
export function ubrn_uniffi_ruma_events_fn_method_todeviceeventtype_uniffi_trait_eq_ne(ptr, other, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ptr1 = passArray8ToWasm0(other, wasm.__wbindgen_malloc);
    const len1 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_todeviceeventtype_uniffi_trait_eq_ne(ptr0, len0, ptr1, len1, f_status_.__wbg_ptr);
    return ret;
}

/**
 * @param {Uint8Array} ptr
 * @param {RustCallStatus} f_status_
 * @returns {bigint}
 */
export function ubrn_uniffi_ruma_events_fn_method_todeviceeventtype_uniffi_trait_hash(ptr, f_status_) {
    const ptr0 = passArray8ToWasm0(ptr, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    _assertClass(f_status_, RustCallStatus);
    const ret = wasm.ubrn_uniffi_ruma_events_fn_method_todeviceeventtype_uniffi_trait_hash(ptr0, len0, f_status_.__wbg_ptr);
    return BigInt.asUintN(64, ret);
}
function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg_Error_92b29b0548f8b746: function(arg0, arg1) {
            const ret = Error(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_Number_9a4e0ecb0fa16705: function(arg0) {
            const ret = Number(arg0);
            return ret;
        },
        __wbg_String_8564e559799eccda: function(arg0, arg1) {
            const ret = String(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_Window_241244be8c9776c1: function(arg0) {
            const ret = arg0.Window;
            return ret;
        },
        __wbg_WorkerGlobalScope_8623a7c9030fbce2: function(arg0) {
            const ret = arg0.WorkerGlobalScope;
            return ret;
        },
        __wbg___wbindgen_bigint_get_as_i64_d968e41184ae354f: function(arg0, arg1) {
            const v = arg1;
            const ret = typeof(v) === 'bigint' ? v : undefined;
            getDataViewMemory0().setBigInt64(arg0 + 8 * 1, isLikeNone(ret) ? BigInt(0) : ret, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
        },
        __wbg___wbindgen_boolean_get_fa956cfa2d1bd751: function(arg0) {
            const v = arg0;
            const ret = typeof(v) === 'boolean' ? v : undefined;
            return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
        },
        __wbg___wbindgen_debug_string_c25d447a39f5578f: function(arg0, arg1) {
            const ret = debugString(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_in_aca499c5de7ff5e5: function(arg0, arg1) {
            const ret = arg0 in arg1;
            return ret;
        },
        __wbg___wbindgen_is_bigint_2f76dc55065b4273: function(arg0) {
            const ret = typeof(arg0) === 'bigint';
            return ret;
        },
        __wbg___wbindgen_is_function_1ff95bcc5517c252: function(arg0) {
            const ret = typeof(arg0) === 'function';
            return ret;
        },
        __wbg___wbindgen_is_null_ea9085d691f535d3: function(arg0) {
            const ret = arg0 === null;
            return ret;
        },
        __wbg___wbindgen_is_object_a27215656b807791: function(arg0) {
            const val = arg0;
            const ret = typeof(val) === 'object' && val !== null;
            return ret;
        },
        __wbg___wbindgen_is_string_ea5e6cc2e4141dfe: function(arg0) {
            const ret = typeof(arg0) === 'string';
            return ret;
        },
        __wbg___wbindgen_is_undefined_c05833b95a3cf397: function(arg0) {
            const ret = arg0 === undefined;
            return ret;
        },
        __wbg___wbindgen_jsval_eq_e659fcf7b0e32763: function(arg0, arg1) {
            const ret = arg0 === arg1;
            return ret;
        },
        __wbg___wbindgen_jsval_loose_eq_db4c3b15f63fc170: function(arg0, arg1) {
            const ret = arg0 == arg1;
            return ret;
        },
        __wbg___wbindgen_number_get_394265ed1e1b84ee: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'number' ? obj : undefined;
            getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
        },
        __wbg___wbindgen_string_get_b0ca35b86a603356: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'string' ? obj : undefined;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_throw_344f42d3211c4765: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg__wbg_cb_unref_fffb441def202758: function(arg0) {
            arg0._wbg_cb_unref();
        },
        __wbg_abort_8a4b90d8b05efcf8: function() { return handleError(function (arg0) {
            arg0.abort();
        }, arguments); },
        __wbg_abort_8bae0f33e7833997: function(arg0) {
            arg0.abort();
        },
        __wbg_abort_eee9248a6d680839: function(arg0, arg1) {
            arg0.abort(arg1);
        },
        __wbg_acquire_capabilities_d8348e209b8800eb: function(arg0) {
            const ret = arg0.acquire_capabilities;
            return ret;
        },
        __wbg_add_c989fa2112fc11d4: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.add(arg1);
            return ret;
        }, arguments); },
        __wbg_add_fb7f496dd69e6f55: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.add(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_append_01c74e5c6b58aa64: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            arg0.append(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_arrayBuffer_3b637f0fa65c5351: function() { return handleError(function (arg0) {
            const ret = arg0.arrayBuffer();
            return ret;
        }, arguments); },
        __wbg_bound_696859c2d8dac8bf: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = IDBKeyRange.bound(arg0, arg1, arg2 !== 0, arg3 !== 0);
            return ret;
        }, arguments); },
        __wbg_call_043cf748c539e49b: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_049e82cd068b8205: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_0536d6ad74d6f62c: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_0584301d68407261: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_05d4d645f717549b: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_0738b0d960dc905f: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0, ForeignFutureCompleteRustBuffer.__wrap(arg5), BigInt.asUintN(64, arg6));
            return ret;
        },
        __wbg_call_079e46d9cc6fe98b: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_0a3958de6bd12d12: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_0abf6bd3757c0c8c: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_0b927562128f3969: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_0bb634857bedfd43: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_0e23e7903f6f2d56: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_11795d631e808dd6: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_12ac01585e44eea3: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_12d4bd18a0dd6c84: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_1538daeaffa933d9: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_16b6752e028e56a8: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_16e5ac19f1733fc1: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_198b878c5e00c47f: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_1af6f1baa1243978: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_1b2cc34f2d1673fd: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_1bb394205c8f405c: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_2475cd8725abe7e7: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_28ad39581d739cec: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_2bb08c40fa973213: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            var v1 = getArrayU8FromWasm0(arg5, arg6).slice();
            wasm.__wbindgen_free(arg5, arg6 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0, v1);
            return ret;
        },
        __wbg_call_2ea27fab7bd93863: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_303a82697ce97dc3: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_313a253497e1bdb4: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_31b1c2c9d8405f3e: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_33d82bf94516f234: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_34bc890e16ba1462: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_376d9d89c7d88735: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_3a69b91c2dbe1aac: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_3c1436342184bc08: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_3cd87b317e5e4672: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_3e592debb4d21091: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_3f226ef7a6bfc66d: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_3fb8fa4692029836: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_418c138591a452b7: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_42a91bd1ccdf6094: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_45112fc9567e5f98: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            var v1 = getArrayU8FromWasm0(arg5, arg6).slice();
            wasm.__wbindgen_free(arg5, arg6 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0, v1);
            return ret;
        },
        __wbg_call_47043d442f94e3b5: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_49a6a26a2ff39d97: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_49a86d98724acccb: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_49e3b0034de8e9e5: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_4a721abfb69152a6: function(arg0, arg1, arg2, arg3) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), arg3);
            return ret;
        },
        __wbg_call_4bcc7f2ab205aae1: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            var v1 = getArrayU8FromWasm0(arg5, arg6).slice();
            wasm.__wbindgen_free(arg5, arg6 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0, v1);
            return ret;
        },
        __wbg_call_4c3805774031b5f0: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_4cad4f8e8a38d368: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_51a3543fa75139d2: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_53c53c61aa7536f6: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_54d9d0745180c34d: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_55b0c911c5fb663b: function(arg0) {
            const ret = arg0.call;
            return ret;
        },
        __wbg_call_57506bcd333fe2e0: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_5a7f2d70c27fc836: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_5d8583a90bf6996b: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_5dce9337fbdac7e4: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_5dd35d99c9d1e74a: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_60fb1467bf1bbd1d: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_623f96d418b2ba52: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_62f1faad28c2f548: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_637304becc207708: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_647b4c85704dd1ea: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_654fbf7f1ffb5bc1: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_6679c5e9ffe1e269: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_66f6a8afaa5e6466: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_67ed0ff0da1af468: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_6969ab545cdf572a: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_6a356acc89a208c5: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_6b48105530e64511: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_6d5ecb4eb0ca3612: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_6dc24907393a98be: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_6e8947633af585ab: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_70d5af26405ad1fd: function(arg0, arg1, arg2, arg3) {
            arg0.call(arg1, BigInt.asUintN(64, arg2), arg3);
        },
        __wbg_call_72c6ab8dcdf5de60: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_72e8fb4f78cb16a6: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_761a0410c845d7b6: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_778b4d7a691c2e0e: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_792d90d01e6e0784: function(arg0) {
            const ret = arg0.call;
            return ret;
        },
        __wbg_call_7aa3a69ee5d4f2aa: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_7b1866cbf5f00098: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_7ba56894524f5dad: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_7c138aed057a65bc: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_7d2a512fb72f007c: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_7d860eed2332b67e: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_7ed726c4277411f7: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_7f28f0c2f59429b5: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_80ed0da28ba91839: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_82657d3a65238933: function(arg0) {
            const ret = arg0.call;
            return ret;
        },
        __wbg_call_828faefa3b16a3c6: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_84f7e23c04696839: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_851d3daa3b0fccf3: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_8563cbdd05e86523: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_872f0fb0e9d99e5d: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_87b0a24605cffb9a: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_8a2dd23819f8a60a: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.call(arg1);
            return ret;
        }, arguments); },
        __wbg_call_8a3292cad6a3b51f: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_8cafe56fa8215398: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_8feeaa1591986b1c: function(arg0) {
            const ret = arg0.call;
            return ret;
        },
        __wbg_call_900825d57cbc5f15: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_921519af54c34ea5: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_92538dac8c535610: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_9254241a88e3fe71: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_930692cd2f7f0116: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_95107457c1bc09aa: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_95491a62014ebbe7: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_9561f74edd823f5c: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_95d90537bd59fa2e: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_95f809307342c249: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_99f527fe1a8d3691: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_9bb823c490e05528: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_9f1662c0e5c84d26: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_a06ab7dc06dfea19: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_a5febc83e5d8364c: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_a6375f3a92530b3b: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_a6e5c5dce5018821: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.call(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_call_a8907f54e9ff907f: function(arg0) {
            const ret = arg0.call;
            return ret;
        },
        __wbg_call_a8c4220cb5f21507: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_a8ebc8682f65bd70: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_ac0fa7a617c6f7a6: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_acb1c0bd3429a36c: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            var v1 = getArrayU8FromWasm0(arg5, arg6).slice();
            wasm.__wbindgen_free(arg5, arg6 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0, v1);
            return ret;
        },
        __wbg_call_ad9891b75ea6e014: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_af3d900e297891a6: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_afb932bc395c0592: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_b03c825d5eeb21f3: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_b4090236b1d46493: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_b4a39fe8a2fc5f3f: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_b5902de374e56eb3: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_b85fd23bab67c8d1: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_ba26dcd1d430c35b: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_bb942cf8a0051ad3: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_bc82fb59bbec8801: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_bdd20b4e59840d5e: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_bf6b1e197bc2e5c0: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_c212b44262cc1ea7: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_c2a91408b08b5d1b: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_c2ebeec9f8ca5999: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_c44839ee4ae56fb0: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_c5108ff044f0aae5: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_c9546ff7920de285: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_c973123abc591e1c: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_ca78ac6d2e68085e: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_cae0c600e9d424f8: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_cbf7fded0d56a02f: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_cecef47a933027b2: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_cfc16365e1f00bb8: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_d6cde05a77e389bc: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_d7e72531a7ef41ad: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_da83bbfc97af0a79: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_db52d49461d9f7d4: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_df9c16fb9fe83338: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_e0ece8a54c6d01f2: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_e1ce38afab158863: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_e2260022561110c3: function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            var v1 = getArrayU8FromWasm0(arg5, arg6).slice();
            wasm.__wbindgen_free(arg5, arg6 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0, v1);
            return ret;
        },
        __wbg_call_e27ec04b620a4293: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_e28b823735c18d38: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_e3932ac37fdd35ff: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_e4dcea6608164e29: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_e8deb6df1c394c20: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_e969c44502905466: function(arg0) {
            const ret = arg0.call;
            return ret;
        },
        __wbg_call_ea021009f258e047: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_ec41e9b147bd464d: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_edf73a08e7008083: function(arg0, arg1, arg2, arg3, arg4) {
            var v0 = getArrayU8FromWasm0(arg3, arg4).slice();
            wasm.__wbindgen_free(arg3, arg4 * 1, 1);
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2), v0);
            return ret;
        },
        __wbg_call_ee5bf95ced5292bd: function(arg0, arg1, arg2) {
            const ret = arg0.call(arg1, BigInt.asUintN(64, arg2));
            return ret;
        },
        __wbg_call_f1390088ad3c17b3: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_f3febabdc424547b: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_f895293c65597df2: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_fc05781150fe1358: function(arg0, arg1, arg2) {
            arg0.call(arg1, BigInt.asUintN(64, arg2));
        },
        __wbg_call_status_31df6803dc1cd3fb: function(arg0) {
            const ret = arg0.call_status;
            _assertClass(ret, RustCallStatus);
            var ptr1 = ret.__destroy_into_raw();
            return ptr1;
        },
        __wbg_clearTimeout_2256f1e7b94ef517: function(arg0) {
            const ret = clearTimeout(arg0);
            return ret;
        },
        __wbg_clearTimeout_3629d6209dfcc46e: function(arg0) {
            const ret = clearTimeout(arg0);
            return ret;
        },
        __wbg_clear_772d79d5d3e7307a: function() { return handleError(function (arg0) {
            const ret = arg0.clear();
            return ret;
        }, arguments); },
        __wbg_close_4c3686e8e8c6d353: function(arg0) {
            arg0.close();
        },
        __wbg_code_cb4327cfc515673b: function(arg0) {
            const ret = arg0.code;
            return ret;
        },
        __wbg_code_d967a727c4ada271: function(arg0) {
            const ret = arg0.code;
            return ret;
        },
        __wbg_code_facdfeb04fdbe23e: function(arg0) {
            const ret = arg0.code;
            return ret;
        },
        __wbg_commit_ebd6d9676954e0d2: function() { return handleError(function (arg0) {
            arg0.commit();
        }, arguments); },
        __wbg_continue_97ad9c8cd4cf7f86: function() { return handleError(function (arg0) {
            arg0.continue();
        }, arguments); },
        __wbg_count_261aea47e2fc7c0a: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.count(arg1);
            return ret;
        }, arguments); },
        __wbg_count_4b5216babe494538: function() { return handleError(function (arg0) {
            const ret = arg0.count();
            return ret;
        }, arguments); },
        __wbg_count_582c6372f6704485: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.count(arg1);
            return ret;
        }, arguments); },
        __wbg_count_8e2cea7c3e56e051: function() { return handleError(function (arg0) {
            const ret = arg0.count();
            return ret;
        }, arguments); },
        __wbg_createIndex_103467368f726782: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            const ret = arg0.createIndex(getStringFromWasm0(arg1, arg2), arg3, arg4);
            return ret;
        }, arguments); },
        __wbg_createIndex_b4ed8919f11d086a: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.createIndex(getStringFromWasm0(arg1, arg2), arg3);
            return ret;
        }, arguments); },
        __wbg_createObjectStore_c7a1db4a996dc8ac: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.createObjectStore(getStringFromWasm0(arg1, arg2), arg3);
            return ret;
        }, arguments); },
        __wbg_createObjectStore_ff668af6e79f0433: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.createObjectStore(getStringFromWasm0(arg1, arg2));
            return ret;
        }, arguments); },
        __wbg_crypto_38df2bab126b63dc: function(arg0) {
            const ret = arg0.crypto;
            return ret;
        },
        __wbg_deleteObjectStore_a543f5ea070cb60a: function() { return handleError(function (arg0, arg1, arg2) {
            arg0.deleteObjectStore(getStringFromWasm0(arg1, arg2));
        }, arguments); },
        __wbg_delete_e7e50168de5ef96e: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.delete(arg1);
            return ret;
        }, arguments); },
        __wbg_delete_fe65145d652e46c8: function() { return handleError(function (arg0) {
            const ret = arg0.delete();
            return ret;
        }, arguments); },
        __wbg_did_accept_verification_request_60209e63e8fa2498: function(arg0) {
            const ret = arg0.did_accept_verification_request;
            return ret;
        },
        __wbg_did_cancel_b888957a33f95ff2: function(arg0) {
            const ret = arg0.did_cancel;
            return ret;
        },
        __wbg_did_fail_2d0dd2f7b0ab90bb: function(arg0) {
            const ret = arg0.did_fail;
            return ret;
        },
        __wbg_did_finish_70ea6c2160877aa3: function(arg0) {
            const ret = arg0.did_finish;
            return ret;
        },
        __wbg_did_receive_auth_error_ebc244674f53e5a1: function(arg0) {
            const ret = arg0.did_receive_auth_error;
            return ret;
        },
        __wbg_did_receive_verification_data_78e6f1375dfdd5db: function(arg0) {
            const ret = arg0.did_receive_verification_data;
            return ret;
        },
        __wbg_did_receive_verification_request_3952ad6194365017: function(arg0) {
            const ret = arg0.did_receive_verification_request;
            return ret;
        },
        __wbg_did_start_sas_verification_41ce7d6c5702b252: function(arg0) {
            const ret = arg0.did_start_sas_verification;
            return ret;
        },
        __wbg_done_89b2b13e91a60321: function(arg0) {
            const ret = arg0.done;
            return ret;
        },
        __wbg_entries_015dc610cd81ede0: function(arg0) {
            const ret = Object.entries(arg0);
            return ret;
        },
        __wbg_entries_900cefd6f70eb290: function(arg0) {
            const ret = arg0.entries();
            return ret;
        },
        __wbg_error_a6fa202b58aa1cd3: function(arg0, arg1) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                console.error(getStringFromWasm0(arg0, arg1));
            } finally {
                wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
            }
        },
        __wbg_error_becd7e1fe6ce0623: function() { return handleError(function (arg0) {
            const ret = arg0.error;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_error_buf_9283d00919c15278: function(arg0, arg1) {
            const ret = arg1.errorBuf;
            var ptr1 = isLikeNone(ret) ? 0 : passArray8ToWasm0(ret, wasm.__wbindgen_malloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_error_buf_cce39a17e535d6d5: function(arg0, arg1) {
            const ret = arg1.errorBuf;
            var ptr1 = isLikeNone(ret) ? 0 : passArray8ToWasm0(ret, wasm.__wbindgen_malloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_fetch_43b2f110608a59ff: function(arg0) {
            const ret = fetch(arg0);
            return ret;
        },
        __wbg_fetch_b5951fc96f52f786: function(arg0, arg1) {
            const ret = arg0.fetch(arg1);
            return ret;
        },
        __wbg_free_b4e1a017a9673ed3: function(arg0) {
            const ret = arg0.free;
            return ret;
        },
        __wbg_from_13e323c65fc8f464: function(arg0) {
            const ret = Array.from(arg0);
            return ret;
        },
        __wbg_getAllKeys_600fd10abc7076d8: function() { return handleError(function (arg0) {
            const ret = arg0.getAllKeys();
            return ret;
        }, arguments); },
        __wbg_getAllKeys_a180741be38f0d7b: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.getAllKeys(arg1);
            return ret;
        }, arguments); },
        __wbg_getAllKeys_fea9c5e5c99dde0e: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.getAllKeys(arg1);
            return ret;
        }, arguments); },
        __wbg_getAll_0875ca0ac8b3f52c: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.getAll(arg1);
            return ret;
        }, arguments); },
        __wbg_getAll_8511db95ef41a369: function() { return handleError(function (arg0) {
            const ret = arg0.getAll();
            return ret;
        }, arguments); },
        __wbg_getAll_9da4db9daff27e28: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.getAll(arg1);
            return ret;
        }, arguments); },
        __wbg_getAll_b31fdebb43579f13: function() { return handleError(function (arg0) {
            const ret = arg0.getAll();
            return ret;
        }, arguments); },
        __wbg_getAll_d5876cd3a9fca65e: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.getAll(arg1, arg2 >>> 0);
            return ret;
        }, arguments); },
        __wbg_getFullYear_6af8b229792ae254: function(arg0) {
            const ret = arg0.getFullYear();
            return ret;
        },
        __wbg_getRandomValues_c44a50d8cfdaebeb: function() { return handleError(function (arg0, arg1) {
            arg0.getRandomValues(arg1);
        }, arguments); },
        __wbg_getRandomValues_cc7f052a444bb2ce: function() { return handleError(function (arg0, arg1) {
            globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
        }, arguments); },
        __wbg_getRandomValues_ceb34d8ffce7e87f: function() { return handleError(function (arg0, arg1) {
            globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
        }, arguments); },
        __wbg_getTime_d6f070c088c9b5ed: function(arg0) {
            const ret = arg0.getTime();
            return ret;
        },
        __wbg_getTimezoneOffset_dc9862c79e5a81a3: function(arg0) {
            const ret = arg0.getTimezoneOffset();
            return ret;
        },
        __wbg_get_507a50627bffa49b: function(arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return ret;
        },
        __wbg_get_78f252d074a84d0b: function() { return handleError(function (arg0, arg1) {
            const ret = Reflect.get(arg0, arg1);
            return ret;
        }, arguments); },
        __wbg_get_965b70ce5b54e6ed: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.get(arg1);
            return ret;
        }, arguments); },
        __wbg_get_c7eb1f358a7654df: function() { return handleError(function (arg0, arg1) {
            const ret = Reflect.get(arg0, arg1);
            return ret;
        }, arguments); },
        __wbg_get_cefddcaffca4fbb7: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.get(arg1);
            return ret;
        }, arguments); },
        __wbg_get_unchecked_6e0ad6d2a41b06f6: function(arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return ret;
        },
        __wbg_get_with_ref_key_6412cf3094599694: function(arg0, arg1) {
            const ret = arg0[arg1];
            return ret;
        },
        __wbg_global_94a489d2e6a0c5fd: function(arg0) {
            const ret = arg0.global;
            return ret;
        },
        __wbg_handle_ea62810fb439a79e: function(arg0) {
            const ret = arg0.handle;
            return ret;
        },
        __wbg_has_8374cf06984d8bfc: function() { return handleError(function (arg0, arg1) {
            const ret = Reflect.has(arg0, arg1);
            return ret;
        }, arguments); },
        __wbg_headers_cf9c80f30e2a4eff: function(arg0) {
            const ret = arg0.headers;
            return ret;
        },
        __wbg_index_10b15a3a760a899d: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.index(getStringFromWasm0(arg1, arg2));
            return ret;
        }, arguments); },
        __wbg_indexedDB_47c354eb27472a00: function() { return handleError(function (arg0) {
            const ret = arg0.indexedDB;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_indexedDB_594b9e6820e78c00: function() { return handleError(function (arg0) {
            const ret = arg0.indexedDB;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_indexedDB_c7dd741e3b661da5: function() { return handleError(function (arg0) {
            const ret = arg0.indexedDB;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        }, arguments); },
        __wbg_instanceof_ArrayBuffer_4480b9e0068a8adb: function(arg0) {
            let result;
            try {
                result = arg0 instanceof ArrayBuffer;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_CursorSys_383984afc1fa1bbc: function(arg0) {
            let result;
            try {
                result = arg0 instanceof IDBCursorWithValue;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_DomException_952faa8037702c00: function(arg0) {
            let result;
            try {
                result = arg0 instanceof DOMException;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Error_1fdac9f13a8181ba: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Error;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_IdbCursor_d05ea85b8777e314: function(arg0) {
            let result;
            try {
                result = arg0 instanceof IDBCursor;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_IdbDatabase_1cc734ba1b040dd7: function(arg0) {
            let result;
            try {
                result = arg0 instanceof IDBDatabase;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_IdbOpenDbRequest_c34a5f3bfadf1d88: function(arg0) {
            let result;
            try {
                result = arg0 instanceof IDBOpenDBRequest;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_IdbRequest_fe7a4cb10800af5b: function(arg0) {
            let result;
            try {
                result = arg0 instanceof IDBRequest;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Map_e5b5e3db98422fcc: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Map;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Response_c8b64b2256f01bec: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Response;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Uint8Array_309b927aaf7a3fc7: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Uint8Array;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_isArray_0677c962b281d01a: function(arg0) {
            const ret = Array.isArray(arg0);
            return ret;
        },
        __wbg_isArray_82995d8620818ac5: function(arg0) {
            const ret = Array.isArray(arg0);
            return ret;
        },
        __wbg_isSafeInteger_04f36e4056f1b851: function(arg0) {
            const ret = Number.isSafeInteger(arg0);
            return ret;
        },
        __wbg_item_a630f38f5a12ba67: function(arg0, arg1, arg2) {
            const ret = arg1.item(arg2 >>> 0);
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_iterator_6f722e4a93058b71: function() {
            const ret = Symbol.iterator;
            return ret;
        },
        __wbg_key_b74c6cd401e5906b: function() { return handleError(function (arg0) {
            const ret = arg0.key;
            return ret;
        }, arguments); },
        __wbg_length_1f0964f4a5e2c6d8: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_length_370319915dc99107: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_lowerBound_a00067ed8d582a72: function() { return handleError(function (arg0, arg1) {
            const ret = IDBKeyRange.lowerBound(arg0, arg1 !== 0);
            return ret;
        }, arguments); },
        __wbg_message_8326fb1d549bebc5: function(arg0) {
            const ret = arg0.message;
            return ret;
        },
        __wbg_message_fb0e6e7854e6ea7a: function(arg0, arg1) {
            const ret = arg1.message;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_msCrypto_bd5a034af96bcba6: function(arg0) {
            const ret = arg0.msCrypto;
            return ret;
        },
        __wbg_name_0945f1e1bfbc875b: function(arg0, arg1) {
            const ret = arg1.name;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_name_9d2bcd24d4433cef: function(arg0, arg1) {
            const ret = arg1.name;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_new_0_3da9e97f24fc69be: function() {
            const ret = new Date();
            return ret;
        },
        __wbg_new_0d809930cd1354c6: function() { return handleError(function () {
            const ret = new Headers();
            return ret;
        }, arguments); },
        __wbg_new_227d7c05414eb861: function() {
            const ret = new Error();
            return ret;
        },
        __wbg_new_32b398fb48b6d94a: function() {
            const ret = new Array();
            return ret;
        },
        __wbg_new_4339b2a2675a03e3: function() { return handleError(function () {
            const ret = new AbortController();
            return ret;
        }, arguments); },
        __wbg_new_b667d279fd5aa943: function(arg0, arg1) {
            const ret = new Error(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_new_cc984128914cfc6f: function(arg0) {
            const ret = new Date(arg0);
            return ret;
        },
        __wbg_new_cd45aabdf6073e84: function(arg0) {
            const ret = new Uint8Array(arg0);
            return ret;
        },
        __wbg_new_da52cf8fe3429cb2: function() {
            const ret = new Object();
            return ret;
        },
        __wbg_new_from_slice_77cdfb7977362f3c: function(arg0, arg1) {
            const ret = new Uint8Array(getArrayU8FromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_new_with_length_e6785c33c8e4cce8: function(arg0) {
            const ret = new Uint8Array(arg0 >>> 0);
            return ret;
        },
        __wbg_new_with_message_and_name_6800a3d3730c3f3d: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = new DOMException(getStringFromWasm0(arg0, arg1), getStringFromWasm0(arg2, arg3));
            return ret;
        }, arguments); },
        __wbg_new_with_str_and_init_d95cbe11ce28e65e: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = new Request(getStringFromWasm0(arg0, arg1), arg2);
            return ret;
        }, arguments); },
        __wbg_next_6dbf2c0ac8cde20f: function(arg0) {
            const ret = arg0.next;
            return ret;
        },
        __wbg_next_71f2aa1cb3d1e37e: function() { return handleError(function (arg0) {
            const ret = arg0.next();
            return ret;
        }, arguments); },
        __wbg_node_84ea875411254db1: function(arg0) {
            const ret = arg0.node;
            return ret;
        },
        __wbg_now_390768da5ee9e776: function(arg0) {
            const ret = arg0.now();
            return ret;
        },
        __wbg_now_86c0d4ba3fa605b8: function() {
            const ret = Date.now();
            return ret;
        },
        __wbg_now_e7c6795a7f81e10f: function(arg0) {
            const ret = arg0.now();
            return ret;
        },
        __wbg_objectStoreNames_146ab25540bff6db: function(arg0) {
            const ret = arg0.objectStoreNames;
            return ret;
        },
        __wbg_objectStore_d5f47956b6c741e3: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.objectStore(getStringFromWasm0(arg1, arg2));
            return ret;
        }, arguments); },
        __wbg_oldVersion_0fc5098aa13b3126: function(arg0) {
            const ret = arg0.oldVersion;
            return ret;
        },
        __wbg_on_background_task_error_report_06e41d42a8a9b20d: function(arg0) {
            const ret = arg0.on_background_task_error_report;
            return ret;
        },
        __wbg_on_change_39d002ce8dc1c497: function(arg0) {
            const ret = arg0.on_change;
            return ret;
        },
        __wbg_on_change_3da78805f9b6b97d: function(arg0) {
            const ret = arg0.on_change;
            return ret;
        },
        __wbg_on_change_f70ed35011592e1f: function(arg0) {
            const ret = arg0.on_change;
            return ret;
        },
        __wbg_on_duplicate_key_upload_error_9062b2aa3db21923: function(arg0) {
            const ret = arg0.on_duplicate_key_upload_error;
            return ret;
        },
        __wbg_on_error_a3f78a02aed1ed83: function(arg0) {
            const ret = arg0.on_error;
            return ret;
        },
        __wbg_on_event_f01db213dadf3807: function(arg0) {
            const ret = arg0.on_event;
            return ret;
        },
        __wbg_on_notification_6401157b7a86d31a: function(arg0) {
            const ret = arg0.on_notification;
            return ret;
        },
        __wbg_on_update_010b0d88e2ec9833: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_08843b767260d330: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_089e8a1958f9d6d7: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_1278aa588d94ddf0: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_1763badcac55d544: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_33b545cc46e33ec6: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_3521124c38835ca4: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_442f04d33a5c8830: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_44c7dfa889f9ab42: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_4de805b4179b13f6: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_57b391e867714032: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_588f3cbf685be13a: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_58ee23e643dd844f: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_7060295d09d86c09: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_89b55513c86b312d: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_8ea2b8bac069ac48: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_8eaa9a7bd7a071ed: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_944e8258cbb36279: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_9ad5aff1e13954e0: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_a6043feee1107796: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_a7c8f9b965930e3c: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_af367a49354000dc: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_b59a6a3ecf59c4ab: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_bbf5772f44c804b5: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_d8117e17278e64d3: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_dfd98cc549b3aab9: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_e2425b9287a10874: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_e45b6e1741349a6a: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_e4ed9bb5c2662df5: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_update_f1eb038ff7e2ae67: function(arg0) {
            const ret = arg0.on_update;
            return ret;
        },
        __wbg_on_utd_b4fc4a9f329d6767: function(arg0) {
            const ret = arg0.on_utd;
            return ret;
        },
        __wbg_openCursor_04059a89749928f3: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.openCursor(arg1);
            return ret;
        }, arguments); },
        __wbg_openCursor_10d9f060128089d5: function() { return handleError(function (arg0) {
            const ret = arg0.openCursor();
            return ret;
        }, arguments); },
        __wbg_openCursor_5d03280ba93bd831: function() { return handleError(function (arg0) {
            const ret = arg0.openCursor();
            return ret;
        }, arguments); },
        __wbg_openCursor_e8366f1bf7e4ac07: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.openCursor(arg1);
            return ret;
        }, arguments); },
        __wbg_openKeyCursor_8efec38ce4a6296f: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.openKeyCursor(arg1, __wbindgen_enum_IdbCursorDirection[arg2]);
            return ret;
        }, arguments); },
        __wbg_openKeyCursor_bc480bf0e57a97c6: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.openKeyCursor(arg1);
            return ret;
        }, arguments); },
        __wbg_openKeyCursor_ed8abcab67d0d658: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.openKeyCursor(arg1, __wbindgen_enum_IdbCursorDirection[arg2]);
            return ret;
        }, arguments); },
        __wbg_open_72e5234a49d5f85d: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.open(getStringFromWasm0(arg1, arg2), arg3 >>> 0);
            return ret;
        }, arguments); },
        __wbg_open_7910b7c458d0df4b: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.open(getStringFromWasm0(arg1, arg2), arg3);
            return ret;
        }, arguments); },
        __wbg_open_8b445bd20535cb55: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.open(getStringFromWasm0(arg1, arg2));
            return ret;
        }, arguments); },
        __wbg_parse_1c0d8a8656d7e016: function() { return handleError(function (arg0, arg1) {
            const ret = JSON.parse(getStringFromWasm0(arg0, arg1));
            return ret;
        }, arguments); },
        __wbg_performance_3fcf6e32a7e1ed0a: function(arg0) {
            const ret = arg0.performance;
            return ret;
        },
        __wbg_pointee_4607df41580997f5: function(arg0, arg1) {
            const ret = arg1.pointee;
            var ptr1 = isLikeNone(ret) ? 0 : passArray8ToWasm0(ret, wasm.__wbindgen_malloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_process_44c7a14e11e9f69e: function(arg0) {
            const ret = arg0.process;
            return ret;
        },
        __wbg_prototypesetcall_4770620bbe4688a0: function(arg0, arg1, arg2) {
            Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
        },
        __wbg_push_d2ae3af0c1217ae6: function(arg0, arg1) {
            const ret = arg0.push(arg1);
            return ret;
        },
        __wbg_put_3067c7a6df4dec59: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.put(arg1);
            return ret;
        }, arguments); },
        __wbg_put_a368805e3dcab3a7: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.put(arg1, arg2);
            return ret;
        }, arguments); },
        __wbg_queueMicrotask_0ab5b2d2393e99b9: function(arg0) {
            const ret = arg0.queueMicrotask;
            return ret;
        },
        __wbg_queueMicrotask_6a09b7bc46549209: function(arg0) {
            queueMicrotask(arg0);
        },
        __wbg_randomFillSync_6c25eac9869eb53c: function() { return handleError(function (arg0, arg1) {
            arg0.randomFillSync(arg1);
        }, arguments); },
        __wbg_readyState_9794af9795506c08: function(arg0) {
            const ret = arg0.readyState;
            return (__wbindgen_enum_IdbRequestReadyState.indexOf(ret) + 1 || 3) - 1;
        },
        __wbg_request_64abeba15a72c084: function(arg0) {
            const ret = arg0.request;
            return ret;
        },
        __wbg_request_72a78988f2edecad: function(arg0) {
            const ret = arg0.request;
            return ret;
        },
        __wbg_require_b4edbdcf3e2a1ef0: function() { return handleError(function () {
            const ret = module.require;
            return ret;
        }, arguments); },
        __wbg_resolve_2191a4dfe481c25b: function(arg0) {
            const ret = Promise.resolve(arg0);
            return ret;
        },
        __wbg_result_2b1294a2bf8dc773: function() { return handleError(function (arg0) {
            const ret = arg0.result;
            return ret;
        }, arguments); },
        __wbg_retrieve_session_from_keychain_e825ea6027c3640b: function(arg0) {
            const ret = arg0.retrieve_session_from_keychain;
            return ret;
        },
        __wbg_return_value_48da9ef69b44dbd1: function(arg0) {
            const ret = arg0.return_value;
            return ret;
        },
        __wbg_return_value_5539e0fc7aeba310: function(arg0) {
            const ret = arg0.return_value;
            return ret;
        },
        __wbg_return_value_6bbcb6e2fa410c87: function(arg0) {
            const ret = arg0.return_value;
            return ret;
        },
        __wbg_return_value_73cdd43ed3057096: function(arg0) {
            const ret = arg0.return_value;
            return ret;
        },
        __wbg_return_value_a09f4c886ccba8df: function(arg0) {
            const ret = arg0.return_value;
            return ret;
        },
        __wbg_return_value_a164e1ae5534e107: function(arg0) {
            const ret = arg0.return_value;
            return ret;
        },
        __wbg_return_value_aad9c0a55f740929: function(arg0, arg1) {
            const ret = arg1.return_value;
            const ptr1 = passArray8ToWasm0(ret, wasm.__wbindgen_malloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_return_value_c499f01c1f90323e: function(arg0) {
            const ret = arg0.return_value;
            return ret;
        },
        __wbg_return_value_d4e7762264b14fe7: function(arg0) {
            const ret = arg0.return_value;
            return ret;
        },
        __wbg_return_value_d4e90cb51cc5212a: function(arg0) {
            const ret = arg0.return_value;
            return ret;
        },
        __wbg_return_value_fd4226d8a645f955: function(arg0) {
            const ret = arg0.return_value;
            return ret;
        },
        __wbg_save_session_in_keychain_46a31df0889fed8e: function(arg0) {
            const ret = arg0.save_session_in_keychain;
            return ret;
        },
        __wbg_setTimeout_56bcdccbad22fd44: function() { return handleError(function (arg0, arg1) {
            const ret = setTimeout(arg0, arg1);
            return ret;
        }, arguments); },
        __wbg_setTimeout_b188b3bcc8977c7d: function(arg0, arg1) {
            const ret = setTimeout(arg0, arg1);
            return ret;
        },
        __wbg_set_6be42768c690e380: function(arg0, arg1, arg2) {
            arg0[arg1] = arg2;
        },
        __wbg_set_8a16b38e4805b298: function(arg0, arg1, arg2) {
            arg0[arg1 >>> 0] = arg2;
        },
        __wbg_set_body_029f2d171e0a005f: function(arg0, arg1) {
            arg0.body = arg1;
        },
        __wbg_set_cache_b4a740b195c051f4: function(arg0, arg1) {
            arg0.cache = __wbindgen_enum_RequestCache[arg1];
        },
        __wbg_set_credentials_bb34a40189e3b43b: function(arg0, arg1) {
            arg0.credentials = __wbindgen_enum_RequestCredentials[arg1];
        },
        __wbg_set_headers_9c61d123c3ee1f10: function(arg0, arg1) {
            arg0.headers = arg1;
        },
        __wbg_set_key_path_849bf8bbe4f4b75c: function(arg0, arg1) {
            arg0.keyPath = arg1;
        },
        __wbg_set_method_5532d59b92d76467: function(arg0, arg1, arg2) {
            arg0.method = getStringFromWasm0(arg1, arg2);
        },
        __wbg_set_mode_66c79886ad78fc05: function(arg0, arg1) {
            arg0.mode = __wbindgen_enum_RequestMode[arg1];
        },
        __wbg_set_onabort_e8ad31807de2db24: function(arg0, arg1) {
            arg0.onabort = arg1;
        },
        __wbg_set_oncomplete_e6abb66d0ad42731: function(arg0, arg1) {
            arg0.oncomplete = arg1;
        },
        __wbg_set_onerror_3488a474171ed56d: function(arg0, arg1) {
            arg0.onerror = arg1;
        },
        __wbg_set_onerror_f8d31be44335c633: function(arg0, arg1) {
            arg0.onerror = arg1;
        },
        __wbg_set_onsuccess_cd0c3642a2873e66: function(arg0, arg1) {
            arg0.onsuccess = arg1;
        },
        __wbg_set_onupgradeneeded_7b2cf4ba1c57e655: function(arg0, arg1) {
            arg0.onupgradeneeded = arg1;
        },
        __wbg_set_signal_c4ef8faddb4c1446: function(arg0, arg1) {
            arg0.signal = arg1;
        },
        __wbg_set_unique_11514da4875da882: function(arg0, arg1) {
            arg0.unique = arg1 !== 0;
        },
        __wbg_settings_did_change_068b964fa41ea76c: function(arg0) {
            const ret = arg0.settings_did_change;
            return ret;
        },
        __wbg_signal_dad7cb35193abd31: function(arg0) {
            const ret = arg0.signal;
            return ret;
        },
        __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
            const ret = arg1.stack;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_static_accessor_GLOBAL_4ef717fb391d88b7: function() {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_GLOBAL_THIS_8d1badc68b5a74f4: function() {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_SELF_146583524fe1469b: function() {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_WINDOW_f2829a2234d7819e: function() {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_performance_7f6ecf1ec56b9bbe: function() {
            const ret = performance;
            return ret;
        },
        __wbg_status_c45b3b9b3033184a: function(arg0) {
            const ret = arg0.status;
            return ret;
        },
        __wbg_stringify_b54333f60f1e4dad: function() { return handleError(function (arg0) {
            const ret = JSON.stringify(arg0);
            return ret;
        }, arguments); },
        __wbg_subarray_3ed232c8a6baee09: function(arg0, arg1, arg2) {
            const ret = arg0.subarray(arg1 >>> 0, arg2 >>> 0);
            return ret;
        },
        __wbg_target_e759594a8d965ed7: function(arg0) {
            const ret = arg0.target;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_text_d3a29f7525a132c3: function() { return handleError(function (arg0) {
            const ret = arg0.text();
            return ret;
        }, arguments); },
        __wbg_then_16d107c451e9905d: function(arg0, arg1, arg2) {
            const ret = arg0.then(arg1, arg2);
            return ret;
        },
        __wbg_then_6ec10ae38b3e92f7: function(arg0, arg1) {
            const ret = arg0.then(arg1);
            return ret;
        },
        __wbg_toString_b201c2690bbe445a: function(arg0) {
            const ret = arg0.toString();
            return ret;
        },
        __wbg_transaction_85424a007686760f: function(arg0) {
            const ret = arg0.transaction;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_transaction_d911d96b4b0af154: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = arg0.transaction(getStringFromWasm0(arg1, arg2), __wbindgen_enum_IdbTransactionMode[arg3]);
            return ret;
        }, arguments); },
        __wbg_transaction_d93cc0feb20672da: function(arg0) {
            const ret = arg0.transaction;
            return ret;
        },
        __wbg_transaction_f212158274461f32: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = arg0.transaction(arg1, __wbindgen_enum_IdbTransactionMode[arg2]);
            return ret;
        }, arguments); },
        __wbg_transmission_progress_80b5d2e8aa68aa3b: function(arg0) {
            const ret = arg0.transmission_progress;
            return ret;
        },
        __wbg_uniffi_clone_00cd463160a8491d: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_0887fc07b21d2881: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_0b1c35ea7d14139f: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_0f0e9b49ffd56b39: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_1d20377f0afa192b: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_1fcb186d07723ab4: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_20a890a82903b566: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_237eede799bc6647: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_23b3e7ef648865fc: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_247c097ef0b44a24: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_284ce0ef236905f9: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_2a32a0d77a93a92e: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_2c5d0eed6a30b8b3: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_311e8b5d5e817a6b: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_3193e3f32dfdc378: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_31dde7d469766314: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_38bb6669e16edbde: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_3bf529699810bc09: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_4532ebcbc1ed8726: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_485c709f00fb859e: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_6719d7e208e4440e: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_732b720936060f12: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_77e6bc9bdfc924e6: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_81d54d07fb38a1a5: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_8614ce4e437ea40d: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_8d21ba8ed370aad9: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_8d40525a0dc82468: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_909c5a0110c62679: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_95ebb1d2d566a9cc: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_969845c68ef5a024: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_a35cb1a649a75027: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_a76553d23f78f584: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_a90063966bdb3d29: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_b00eee7730381748: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_b0317b9a2a698157: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_b2e1fde22da0c3b1: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_ba5ae1fc3c61d6c2: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_cf117755662d6d2f: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_d18e254d3de56cce: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_d1e170bdf4095ba1: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_d32a18f9ed687c3b: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_dbf06c64a6f2e7ec: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_dcbe7e5102fed0e6: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_e5eaf23a58bdd224: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_ea03e2ca747fa94b: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_edd4edb97dc31ca5: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_f3985407bafd2f18: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_f70a8c2c300f48d0: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_f92e0bc67013ea31: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_clone_fe549917c1e05d5a: function(arg0) {
            const ret = arg0.uniffi_clone;
            return ret;
        },
        __wbg_uniffi_free_0246c9be48fb3488: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_07d89d1bd9e0003e: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_0c2b55d121de81de: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_0f00853ab21e5f6f: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_1519f677db5008da: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_170fe5f59bd0e601: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_1c45da7bb7d428ac: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_1f9ac185bb29a261: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_24f227b3d6a8af68: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_29b7f7dc96d40fee: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_2ae656d21ab33809: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_3450563eb5b0c750: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_352d0dece9c2255f: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_3830fc1667111f85: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_48f4c1e858d9773c: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_4f879f4f8f564751: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_514f26233801f467: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_5acaf187e0f5ab74: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_66d53c52811588e0: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_7012e4ba9093f874: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_711bbceae319d5b5: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_738328598cec50cb: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_762f90db71eb1dd1: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_7705870e4dab6d68: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_77aebc712c5e6991: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_800036e51f0466e1: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_80ee01e734f5eb94: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_8d3c3eb6b305e3df: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_8dfc0a773b1d3a96: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_93cd89d8eaa3f5f6: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_9ed9fb805a14098a: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_a57f9ea76fc787fe: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_b0a07f54edb682f0: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_b68c213832195af8: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_bd45239e5dcd1f36: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_bf7042015d0b680c: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_c0d3051e53b813b3: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_c5e63904544d5f0f: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_ca6f3e9b0d6c44e2: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_cadcae1f803bd983: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_cc167fce6cb7ea20: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_d261e1cd42629be8: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_d5f1e1fbbdcc2096: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_daea9f6bd3767469: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_df281ce1c8d49470: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_e563abe454507a47: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_f3112c19432f25ff: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_f3a01f0fd48e326b: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_fa4b66684bada9eb: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_uniffi_free_fbb6f7a684b5d788: function(arg0) {
            const ret = arg0.uniffi_free;
            return ret;
        },
        __wbg_update_c1dc502c30e366c4: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.update(arg1);
            return ret;
        }, arguments); },
        __wbg_upperBound_68f285e0e589eb0e: function() { return handleError(function (arg0, arg1) {
            const ret = IDBKeyRange.upperBound(arg0, arg1 !== 0);
            return ret;
        }, arguments); },
        __wbg_url_abdb8fb08377f8c0: function(arg0, arg1) {
            const ret = arg1.url;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_value_361064aa58a53344: function() { return handleError(function (arg0) {
            const ret = arg0.value;
            return ret;
        }, arguments); },
        __wbg_value_a5d5488a9589444a: function(arg0) {
            const ret = arg0.value;
            return ret;
        },
        __wbg_version_955f7846e0eabcc3: function(arg0) {
            const ret = arg0.version;
            return ret;
        },
        __wbg_versions_276b2795b1c6a219: function(arg0) {
            const ret = arg0.versions;
            return ret;
        },
        __wbindgen_cast_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 17452, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_4dd230343bba0616___convert__closures_____invoke___wasm_bindgen_4dd230343bba0616___JsValue__core_608f92abc48d28da___result__Result_____wasm_bindgen_4dd230343bba0616___JsError___true_);
            return ret;
        },
        __wbindgen_cast_0000000000000002: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("Event")], shim_idx: 12124, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_4dd230343bba0616___convert__closures_____invoke___web_sys_23e6a97038fe64e9___features__gen_Event__Event______true_);
            return ret;
        },
        __wbindgen_cast_0000000000000003: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("IDBVersionChangeEvent")], shim_idx: 11897, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_4dd230343bba0616___convert__closures_____invoke___web_sys_23e6a97038fe64e9___features__gen_IdbVersionChangeEvent__IdbVersionChangeEvent__core_608f92abc48d28da___result__Result_____wasm_bindgen_4dd230343bba0616___JsValue___true_);
            return ret;
        },
        __wbindgen_cast_0000000000000004: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 12126, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_4dd230343bba0616___convert__closures_____invoke_______true_);
            return ret;
        },
        __wbindgen_cast_0000000000000005: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 12257, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_4dd230343bba0616___convert__closures_____invoke_______true__1_);
            return ret;
        },
        __wbindgen_cast_0000000000000006: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 15991, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, wasm_bindgen_4dd230343bba0616___convert__closures_____invoke_______true__2_);
            return ret;
        },
        __wbindgen_cast_0000000000000007: function(arg0) {
            // Cast intrinsic for `F64 -> Externref`.
            const ret = arg0;
            return ret;
        },
        __wbindgen_cast_0000000000000008: function(arg0) {
            // Cast intrinsic for `I64 -> Externref`.
            const ret = arg0;
            return ret;
        },
        __wbindgen_cast_0000000000000009: function(arg0, arg1) {
            // Cast intrinsic for `Ref(Slice(U8)) -> NamedExternref("Uint8Array")`.
            const ret = getArrayU8FromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_000000000000000a: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_000000000000000b: function(arg0) {
            // Cast intrinsic for `U64 -> Externref`.
            const ret = BigInt.asUintN(64, arg0);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./index_bg.js": import0,
    };
}

function wasm_bindgen_4dd230343bba0616___convert__closures_____invoke_______true_(arg0, arg1) {
    wasm.wasm_bindgen_4dd230343bba0616___convert__closures_____invoke_______true_(arg0, arg1);
}

function wasm_bindgen_4dd230343bba0616___convert__closures_____invoke_______true__1_(arg0, arg1) {
    wasm.wasm_bindgen_4dd230343bba0616___convert__closures_____invoke_______true__1_(arg0, arg1);
}

function wasm_bindgen_4dd230343bba0616___convert__closures_____invoke_______true__2_(arg0, arg1) {
    wasm.wasm_bindgen_4dd230343bba0616___convert__closures_____invoke_______true__2_(arg0, arg1);
}

function wasm_bindgen_4dd230343bba0616___convert__closures_____invoke___web_sys_23e6a97038fe64e9___features__gen_Event__Event______true_(arg0, arg1, arg2) {
    wasm.wasm_bindgen_4dd230343bba0616___convert__closures_____invoke___web_sys_23e6a97038fe64e9___features__gen_Event__Event______true_(arg0, arg1, arg2);
}

function wasm_bindgen_4dd230343bba0616___convert__closures_____invoke___wasm_bindgen_4dd230343bba0616___JsValue__core_608f92abc48d28da___result__Result_____wasm_bindgen_4dd230343bba0616___JsError___true_(arg0, arg1, arg2) {
    const ret = wasm.wasm_bindgen_4dd230343bba0616___convert__closures_____invoke___wasm_bindgen_4dd230343bba0616___JsValue__core_608f92abc48d28da___result__Result_____wasm_bindgen_4dd230343bba0616___JsError___true_(arg0, arg1, arg2);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}

function wasm_bindgen_4dd230343bba0616___convert__closures_____invoke___web_sys_23e6a97038fe64e9___features__gen_IdbVersionChangeEvent__IdbVersionChangeEvent__core_608f92abc48d28da___result__Result_____wasm_bindgen_4dd230343bba0616___JsValue___true_(arg0, arg1, arg2) {
    const ret = wasm.wasm_bindgen_4dd230343bba0616___convert__closures_____invoke___web_sys_23e6a97038fe64e9___features__gen_IdbVersionChangeEvent__IdbVersionChangeEvent__core_608f92abc48d28da___result__Result_____wasm_bindgen_4dd230343bba0616___JsValue___true_(arg0, arg1, arg2);
    if (ret[1]) {
        throw takeFromExternrefTable0(ret[0]);
    }
}


const __wbindgen_enum_IdbCursorDirection = ["next", "nextunique", "prev", "prevunique"];


const __wbindgen_enum_IdbRequestReadyState = ["pending", "done"];


const __wbindgen_enum_IdbTransactionMode = ["readonly", "readwrite", "versionchange", "readwriteflush", "cleanup"];


const __wbindgen_enum_RequestCache = ["default", "no-store", "reload", "no-cache", "force-cache", "only-if-cached"];


const __wbindgen_enum_RequestCredentials = ["omit", "same-origin", "include"];


const __wbindgen_enum_RequestMode = ["same-origin", "no-cors", "cors", "navigate"];
const ForeignFutureCompleteF32Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompletef32_free(ptr, 1));
const ForeignFutureCompleteF64Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompletef64_free(ptr, 1));
const ForeignFutureCompleteI16Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompletei16_free(ptr, 1));
const ForeignFutureCompleteI32Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompletei32_free(ptr, 1));
const ForeignFutureCompleteI64Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompletei64_free(ptr, 1));
const ForeignFutureCompleteI8Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompletei8_free(ptr, 1));
const ForeignFutureCompleteRustBufferFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompleterustbuffer_free(ptr, 1));
const ForeignFutureCompleteU16Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompleteu16_free(ptr, 1));
const ForeignFutureCompleteU32Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompleteu32_free(ptr, 1));
const ForeignFutureCompleteU64Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompleteu64_free(ptr, 1));
const ForeignFutureCompleteU8Finalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompleteu8_free(ptr, 1));
const ForeignFutureCompleteVoidFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_foreignfuturecompletevoid_free(ptr, 1));
const RustCallStatusFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_rustcallstatus_free(ptr, 1));

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => wasm.__wbindgen_destroy_closure(state.a, state.b));

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    return decodeText(ptr >>> 0, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, f) {
    const state = { a: arg0, b: arg1, cnt: 1 };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            wasm.__wbindgen_destroy_closure(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasmInstance, wasm;
function __wbg_finalize_init(instance, module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }


    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
