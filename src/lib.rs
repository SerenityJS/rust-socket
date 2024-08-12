use binarystream::binary::BinaryStream;
use napi_derive::napi;
use napi::bindgen_prelude::Buffer;

#[napi]
pub fn test(number: u8) {

  let buffer = Buffer::from(vec![]);

  let mut stream: BinaryStream = BinaryStream::new(Option::Some(buffer), Option::Some(0));

  stream.write_uint8(number);
  
  let result = stream.read_uint8().unwrap();

  println!("{:?}", result);
}