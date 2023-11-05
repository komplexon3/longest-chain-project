// package: blockchainpb
// file: blockchainpb/blockchainpb.proto

import * as jspb from "google-protobuf";
import * as mir_codegen_extensions_pb from "../mir/codegen_extensions_pb";

export class Blocktree extends jspb.Message {
  clearBlocksList(): void;
  getBlocksList(): Array<Block>;
  setBlocksList(value: Array<Block>): void;
  addBlocks(value?: Block, index?: number): Block;

  clearLeavesList(): void;
  getLeavesList(): Array<number>;
  setLeavesList(value: Array<number>): void;
  addLeaves(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blocktree.AsObject;
  static toObject(includeInstance: boolean, msg: Blocktree): Blocktree.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Blocktree, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Blocktree;
  static deserializeBinaryFromReader(message: Blocktree, reader: jspb.BinaryReader): Blocktree;
}

export namespace Blocktree {
  export type AsObject = {
    blocksList: Array<Block.AsObject>,
    leavesList: Array<number>,
  }
}

export class Blockchain extends jspb.Message {
  clearBlocksList(): void;
  getBlocksList(): Array<Block>;
  setBlocksList(value: Array<Block>): void;
  addBlocks(value?: Block, index?: number): Block;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Blockchain.AsObject;
  static toObject(includeInstance: boolean, msg: Blockchain): Blockchain.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Blockchain, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Blockchain;
  static deserializeBinaryFromReader(message: Blockchain, reader: jspb.BinaryReader): Blockchain;
}

export namespace Blockchain {
  export type AsObject = {
    blocksList: Array<Block.AsObject>,
  }
}

export class Block extends jspb.Message {
  getBlockId(): number;
  setBlockId(value: number): void;

  getPreviousBlockId(): number;
  setPreviousBlockId(value: number): void;

  hasPayload(): boolean;
  clearPayload(): void;
  getPayload(): Payload | undefined;
  setPayload(value?: Payload): void;

  getTimestamp(): number;
  setTimestamp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Block.AsObject;
  static toObject(includeInstance: boolean, msg: Block): Block.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Block, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Block;
  static deserializeBinaryFromReader(message: Block, reader: jspb.BinaryReader): Block;
}

export namespace Block {
  export type AsObject = {
    blockId: number,
    previousBlockId: number,
    payload?: Payload.AsObject,
    timestamp: number,
  }
}

export class Payload extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Payload.AsObject;
  static toObject(includeInstance: boolean, msg: Payload): Payload.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Payload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Payload;
  static deserializeBinaryFromReader(message: Payload, reader: jspb.BinaryReader): Payload;
}

export namespace Payload {
  export type AsObject = {
    text: string,
  }
}

