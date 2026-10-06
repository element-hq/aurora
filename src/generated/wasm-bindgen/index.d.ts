/* tslint:disable */
/* eslint-disable */

export class ForeignFutureCompleteF32 {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    call(_ctx: ForeignFutureCompleteF32, callback_data: bigint, result: any): void;
}

export class ForeignFutureCompleteF64 {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    call(_ctx: ForeignFutureCompleteF64, callback_data: bigint, result: any): void;
}

export class ForeignFutureCompleteI16 {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    call(_ctx: ForeignFutureCompleteI16, callback_data: bigint, result: any): void;
}

export class ForeignFutureCompleteI32 {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    call(_ctx: ForeignFutureCompleteI32, callback_data: bigint, result: any): void;
}

export class ForeignFutureCompleteI64 {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    call(_ctx: ForeignFutureCompleteI64, callback_data: bigint, result: any): void;
}

export class ForeignFutureCompleteI8 {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    call(_ctx: ForeignFutureCompleteI8, callback_data: bigint, result: any): void;
}

export class ForeignFutureCompleteRustBuffer {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    call(_ctx: ForeignFutureCompleteRustBuffer, callback_data: bigint, result: any): void;
}

export class ForeignFutureCompleteU16 {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    call(_ctx: ForeignFutureCompleteU16, callback_data: bigint, result: any): void;
}

export class ForeignFutureCompleteU32 {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    call(_ctx: ForeignFutureCompleteU32, callback_data: bigint, result: any): void;
}

export class ForeignFutureCompleteU64 {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    call(_ctx: ForeignFutureCompleteU64, callback_data: bigint, result: any): void;
}

export class ForeignFutureCompleteU8 {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    call(_ctx: ForeignFutureCompleteU8, callback_data: bigint, result: any): void;
}

export class ForeignFutureCompleteVoid {
    private constructor();
    free(): void;
    [Symbol.dispose](): void;
    call(_ctx: ForeignFutureCompleteVoid, callback_data: bigint, result: any): void;
}

export class RustCallStatus {
    free(): void;
    [Symbol.dispose](): void;
    constructor();
    code: number;
    get errorBuf(): Uint8Array | undefined;
    set errorBuf(value: Uint8Array | null | undefined);
}

/**
 * A machine-readable representation of the authenticity for a `ShieldState`.
 */
export enum ShieldStateCode {
    /**
     * Not enough information available to check the authenticity.
     */
    AuthenticityNotGuaranteed = 0,
    /**
     * The sending device isn't yet known by the Client.
     */
    UnknownDevice = 1,
    /**
     * The sending device hasn't been verified by the sender.
     */
    UnsignedDevice = 2,
    /**
     * The sender hasn't been verified by the Client's user.
     */
    UnverifiedIdentity = 3,
    /**
     * The sender was previously verified but changed their identity.
     */
    VerificationViolation = 4,
    /**
     * The `sender` field on the event does not match the owner of the device
     * that established the Megolm session.
     */
    MismatchedSender = 5,
}

export function ubrn_ffi_matrix_sdk_base_uniffi_contract_version(): number;

export function ubrn_ffi_matrix_sdk_common_uniffi_contract_version(): number;

export function ubrn_ffi_matrix_sdk_contentscanner_uniffi_contract_version(): number;

