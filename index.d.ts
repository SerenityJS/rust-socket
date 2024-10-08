/* tslint:disable */
/* eslint-disable */

/* auto-generated by NAPI-RS */

export const enum Endianness {
  Big = 0,
  Little = 1
}
export interface NetworkIdentifier {
  /**
  * The address of the connection.
  */
  address: string
  /**
  * The port of the connection.
  */
  port: number
}
export declare class BinaryStream {
  /**
  * **binary**
  *
  * The binary data of the stream.
  */
  binary: Array<number>
  /**
  * **offset**
  *
  * The current offset of the stream.
  */
  offset: number
  /**
  * **readBool**
  *
  * Reads a boolean ( 1 byte ) value from the stream. ( true or false )
  */
  readBool(): boolean
  /**
  * **writeBool**
  *
  * Writes a boolean ( 1 byte ) value to the stream. ( true or false )
  */
  writeBool(value: boolean): void
  /**
  * **readUint8**
  *
  * Reads an unsigned 8-bit ( 1 byte ) integer from the stream. ( 0 to 255 )
  */
  readUint8(): number
  /**
  * **writeUint8**
  *
  * Writes an unsigned 8-bit ( 1 byte ) integer to the stream. ( 0 to 255 )
  */
  writeUint8(value: number): void
  /**
  * **readUint16**
  *
  * Read an unsigned 16-bit ( 2 bytes ) integer from the stream. ( 0 to 65535 )
  */
  readUint16(endian?: Endianness | undefined | null): number
  /**
  * **writeUint16**
  *
  * Write an unsigned 16-bit ( 2 bytes ) integer to the stream. ( 0 to 65535 )
  */
  writeUint16(value: number, endian?: Endianness | undefined | null): void
  /**
  * **readUint24**
  *
  * Reads an unsigned 24-bit ( 3 bytes ) integer from the stream. ( 0 to 16777215 )
  */
  readUint24(endian?: Endianness | undefined | null): number
  /**
  * **writeUint24**
  *
  * Writes an unsigned 24-bit ( 3 bytes ) integer to the stream. ( 0 to 16777215 )
  */
  writeUint24(value: number, endian?: Endianness | undefined | null): void
  /**
  * **readUint32**
  *
  * Reads an unsigned 32-bit ( 4 bytes ) integer from the stream. ( 0 to 4294967295 )
  */
  readUint32(endian?: Endianness | undefined | null): number
  /**
  * **writeUint32**
  *
  * Writes an unsigned 32-bit ( 4 bytes ) integer to the stream. ( 0 to 4294967295 )
  */
  writeUint32(value: number, endian?: Endianness | undefined | null): void
  /**
  * **readUint64**
  *
  * Reads an usigned 64-bit ( 8 bytes ) integer from the stream. ( 0 to 18446744073709551615 )
  */
  readUint64(endian?: Endianness | undefined | null): bigint
  /**
  * **writeUint64**
  *
  * Writes an unsigned 64-bit ( 8 bytes ) integer to the stream. ( 0 to 18446744073709551615 )
  */
  writeUint64(value: bigint, endian?: Endianness | undefined | null): void
  /**
  * **readUShort**
  *
  * Read an unsigned 16-bit ( 2 bytes ) integer from the stream. ( 0 to 65535 )
  */
  readUShort(endian?: Endianness | undefined | null): number
  /**
  * **writeUShort**
  *
  * Write an unsigned 16-bit ( 2 bytes ) integer to the stream. ( 0 to 65535 )
  */
  writeUShort(value: number, endian?: Endianness | undefined | null): void
  /**
  * **readULong**
  *
  * Reads an usigned 64-bit ( 8 bytes ) integer from the stream. ( 0 to 18446744073709551615 )
  */
  readULong(endian?: Endianness | undefined | null): bigint
  /**
  * **writeULong**
  *
  * Writes an unsigned 64-bit ( 8 bytes ) integer to the stream. ( 0 to 18446744073709551615 )
  */
  writeULong(value: bigint, endian?: Endianness | undefined | null): void
  /**
  * **readByte**
  *
  * Reads a signed 8-bit ( 1 byte ) integer from the stream. ( -128 to 127 )
  */
  readByte(): number
  /**
  * **writeByte**
  *
  * Writes a signed 8-bit ( 1 byte ) integer to the stream. ( -128 to 127 )
  */
  writeByte(value: number): void
  /**
  * **readInt8**
  *
  * Reads a signed 8-bit ( 1 byte ) integer from the stream. ( -128 to 127 )
  */
  readInt8(): number
  /**
  * **writeInt8**
  *
  * Writes a signed 8-bit ( 1 byte ) integer to the stream. ( -128 to 127 )
  */
  writeInt8(value: number): void
  /**
  * **readInt16**
  *
  * Reads a signed 16-bit ( 2 bytes ) integer from the stream. ( -32768 to 32767 )
  */
  readInt16(endian?: Endianness | undefined | null): number
  /**
  * **writeInt16**
  *
  * Writes a signed 16-bit ( 2 bytes ) integer to the stream. ( -32768 to 32767 )
  */
  writeInt16(value: number, endian?: Endianness | undefined | null): void
  /**
  * **readInt24**
  *
  * Reads a signed 24-bit ( 3 bytes ) integer from the stream. ( -8388608 to 8388607 )
  */
  readInt24(endian?: Endianness | undefined | null): number
  /**
  * **writeInt24**
  *
  * Writes a signed 24-bit ( 3 bytes ) integer to the stream. ( -8388608 to 8388607 )
  */
  writeInt24(value: number, endian?: Endianness | undefined | null): void
  /**
  * **readInt32**
  *
  * Reads a signed 32-bit ( 4 bytes ) integer from the stream. ( -2147483648 to 2147483647 )
  */
  readInt32(endian?: Endianness | undefined | null): number
  /**
  * **writeInt32**
  *
  * Write a signed 32-bit ( 4 bytes ) integer to the stream. ( -2147483648 to 2147483647 )
  */
  writeInt32(value: number, endian?: Endianness | undefined | null): void
  /**
  * **readInt64**
  *
  * Reads a signed 64-bit ( 8 bytes ) integer from the stream. ( -9223372036854775808 to 9223372036854775807 )
  */
  readInt64(endian?: Endianness | undefined | null): bigint
  /**
  * **writeInt64**
  *
  * Writes a signed 64-bit ( 8 bytes ) integer to the stream. ( -9223372036854775808 to 9223372036854775807 )
  */
  writeInt64(value: bigint, endian?: Endianness | undefined | null): void
  /**
  * **readShort**
  *
  * Reads a signed 16-bit ( 2 bytes ) integer from the stream. ( -32768 to 32767 )
  */
  readShort(endian?: Endianness | undefined | null): number
  /**
  * **writeShort**
  *
  * Writes a signed 16-bit ( 2 bytes ) integer to the stream. ( -32768 to 32767 )
  */
  writeShort(value: number, endian?: Endianness | undefined | null): void
  /**
  * **readLong**
  *
  * Reads a signed 64-bit ( 8 bytes ) integer from the stream. ( -9223372036854775808 to 9223372036854775807 )
  */
  readLong(endian?: Endianness | undefined | null): bigint
  /**
  * **writeLong**
  *
  * Writes a signed 64-bit ( 8 bytes ) integer to the stream. ( -9223372036854775808 to 9223372036854775807 )
  */
  writeLong(value: bigint, endian?: Endianness | undefined | null): void
  /**
  * **readFloat32**
  *
  * Reads a signed 32-bit ( 4 bytes ) integer from the stream. ( -2147483648 to 2147483647 )
  */
  readFloat32(endian?: Endianness | undefined | null): number
  /**
  * **writeFloat32**
  *
  * Write a signed 32-bit ( 4 bytes ) integer to the stream. ( -2147483648 to 2147483647 )
  */
  writeFloat32(value: number, endian?: Endianness | undefined | null): void
  /**
  * **readFloat64**
  *
  * Reads a signed 64 bit ( 8 bytes ) floating point number from the stream. ( -1.7976931348623157e308 to 1.7976931348623157e308 )
  */
  readFloat64(endian?: Endianness | undefined | null): number
  /**
  * **writeFloat64**
  *
  * Writes a signed 64 bit ( 8 bytes ) floating point number to the stream. ( -1.7976931348623157e308 to 1.7976931348623157e308 )
  */
  writeFloat64(value: number, endian?: Endianness | undefined | null): void
  /**
  * **readVarInt**
  *
  * Reads a 32 bit ( 4 bytes ) unsigned variable length integer from the stream. ( 0 to 4294967295 )
  */
  readVarInt(): number
  /**
  * **writeVarInt**
  *
  * Writes a 32 bit ( 4 bytes ) unsigned variable length integer to the stream. ( 0 to 4294967295 )
  */
  writeVarInt(value: number): void
  /**
  * **readZigZag**
  *
  * Reads a 32 bit ( 4 bytes ) zigzag encoded signed variable length integer from the stream. ( -2147483648 to 2147483647 )
  */
  readZigZag(): number
  /**
  * **writeZigZag**
  *
  * Writes a 32 bit ( 4 bytes ) zigzag encoded signed variable length integer to the stream. ( -2147483648 to 2147483647 )
  */
  writeZigZag(value: number): void
  /**
  * **readVarLong**
  *
  * Reads a 64 bit ( 8 bytes ) unsigned variable length integer from the stream. ( 0 to 18446744073709551615 )
  */
  readVarLong(): bigint
  /**
  * **writeVarLong**
  *
  * Writes a 64 bit ( 8 bytes ) unsigned variable length integer to the stream. ( 0 to 18446744073709551615 )
  */
  writeVarLong(value: bigint): void
  /**
  * **readZigZong**
  *
  * Reads a 64 bit ( 8 bytes ) zigzag encoded signed variable length integer from the stream. ( -9223372036854775808 to 9223372036854775807 )
  */
  readZigZong(): bigint
  /**
  * **writeZigZong**
  *
  * Writes a 64 bit ( 8 bytes ) zigzag encoded signed variable length integer to the stream. ( -9223372036854775808 to 9223372036854775807 )
  */
  writeZigZong(value: bigint): void
  /**
  * **readString16**
  *
  * Reads an unsigned 16-bit ( 2 bytes ) utf-8 string from the stream. ( 0 to 65535 )
  */
  readString16(endian?: Endianness | undefined | null): string
  /**
  * **writeString16**
  *
  * Writes an unsigned 16-bit ( 2 bytes ) utf-8 string to the stream. ( 0 to 65535 )
  */
  writeString16(value: string, endian?: Endianness | undefined | null): void
  /**
  * **readString32**
  *
  * Reads a signed 32-bit ( 4 bytes ) utf-8 string from the stream. ( 0 to 4294967295 )
  */
  readString32(endian?: Endianness | undefined | null): string
  /**
  * **writeString32**
  *
  * Writes a signed 32-bit ( 4 bytes ) utf-8 string to the stream. ( 0 to 4294967295 )
  */
  writeString32(value: string, endian?: Endianness | undefined | null): void
  /**
  * **readVarString**
  *
  * Reads a signed 32-bit ( 4 bytes ) utf-8 string from the stream. ( 0 to 4294967295 )
  */
  readVarString(): string
  /**
  * **writeVarString**
  *
  * Writes a signed 32-bit ( 4 bytes ) utf-8 string to the stream. ( 0 to 4294967295 )
  */
  writeVarString(value: string): void
  /**
  * **readUuid**
  *
  * Reads a signed 128-bit ( 16 bytes ) uuid string from the stream.
  */
  readUuid(): string
  /**
  * **writeUuid**
  *
  * Writes a signed 128-bit ( 16 bytes ) uuid string to the stream.
  */
  writeUuid(value: string): void
  /**
  * **BinaryStream**
  *
  * Creates a new BinaryStream with an optional JavaScript Buffer.
  */
  constructor(buffer?: Buffer | undefined | null, offset?: number | undefined | null)
  /**
  * **from**
  *
  * Creates a new BinaryStream from a binary vector.
  */
  static from(binary: Array<number>, offset?: number | undefined | null): BinaryStream
  /**
  * **fromBuffer**
  *
  * Creates a new BinaryStream from a JavaScript Buffer.
  */
  static fromBuffer(buffer: Buffer, offset?: number | undefined | null): BinaryStream
  /**
  * **read**
  *
  * Reads a number of bytes from the stream.
  */
  read(length: number): Array<number>
  /**
  * **readBuffer**
  *
  * Reads a number of bytes from the stream and returns a JavaScript Buffer.
  */
  readBuffer(length: number): Buffer
  /**
  * **write**
  *
  * Writes a number of bytes to the stream.
  */
  write(data: Array<number>): void
  /**
  * **writeBuffer**
  *
  * Writes a JavaScript Buffer to the stream.
  */
  writeBuffer(data: Buffer): void
  /**
  * **readRemaining**
  *
  * Reads the remaining bytes from the stream.
  */
  readRemaining(): Array<number>
  /**
  * **readRemainingBuffer**
  *
  * Reads the remaining bytes from the stream and returns a JavaScript Buffer.
  */
  readRemainingBuffer(): Buffer
  /**
  * **skip**
  *
  * Skips a number of bytes from the stream.
  */
  skip(length: number): void
  /**
  * **cursorAtEnd**
  *
  * Checks if the cursor is at the end of the stream.
  */
  cursorAtEnd(): boolean
  /**
  * **cursorAtStart**
  *
  * Checks if the cursor is at the start of the stream.
  */
  cursorAtStart(): boolean
  /**
  * **getBuffer**
  *
  * Gets the binary as a JavaScript Buffer.
  */
  getBuffer(): Buffer
}
/**
 * **Bool**
 *
 * Represents a boolean value. ( true or false )
 */
