use napi_derive::napi;

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

impl NetworkIdentifier {
  pub fn from_addr(addr: std::net::SocketAddr) -> Self {
    Self {
      address: addr.ip().to_string(),
      port: addr.port(),
    }
  }

  pub fn to_addr(&self) -> std::net::SocketAddr {
    format!("{}:{}", self.address, self.port).parse().unwrap()
  }
}
