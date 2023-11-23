/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.24.4
 * source: apppb/apppb.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../checkpointpb/checkpointpb";
import * as dependency_2 from "./../mir/codegen_extensions";
import * as pb_1 from "google-protobuf";
export namespace apppb {
    export class Event extends pb_1.Message {
        #one_of_decls: number[][] = [[1, 2, 3, 4]];
        constructor(data?: any[] | ({} & (({
            snapshot_request?: SnapshotRequest;
            snapshot?: never;
            restore_state?: never;
            new_epoch?: never;
        } | {
            snapshot_request?: never;
            snapshot?: Snapshot;
            restore_state?: never;
            new_epoch?: never;
        } | {
            snapshot_request?: never;
            snapshot?: never;
            restore_state?: RestoreState;
            new_epoch?: never;
        } | {
            snapshot_request?: never;
            snapshot?: never;
            restore_state?: never;
            new_epoch?: NewEpoch;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("snapshot_request" in data && data.snapshot_request != undefined) {
                    this.snapshot_request = data.snapshot_request;
                }
                if ("snapshot" in data && data.snapshot != undefined) {
                    this.snapshot = data.snapshot;
                }
                if ("restore_state" in data && data.restore_state != undefined) {
                    this.restore_state = data.restore_state;
                }
                if ("new_epoch" in data && data.new_epoch != undefined) {
                    this.new_epoch = data.new_epoch;
                }
            }
        }
        get snapshot_request() {
            return pb_1.Message.getWrapperField(this, SnapshotRequest, 1) as SnapshotRequest;
        }
        set snapshot_request(value: SnapshotRequest) {
            pb_1.Message.setOneofWrapperField(this, 1, this.#one_of_decls[0], value);
        }
        get has_snapshot_request() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get snapshot() {
            return pb_1.Message.getWrapperField(this, Snapshot, 2) as Snapshot;
        }
        set snapshot(value: Snapshot) {
            pb_1.Message.setOneofWrapperField(this, 2, this.#one_of_decls[0], value);
        }
        get has_snapshot() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get restore_state() {
            return pb_1.Message.getWrapperField(this, RestoreState, 3) as RestoreState;
        }
        set restore_state(value: RestoreState) {
            pb_1.Message.setOneofWrapperField(this, 3, this.#one_of_decls[0], value);
        }
        get has_restore_state() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get new_epoch() {
            return pb_1.Message.getWrapperField(this, NewEpoch, 4) as NewEpoch;
        }
        set new_epoch(value: NewEpoch) {
            pb_1.Message.setOneofWrapperField(this, 4, this.#one_of_decls[0], value);
        }
        get has_new_epoch() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get type() {
            const cases: {
                [index: number]: "none" | "snapshot_request" | "snapshot" | "restore_state" | "new_epoch";
            } = {
                0: "none",
                1: "snapshot_request",
                2: "snapshot",
                3: "restore_state",
                4: "new_epoch"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2, 3, 4])];
        }
        static fromObject(data: {
            snapshot_request?: ReturnType<typeof SnapshotRequest.prototype.toObject>;
            snapshot?: ReturnType<typeof Snapshot.prototype.toObject>;
            restore_state?: ReturnType<typeof RestoreState.prototype.toObject>;
            new_epoch?: ReturnType<typeof NewEpoch.prototype.toObject>;
        }): Event {
            const message = new Event({});
            if (data.snapshot_request != null) {
                message.snapshot_request = SnapshotRequest.fromObject(data.snapshot_request);
            }
            if (data.snapshot != null) {
                message.snapshot = Snapshot.fromObject(data.snapshot);
            }
            if (data.restore_state != null) {
                message.restore_state = RestoreState.fromObject(data.restore_state);
            }
            if (data.new_epoch != null) {
                message.new_epoch = NewEpoch.fromObject(data.new_epoch);
            }
            return message;
        }
        toObject() {
            const data: {
                snapshot_request?: ReturnType<typeof SnapshotRequest.prototype.toObject>;
                snapshot?: ReturnType<typeof Snapshot.prototype.toObject>;
                restore_state?: ReturnType<typeof RestoreState.prototype.toObject>;
                new_epoch?: ReturnType<typeof NewEpoch.prototype.toObject>;
            } = {};
            if (this.snapshot_request != null) {
                data.snapshot_request = this.snapshot_request.toObject();
            }
            if (this.snapshot != null) {
                data.snapshot = this.snapshot.toObject();
            }
            if (this.restore_state != null) {
                data.restore_state = this.restore_state.toObject();
            }
            if (this.new_epoch != null) {
                data.new_epoch = this.new_epoch.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_snapshot_request)
                writer.writeMessage(1, this.snapshot_request, () => this.snapshot_request.serialize(writer));
            if (this.has_snapshot)
                writer.writeMessage(2, this.snapshot, () => this.snapshot.serialize(writer));
            if (this.has_restore_state)
                writer.writeMessage(3, this.restore_state, () => this.restore_state.serialize(writer));
            if (this.has_new_epoch)
                writer.writeMessage(4, this.new_epoch, () => this.new_epoch.serialize(writer));
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
                        reader.readMessage(message.snapshot_request, () => message.snapshot_request = SnapshotRequest.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.snapshot, () => message.snapshot = Snapshot.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.restore_state, () => message.restore_state = RestoreState.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.new_epoch, () => message.new_epoch = NewEpoch.deserialize(reader));
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
    export class SnapshotRequest extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            reply_to?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("reply_to" in data && data.reply_to != undefined) {
                    this.reply_to = data.reply_to;
                }
            }
        }
        get reply_to() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set reply_to(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            reply_to?: string;
        }): SnapshotRequest {
            const message = new SnapshotRequest({});
            if (data.reply_to != null) {
                message.reply_to = data.reply_to;
            }
            return message;
        }
        toObject() {
            const data: {
                reply_to?: string;
            } = {};
            if (this.reply_to != null) {
                data.reply_to = this.reply_to;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.reply_to.length)
                writer.writeString(1, this.reply_to);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SnapshotRequest {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SnapshotRequest();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.reply_to = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SnapshotRequest {
            return SnapshotRequest.deserialize(bytes);
        }
    }
    export class Snapshot extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            app_data?: Uint8Array;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("app_data" in data && data.app_data != undefined) {
                    this.app_data = data.app_data;
                }
            }
        }
        get app_data() {
            return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0)) as Uint8Array;
        }
        set app_data(value: Uint8Array) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            app_data?: Uint8Array;
        }): Snapshot {
            const message = new Snapshot({});
            if (data.app_data != null) {
                message.app_data = data.app_data;
            }
            return message;
        }
        toObject() {
            const data: {
                app_data?: Uint8Array;
            } = {};
            if (this.app_data != null) {
                data.app_data = this.app_data;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.app_data.length)
                writer.writeBytes(1, this.app_data);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Snapshot {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Snapshot();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.app_data = reader.readBytes();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Snapshot {
            return Snapshot.deserialize(bytes);
        }
    }
    export class RestoreState extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            checkpoint?: dependency_1.checkpointpb.StableCheckpoint;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("checkpoint" in data && data.checkpoint != undefined) {
                    this.checkpoint = data.checkpoint;
                }
            }
        }
        get checkpoint() {
            return pb_1.Message.getWrapperField(this, dependency_1.checkpointpb.StableCheckpoint, 1) as dependency_1.checkpointpb.StableCheckpoint;
        }
        set checkpoint(value: dependency_1.checkpointpb.StableCheckpoint) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_checkpoint() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            checkpoint?: ReturnType<typeof dependency_1.checkpointpb.StableCheckpoint.prototype.toObject>;
        }): RestoreState {
            const message = new RestoreState({});
            if (data.checkpoint != null) {
                message.checkpoint = dependency_1.checkpointpb.StableCheckpoint.fromObject(data.checkpoint);
            }
            return message;
        }
        toObject() {
            const data: {
                checkpoint?: ReturnType<typeof dependency_1.checkpointpb.StableCheckpoint.prototype.toObject>;
            } = {};
            if (this.checkpoint != null) {
                data.checkpoint = this.checkpoint.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_checkpoint)
                writer.writeMessage(1, this.checkpoint, () => this.checkpoint.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RestoreState {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RestoreState();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.checkpoint, () => message.checkpoint = dependency_1.checkpointpb.StableCheckpoint.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): RestoreState {
            return RestoreState.deserialize(bytes);
        }
    }
    export class NewEpoch extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            epoch_nr?: number;
            protocol_module?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("epoch_nr" in data && data.epoch_nr != undefined) {
                    this.epoch_nr = data.epoch_nr;
                }
                if ("protocol_module" in data && data.protocol_module != undefined) {
                    this.protocol_module = data.protocol_module;
                }
            }
        }
        get epoch_nr() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set epoch_nr(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get protocol_module() {
            return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
        }
        set protocol_module(value: string) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            epoch_nr?: number;
            protocol_module?: string;
        }): NewEpoch {
            const message = new NewEpoch({});
            if (data.epoch_nr != null) {
                message.epoch_nr = data.epoch_nr;
            }
            if (data.protocol_module != null) {
                message.protocol_module = data.protocol_module;
            }
            return message;
        }
        toObject() {
            const data: {
                epoch_nr?: number;
                protocol_module?: string;
            } = {};
            if (this.epoch_nr != null) {
                data.epoch_nr = this.epoch_nr;
            }
            if (this.protocol_module != null) {
                data.protocol_module = this.protocol_module;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.epoch_nr != 0)
                writer.writeUint64(1, this.epoch_nr);
            if (this.protocol_module.length)
                writer.writeString(2, this.protocol_module);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): NewEpoch {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new NewEpoch();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.epoch_nr = reader.readUint64();
                        break;
                    case 2:
                        message.protocol_module = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): NewEpoch {
            return NewEpoch.deserialize(bytes);
        }
    }
}