mod server;

// use napi::{threadsafe_function::{ThreadsafeFunction, ThreadsafeFunctionCallMode}, Result};
// use server::Server;
// use napi_derive::napi;

// #[napi]
// pub fn create_raknet_server(address: String, port: Option<u16>) -> Result<Server> {
//   return Server::new(address, port);
// }

// #[napi]
// pub fn test(callback: ThreadsafeFunction<u8>) -> Result<()> {

//   let value = 32 as u8;

//   callback.call(Ok(value), ThreadsafeFunctionCallMode::NonBlocking);

//   return Ok(());
// }