export declare class Bool {
  /**
  * **read**
  *
  * Reads a boolean ( 1 byte ) value from the stream. ( true or false )
  */
  static read(stream: BinaryStream): boolean
  /**
  * **write**
  *
  * Writes a boolean ( 1 byte ) value to the stream. ( true or false )
  */
  static write(stream: BinaryStream, value: boolean): void
}
/**
 * **Uint8**
 *
 * Represents an unsigned 8-bit ( 1 byte ) integer. ( 0 to 255 )
 */
export declare class Uint8 {
  /**
  * **read**
  *
  * Reads an unsigned 8-bit ( 1 byte ) integer from the stream. ( 0 to 255 )
  */
  static read(stream: BinaryStream): number
  /**
  * **write**
  *
  * Writes an unsigned 8-bit ( 1 byte ) integer to the stream. ( 0 to 255 )
  */
  static write(stream: BinaryStream, value: number): void
}
/**
 * **Uint16**
 *
 * Represents an unsigned 16-bit ( 2 bytes ) integer. ( 0 to 65535 )
 */
export declare class Uint16 {
  /**
  * **read**
  *
  * Reads an unsigned 16-bit ( 2 bytes ) integer from the stream. ( 0 to 65535 )
  */
  static read(stream: BinaryStream, endian?: Endianness | undefined | null): number
  /**
  * **write**
  *
  * Writes an unsigned 16-bit ( 2 bytes ) integer to the stream. ( 0 to 65535 )
  */
  static write(stream: BinaryStream, value: number, endian?: Endianness | undefined | null): void
}
/**
 * **Uint24**
 *
 * Represents an unsigned 24-bit ( 3 bytes ) integer. ( 0 to 16777215 )
 */
