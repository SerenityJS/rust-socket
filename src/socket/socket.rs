#![deny(clippy::all)]

use napi::{bindgen_prelude::Buffer, threadsafe_function::ThreadsafeFunction, Error, Result};
use napi_derive::napi;
use std::{net::UdpSocket, sync::{Arc, Mutex}};

use super::{datagram::Datagram, identifier::NetworkIdentifier};

#[napi]

pub struct Socket {
  /**
   * The address of the socket.
  */
  pub address: String,

  /**
   * The port of the socket.
  */
  pub port: u16,

  /**
   * The ticks per second of the server.
  */
  pub tps: u32,


  #[napi(skip)]
  pub socket: Arc<Mutex<UdpSocket>>,

  #[napi(skip)]
  pub alive: Arc<Mutex<bool>>
}

#[napi]
impl Socket {
  #[napi(constructor)]
  pub fn new (address: String, port: Option<u16>, tps: Option<u32>) -> Result<Self> {
    // Get the port or default to 19132
    let port = port.unwrap_or(19132);
    let tps = tps.unwrap_or(100);
    let alive = Arc::new(Mutex::new(true));

    // Format the address & port
    let addr = format!("{}:{}", address, port);

    // Bind the socket to the address
    let socket = match UdpSocket::bind(addr) {
      Ok(socket) => socket,
      Err(err) => return Err(Error::new(napi::Status::GenericFailure, err.to_string())),
    };

    // Set the socket to non-blocking
    socket.set_nonblocking(true)?;

    // Create a new Arc<Mutex<UdpSocket>> instance
    let socket = Arc::new(Mutex::new(socket));

    // Return the new UdpSocket instance
    return Ok(Self { address, port, socket, tps, alive });
  }

  #[napi]
  pub fn start(&mut self, recv: ThreadsafeFunction<Datagram>) -> Result<()> {
    // Clone the socket & recv function
    let socket = self.socket.clone();
    let recv = recv.clone();
    let tps = self.tps.clone();
    let alive = self.alive.clone();

    // Spawn a new thread to handle incoming packets
    std::thread::spawn(move || {
      // Create a buffer to store the incoming packet
      let mut buf = [0; 2048];

      // Loop to receive packets
      loop {
        // Lock the alive mutex
        let alive = alive.lock().unwrap();

        // Check if the socket is alive
        if !*alive { break }
        
        // Lock the socket
        let socket = socket.lock().unwrap();

        // Receive the packet
        let (size, addr) = match socket.recv_from(&mut buf) {
          Ok((size, addr)) => (size, addr),
          Err(_) => continue,
        };

        // Check if the size is 0
        // TODO: Callback an error
        if size == 0 { continue }

        // Resize the buffer to the size of the packet
        let buf = &buf[..size];
        let buffer = Buffer::from(buf);

        let identifier = NetworkIdentifier::from_addr(addr);

        // Create a new Datagram instance
        let datagram = Datagram::new(identifier, buffer, size as u32);

        // Call the recv function
        recv.call(Ok(datagram), napi::threadsafe_function::ThreadsafeFunctionCallMode::NonBlocking);

        // Sleep the thread using the TPS
        std::thread::sleep(std::time::Duration::from_millis(1000 / tps as u64));
      }
    });

    return Ok(());
  }

  #[napi]
  pub fn stop(&mut self) -> Result<()> {
    // Set the socket to not alive
    let mut alive = self.alive.lock().unwrap();
    *alive = false;

    return Ok(());
  }

  #[napi]
  pub fn send(&self, identifier: NetworkIdentifier, buffer: Buffer) -> Result<()> {
    // Lock the socket
    let socket = self.socket.lock().unwrap();
    let addr = identifier.to_addr();
    let buf = buffer.to_vec();

    // Send the packet
    match socket.send_to(&buf, addr) {
      Ok(_) => (),
      Err(err) => return Err(Error::new(napi::Status::GenericFailure, err.to_string())),
    }

    return Ok(());
  }
}