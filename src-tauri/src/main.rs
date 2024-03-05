// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use anyhow::{anyhow, Result};
use imbl::Vector;
use ruma::{OwnedServerName, ServerName};
use tracing_subscriber::fmt::time;
use std::sync::Arc;
use matrix_sdk::{
    config::{
        StoreConfig, SyncSettings
    }, matrix_auth::MatrixSession, AuthSession, Client, SqliteCryptoStore
};
use futures_util::StreamExt;
use futures_core::stream::BoxStream;
use eyeball_im::VectorDiff;
use matrix_sdk::ruma::RoomId;
use matrix_sdk_sqlite::SqliteStateStore;
use matrix_sdk_ui::{
    sync_service::SyncService, timeline::{RoomExt, TimelineItem, TimelineItemKind}
};
use serde::{Deserialize, Serialize};
use url::Url;
use futures::lock::Mutex;

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
    IdParse(#[from] ruma::IdParseError),

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
    client: Mutex<Option<Client>>,
    sync_service: Mutex<Option<SyncService>>,
    timeline_stream: Mutex<Option<BoxStream<'a, VectorDiff<Arc<TimelineItem>>>>>,
}

#[tauri::command]
async fn login<'a>(params: LoginParams, state: tauri::State<'_, AppState<'a>>) -> Result<(), Error> {
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
        println!("restored session");
    } else {
        client
            .matrix_auth()
            .login_username(&params.user_name, &params.password)
            .initial_device_display_name("rust-sdk")
            .await?;
        println!("new login");

        if let Some(session) = client.session() {
            let AuthSession::Matrix(session) = session else { panic!("unexpected oidc session") };
            let serialized = serde_json::to_string(&session)?;
            std::fs::write("/tmp/session.json", serialized)?;
            println!("saved session");
        }
    }

    println!("starting sync service");
    let sync_service = SyncService::builder(client.clone()).build().await?;
    sync_service.start().await;
    println!("started sync service");
    
    *state.sync_service.lock().await = Some(sync_service);
    *state.client.lock().await = Some(client);

    Ok(())
}

#[tauri::command]
async fn subscribe_timeline<'a>(room_id: String, state: tauri::State<'_, AppState<'a>>) -> Result<Vector<Arc<TimelineItem>>, Error> {
    println!("subscribing to timeline for {room_id:#?}");

    let sync_service = state.sync_service.lock().await;
    let room_list_service = sync_service.as_ref().unwrap().room_list_service();
    let id = RoomId::parse(room_id).unwrap();
    let Ok(ui_room) = room_list_service.room(&id).await else {
        return Err(Error::Other(anyhow!("couldn't get room")));
    };

    // Initialize the timeline.
    let builder = match ui_room.default_room_timeline_builder().await {
        Ok(builder) => builder,
        Err(err) => {
            return Err(Error::Other(anyhow!("error when getting default timeline builder: {err}")));
        }
    };

    if let Err(err) = ui_room.init_timeline_with_builder(builder).await {
        return Err(Error::Other(anyhow!("error when creating default timeline: {err}")));
    }

    let (items, stream) = ui_room.timeline().unwrap().subscribe().await;
    println!("Initial timeline items: {items:#?}");

    *state.timeline_stream.lock().await = Some(Box::pin(stream));
    Ok(items)
}

#[tauri::command]
async fn get_timeline_update<'a>(state: tauri::State<'_, AppState<'a>>) -> Result<VectorDiff<Arc<TimelineItem>>, Error> {
    let mut timeline_stream = state.timeline_stream.lock().await;
    let stream = timeline_stream.as_mut().unwrap();

    println!("Pulling next timeline diff");
    let diff = stream.next().await.ok_or(anyhow!("no diffs"))?;
    println!("Received a timeline diff: {diff:#?}");
    Ok(diff)
}

fn main() {
    tracing_subscriber::fmt::init();

    tauri::Builder::default()
        .manage(AppState {
            client: Default::default(),
            sync_service: Default::default(),
            timeline_stream: Default::default(),
        })
        .invoke_handler(tauri::generate_handler![
            login,
            subscribe_timeline,
            get_timeline_update,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