export declare class Uint24 {
  /**
  * **read**
  *
  * Reads an unsigned 24-bit ( 3 bytes ) integer from the stream. ( 0 to 16777215 )
  */
  static read(stream: BinaryStream, endian?: Endianness | undefined | null): number
  /**
  * **write**
  *
  * Writes an unsigned 24-bit ( 3 bytes ) integer to the stream. ( 0 to 16777215 )
  */
  static write(stream: BinaryStream, value: number, endian?: Endianness | undefined | null): void
}
/**
 * **Uint32**
 *
 * Represents an unsigned 32-bit ( 4 bytes ) integer. ( 0 to 4294967295 )
 */
export declare class Uint32 {
  /**
  * **read**
  *
  * Reads an unsigned 32-bit ( 4 bytes ) integer from the stream. ( 0 to 4294967295 )
  */
  static read(stream: BinaryStream, endian?: Endianness | undefined | null): number
  /**
  * **write**
  *
  * Writes an unsigned 32-bit ( 4 bytes ) integer to the stream. ( 0 to 4294967295 )
  */
  static write(stream: BinaryStream, value: number, endian?: Endianness | undefined | null): void
}
/**
 * **Uint64**
 *
 * Represents an unsigned 64-bit ( 8 bytes ) integer. ( 0 to 18446744073709551615 )
 */
