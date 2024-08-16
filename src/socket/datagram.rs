use napi::bindgen_prelude::Buffer;
use napi_derive::napi;

use super::identifier::NetworkIdentifier;

/**
 * A datagram is a packet of data that is sent over a network from one device to another.
 */
#[napi(object)]
#[derive(Clone)]
pub struct Datagram {
  /**
   * The identifier that sent the datagram.
  */
  pub identifier: NetworkIdentifier,

  /**
   * The buffer that contains the data of the datagram.
  */
  pub buffer: Buffer,
  
  /**
   * The size of the buffer.
  */
  pub size: u32,
}

impl Datagram {
  /**
   * Create a new instance of the Datagram struct.
   */
  pub fn new(identifier: NetworkIdentifier, buffer: Buffer, size: u32) -> Self {
    Self { identifier, buffer, size }
  } 
}