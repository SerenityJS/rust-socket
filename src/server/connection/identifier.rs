use napi_derive::napi;
use std::{hash::Hash, net::SocketAddr};

#[napi(object)]
#[derive(Clone, PartialEq, Eq)]
pub struct NetworkIdentifier {
  /**
   * The address of the connection.
  */
  pub address: String,

  /**
   * The port of the connection.
  */
  pub port: u16,
}

// Implments the ToOwned trait for the NetworkIdentifier struct.
// This is needed to convert a reference to a NetworkIdentifier into an owned instance.
// impl ToOwned for NetworkIdentifier {
//   type Owned = NetworkIdentifier;

//   fn to_owned(&self) -> Self::Owned {
//     NetworkIdentifier {
//       address: self.address.to_owned(),
//       port: self.port,
//     }
//   }
// }

impl NetworkIdentifier {
  /**
   * Create a new instance of the NetworkIdentifier struct.
  */
  pub fn new(address: String, port: u16) -> Self {
    Self { address, port }
  }

  /**
   * Create a new instance of the NetworkIdentifier struct from a SocketAddr.
  */
  pub fn from(addr: SocketAddr) -> Self {
    Self {
      address: addr.ip().to_string(),
      port: addr.port(),
    }
  }

  /**
   * Convert the NetworkIdentifier struct into a SocketAddr.
  */
  pub fn to_socket_addr(&self) -> SocketAddr {
    format!("{}:{}", self.address, self.port).parse().unwrap()
  }
}

impl Hash for NetworkIdentifier {
  fn hash<H: std::hash::Hasher>(&self, state: &mut H) {
    self.address.hash(state);
    self.port.hash(state);
  }
}