export declare class Uint64 {
  /**
  * **read**
  *
  * Reads an unsigned 64-bit ( 8 bytes ) integer from the stream. ( 0 to 18446744073709551615 )
  */
  static read(stream: BinaryStream, endian?: Endianness | undefined | null): bigint
  /**
  * **write**
  *
  * Writes an unsigned 64-bit ( 8 bytes ) integer to the stream. ( 0 to 18446744073709551615 )
  */
  static write(stream: BinaryStream, value: bigint, endian?: Endianness | undefined | null): void
}
/**
 * **UShort**
 *
 * Represents an unsigned 16-bit ( 2 bytes ) integer. ( 0 to 65535 )
 */
export declare class UShort {
  /**
  * **read**
  *
  * Reads an unsigned 16-bit ( 2 bytes ) integer from the stream. ( 0 to 65535 )
  */
  static read(stream: BinaryStream, endian?: Endianness | undefined | null): number
  /**
  * **write**
  *
  * Writes an unsigned 16-bit ( 2 bytes ) integer to the stream. ( 0 to 65535 )
  */
  static write(stream: BinaryStream, value: number, endian?: Endianness | undefined | null): void
}
/**
 * **ULong**
 *
 * Represents an unsigned 64-bit ( 8 bytes ) integer. ( 0 to 18446744073709551615 )
 */
