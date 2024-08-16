use std::net::UdpSocket;

use napi::{bindgen_prelude::Buffer, Result};
use napi_derive::napi;

use super::identifier::NetworkIdentifier;

/**
 * A datagram is a packet of data that is sent over a network from one device to another.
 */
#[napi]
// #[derive(Clone)]
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

  #[napi(skip)]
  pub socket: UdpSocket,
}

#[napi]
impl Datagram {
  /**
   * Create a new instance of the Datagram struct.
   */
  pub fn new(identifier: NetworkIdentifier, buffer: Buffer, size: u32, socket: UdpSocket) -> Self {
    Self { identifier, buffer, size, socket }
  } 

  #[napi]
  pub fn reply(&self, buffer: Buffer) -> Result<()> {
    match self.socket.send_to(&buffer, self.identifier.to_addr()) {
      Ok(_) => Ok(()),
      Err(err) => Err(err.into())
    }
  }
}