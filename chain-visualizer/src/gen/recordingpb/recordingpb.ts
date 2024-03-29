/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.24.4
 * source: recordingpb/recordingpb.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../eventpb/eventpb";
import * as pb_1 from "google-protobuf";
export namespace recordingpb {
    export class Entry extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            node_id?: string;
            time?: number;
            events?: dependency_1.eventpb.Event[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("node_id" in data && data.node_id != undefined) {
                    this.node_id = data.node_id;
                }
                if ("time" in data && data.time != undefined) {
                    this.time = data.time;
                }
                if ("events" in data && data.events != undefined) {
                    this.events = data.events;
                }
            }
        }
        get node_id() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set node_id(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get time() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set time(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get events() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_1.eventpb.Event, 3) as dependency_1.eventpb.Event[];
        }
        set events(value: dependency_1.eventpb.Event[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        static fromObject(data: {
            node_id?: string;
            time?: number;
            events?: ReturnType<typeof dependency_1.eventpb.Event.prototype.toObject>[];
        }): Entry {
            const message = new Entry({});
            if (data.node_id != null) {
                message.node_id = data.node_id;
            }
            if (data.time != null) {
                message.time = data.time;
            }
            if (data.events != null) {
                message.events = data.events.map(item => dependency_1.eventpb.Event.fromObject(item));
            }
            return message;
        }
        toObject() {
            const data: {
                node_id?: string;
                time?: number;
                events?: ReturnType<typeof dependency_1.eventpb.Event.prototype.toObject>[];
            } = {};
            if (this.node_id != null) {
                data.node_id = this.node_id;
            }
            if (this.time != null) {
                data.time = this.time;
            }
            if (this.events != null) {
                data.events = this.events.map((item: dependency_1.eventpb.Event) => item.toObject());
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.node_id.length)
                writer.writeString(1, this.node_id);
            if (this.time != 0)
                writer.writeInt64(2, this.time);
            if (this.events.length)
                writer.writeRepeatedMessage(3, this.events, (item: dependency_1.eventpb.Event) => item.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Entry {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Entry();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.node_id = reader.readString();
                        break;
                    case 2:
                        message.time = reader.readInt64();
                        break;
                    case 3:
                        reader.readMessage(message.events, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_1.eventpb.Event.deserialize(reader), dependency_1.eventpb.Event));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Entry {
            return Entry.deserialize(bytes);
        }
    }
}
