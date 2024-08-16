import test from 'ava'

import { Socket } from '../index.js'

test('Socket', t => {
  const socket = new Socket("0.0.0.0")
  t.is(typeof socket, 'object')
  t.is(typeof socket.address, 'string')
  t.is(typeof socket.port, 'number')
  t.is(typeof socket.start, 'function')
  t.is(typeof socket.stop, 'function')
  t.is(typeof socket.send, 'function')
})
