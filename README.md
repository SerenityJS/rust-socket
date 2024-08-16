# @serenityjs/rust-socket

Rust socket is a UdpSocket wrapper written in Rust to provide a stable streaming of Datagram in NodeJS.

```ts
import { Socket } from "@serenityjs/rust-socket"
import { BinaryStream } from "@serenityjs/binarystream"

// Create a new Socket instance.
const socket = new Socket("0.0.0.0", 19132, 100) // Address, Port, TPS

// Start and listen for data.
socket.start((error, datagram) => {
  // Check if any error we received.
  if (error) throw new Error(error);

  // Seperate the values.
  const { identifier, stream } = datagram;

  // Create a new BinaryStream instance.
  const reply = new BinaryStream(stream.getBuffer());

  // Write additional data.
  reply.writeString16("Hello World!")

  // Reply to the incoming datagram!
  datagram.reply(reply);
});

```
