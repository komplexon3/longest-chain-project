/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.24.4
 * source: ordererpb/ordererpb.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../trantorpb/trantorpb";
import * as dependency_2 from "./../pbftpb/pbftpb";
import * as dependency_3 from "./../mir/codegen_extensions";
import * as dependency_4 from "./../net/codegen_extensions";
import * as pb_1 from "google-protobuf";
export namespace ordererpb {
    export class Event extends pb_1.Message {
        #one_of_decls: number[][] = [[1]];
        constructor(data?: any[] | ({} & (({
            pbft?: dependency_2.pbftpb.Event;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("pbft" in data && data.pbft != undefined) {
                    this.pbft = data.pbft;
                }
            }
        }
        get pbft() {
            return pb_1.Message.getWrapperField(this, dependency_2.pbftpb.Event, 1) as dependency_2.pbftpb.Event;
        }
        set pbft(value: dependency_2.pbftpb.Event) {
            pb_1.Message.setOneofWrapperField(this, 1, this.#one_of_decls[0], value);
        }
        get has_pbft() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get type() {
            const cases: {
                [index: number]: "none" | "pbft";
            } = {
                0: "none",
                1: "pbft"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1])];
        }
        static fromObject(data: {
            pbft?: ReturnType<typeof dependency_2.pbftpb.Event.prototype.toObject>;
        }): Event {
            const message = new Event({});
            if (data.pbft != null) {
                message.pbft = dependency_2.pbftpb.Event.fromObject(data.pbft);
            }
            return message;
        }
        toObject() {
            const data: {
                pbft?: ReturnType<typeof dependency_2.pbftpb.Event.prototype.toObject>;
            } = {};
            if (this.pbft != null) {
                data.pbft = this.pbft.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_pbft)
                writer.writeMessage(1, this.pbft, () => this.pbft.serialize(writer));
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
                        reader.readMessage(message.pbft, () => message.pbft = dependency_2.pbftpb.Event.deserialize(reader));
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
    export class Message extends pb_1.Message {
        #one_of_decls: number[][] = [[1]];
        constructor(data?: any[] | ({} & (({
            pbft?: dependency_2.pbftpb.Message;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("pbft" in data && data.pbft != undefined) {
                    this.pbft = data.pbft;
                }
            }
        }
        get pbft() {
            return pb_1.Message.getWrapperField(this, dependency_2.pbftpb.Message, 1) as dependency_2.pbftpb.Message;
        }
        set pbft(value: dependency_2.pbftpb.Message) {
            pb_1.Message.setOneofWrapperField(this, 1, this.#one_of_decls[0], value);
        }
        get has_pbft() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get type() {
            const cases: {
                [index: number]: "none" | "pbft";
            } = {
                0: "none",
                1: "pbft"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1])];
        }
        static fromObject(data: {
            pbft?: ReturnType<typeof dependency_2.pbftpb.Message.prototype.toObject>;
        }): Message {
            const message = new Message({});
            if (data.pbft != null) {
                message.pbft = dependency_2.pbftpb.Message.fromObject(data.pbft);
            }
            return message;
        }
        toObject() {
            const data: {
                pbft?: ReturnType<typeof dependency_2.pbftpb.Message.prototype.toObject>;
            } = {};
            if (this.pbft != null) {
                data.pbft = this.pbft.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_pbft)
                writer.writeMessage(1, this.pbft, () => this.pbft.serialize(writer));
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
                        reader.readMessage(message.pbft, () => message.pbft = dependency_2.pbftpb.Message.deserialize(reader));
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
    export class PBFTSegment extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            leader?: string;
            membership?: dependency_1.trantorpb.Membership;
            proposals?: Map<number, Uint8Array>;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("leader" in data && data.leader != undefined) {
                    this.leader = data.leader;
                }
                if ("membership" in data && data.membership != undefined) {
                    this.membership = data.membership;
                }
                if ("proposals" in data && data.proposals != undefined) {
                    this.proposals = data.proposals;
                }
            }
            if (!this.proposals)
                this.proposals = new Map();
        }
        get leader() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set leader(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get membership() {
            return pb_1.Message.getWrapperField(this, dependency_1.trantorpb.Membership, 2) as dependency_1.trantorpb.Membership;
        }
        set membership(value: dependency_1.trantorpb.Membership) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_membership() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get proposals() {
            return pb_1.Message.getField(this, 3) as any as Map<number, Uint8Array>;
        }
        set proposals(value: Map<number, Uint8Array>) {
            pb_1.Message.setField(this, 3, value as any);
        }
        static fromObject(data: {
            leader?: string;
            membership?: ReturnType<typeof dependency_1.trantorpb.Membership.prototype.toObject>;
            proposals?: {
                [key: number]: Uint8Array;
            };
        }): PBFTSegment {
            const message = new PBFTSegment({});
            if (data.leader != null) {
                message.leader = data.leader;
            }
            if (data.membership != null) {
                message.membership = dependency_1.trantorpb.Membership.fromObject(data.membership);
            }
            if (typeof data.proposals == "object") {
                message.proposals = new Map(Object.entries(data.proposals).map(([key, value]) => [Number(key), value]));
            }
            return message;
        }
        toObject() {
            const data: {
                leader?: string;
                membership?: ReturnType<typeof dependency_1.trantorpb.Membership.prototype.toObject>;
                proposals?: {
                    [key: number]: Uint8Array;
                };
            } = {};
            if (this.leader != null) {
                data.leader = this.leader;
            }
            if (this.membership != null) {
                data.membership = this.membership.toObject();
            }
            if (this.proposals != null) {
                data.proposals = (Object.fromEntries)(this.proposals);
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.leader.length)
                writer.writeString(1, this.leader);
            if (this.has_membership)
                writer.writeMessage(2, this.membership, () => this.membership.serialize(writer));
            for (const [key, value] of this.proposals) {
                writer.writeMessage(3, this.proposals, () => {
                    writer.writeUint64(1, key);
                    writer.writeBytes(2, value);
                });
            }
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PBFTSegment {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PBFTSegment();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.leader = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.membership, () => message.membership = dependency_1.trantorpb.Membership.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message, () => pb_1.Map.deserializeBinary(message.proposals as any, reader, reader.readUint64, reader.readBytes));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): PBFTSegment {
            return PBFTSegment.deserialize(bytes);
        }
    }
    export class PBFTModule extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            segment?: PBFTSegment;
            availability_id?: string;
            epoch?: number;
            ppv_module_id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("segment" in data && data.segment != undefined) {
                    this.segment = data.segment;
                }
                if ("availability_id" in data && data.availability_id != undefined) {
                    this.availability_id = data.availability_id;
                }
                if ("epoch" in data && data.epoch != undefined) {
                    this.epoch = data.epoch;
                }
                if ("ppv_module_id" in data && data.ppv_module_id != undefined) {
                    this.ppv_module_id = data.ppv_module_id;
                }
            }
        }
        get segment() {
            return pb_1.Message.getWrapperField(this, PBFTSegment, 1) as PBFTSegment;
        }
        set segment(value: PBFTSegment) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_segment() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get availability_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set availability_id(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        get epoch() {
            return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
        }
        set epoch(value: number) {
            pb_1.Message.setField(this, 3, value);
        }
        get ppv_module_id() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set ppv_module_id(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        static fromObject(data: {
            segment?: ReturnType<typeof PBFTSegment.prototype.toObject>;
            availability_id?: string;
            epoch?: number;
            ppv_module_id?: string;
        }): PBFTModule {
            const message = new PBFTModule({});
            if (data.segment != null) {
                message.segment = PBFTSegment.fromObject(data.segment);
            }
            if (data.availability_id != null) {
                message.availability_id = data.availability_id;
            }
            if (data.epoch != null) {
                message.epoch = data.epoch;
            }
            if (data.ppv_module_id != null) {
                message.ppv_module_id = data.ppv_module_id;
            }
            return message;
        }
        toObject() {
            const data: {
                segment?: ReturnType<typeof PBFTSegment.prototype.toObject>;
                availability_id?: string;
                epoch?: number;
                ppv_module_id?: string;
            } = {};
            if (this.segment != null) {
                data.segment = this.segment.toObject();
            }
            if (this.availability_id != null) {
                data.availability_id = this.availability_id;
            }
            if (this.epoch != null) {
                data.epoch = this.epoch;
            }
            if (this.ppv_module_id != null) {
                data.ppv_module_id = this.ppv_module_id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_segment)
                writer.writeMessage(1, this.segment, () => this.segment.serialize(writer));
            if (this.availability_id.length)
                writer.writeString(2, this.availability_id);
            if (this.epoch != 0)
                writer.writeUint64(3, this.epoch);
            if (this.ppv_module_id.length)
                writer.writeString(4, this.ppv_module_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PBFTModule {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PBFTModule();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.segment, () => message.segment = PBFTSegment.deserialize(reader));
                        break;
                    case 2:
                        message.availability_id = reader.readString();
                        break;
                    case 3:
                        message.epoch = reader.readUint64();
                        break;
                    case 4:
                        message.ppv_module_id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): PBFTModule {
            return PBFTModule.deserialize(bytes);
        }
    }
}