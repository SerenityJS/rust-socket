mod server;

use napi::Result;
use server::Server;
use napi_derive::napi;

#[napi]
pub fn create_raknet_server(address: String, port: Option<u16>) -> Result<Server> {
  return Server::new(address, port);
}
