use std::{borrow::Borrow, net::{SocketAddr, UdpSocket}, sync::mpsc::{self, Receiver, Sender}, thread::{self, *}};

use napi::Result;
use napi_derive::napi;

use crate::server::server::Server;

use super::identifier::{self, NetworkIdentifier};

use std::thread::current;

#[napi]
pub struct Connection {
  /**
   * The network identifier of the connection.
  */
  pub identifier: NetworkIdentifier,

  /**
   * The maximum transmission unit size of the connection.
  */
  pub mtu_size: u16,

  #[napi(skip)]
  pub sender: Sender<Vec<u8>>,
}

// Clones the Connection struct
impl Clone for Connection {
  fn clone(&self) -> Self {
    Self {
      identifier: NetworkIdentifier {
        address: self.identifier.address.clone(),
        port: self.identifier.port,
      },
      mtu_size: self.mtu_size,
      sender: self.sender.clone(),
    }
  }
}

impl Connection {
  pub fn new(identifier: NetworkIdentifier, sender: Sender<Vec<u8>>) -> Connection {
    let connection = Connection {
      identifier: identifier.to_owned(),
      mtu_size: 1464,
      sender,
    };

    // let handle = thread::spawn(move || { connection.thread(socket, identifier, receiver) });

    return connection;
  }



  pub fn start_thread(connection: &mut Connection, socket: UdpSocket, receiver: Receiver<Vec<u8>>) {

    loop {
      let buffer = match receiver.try_recv() {
        Ok(buffer) => buffer,
        Err(_) => continue,
      };

      print!("Received message {:?}\n", buffer);
    }

  }
}
