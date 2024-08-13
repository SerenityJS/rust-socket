use napi::bindgen_prelude::Buffer;
use napi_derive::napi;

use super::network_identifier::NetworkIdentifier;

#[napi(object)]
pub struct Encapsulated {
  pub identifier: NetworkIdentifier,
  pub buffer: Buffer
}
