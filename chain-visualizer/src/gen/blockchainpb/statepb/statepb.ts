/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.24.4
 * source: blockchainpb/statepb/statepb.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../mir/codegen_extensions";
import * as dependency_2 from "./../../google/protobuf/timestamp";
import * as pb_1 from "google-protobuf";
export namespace statepb {
    export class State extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            message_history?: string[];
            last_sent_timestamps?: LastSentTimestamp[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("message_history" in data && data.message_history != undefined) {
                    this.message_history = data.message_history;
                }
                if ("last_sent_timestamps" in data && data.last_sent_timestamps != undefined) {
                    this.last_sent_timestamps = data.last_sent_timestamps;
                }
            }
        }
        get message_history() {
            return pb_1.Message.getFieldWithDefault(this, 1, []) as string[];
        }
        set message_history(value: string[]) {
            pb_1.Message.setField(this, 1, value);
        }
        get last_sent_timestamps() {
            return pb_1.Message.getRepeatedWrapperField(this, LastSentTimestamp, 2) as LastSentTimestamp[];
        }
        set last_sent_timestamps(value: LastSentTimestamp[]) {
            pb_1.Message.setRepeatedWrapperField(this, 2, value);
        }
        static fromObject(data: {
            message_history?: string[];
            last_sent_timestamps?: ReturnType<typeof LastSentTimestamp.prototype.toObject>[];
        }): State {
            const message = new State({});
            if (data.message_history != null) {
                message.message_history = data.message_history;
            }
            if (data.last_sent_timestamps != null) {
                message.last_sent_timestamps = data.last_sent_timestamps.map(item => LastSentTimestamp.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                message_history?: string[];
                last_sent_timestamps?: ReturnType<typeof LastSentTimestamp.prototype.toObject>[];
            } = {};
            if (this.message_history != null) {
                data.message_history = this.message_history;
            }
            if (this.last_sent_timestamps != null) {
                data.last_sent_timestamps = this.last_sent_timestamps.map((item: LastSentTimestamp) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.message_history.length)
                writer.writeRepeatedString(1, this.message_history);
            if (this.last_sent_timestamps.length)
                writer.writeRepeatedMessage(2, this.last_sent_timestamps, (item: LastSentTimestamp) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): State {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new State();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        pb_1.Message.addToRepeatedField(message, 1, reader.readString());
                        break;
                    case 2:
                        reader.readMessage(message.last_sent_timestamps, () => pb_1.Message.addToRepeatedWrapperField(message, 2, LastSentTimestamp.deserialize(reader), LastSentTimestamp));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): State {
            return State.deserialize(bytes);
        }
    }
    export class LastSentTimestamp extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            node_id?: string;
            timestamp?: dependency_2.google.protobuf.Timestamp;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("node_id" in data && data.node_id != undefined) {
                    this.node_id = data.node_id;
                }
                if ("timestamp" in data && data.timestamp != undefined) {
                    this.timestamp = data.timestamp;
                }
            }
        }
        get node_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set node_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get timestamp() {
            return pb_1.Message.getWrapperField(this, dependency_2.google.protobuf.Timestamp, 2) as dependency_2.google.protobuf.Timestamp;
        }
        set timestamp(value: dependency_2.google.protobuf.Timestamp) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_timestamp() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            node_id?: string;
            timestamp?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
        }): LastSentTimestamp {
            const message = new LastSentTimestamp({});
            if (data.node_id != null) {
                message.node_id = data.node_id;
            }
            if (data.timestamp != null) {
                message.timestamp = dependency_2.google.protobuf.Timestamp.fromObject(data.timestamp);
            }
            return message;
        }
        toObject() {
            const data: {
                node_id?: string;
                timestamp?: ReturnType<typeof dependency_2.google.protobuf.Timestamp.prototype.toObject>;
            } = {};
            if (this.node_id != null) {
                data.node_id = this.node_id;
            }
            if (this.timestamp != null) {
                data.timestamp = this.timestamp.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.node_id.length)
                writer.writeString(1, this.node_id);
            if (this.has_timestamp)
                writer.writeMessage(2, this.timestamp, () => this.timestamp.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LastSentTimestamp {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LastSentTimestamp();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.node_id = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.timestamp, () => message.timestamp = dependency_2.google.protobuf.Timestamp.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): LastSentTimestamp {
            return LastSentTimestamp.deserialize(bytes);
        }
    }
}
