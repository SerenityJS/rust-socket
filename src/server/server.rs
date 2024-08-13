use std::{net::UdpSocket, sync::mpsc::{self, Receiver, Sender}, thread, vec};
// use binarystream::binary::BinaryStream;
use napi::{Error, Result, Status::GenericFailure};
use napi_derive::napi;


use super::connection::{Connection, NetworkIdentifier};

#[napi]
pub struct Server {
  // Public fields that are exposed to JavaScript
  pub address: String,
  pub port: u16,

  // Private fields that are not exposed to JavaScript
  socket: UdpSocket,
  connections: Vec<Connection>
}

impl Clone for Server {
  fn clone(&self) -> Self {
    Self {
      address: self.address.clone(),
      port: self.port,
      socket: self.socket.try_clone().unwrap(),
      connections: self.connections.clone(),
    }
  }
}

impl Server {
  pub fn new(address: String, port: Option<u16>) -> Result<Self> {
    let port = port.unwrap_or(19132);
    let addr = format!("{}:{}", address, port);

    let socket = match UdpSocket::bind(addr) {
      Ok(socket) => socket,
      Err(err) => return Err(Error::new(GenericFailure, err.to_string())),
    };

    match socket.set_nonblocking(true) {
      Ok(_) => return Ok(Self { address, port, socket, connections: vec![] }),
      Err(err) => return Err(Error::new(GenericFailure, err.to_string())),
    }
  }
}

#[napi]
impl Server {
  #[napi]
  pub fn recv_from(&mut self) {
    // Create a buffer to store the data
    let mut buffer = [0; 1024];
    let (size, addr) = match self.socket.recv_from(&mut buffer) {
      Err(_) => return,
      Ok(data) => data,
    };

    // Check if the buffer is empty
    if buffer.len() == 0 { return; }

    // Resize the buffer to the size of the data
    let buffer = &buffer[..size];

    // Convert the addr into a NetworkIdentifier
    let identifier = NetworkIdentifier::from(addr);

    // Check if the connection already exists
    let connection = self.connections.iter()
      .find(|connection| connection.identifier == identifier);

    // Check if the connection is defined
    if connection.is_some() {
      let connection = connection.unwrap();
      
      match connection.sender.send(buffer.to_vec()) {
        Ok(_) => {},
        Err(error) => panic!("Error sending data to connection: {:?}", error.to_string()),
      }

    } else {
      // Create a new message channel
      let (sx, rx): (Sender<Vec<u8>>, Receiver<Vec<u8>>) = mpsc::channel();

      // Create a new connection with the identifier and sender
      let connection = Connection::new(identifier, sx);
      let mut identifier = connection.clone();

      // Add the connection to the connections list
      self.connections.push(connection);

      let socket = self.socket.try_clone();

      if socket.is_ok() {
        let socket = socket.unwrap();
        thread::spawn(move || { Connection::start_thread(&mut identifier, socket, rx) });
      }
    }

    // loop {
    //   // match self.socket.recv_from(&mut buffer) {
    //   //   Ok((size, addr)) => {
    //   //     // Convert the addr into a NetworkIdentifier
    //   //     let identifier = NetworkIdentifier::from(addr);

    //   //     // Check if the connection already exists
    //   //     let mut connection = self.connections.iter()
    //   //       .find(|connection| connection.identifier == identifier);

    //   //     if connection.is_some() {
    //   //       let connection = connection.unwrap();
            
    //   //     } else {
    //   //       let connection = Connection::new(identifier);

    //   //       println!("New connection from");

    //   //       self.connections.push(connection);
    //   //     }

    //   //   },
    //   //   Err(error) => break,
    //   // }
    // }
  }
}

// #[napi]
// impl Server {
//   #[napi]
//   pub fn get_connection(&self, address: String, port: u16) -> Result<Connection> {
//     for connection in &self.connections {
//       if connection.identifier.address == address && connection.identifier.port == port {
//         return Ok(connection.clone());
//       }
//     }

//     return Err(Error::new(GenericFailure, "Connection not found".to_string()));
//   }
// }