export function ubrn_ffi_matrix_sdk_crypto_uniffi_contract_version(): number;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_f32(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_f64(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i16(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i32(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i64(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i8(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_rust_buffer(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u16(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u32(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u64(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u8(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_void(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_f32(handle: bigint, f_status_: RustCallStatus): number;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_f64(handle: bigint, f_status_: RustCallStatus): number;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i16(handle: bigint, f_status_: RustCallStatus): number;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i32(handle: bigint, f_status_: RustCallStatus): number;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i64(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i8(handle: bigint, f_status_: RustCallStatus): number;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_rust_buffer(handle: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u16(handle: bigint, f_status_: RustCallStatus): number;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u32(handle: bigint, f_status_: RustCallStatus): number;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u64(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u8(handle: bigint, f_status_: RustCallStatus): number;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_complete_void(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_f32(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_f64(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_i16(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_i32(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_i64(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_i8(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_rust_buffer(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_u16(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_u32(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_u64(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_u8(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_free_void(handle: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_f32(handle: bigint, callback: any, callback_data: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_f64(handle: bigint, callback: any, callback_data: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i16(handle: bigint, callback: any, callback_data: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i32(handle: bigint, callback: any, callback_data: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i64(handle: bigint, callback: any, callback_data: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i8(handle: bigint, callback: any, callback_data: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_rust_buffer(handle: bigint, callback: any, callback_data: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u16(handle: bigint, callback: any, callback_data: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u32(handle: bigint, callback: any, callback_data: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u64(handle: bigint, callback: any, callback_data: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u8(handle: bigint, callback: any, callback_data: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_rust_future_poll_void(handle: bigint, callback: any, callback_data: bigint): void;

export function ubrn_ffi_matrix_sdk_ffi_uniffi_contract_version(): number;

export function ubrn_ffi_matrix_sdk_ui_uniffi_contract_version(): number;

export function ubrn_ffi_matrix_sdk_uniffi_contract_version(): number;

export function ubrn_ffi_ruma_events_uniffi_contract_version(): number;

export function ubrn_uniffi_matrix_sdk_checksum_method_oauthauthorizationdata_login_url(): number;

export function ubrn_uniffi_matrix_sdk_crypto_fn_clone_backupsecrets(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_crypto_fn_clone_crosssigningsecrets(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_crypto_fn_clone_secretsbundle(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_crypto_fn_free_backupsecrets(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_crypto_fn_free_crosssigningsecrets(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_crypto_fn_free_secretsbundle(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_clientbuilder_new(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_contentscanner_new(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_indexeddbstorebuilder_new(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_mediasource_from_json(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_mediasource_from_url(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_passwordstrengthestimator_new(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_passwordstrengthestimator_with_modern_defaults2025(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_passwordstrengthestimator_with_zxcvbn_defaults(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_qrcodedata_from_bytes(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_secretsbundlewithuserid_from_str(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_span_current(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_span_new(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_span_new_bridge_span(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_content_without_relation_from_message(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_create_caption_edit(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_gen_transaction_id(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_generate_webview_url(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_get_element_call_required_permissions(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_init_platform(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_is_room_alias_format_valid(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_json_string_contains_secrets_bundle(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_log_event(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_make_widget_driver(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_matrix_to_room_alias_permalink(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_matrix_to_user_permalink(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_html(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_html_as_emote(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_markdown(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_markdown_as_emote(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_new(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_new_virtual_element_call_widget(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_parse_matrix_entity_from(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_reload_tracing_file_writer(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_room_alias_name_from_room_display_name(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_sdk_git_sha(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_server_name_from_user_id(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_suggested_power_level_for_role(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_func_suggested_role_for_power_level(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_accountdatalistener_on_change(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_backupstatelistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_backupsteadystatelistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_beaconinfolistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_calldeclinelistener_call(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_checkcodesender_send(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_abort_oauth_auth(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_account_data(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_account_url(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_available_sliding_sync_versions(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_avatar_url(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_await_room_remote_echo(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_cached_avatar_url(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_can_deactivate_account(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_clear_caches(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_clear_user_status(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_content_scanner(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_create_room(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_custom_login_with_jwt(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_deactivate_account(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_delete_pusher(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_device_id(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_disable_well_known_lookup(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_display_name(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_enable_all_send_queues(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_enable_automatic_call_status(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_enable_send_queue_upload_progress(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_encryption(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_fetch_media_preview_config(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_dm_room(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_dm_rooms(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_invite_avatars_display_policy(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_max_media_upload_size(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_content(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_file(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_preview_display_policy(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_thumbnail(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_notification_settings(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_profile(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_recently_visited_rooms(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_room(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_room_preview_from_room_alias(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_room_preview_from_room_id(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_session_verification_controller(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_store_sizes(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_url(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_url_preview(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_homeserver(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_homeserver_capabilities(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_homeserver_login_details(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_ignore_user(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_ignored_users(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_livekit_rtc_supported(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_login_with_qr_code_supported(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_profiles_sliding_sync_extension_supported(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_report_room_api_supported(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_room_alias_available(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_user_status_supported(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_join_room_by_id(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_join_room_by_id_or_alias(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_knock(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_login(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_login_with_email(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_login_with_oauth_callback(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_logout(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_mark_all_rooms_as_read(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_new_grant_login_with_qr_code_handler(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_new_login_with_qr_code_handler(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_notification_client(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_notification_client_with_timeouts(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_observe_account_data_event(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_observe_room_account_data_event(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_optimize_stores(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_pause(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_register_notification_handler(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_remove_avatar(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_request_openid_token(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_reset_supported_versions(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_reset_well_known(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_resolve_room_alias(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_restore_session(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_restore_session_with(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_resume(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_room_alias_exists(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_room_directory_search(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_rooms(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_search_users(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_server(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_server_vendor_info(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_session(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_account_data(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_avatar_url(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_content_scanner(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_delegate(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_display_name(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_invite_avatars_display_policy(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_media_preview_display_policy(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_media_retention_policy(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_presence(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_pusher(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_user_status(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_utd_delegate(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sliding_sync_version(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_space_service(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_start_sso_login(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_duplicate_key_upload_errors(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_ignored_users(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_media_preview_config(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_own_beacon_info_updates(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_own_profile(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_room_info(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_send_queue_status(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_send_queue_updates(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sync_once_v2(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sync_service(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sync_v2(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_tile_server(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_total_unread_notifications(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_track_recently_visited_room(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_unignore_user(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_upload_avatar(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_upload_media(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_url_for_oauth(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_user_id(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_user_id_server_name(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_add_root_certificates(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_auto_enable_backups(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_auto_enable_cross_signing(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_backup_download_strategy(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_build(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_cross_process_lock_config(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_decryption_settings(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_automatic_token_refresh(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_built_in_root_certificates(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_ssl_verification(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_well_known_lookup(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_dm_room_definition(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_enable_automatic_back_pagination(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_enable_share_history_on_invite(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_homeserver_url(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_in_memory_store(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_indexeddb_store(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_proxy(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_request_config(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_room_key_recipient_strategy(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_name(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_name_from_user_id(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_name_or_homeserver_url(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_set_session_delegate(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_sliding_sync_version_builder(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_system_is_memory_constrained(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_threads_enabled(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_user_agent(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientdelegate_did_receive_auth_error(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientdelegate_on_background_task_error_report(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientsessiondelegate_retrieve_session_from_keychain(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientsessiondelegate_save_session_in_keychain(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_contentscanner_scan(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_continuationmessagesender_cancel(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_continuationmessagesender_confirm(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_dehydrateddeviceeventlistener_on_event(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_duplicatekeyuploaderrorlistener_on_duplicate_key_upload_error(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_enablerecoveryprogresslistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_exists_on_server(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_state(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_state_listener(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_create_dehydrated_device(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_curve25519_key(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_dehydrated_device_event_listener(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_delete_dehydrated_device(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_disable_recovery(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_ed25519_key(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_enable_backups(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_enable_recovery(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_has_devices_to_verify_against(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_import_secrets_bundle(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_is_dehydrated_device_supported(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_is_last_device(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recover(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recover_and_fix_backup(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recover_and_reset(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recovery_state(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recovery_state_listener(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_rehydrate_dehydrated_device(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_reset_identity(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_reset_recovery_key(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_start_dehydrated_devices(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_stop_dehydrated_devices(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_user_identity(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_verification_state(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_verification_state_listener(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_wait_for_backup_upload_steady_state(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_wait_for_e2ee_initialization_tasks(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_generatedqrloginprogresslistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantgeneratedqrloginprogresslistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantloginwithqrcodehandler_generate(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantloginwithqrcodehandler_scan(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantqrloginprogresslistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_avatar(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_displayname(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_password(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_thirdparty_ids(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_get_login_token(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_extended_profile_fields(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_forgets_room_when_leaving(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_refresh(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_sliding_sync_version(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supported_oauth_prompts(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_oauth_login(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_password_login(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_sso_login(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_url(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_identityresethandle_auth_type(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_identityresethandle_cancel(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_identityresethandle_reset(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_identitystatuschangelistener_call(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_ignoreduserslistener_call(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_indexeddbstorebuilder_passphrase(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_inreplytodetails_event(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_inreplytodetails_event_id(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_accept(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_decline(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_decline_and_ban(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_mark_as_seen(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestslistener_call(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_contains_only_emojis(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_debug_info(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_get_send_handle(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_get_shields(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_latest_json(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_leavespacehandle_leave(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_leavespacehandle_rooms(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_livelocationslistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_livelocationsobserver_subscribe(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_loginwithqrcodehandler_generate(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_loginwithqrcodehandler_scan(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediafilehandle_path(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediafilehandle_persist(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediapreviewconfiglistener_on_change(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediasource_to_json(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediasource_url(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_notification(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_notifications(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_room(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_timeouts(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_can_homeserver_push_encrypted_event_to_device(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_can_push_encrypted_event_to_device(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_contains_keywords_rules(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_default_room_notification_mode(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_raw_push_rules(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_room_notification_settings(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_rooms_with_user_defined_rules(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_user_defined_room_notification_mode(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_call_enabled(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_invite_for_me_enabled(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_room_mention_enabled(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_user_mention_enabled(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_restore_default_room_notification_mode(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_call_enabled(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_custom_push_rule(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_default_room_notification_mode(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_delegate(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_invite_for_me_enabled(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_room_mention_enabled(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_room_notification_mode(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_user_mention_enabled(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_unmute_room(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettingsdelegate_settings_did_change(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_paginationstatuslistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_passwordstrengthestimator_estimate(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_passwordstrengthestimator_thresholds(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_profilelistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_progresswatcher_transmission_progress(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_base_url(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_intent(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_server_name(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_to_bytes(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrloginprogresslistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_recoverystatelistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_active_human_member_ids(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_active_human_member_ids_no_sync(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_active_members_count(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_active_room_call_participants(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_alternative_aliases(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_apply_power_level_changes(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_avatar_url(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_ban_user(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_canonical_alias(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_clear_composer_draft(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_decline_call(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_discard_room_key(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_display_name(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_edit(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_enable_encryption(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_enable_send_queue(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_encryption_state(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_fetch_thread_subscription(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_forget(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_get_power_levels(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_get_room_visibility(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_has_active_room_call(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_heroes(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_id(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_ignore_device_trust_and_resend(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_ignore_user(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_invite_user_by_id(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_invited_members_count(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_inviter(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_direct(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_encrypted(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_public(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_send_queue_enabled(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_space(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_join(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_joined_members_count(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_kick_user(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_latest_encryption_state(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_latest_event(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_leave(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_live_locations_observer(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_load_composer_draft(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_load_or_fetch_event(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_load_or_fetch_event_with_relations(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_load_user_receipt(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_mark_as_fully_read_unchecked(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_mark_as_read(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_matrix_to_event_permalink(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_matrix_to_permalink(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member_avatar_url(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member_display_name(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member_with_sender_info(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_members(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_members_no_sync(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_membership(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_own_user_id(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_predecessor_room(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_preview_room(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_publish_room_alias_in_room_directory(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_raw_name(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_redact(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_remove_avatar(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_remove_room_alias_from_room_directory(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_report_content(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_report_room(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_reset_power_levels(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_room_events_debug_string(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_room_info(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_save_composer_draft(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_live_location(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_raw(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_single_receipt(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_state_event_raw(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_is_favourite(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_is_low_priority(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_name(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_own_member_display_name(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_thread_subscription(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_topic(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_unread_flag(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_start_live_location_share(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_stop_live_location_share(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_call_decline_events(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_identity_status_changes(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_knock_requests(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_room_info_updates(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_send_queue_updates(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_typing_notifications(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_successor_room(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_suggested_role_for_user(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_thread_list_service(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_timeline(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_timeline_with_configuration(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_topic(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_typing_notice(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_unban_user(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_canonical_alias(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_history_visibility(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_join_rules(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_power_levels_for_users(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_room_visibility(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_upload_avatar(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_withdraw_verification_and_resend(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomaccountdatalistener_on_change(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_is_at_last_page(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_loaded_pages(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_next_page(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_results(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_search(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearchentrieslistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roominfolistener_call(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlist_entries_with_dynamic_adapters(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlist_loading_state(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlist_room(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_add_one_page(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_reset_to_one_page(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_set_filter(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieslistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieswithdynamicadaptersresult_controller(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieswithdynamicadaptersresult_entries_stream(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistloadingstatelistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_all_rooms(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_remove_room_subscriptions(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_reset_and_add_room_subscriptions(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_room(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_set_room_subscriptions(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_state(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_sync_indicator(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservicestatelistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservicesyncindicatorlistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roommembersiterator_len(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roommembersiterator_next_chunk(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roommessageeventcontentwithoutrelation_with_mentions(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_ban(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_invite(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_kick(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_pin_unpin(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_redact_other(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_redact_own(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_send_message(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_send_state(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_trigger_room_notification(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_ban(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_invite(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_kick(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_pin_unpin(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_redact_other(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_redact_own(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_send_message(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_send_state(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_trigger_room_notification(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_events(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_user_power_levels(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_values(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_forget(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_info(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_inviter(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_leave(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_own_membership_details(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_secretsbundlewithuserid_contains_backup_key(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendattachmentjoinhandle_cancel(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendattachmentjoinhandle_join(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendhandle_abort(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendhandle_try_resend(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendqueuelistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendqueueroomerrorlistener_on_error(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendqueueroomupdatelistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_accept_verification_request(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_acknowledge_verification_request(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_approve_verification(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_cancel_verification(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_decline_verification(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_request_device_verification(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_request_user_verification(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_set_delegate(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_start_sas_verification(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_accept_verification_request(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_cancel(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_fail(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_finish(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_receive_verification_data(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_receive_verification_request(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_start_sas_verification(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationemoji_description(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationemoji_symbol(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_paginate(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_pagination_state(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_reset(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_rooms(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_space(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_subscribe_to_pagination_state_updates(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_subscribe_to_room_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_subscribe_to_space_updates(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlistentrieslistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlistpaginationstatelistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlistspacelistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_add_child_to_space(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_editable_spaces(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_get_space_room(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_joined_parent_ids_of_child(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_joined_parents_of_child(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_leave_space(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_remove_child_from_space(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_space_filters(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_space_room_list(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_subscribe_to_space_filters(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_subscribe_to_top_level_joined_spaces(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_top_level_ancestors_of(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_top_level_joined_spaces(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservicejoinedspaceslistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservicespacefilterslistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_span_enter(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_span_exit(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_span_is_none(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_ssohandler_finish(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_ssohandler_url(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_synclistenerv2_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncnotificationlistener_on_notification(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_expire_sessions(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_room_list_service(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_start(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_state(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_stop(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_finish(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_offline_mode(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_parent_span(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_room_list_connection_id(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_room_list_timeline_limit(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_share_pos(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicestateobserver_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_taskhandle_cancel(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_taskhandle_is_finished(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistentrieslistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistpaginationstatelistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_items(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_paginate(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_pagination_state(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_reset(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_subscribe_to_items_updates(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_subscribe_to_pagination_state_updates(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadsummary_latest_event(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadsummary_num_replies(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_add_listener(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_create_message_content(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_create_poll(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_edit(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_edit_revisions(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_end_poll(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_fetch_details_for_event(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_fetch_members(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_get_event_timeline_item_by_event_id(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_latest_event_id(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_load_reply_details(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_mark_as_read(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_paginate_backwards(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_paginate_forwards(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_pin_event(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_redact_event(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_retry_decryption(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_audio(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_file(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_image(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_location(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_poll_response(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_read_receipt(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_reply(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_video(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_voice_message(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_with_extra_content(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_subscribe_to_back_pagination_status(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_toggle_reaction(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_toggle_reaction_with_extra_content(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_unpin_event(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_content(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_event_id(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_sender_id(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_thread_root_event_id(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_timestamp(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_as_event(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_as_virtual(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_fmt_debug(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_unique_id(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelinelistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_typingnotificationslistener_call(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_unabletodecryptdelegate_on_utd(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_has_notifications(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_highlight_count(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_notification_count(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_has_verification_violation(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_is_verified(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_master_key(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_pin(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_was_previously_verified(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_withdraw_verification(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_verificationstatelistener_on_update(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetcapabilitiesprovider_acquire_capabilities(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetdriver_run(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetdriverhandle_recv(): number;

export function ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetdriverhandle_send(): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_checkcodesender(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_client(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_clientbuilder(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_contentscanner(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_continuationmessagesender(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_encryption(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_grantloginwithqrcodehandler(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_homeservercapabilities(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_homeserverlogindetails(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_identityresethandle(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_indexeddbstorebuilder(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_inreplytodetails(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_knockrequestactions(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_lazytimelineitemprovider(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_leavespacehandle(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_livelocationsobserver(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_loginwithqrcodehandler(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_mediafilehandle(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_mediasource(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_notificationclient(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_notificationsettings(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_passwordstrengthestimator(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_qrcodedata(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_room(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomdirectorysearch(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlist(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlistdynamicentriescontroller(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlistentrieswithdynamicadaptersresult(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlistservice(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roommembersiterator(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roommessageeventcontentwithoutrelation(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roompowerlevels(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_roompreview(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_secretsbundlewithuserid(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_sendattachmentjoinhandle(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_sendhandle(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_sessionverificationcontroller(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_sessionverificationemoji(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_spaceroomlist(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_spaceservice(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_span(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_ssohandler(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_syncservice(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_syncservicebuilder(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_taskhandle(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_threadlistservice(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_threadsummary(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_timeline(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_timelineevent(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_timelineitem(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_unreadnotificationscount(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_useridentity(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_widgetdriver(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_clone_widgetdriverhandle(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_clientbuilder_new(f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_contentscanner_new(scanner_url: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_indexeddbstorebuilder_new(name: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_mediasource_from_json(json: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_mediasource_from_url(url: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_passwordstrengthestimator_new(thresholds: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_passwordstrengthestimator_with_modern_defaults2025(f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_passwordstrengthestimator_with_zxcvbn_defaults(f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_qrcodedata_from_bytes(bytes: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_secretsbundlewithuserid_from_str(user_id: Uint8Array, bundle: Uint8Array, backup_info: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_span_current(f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_span_new(file: Uint8Array, line: Uint8Array, level: Uint8Array, target: Uint8Array, name: Uint8Array, bridge_trace_id: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_constructor_span_new_bridge_span(target: Uint8Array, parent_trace_id: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_checkcodesender(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_client(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_clientbuilder(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_contentscanner(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_continuationmessagesender(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_encryption(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_grantloginwithqrcodehandler(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_homeservercapabilities(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_homeserverlogindetails(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_identityresethandle(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_indexeddbstorebuilder(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_inreplytodetails(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_knockrequestactions(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_lazytimelineitemprovider(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_leavespacehandle(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_livelocationsobserver(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_loginwithqrcodehandler(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_mediafilehandle(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_mediasource(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_notificationclient(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_notificationsettings(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_passwordstrengthestimator(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_qrcodedata(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_room(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roomdirectorysearch(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlist(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlistdynamicentriescontroller(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlistentrieswithdynamicadaptersresult(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlistservice(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roommembersiterator(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roommessageeventcontentwithoutrelation(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roompowerlevels(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_roompreview(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_secretsbundlewithuserid(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_sendattachmentjoinhandle(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_sendhandle(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_sessionverificationcontroller(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_sessionverificationemoji(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_spaceroomlist(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_spaceservice(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_span(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_ssohandler(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_syncservice(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_syncservicebuilder(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_taskhandle(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_threadlistservice(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_threadsummary(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_timeline(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_timelineevent(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_timelineitem(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_unreadnotificationscount(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_useridentity(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_widgetdriver(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_free_widgetdriverhandle(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_content_without_relation_from_message(message: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_create_caption_edit(caption: Uint8Array, formatted_caption: Uint8Array, mentions: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_gen_transaction_id(f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_generate_webview_url(widget_settings: Uint8Array, room: bigint, props: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_get_element_call_required_permissions(own_user_id: Uint8Array, own_device_id: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_init_platform(config: Uint8Array, use_lightweight_tokio_runtime: number, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_is_room_alias_format_valid(alias: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_json_string_contains_secrets_bundle(bundle: Uint8Array, backup_info: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_log_event(file: Uint8Array, line: Uint8Array, level: Uint8Array, target: Uint8Array, message: Uint8Array, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_make_widget_driver(settings: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_matrix_to_room_alias_permalink(room_alias: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_matrix_to_user_permalink(user_id: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_html(body: Uint8Array, html_body: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_html_as_emote(body: Uint8Array, html_body: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_markdown(md: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_markdown_as_emote(md: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_new(msgtype: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_new_virtual_element_call_widget(props: Uint8Array, config: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_parse_matrix_entity_from(uri: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_reload_tracing_file_writer(configuration: Uint8Array, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_room_alias_name_from_room_display_name(room_name: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_sdk_git_sha(f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_server_name_from_user_id(user_id: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_suggested_power_level_for_role(role: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_func_suggested_role_for_power_level(power_level: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_accountdatalistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_backupstatelistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_backupsteadystatelistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_beaconinfolistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_calldeclinelistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_clientdelegate(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_clientsessiondelegate(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_dehydrateddeviceeventlistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_duplicatekeyuploaderrorlistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_enablerecoveryprogresslistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_generatedqrloginprogresslistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_grantgeneratedqrloginprogresslistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_grantqrloginprogresslistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_identitystatuschangelistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_ignoreduserslistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_knockrequestslistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_livelocationslistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_mediapreviewconfiglistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_notificationsettingsdelegate(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_paginationstatuslistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_profilelistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_progresswatcher(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_qrloginprogresslistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_recoverystatelistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomaccountdatalistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomdirectorysearchentrieslistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roominfolistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistentrieslistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistloadingstatelistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistservicestatelistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistservicesyncindicatorlistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sendqueuelistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sendqueueroomerrorlistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sendqueueroomupdatelistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sessionverificationcontrollerdelegate(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceroomlistentrieslistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceroomlistpaginationstatelistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceroomlistspacelistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceservicejoinedspaceslistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceservicespacefilterslistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_synclistenerv2(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_syncnotificationlistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_syncservicestateobserver(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_threadlistentrieslistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_threadlistpaginationstatelistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_timelinelistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_typingnotificationslistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_unabletodecryptdelegate(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_verificationstatelistener(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_widgetcapabilitiesprovider(vtable: any): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_checkcodesender_send(ptr: bigint, code: number): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_abort_oauth_auth(ptr: bigint, authorization_data: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_account_data(ptr: bigint, event_type: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_account_url(ptr: bigint, action: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_available_sliding_sync_versions(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_avatar_url(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_await_room_remote_echo(ptr: bigint, room_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_cached_avatar_url(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_can_deactivate_account(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_clear_caches(ptr: bigint, sync_service: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_clear_user_status(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_content_scanner(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_create_room(ptr: bigint, request: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_custom_login_with_jwt(ptr: bigint, jwt: Uint8Array, initial_device_name: Uint8Array, device_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_deactivate_account(ptr: bigint, auth_data: Uint8Array, erase_data: number): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_delete_pusher(ptr: bigint, identifiers: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_device_id(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_disable_well_known_lookup(ptr: bigint, disable: number, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_display_name(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_enable_all_send_queues(ptr: bigint, enable: number): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_enable_automatic_call_status(ptr: bigint, enabled: number, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_enable_send_queue_upload_progress(ptr: bigint, enable: number, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_encryption(ptr: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_fetch_media_preview_config(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_dm_room(ptr: bigint, user_id: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_dm_rooms(ptr: bigint, user_id: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_invite_avatars_display_policy(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_max_media_upload_size(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_content(ptr: bigint, media_source: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_file(ptr: bigint, media_source: bigint, filename: Uint8Array, mime_type: Uint8Array, use_cache: number, temp_dir: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_preview_display_policy(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_thumbnail(ptr: bigint, media_source: bigint, width: bigint, height: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_notification_settings(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_profile(ptr: bigint, user_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_recently_visited_rooms(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_room(ptr: bigint, room_id: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_room_preview_from_room_alias(ptr: bigint, room_alias: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_room_preview_from_room_id(ptr: bigint, room_id: Uint8Array, via_servers: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_session_verification_controller(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_store_sizes(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_url(ptr: bigint, url: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_url_preview(ptr: bigint, url: Uint8Array, ts: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_homeserver(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_homeserver_capabilities(ptr: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_homeserver_login_details(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_ignore_user(ptr: bigint, user_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_ignored_users(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_livekit_rtc_supported(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_login_with_qr_code_supported(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_profiles_sliding_sync_extension_supported(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_report_room_api_supported(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_room_alias_available(ptr: bigint, alias: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_user_status_supported(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_join_room_by_id(ptr: bigint, room_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_join_room_by_id_or_alias(ptr: bigint, room_id_or_alias: Uint8Array, server_names: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_knock(ptr: bigint, room_id_or_alias: Uint8Array, reason: Uint8Array, server_names: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_login(ptr: bigint, username: Uint8Array, password: Uint8Array, initial_device_name: Uint8Array, device_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_login_with_email(ptr: bigint, email: Uint8Array, password: Uint8Array, initial_device_name: Uint8Array, device_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_login_with_oauth_callback(ptr: bigint, callback_url: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_logout(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_mark_all_rooms_as_read(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_new_grant_login_with_qr_code_handler(ptr: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_new_login_with_qr_code_handler(ptr: bigint, oauth_configuration: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_notification_client(ptr: bigint, process_setup: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_notification_client_with_timeouts(ptr: bigint, process_setup: Uint8Array, timeouts: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_observe_account_data_event(ptr: bigint, event_type: Uint8Array, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_observe_room_account_data_event(ptr: bigint, room_id: Uint8Array, event_type: Uint8Array, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_optimize_stores(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_pause(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_register_notification_handler(ptr: bigint, listener: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_remove_avatar(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_request_openid_token(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_reset_supported_versions(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_reset_well_known(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_resolve_room_alias(ptr: bigint, room_alias: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_restore_session(ptr: bigint, session: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_restore_session_with(ptr: bigint, session: Uint8Array, room_load_settings: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_resume(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_room_alias_exists(ptr: bigint, room_alias: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_room_directory_search(ptr: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_rooms(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_search_users(ptr: bigint, search_term: Uint8Array, limit: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_server(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_server_vendor_info(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_session(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_account_data(ptr: bigint, event_type: Uint8Array, content: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_avatar_url(ptr: bigint, url: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_content_scanner(ptr: bigint, content_scanner: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_delegate(ptr: bigint, delegate: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_display_name(ptr: bigint, name: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_invite_avatars_display_policy(ptr: bigint, policy: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_media_preview_display_policy(ptr: bigint, policy: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_media_retention_policy(ptr: bigint, policy: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_presence(ptr: bigint, presence: Uint8Array, immediate: number): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_pusher(ptr: bigint, identifiers: Uint8Array, kind: Uint8Array, app_display_name: Uint8Array, device_display_name: Uint8Array, profile_tag: Uint8Array, lang: Uint8Array, append: number): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_user_status(ptr: bigint, status: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_utd_delegate(ptr: bigint, utd_delegate: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sliding_sync_version(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_space_service(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_start_sso_login(ptr: bigint, redirect_url: Uint8Array, idp_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_duplicate_key_upload_errors(ptr: bigint, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_ignored_users(ptr: bigint, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_media_preview_config(ptr: bigint, listener: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_own_beacon_info_updates(ptr: bigint, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_own_profile(ptr: bigint, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_room_info(ptr: bigint, room_id: Uint8Array, listener: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_send_queue_status(ptr: bigint, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_send_queue_updates(ptr: bigint, listener: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sync_once_v2(ptr: bigint, settings: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sync_service(ptr: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sync_v2(ptr: bigint, settings: Uint8Array, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_tile_server(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_total_unread_notifications(ptr: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_track_recently_visited_room(ptr: bigint, room: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_unignore_user(ptr: bigint, user_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_upload_avatar(ptr: bigint, mime_type: Uint8Array, data: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_upload_media(ptr: bigint, mime_type: Uint8Array, data: Uint8Array, progress_watcher: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_url_for_oauth(ptr: bigint, oauth_configuration: Uint8Array, prompt: Uint8Array, login_hint: Uint8Array, device_id: Uint8Array, additional_scopes: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_user_id(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_client_user_id_server_name(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_add_root_certificates(ptr: bigint, certificates: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_auto_enable_backups(ptr: bigint, auto_enable_backups: number, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_auto_enable_cross_signing(ptr: bigint, auto_enable_cross_signing: number, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_backup_download_strategy(ptr: bigint, backup_download_strategy: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_build(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_cross_process_lock_config(ptr: bigint, cross_process_lock_config: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_decryption_settings(ptr: bigint, decryption_settings: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_automatic_token_refresh(ptr: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_built_in_root_certificates(ptr: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_ssl_verification(ptr: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_well_known_lookup(ptr: bigint, disable_well_known_lookup: number, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_dm_room_definition(ptr: bigint, dm_room_definition: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_enable_automatic_back_pagination(ptr: bigint, enable_automatic_back_pagination: number, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_enable_share_history_on_invite(ptr: bigint, enable_share_history_on_invite: number, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_homeserver_url(ptr: bigint, url: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_in_memory_store(ptr: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_indexeddb_store(ptr: bigint, config: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_proxy(ptr: bigint, url: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_request_config(ptr: bigint, config: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_room_key_recipient_strategy(ptr: bigint, strategy: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_name(ptr: bigint, server_name: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_name_from_user_id(ptr: bigint, user_id: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_name_or_homeserver_url(ptr: bigint, server_name_or_url: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_set_session_delegate(ptr: bigint, session_delegate: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_sliding_sync_version_builder(ptr: bigint, version_builder: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_system_is_memory_constrained(ptr: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_threads_enabled(ptr: bigint, enabled: number, thread_subscriptions: number, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_user_agent(ptr: bigint, user_agent: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_contentscanner_scan(ptr: bigint, client: bigint, media_source: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_continuationmessagesender_cancel(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_continuationmessagesender_confirm(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_backup_exists_on_server(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_backup_state(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_backup_state_listener(ptr: bigint, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_create_dehydrated_device(ptr: bigint, display_name: Uint8Array, pickle_key: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_curve25519_key(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_dehydrated_device_event_listener(ptr: bigint, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_delete_dehydrated_device(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_disable_recovery(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_ed25519_key(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_enable_backups(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_enable_recovery(ptr: bigint, wait_for_backups_to_upload: number, passphrase: Uint8Array, progress_listener: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_has_devices_to_verify_against(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_import_secrets_bundle(ptr: bigint, secrets_bundle: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_is_dehydrated_device_supported(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_is_last_device(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recover(ptr: bigint, recovery_key: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recover_and_fix_backup(ptr: bigint, recovery_key: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recover_and_reset(ptr: bigint, old_recovery_key: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recovery_state(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recovery_state_listener(ptr: bigint, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_rehydrate_dehydrated_device(ptr: bigint, pickle_key: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_reset_identity(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_reset_recovery_key(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_start_dehydrated_devices(ptr: bigint, recovery_key: Uint8Array, settings: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_stop_dehydrated_devices(ptr: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_user_identity(ptr: bigint, user_id: Uint8Array, fallback_to_server: number): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_verification_state(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_verification_state_listener(ptr: bigint, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_wait_for_backup_upload_steady_state(ptr: bigint, progress_listener: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_wait_for_e2ee_initialization_tasks(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_ffitimelineeventtype_uniffi_trait_eq_eq(ptr: Uint8Array, other: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_ffitimelineeventtype_uniffi_trait_eq_ne(ptr: Uint8Array, other: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_ffitimelineeventtype_uniffi_trait_hash(ptr: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_grantloginwithqrcodehandler_generate(ptr: bigint, progress_listener: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_grantloginwithqrcodehandler_scan(ptr: bigint, qr_code_data: bigint, progress_listener: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_avatar(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_displayname(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_password(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_thirdparty_ids(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_get_login_token(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_extended_profile_fields(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_forgets_room_when_leaving(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_refresh(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_sliding_sync_version(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supported_oauth_prompts(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_oauth_login(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_password_login(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_sso_login(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_url(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_identityresethandle_auth_type(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_identityresethandle_cancel(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_identityresethandle_reset(ptr: bigint, auth: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_indexeddbstorebuilder_passphrase(ptr: bigint, passphrase: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_inreplytodetails_event(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_inreplytodetails_event_id(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_accept(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_decline(ptr: bigint, reason: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_decline_and_ban(ptr: bigint, reason: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_mark_as_seen(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_contains_only_emojis(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_debug_info(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_get_send_handle(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_get_shields(ptr: bigint, strict: number, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_latest_json(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_leavespacehandle_leave(ptr: bigint, room_ids: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_leavespacehandle_rooms(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_livelocationsobserver_subscribe(ptr: bigint, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_loginwithqrcodehandler_generate(ptr: bigint, progress_listener: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_loginwithqrcodehandler_scan(ptr: bigint, qr_code_data: bigint, progress_listener: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_mediafilehandle_path(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_mediafilehandle_persist(ptr: bigint, path: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_mediasource_to_json(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_mediasource_url(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_notification(ptr: bigint, room_id: Uint8Array, event_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_notifications(ptr: bigint, requests: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_room(ptr: bigint, room_id: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_timeouts(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_can_homeserver_push_encrypted_event_to_device(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_can_push_encrypted_event_to_device(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_contains_keywords_rules(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_default_room_notification_mode(ptr: bigint, is_encrypted: number, is_one_to_one: number): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_raw_push_rules(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_room_notification_settings(ptr: bigint, room_id: Uint8Array, is_encrypted: number, is_one_to_one: number): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_rooms_with_user_defined_rules(ptr: bigint, enabled: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_user_defined_room_notification_mode(ptr: bigint, room_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_call_enabled(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_invite_for_me_enabled(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_room_mention_enabled(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_user_mention_enabled(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_restore_default_room_notification_mode(ptr: bigint, room_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_call_enabled(ptr: bigint, enabled: number): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_custom_push_rule(ptr: bigint, rule_id: Uint8Array, rule_kind: Uint8Array, actions: Uint8Array, conditions: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_default_room_notification_mode(ptr: bigint, is_encrypted: number, is_one_to_one: number, mode: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_delegate(ptr: bigint, delegate: Uint8Array, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_invite_for_me_enabled(ptr: bigint, enabled: number): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_room_mention_enabled(ptr: bigint, enabled: number): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_room_notification_mode(ptr: bigint, room_id: Uint8Array, mode: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_user_mention_enabled(ptr: bigint, enabled: number): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_unmute_room(ptr: bigint, room_id: Uint8Array, is_encrypted: number, is_one_to_one: number): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_passwordstrengthestimator_estimate(ptr: bigint, password: Uint8Array, user_inputs: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_passwordstrengthestimator_thresholds(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_base_url(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_intent(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_server_name(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_to_bytes(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_active_human_member_ids(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_active_human_member_ids_no_sync(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_active_members_count(ptr: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_active_room_call_participants(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_alternative_aliases(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_apply_power_level_changes(ptr: bigint, changes: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_avatar_url(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_ban_user(ptr: bigint, user_id: Uint8Array, reason: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_canonical_alias(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_clear_composer_draft(ptr: bigint, thread_root: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_decline_call(ptr: bigint, rtc_notification_event_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_discard_room_key(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_display_name(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_edit(ptr: bigint, event_id: Uint8Array, new_content: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_enable_encryption(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_enable_send_queue(ptr: bigint, enable: number, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_encryption_state(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_fetch_thread_subscription(ptr: bigint, thread_root_event_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_forget(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_get_power_levels(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_get_room_visibility(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_has_active_room_call(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_heroes(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_id(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_ignore_device_trust_and_resend(ptr: bigint, devices: Uint8Array, send_handle: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_ignore_user(ptr: bigint, user_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_invite_user_by_id(ptr: bigint, user_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_invited_members_count(ptr: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_inviter(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_direct(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_encrypted(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_public(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_send_queue_enabled(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_space(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_join(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_joined_members_count(ptr: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_kick_user(ptr: bigint, user_id: Uint8Array, reason: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_latest_encryption_state(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_latest_event(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_leave(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_live_locations_observer(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_load_composer_draft(ptr: bigint, thread_root: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_load_or_fetch_event(ptr: bigint, event_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_load_or_fetch_event_with_relations(ptr: bigint, event_id: Uint8Array, relation_filter: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_load_user_receipt(ptr: bigint, receipt_type: Uint8Array, thread: Uint8Array, user_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_mark_as_fully_read_unchecked(ptr: bigint, event_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_mark_as_read(ptr: bigint, receipt_type: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_matrix_to_event_permalink(ptr: bigint, event_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_matrix_to_permalink(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member(ptr: bigint, user_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member_avatar_url(ptr: bigint, user_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member_display_name(ptr: bigint, user_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member_with_sender_info(ptr: bigint, user_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_members(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_members_no_sync(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_membership(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_own_user_id(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_predecessor_room(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_preview_room(ptr: bigint, via: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_publish_room_alias_in_room_directory(ptr: bigint, alias: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_raw_name(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_redact(ptr: bigint, event_id: Uint8Array, reason: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_remove_avatar(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_remove_room_alias_from_room_directory(ptr: bigint, alias: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_report_content(ptr: bigint, event_id: Uint8Array, reason: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_report_room(ptr: bigint, reason: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_reset_power_levels(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_room_events_debug_string(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_room_info(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_save_composer_draft(ptr: bigint, draft: Uint8Array, thread_root: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_live_location(ptr: bigint, geo_uri: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_raw(ptr: bigint, event_type: Uint8Array, content: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_single_receipt(ptr: bigint, receipt_type: Uint8Array, thread: Uint8Array, event_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_state_event_raw(ptr: bigint, event_type: Uint8Array, state_key: Uint8Array, content: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_is_favourite(ptr: bigint, is_favourite: number, tag_order: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_is_low_priority(ptr: bigint, is_low_priority: number, tag_order: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_name(ptr: bigint, name: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_own_member_display_name(ptr: bigint, display_name: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_thread_subscription(ptr: bigint, thread_root_event_id: Uint8Array, subscribed: number): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_topic(ptr: bigint, topic: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_unread_flag(ptr: bigint, new_value: number): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_start_live_location_share(ptr: bigint, duration_millis: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_stop_live_location_share(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_call_decline_events(ptr: bigint, rtc_notification_event_id: Uint8Array, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_identity_status_changes(ptr: bigint, listener: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_knock_requests(ptr: bigint, listener: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_room_info_updates(ptr: bigint, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_send_queue_updates(ptr: bigint, listener: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_typing_notifications(ptr: bigint, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_successor_room(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_suggested_role_for_user(ptr: bigint, user_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_thread_list_service(ptr: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_timeline(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_timeline_with_configuration(ptr: bigint, configuration: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_topic(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_typing_notice(ptr: bigint, is_typing: number): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_unban_user(ptr: bigint, user_id: Uint8Array, reason: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_canonical_alias(ptr: bigint, alias: Uint8Array, alt_aliases: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_history_visibility(ptr: bigint, visibility: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_join_rules(ptr: bigint, new_rule: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_power_levels_for_users(ptr: bigint, updates: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_room_visibility(ptr: bigint, visibility: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_upload_avatar(ptr: bigint, mime_type: Uint8Array, data: Uint8Array, media_info: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_room_withdraw_verification_and_resend(ptr: bigint, user_ids: Uint8Array, send_handle: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_is_at_last_page(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_loaded_pages(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_next_page(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_results(ptr: bigint, listener: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_search(ptr: bigint, filter: Uint8Array, batch_size: number, via_server_name: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlist_entries_with_dynamic_adapters(ptr: bigint, page_size: number, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlist_loading_state(ptr: bigint, listener: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlist_room(ptr: bigint, room_id: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_add_one_page(ptr: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_reset_to_one_page(ptr: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_set_filter(ptr: bigint, kind: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistentrieswithdynamicadaptersresult_controller(ptr: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistentrieswithdynamicadaptersresult_entries_stream(ptr: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_all_rooms(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_remove_room_subscriptions(ptr: bigint, room_ids: Uint8Array, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_reset_and_add_room_subscriptions(ptr: bigint, room_ids: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_room(ptr: bigint, room_id: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_set_room_subscriptions(ptr: bigint, room_ids: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_state(ptr: bigint, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_sync_indicator(ptr: bigint, delay_before_showing_in_ms: number, delay_before_hiding_in_ms: number, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roommembersiterator_len(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roommembersiterator_next_chunk(ptr: bigint, chunk_size: number, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roommessageeventcontentwithoutrelation_with_mentions(ptr: bigint, mentions: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_ban(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_invite(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_kick(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_pin_unpin(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_redact_other(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_redact_own(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_send_message(ptr: bigint, message: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_send_state(ptr: bigint, state_event: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_trigger_room_notification(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_ban(ptr: bigint, user_id: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_invite(ptr: bigint, user_id: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_kick(ptr: bigint, user_id: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_pin_unpin(ptr: bigint, user_id: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_redact_other(ptr: bigint, user_id: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_redact_own(ptr: bigint, user_id: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_send_message(ptr: bigint, user_id: Uint8Array, message: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_send_state(ptr: bigint, user_id: Uint8Array, state_event: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_trigger_room_notification(ptr: bigint, user_id: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_events(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_user_power_levels(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_values(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_forget(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_info(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_inviter(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_leave(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_own_membership_details(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_secretsbundlewithuserid_contains_backup_key(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sendattachmentjoinhandle_cancel(ptr: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sendattachmentjoinhandle_join(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sendhandle_abort(ptr: bigint, reason: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sendhandle_try_resend(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_accept_verification_request(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_acknowledge_verification_request(ptr: bigint, sender_id: Uint8Array, flow_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_approve_verification(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_cancel_verification(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_decline_verification(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_request_device_verification(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_request_user_verification(ptr: bigint, user_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_set_delegate(ptr: bigint, delegate: Uint8Array, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_start_sas_verification(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationemoji_description(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationemoji_symbol(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_paginate(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_pagination_state(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_reset(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_rooms(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_space(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_subscribe_to_pagination_state_updates(ptr: bigint, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_subscribe_to_room_update(ptr: bigint, listener: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_subscribe_to_space_updates(ptr: bigint, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_add_child_to_space(ptr: bigint, child_id: Uint8Array, space_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_editable_spaces(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_get_space_room(ptr: bigint, room_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_joined_parent_ids_of_child(ptr: bigint, child_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_joined_parents_of_child(ptr: bigint, child_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_leave_space(ptr: bigint, space_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_remove_child_from_space(ptr: bigint, child_id: Uint8Array, space_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_space_filters(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_space_room_list(ptr: bigint, space_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_subscribe_to_space_filters(ptr: bigint, listener: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_subscribe_to_top_level_joined_spaces(ptr: bigint, listener: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_top_level_ancestors_of(ptr: bigint, child_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_top_level_joined_spaces(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_span_enter(ptr: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_span_exit(ptr: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_span_is_none(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_ssohandler_finish(ptr: bigint, callback_url: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_ssohandler_url(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_expire_sessions(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_room_list_service(ptr: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_start(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_state(ptr: bigint, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_stop(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_finish(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_offline_mode(ptr: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_parent_span(ptr: bigint, span: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_room_list_connection_id(ptr: bigint, connection_id: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_room_list_timeline_limit(ptr: bigint, limit: number, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_share_pos(ptr: bigint, enable: number, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_tagname_uniffi_trait_eq_eq(ptr: Uint8Array, other: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_tagname_uniffi_trait_eq_ne(ptr: Uint8Array, other: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_tagname_uniffi_trait_hash(ptr: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_taskhandle_cancel(ptr: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_taskhandle_is_finished(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_items(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_paginate(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_pagination_state(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_reset(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_subscribe_to_items_updates(ptr: bigint, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_subscribe_to_pagination_state_updates(ptr: bigint, listener: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadsummary_latest_event(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_threadsummary_num_replies(ptr: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_add_listener(ptr: bigint, listener: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_create_message_content(ptr: bigint, msg_type: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_create_poll(ptr: bigint, question: Uint8Array, answers: Uint8Array, max_selections: number, poll_kind: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_edit(ptr: bigint, event_or_transaction_id: Uint8Array, new_content: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_edit_revisions(ptr: bigint, event_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_end_poll(ptr: bigint, poll_start_event_id: Uint8Array, text: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_fetch_details_for_event(ptr: bigint, event_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_fetch_members(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_get_event_timeline_item_by_event_id(ptr: bigint, event_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_latest_event_id(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_load_reply_details(ptr: bigint, event_id_str: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_mark_as_read(ptr: bigint, receipt_type: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_paginate_backwards(ptr: bigint, num_events: number): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_paginate_forwards(ptr: bigint, num_events: number): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_pin_event(ptr: bigint, event_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_redact_event(ptr: bigint, event_or_transaction_id: Uint8Array, reason: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_retry_decryption(ptr: bigint, session_ids: Uint8Array, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send(ptr: bigint, msg: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_audio(ptr: bigint, params: Uint8Array, audio_info: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_file(ptr: bigint, params: Uint8Array, file_info: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_image(ptr: bigint, params: Uint8Array, thumbnail_source: Uint8Array, image_info: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_location(ptr: bigint, body: Uint8Array, geo_uri: Uint8Array, description: Uint8Array, zoom_level: Uint8Array, asset_type: Uint8Array, replied_to_event_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_poll_response(ptr: bigint, poll_start_event_id: Uint8Array, answers: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_read_receipt(ptr: bigint, receipt_type: Uint8Array, event_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_reply(ptr: bigint, msg: bigint, event_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_video(ptr: bigint, params: Uint8Array, thumbnail_source: Uint8Array, video_info: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_voice_message(ptr: bigint, params: Uint8Array, audio_info: Uint8Array, waveform: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_with_extra_content(ptr: bigint, msg: bigint, extra_content_json: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_subscribe_to_back_pagination_status(ptr: bigint, listener: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_toggle_reaction(ptr: bigint, item_id: Uint8Array, key: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_toggle_reaction_with_extra_content(ptr: bigint, item_id: Uint8Array, key: Uint8Array, extra_content_json: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_unpin_event(ptr: bigint, event_id: Uint8Array): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_content(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_event_id(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_sender_id(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_thread_root_event_id(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_timestamp(ptr: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_as_event(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_as_virtual(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_fmt_debug(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_unique_id(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_has_notifications(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_highlight_count(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_notification_count(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_has_verification_violation(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_is_verified(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_master_key(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_pin(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_was_previously_verified(ptr: bigint, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_withdraw_verification(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_widgetdriver_run(ptr: bigint, room: bigint, capabilities_provider: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_widgetdriverhandle_recv(ptr: bigint): bigint;

export function ubrn_uniffi_matrix_sdk_ffi_fn_method_widgetdriverhandle_send(ptr: bigint, msg: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_matrix_sdk_fn_clone_oauthauthorizationdata(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_matrix_sdk_fn_free_oauthauthorizationdata(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_matrix_sdk_fn_method_oauthauthorizationdata_login_url(ptr: bigint, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_ruma_events_checksum_func_ephemeral_room_event_type_from_string(): number;

export function ubrn_uniffi_ruma_events_checksum_func_global_account_data_event_type_from_string(): number;

export function ubrn_uniffi_ruma_events_checksum_func_message_like_event_type_from_string(): number;

export function ubrn_uniffi_ruma_events_checksum_func_room_account_data_event_type_from_string(): number;

export function ubrn_uniffi_ruma_events_checksum_func_state_event_type_from_string(): number;

export function ubrn_uniffi_ruma_events_checksum_func_timeline_event_type_from_string(): number;

export function ubrn_uniffi_ruma_events_checksum_func_to_device_event_type_from_string(): number;

export function ubrn_uniffi_ruma_events_fn_clone_privatestring(handle: bigint, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_ruma_events_fn_free_privatestring(handle: bigint, f_status_: RustCallStatus): void;

export function ubrn_uniffi_ruma_events_fn_func_ephemeral_room_event_type_from_string(s: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_ruma_events_fn_func_global_account_data_event_type_from_string(s: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_ruma_events_fn_func_message_like_event_type_from_string(s: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_ruma_events_fn_func_room_account_data_event_type_from_string(s: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_ruma_events_fn_func_state_event_type_from_string(s: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_ruma_events_fn_func_timeline_event_type_from_string(s: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_ruma_events_fn_func_to_device_event_type_from_string(s: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_ruma_events_fn_method_ephemeralroomeventtype_uniffi_trait_display(ptr: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_ruma_events_fn_method_ephemeralroomeventtype_uniffi_trait_eq_eq(ptr: Uint8Array, other: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_ruma_events_fn_method_ephemeralroomeventtype_uniffi_trait_eq_ne(ptr: Uint8Array, other: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_ruma_events_fn_method_ephemeralroomeventtype_uniffi_trait_hash(ptr: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_ruma_events_fn_method_globalaccountdataeventtype_uniffi_trait_display(ptr: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_ruma_events_fn_method_globalaccountdataeventtype_uniffi_trait_eq_eq(ptr: Uint8Array, other: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_ruma_events_fn_method_globalaccountdataeventtype_uniffi_trait_eq_ne(ptr: Uint8Array, other: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_ruma_events_fn_method_globalaccountdataeventtype_uniffi_trait_hash(ptr: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_ruma_events_fn_method_messagelikeeventtype_uniffi_trait_display(ptr: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_ruma_events_fn_method_messagelikeeventtype_uniffi_trait_eq_eq(ptr: Uint8Array, other: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_ruma_events_fn_method_messagelikeeventtype_uniffi_trait_eq_ne(ptr: Uint8Array, other: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_ruma_events_fn_method_messagelikeeventtype_uniffi_trait_hash(ptr: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_ruma_events_fn_method_roomaccountdataeventtype_uniffi_trait_display(ptr: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_ruma_events_fn_method_roomaccountdataeventtype_uniffi_trait_eq_eq(ptr: Uint8Array, other: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_ruma_events_fn_method_roomaccountdataeventtype_uniffi_trait_eq_ne(ptr: Uint8Array, other: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_ruma_events_fn_method_roomaccountdataeventtype_uniffi_trait_hash(ptr: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_ruma_events_fn_method_stateeventtype_uniffi_trait_display(ptr: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_ruma_events_fn_method_stateeventtype_uniffi_trait_eq_eq(ptr: Uint8Array, other: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_ruma_events_fn_method_stateeventtype_uniffi_trait_eq_ne(ptr: Uint8Array, other: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_ruma_events_fn_method_stateeventtype_uniffi_trait_hash(ptr: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_ruma_events_fn_method_timelineeventtype_uniffi_trait_display(ptr: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_ruma_events_fn_method_timelineeventtype_uniffi_trait_eq_eq(ptr: Uint8Array, other: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_ruma_events_fn_method_timelineeventtype_uniffi_trait_eq_ne(ptr: Uint8Array, other: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_ruma_events_fn_method_timelineeventtype_uniffi_trait_hash(ptr: Uint8Array, f_status_: RustCallStatus): bigint;

export function ubrn_uniffi_ruma_events_fn_method_todeviceeventtype_uniffi_trait_display(ptr: Uint8Array, f_status_: RustCallStatus): Uint8Array;

export function ubrn_uniffi_ruma_events_fn_method_todeviceeventtype_uniffi_trait_eq_eq(ptr: Uint8Array, other: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_ruma_events_fn_method_todeviceeventtype_uniffi_trait_eq_ne(ptr: Uint8Array, other: Uint8Array, f_status_: RustCallStatus): number;

export function ubrn_uniffi_ruma_events_fn_method_todeviceeventtype_uniffi_trait_hash(ptr: Uint8Array, f_status_: RustCallStatus): bigint;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_f32: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_cancel_f32: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_f64: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_cancel_f64: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i16: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_cancel_i16: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i32: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_cancel_i32: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i64: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_cancel_i64: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_i8: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_cancel_i8: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_rust_buffer: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_cancel_rust_buffer: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u16: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_cancel_u16: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u32: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_cancel_u32: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u64: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_cancel_u64: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_u8: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_cancel_u8: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_cancel_void: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_cancel_void: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_complete_f32: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_ffi_rust_future_complete_f32: (a: bigint, b: number) => number;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_complete_f64: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_ffi_rust_future_complete_f64: (a: bigint, b: number) => number;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i16: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_ffi_rust_future_complete_i16: (a: bigint, b: number) => number;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i32: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_ffi_rust_future_complete_i32: (a: bigint, b: number) => number;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i64: (a: bigint, b: number) => bigint;
    readonly ffi_matrix_sdk_ffi_rust_future_complete_i64: (a: bigint, b: number) => bigint;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_complete_i8: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_ffi_rust_future_complete_i8: (a: bigint, b: number) => number;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_complete_rust_buffer: (a: bigint, b: number) => [number, number];
    readonly ffi_matrix_sdk_ffi_rust_future_complete_rust_buffer: (a: number, b: bigint, c: number) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u16: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_ffi_rust_future_complete_u16: (a: bigint, b: number) => number;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u32: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_ffi_rust_future_complete_u32: (a: bigint, b: number) => number;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u64: (a: bigint, b: number) => bigint;
    readonly ffi_matrix_sdk_ffi_rust_future_complete_u64: (a: bigint, b: number) => bigint;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_complete_u8: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_ffi_rust_future_complete_u8: (a: bigint, b: number) => number;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_complete_void: (a: bigint, b: number) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_complete_void: (a: bigint, b: number) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_free_f32: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_free_f32: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_free_f64: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_free_f64: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_free_i16: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_free_i16: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_free_i32: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_free_i32: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_free_i64: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_free_i64: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_free_i8: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_free_i8: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_free_rust_buffer: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_free_rust_buffer: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_free_u16: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_free_u16: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_free_u32: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_free_u32: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_free_u64: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_free_u64: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_free_u8: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_free_u8: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_free_void: (a: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_free_void: (a: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_poll_f32: (a: bigint, b: any, c: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_poll_f32: (a: bigint, b: number, c: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_poll_f64: (a: bigint, b: any, c: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_poll_f64: (a: bigint, b: number, c: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i16: (a: bigint, b: any, c: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_poll_i16: (a: bigint, b: number, c: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i32: (a: bigint, b: any, c: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_poll_i32: (a: bigint, b: number, c: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i64: (a: bigint, b: any, c: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_poll_i64: (a: bigint, b: number, c: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_poll_i8: (a: bigint, b: any, c: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_poll_i8: (a: bigint, b: number, c: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_poll_rust_buffer: (a: bigint, b: any, c: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_poll_rust_buffer: (a: bigint, b: number, c: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u16: (a: bigint, b: any, c: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_poll_u16: (a: bigint, b: number, c: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u32: (a: bigint, b: any, c: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_poll_u32: (a: bigint, b: number, c: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u64: (a: bigint, b: any, c: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_poll_u64: (a: bigint, b: number, c: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_poll_u8: (a: bigint, b: any, c: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_poll_u8: (a: bigint, b: number, c: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_rust_future_poll_void: (a: bigint, b: any, c: bigint) => void;
    readonly ffi_matrix_sdk_ffi_rust_future_poll_void: (a: bigint, b: number, c: bigint) => void;
    readonly ubrn_ffi_matrix_sdk_ffi_uniffi_contract_version: () => number;
    readonly ffi_matrix_sdk_ffi_uniffi_contract_version: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_clientbuilder_new: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_constructor_clientbuilder_new: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_contentscanner_new: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_constructor_contentscanner_new: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_indexeddbstorebuilder_new: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_constructor_indexeddbstorebuilder_new: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_mediasource_from_json: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_constructor_mediasource_from_json: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_mediasource_from_url: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_constructor_mediasource_from_url: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_passwordstrengthestimator_new: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_constructor_passwordstrengthestimator_new: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_passwordstrengthestimator_with_modern_defaults2025: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_constructor_passwordstrengthestimator_with_modern_defaults2025: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_passwordstrengthestimator_with_zxcvbn_defaults: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_constructor_passwordstrengthestimator_with_zxcvbn_defaults: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_qrcodedata_from_bytes: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_constructor_qrcodedata_from_bytes: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_secretsbundlewithuserid_from_str: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_constructor_secretsbundlewithuserid_from_str: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_span_current: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_constructor_span_current: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_span_new: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_constructor_span_new: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_constructor_span_new_bridge_span: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_constructor_span_new_bridge_span: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_content_without_relation_from_message: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_content_without_relation_from_message: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_create_caption_edit: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_create_caption_edit: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_gen_transaction_id: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_gen_transaction_id: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_generate_webview_url: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_generate_webview_url: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_get_element_call_required_permissions: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_get_element_call_required_permissions: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_init_platform: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_init_platform: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_is_room_alias_format_valid: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_is_room_alias_format_valid: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_json_string_contains_secrets_bundle: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_json_string_contains_secrets_bundle: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_log_event: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_log_event: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_make_widget_driver: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_make_widget_driver: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_matrix_to_room_alias_permalink: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_matrix_to_room_alias_permalink: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_matrix_to_user_permalink: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_matrix_to_user_permalink: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_html: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_html: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_html_as_emote: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_html_as_emote: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_markdown: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_markdown: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_markdown_as_emote: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_message_event_content_from_markdown_as_emote: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_message_event_content_new: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_message_event_content_new: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_new_virtual_element_call_widget: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_new_virtual_element_call_widget: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_parse_matrix_entity_from: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_parse_matrix_entity_from: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_reload_tracing_file_writer: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_reload_tracing_file_writer: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_room_alias_name_from_room_display_name: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_room_alias_name_from_room_display_name: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_sdk_git_sha: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_sdk_git_sha: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_server_name_from_user_id: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_server_name_from_user_id: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_suggested_power_level_for_role: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_suggested_power_level_for_role: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_func_suggested_role_for_power_level: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_func_suggested_role_for_power_level: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_accountdatalistener_on_change: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_accountdatalistener_on_change: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_backupstatelistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_backupstatelistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_backupsteadystatelistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_backupsteadystatelistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_beaconinfolistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_beaconinfolistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_calldeclinelistener_call: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_calldeclinelistener_call: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_checkcodesender_send: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_checkcodesender_send: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_abort_oauth_auth: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_abort_oauth_auth: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_account_data: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_account_data: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_account_url: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_account_url: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_available_sliding_sync_versions: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_available_sliding_sync_versions: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_avatar_url: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_avatar_url: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_await_room_remote_echo: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_await_room_remote_echo: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_cached_avatar_url: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_cached_avatar_url: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_can_deactivate_account: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_can_deactivate_account: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_clear_caches: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_clear_caches: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_clear_user_status: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_clear_user_status: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_content_scanner: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_content_scanner: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_create_room: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_create_room: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_custom_login_with_jwt: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_custom_login_with_jwt: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_deactivate_account: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_deactivate_account: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_delete_pusher: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_delete_pusher: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_device_id: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_device_id: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_disable_well_known_lookup: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_disable_well_known_lookup: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_display_name: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_display_name: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_enable_all_send_queues: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_enable_all_send_queues: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_enable_automatic_call_status: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_enable_automatic_call_status: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_enable_send_queue_upload_progress: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_enable_send_queue_upload_progress: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_encryption: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_encryption: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_fetch_media_preview_config: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_fetch_media_preview_config: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_dm_room: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_get_dm_room: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_dm_rooms: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_get_dm_rooms: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_invite_avatars_display_policy: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_get_invite_avatars_display_policy: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_max_media_upload_size: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_get_max_media_upload_size: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_content: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_get_media_content: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_file: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_get_media_file: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_preview_display_policy: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_get_media_preview_display_policy: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_media_thumbnail: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_get_media_thumbnail: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_notification_settings: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_get_notification_settings: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_profile: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_get_profile: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_recently_visited_rooms: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_get_recently_visited_rooms: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_room: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_get_room: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_room_preview_from_room_alias: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_get_room_preview_from_room_alias: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_room_preview_from_room_id: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_get_room_preview_from_room_id: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_session_verification_controller: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_get_session_verification_controller: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_store_sizes: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_get_store_sizes: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_url: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_get_url: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_get_url_preview: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_get_url_preview: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_homeserver: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_homeserver: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_homeserver_capabilities: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_homeserver_capabilities: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_homeserver_login_details: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_homeserver_login_details: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_ignore_user: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_ignore_user: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_ignored_users: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_ignored_users: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_livekit_rtc_supported: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_is_livekit_rtc_supported: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_login_with_qr_code_supported: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_is_login_with_qr_code_supported: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_profiles_sliding_sync_extension_supported: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_is_profiles_sliding_sync_extension_supported: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_report_room_api_supported: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_is_report_room_api_supported: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_room_alias_available: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_is_room_alias_available: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_is_user_status_supported: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_is_user_status_supported: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_join_room_by_id: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_join_room_by_id: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_join_room_by_id_or_alias: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_join_room_by_id_or_alias: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_knock: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_knock: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_login: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_login: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_login_with_email: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_login_with_email: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_login_with_oauth_callback: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_login_with_oauth_callback: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_logout: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_logout: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_mark_all_rooms_as_read: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_mark_all_rooms_as_read: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_new_grant_login_with_qr_code_handler: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_new_grant_login_with_qr_code_handler: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_new_login_with_qr_code_handler: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_new_login_with_qr_code_handler: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_notification_client: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_notification_client: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_notification_client_with_timeouts: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_notification_client_with_timeouts: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_observe_account_data_event: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_observe_account_data_event: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_observe_room_account_data_event: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_observe_room_account_data_event: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_optimize_stores: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_optimize_stores: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_pause: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_pause: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_register_notification_handler: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_register_notification_handler: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_remove_avatar: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_remove_avatar: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_request_openid_token: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_request_openid_token: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_reset_supported_versions: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_reset_supported_versions: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_reset_well_known: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_reset_well_known: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_resolve_room_alias: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_resolve_room_alias: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_restore_session: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_restore_session: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_restore_session_with: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_restore_session_with: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_resume: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_resume: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_room_alias_exists: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_room_alias_exists: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_room_directory_search: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_room_directory_search: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_rooms: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_rooms: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_search_users: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_search_users: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_server: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_server: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_server_vendor_info: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_server_vendor_info: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_session: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_session: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_account_data: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_set_account_data: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_avatar_url: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_set_avatar_url: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_content_scanner: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_set_content_scanner: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_delegate: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_set_delegate: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_display_name: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_set_display_name: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_invite_avatars_display_policy: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_set_invite_avatars_display_policy: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_media_preview_display_policy: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_set_media_preview_display_policy: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_media_retention_policy: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_set_media_retention_policy: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_presence: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_set_presence: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_pusher: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_set_pusher: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_user_status: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_set_user_status: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_set_utd_delegate: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_set_utd_delegate: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sliding_sync_version: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_sliding_sync_version: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_space_service: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_space_service: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_start_sso_login: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_start_sso_login: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_duplicate_key_upload_errors: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_duplicate_key_upload_errors: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_ignored_users: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_ignored_users: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_media_preview_config: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_media_preview_config: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_own_beacon_info_updates: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_own_beacon_info_updates: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_own_profile: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_own_profile: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_room_info: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_room_info: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_send_queue_status: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_send_queue_status: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_send_queue_updates: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_subscribe_to_send_queue_updates: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sync_once_v2: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_sync_once_v2: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sync_service: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_sync_service: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_sync_v2: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_sync_v2: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_tile_server: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_tile_server: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_total_unread_notifications: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_total_unread_notifications: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_track_recently_visited_room: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_track_recently_visited_room: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_unignore_user: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_unignore_user: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_upload_avatar: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_upload_avatar: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_upload_media: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_upload_media: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_url_for_oauth: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_url_for_oauth: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_user_id: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_user_id: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_client_user_id_server_name: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_client_user_id_server_name: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_add_root_certificates: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_add_root_certificates: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_auto_enable_backups: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_auto_enable_backups: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_auto_enable_cross_signing: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_auto_enable_cross_signing: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_backup_download_strategy: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_backup_download_strategy: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_build: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_build: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_cross_process_lock_config: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_cross_process_lock_config: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_decryption_settings: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_decryption_settings: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_automatic_token_refresh: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_automatic_token_refresh: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_built_in_root_certificates: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_built_in_root_certificates: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_ssl_verification: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_ssl_verification: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_well_known_lookup: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_disable_well_known_lookup: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_dm_room_definition: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_dm_room_definition: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_enable_automatic_back_pagination: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_enable_automatic_back_pagination: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_enable_share_history_on_invite: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_enable_share_history_on_invite: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_homeserver_url: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_homeserver_url: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_in_memory_store: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_in_memory_store: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_indexeddb_store: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_indexeddb_store: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_proxy: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_proxy: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_request_config: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_request_config: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_room_key_recipient_strategy: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_room_key_recipient_strategy: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_name: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_name: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_name_from_user_id: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_name_from_user_id: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_name_or_homeserver_url: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_server_name_or_homeserver_url: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_set_session_delegate: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_set_session_delegate: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_sliding_sync_version_builder: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_sliding_sync_version_builder: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_system_is_memory_constrained: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_system_is_memory_constrained: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_threads_enabled: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_threads_enabled: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_user_agent: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientbuilder_user_agent: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientdelegate_did_receive_auth_error: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientdelegate_did_receive_auth_error: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientdelegate_on_background_task_error_report: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientdelegate_on_background_task_error_report: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientsessiondelegate_retrieve_session_from_keychain: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientsessiondelegate_retrieve_session_from_keychain: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_clientsessiondelegate_save_session_in_keychain: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_clientsessiondelegate_save_session_in_keychain: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_contentscanner_scan: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_contentscanner_scan: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_continuationmessagesender_cancel: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_continuationmessagesender_cancel: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_continuationmessagesender_confirm: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_continuationmessagesender_confirm: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_dehydrateddeviceeventlistener_on_event: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_dehydrateddeviceeventlistener_on_event: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_duplicatekeyuploaderrorlistener_on_duplicate_key_upload_error: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_duplicatekeyuploaderrorlistener_on_duplicate_key_upload_error: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_enablerecoveryprogresslistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_enablerecoveryprogresslistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_exists_on_server: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_exists_on_server: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_state: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_state: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_state_listener: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_backup_state_listener: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_create_dehydrated_device: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_create_dehydrated_device: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_curve25519_key: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_curve25519_key: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_dehydrated_device_event_listener: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_dehydrated_device_event_listener: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_delete_dehydrated_device: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_delete_dehydrated_device: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_disable_recovery: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_disable_recovery: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_ed25519_key: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_ed25519_key: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_enable_backups: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_enable_backups: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_enable_recovery: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_enable_recovery: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_has_devices_to_verify_against: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_has_devices_to_verify_against: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_import_secrets_bundle: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_import_secrets_bundle: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_is_dehydrated_device_supported: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_is_dehydrated_device_supported: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_is_last_device: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_is_last_device: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recover: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_recover: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recover_and_fix_backup: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_recover_and_fix_backup: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recover_and_reset: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_recover_and_reset: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recovery_state: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_recovery_state: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_recovery_state_listener: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_recovery_state_listener: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_rehydrate_dehydrated_device: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_rehydrate_dehydrated_device: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_reset_identity: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_reset_identity: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_reset_recovery_key: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_reset_recovery_key: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_start_dehydrated_devices: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_start_dehydrated_devices: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_stop_dehydrated_devices: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_stop_dehydrated_devices: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_user_identity: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_user_identity: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_verification_state: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_verification_state: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_verification_state_listener: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_verification_state_listener: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_wait_for_backup_upload_steady_state: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_wait_for_backup_upload_steady_state: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_encryption_wait_for_e2ee_initialization_tasks: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_encryption_wait_for_e2ee_initialization_tasks: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_generatedqrloginprogresslistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_generatedqrloginprogresslistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantgeneratedqrloginprogresslistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_grantgeneratedqrloginprogresslistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantloginwithqrcodehandler_generate: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_grantloginwithqrcodehandler_generate: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantloginwithqrcodehandler_scan: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_grantloginwithqrcodehandler_scan: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_grantqrloginprogresslistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_grantqrloginprogresslistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_avatar: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_avatar: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_displayname: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_displayname: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_password: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_password: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_thirdparty_ids: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_change_thirdparty_ids: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_get_login_token: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_can_get_login_token: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_extended_profile_fields: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_extended_profile_fields: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_forgets_room_when_leaving: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_forgets_room_when_leaving: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_refresh: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_homeservercapabilities_refresh: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_sliding_sync_version: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_sliding_sync_version: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supported_oauth_prompts: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supported_oauth_prompts: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_oauth_login: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_oauth_login: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_password_login: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_password_login: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_sso_login: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_supports_sso_login: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_url: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_homeserverlogindetails_url: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_identityresethandle_auth_type: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_identityresethandle_auth_type: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_identityresethandle_cancel: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_identityresethandle_cancel: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_identityresethandle_reset: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_identityresethandle_reset: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_identitystatuschangelistener_call: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_identitystatuschangelistener_call: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_ignoreduserslistener_call: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_ignoreduserslistener_call: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_indexeddbstorebuilder_passphrase: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_indexeddbstorebuilder_passphrase: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_inreplytodetails_event: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_inreplytodetails_event: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_inreplytodetails_event_id: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_inreplytodetails_event_id: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_accept: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_accept: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_decline: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_decline: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_decline_and_ban: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_decline_and_ban: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_mark_as_seen: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_knockrequestactions_mark_as_seen: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_knockrequestslistener_call: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_knockrequestslistener_call: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_contains_only_emojis: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_contains_only_emojis: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_debug_info: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_debug_info: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_get_send_handle: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_get_send_handle: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_get_shields: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_get_shields: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_latest_json: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_lazytimelineitemprovider_latest_json: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_leavespacehandle_leave: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_leavespacehandle_leave: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_leavespacehandle_rooms: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_leavespacehandle_rooms: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_livelocationslistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_livelocationslistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_livelocationsobserver_subscribe: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_livelocationsobserver_subscribe: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_loginwithqrcodehandler_generate: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_loginwithqrcodehandler_generate: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_loginwithqrcodehandler_scan: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_loginwithqrcodehandler_scan: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediafilehandle_path: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_mediafilehandle_path: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediafilehandle_persist: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_mediafilehandle_persist: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediapreviewconfiglistener_on_change: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_mediapreviewconfiglistener_on_change: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediasource_to_json: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_mediasource_to_json: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_mediasource_url: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_mediasource_url: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_notification: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_notification: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_notifications: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_notifications: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_room: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationclient_get_room: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationclient_timeouts: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationclient_timeouts: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_can_homeserver_push_encrypted_event_to_device: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_can_homeserver_push_encrypted_event_to_device: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_can_push_encrypted_event_to_device: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_can_push_encrypted_event_to_device: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_contains_keywords_rules: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_contains_keywords_rules: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_default_room_notification_mode: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_default_room_notification_mode: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_raw_push_rules: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_raw_push_rules: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_room_notification_settings: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_room_notification_settings: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_rooms_with_user_defined_rules: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_rooms_with_user_defined_rules: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_user_defined_room_notification_mode: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_get_user_defined_room_notification_mode: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_call_enabled: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_call_enabled: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_invite_for_me_enabled: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_invite_for_me_enabled: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_room_mention_enabled: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_room_mention_enabled: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_user_mention_enabled: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_is_user_mention_enabled: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_restore_default_room_notification_mode: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_restore_default_room_notification_mode: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_call_enabled: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_call_enabled: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_custom_push_rule: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_custom_push_rule: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_default_room_notification_mode: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_default_room_notification_mode: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_delegate: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_delegate: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_invite_for_me_enabled: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_invite_for_me_enabled: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_room_mention_enabled: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_room_mention_enabled: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_room_notification_mode: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_room_notification_mode: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_user_mention_enabled: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_set_user_mention_enabled: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_unmute_room: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettings_unmute_room: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_notificationsettingsdelegate_settings_did_change: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_notificationsettingsdelegate_settings_did_change: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_paginationstatuslistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_paginationstatuslistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_passwordstrengthestimator_estimate: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_passwordstrengthestimator_estimate: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_passwordstrengthestimator_thresholds: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_passwordstrengthestimator_thresholds: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_profilelistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_profilelistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_progresswatcher_transmission_progress: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_progresswatcher_transmission_progress: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_base_url: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_base_url: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_intent: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_intent: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_server_name: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_server_name: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_to_bytes: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_qrcodedata_to_bytes: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_qrloginprogresslistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_qrloginprogresslistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_recoverystatelistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_recoverystatelistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_active_human_member_ids: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_active_human_member_ids: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_active_human_member_ids_no_sync: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_active_human_member_ids_no_sync: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_active_members_count: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_active_members_count: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_active_room_call_participants: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_active_room_call_participants: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_alternative_aliases: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_alternative_aliases: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_apply_power_level_changes: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_apply_power_level_changes: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_avatar_url: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_avatar_url: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_ban_user: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_ban_user: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_canonical_alias: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_canonical_alias: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_clear_composer_draft: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_clear_composer_draft: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_decline_call: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_decline_call: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_discard_room_key: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_discard_room_key: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_display_name: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_display_name: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_edit: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_edit: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_enable_encryption: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_enable_encryption: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_enable_send_queue: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_enable_send_queue: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_encryption_state: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_encryption_state: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_fetch_thread_subscription: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_fetch_thread_subscription: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_forget: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_forget: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_get_power_levels: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_get_power_levels: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_get_room_visibility: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_get_room_visibility: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_has_active_room_call: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_has_active_room_call: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_heroes: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_heroes: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_id: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_id: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_ignore_device_trust_and_resend: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_ignore_device_trust_and_resend: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_ignore_user: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_ignore_user: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_invite_user_by_id: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_invite_user_by_id: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_invited_members_count: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_invited_members_count: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_inviter: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_inviter: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_direct: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_is_direct: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_encrypted: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_is_encrypted: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_public: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_is_public: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_send_queue_enabled: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_is_send_queue_enabled: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_is_space: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_is_space: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_join: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_join: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_joined_members_count: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_joined_members_count: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_kick_user: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_kick_user: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_latest_encryption_state: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_latest_encryption_state: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_latest_event: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_latest_event: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_leave: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_leave: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_live_locations_observer: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_live_locations_observer: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_load_composer_draft: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_load_composer_draft: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_load_or_fetch_event: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_load_or_fetch_event: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_load_or_fetch_event_with_relations: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_load_or_fetch_event_with_relations: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_load_user_receipt: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_load_user_receipt: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_mark_as_fully_read_unchecked: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_mark_as_fully_read_unchecked: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_mark_as_read: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_mark_as_read: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_matrix_to_event_permalink: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_matrix_to_event_permalink: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_matrix_to_permalink: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_matrix_to_permalink: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_member: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member_avatar_url: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_member_avatar_url: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member_display_name: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_member_display_name: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_member_with_sender_info: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_member_with_sender_info: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_members: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_members: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_members_no_sync: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_members_no_sync: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_membership: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_membership: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_own_user_id: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_own_user_id: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_predecessor_room: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_predecessor_room: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_preview_room: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_preview_room: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_publish_room_alias_in_room_directory: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_publish_room_alias_in_room_directory: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_raw_name: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_raw_name: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_redact: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_redact: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_remove_avatar: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_remove_avatar: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_remove_room_alias_from_room_directory: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_remove_room_alias_from_room_directory: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_report_content: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_report_content: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_report_room: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_report_room: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_reset_power_levels: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_reset_power_levels: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_room_events_debug_string: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_room_events_debug_string: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_room_info: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_room_info: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_save_composer_draft: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_save_composer_draft: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_live_location: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_send_live_location: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_raw: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_send_raw: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_single_receipt: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_send_single_receipt: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_send_state_event_raw: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_send_state_event_raw: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_is_favourite: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_set_is_favourite: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_is_low_priority: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_set_is_low_priority: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_name: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_set_name: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_own_member_display_name: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_set_own_member_display_name: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_thread_subscription: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_set_thread_subscription: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_topic: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_set_topic: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_set_unread_flag: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_set_unread_flag: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_start_live_location_share: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_start_live_location_share: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_stop_live_location_share: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_stop_live_location_share: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_call_decline_events: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_call_decline_events: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_identity_status_changes: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_identity_status_changes: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_knock_requests: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_knock_requests: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_room_info_updates: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_room_info_updates: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_send_queue_updates: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_send_queue_updates: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_typing_notifications: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_subscribe_to_typing_notifications: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_successor_room: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_successor_room: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_suggested_role_for_user: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_suggested_role_for_user: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_thread_list_service: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_thread_list_service: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_timeline: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_timeline: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_timeline_with_configuration: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_timeline_with_configuration: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_topic: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_topic: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_typing_notice: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_typing_notice: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_unban_user: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_unban_user: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_canonical_alias: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_update_canonical_alias: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_history_visibility: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_update_history_visibility: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_join_rules: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_update_join_rules: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_power_levels_for_users: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_update_power_levels_for_users: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_update_room_visibility: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_update_room_visibility: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_upload_avatar: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_upload_avatar: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_room_withdraw_verification_and_resend: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_room_withdraw_verification_and_resend: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomaccountdatalistener_on_change: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomaccountdatalistener_on_change: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_is_at_last_page: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_is_at_last_page: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_loaded_pages: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_loaded_pages: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_next_page: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_next_page: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_results: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_results: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_search: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearch_search: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearchentrieslistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomdirectorysearchentrieslistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roominfolistener_call: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roominfolistener_call: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlist_entries_with_dynamic_adapters: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomlist_entries_with_dynamic_adapters: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlist_loading_state: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomlist_loading_state: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlist_room: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomlist_room: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_add_one_page: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_add_one_page: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_reset_to_one_page: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_reset_to_one_page: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_set_filter: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomlistdynamicentriescontroller_set_filter: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieslistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieslistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieswithdynamicadaptersresult_controller: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieswithdynamicadaptersresult_controller: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieswithdynamicadaptersresult_entries_stream: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomlistentrieswithdynamicadaptersresult_entries_stream: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistloadingstatelistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomlistloadingstatelistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_all_rooms: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_all_rooms: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_remove_room_subscriptions: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_remove_room_subscriptions: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_reset_and_add_room_subscriptions: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_reset_and_add_room_subscriptions: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_room: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_room: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_set_room_subscriptions: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_set_room_subscriptions: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_state: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_state: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_sync_indicator: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomlistservice_sync_indicator: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservicestatelistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomlistservicestatelistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roomlistservicesyncindicatorlistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roomlistservicesyncindicatorlistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roommembersiterator_len: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roommembersiterator_len: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roommembersiterator_next_chunk: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roommembersiterator_next_chunk: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roommessageeventcontentwithoutrelation_with_mentions: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roommessageeventcontentwithoutrelation_with_mentions: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_ban: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_ban: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_invite: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_invite: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_kick: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_kick: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_pin_unpin: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_pin_unpin: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_redact_other: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_redact_other: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_redact_own: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_redact_own: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_send_message: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_send_message: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_send_state: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_send_state: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_trigger_room_notification: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_own_user_trigger_room_notification: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_ban: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_ban: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_invite: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_invite: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_kick: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_kick: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_pin_unpin: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_pin_unpin: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_redact_other: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_redact_other: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_redact_own: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_redact_own: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_send_message: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_send_message: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_send_state: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_send_state: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_trigger_room_notification: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_can_user_trigger_room_notification: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_events: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_events: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_user_power_levels: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_user_power_levels: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_values: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompowerlevels_values: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_forget: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompreview_forget: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_info: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompreview_info: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_inviter: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompreview_inviter: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_leave: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompreview_leave: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_roompreview_own_membership_details: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_roompreview_own_membership_details: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_secretsbundlewithuserid_contains_backup_key: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_secretsbundlewithuserid_contains_backup_key: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendattachmentjoinhandle_cancel: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sendattachmentjoinhandle_cancel: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendattachmentjoinhandle_join: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sendattachmentjoinhandle_join: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendhandle_abort: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sendhandle_abort: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendhandle_try_resend: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sendhandle_try_resend: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendqueuelistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sendqueuelistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendqueueroomerrorlistener_on_error: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sendqueueroomerrorlistener_on_error: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sendqueueroomupdatelistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sendqueueroomupdatelistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_accept_verification_request: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_accept_verification_request: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_acknowledge_verification_request: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_acknowledge_verification_request: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_approve_verification: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_approve_verification: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_cancel_verification: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_cancel_verification: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_decline_verification: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_decline_verification: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_request_device_verification: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_request_device_verification: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_request_user_verification: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_request_user_verification: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_set_delegate: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_set_delegate: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_start_sas_verification: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontroller_start_sas_verification: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_accept_verification_request: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_accept_verification_request: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_cancel: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_cancel: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_fail: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_fail: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_finish: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_finish: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_receive_verification_data: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_receive_verification_data: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_receive_verification_request: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_receive_verification_request: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_start_sas_verification: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sessionverificationcontrollerdelegate_did_start_sas_verification: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationemoji_description: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sessionverificationemoji_description: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_sessionverificationemoji_symbol: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_sessionverificationemoji_symbol: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_paginate: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_paginate: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_pagination_state: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_pagination_state: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_reset: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_reset: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_rooms: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_rooms: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_space: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_space: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_subscribe_to_pagination_state_updates: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_subscribe_to_pagination_state_updates: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_subscribe_to_room_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_subscribe_to_room_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_subscribe_to_space_updates: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceroomlist_subscribe_to_space_updates: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlistentrieslistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceroomlistentrieslistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlistpaginationstatelistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceroomlistpaginationstatelistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceroomlistspacelistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceroomlistspacelistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_add_child_to_space: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceservice_add_child_to_space: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_editable_spaces: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceservice_editable_spaces: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_get_space_room: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceservice_get_space_room: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_joined_parent_ids_of_child: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceservice_joined_parent_ids_of_child: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_joined_parents_of_child: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceservice_joined_parents_of_child: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_leave_space: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceservice_leave_space: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_remove_child_from_space: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceservice_remove_child_from_space: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_space_filters: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceservice_space_filters: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_space_room_list: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceservice_space_room_list: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_subscribe_to_space_filters: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceservice_subscribe_to_space_filters: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_subscribe_to_top_level_joined_spaces: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceservice_subscribe_to_top_level_joined_spaces: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_top_level_ancestors_of: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceservice_top_level_ancestors_of: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservice_top_level_joined_spaces: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceservice_top_level_joined_spaces: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservicejoinedspaceslistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceservicejoinedspaceslistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_spaceservicespacefilterslistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_spaceservicespacefilterslistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_span_enter: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_span_enter: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_span_exit: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_span_exit: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_span_is_none: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_span_is_none: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_ssohandler_finish: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_ssohandler_finish: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_ssohandler_url: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_ssohandler_url: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_synclistenerv2_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_synclistenerv2_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncnotificationlistener_on_notification: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_syncnotificationlistener_on_notification: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_expire_sessions: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_syncservice_expire_sessions: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_room_list_service: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_syncservice_room_list_service: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_start: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_syncservice_start: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_state: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_syncservice_state: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservice_stop: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_syncservice_stop: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_finish: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_finish: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_offline_mode: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_offline_mode: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_parent_span: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_parent_span: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_room_list_connection_id: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_room_list_connection_id: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_room_list_timeline_limit: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_room_list_timeline_limit: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_share_pos: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_syncservicebuilder_with_share_pos: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_syncservicestateobserver_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_syncservicestateobserver_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_taskhandle_cancel: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_taskhandle_cancel: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_taskhandle_is_finished: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_taskhandle_is_finished: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistentrieslistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_threadlistentrieslistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistpaginationstatelistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_threadlistpaginationstatelistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_items: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_items: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_paginate: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_paginate: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_pagination_state: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_pagination_state: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_reset: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_reset: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_subscribe_to_items_updates: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_subscribe_to_items_updates: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_subscribe_to_pagination_state_updates: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_threadlistservice_subscribe_to_pagination_state_updates: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadsummary_latest_event: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_threadsummary_latest_event: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_threadsummary_num_replies: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_threadsummary_num_replies: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_add_listener: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_add_listener: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_create_message_content: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_create_message_content: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_create_poll: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_create_poll: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_edit: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_edit: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_edit_revisions: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_edit_revisions: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_end_poll: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_end_poll: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_fetch_details_for_event: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_fetch_details_for_event: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_fetch_members: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_fetch_members: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_get_event_timeline_item_by_event_id: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_get_event_timeline_item_by_event_id: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_latest_event_id: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_latest_event_id: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_load_reply_details: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_load_reply_details: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_mark_as_read: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_mark_as_read: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_paginate_backwards: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_paginate_backwards: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_paginate_forwards: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_paginate_forwards: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_pin_event: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_pin_event: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_redact_event: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_redact_event: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_retry_decryption: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_retry_decryption: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_send: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_audio: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_send_audio: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_file: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_send_file: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_image: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_send_image: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_location: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_send_location: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_poll_response: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_send_poll_response: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_read_receipt: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_send_read_receipt: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_reply: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_send_reply: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_video: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_send_video: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_voice_message: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_send_voice_message: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_send_with_extra_content: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_send_with_extra_content: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_subscribe_to_back_pagination_status: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_subscribe_to_back_pagination_status: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_toggle_reaction: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_toggle_reaction: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_toggle_reaction_with_extra_content: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_toggle_reaction_with_extra_content: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timeline_unpin_event: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timeline_unpin_event: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_content: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timelineevent_content: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_event_id: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timelineevent_event_id: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_sender_id: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timelineevent_sender_id: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_thread_root_event_id: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timelineevent_thread_root_event_id: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineevent_timestamp: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timelineevent_timestamp: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_as_event: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timelineitem_as_event: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_as_virtual: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timelineitem_as_virtual: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_fmt_debug: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timelineitem_fmt_debug: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelineitem_unique_id: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timelineitem_unique_id: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_timelinelistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_timelinelistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_typingnotificationslistener_call: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_typingnotificationslistener_call: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_unabletodecryptdelegate_on_utd: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_unabletodecryptdelegate_on_utd: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_has_notifications: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_has_notifications: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_highlight_count: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_highlight_count: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_notification_count: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_unreadnotificationscount_notification_count: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_has_verification_violation: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_useridentity_has_verification_violation: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_is_verified: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_useridentity_is_verified: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_master_key: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_useridentity_master_key: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_pin: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_useridentity_pin: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_was_previously_verified: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_useridentity_was_previously_verified: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_useridentity_withdraw_verification: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_useridentity_withdraw_verification: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_verificationstatelistener_on_update: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_verificationstatelistener_on_update: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetcapabilitiesprovider_acquire_capabilities: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_widgetcapabilitiesprovider_acquire_capabilities: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetdriver_run: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_widgetdriver_run: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetdriverhandle_recv: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_widgetdriverhandle_recv: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_checksum_method_widgetdriverhandle_send: () => number;
    readonly uniffi_matrix_sdk_ffi_checksum_method_widgetdriverhandle_send: () => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_checkcodesender: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_checkcodesender: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_client: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_client: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_clientbuilder: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_clientbuilder: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_contentscanner: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_contentscanner: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_continuationmessagesender: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_continuationmessagesender: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_encryption: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_encryption: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_grantloginwithqrcodehandler: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_grantloginwithqrcodehandler: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_homeservercapabilities: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_homeservercapabilities: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_homeserverlogindetails: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_homeserverlogindetails: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_identityresethandle: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_identityresethandle: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_indexeddbstorebuilder: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_indexeddbstorebuilder: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_inreplytodetails: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_inreplytodetails: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_knockrequestactions: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_knockrequestactions: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_lazytimelineitemprovider: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_lazytimelineitemprovider: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_leavespacehandle: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_leavespacehandle: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_livelocationsobserver: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_livelocationsobserver: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_loginwithqrcodehandler: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_loginwithqrcodehandler: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_mediafilehandle: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_mediafilehandle: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_mediasource: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_mediasource: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_notificationclient: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_notificationclient: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_notificationsettings: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_notificationsettings: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_passwordstrengthestimator: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_passwordstrengthestimator: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_qrcodedata: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_qrcodedata: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_room: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_room: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomdirectorysearch: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_roomdirectorysearch: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlist: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_roomlist: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlistdynamicentriescontroller: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_roomlistdynamicentriescontroller: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlistentrieswithdynamicadaptersresult: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_roomlistentrieswithdynamicadaptersresult: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_roomlistservice: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_roomlistservice: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_roommembersiterator: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_roommembersiterator: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_roommessageeventcontentwithoutrelation: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_roommessageeventcontentwithoutrelation: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_roompowerlevels: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_roompowerlevels: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_roompreview: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_roompreview: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_secretsbundlewithuserid: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_secretsbundlewithuserid: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_sendattachmentjoinhandle: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_sendattachmentjoinhandle: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_sendhandle: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_sendhandle: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_sessionverificationcontroller: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_sessionverificationcontroller: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_sessionverificationemoji: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_sessionverificationemoji: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_spaceroomlist: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_spaceroomlist: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_spaceservice: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_spaceservice: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_span: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_span: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_ssohandler: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_ssohandler: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_syncservice: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_syncservice: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_syncservicebuilder: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_syncservicebuilder: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_taskhandle: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_taskhandle: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_threadlistservice: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_threadlistservice: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_threadsummary: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_threadsummary: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_timeline: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_timeline: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_timelineevent: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_timelineevent: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_timelineitem: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_timelineitem: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_unreadnotificationscount: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_unreadnotificationscount: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_useridentity: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_useridentity: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_widgetdriver: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_widgetdriver: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_clone_widgetdriverhandle: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_clone_widgetdriverhandle: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_constructor_clientbuilder_new: (a: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_constructor_clientbuilder_new: (a: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_constructor_contentscanner_new: (a: number, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_constructor_contentscanner_new: (a: number, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_constructor_indexeddbstorebuilder_new: (a: number, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_constructor_indexeddbstorebuilder_new: (a: number, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_constructor_mediasource_from_json: (a: number, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_constructor_mediasource_from_json: (a: number, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_constructor_mediasource_from_url: (a: number, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_constructor_mediasource_from_url: (a: number, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_constructor_passwordstrengthestimator_new: (a: number, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_constructor_passwordstrengthestimator_new: (a: number, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_constructor_passwordstrengthestimator_with_modern_defaults2025: (a: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_constructor_passwordstrengthestimator_with_modern_defaults2025: (a: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_constructor_passwordstrengthestimator_with_zxcvbn_defaults: (a: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_constructor_passwordstrengthestimator_with_zxcvbn_defaults: (a: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_constructor_qrcodedata_from_bytes: (a: number, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_constructor_qrcodedata_from_bytes: (a: number, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_constructor_secretsbundlewithuserid_from_str: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_constructor_secretsbundlewithuserid_from_str: (a: number, b: number, c: number, d: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_constructor_span_current: (a: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_constructor_span_current: (a: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_constructor_span_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_constructor_span_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_constructor_span_new_bridge_span: (a: number, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_constructor_span_new_bridge_span: (a: number, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_checkcodesender: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_checkcodesender: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_client: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_client: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_clientbuilder: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_clientbuilder: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_contentscanner: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_contentscanner: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_continuationmessagesender: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_continuationmessagesender: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_encryption: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_encryption: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_grantloginwithqrcodehandler: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_grantloginwithqrcodehandler: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_homeservercapabilities: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_homeservercapabilities: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_homeserverlogindetails: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_homeserverlogindetails: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_identityresethandle: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_identityresethandle: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_indexeddbstorebuilder: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_indexeddbstorebuilder: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_inreplytodetails: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_inreplytodetails: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_knockrequestactions: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_knockrequestactions: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_lazytimelineitemprovider: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_lazytimelineitemprovider: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_leavespacehandle: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_leavespacehandle: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_livelocationsobserver: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_livelocationsobserver: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_loginwithqrcodehandler: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_loginwithqrcodehandler: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_mediafilehandle: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_mediafilehandle: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_mediasource: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_mediasource: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_notificationclient: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_notificationclient: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_notificationsettings: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_notificationsettings: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_passwordstrengthestimator: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_passwordstrengthestimator: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_qrcodedata: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_qrcodedata: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_room: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_room: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_roomdirectorysearch: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_roomdirectorysearch: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlist: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_roomlist: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlistdynamicentriescontroller: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_roomlistdynamicentriescontroller: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlistentrieswithdynamicadaptersresult: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_roomlistentrieswithdynamicadaptersresult: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_roomlistservice: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_roomlistservice: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_roommembersiterator: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_roommembersiterator: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_roommessageeventcontentwithoutrelation: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_roommessageeventcontentwithoutrelation: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_roompowerlevels: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_roompowerlevels: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_roompreview: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_roompreview: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_secretsbundlewithuserid: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_secretsbundlewithuserid: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_sendattachmentjoinhandle: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_sendattachmentjoinhandle: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_sendhandle: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_sendhandle: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_sessionverificationcontroller: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_sessionverificationcontroller: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_sessionverificationemoji: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_sessionverificationemoji: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_spaceroomlist: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_spaceroomlist: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_spaceservice: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_spaceservice: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_span: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_span: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_ssohandler: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_ssohandler: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_syncservice: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_syncservice: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_syncservicebuilder: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_syncservicebuilder: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_taskhandle: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_taskhandle: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_threadlistservice: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_threadlistservice: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_threadsummary: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_threadsummary: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_timeline: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_timeline: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_timelineevent: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_timelineevent: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_timelineitem: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_timelineitem: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_unreadnotificationscount: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_unreadnotificationscount: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_useridentity: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_useridentity: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_widgetdriver: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_widgetdriver: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_free_widgetdriverhandle: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_free_widgetdriverhandle: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_content_without_relation_from_message: (a: number, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_func_content_without_relation_from_message: (a: number, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_create_caption_edit: (a: number, b: number, c: number, d: number, e: number, f: number, g: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_func_create_caption_edit: (a: number, b: number, c: number, d: number, e: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_gen_transaction_id: (a: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_func_gen_transaction_id: (a: number, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_generate_webview_url: (a: number, b: number, c: bigint, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_func_generate_webview_url: (a: number, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_get_element_call_required_permissions: (a: number, b: number, c: number, d: number, e: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_func_get_element_call_required_permissions: (a: number, b: number, c: number, d: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_init_platform: (a: number, b: number, c: number, d: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_func_init_platform: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_is_room_alias_format_valid: (a: number, b: number, c: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_func_is_room_alias_format_valid: (a: number, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_json_string_contains_secrets_bundle: (a: number, b: number, c: number, d: number, e: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_func_json_string_contains_secrets_bundle: (a: number, b: number, c: number, d: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_log_event: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_func_log_event: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_make_widget_driver: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_func_make_widget_driver: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_matrix_to_room_alias_permalink: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_func_matrix_to_room_alias_permalink: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_matrix_to_user_permalink: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_func_matrix_to_user_permalink: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_html: (a: number, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_html: (a: number, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_html_as_emote: (a: number, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_html_as_emote: (a: number, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_markdown: (a: number, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_markdown: (a: number, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_markdown_as_emote: (a: number, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_func_message_event_content_from_markdown_as_emote: (a: number, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_message_event_content_new: (a: number, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_func_message_event_content_new: (a: number, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_new_virtual_element_call_widget: (a: number, b: number, c: number, d: number, e: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_func_new_virtual_element_call_widget: (a: number, b: number, c: number, d: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_parse_matrix_entity_from: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_func_parse_matrix_entity_from: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_reload_tracing_file_writer: (a: number, b: number, c: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_func_reload_tracing_file_writer: (a: number, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_room_alias_name_from_room_display_name: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_func_room_alias_name_from_room_display_name: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_sdk_git_sha: (a: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_func_sdk_git_sha: (a: number, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_server_name_from_user_id: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_func_server_name_from_user_id: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_suggested_power_level_for_role: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_func_suggested_power_level_for_role: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_func_suggested_role_for_power_level: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_func_suggested_role_for_power_level: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_accountdatalistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_accountdatalistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_backupstatelistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_backupstatelistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_backupsteadystatelistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_backupsteadystatelistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_beaconinfolistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_beaconinfolistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_calldeclinelistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_calldeclinelistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_clientdelegate: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_clientdelegate: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_clientsessiondelegate: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_clientsessiondelegate: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_dehydrateddeviceeventlistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_dehydrateddeviceeventlistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_duplicatekeyuploaderrorlistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_duplicatekeyuploaderrorlistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_enablerecoveryprogresslistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_enablerecoveryprogresslistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_generatedqrloginprogresslistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_generatedqrloginprogresslistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_grantgeneratedqrloginprogresslistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_grantgeneratedqrloginprogresslistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_grantqrloginprogresslistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_grantqrloginprogresslistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_identitystatuschangelistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_identitystatuschangelistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_ignoreduserslistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_ignoreduserslistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_knockrequestslistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_knockrequestslistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_livelocationslistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_livelocationslistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_mediapreviewconfiglistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_mediapreviewconfiglistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_notificationsettingsdelegate: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_notificationsettingsdelegate: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_paginationstatuslistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_paginationstatuslistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_profilelistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_profilelistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_progresswatcher: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_progresswatcher: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_qrloginprogresslistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_qrloginprogresslistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_recoverystatelistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_recoverystatelistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomaccountdatalistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomaccountdatalistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomdirectorysearchentrieslistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomdirectorysearchentrieslistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roominfolistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roominfolistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistentrieslistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistentrieslistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistloadingstatelistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistloadingstatelistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistservicestatelistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistservicestatelistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistservicesyncindicatorlistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_roomlistservicesyncindicatorlistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sendqueuelistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sendqueuelistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sendqueueroomerrorlistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sendqueueroomerrorlistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sendqueueroomupdatelistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sendqueueroomupdatelistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sessionverificationcontrollerdelegate: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_sessionverificationcontrollerdelegate: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceroomlistentrieslistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceroomlistentrieslistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceroomlistpaginationstatelistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceroomlistpaginationstatelistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceroomlistspacelistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceroomlistspacelistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceservicejoinedspaceslistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceservicejoinedspaceslistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceservicespacefilterslistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_spaceservicespacefilterslistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_synclistenerv2: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_synclistenerv2: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_syncnotificationlistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_syncnotificationlistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_syncservicestateobserver: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_syncservicestateobserver: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_threadlistentrieslistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_threadlistentrieslistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_threadlistpaginationstatelistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_threadlistpaginationstatelistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_timelinelistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_timelinelistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_typingnotificationslistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_typingnotificationslistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_unabletodecryptdelegate: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_unabletodecryptdelegate: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_verificationstatelistener: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_verificationstatelistener: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_init_callback_vtable_widgetcapabilitiesprovider: (a: any) => void;
    readonly uniffi_matrix_sdk_ffi_fn_init_callback_vtable_widgetcapabilitiesprovider: (a: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_checkcodesender_send: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_checkcodesender_send: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_abort_oauth_auth: (a: bigint, b: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_abort_oauth_auth: (a: bigint, b: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_account_data: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_account_data: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_account_url: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_account_url: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_available_sliding_sync_versions: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_available_sliding_sync_versions: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_avatar_url: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_avatar_url: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_await_room_remote_echo: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_await_room_remote_echo: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_cached_avatar_url: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_cached_avatar_url: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_can_deactivate_account: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_can_deactivate_account: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_clear_caches: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_clear_caches: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_clear_user_status: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_clear_user_status: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_content_scanner: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_content_scanner: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_create_room: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_create_room: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_custom_login_with_jwt: (a: bigint, b: number, c: number, d: number, e: number, f: number, g: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_custom_login_with_jwt: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_deactivate_account: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_deactivate_account: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_delete_pusher: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_delete_pusher: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_device_id: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_client_device_id: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_disable_well_known_lookup: (a: bigint, b: number, c: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_disable_well_known_lookup: (a: bigint, b: number, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_display_name: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_display_name: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_enable_all_send_queues: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_enable_all_send_queues: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_enable_automatic_call_status: (a: bigint, b: number, c: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_enable_automatic_call_status: (a: bigint, b: number, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_enable_send_queue_upload_progress: (a: bigint, b: number, c: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_enable_send_queue_upload_progress: (a: bigint, b: number, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_encryption: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_encryption: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_fetch_media_preview_config: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_fetch_media_preview_config: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_dm_room: (a: bigint, b: number, c: number, d: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_client_get_dm_room: (a: number, b: bigint, c: number, d: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_dm_rooms: (a: bigint, b: number, c: number, d: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_client_get_dm_rooms: (a: number, b: bigint, c: number, d: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_invite_avatars_display_policy: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_get_invite_avatars_display_policy: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_max_media_upload_size: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_get_max_media_upload_size: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_content: (a: bigint, b: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_get_media_content: (a: bigint, b: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_file: (a: bigint, b: bigint, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_get_media_file: (a: bigint, b: bigint, c: number, d: number, e: number, f: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_preview_display_policy: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_get_media_preview_display_policy: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_media_thumbnail: (a: bigint, b: bigint, c: bigint, d: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_get_media_thumbnail: (a: bigint, b: bigint, c: bigint, d: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_notification_settings: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_get_notification_settings: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_profile: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_get_profile: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_recently_visited_rooms: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_get_recently_visited_rooms: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_room: (a: bigint, b: number, c: number, d: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_client_get_room: (a: number, b: bigint, c: number, d: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_room_preview_from_room_alias: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_get_room_preview_from_room_alias: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_room_preview_from_room_id: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_get_room_preview_from_room_id: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_session_verification_controller: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_get_session_verification_controller: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_store_sizes: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_get_store_sizes: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_url: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_get_url: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_get_url_preview: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_get_url_preview: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_homeserver: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_client_homeserver: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_homeserver_capabilities: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_homeserver_capabilities: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_homeserver_login_details: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_homeserver_login_details: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_ignore_user: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_ignore_user: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_ignored_users: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_ignored_users: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_livekit_rtc_supported: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_is_livekit_rtc_supported: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_login_with_qr_code_supported: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_is_login_with_qr_code_supported: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_profiles_sliding_sync_extension_supported: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_is_profiles_sliding_sync_extension_supported: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_report_room_api_supported: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_is_report_room_api_supported: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_room_alias_available: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_is_room_alias_available: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_is_user_status_supported: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_is_user_status_supported: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_join_room_by_id: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_join_room_by_id: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_join_room_by_id_or_alias: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_join_room_by_id_or_alias: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_knock: (a: bigint, b: number, c: number, d: number, e: number, f: number, g: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_knock: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_login: (a: bigint, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_login: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_login_with_email: (a: bigint, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_login_with_email: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_login_with_oauth_callback: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_login_with_oauth_callback: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_logout: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_logout: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_mark_all_rooms_as_read: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_mark_all_rooms_as_read: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_new_grant_login_with_qr_code_handler: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_new_grant_login_with_qr_code_handler: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_new_login_with_qr_code_handler: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_new_login_with_qr_code_handler: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_notification_client: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_notification_client: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_notification_client_with_timeouts: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_notification_client_with_timeouts: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_observe_account_data_event: (a: bigint, b: number, c: number, d: bigint, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_observe_account_data_event: (a: bigint, b: number, c: bigint, d: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_observe_room_account_data_event: (a: bigint, b: number, c: number, d: number, e: number, f: bigint, g: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_observe_room_account_data_event: (a: bigint, b: number, c: number, d: bigint, e: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_optimize_stores: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_optimize_stores: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_pause: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_pause: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_register_notification_handler: (a: bigint, b: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_register_notification_handler: (a: bigint, b: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_remove_avatar: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_remove_avatar: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_request_openid_token: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_request_openid_token: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_reset_supported_versions: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_reset_supported_versions: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_reset_well_known: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_reset_well_known: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_resolve_room_alias: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_resolve_room_alias: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_restore_session: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_restore_session: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_restore_session_with: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_restore_session_with: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_resume: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_resume: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_room_alias_exists: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_room_alias_exists: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_room_directory_search: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_room_directory_search: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_rooms: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_client_rooms: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_search_users: (a: bigint, b: number, c: number, d: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_search_users: (a: bigint, b: number, c: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_server: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_client_server: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_server_vendor_info: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_server_vendor_info: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_session: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_client_session: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_account_data: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_set_account_data: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_avatar_url: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_set_avatar_url: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_content_scanner: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_set_content_scanner: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_delegate: (a: bigint, b: number, c: number, d: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_client_set_delegate: (a: number, b: bigint, c: number, d: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_display_name: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_set_display_name: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_invite_avatars_display_policy: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_set_invite_avatars_display_policy: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_media_preview_display_policy: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_set_media_preview_display_policy: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_media_retention_policy: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_set_media_retention_policy: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_presence: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_set_presence: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_pusher: (a: bigint, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_set_pusher: (a: bigint, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_user_status: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_set_user_status: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_set_utd_delegate: (a: bigint, b: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_set_utd_delegate: (a: bigint, b: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sliding_sync_version: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_client_sliding_sync_version: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_space_service: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_space_service: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_start_sso_login: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_start_sso_login: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_duplicate_key_upload_errors: (a: bigint, b: bigint, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_duplicate_key_upload_errors: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_ignored_users: (a: bigint, b: bigint, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_ignored_users: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_media_preview_config: (a: bigint, b: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_media_preview_config: (a: bigint, b: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_own_beacon_info_updates: (a: bigint, b: bigint, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_own_beacon_info_updates: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_own_profile: (a: bigint, b: bigint, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_own_profile: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_room_info: (a: bigint, b: number, c: number, d: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_room_info: (a: bigint, b: number, c: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_send_queue_status: (a: bigint, b: bigint, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_send_queue_status: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_send_queue_updates: (a: bigint, b: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_subscribe_to_send_queue_updates: (a: bigint, b: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sync_once_v2: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_sync_once_v2: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sync_service: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_sync_service: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_sync_v2: (a: bigint, b: number, c: number, d: bigint, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_sync_v2: (a: bigint, b: number, c: bigint, d: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_tile_server: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_tile_server: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_total_unread_notifications: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_total_unread_notifications: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_track_recently_visited_room: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_track_recently_visited_room: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_unignore_user: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_unignore_user: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_upload_avatar: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_upload_avatar: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_upload_media: (a: bigint, b: number, c: number, d: number, e: number, f: number, g: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_upload_media: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_url_for_oauth: (a: bigint, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_client_url_for_oauth: (a: bigint, b: number, c: number, d: number, e: number, f: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_user_id: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_client_user_id: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_client_user_id_server_name: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_client_user_id_server_name: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_add_root_certificates: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_add_root_certificates: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_auto_enable_backups: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_auto_enable_backups: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_auto_enable_cross_signing: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_auto_enable_cross_signing: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_backup_download_strategy: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_backup_download_strategy: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_build: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_build: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_cross_process_lock_config: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_cross_process_lock_config: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_decryption_settings: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_decryption_settings: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_automatic_token_refresh: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_automatic_token_refresh: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_built_in_root_certificates: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_built_in_root_certificates: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_ssl_verification: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_ssl_verification: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_well_known_lookup: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_disable_well_known_lookup: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_dm_room_definition: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_dm_room_definition: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_enable_automatic_back_pagination: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_enable_automatic_back_pagination: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_enable_share_history_on_invite: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_enable_share_history_on_invite: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_homeserver_url: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_homeserver_url: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_in_memory_store: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_in_memory_store: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_indexeddb_store: (a: bigint, b: bigint, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_indexeddb_store: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_proxy: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_proxy: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_request_config: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_request_config: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_room_key_recipient_strategy: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_room_key_recipient_strategy: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_name: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_name: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_name_from_user_id: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_name_from_user_id: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_name_or_homeserver_url: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_server_name_or_homeserver_url: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_set_session_delegate: (a: bigint, b: bigint, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_set_session_delegate: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_sliding_sync_version_builder: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_sliding_sync_version_builder: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_system_is_memory_constrained: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_system_is_memory_constrained: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_threads_enabled: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_threads_enabled: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_clientbuilder_user_agent: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_clientbuilder_user_agent: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_contentscanner_scan: (a: bigint, b: bigint, c: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_contentscanner_scan: (a: bigint, b: bigint, c: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_continuationmessagesender_cancel: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_continuationmessagesender_cancel: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_continuationmessagesender_confirm: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_continuationmessagesender_confirm: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_backup_exists_on_server: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_backup_exists_on_server: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_backup_state: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_backup_state: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_backup_state_listener: (a: bigint, b: bigint, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_backup_state_listener: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_create_dehydrated_device: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_create_dehydrated_device: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_curve25519_key: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_curve25519_key: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_dehydrated_device_event_listener: (a: bigint, b: bigint, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_dehydrated_device_event_listener: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_delete_dehydrated_device: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_delete_dehydrated_device: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_disable_recovery: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_disable_recovery: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_ed25519_key: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_ed25519_key: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_enable_backups: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_enable_backups: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_enable_recovery: (a: bigint, b: number, c: number, d: number, e: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_enable_recovery: (a: bigint, b: number, c: number, d: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_has_devices_to_verify_against: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_has_devices_to_verify_against: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_import_secrets_bundle: (a: bigint, b: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_import_secrets_bundle: (a: bigint, b: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_is_dehydrated_device_supported: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_is_dehydrated_device_supported: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_is_last_device: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_is_last_device: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recover: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_recover: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recover_and_fix_backup: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_recover_and_fix_backup: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recover_and_reset: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_recover_and_reset: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recovery_state: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_recovery_state: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_recovery_state_listener: (a: bigint, b: bigint, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_recovery_state_listener: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_rehydrate_dehydrated_device: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_rehydrate_dehydrated_device: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_reset_identity: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_reset_identity: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_reset_recovery_key: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_reset_recovery_key: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_start_dehydrated_devices: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_start_dehydrated_devices: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_stop_dehydrated_devices: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_stop_dehydrated_devices: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_user_identity: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_user_identity: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_verification_state: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_verification_state: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_verification_state_listener: (a: bigint, b: bigint, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_verification_state_listener: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_wait_for_backup_upload_steady_state: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_wait_for_backup_upload_steady_state: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_encryption_wait_for_e2ee_initialization_tasks: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_encryption_wait_for_e2ee_initialization_tasks: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_ffitimelineeventtype_uniffi_trait_eq_eq: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_ffitimelineeventtype_uniffi_trait_eq_eq: (a: number, b: number, c: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_ffitimelineeventtype_uniffi_trait_eq_ne: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_ffitimelineeventtype_uniffi_trait_eq_ne: (a: number, b: number, c: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_ffitimelineeventtype_uniffi_trait_hash: (a: number, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_ffitimelineeventtype_uniffi_trait_hash: (a: number, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_grantloginwithqrcodehandler_generate: (a: bigint, b: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_grantloginwithqrcodehandler_generate: (a: bigint, b: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_grantloginwithqrcodehandler_scan: (a: bigint, b: bigint, c: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_grantloginwithqrcodehandler_scan: (a: bigint, b: bigint, c: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_avatar: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_avatar: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_displayname: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_displayname: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_password: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_password: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_thirdparty_ids: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_change_thirdparty_ids: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_get_login_token: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_can_get_login_token: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_extended_profile_fields: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_extended_profile_fields: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_forgets_room_when_leaving: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_forgets_room_when_leaving: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_refresh: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_homeservercapabilities_refresh: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_sliding_sync_version: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_sliding_sync_version: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supported_oauth_prompts: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supported_oauth_prompts: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_oauth_login: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_oauth_login: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_password_login: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_password_login: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_sso_login: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_supports_sso_login: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_url: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_homeserverlogindetails_url: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_identityresethandle_auth_type: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_identityresethandle_auth_type: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_identityresethandle_cancel: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_identityresethandle_cancel: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_identityresethandle_reset: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_identityresethandle_reset: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_indexeddbstorebuilder_passphrase: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_indexeddbstorebuilder_passphrase: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_inreplytodetails_event: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_inreplytodetails_event: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_inreplytodetails_event_id: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_inreplytodetails_event_id: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_accept: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_accept: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_decline: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_decline: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_decline_and_ban: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_decline_and_ban: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_mark_as_seen: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_knockrequestactions_mark_as_seen: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_contains_only_emojis: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_contains_only_emojis: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_debug_info: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_debug_info: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_get_send_handle: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_get_send_handle: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_get_shields: (a: bigint, b: number, c: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_get_shields: (a: number, b: bigint, c: number, d: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_latest_json: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_lazytimelineitemprovider_latest_json: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_leavespacehandle_leave: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_leavespacehandle_leave: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_leavespacehandle_rooms: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_leavespacehandle_rooms: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_livelocationsobserver_subscribe: (a: bigint, b: bigint, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_livelocationsobserver_subscribe: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_loginwithqrcodehandler_generate: (a: bigint, b: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_loginwithqrcodehandler_generate: (a: bigint, b: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_loginwithqrcodehandler_scan: (a: bigint, b: bigint, c: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_loginwithqrcodehandler_scan: (a: bigint, b: bigint, c: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_mediafilehandle_path: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_mediafilehandle_path: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_mediafilehandle_persist: (a: bigint, b: number, c: number, d: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_mediafilehandle_persist: (a: bigint, b: number, c: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_mediasource_to_json: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_mediasource_to_json: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_mediasource_url: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_mediasource_url: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_notification: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_notification: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_notifications: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_notifications: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_room: (a: bigint, b: number, c: number, d: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationclient_get_room: (a: number, b: bigint, c: number, d: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationclient_timeouts: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationclient_timeouts: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_can_homeserver_push_encrypted_event_to_device: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_can_homeserver_push_encrypted_event_to_device: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_can_push_encrypted_event_to_device: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_can_push_encrypted_event_to_device: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_contains_keywords_rules: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_contains_keywords_rules: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_default_room_notification_mode: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_default_room_notification_mode: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_raw_push_rules: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_raw_push_rules: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_room_notification_settings: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_room_notification_settings: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_rooms_with_user_defined_rules: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_rooms_with_user_defined_rules: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_user_defined_room_notification_mode: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_get_user_defined_room_notification_mode: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_call_enabled: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_call_enabled: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_invite_for_me_enabled: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_invite_for_me_enabled: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_room_mention_enabled: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_room_mention_enabled: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_user_mention_enabled: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_is_user_mention_enabled: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_restore_default_room_notification_mode: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_restore_default_room_notification_mode: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_call_enabled: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_call_enabled: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_custom_push_rule: (a: bigint, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_custom_push_rule: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_default_room_notification_mode: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_default_room_notification_mode: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_delegate: (a: bigint, b: number, c: number, d: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_delegate: (a: bigint, b: number, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_invite_for_me_enabled: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_invite_for_me_enabled: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_room_mention_enabled: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_room_mention_enabled: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_room_notification_mode: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_room_notification_mode: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_user_mention_enabled: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_set_user_mention_enabled: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_notificationsettings_unmute_room: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_notificationsettings_unmute_room: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_passwordstrengthestimator_estimate: (a: bigint, b: number, c: number, d: number, e: number, f: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_passwordstrengthestimator_estimate: (a: number, b: bigint, c: number, d: number, e: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_passwordstrengthestimator_thresholds: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_passwordstrengthestimator_thresholds: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_base_url: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_qrcodedata_base_url: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_intent: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_qrcodedata_intent: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_server_name: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_qrcodedata_server_name: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_qrcodedata_to_bytes: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_qrcodedata_to_bytes: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_active_human_member_ids: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_active_human_member_ids: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_active_human_member_ids_no_sync: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_active_human_member_ids_no_sync: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_active_members_count: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_active_members_count: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_active_room_call_participants: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_room_active_room_call_participants: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_alternative_aliases: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_room_alternative_aliases: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_apply_power_level_changes: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_apply_power_level_changes: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_avatar_url: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_room_avatar_url: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_ban_user: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_ban_user: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_canonical_alias: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_room_canonical_alias: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_clear_composer_draft: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_clear_composer_draft: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_decline_call: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_decline_call: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_discard_room_key: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_discard_room_key: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_display_name: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_room_display_name: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_edit: (a: bigint, b: number, c: number, d: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_edit: (a: bigint, b: number, c: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_enable_encryption: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_enable_encryption: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_enable_send_queue: (a: bigint, b: number, c: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_enable_send_queue: (a: bigint, b: number, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_encryption_state: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_room_encryption_state: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_fetch_thread_subscription: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_fetch_thread_subscription: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_forget: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_forget: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_get_power_levels: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_get_power_levels: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_get_room_visibility: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_get_room_visibility: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_has_active_room_call: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_has_active_room_call: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_heroes: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_heroes: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_id: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_room_id: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_ignore_device_trust_and_resend: (a: bigint, b: number, c: number, d: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_ignore_device_trust_and_resend: (a: bigint, b: number, c: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_ignore_user: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_ignore_user: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_invite_user_by_id: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_invite_user_by_id: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_invited_members_count: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_invited_members_count: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_inviter: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_inviter: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_direct: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_is_direct: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_encrypted: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_is_encrypted: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_public: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_room_is_public: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_send_queue_enabled: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_is_send_queue_enabled: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_is_space: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_is_space: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_join: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_join: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_joined_members_count: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_joined_members_count: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_kick_user: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_kick_user: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_latest_encryption_state: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_latest_encryption_state: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_latest_event: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_latest_event: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_leave: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_leave: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_live_locations_observer: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_live_locations_observer: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_load_composer_draft: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_load_composer_draft: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_load_or_fetch_event: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_load_or_fetch_event: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_load_or_fetch_event_with_relations: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_load_or_fetch_event_with_relations: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_load_user_receipt: (a: bigint, b: number, c: number, d: number, e: number, f: number, g: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_load_user_receipt: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_mark_as_fully_read_unchecked: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_mark_as_fully_read_unchecked: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_mark_as_read: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_mark_as_read: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_matrix_to_event_permalink: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_matrix_to_event_permalink: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_matrix_to_permalink: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_matrix_to_permalink: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_member: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member_avatar_url: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_member_avatar_url: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member_display_name: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_member_display_name: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_member_with_sender_info: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_member_with_sender_info: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_members: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_members: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_members_no_sync: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_members_no_sync: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_membership: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_room_membership: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_own_user_id: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_room_own_user_id: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_predecessor_room: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_room_predecessor_room: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_preview_room: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_preview_room: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_publish_room_alias_in_room_directory: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_publish_room_alias_in_room_directory: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_raw_name: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_room_raw_name: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_redact: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_redact: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_remove_avatar: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_remove_avatar: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_remove_room_alias_from_room_directory: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_remove_room_alias_from_room_directory: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_report_content: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_report_content: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_report_room: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_report_room: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_reset_power_levels: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_reset_power_levels: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_room_events_debug_string: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_room_events_debug_string: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_room_info: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_room_info: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_save_composer_draft: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_save_composer_draft: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_live_location: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_send_live_location: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_raw: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_send_raw: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_single_receipt: (a: bigint, b: number, c: number, d: number, e: number, f: number, g: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_send_single_receipt: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_send_state_event_raw: (a: bigint, b: number, c: number, d: number, e: number, f: number, g: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_send_state_event_raw: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_is_favourite: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_set_is_favourite: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_is_low_priority: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_set_is_low_priority: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_name: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_set_name: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_own_member_display_name: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_set_own_member_display_name: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_thread_subscription: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_set_thread_subscription: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_topic: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_set_topic: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_set_unread_flag: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_set_unread_flag: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_start_live_location_share: (a: bigint, b: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_start_live_location_share: (a: bigint, b: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_stop_live_location_share: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_stop_live_location_share: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_call_decline_events: (a: bigint, b: number, c: number, d: bigint, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_call_decline_events: (a: bigint, b: number, c: bigint, d: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_identity_status_changes: (a: bigint, b: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_identity_status_changes: (a: bigint, b: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_knock_requests: (a: bigint, b: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_knock_requests: (a: bigint, b: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_room_info_updates: (a: bigint, b: bigint, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_room_info_updates: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_send_queue_updates: (a: bigint, b: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_send_queue_updates: (a: bigint, b: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_typing_notifications: (a: bigint, b: bigint, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_subscribe_to_typing_notifications: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_successor_room: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_room_successor_room: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_suggested_role_for_user: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_suggested_role_for_user: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_thread_list_service: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_thread_list_service: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_timeline: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_timeline: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_timeline_with_configuration: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_timeline_with_configuration: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_topic: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_room_topic: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_typing_notice: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_typing_notice: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_unban_user: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_unban_user: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_canonical_alias: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_update_canonical_alias: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_history_visibility: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_update_history_visibility: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_join_rules: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_update_join_rules: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_power_levels_for_users: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_update_power_levels_for_users: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_update_room_visibility: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_update_room_visibility: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_upload_avatar: (a: bigint, b: number, c: number, d: number, e: number, f: number, g: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_upload_avatar: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_room_withdraw_verification_and_resend: (a: bigint, b: number, c: number, d: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_room_withdraw_verification_and_resend: (a: bigint, b: number, c: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_is_at_last_page: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_is_at_last_page: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_loaded_pages: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_loaded_pages: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_next_page: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_next_page: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_results: (a: bigint, b: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_results: (a: bigint, b: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_search: (a: bigint, b: number, c: number, d: number, e: number, f: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_roomdirectorysearch_search: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlist_entries_with_dynamic_adapters: (a: bigint, b: number, c: bigint, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_roomlist_entries_with_dynamic_adapters: (a: bigint, b: number, c: bigint, d: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlist_loading_state: (a: bigint, b: bigint, c: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_roomlist_loading_state: (a: number, b: bigint, c: bigint, d: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlist_room: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_roomlist_room: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_add_one_page: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_add_one_page: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_reset_to_one_page: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_reset_to_one_page: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_set_filter: (a: bigint, b: number, c: number, d: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_roomlistdynamicentriescontroller_set_filter: (a: bigint, b: number, c: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistentrieswithdynamicadaptersresult_controller: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_roomlistentrieswithdynamicadaptersresult_controller: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistentrieswithdynamicadaptersresult_entries_stream: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_roomlistentrieswithdynamicadaptersresult_entries_stream: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_all_rooms: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_roomlistservice_all_rooms: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_remove_room_subscriptions: (a: bigint, b: number, c: number, d: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_method_roomlistservice_remove_room_subscriptions: (a: bigint, b: number, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_reset_and_add_room_subscriptions: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_roomlistservice_reset_and_add_room_subscriptions: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_room: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_roomlistservice_room: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_set_room_subscriptions: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_roomlistservice_set_room_subscriptions: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_state: (a: bigint, b: bigint, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_roomlistservice_state: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roomlistservice_sync_indicator: (a: bigint, b: number, c: number, d: bigint, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_roomlistservice_sync_indicator: (a: bigint, b: number, c: number, d: bigint, e: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roommembersiterator_len: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_roommembersiterator_len: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roommembersiterator_next_chunk: (a: bigint, b: number, c: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_roommembersiterator_next_chunk: (a: number, b: bigint, c: number, d: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roommessageeventcontentwithoutrelation_with_mentions: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_roommessageeventcontentwithoutrelation_with_mentions: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_ban: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_ban: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_invite: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_invite: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_kick: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_kick: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_pin_unpin: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_pin_unpin: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_redact_other: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_redact_other: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_redact_own: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_redact_own: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_send_message: (a: bigint, b: number, c: number, d: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_send_message: (a: bigint, b: number, c: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_send_state: (a: bigint, b: number, c: number, d: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_send_state: (a: bigint, b: number, c: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_trigger_room_notification: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_own_user_trigger_room_notification: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_ban: (a: bigint, b: number, c: number, d: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_ban: (a: bigint, b: number, c: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_invite: (a: bigint, b: number, c: number, d: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_invite: (a: bigint, b: number, c: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_kick: (a: bigint, b: number, c: number, d: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_kick: (a: bigint, b: number, c: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_pin_unpin: (a: bigint, b: number, c: number, d: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_pin_unpin: (a: bigint, b: number, c: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_redact_other: (a: bigint, b: number, c: number, d: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_redact_other: (a: bigint, b: number, c: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_redact_own: (a: bigint, b: number, c: number, d: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_redact_own: (a: bigint, b: number, c: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_send_message: (a: bigint, b: number, c: number, d: number, e: number, f: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_send_message: (a: bigint, b: number, c: number, d: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_send_state: (a: bigint, b: number, c: number, d: number, e: number, f: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_send_state: (a: bigint, b: number, c: number, d: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_trigger_room_notification: (a: bigint, b: number, c: number, d: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_can_user_trigger_room_notification: (a: bigint, b: number, c: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_events: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_events: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_user_power_levels: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_user_power_levels: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_values: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_roompowerlevels_values: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_forget: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompreview_forget: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_info: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_roompreview_info: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_inviter: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompreview_inviter: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_leave: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompreview_leave: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_roompreview_own_membership_details: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_roompreview_own_membership_details: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_secretsbundlewithuserid_contains_backup_key: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_secretsbundlewithuserid_contains_backup_key: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_sendattachmentjoinhandle_cancel: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_method_sendattachmentjoinhandle_cancel: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_sendattachmentjoinhandle_join: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_sendattachmentjoinhandle_join: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_sendhandle_abort: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_sendhandle_abort: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_sendhandle_try_resend: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_sendhandle_try_resend: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_accept_verification_request: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_accept_verification_request: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_acknowledge_verification_request: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_acknowledge_verification_request: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_approve_verification: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_approve_verification: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_cancel_verification: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_cancel_verification: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_decline_verification: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_decline_verification: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_request_device_verification: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_request_device_verification: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_request_user_verification: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_request_user_verification: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_set_delegate: (a: bigint, b: number, c: number, d: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_set_delegate: (a: bigint, b: number, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_start_sas_verification: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_sessionverificationcontroller_start_sas_verification: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationemoji_description: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_sessionverificationemoji_description: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_sessionverificationemoji_symbol: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_sessionverificationemoji_symbol: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_paginate: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_paginate: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_pagination_state: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_pagination_state: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_reset: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_reset: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_rooms: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_rooms: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_space: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_space: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_subscribe_to_pagination_state_updates: (a: bigint, b: bigint, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_subscribe_to_pagination_state_updates: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_subscribe_to_room_update: (a: bigint, b: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_subscribe_to_room_update: (a: bigint, b: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_subscribe_to_space_updates: (a: bigint, b: bigint, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_spaceroomlist_subscribe_to_space_updates: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_add_child_to_space: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_spaceservice_add_child_to_space: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_editable_spaces: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_spaceservice_editable_spaces: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_get_space_room: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_spaceservice_get_space_room: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_joined_parent_ids_of_child: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_spaceservice_joined_parent_ids_of_child: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_joined_parents_of_child: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_spaceservice_joined_parents_of_child: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_leave_space: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_spaceservice_leave_space: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_remove_child_from_space: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_spaceservice_remove_child_from_space: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_space_filters: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_spaceservice_space_filters: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_space_room_list: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_spaceservice_space_room_list: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_subscribe_to_space_filters: (a: bigint, b: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_spaceservice_subscribe_to_space_filters: (a: bigint, b: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_subscribe_to_top_level_joined_spaces: (a: bigint, b: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_spaceservice_subscribe_to_top_level_joined_spaces: (a: bigint, b: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_top_level_ancestors_of: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_spaceservice_top_level_ancestors_of: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_spaceservice_top_level_joined_spaces: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_spaceservice_top_level_joined_spaces: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_span_enter: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_method_span_enter: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_span_exit: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_method_span_exit: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_span_is_none: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_span_is_none: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_ssohandler_finish: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_ssohandler_finish: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_ssohandler_url: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_ssohandler_url: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_expire_sessions: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_syncservice_expire_sessions: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_room_list_service: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_syncservice_room_list_service: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_start: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_syncservice_start: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_state: (a: bigint, b: bigint, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_syncservice_state: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservice_stop: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_syncservice_stop: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_finish: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_finish: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_offline_mode: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_offline_mode: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_parent_span: (a: bigint, b: bigint, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_parent_span: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_room_list_connection_id: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_room_list_connection_id: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_room_list_timeline_limit: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_room_list_timeline_limit: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_share_pos: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_syncservicebuilder_with_share_pos: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_tagname_uniffi_trait_eq_eq: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_tagname_uniffi_trait_eq_eq: (a: number, b: number, c: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_tagname_uniffi_trait_eq_ne: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_tagname_uniffi_trait_eq_ne: (a: number, b: number, c: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_tagname_uniffi_trait_hash: (a: number, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_tagname_uniffi_trait_hash: (a: number, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_taskhandle_cancel: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_method_taskhandle_cancel: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_taskhandle_is_finished: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_taskhandle_is_finished: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_items: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_threadlistservice_items: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_paginate: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_threadlistservice_paginate: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_pagination_state: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_threadlistservice_pagination_state: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_reset: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_threadlistservice_reset: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_subscribe_to_items_updates: (a: bigint, b: bigint, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_threadlistservice_subscribe_to_items_updates: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_threadlistservice_subscribe_to_pagination_state_updates: (a: bigint, b: bigint, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_threadlistservice_subscribe_to_pagination_state_updates: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_threadsummary_latest_event: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_threadsummary_latest_event: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_threadsummary_num_replies: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_threadsummary_num_replies: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_add_listener: (a: bigint, b: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_add_listener: (a: bigint, b: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_create_message_content: (a: bigint, b: number, c: number, d: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_create_message_content: (a: number, b: bigint, c: number, d: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_create_poll: (a: bigint, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_create_poll: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_edit: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_edit: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_edit_revisions: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_edit_revisions: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_end_poll: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_end_poll: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_fetch_details_for_event: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_fetch_details_for_event: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_fetch_members: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_fetch_members: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_get_event_timeline_item_by_event_id: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_get_event_timeline_item_by_event_id: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_latest_event_id: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_latest_event_id: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_load_reply_details: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_load_reply_details: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_mark_as_read: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_mark_as_read: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_paginate_backwards: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_paginate_backwards: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_paginate_forwards: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_paginate_forwards: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_pin_event: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_pin_event: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_redact_event: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_redact_event: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_retry_decryption: (a: bigint, b: number, c: number, d: number) => void;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_retry_decryption: (a: bigint, b: number, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send: (a: bigint, b: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_send: (a: bigint, b: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_audio: (a: bigint, b: number, c: number, d: number, e: number, f: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_send_audio: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_file: (a: bigint, b: number, c: number, d: number, e: number, f: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_send_file: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_image: (a: bigint, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_send_image: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_location: (a: bigint, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_send_location: (a: bigint, b: number, c: number, d: number, e: number, f: number, g: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_poll_response: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_send_poll_response: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_read_receipt: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_send_read_receipt: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_reply: (a: bigint, b: bigint, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_send_reply: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_video: (a: bigint, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_send_video: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_voice_message: (a: bigint, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_send_voice_message: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_send_with_extra_content: (a: bigint, b: bigint, c: number, d: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_send_with_extra_content: (a: bigint, b: bigint, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_subscribe_to_back_pagination_status: (a: bigint, b: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_subscribe_to_back_pagination_status: (a: bigint, b: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_toggle_reaction: (a: bigint, b: number, c: number, d: number, e: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_toggle_reaction: (a: bigint, b: number, c: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_toggle_reaction_with_extra_content: (a: bigint, b: number, c: number, d: number, e: number, f: number, g: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_toggle_reaction_with_extra_content: (a: bigint, b: number, c: number, d: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timeline_unpin_event: (a: bigint, b: number, c: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timeline_unpin_event: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_content: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_timelineevent_content: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_event_id: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_timelineevent_event_id: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_sender_id: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_timelineevent_sender_id: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_thread_root_event_id: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_timelineevent_thread_root_event_id: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineevent_timestamp: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_timelineevent_timestamp: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_as_event: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_timelineitem_as_event: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_as_virtual: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_timelineitem_as_virtual: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_fmt_debug: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_timelineitem_fmt_debug: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_timelineitem_unique_id: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_timelineitem_unique_id: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_has_notifications: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_has_notifications: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_highlight_count: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_highlight_count: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_notification_count: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_unreadnotificationscount_notification_count: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_has_verification_violation: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_useridentity_has_verification_violation: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_is_verified: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_useridentity_is_verified: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_master_key: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_ffi_fn_method_useridentity_master_key: (a: number, b: bigint, c: number) => void;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_pin: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_useridentity_pin: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_was_previously_verified: (a: bigint, b: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_useridentity_was_previously_verified: (a: bigint, b: number) => number;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_useridentity_withdraw_verification: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_useridentity_withdraw_verification: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_widgetdriver_run: (a: bigint, b: bigint, c: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_widgetdriver_run: (a: bigint, b: bigint, c: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_widgetdriverhandle_recv: (a: bigint) => bigint;
    readonly uniffi_matrix_sdk_ffi_fn_method_widgetdriverhandle_recv: (a: bigint) => bigint;
    readonly ubrn_uniffi_matrix_sdk_ffi_fn_method_widgetdriverhandle_send: (a: bigint, b: number, c: number, d: number) => number;
    readonly uniffi_matrix_sdk_ffi_fn_method_widgetdriverhandle_send: (a: bigint, b: number, c: number) => number;
    readonly ubrn_ffi_ruma_events_uniffi_contract_version: () => number;
    readonly ffi_ruma_events_uniffi_contract_version: () => number;
    readonly ubrn_uniffi_ruma_events_checksum_func_ephemeral_room_event_type_from_string: () => number;
    readonly uniffi_ruma_events_checksum_func_ephemeral_room_event_type_from_string: () => number;
    readonly ubrn_uniffi_ruma_events_checksum_func_global_account_data_event_type_from_string: () => number;
    readonly uniffi_ruma_events_checksum_func_global_account_data_event_type_from_string: () => number;
    readonly ubrn_uniffi_ruma_events_checksum_func_message_like_event_type_from_string: () => number;
    readonly uniffi_ruma_events_checksum_func_message_like_event_type_from_string: () => number;
    readonly ubrn_uniffi_ruma_events_checksum_func_room_account_data_event_type_from_string: () => number;
    readonly uniffi_ruma_events_checksum_func_room_account_data_event_type_from_string: () => number;
    readonly ubrn_uniffi_ruma_events_checksum_func_state_event_type_from_string: () => number;
    readonly uniffi_ruma_events_checksum_func_state_event_type_from_string: () => number;
    readonly ubrn_uniffi_ruma_events_checksum_func_timeline_event_type_from_string: () => number;
    readonly uniffi_ruma_events_checksum_func_timeline_event_type_from_string: () => number;
    readonly ubrn_uniffi_ruma_events_checksum_func_to_device_event_type_from_string: () => number;
    readonly uniffi_ruma_events_checksum_func_to_device_event_type_from_string: () => number;
    readonly ubrn_uniffi_ruma_events_fn_clone_privatestring: (a: bigint, b: number) => bigint;
    readonly uniffi_ruma_events_fn_clone_privatestring: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_ruma_events_fn_free_privatestring: (a: bigint, b: number) => void;
    readonly uniffi_ruma_events_fn_free_privatestring: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_ruma_events_fn_func_ephemeral_room_event_type_from_string: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_ruma_events_fn_func_ephemeral_room_event_type_from_string: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_ruma_events_fn_func_global_account_data_event_type_from_string: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_ruma_events_fn_func_global_account_data_event_type_from_string: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_ruma_events_fn_func_message_like_event_type_from_string: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_ruma_events_fn_func_message_like_event_type_from_string: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_ruma_events_fn_func_room_account_data_event_type_from_string: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_ruma_events_fn_func_room_account_data_event_type_from_string: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_ruma_events_fn_func_state_event_type_from_string: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_ruma_events_fn_func_state_event_type_from_string: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_ruma_events_fn_func_timeline_event_type_from_string: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_ruma_events_fn_func_timeline_event_type_from_string: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_ruma_events_fn_func_to_device_event_type_from_string: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_ruma_events_fn_func_to_device_event_type_from_string: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_ruma_events_fn_method_ephemeralroomeventtype_uniffi_trait_display: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_ruma_events_fn_method_ephemeralroomeventtype_uniffi_trait_display: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_ruma_events_fn_method_ephemeralroomeventtype_uniffi_trait_eq_eq: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly uniffi_ruma_events_fn_method_ephemeralroomeventtype_uniffi_trait_eq_eq: (a: number, b: number, c: number) => number;
    readonly ubrn_uniffi_ruma_events_fn_method_ephemeralroomeventtype_uniffi_trait_eq_ne: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly uniffi_ruma_events_fn_method_ephemeralroomeventtype_uniffi_trait_eq_ne: (a: number, b: number, c: number) => number;
    readonly ubrn_uniffi_ruma_events_fn_method_ephemeralroomeventtype_uniffi_trait_hash: (a: number, b: number, c: number) => bigint;
    readonly uniffi_ruma_events_fn_method_ephemeralroomeventtype_uniffi_trait_hash: (a: number, b: number) => bigint;
    readonly ubrn_uniffi_ruma_events_fn_method_globalaccountdataeventtype_uniffi_trait_display: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_ruma_events_fn_method_globalaccountdataeventtype_uniffi_trait_display: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_ruma_events_fn_method_globalaccountdataeventtype_uniffi_trait_eq_eq: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly uniffi_ruma_events_fn_method_globalaccountdataeventtype_uniffi_trait_eq_eq: (a: number, b: number, c: number) => number;
    readonly ubrn_uniffi_ruma_events_fn_method_globalaccountdataeventtype_uniffi_trait_eq_ne: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly uniffi_ruma_events_fn_method_globalaccountdataeventtype_uniffi_trait_eq_ne: (a: number, b: number, c: number) => number;
    readonly ubrn_uniffi_ruma_events_fn_method_globalaccountdataeventtype_uniffi_trait_hash: (a: number, b: number, c: number) => bigint;
    readonly uniffi_ruma_events_fn_method_globalaccountdataeventtype_uniffi_trait_hash: (a: number, b: number) => bigint;
    readonly ubrn_uniffi_ruma_events_fn_method_messagelikeeventtype_uniffi_trait_display: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_ruma_events_fn_method_messagelikeeventtype_uniffi_trait_display: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_ruma_events_fn_method_messagelikeeventtype_uniffi_trait_eq_eq: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly uniffi_ruma_events_fn_method_messagelikeeventtype_uniffi_trait_eq_eq: (a: number, b: number, c: number) => number;
    readonly ubrn_uniffi_ruma_events_fn_method_messagelikeeventtype_uniffi_trait_eq_ne: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly uniffi_ruma_events_fn_method_messagelikeeventtype_uniffi_trait_eq_ne: (a: number, b: number, c: number) => number;
    readonly ubrn_uniffi_ruma_events_fn_method_messagelikeeventtype_uniffi_trait_hash: (a: number, b: number, c: number) => bigint;
    readonly uniffi_ruma_events_fn_method_messagelikeeventtype_uniffi_trait_hash: (a: number, b: number) => bigint;
    readonly ubrn_uniffi_ruma_events_fn_method_roomaccountdataeventtype_uniffi_trait_display: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_ruma_events_fn_method_roomaccountdataeventtype_uniffi_trait_display: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_ruma_events_fn_method_roomaccountdataeventtype_uniffi_trait_eq_eq: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly uniffi_ruma_events_fn_method_roomaccountdataeventtype_uniffi_trait_eq_eq: (a: number, b: number, c: number) => number;
    readonly ubrn_uniffi_ruma_events_fn_method_roomaccountdataeventtype_uniffi_trait_eq_ne: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly uniffi_ruma_events_fn_method_roomaccountdataeventtype_uniffi_trait_eq_ne: (a: number, b: number, c: number) => number;
    readonly ubrn_uniffi_ruma_events_fn_method_roomaccountdataeventtype_uniffi_trait_hash: (a: number, b: number, c: number) => bigint;
    readonly uniffi_ruma_events_fn_method_roomaccountdataeventtype_uniffi_trait_hash: (a: number, b: number) => bigint;
    readonly ubrn_uniffi_ruma_events_fn_method_stateeventtype_uniffi_trait_display: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_ruma_events_fn_method_stateeventtype_uniffi_trait_display: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_ruma_events_fn_method_stateeventtype_uniffi_trait_eq_eq: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly uniffi_ruma_events_fn_method_stateeventtype_uniffi_trait_eq_eq: (a: number, b: number, c: number) => number;
    readonly ubrn_uniffi_ruma_events_fn_method_stateeventtype_uniffi_trait_eq_ne: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly uniffi_ruma_events_fn_method_stateeventtype_uniffi_trait_eq_ne: (a: number, b: number, c: number) => number;
    readonly ubrn_uniffi_ruma_events_fn_method_stateeventtype_uniffi_trait_hash: (a: number, b: number, c: number) => bigint;
    readonly uniffi_ruma_events_fn_method_stateeventtype_uniffi_trait_hash: (a: number, b: number) => bigint;
    readonly ubrn_uniffi_ruma_events_fn_method_timelineeventtype_uniffi_trait_display: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_ruma_events_fn_method_timelineeventtype_uniffi_trait_display: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_ruma_events_fn_method_timelineeventtype_uniffi_trait_eq_eq: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly uniffi_ruma_events_fn_method_timelineeventtype_uniffi_trait_eq_eq: (a: number, b: number, c: number) => number;
    readonly ubrn_uniffi_ruma_events_fn_method_timelineeventtype_uniffi_trait_eq_ne: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly uniffi_ruma_events_fn_method_timelineeventtype_uniffi_trait_eq_ne: (a: number, b: number, c: number) => number;
    readonly ubrn_uniffi_ruma_events_fn_method_timelineeventtype_uniffi_trait_hash: (a: number, b: number, c: number) => bigint;
    readonly uniffi_ruma_events_fn_method_timelineeventtype_uniffi_trait_hash: (a: number, b: number) => bigint;
    readonly ubrn_uniffi_ruma_events_fn_method_todeviceeventtype_uniffi_trait_display: (a: number, b: number, c: number) => [number, number];
    readonly uniffi_ruma_events_fn_method_todeviceeventtype_uniffi_trait_display: (a: number, b: number, c: number) => void;
    readonly ubrn_uniffi_ruma_events_fn_method_todeviceeventtype_uniffi_trait_eq_eq: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly uniffi_ruma_events_fn_method_todeviceeventtype_uniffi_trait_eq_eq: (a: number, b: number, c: number) => number;
    readonly ubrn_uniffi_ruma_events_fn_method_todeviceeventtype_uniffi_trait_eq_ne: (a: number, b: number, c: number, d: number, e: number) => number;
    readonly uniffi_ruma_events_fn_method_todeviceeventtype_uniffi_trait_eq_ne: (a: number, b: number, c: number) => number;
    readonly ubrn_uniffi_ruma_events_fn_method_todeviceeventtype_uniffi_trait_hash: (a: number, b: number, c: number) => bigint;
    readonly uniffi_ruma_events_fn_method_todeviceeventtype_uniffi_trait_hash: (a: number, b: number) => bigint;
    readonly __wbg_foreignfuturecompletei32_free: (a: number, b: number) => void;
    readonly __wbg_foreignfuturecompleteu8_free: (a: number, b: number) => void;
    readonly __wbg_foreignfuturecompletevoid_free: (a: number, b: number) => void;
    readonly foreignfuturecompletei32_call: (a: number, b: number, c: bigint, d: any) => void;
    readonly foreignfuturecompleteu8_call: (a: number, b: number, c: bigint, d: any) => void;
    readonly foreignfuturecompletevoid_call: (a: number, b: number, c: bigint, d: any) => void;
    readonly __wbg_foreignfuturecompletef64_free: (a: number, b: number) => void;
    readonly __wbg_foreignfuturecompleteu16_free: (a: number, b: number) => void;
    readonly __wbg_foreignfuturecompleteu64_free: (a: number, b: number) => void;
    readonly foreignfuturecompletef64_call: (a: number, b: number, c: bigint, d: any) => void;
    readonly foreignfuturecompleteu16_call: (a: number, b: number, c: bigint, d: any) => void;
    readonly foreignfuturecompleteu64_call: (a: number, b: number, c: bigint, d: any) => void;
    readonly ubrn_ffi_matrix_sdk_contentscanner_uniffi_contract_version: () => number;
    readonly ffi_matrix_sdk_contentscanner_uniffi_contract_version: () => number;
    readonly __wbg_foreignfuturecompletei16_free: (a: number, b: number) => void;
    readonly foreignfuturecompletei16_call: (a: number, b: number, c: bigint, d: any) => void;
    readonly ubrn_ffi_matrix_sdk_ui_uniffi_contract_version: () => number;
    readonly ffi_matrix_sdk_ui_uniffi_contract_version: () => number;
    readonly __wbg_foreignfuturecompletef32_free: (a: number, b: number) => void;
    readonly foreignfuturecompletef32_call: (a: number, b: number, c: bigint, d: any) => void;
    readonly ubrn_ffi_matrix_sdk_base_uniffi_contract_version: () => number;
    readonly ffi_matrix_sdk_base_uniffi_contract_version: () => number;
    readonly ubrn_ffi_matrix_sdk_crypto_uniffi_contract_version: () => number;
    readonly ffi_matrix_sdk_crypto_uniffi_contract_version: () => number;
    readonly ubrn_ffi_matrix_sdk_uniffi_contract_version: () => number;
    readonly ffi_matrix_sdk_uniffi_contract_version: () => number;
    readonly ubrn_uniffi_matrix_sdk_checksum_method_oauthauthorizationdata_login_url: () => number;
    readonly uniffi_matrix_sdk_checksum_method_oauthauthorizationdata_login_url: () => number;
    readonly ubrn_uniffi_matrix_sdk_crypto_fn_clone_backupsecrets: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_crypto_fn_clone_backupsecrets: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_crypto_fn_clone_crosssigningsecrets: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_crypto_fn_clone_crosssigningsecrets: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_crypto_fn_clone_secretsbundle: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_crypto_fn_clone_secretsbundle: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_crypto_fn_free_backupsecrets: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_crypto_fn_free_backupsecrets: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_crypto_fn_free_crosssigningsecrets: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_crypto_fn_free_crosssigningsecrets: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_crypto_fn_free_secretsbundle: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_crypto_fn_free_secretsbundle: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_fn_clone_oauthauthorizationdata: (a: bigint, b: number) => bigint;
    readonly uniffi_matrix_sdk_fn_clone_oauthauthorizationdata: (a: bigint, b: number) => bigint;
    readonly ubrn_uniffi_matrix_sdk_fn_free_oauthauthorizationdata: (a: bigint, b: number) => void;
    readonly uniffi_matrix_sdk_fn_free_oauthauthorizationdata: (a: bigint, b: number) => void;
    readonly ubrn_uniffi_matrix_sdk_fn_method_oauthauthorizationdata_login_url: (a: bigint, b: number) => [number, number];
    readonly uniffi_matrix_sdk_fn_method_oauthauthorizationdata_login_url: (a: number, b: bigint, c: number) => void;
    readonly __wbg_foreignfuturecompleteu32_free: (a: number, b: number) => void;
    readonly foreignfuturecompleteu32_call: (a: number, b: number, c: bigint, d: any) => void;
    readonly ubrn_ffi_matrix_sdk_common_uniffi_contract_version: () => number;
    readonly ffi_matrix_sdk_common_uniffi_contract_version: () => number;
    readonly __wbg_foreignfuturecompletei64_free: (a: number, b: number) => void;
    readonly __wbg_foreignfuturecompletei8_free: (a: number, b: number) => void;
    readonly __wbg_foreignfuturecompleterustbuffer_free: (a: number, b: number) => void;
    readonly foreignfuturecompletei64_call: (a: number, b: number, c: bigint, d: any) => void;
    readonly foreignfuturecompletei8_call: (a: number, b: number, c: bigint, d: any) => void;
    readonly foreignfuturecompleterustbuffer_call: (a: number, b: number, c: bigint, d: any) => void;
    readonly __wbg_get_rustcallstatus_code: (a: number) => number;
    readonly __wbg_rustcallstatus_free: (a: number, b: number) => void;
    readonly __wbg_set_rustcallstatus_code: (a: number, b: number) => void;
    readonly rustcallstatus_error_buf: (a: number) => [number, number];
    readonly rustcallstatus_new: () => number;
    readonly rustcallstatus_set_error_buf: (a: number, b: number, c: number) => void;
    readonly ffi_matrix_sdk_ffi_rustbuffer_alloc: (a: number, b: bigint, c: number) => void;
    readonly ffi_matrix_sdk_ffi_rustbuffer_free: (a: number, b: number) => void;
    readonly ffi_matrix_sdk_ffi_rustbuffer_from_bytes: (a: number, b: number, c: number) => void;
    readonly ffi_matrix_sdk_ffi_rustbuffer_reserve: (a: number, b: number, c: bigint, d: number) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_cancel_f32: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_cancel_f64: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_cancel_i16: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_cancel_i32: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_cancel_i64: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_cancel_i8: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_cancel_rust_buffer: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_cancel_u16: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_cancel_u32: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_cancel_u64: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_cancel_u8: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_cancel_void: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_complete_f32: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_contentscanner_rust_future_complete_f64: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_contentscanner_rust_future_complete_i16: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_contentscanner_rust_future_complete_i32: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_contentscanner_rust_future_complete_i64: (a: bigint, b: number) => bigint;
    readonly ffi_matrix_sdk_contentscanner_rust_future_complete_i8: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_contentscanner_rust_future_complete_rust_buffer: (a: number, b: bigint, c: number) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_complete_u16: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_contentscanner_rust_future_complete_u32: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_contentscanner_rust_future_complete_u64: (a: bigint, b: number) => bigint;
    readonly ffi_matrix_sdk_contentscanner_rust_future_complete_u8: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_contentscanner_rust_future_complete_void: (a: bigint, b: number) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_free_f32: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_free_f64: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_free_i16: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_free_i32: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_free_i64: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_free_i8: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_free_rust_buffer: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_free_u16: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_free_u32: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_free_u64: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_free_u8: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_free_void: (a: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_poll_f32: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_poll_f64: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_poll_i16: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_poll_i32: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_poll_i64: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_poll_i8: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_poll_rust_buffer: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_poll_u16: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_poll_u32: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_poll_u64: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_poll_u8: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rust_future_poll_void: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_contentscanner_rustbuffer_alloc: (a: number, b: bigint, c: number) => void;
    readonly ffi_matrix_sdk_contentscanner_rustbuffer_free: (a: number, b: number) => void;
    readonly ffi_matrix_sdk_contentscanner_rustbuffer_from_bytes: (a: number, b: number, c: number) => void;
    readonly ffi_matrix_sdk_contentscanner_rustbuffer_reserve: (a: number, b: number, c: bigint, d: number) => void;
    readonly ffi_matrix_sdk_ui_rust_future_cancel_f32: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_cancel_f64: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_cancel_i16: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_cancel_i32: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_cancel_i64: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_cancel_i8: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_cancel_rust_buffer: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_cancel_u16: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_cancel_u32: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_cancel_u64: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_cancel_u8: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_cancel_void: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_complete_f32: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_ui_rust_future_complete_f64: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_ui_rust_future_complete_i16: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_ui_rust_future_complete_i32: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_ui_rust_future_complete_i64: (a: bigint, b: number) => bigint;
    readonly ffi_matrix_sdk_ui_rust_future_complete_i8: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_ui_rust_future_complete_rust_buffer: (a: number, b: bigint, c: number) => void;
    readonly ffi_matrix_sdk_ui_rust_future_complete_u16: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_ui_rust_future_complete_u32: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_ui_rust_future_complete_u64: (a: bigint, b: number) => bigint;
    readonly ffi_matrix_sdk_ui_rust_future_complete_u8: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_ui_rust_future_complete_void: (a: bigint, b: number) => void;
    readonly ffi_matrix_sdk_ui_rust_future_free_f32: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_free_f64: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_free_i16: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_free_i32: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_free_i64: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_free_i8: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_free_rust_buffer: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_free_u16: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_free_u32: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_free_u64: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_free_u8: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_free_void: (a: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_poll_f32: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_poll_f64: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_poll_i16: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_poll_i32: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_poll_i64: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_poll_i8: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_poll_rust_buffer: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_poll_u16: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_poll_u32: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_poll_u64: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_poll_u8: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_ui_rust_future_poll_void: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_ui_rustbuffer_alloc: (a: number, b: bigint, c: number) => void;
    readonly ffi_matrix_sdk_ui_rustbuffer_free: (a: number, b: number) => void;
    readonly ffi_matrix_sdk_ui_rustbuffer_from_bytes: (a: number, b: number, c: number) => void;
    readonly ffi_matrix_sdk_ui_rustbuffer_reserve: (a: number, b: number, c: bigint, d: number) => void;
    readonly ffi_matrix_sdk_rust_future_cancel_f32: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_cancel_f64: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_cancel_i16: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_cancel_i32: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_cancel_i64: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_cancel_i8: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_cancel_rust_buffer: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_cancel_u16: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_cancel_u32: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_cancel_u64: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_cancel_u8: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_cancel_void: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_complete_f32: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_rust_future_complete_f64: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_rust_future_complete_i16: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_rust_future_complete_i32: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_rust_future_complete_i64: (a: bigint, b: number) => bigint;
    readonly ffi_matrix_sdk_rust_future_complete_i8: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_rust_future_complete_rust_buffer: (a: number, b: bigint, c: number) => void;
    readonly ffi_matrix_sdk_rust_future_complete_u16: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_rust_future_complete_u32: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_rust_future_complete_u64: (a: bigint, b: number) => bigint;
    readonly ffi_matrix_sdk_rust_future_complete_u8: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_rust_future_complete_void: (a: bigint, b: number) => void;
    readonly ffi_matrix_sdk_rust_future_free_f32: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_free_f64: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_free_i16: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_free_i32: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_free_i64: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_free_i8: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_free_rust_buffer: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_free_u16: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_free_u32: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_free_u64: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_free_u8: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_free_void: (a: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_poll_f32: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_poll_f64: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_poll_i16: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_poll_i32: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_poll_i64: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_poll_i8: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_poll_rust_buffer: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_poll_u16: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_poll_u32: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_poll_u64: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_poll_u8: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_rust_future_poll_void: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_rustbuffer_alloc: (a: number, b: bigint, c: number) => void;
    readonly ffi_matrix_sdk_rustbuffer_free: (a: number, b: number) => void;
    readonly ffi_matrix_sdk_rustbuffer_from_bytes: (a: number, b: number, c: number) => void;
    readonly ffi_matrix_sdk_rustbuffer_reserve: (a: number, b: number, c: bigint, d: number) => void;
    readonly ffi_matrix_sdk_base_rust_future_cancel_f32: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_cancel_f64: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_cancel_i16: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_cancel_i32: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_cancel_i64: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_cancel_i8: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_cancel_rust_buffer: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_cancel_u16: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_cancel_u32: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_cancel_u64: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_cancel_u8: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_cancel_void: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_complete_f32: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_base_rust_future_complete_f64: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_base_rust_future_complete_i16: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_base_rust_future_complete_i32: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_base_rust_future_complete_i64: (a: bigint, b: number) => bigint;
    readonly ffi_matrix_sdk_base_rust_future_complete_i8: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_base_rust_future_complete_rust_buffer: (a: number, b: bigint, c: number) => void;
    readonly ffi_matrix_sdk_base_rust_future_complete_u16: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_base_rust_future_complete_u32: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_base_rust_future_complete_u64: (a: bigint, b: number) => bigint;
    readonly ffi_matrix_sdk_base_rust_future_complete_u8: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_base_rust_future_complete_void: (a: bigint, b: number) => void;
    readonly ffi_matrix_sdk_base_rust_future_free_f32: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_free_f64: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_free_i16: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_free_i32: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_free_i64: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_free_i8: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_free_rust_buffer: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_free_u16: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_free_u32: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_free_u64: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_free_u8: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_free_void: (a: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_poll_f32: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_poll_f64: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_poll_i16: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_poll_i32: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_poll_i64: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_poll_i8: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_poll_rust_buffer: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_poll_u16: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_poll_u32: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_poll_u64: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_poll_u8: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_base_rust_future_poll_void: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_base_rustbuffer_alloc: (a: number, b: bigint, c: number) => void;
    readonly ffi_matrix_sdk_base_rustbuffer_free: (a: number, b: number) => void;
    readonly ffi_matrix_sdk_base_rustbuffer_from_bytes: (a: number, b: number, c: number) => void;
    readonly ffi_matrix_sdk_base_rustbuffer_reserve: (a: number, b: number, c: bigint, d: number) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_cancel_f32: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_cancel_f64: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_cancel_i16: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_cancel_i32: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_cancel_i64: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_cancel_i8: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_cancel_rust_buffer: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_cancel_u16: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_cancel_u32: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_cancel_u64: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_cancel_u8: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_cancel_void: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_complete_f32: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_crypto_rust_future_complete_f64: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_crypto_rust_future_complete_i16: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_crypto_rust_future_complete_i32: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_crypto_rust_future_complete_i64: (a: bigint, b: number) => bigint;
    readonly ffi_matrix_sdk_crypto_rust_future_complete_i8: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_crypto_rust_future_complete_rust_buffer: (a: number, b: bigint, c: number) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_complete_u16: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_crypto_rust_future_complete_u32: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_crypto_rust_future_complete_u64: (a: bigint, b: number) => bigint;
    readonly ffi_matrix_sdk_crypto_rust_future_complete_u8: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_crypto_rust_future_complete_void: (a: bigint, b: number) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_free_f32: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_free_f64: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_free_i16: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_free_i32: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_free_i64: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_free_i8: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_free_rust_buffer: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_free_u16: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_free_u32: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_free_u64: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_free_u8: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_free_void: (a: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_poll_f32: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_poll_f64: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_poll_i16: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_poll_i32: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_poll_i64: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_poll_i8: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_poll_rust_buffer: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_poll_u16: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_poll_u32: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_poll_u64: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_poll_u8: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rust_future_poll_void: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_crypto_rustbuffer_alloc: (a: number, b: bigint, c: number) => void;
    readonly ffi_matrix_sdk_crypto_rustbuffer_free: (a: number, b: number) => void;
    readonly ffi_matrix_sdk_crypto_rustbuffer_from_bytes: (a: number, b: number, c: number) => void;
    readonly ffi_matrix_sdk_crypto_rustbuffer_reserve: (a: number, b: number, c: bigint, d: number) => void;
    readonly ffi_matrix_sdk_common_rust_future_cancel_f32: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_cancel_f64: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_cancel_i16: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_cancel_i32: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_cancel_i64: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_cancel_i8: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_cancel_rust_buffer: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_cancel_u16: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_cancel_u32: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_cancel_u64: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_cancel_u8: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_cancel_void: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_complete_f32: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_common_rust_future_complete_f64: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_common_rust_future_complete_i16: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_common_rust_future_complete_i32: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_common_rust_future_complete_i64: (a: bigint, b: number) => bigint;
    readonly ffi_matrix_sdk_common_rust_future_complete_i8: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_common_rust_future_complete_rust_buffer: (a: number, b: bigint, c: number) => void;
    readonly ffi_matrix_sdk_common_rust_future_complete_u16: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_common_rust_future_complete_u32: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_common_rust_future_complete_u64: (a: bigint, b: number) => bigint;
    readonly ffi_matrix_sdk_common_rust_future_complete_u8: (a: bigint, b: number) => number;
    readonly ffi_matrix_sdk_common_rust_future_complete_void: (a: bigint, b: number) => void;
    readonly ffi_matrix_sdk_common_rust_future_free_f32: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_free_f64: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_free_i16: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_free_i32: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_free_i64: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_free_i8: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_free_rust_buffer: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_free_u16: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_free_u32: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_free_u64: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_free_u8: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_free_void: (a: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_poll_f32: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_poll_f64: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_poll_i16: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_poll_i32: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_poll_i64: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_poll_i8: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_poll_rust_buffer: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_poll_u16: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_poll_u32: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_poll_u64: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_poll_u8: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_common_rust_future_poll_void: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_matrix_sdk_common_rustbuffer_alloc: (a: number, b: bigint, c: number) => void;
    readonly ffi_matrix_sdk_common_rustbuffer_free: (a: number, b: number) => void;
    readonly ffi_matrix_sdk_common_rustbuffer_from_bytes: (a: number, b: number, c: number) => void;
    readonly ffi_matrix_sdk_common_rustbuffer_reserve: (a: number, b: number, c: bigint, d: number) => void;
    readonly ffi_ruma_events_rust_future_cancel_f32: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_cancel_f64: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_cancel_i16: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_cancel_i32: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_cancel_i64: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_cancel_i8: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_cancel_rust_buffer: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_cancel_u16: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_cancel_u32: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_cancel_u64: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_cancel_u8: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_cancel_void: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_complete_f32: (a: bigint, b: number) => number;
    readonly ffi_ruma_events_rust_future_complete_f64: (a: bigint, b: number) => number;
    readonly ffi_ruma_events_rust_future_complete_i16: (a: bigint, b: number) => number;
    readonly ffi_ruma_events_rust_future_complete_i32: (a: bigint, b: number) => number;
    readonly ffi_ruma_events_rust_future_complete_i64: (a: bigint, b: number) => bigint;
    readonly ffi_ruma_events_rust_future_complete_i8: (a: bigint, b: number) => number;
    readonly ffi_ruma_events_rust_future_complete_rust_buffer: (a: number, b: bigint, c: number) => void;
    readonly ffi_ruma_events_rust_future_complete_u16: (a: bigint, b: number) => number;
    readonly ffi_ruma_events_rust_future_complete_u32: (a: bigint, b: number) => number;
    readonly ffi_ruma_events_rust_future_complete_u64: (a: bigint, b: number) => bigint;
    readonly ffi_ruma_events_rust_future_complete_u8: (a: bigint, b: number) => number;
    readonly ffi_ruma_events_rust_future_complete_void: (a: bigint, b: number) => void;
    readonly ffi_ruma_events_rust_future_free_f32: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_free_f64: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_free_i16: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_free_i32: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_free_i64: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_free_i8: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_free_rust_buffer: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_free_u16: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_free_u32: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_free_u64: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_free_u8: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_free_void: (a: bigint) => void;
    readonly ffi_ruma_events_rust_future_poll_f32: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_ruma_events_rust_future_poll_f64: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_ruma_events_rust_future_poll_i16: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_ruma_events_rust_future_poll_i32: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_ruma_events_rust_future_poll_i64: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_ruma_events_rust_future_poll_i8: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_ruma_events_rust_future_poll_rust_buffer: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_ruma_events_rust_future_poll_u16: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_ruma_events_rust_future_poll_u32: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_ruma_events_rust_future_poll_u64: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_ruma_events_rust_future_poll_u8: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_ruma_events_rust_future_poll_void: (a: bigint, b: number, c: bigint) => void;
    readonly ffi_ruma_events_rustbuffer_alloc: (a: number, b: bigint, c: number) => void;
    readonly ffi_ruma_events_rustbuffer_free: (a: number, b: number) => void;
    readonly ffi_ruma_events_rustbuffer_from_bytes: (a: number, b: number, c: number) => void;
    readonly ffi_ruma_events_rustbuffer_reserve: (a: number, b: number, c: bigint, d: number) => void;
    readonly wasm_bindgen_4dd230343bba0616___convert__closures_____invoke___wasm_bindgen_4dd230343bba0616___JsValue__core_608f92abc48d28da___result__Result_____wasm_bindgen_4dd230343bba0616___JsError___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_4dd230343bba0616___convert__closures_____invoke___web_sys_23e6a97038fe64e9___features__gen_IdbVersionChangeEvent__IdbVersionChangeEvent__core_608f92abc48d28da___result__Result_____wasm_bindgen_4dd230343bba0616___JsValue___true_: (a: number, b: number, c: any) => [number, number];
    readonly wasm_bindgen_4dd230343bba0616___convert__closures_____invoke___web_sys_23e6a97038fe64e9___features__gen_Event__Event______true_: (a: number, b: number, c: any) => void;
    readonly wasm_bindgen_4dd230343bba0616___convert__closures_____invoke_______true_: (a: number, b: number) => void;
    readonly wasm_bindgen_4dd230343bba0616___convert__closures_____invoke_______true__1_: (a: number, b: number) => void;
    readonly wasm_bindgen_4dd230343bba0616___convert__closures_____invoke_______true__2_: (a: number, b: number) => void;
    readonly __wbindgen_malloc: (a: number, b: number) => number;
    readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_exn_store: (a: number) => void;
    readonly __externref_table_alloc: () => number;
    readonly __wbindgen_externrefs: WebAssembly.Table;
    readonly __wbindgen_free: (a: number, b: number, c: number) => void;
    readonly __wbindgen_destroy_closure: (a: number, b: number) => void;
    readonly __externref_table_dealloc: (a: number) => void;
    readonly __wbindgen_start: () => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
