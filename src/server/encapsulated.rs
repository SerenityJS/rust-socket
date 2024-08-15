use napi::bindgen_prelude::Buffer;
use napi_derive::napi;

use super::connection::NetworkIdentifier;

#[napi(object)]
pub struct Encapsulated {
  pub identifier: NetworkIdentifier,
  pub buffer: Buffer,
  pub delta_time: u32,
}
