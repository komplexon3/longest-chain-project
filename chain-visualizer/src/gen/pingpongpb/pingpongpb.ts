/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.24.4
 * source: pingpongpb/pingpongpb.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../mir/codegen_extensions";
import * as dependency_2 from "./../net/codegen_extensions";
import * as pb_1 from "google-protobuf";
export namespace pingpongpb {
    export class Event extends pb_1.Message {
        #one_of_decls: number[][] = [[1]];
        constructor(data?: any[] | ({} & (({
            ping_time?: PingTime;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("ping_time" in data && data.ping_time != undefined) {
                    this.ping_time = data.ping_time;
                }
            }
        }
        get ping_time() {
            return pb_1.Message.getWrapperField(this, PingTime, 1) as PingTime;
        }
        set ping_time(value: PingTime) {
            pb_1.Message.setOneofWrapperField(this, 1, this.#one_of_decls[0], value);
        }
        get has_ping_time() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get type() {
            const cases: {
                [index: number]: "none" | "ping_time";
            } = {
                0: "none",
                1: "ping_time"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1])];
        }
        static fromObject(data: {
            ping_time?: ReturnType<typeof PingTime.prototype.toObject>;
        }): Event {
            const message = new Event({});
            if (data.ping_time != null) {
                message.ping_time = PingTime.fromObject(data.ping_time);
            }
            return message;
        }
        toObject() {
            const data: {
                ping_time?: ReturnType<typeof PingTime.prototype.toObject>;
            } = {};
            if (this.ping_time != null) {
                data.ping_time = this.ping_time.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_ping_time)
                writer.writeMessage(1, this.ping_time, () => this.ping_time.serialize(writer));
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
                        reader.readMessage(message.ping_time, () => message.ping_time = PingTime.deserialize(reader));
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
    export class PingTime extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): PingTime {
            const message = new PingTime({});
            return message;
        }
        toObject() {
            const data: {} = {};
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PingTime {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PingTime();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): PingTime {
            return PingTime.deserialize(bytes);
        }
    }
    export class Message extends pb_1.Message {
        #one_of_decls: number[][] = [[1, 2]];
        constructor(data?: any[] | ({} & (({
            ping?: Ping;
            pong?: never;
        } | {
            ping?: never;
            pong?: Pong;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("ping" in data && data.ping != undefined) {
                    this.ping = data.ping;
                }
                if ("pong" in data && data.pong != undefined) {
                    this.pong = data.pong;
                }
            }
        }
        get ping() {
            return pb_1.Message.getWrapperField(this, Ping, 1) as Ping;
        }
        set ping(value: Ping) {
            pb_1.Message.setOneofWrapperField(this, 1, this.#one_of_decls[0], value);
        }
        get has_ping() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get pong() {
            return pb_1.Message.getWrapperField(this, Pong, 2) as Pong;
        }
        set pong(value: Pong) {
            pb_1.Message.setOneofWrapperField(this, 2, this.#one_of_decls[0], value);
        }
        get has_pong() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get type() {
            const cases: {
                [index: number]: "none" | "ping" | "pong";
            } = {
                0: "none",
                1: "ping",
                2: "pong"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2])];
        }
        static fromObject(data: {
            ping?: ReturnType<typeof Ping.prototype.toObject>;
            pong?: ReturnType<typeof Pong.prototype.toObject>;
        }): Message {
            const message = new Message({});
            if (data.ping != null) {
                message.ping = Ping.fromObject(data.ping);
            }
            if (data.pong != null) {
                message.pong = Pong.fromObject(data.pong);
            }
            return message;
        }
        toObject() {
            const data: {
                ping?: ReturnType<typeof Ping.prototype.toObject>;
                pong?: ReturnType<typeof Pong.prototype.toObject>;
            } = {};
            if (this.ping != null) {
                data.ping = this.ping.toObject();
            }
            if (this.pong != null) {
                data.pong = this.pong.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_ping)
                writer.writeMessage(1, this.ping, () => this.ping.serialize(writer));
            if (this.has_pong)
                writer.writeMessage(2, this.pong, () => this.pong.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Message {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Message();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.ping, () => message.ping = Ping.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.pong, () => message.pong = Pong.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Message {
            return Message.deserialize(bytes);
        }
    }
    export class Ping extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            seq_nr?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("seq_nr" in data && data.seq_nr != undefined) {
                    this.seq_nr = data.seq_nr;
                }
            }
        }
        get seq_nr() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set seq_nr(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            seq_nr?: number;
        }): Ping {
            const message = new Ping({});
            if (data.seq_nr != null) {
                message.seq_nr = data.seq_nr;
            }
            return message;
        }
        toObject() {
            const data: {
                seq_nr?: number;
            } = {};
            if (this.seq_nr != null) {
                data.seq_nr = this.seq_nr;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.seq_nr != 0)
                writer.writeUint64(1, this.seq_nr);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Ping {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Ping();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.seq_nr = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Ping {
            return Ping.deserialize(bytes);
        }
    }
    export class Pong extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            seq_nr?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("seq_nr" in data && data.seq_nr != undefined) {
                    this.seq_nr = data.seq_nr;
                }
            }
        }
        get seq_nr() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set seq_nr(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            seq_nr?: number;
        }): Pong {
            const message = new Pong({});
            if (data.seq_nr != null) {
                message.seq_nr = data.seq_nr;
            }
            return message;
        }
        toObject() {
            const data: {
                seq_nr?: number;
            } = {};
            if (this.seq_nr != null) {
                data.seq_nr = this.seq_nr;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.seq_nr != 0)
                writer.writeUint64(1, this.seq_nr);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Pong {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Pong();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.seq_nr = reader.readUint64();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Pong {
            return Pong.deserialize(bytes);
        }
    }
}