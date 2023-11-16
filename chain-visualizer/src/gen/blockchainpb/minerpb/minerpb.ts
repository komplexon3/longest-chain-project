/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.24.4
 * source: blockchainpb/minerpb/minerpb.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../mir/codegen_extensions";
import * as dependency_2 from "./../blockchainpb";
import * as pb_1 from "google-protobuf";
export namespace minerpb {
    export class Event extends pb_1.Message {
        #one_of_decls: number[][] = [[1, 2]];
        constructor(data?: any[] | ({} & (({
            block_request?: BlockRequest;
            new_head?: never;
        } | {
            block_request?: never;
            new_head?: NewHead;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("block_request" in data && data.block_request != undefined) {
                    this.block_request = data.block_request;
                }
                if ("new_head" in data && data.new_head != undefined) {
                    this.new_head = data.new_head;
                }
            }
        }
        get block_request() {
            return pb_1.Message.getWrapperField(this, BlockRequest, 1) as BlockRequest;
        }
        set block_request(value: BlockRequest) {
            pb_1.Message.setOneofWrapperField(this, 1, this.#one_of_decls[0], value);
        }
        get has_block_request() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get new_head() {
            return pb_1.Message.getWrapperField(this, NewHead, 2) as NewHead;
        }
        set new_head(value: NewHead) {
            pb_1.Message.setOneofWrapperField(this, 2, this.#one_of_decls[0], value);
        }
        get has_new_head() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get type() {
            const cases: {
                [index: number]: "none" | "block_request" | "new_head";
            } = {
                0: "none",
                1: "block_request",
                2: "new_head"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2])];
        }
        static fromObject(data: {
            block_request?: ReturnType<typeof BlockRequest.prototype.toObject>;
            new_head?: ReturnType<typeof NewHead.prototype.toObject>;
        }): Event {
            const message = new Event({});
            if (data.block_request != null) {
                message.block_request = BlockRequest.fromObject(data.block_request);
            }
            if (data.new_head != null) {
                message.new_head = NewHead.fromObject(data.new_head);
            }
            return message;
        }
        toObject() {
            const data: {
                block_request?: ReturnType<typeof BlockRequest.prototype.toObject>;
                new_head?: ReturnType<typeof NewHead.prototype.toObject>;
            } = {};
            if (this.block_request != null) {
                data.block_request = this.block_request.toObject();
            }
            if (this.new_head != null) {
                data.new_head = this.new_head.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_block_request)
                writer.writeMessage(1, this.block_request, () => this.block_request.serialize(writer));
            if (this.has_new_head)
                writer.writeMessage(2, this.new_head, () => this.new_head.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Event {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Event();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.block_request, () => message.block_request = BlockRequest.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.new_head, () => message.new_head = NewHead.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Event {
            return Event.deserialize(bytes);
        }
    }
    export class BlockRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            head_id?: number;
            payload?: dependency_2.blockchainpb.Payload;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("head_id" in data && data.head_id != undefined) {
                    this.head_id = data.head_id;
                }
                if ("payload" in data && data.payload != undefined) {
                    this.payload = data.payload;
                }
            }
        }
        get head_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set head_id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get payload() {
            return pb_1.Message.getWrapperField(this, dependency_2.blockchainpb.Payload, 2) as dependency_2.blockchainpb.Payload;
        }
        set payload(value: dependency_2.blockchainpb.Payload) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_payload() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            head_id?: number;
            payload?: ReturnType<typeof dependency_2.blockchainpb.Payload.prototype.toObject>;
        }): BlockRequest {
            const message = new BlockRequest({});
            if (data.head_id != null) {
                message.head_id = data.head_id;
            }
            if (data.payload != null) {
                message.payload = dependency_2.blockchainpb.Payload.fromObject(data.payload);
            }
            return message;
        }
        toObject() {
            const data: {
                head_id?: number;
                payload?: ReturnType<typeof dependency_2.blockchainpb.Payload.prototype.toObject>;
            } = {};
            if (this.head_id != null) {
                data.head_id = this.head_id;
            }
            if (this.payload != null) {
                data.payload = this.payload.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.head_id != 0)
                writer.writeUint64(1, this.head_id);
            if (this.has_payload)
                writer.writeMessage(2, this.payload, () => this.payload.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): BlockRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new BlockRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.head_id = reader.readUint64();
                        break;
                    case 2:
                        reader.readMessage(message.payload, () => message.payload = dependency_2.blockchainpb.Payload.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): BlockRequest {
            return BlockRequest.deserialize(bytes);
        }
    }
    export class NewHead extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            head_id?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("head_id" in data && data.head_id != undefined) {
                    this.head_id = data.head_id;
                }
            }
        }
        get head_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set head_id(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            head_id?: number;
        }): NewHead {
            const message = new NewHead({});
            if (data.head_id != null) {
                message.head_id = data.head_id;
            }
            return message;
        }
        toObject() {
            const data: {
                head_id?: number;
            } = {};
            if (this.head_id != null) {
                data.head_id = this.head_id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.head_id != 0)
                writer.writeUint64(1, this.head_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): NewHead {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new NewHead();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.head_id = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): NewHead {
            return NewHead.deserialize(bytes);
        }
    }
}
