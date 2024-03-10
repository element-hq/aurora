// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use anyhow::{anyhow, Result};
use imbl::Vector;
use ruma::{events::room::message::RoomMessageEventContent, ServerName};
use std::sync::Arc;
use matrix_sdk::{
    config::StoreConfig, matrix_auth::MatrixSession, AuthSession, Client, RoomInfo, RoomListEntry, SqliteCryptoStore
};
use futures_util::StreamExt;
use futures_core::stream::BoxStream;
use eyeball_im::VectorDiff;
use matrix_sdk::ruma::RoomId;
use matrix_sdk_sqlite::SqliteStateStore;
use matrix_sdk_ui::{
    sync_service::SyncService, timeline::{RoomExt, TimelineItem}
};
use serde::{Deserialize, Serialize};
use url::Url;
use tauri::Manager;
use futures::{future::{
    AbortHandle, Abortable
}, lock::Mutex, stream::{Aborted}};
use tracing::{error, info, warn};

// create the error type that represents all errors possible in our program
#[derive(Debug, thiserror::Error)]
enum Error {
    #[error(transparent)]
    Io(#[from] std::io::Error),

    #[error(transparent)]
    OpenStore(#[from] matrix_sdk_sqlite::OpenStoreError),

    #[error(transparent)]
    MatrixSdk(#[from] matrix_sdk::Error),

    #[error(transparent)]
    SerdeJson(#[from] serde_json::Error),

    #[error(transparent)]
    ClientBuild(#[from] matrix_sdk::ClientBuildError),

    #[error(transparent)]
    EventCache(#[from] matrix_sdk::event_cache::EventCacheError),

    #[error(transparent)]
    SyncService(#[from] matrix_sdk_ui::sync_service::Error),

    #[error(transparent)]
    RoomListService(#[from] matrix_sdk_ui::room_list_service::Error),

    #[error(transparent)]
    IdParse(#[from] ruma::IdParseError),

    #[error(transparent)]
    Aborted(#[from] Aborted),

    #[error(transparent)]
    Other(#[from] anyhow::Error),
}

// we must manually implement serde::Serialize
impl serde::Serialize for Error {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::ser::Serializer,
    {
        serializer.serialize_str(self.to_string().as_ref())
    }
}

#[derive(Serialize, Deserialize, Debug)]
struct LoginParams {
    homeserver: Url,
    user_name: String,
    password: String,
}

struct AppState<'a> {
    // we also use the client mutex to force calls from JS to execute in series
    client: Mutex<Option<Client>>,

    sync_service: Mutex<Option<SyncService>>,

    timeline_stream: Mutex<Option<BoxStream<'a, VectorDiff<Arc<TimelineItem>>>>>,
    abort_timeline_poll: Mutex<Option<AbortHandle>>,

    roomlist_stream: Mutex<Option<BoxStream<'a, Vec<VectorDiff<RoomListEntry>>>>>,
    abort_roomlist_poll: Mutex<Option<AbortHandle>>,
}

#[tauri::command]
async fn reset<'a>(state: tauri::State<'_, AppState<'a>>) -> Result<(), Error> {
    info!("Resetting app state");

    // N.B. you *must* assign the guard otherwise it will fall out of scope the next statement
    // and the lock will immediately be dropped having been acquired.
    let _guard = state.client.lock().await.take();
    
    info!("Resetting sync service");
    let sync_service = state.sync_service.lock().await.take();
    match sync_service.as_ref() {
        None => {},
        Some(ss) => {
            info!("Stopping sync service");
            ss.stop().await?;
            // kick the pollers to release the stream locks.
            info!("Interrupting timeline poll on reset");
            match state.abort_timeline_poll.lock().await.take() {
                None => {},
                Some(handle) => handle.abort(),
            }
            info!("Interrupting roomlist poll on reset");
            match state.abort_roomlist_poll.lock().await.take() {
                None => {},
                Some(handle) => handle.abort(),
            }
        },
    }

    // now the pollers have released the stream locks, we can grab them
    info!("Resetting timeline_stream");
    state.timeline_stream.lock().await.take();

    info!("Resetting roomlist_stream");
    state.roomlist_stream.lock().await.take();

    info!("Reset app state");
    Ok(())
}

#[tauri::command]
async fn login<'a>(params: LoginParams, state: tauri::State<'_, AppState<'a>>) -> Result<(), Error> {
    let mut locked_client = state.client.lock().await;
    info!("Logging in.");

    let builder = Client::builder()
        //.homeserver_url(params.homeserver)
        .server_name(&ServerName::parse("matrix.org")?)
        .store_config(
            StoreConfig::default()
                .crypto_store(SqliteCryptoStore::open("/tmp/crypto.sqlite", None).await?)
                .state_store(SqliteStateStore::open("/tmp/state.sqlite", None).await?),
        );

    let client = builder.build().await?;

    // Try reading from /tmp/session.json
    if let Ok(serialized) = std::fs::read_to_string("/tmp/session.json") {
        let session: MatrixSession = serde_json::from_str(&serialized)?;
        client.restore_session(session).await?;
        info!("restored session");
    } else {
        client
            .matrix_auth()
            .login_username(&params.user_name, &params.password)
            .initial_device_display_name("rust-sdk")
            .await?;
        info!("new login");

        if let Some(session) = client.session() {
            let AuthSession::Matrix(session) = session else { panic!("unexpected oidc session") };
            let serialized = serde_json::to_string(&session)?;
            std::fs::write("/tmp/session.json", serialized)?;
            info!("saved session");
        }
    }

    info!("starting sync service");
    let sync_service = SyncService::builder(client.clone()).build().await?;
    sync_service.start().await;
    info!("started sync service");
    
    *state.sync_service.lock().await = Some(sync_service);
    *locked_client = Some(client);

    Ok(())
}

// XXX: this is starting to feel like the FFI, except without typing.
// Perhaps we should use the uniffi FFI, but relying on its datastructures being serialisable via serde
// rather than uniffi::Record derives for now.

#[tauri::command]
async fn subscribe_timeline<'a>(room_id: String, state: tauri::State<'_, AppState<'a>>) -> Result<Vector<Arc<TimelineItem>>, Error> {
    let _guard = state.client.lock().await.take();
    info!("subscribing to timeline for {room_id:#?}");

    // FIXME: technically we should subscribe to rooms rather than just timelines. Although
    // given we're running with all_rooms, we might not need to?

    // FIXME: track multiple timelines, rather than assume that there's only one active at a time
    let mut locked_timeline_stream = state.timeline_stream.lock().await;
    if !locked_timeline_stream.is_none() {
        return Err(Error::Other(anyhow!("timeline already subscribed")));
    }

    let sync_service = state.sync_service.lock().await;
    let room_list_service = sync_service.as_ref().unwrap().room_list_service();
    let id = RoomId::parse(room_id).unwrap();
    let Ok(ui_room) = room_list_service.room(&id).await else {
        return Err(Error::Other(anyhow!("couldn't get room")));
    };

    if !ui_room.is_timeline_initialized() {
        let builder = match ui_room.default_room_timeline_builder().await {
            Ok(builder) => builder,
            Err(err) => {
                return Err(Error::Other(anyhow!("error when getting default timeline builder: {err}")));
            }
        };

        if let Err(err) = ui_room.init_timeline_with_builder(builder).await {
            return Err(Error::Other(anyhow!("error when creating default timeline: {err}")));
        }
    }

    let (items, stream) = ui_room.timeline().unwrap().subscribe().await;
    info!("Initial timeline items: {items:#?}");
    *locked_timeline_stream = Some(Box::pin(stream));
    Ok(items)
}

#[tauri::command]
async fn get_timeline_update<'a>(state: tauri::State<'_, AppState<'a>>) -> Result<VectorDiff<Arc<TimelineItem>>, Error> {
    info!("Calling get_timeline_update");
    state.client.lock().await; // deliberately discard the lock once we have it
    info!("get_timeline_update got and discarded client lock");

    let mut timeline_stream = state.timeline_stream.lock().await;
    let Some(stream) = timeline_stream.as_mut() else {
        warn!("Can't get from nonexistent timeline_stream");
        return Err(Error::Other(anyhow!("timeline stream terminated")));
    };

    info!("Pulling next timeline diff");

    // FIXME: we should terminate this by consuming a blank entry from the stream.
    // but we're not getting one, so instead provide an abort handle.
    let (abort_handle, abort_registration) = AbortHandle::new_pair();
    *state.abort_timeline_poll.lock().await = Some(abort_handle);
    let future = Abortable::new(stream.next(), abort_registration);
    let diff = future.await?;
    info!("Received a timeline diff: {diff:#?}");
    match diff {
        Some(d) => { Ok(d) },
        None => { Err(Error::Other(anyhow!("timeline terminated"))) },
    }
}

#[tauri::command]
async fn unsubscribe_timeline<'a>(room_id: String, state: tauri::State<'_, AppState<'a>>) -> Result<(), Error> {
    let _guard = state.client.lock().await.take();
    info!("unsubscribing from timeline {room_id:#?}");

    // kick the poller to release the timeline_stream lock, otherwise we'll deadlock
    match state.abort_timeline_poll.lock().await.take() {
        None => {},
        Some(handle) => {
            info!("Interrupting timeline on unsubscribe {room_id:#?}");
            handle.abort();
        },
    }

    // now grab the lock to remove the old stream
    state.timeline_stream.lock().await.take();

    // now actually unsubscribe
    let sync_service = state.sync_service.lock().await;
    let room_list_service = sync_service.as_ref().unwrap().room_list_service();
    let id = RoomId::parse(room_id.clone()).unwrap();
    let Ok(ui_room) = room_list_service.room(&id).await else {
        return Err(Error::Other(anyhow!("couldn't get room")));
    };
    ui_room.unsubscribe();
    
    info!("unsubscribed from timeline poll {room_id:#?}");
    Ok(())
}

#[tauri::command]
async fn subscribe_roomlist<'a>(state: tauri::State<'_, AppState<'a>>) -> Result<Vector<RoomListEntry>, Error> {
    let _guard = state.client.lock().await.take();
    info!("subscribing to roomlist");

    let mut locked_roomlist_stream = state.roomlist_stream.lock().await;
    if !locked_roomlist_stream.is_none() {
        error!("roomlist already subscribed - roomlist stream already exists");
        return Err(Error::Other(anyhow!("roomlist already subscribed")));
    }

    let sync_service = state.sync_service.lock().await;
    let room_list_service = sync_service.as_ref().unwrap().room_list_service();

    info!("getting all_rooms");

    // XXX: should we be paginating in the roomlist rather than using all_rooms?
    let all_rooms = room_list_service.all_rooms().await?;
    let (rooms, stream) = all_rooms.entries();

    info!("Initial roomlist items: {rooms:#?}");        

    *locked_roomlist_stream = Some(Box::pin(stream));
    Ok(rooms)        
}

#[tauri::command]
async fn get_roomlist_update<'a>(state: tauri::State<'_, AppState<'a>>) -> Result<Vec<VectorDiff<RoomListEntry>>, Error> {
    info!("Calling get_roomlist_update");
    state.client.lock().await; // deliberately discard after
    info!("get_roomlist_update got and discarded client lock");

    let mut roomlist_stream = state.roomlist_stream.lock().await;  
    let Some(stream) = roomlist_stream.as_mut() else {
        warn!("can't get from nonexistent roomlist_stream");
        return Err(Error::Other(anyhow!("roomlist stream terminated")))
    };

    info!("Pulling next roomlist diff");

    let (abort_handle, abort_registration) = AbortHandle::new_pair();
    *state.abort_roomlist_poll.lock().await = Some(abort_handle);
    let future = Abortable::new(stream.next(), abort_registration);
    let diffs = future.await?;
    info!("Received roomlist diffs: {diffs:#?}");
    match diffs {
        Some(d) => {
            if d.is_empty() {
                roomlist_stream.take();
                info!("roomlist stream terminated");
                return Err(Error::Other(anyhow!("roomlist stream terminated")))
            } else {
                Ok(d)
            }
        },
        None => {
            roomlist_stream.take();
            info!("roomlist stream terminated by entirely null item");
            return Err(Error::Other(anyhow!("roomlist stream terminated by entirely null item")))
            },
    }
}

#[tauri::command]
async fn unsubscribe_roomlist<'a>(state: tauri::State<'_, AppState<'a>>) -> Result<(), Error> {
    let _guard = state.client.lock().await.take();
    info!("unsubscribing from roomlist");
    // kick the poller to release the roomlist_stream lock.
    match state.abort_roomlist_poll.lock().await.take() {
        None => {},
        Some(handle) => handle.abort(),
    }
    // actually remove the roomlist_stream, now it's freed up
    state.roomlist_stream.lock().await.take();
    // TODO: is there actually a way to unsubscribe from the roomlist?
    info!("unsubscribed from roomlist");
    Ok(())
}

// XXX: how slow are all these tauri invocations?
// should we batch up the room infos when subscribing to the roomlist instead?
#[tauri::command]
async fn get_room_info<'a>(room_id: String, state: tauri::State<'_, AppState<'a>>) -> Result<RoomInfo, Error> {
    let sync_service = state.sync_service.lock().await;
    let room_list_service = sync_service.as_ref().unwrap().room_list_service();
    let id = RoomId::parse(room_id).unwrap();
    let Ok(ui_room) = room_list_service.room(&id).await else {
        return Err(Error::Other(anyhow!("couldn't get room")));
    };
    let room_info = ui_room.clone_info();
    Ok(room_info)
}

#[tauri::command]
async fn send_message<'a>(room_id: String, msg: String, state: tauri::State<'_, AppState<'a>>) -> Result<(), Error> {
    let sync_service = state.sync_service.lock().await;
    let room_list_service = sync_service.as_ref().unwrap().room_list_service();
    let id = RoomId::parse(room_id).unwrap();
    let Ok(ui_room) = room_list_service.room(&id).await else {
        return Err(Error::Other(anyhow!("couldn't get room")));
    };

    let content = RoomMessageEventContent::text_plain(msg);
    ui_room.send(content).await.unwrap();
    Ok(())
}

fn main() {
    tracing_subscriber::fmt::init();

    tauri::Builder::default()
        .setup(|app| {
            #[cfg(debug_assertions)]
            {
                let window = app.get_window("main").unwrap();
                window.open_devtools();
                window.close_devtools();
            }
            Ok(())
        })
        .manage(AppState {
            client: Default::default(),
            sync_service: Default::default(),
            timeline_stream: Default::default(),
            abort_timeline_poll: Default::default(),
            roomlist_stream: Default::default(),
            abort_roomlist_poll: Default::default(),
        })
        .invoke_handler(tauri::generate_handler![
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
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
