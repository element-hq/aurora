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
use std::sync::Mutex;

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

    let sync_service = Arc::new(SyncService::builder(client.clone()).build().await?);
    sync_service.start().await;

    *state.client.lock().unwrap() = Some(client);

    Ok(())
}

#[tauri::command]
async fn subscribe_timeline<'a>(room_id: String, state: tauri::State<'_, AppState<'a>>) -> Result<Vector<Arc<TimelineItem>>, Error> {
    // Get the timeline stream and listen to it.
    let client = state.client.lock().unwrap().clone().unwrap();
    let id = RoomId::parse(room_id).unwrap();
    let room = client.get_room(&id).unwrap();
    let timeline = room.timeline().await?;
    let (timeline_items, timeline_stream) = timeline.subscribe().await;

    *state.timeline_stream.lock().unwrap() = Some(Box::pin(timeline_stream));

    println!("Initial timeline items: {timeline_items:#?}");

    Ok(timeline_items)
}

#[tauri::command]
async fn get_timeline_update<'a>(state: tauri::State<'_, AppState<'a>>) -> Result<VectorDiff<Arc<TimelineItem>>, Error> {
    let mut timeline_stream = state.timeline_stream.lock().unwrap().take().unwrap();

    let diff = timeline_stream.next().await.ok_or(anyhow!("no diffs"))?;
    println!("Received a timeline diff: {diff:#?}");
    Ok(diff)
}

fn main() {
    tracing_subscriber::fmt::init();

    tauri::Builder::default()
        .manage(AppState {
            client: Default::default(),
            timeline_stream: Default::default()
        })
        .invoke_handler(tauri::generate_handler![
            login,
            subscribe_timeline,
            get_timeline_update,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
