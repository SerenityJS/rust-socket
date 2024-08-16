use std::net::UdpSocket;

use napi::bindgen_prelude::{Buffer, Result};
use napi_derive::napi;
use binarystream::binary::BinaryStream;

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
   * The binary stream that contains the data.
  */
  pub stream: BinaryStream,
  
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
    // Create a new BinaryStream from the buffer.
    let stream = BinaryStream::new(Some(buffer), None);

    Self { identifier, stream, size, socket }
  } 

  #[napi]
  pub fn reply(&self, stream: BinaryStream) -> Result<()> {
    match self.socket.send_to(&stream.binary, self.identifier.to_addr()) {
      Ok(_) => Ok(()),
      Err(err) => Err(err.into())
    }
  }
}