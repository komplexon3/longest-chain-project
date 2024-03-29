/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.24.4
 * source: blockchainpb/blockchainpb.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../mir/codegen_extensions";
import * as dependency_2 from "./payloadpb/payloadpb";
import * as dependency_3 from "./../google/protobuf/timestamp";
import * as pb_1 from "google-protobuf";
export namespace blockchainpb {
    export class Blocktree extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            blocks?: Block[];
            leaves?: number[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("blocks" in data && data.blocks != undefined) {
                    this.blocks = data.blocks;
                }
                if ("leaves" in data && data.leaves != undefined) {
                    this.leaves = data.leaves;
                }
            }
        }
        get blocks() {
            return pb_1.Message.getRepeatedWrapperField(this, Block, 1) as Block[];
        }
        set blocks(value: Block[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get leaves() {
            return pb_1.Message.getFieldWithDefault(this, 2, []) as number[];
        }
        set leaves(value: number[]) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            blocks?: ReturnType<typeof Block.prototype.toObject>[];
            leaves?: number[];
        }): Blocktree {
            const message = new Blocktree({});
            if (data.blocks != null) {
                message.blocks = data.blocks.map(item => Block.fromObject(item));
            }
            if (data.leaves != null) {
                message.leaves = data.leaves;
            }
            return message;
        }
        toObject() {
            const data: {
                blocks?: ReturnType<typeof Block.prototype.toObject>[];
                leaves?: number[];
            } = {};
            if (this.blocks != null) {
                data.blocks = this.blocks.map((item: Block) => item.toObject());
            }
            if (this.leaves != null) {
                data.leaves = this.leaves;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.blocks.length)
                writer.writeRepeatedMessage(1, this.blocks, (item: Block) => item.serialize(writer));
            if (this.leaves.length)
                writer.writePackedUint64(2, this.leaves);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Blocktree {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Blocktree();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.blocks, () => pb_1.Message.addToRepeatedWrapperField(message, 1, Block.deserialize(reader), Block));
                        break;
                    case 2:
                        message.leaves = reader.readPackedUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Blocktree {
            return Blocktree.deserialize(bytes);
        }
    }
    export class Block extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            block_id?: number;
            previous_block_id?: number;
            payload?: dependency_2.payloadpb.Payload;
            timestamp?: dependency_3.google.protobuf.Timestamp;
            miner_id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("block_id" in data && data.block_id != undefined) {
                    this.block_id = data.block_id;
                }
                if ("previous_block_id" in data && data.previous_block_id != undefined) {
                    this.previous_block_id = data.previous_block_id;
                }
                if ("payload" in data && data.payload != undefined) {
                    this.payload = data.payload;
                }
                if ("timestamp" in data && data.timestamp != undefined) {
                    this.timestamp = data.timestamp;
                }
                if ("miner_id" in data && data.miner_id != undefined) {
                    this.miner_id = data.miner_id;
                }
            }
        }
        get block_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set block_id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get previous_block_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set previous_block_id(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get payload() {
            return pb_1.Message.getWrapperField(this, dependency_2.payloadpb.Payload, 3) as dependency_2.payloadpb.Payload;
        }
        set payload(value: dependency_2.payloadpb.Payload) {
            pb_1.Message.setWrapperField(this, 3, value);
        }
        get has_payload() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get timestamp() {
            return pb_1.Message.getWrapperField(this, dependency_3.google.protobuf.Timestamp, 4) as dependency_3.google.protobuf.Timestamp;
        }
        set timestamp(value: dependency_3.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_timestamp() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get miner_id() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set miner_id(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            block_id?: number;
            previous_block_id?: number;
            payload?: ReturnType<typeof dependency_2.payloadpb.Payload.prototype.toObject>;
            timestamp?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
            miner_id?: string;
        }): Block {
            const message = new Block({});
            if (data.block_id != null) {
                message.block_id = data.block_id;
            }
            if (data.previous_block_id != null) {
                message.previous_block_id = data.previous_block_id;
            }
            if (data.payload != null) {
                message.payload = dependency_2.payloadpb.Payload.fromObject(data.payload);
            }
            if (data.timestamp != null) {
                message.timestamp = dependency_3.google.protobuf.Timestamp.fromObject(data.timestamp);
            }
            if (data.miner_id != null) {
                message.miner_id = data.miner_id;
            }
            return message;
        }
        toObject() {
            const data: {
                block_id?: number;
                previous_block_id?: number;
                payload?: ReturnType<typeof dependency_2.payloadpb.Payload.prototype.toObject>;
                timestamp?: ReturnType<typeof dependency_3.google.protobuf.Timestamp.prototype.toObject>;
                miner_id?: string;
            } = {};
            if (this.block_id != null) {
                data.block_id = this.block_id;
            }
            if (this.previous_block_id != null) {
                data.previous_block_id = this.previous_block_id;
            }
            if (this.payload != null) {
                data.payload = this.payload.toObject();
            }
            if (this.timestamp != null) {
                data.timestamp = this.timestamp.toObject();
            }
            if (this.miner_id != null) {
                data.miner_id = this.miner_id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.block_id != 0)
                writer.writeUint64(1, this.block_id);
            if (this.previous_block_id != 0)
                writer.writeUint64(2, this.previous_block_id);
            if (this.has_payload)
                writer.writeMessage(3, this.payload, () => this.payload.serialize(writer));
            if (this.has_timestamp)
                writer.writeMessage(4, this.timestamp, () => this.timestamp.serialize(writer));
            if (this.miner_id.length)
                writer.writeString(5, this.miner_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Block {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Block();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.block_id = reader.readUint64();
                        break;
                    case 2:
                        message.previous_block_id = reader.readUint64();
                        break;
                    case 3:
                        reader.readMessage(message.payload, () => message.payload = dependency_2.payloadpb.Payload.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.timestamp, () => message.timestamp = dependency_3.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    case 5:
                        message.miner_id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Block {
            return Block.deserialize(bytes);
        }
    }
}