export declare class ULong {
  /**
  * **read**
  *
  * Reads an unsigned 64-bit ( 8 bytes ) integer from the stream. ( 0 to 18446744073709551615 )
  */
  static read(stream: BinaryStream, endian?: Endianness | undefined | null): bigint
  /**
  * **write**
  *
  * Writes an unsigned 64-bit ( 8 bytes ) integer to the stream. ( 0 to 18446744073709551615 )
  */
  static write(stream: BinaryStream, value: bigint, endian?: Endianness | undefined | null): void
}
/**
 * **Byte**
 *
 * Represents a signed 8-bit ( 1 byte ) integer. ( -128 to 127 )
 */
export declare class Byte {
  /**
  * **read**
  *
  * Reads a signed 8-bit ( 1 byte ) integer from the stream. ( -128 to 127 )
  */
  static read(stream: BinaryStream): number
  /**
  * **write**
  *
  * Writes a signed 8-bit ( 1 byte ) integer to the stream. ( -128 to 127 )
  */
  static write(stream: BinaryStream, value: number): void
}
/**
 * **Int8**
 *
 * Represents a signed 8-bit ( 1 byte ) integer. ( -128 to 127 )
 */
export declare class Int8 {
  /**
  * **read**
  *
  * Reads a signed 8-bit ( 1 byte ) integer from the stream. ( -128 to 127 )
  */
  static read(stream: BinaryStream): number
  /**
  * **write**
  *
  * Writes a signed 8-bit ( 1 byte ) integer to the stream. ( -128 to 127 )
  */
  static write(stream: BinaryStream, value: number): void
}
/**
 * **Int16**
 *
 * Represents a signed 16-bit ( 2 bytes ) integer. ( -32768 to 32767 )
 */
