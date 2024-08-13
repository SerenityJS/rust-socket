use std::net::UdpSocket;

use napi::{Error, Result, Status::GenericFailure};
use napi_derive::napi;

use super::server::Server;

#[napi]
impl Server {
  #[napi(constructor)]
  pub fn new(address: String, port: Option<u16>) -> Result<Self> {
    let address = address.clone();

    return Self::create(address, port);
  }

  pub fn create(address: String, port: Option<u16>) -> Result<Self> {
    // Format the address and port into a string
    let port = port.unwrap_or(19132);
    let addr = format!("{}:{}", address, port);
    
    // Attempt to create a socket and bind it to the address and port
    let socket = match UdpSocket::bind(addr) {
      Ok(socket) => socket,
      Err(error) => return Err(Error::new(GenericFailure, error.to_string())),
    };
    
        // Set the socket to non-blocking mode
    match socket.set_nonblocking(true) {
      Ok(_) => return Ok(Self {
        address,
        port,
        socket,
        connections: vec![],
      }),
      Err(error) => return Err(Error::new(GenericFailure, error.to_string())),
    }
  }
}