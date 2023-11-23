/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.24.4
 * source: blockchainpb/applicationpb/applicationpb.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../mir/codegen_extensions";
import * as dependency_2 from "./../blockchainpb";
import * as dependency_3 from "./../payloadpb/payloadpb";
import * as pb_1 from "google-protobuf";
export namespace applicationpb {
    export class Event extends pb_1.Message {
        #one_of_decls: number[][] = [[1, 2, 3]];
        constructor(data?: any[] | ({} & (({
            new_longest_chain?: NewLongestChain;
            payload_request?: never;
            payload_response?: never;
        } | {
            new_longest_chain?: never;
            payload_request?: PayloadRequest;
            payload_response?: never;
        } | {
            new_longest_chain?: never;
            payload_request?: never;
            payload_response?: PayloadResponse;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("new_longest_chain" in data && data.new_longest_chain != undefined) {
                    this.new_longest_chain = data.new_longest_chain;
                }
                if ("payload_request" in data && data.payload_request != undefined) {
                    this.payload_request = data.payload_request;
                }
                if ("payload_response" in data && data.payload_response != undefined) {
                    this.payload_response = data.payload_response;
                }
            }
        }
        get new_longest_chain() {
            return pb_1.Message.getWrapperField(this, NewLongestChain, 1) as NewLongestChain;
        }
        set new_longest_chain(value: NewLongestChain) {
            pb_1.Message.setOneofWrapperField(this, 1, this.#one_of_decls[0], value);
        }
        get has_new_longest_chain() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get payload_request() {
            return pb_1.Message.getWrapperField(this, PayloadRequest, 2) as PayloadRequest;
        }
        set payload_request(value: PayloadRequest) {
            pb_1.Message.setOneofWrapperField(this, 2, this.#one_of_decls[0], value);
        }
        get has_payload_request() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get payload_response() {
            return pb_1.Message.getWrapperField(this, PayloadResponse, 3) as PayloadResponse;
        }
        set payload_response(value: PayloadResponse) {
            pb_1.Message.setOneofWrapperField(this, 3, this.#one_of_decls[0], value);
        }
        get has_payload_response() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get type() {
            const cases: {
                [index: number]: "none" | "new_longest_chain" | "payload_request" | "payload_response";
            } = {
                0: "none",
                1: "new_longest_chain",
                2: "payload_request",
                3: "payload_response"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2, 3])];
        }
        static fromObject(data: {
            new_longest_chain?: ReturnType<typeof NewLongestChain.prototype.toObject>;
            payload_request?: ReturnType<typeof PayloadRequest.prototype.toObject>;
            payload_response?: ReturnType<typeof PayloadResponse.prototype.toObject>;
        }): Event {
            const message = new Event({});
            if (data.new_longest_chain != null) {
                message.new_longest_chain = NewLongestChain.fromObject(data.new_longest_chain);
            }
            if (data.payload_request != null) {
                message.payload_request = PayloadRequest.fromObject(data.payload_request);
            }
            if (data.payload_response != null) {
                message.payload_response = PayloadResponse.fromObject(data.payload_response);
            }
            return message;
        }
        toObject() {
            const data: {
                new_longest_chain?: ReturnType<typeof NewLongestChain.prototype.toObject>;
                payload_request?: ReturnType<typeof PayloadRequest.prototype.toObject>;
                payload_response?: ReturnType<typeof PayloadResponse.prototype.toObject>;
            } = {};
            if (this.new_longest_chain != null) {
                data.new_longest_chain = this.new_longest_chain.toObject();
            }
            if (this.payload_request != null) {
                data.payload_request = this.payload_request.toObject();
            }
            if (this.payload_response != null) {
                data.payload_response = this.payload_response.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_new_longest_chain)
                writer.writeMessage(1, this.new_longest_chain, () => this.new_longest_chain.serialize(writer));
            if (this.has_payload_request)
                writer.writeMessage(2, this.payload_request, () => this.payload_request.serialize(writer));
            if (this.has_payload_response)
                writer.writeMessage(3, this.payload_response, () => this.payload_response.serialize(writer));
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
                        reader.readMessage(message.new_longest_chain, () => message.new_longest_chain = NewLongestChain.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.payload_request, () => message.payload_request = PayloadRequest.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.payload_response, () => message.payload_response = PayloadResponse.deserialize(reader));
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
    export class NewLongestChain extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            head?: dependency_2.blockchainpb.Block;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("head" in data && data.head != undefined) {
                    this.head = data.head;
                }
            }
        }
        get head() {
            return pb_1.Message.getWrapperField(this, dependency_2.blockchainpb.Block, 1) as dependency_2.blockchainpb.Block;
        }
        set head(value: dependency_2.blockchainpb.Block) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_head() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            head?: ReturnType<typeof dependency_2.blockchainpb.Block.prototype.toObject>;
        }): NewLongestChain {
            const message = new NewLongestChain({});
            if (data.head != null) {
                message.head = dependency_2.blockchainpb.Block.fromObject(data.head);
            }
            return message;
        }
        toObject() {
            const data: {
                head?: ReturnType<typeof dependency_2.blockchainpb.Block.prototype.toObject>;
            } = {};
            if (this.head != null) {
                data.head = this.head.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_head)
                writer.writeMessage(1, this.head, () => this.head.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): NewLongestChain {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new NewLongestChain();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.head, () => message.head = dependency_2.blockchainpb.Block.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): NewLongestChain {
            return NewLongestChain.deserialize(bytes);
        }
    }
    export class PayloadRequest extends pb_1.Message {
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
        }): PayloadRequest {
            const message = new PayloadRequest({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PayloadRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PayloadRequest();
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
        static deserializeBinary(bytes: Uint8Array): PayloadRequest {
            return PayloadRequest.deserialize(bytes);
        }
    }
    export class PayloadResponse extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            head_id?: number;
            payload?: dependency_3.payloadpb.Payload;
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
            return pb_1.Message.getWrapperField(this, dependency_3.payloadpb.Payload, 2) as dependency_3.payloadpb.Payload;
        }
        set payload(value: dependency_3.payloadpb.Payload) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_payload() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            head_id?: number;
            payload?: ReturnType<typeof dependency_3.payloadpb.Payload.prototype.toObject>;
        }): PayloadResponse {
            const message = new PayloadResponse({});
            if (data.head_id != null) {
                message.head_id = data.head_id;
            }
            if (data.payload != null) {
                message.payload = dependency_3.payloadpb.Payload.fromObject(data.payload);
            }
            return message;
        }
        toObject() {
            const data: {
                head_id?: number;
                payload?: ReturnType<typeof dependency_3.payloadpb.Payload.prototype.toObject>;
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PayloadResponse {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PayloadResponse();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.head_id = reader.readUint64();
                        break;
                    case 2:
                        reader.readMessage(message.payload, () => message.payload = dependency_3.payloadpb.Payload.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): PayloadResponse {
            return PayloadResponse.deserialize(bytes);
        }
    }
}