export declare class Int16 {
  /**
  * **read**
  *
  * Reads a signed 16-bit ( 2 bytes ) integer from the stream. ( -32768 to 32767 )
  */
  static read(stream: BinaryStream, endian?: Endianness | undefined | null): number
  /**
  * **write**
  *
  * Writes a signed 16-bit ( 2 bytes ) integer to the stream. ( -32768 to 32767 )
  */
  static write(stream: BinaryStream, value: number, endian?: Endianness | undefined | null): void
}
/**
 * **Int24**
 *
 * Represents a signed 24-bit ( 3 bytes ) integer. ( -8388608 to 8388607 )
 */
export declare class Int24 {
  /**
  * **read**
  *
  * Reads a signed 24-bit ( 3 bytes ) integer from the stream. ( -8388608 to 8388607 )
  */
  static read(stream: BinaryStream, endian?: Endianness | undefined | null): number
  /**
  * **write**
  *
  * Writes a signed 24-bit ( 3 bytes ) integer to the stream. ( -8388608 to 8388607 )
  */
  static write(stream: BinaryStream, value: number, endian?: Endianness | undefined | null): void
}
/**
 * **Int32**
 *
 * Represents a signed 32-bit ( 4 bytes ) integer. ( -2147483648 to 2147483647 )
 */
export declare class Int32 {
  /**
  * **read**
  *
  * Reads a signed 32-bit ( 4 bytes ) integer from the stream. ( -2147483648 to 2147483647 )
  */
  static read(stream: BinaryStream, endian?: Endianness | undefined | null): number
  /**
  * **write**
  *
  * Writes a signed 32-bit ( 4 bytes ) integer to the stream. ( -2147483648 to 2147483647 )
  */
  static write(stream: BinaryStream, value: number, endian?: Endianness | undefined | null): void
}
/**
 * **Int64**
 *
 * Represents an signed 64-bit ( 8 bytes ) integer. ( 0 to 18446744073709551615 )
 */
export declare class Int64 {
  /**
  * **read**
  *
  * Reads an signed 64-bit ( 8 bytes ) integer from the stream. ( 0 to 18446744073709551615 )
  */
  static read(stream: BinaryStream, endian?: Endianness | undefined | null): bigint
  /**
  * **write**
  *
  * Writes an signed 64-bit ( 8 bytes ) integer to the stream. ( 0 to 18446744073709551615 )
  */
  static write(stream: BinaryStream, value: bigint, endian?: Endianness | undefined | null): void
}
/**
 * **Short**
 *
 * Represents a signed 16-bit ( 2 bytes ) integer. ( -32768 to 32767 )
 */
export declare class Short {
  /**
  * **read**
  *
  * Reads a signed 16-bit ( 2 bytes ) integer from the stream. ( -32768 to 32767 )
  */
  static read(stream: BinaryStream, endian?: Endianness | undefined | null): number
  /**
  * **write**
  *
  * Writes a signed 16-bit ( 2 bytes ) integer to the stream. ( -32768 to 32767 )
  */
  static write(stream: BinaryStream, value: number, endian?: Endianness | undefined | null): void
}
/**
 * **Long**
 *
 * Represents a signed 64-bit ( 8 bytes ) integer. ( -9223372036854775808 to 9223372036854775807 )
 */
