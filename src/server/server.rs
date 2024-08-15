use std::{collections::HashMap, net::UdpSocket, sync::{mpsc::{self, Receiver, Sender}, Arc, Mutex}, thread, vec};
// use binarystream::binary::BinaryStream;
use napi::{bindgen_prelude::Buffer, threadsafe_function::ThreadsafeFunction, Error, Result, Status::GenericFailure};
use napi_derive::napi;


use super::{connection::NetworkIdentifier, encapsulated::Encapsulated};

#[napi]
pub struct Server {
  // Public fields that are exposed to JavaScript
  pub address: String,
  pub port: u16,

  // Private fields that are not exposed to JavaScript
  #[napi(skip)]
  pub socket: UdpSocket,

  #[napi(skip)]
  pub sources: HashMap<NetworkIdentifier, Sender<Vec<u8>>>
}

impl Clone for Server {
  fn clone(&self) -> Self {
    Self {
      address: self.address.clone(),
      port: self.port,
      socket: self.socket.try_clone().unwrap(),
      sources: self.sources.clone(),
    }
  }
}

#[napi]
impl Server {
  #[napi(constructor)]
  pub fn new(address: String, port: Option<u16>) -> Result<Self> {
    let port = port.unwrap_or(19132);
    let addr = format!("{}:{}", address, port);

    let socket = match UdpSocket::bind(addr) {
      Ok(socket) => socket,
      Err(err) => return Err(Error::new(GenericFailure, err.to_string())),
    };

    match socket.set_nonblocking(true) {
      Ok(_) => return Ok(Self { address, port, socket, sources: HashMap::new() }),
      Err(err) => return Err(Error::new(GenericFailure, err.to_string())),
    }
  }

  #[napi]
  pub fn start(&mut self, callback: ThreadsafeFunction<Encapsulated>, tps: u32) -> Result<()> {
    // Get the current time
    let mut time = std::time::SystemTime::now();

    let shared_callback = Arc::new(Mutex::new(callback));

    // Prepare a buffer to store the data
    let mut buffer = [0; 2048];

    // Create a loop that runs at the specified TPS
    loop {
      // Read the data from the socket
      let (size, addr) = match self.socket.recv_from(&mut buffer) {
        Err(_) => continue,
        Ok(data) => data,
      };

      // Resize the buffer to the size of the data
      let buffer = &buffer[..size];

      // Check if the source is already defined
      let source = self.sources.iter()
        .find(|(source, _)| source.address == addr.ip().to_string() && source.port == addr.port());

      // Check is the source is defined
      if source.is_some() {
        // Get the source from the source list
        let (_, sender) = source.unwrap();

        // Send the data to the source
        match sender.send(buffer.to_vec()) {
          Ok(_) => {},
          Err(error) => {
            // // Call the callback function with the error
            // callback.call(
            //   Err(Error::new(GenericFailure, error.to_string())),
            //   napi::threadsafe_function::ThreadsafeFunctionCallMode::NonBlocking
            // );

            // continue the loop
            continue;
          },
        }
      } else {
        // Convert the addr into a NetworkIdentifier
        let identifier = NetworkIdentifier::from(addr);

        // Create a new message channel
        let (sx, rx): (Sender<Vec<u8>>, Receiver<Vec<u8>>) = mpsc::channel();

        // Add the source to the sources list
        self.sources.insert(identifier.clone(), sx);

        // Spawn a new thread to handle the incoming data
        let socket = self.socket.try_clone();
        let callback = shared_callback.clone();

        if socket.is_ok() {
          thread::spawn(move || {
            loop {
              match rx.recv() {
                Ok(data) => {
                  let callback = callback.lock().unwrap();

                  println!("Received data from: {}:{}", identifier.address, identifier.port);

                  // Create a new encapsulated instance
                  let encapsulated = Encapsulated { identifier: identifier.clone(), buffer: Buffer::from(data), delta_time: 0 };

                  // Call the callback function with the encapsulated instance
                  callback.call(Ok(encapsulated), napi::threadsafe_function::ThreadsafeFunctionCallMode::NonBlocking);
                },
                Err(_) => break,
              }
            }
          });
        }
      }

      // Call the callback function with the current TPS
      // callback.call(Ok(tps), napi::threadsafe_function::ThreadsafeFunctionCallMode::NonBlocking);

      // Sleep for the specified amount of time
      thread::sleep(std::time::Duration::from_millis(1000 / tps as u64));

      // Get the current time
      let new_time = std::time::SystemTime::now();

      // Calculate the delta time
      let delta = new_time.duration_since(time).unwrap();

      // Set the time to the new time
      time = new_time;
    }
  }
}

// #[napi]
// impl Server {
//   #[napi]
//   pub fn recv_from(&mut self) {
//     // Create a buffer to store the data
//     let mut buffer = [0; 1024];
//     let (size, addr) = match self.socket.recv_from(&mut buffer) {
//       Err(_) => return,
//       Ok(data) => data,
//     };

//     // Check if the buffer is empty
//     if buffer.len() == 0 { return; }

//     // Resize the buffer to the size of the data
//     let buffer = &buffer[..size];

//     // Convert the addr into a NetworkIdentifier
//     let identifier = NetworkIdentifier::from(addr);

//     // Check if the connection already exists
//     let connection = self.connections.iter()
//       .find(|connection| connection.identifier == identifier);

//     // Check if the connection is defined
//     if connection.is_some() {
//       let connection = connection.unwrap();
      
//       match connection.sender.send(buffer.to_vec()) {
//         Ok(_) => {},
//         Err(error) => panic!("Error sending data to connection: {:?}", error.to_string()),
//       }

//     } else {
//       // Create a new message channel
//       let (sx, rx): (Sender<Vec<u8>>, Receiver<Vec<u8>>) = mpsc::channel();

//       // Create a new connection with the identifier and sender
//       let connection = Connection::new(identifier, sx);
//       let mut identifier = connection.clone();

//       // Add the connection to the connections list
//       self.connections.push(connection);

//       let socket = self.socket.try_clone();

//       if socket.is_ok() {
//         let socket = socket.unwrap();
//         thread::spawn(move || { Connection::start_thread(&mut identifier, socket, rx) });
//       }
//     }

//     // loop {
//     //   // match self.socket.recv_from(&mut buffer) {
//     //   //   Ok((size, addr)) => {
//     //   //     // Convert the addr into a NetworkIdentifier
//     //   //     let identifier = NetworkIdentifier::from(addr);

//     //   //     // Check if the connection already exists
//     //   //     let mut connection = self.connections.iter()
//     //   //       .find(|connection| connection.identifier == identifier);

//     //   //     if connection.is_some() {
//     //   //       let connection = connection.unwrap();
            
//     //   //     } else {
//     //   //       let connection = Connection::new(identifier);

//     //   //       println!("New connection from");

//     //   //       self.connections.push(connection);
//     //   //     }

//     //   //   },
//     //   //   Err(error) => break,
//     //   // }
//     // }
//   }
// }

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