export declare class Long {
  /**
  * **read**
  *
  * Reads a signed 64-bit ( 8 bytes ) integer from the stream. ( -9223372036854775808 to 9223372036854775807 )
  */
  static read(stream: BinaryStream, endian?: Endianness | undefined | null): bigint
  /**
  * **write**
  *
  * Writes a signed 64-bit ( 8 bytes ) integer to the stream. ( -9223372036854775808 to 9223372036854775807 )
  */
  static write(stream: BinaryStream, value: bigint, endian?: Endianness | undefined | null): void
}
/**
 * **Float32**
 *
 * Respresents a signed 32-bit ( 4 bytes ) floating point number. ( -3.402823e38 to 3.402823e38 )
 */
export declare class Float32 {
  /**
  * **read**
  *
  * Reads a signed 32-bit ( 4 bytes ) floating point number from the stream. ( -3.402823e38 to 3.402823e38 )
  */
  static read(stream: BinaryStream, endian?: Endianness | undefined | null): number
  /**
  * **write**
  *
  * Writes a signed 32-bit ( 4 bytes ) floating point number to the stream. ( -3.402823e38 to 3.402823e38 )
  */
  static write(stream: BinaryStream, value: number, endian?: Endianness | undefined | null): void
}
/**
 * **Float64**
 *
 * Respresents a signed 64 bit ( 8 bytes ) floating point number. ( -1.7976931348623157e308 to 1.7976931348623157e308 )
 */
export declare class Float64 {
  /**
  * **read**
  *
  * Reads a signed 64 bit ( 8 bytes ) floating point number from the stream. ( -1.7976931348623157e308 to 1.7976931348623157e308 )
  */
  static read(stream: BinaryStream, endian?: Endianness | undefined | null): number
  /**
  * **write**
  *
  * Writes a signed 64 bit ( 8 bytes ) floating point number to the stream. ( -1.7976931348623157e308 to 1.7976931348623157e308 )
  */
  static write(stream: BinaryStream, value: number, endian?: Endianness | undefined | null): void
}
/**
 * **VarInt**
 *
 * Represents a 32 bit ( 4 bytes ) unsigned variable length integer. ( 0 to 4294967295 )
 */
export declare class VarInt {
  /**
  * **read**
  *
  * Reads a 32 bit ( 4 bytes ) unsigned variable length integer from the stream. ( 0 to 4294967295 )
  */
  static read(stream: BinaryStream): number
  /**
  * **write**
  *
  * Writes a 32 bit ( 4 bytes ) unsigned variable length integer to the stream. ( 0 to 4294967295 )
  */
  static write(stream: BinaryStream, value: number): void
}
/**
 * **ZigZag**
 *
 * Represents a 32 bit ( 4 bytes ) zigzag encoded signed variable length integer. ( -2147483648 to 2147483647 )
 */
export declare class ZigZag {
  /**
  * **read**
  *
  * Reads a 32 bit ( 4 bytes ) zigzag encoded signed variable length integer from the stream. ( -2147483648 to 2147483647 )
  */
  static read(stream: BinaryStream): number
  /**
  * **write**
  *
  * Writes a 32 bit ( 4 bytes ) zigzag encoded signed variable length integer to the stream. ( -2147483648 to 2147483647 )
  */
  static write(stream: BinaryStream, value: number): void
}
/**
 * **VarLong**
 *
 * Represents a 64 bit ( 8 bytes ) unsigned variable length integer. ( 0 to 18446744073709551615 )
 */
export declare class VarLong {
  /**
  * **read**
  *
  * Reads a 64 bit ( 8 bytes ) unsigned variable length integer from the stream. ( 0 to 18446744073709551615 )
  */
  static read(stream: BinaryStream): bigint
  /**
  * **write**
  *
  * Writes a 64 bit ( 8 bytes ) unsigned variable length integer to the stream. ( 0 to 18446744073709551615 )
  */
  static write(stream: BinaryStream, value: bigint): void
}
/**
 * **ZigZong**
 *
 * Represents a 64 bit ( 8 bytes ) zigzag encoded signed variable length integer. ( -9223372036854775808 to 9223372036854775807 )
 */
export declare class ZigZong {
  /**
  * **read**
  *
  * Reads a 64 bit ( 8 bytes ) zigzag encoded signed variable length integer from the stream. ( -9223372036854775808 to 9223372036854775807 )
  */
  static read(stream: BinaryStream): bigint
  /**
  * **write**
  *
  * Writes a 64 bit ( 8 bytes ) zigzag encoded signed variable length integer to the stream. ( -9223372036854775808 to 9223372036854775807 )
  */
  static write(stream: BinaryStream, value: bigint): void
}
/**
 * **String**
 *
 * Represents an unsigned 16-bit variable length ( 2 bytes ) utf-8 string. ( 0 to 65535 )
 */
export declare class String16 {
  /**
  * **read**
  *
  * Reads an unsigned 16-bit ( 2 bytes ) utf-8 string from the stream. ( 0 to 65535 )
  */
  static read(stream: BinaryStream, endian?: Endianness | undefined | null): string
  /**
  * **write**
  *
  * Writes an unsigned 16-bit ( 2 bytes ) utf-8 string to the stream. ( 0 to 65535 )
  */
  static write(stream: BinaryStream, value: string, endian?: Endianness | undefined | null): void
}
/**
 * **String**
 *
 * Represents a signed 32-bit variable length ( 4 bytes ) utf-8 string. ( 0 to 4294967295 )
 */
export declare class String32 {
  /**
  * **read**
  *
  * Reads a signed 32-bit ( 4 bytes ) utf-8 string from the stream. ( 0 to 4294967295 )
  */
  static read(stream: BinaryStream, endian?: Endianness | undefined | null): string
  /**
  * **write**
  *
  * Writes a signed 32-bit ( 4 bytes ) utf-8 string to the stream. ( 0 to 4294967295 )
  */
  static write(stream: BinaryStream, value: string, endian?: Endianness | undefined | null): void
}
/**
 * **String**
 *
 * Represents a signed 32-bit variable length ( 4 bytes ) utf-8 string. ( 0 to 4294967295 )
 */
export declare class VarString {
  /**
  * **read**
  *
  * Reads a signed 32-bit ( 4 bytes ) utf-8 string from the stream. ( 0 to 4294967295 )
  */
  static read(stream: BinaryStream): string
  /**
  * **write**
  *
  * Writes a signed 32-bit ( 4 bytes ) utf-8 string to the stream. ( 0 to 4294967295 )
  */
  static write(stream: BinaryStream, value: string): void
}
/**
 * **Byte**
 *
 * Represents a signed 128-bit ( 16 bytes ) uuid string.
 */
export declare class Uuid {
  /**
  * **read**
  *
  * Reads a signed 128-bit ( 16 bytes ) uuid string from the stream.
  */
  static read(stream: BinaryStream): string
  /**
  * **write**
  *
  * Writes a signed 128-bit ( 16 bytes ) uuid string to the stream.
  */
  static write(stream: BinaryStream, value: string): void
}
/**
 * A datagram is a packet of data that is sent over a network from one device to another.
*/
export declare class Datagram {
  /**
  * The identifier that sent the datagram.
  */
  identifier: NetworkIdentifier
  /**
  * The data buffer of the datagram.
  */
  buffer: Buffer
  /**
  * The size of the buffer.
  */
  size: number
  reply(buffer: Buffer): void
}
export declare class Socket {
  /**
  * The address of the socket.
  */
  address: string
  /**
  * The port of the socket.
  */
  port: number
  /**
  * The ticks per second of the server.
  */
  tps: number
  constructor(address: string, port?: number | undefined | null, tps?: number | undefined | null)
  start(recv: (err: Error | null, arg: Datagram) => any, tick: (err: Error | null, arg: number) => any): void
  stop(): void
  send(identifier: NetworkIdentifier, buffer: Buffer): void
}
