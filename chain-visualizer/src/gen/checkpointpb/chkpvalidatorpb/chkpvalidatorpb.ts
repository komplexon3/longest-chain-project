/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.24.4
 * source: checkpointpb/chkpvalidatorpb/chkpvalidatorpb.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../contextstorepb/contextstorepb";
import * as dependency_2 from "./../../dslpb/dslpb";
import * as dependency_3 from "./../../trantorpb/trantorpb";
import * as dependency_4 from "./../checkpointpb";
import * as dependency_5 from "./../../mir/codegen_extensions";
import * as pb_1 from "google-protobuf";
export namespace chkpvalidatorpb {
    export class Event extends pb_1.Message {
        #one_of_decls: number[][] = [[1, 2]];
        constructor(data?: any[] | ({} & (({
            validate_checkpoint?: ValidateCheckpoint;
            checkpoint_validated?: never;
        } | {
            validate_checkpoint?: never;
            checkpoint_validated?: CheckpointValidated;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("validate_checkpoint" in data && data.validate_checkpoint != undefined) {
                    this.validate_checkpoint = data.validate_checkpoint;
                }
                if ("checkpoint_validated" in data && data.checkpoint_validated != undefined) {
                    this.checkpoint_validated = data.checkpoint_validated;
                }
            }
        }
        get validate_checkpoint() {
            return pb_1.Message.getWrapperField(this, ValidateCheckpoint, 1) as ValidateCheckpoint;
        }
        set validate_checkpoint(value: ValidateCheckpoint) {
            pb_1.Message.setOneofWrapperField(this, 1, this.#one_of_decls[0], value);
        }
        get has_validate_checkpoint() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get checkpoint_validated() {
            return pb_1.Message.getWrapperField(this, CheckpointValidated, 2) as CheckpointValidated;
        }
        set checkpoint_validated(value: CheckpointValidated) {
            pb_1.Message.setOneofWrapperField(this, 2, this.#one_of_decls[0], value);
        }
        get has_checkpoint_validated() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get type() {
            const cases: {
                [index: number]: "none" | "validate_checkpoint" | "checkpoint_validated";
            } = {
                0: "none",
                1: "validate_checkpoint",
                2: "checkpoint_validated"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2])];
        }
        static fromObject(data: {
            validate_checkpoint?: ReturnType<typeof ValidateCheckpoint.prototype.toObject>;
            checkpoint_validated?: ReturnType<typeof CheckpointValidated.prototype.toObject>;
        }): Event {
            const message = new Event({});
            if (data.validate_checkpoint != null) {
                message.validate_checkpoint = ValidateCheckpoint.fromObject(data.validate_checkpoint);
            }
            if (data.checkpoint_validated != null) {
                message.checkpoint_validated = CheckpointValidated.fromObject(data.checkpoint_validated);
            }
            return message;
        }
        toObject() {
            const data: {
                validate_checkpoint?: ReturnType<typeof ValidateCheckpoint.prototype.toObject>;
                checkpoint_validated?: ReturnType<typeof CheckpointValidated.prototype.toObject>;
            } = {};
            if (this.validate_checkpoint != null) {
                data.validate_checkpoint = this.validate_checkpoint.toObject();
            }
            if (this.checkpoint_validated != null) {
                data.checkpoint_validated = this.checkpoint_validated.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_validate_checkpoint)
                writer.writeMessage(1, this.validate_checkpoint, () => this.validate_checkpoint.serialize(writer));
            if (this.has_checkpoint_validated)
                writer.writeMessage(2, this.checkpoint_validated, () => this.checkpoint_validated.serialize(writer));
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
                        reader.readMessage(message.validate_checkpoint, () => message.validate_checkpoint = ValidateCheckpoint.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.checkpoint_validated, () => message.checkpoint_validated = CheckpointValidated.deserialize(reader));
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
    export class ValidateCheckpoint extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            checkpoint?: dependency_4.checkpointpb.StableCheckpoint;
            epoch_nr?: number;
            memberships?: dependency_3.trantorpb.Membership[];
            origin?: ValidateChkpOrigin;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("checkpoint" in data && data.checkpoint != undefined) {
                    this.checkpoint = data.checkpoint;
                }
                if ("epoch_nr" in data && data.epoch_nr != undefined) {
                    this.epoch_nr = data.epoch_nr;
                }
                if ("memberships" in data && data.memberships != undefined) {
                    this.memberships = data.memberships;
                }
                if ("origin" in data && data.origin != undefined) {
                    this.origin = data.origin;
                }
            }
        }
        get checkpoint() {
            return pb_1.Message.getWrapperField(this, dependency_4.checkpointpb.StableCheckpoint, 1) as dependency_4.checkpointpb.StableCheckpoint;
        }
        set checkpoint(value: dependency_4.checkpointpb.StableCheckpoint) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_checkpoint() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get epoch_nr() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set epoch_nr(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        get memberships() {
            return pb_1.Message.getRepeatedWrapperField(this, dependency_3.trantorpb.Membership, 3) as dependency_3.trantorpb.Membership[];
        }
        set memberships(value: dependency_3.trantorpb.Membership[]) {
            pb_1.Message.setRepeatedWrapperField(this, 3, value);
        }
        get origin() {
            return pb_1.Message.getWrapperField(this, ValidateChkpOrigin, 4) as ValidateChkpOrigin;
        }
        set origin(value: ValidateChkpOrigin) {
            pb_1.Message.setWrapperField(this, 4, value);
        }
        get has_origin() {
            return pb_1.Message.getField(this, 4) != null;
        }
        static fromObject(data: {
            checkpoint?: ReturnType<typeof dependency_4.checkpointpb.StableCheckpoint.prototype.toObject>;
            epoch_nr?: number;
            memberships?: ReturnType<typeof dependency_3.trantorpb.Membership.prototype.toObject>[];
            origin?: ReturnType<typeof ValidateChkpOrigin.prototype.toObject>;
        }): ValidateCheckpoint {
            const message = new ValidateCheckpoint({});
            if (data.checkpoint != null) {
                message.checkpoint = dependency_4.checkpointpb.StableCheckpoint.fromObject(data.checkpoint);
            }
            if (data.epoch_nr != null) {
                message.epoch_nr = data.epoch_nr;
            }
            if (data.memberships != null) {
                message.memberships = data.memberships.map(item => dependency_3.trantorpb.Membership.fromObject(item));
            }
            if (data.origin != null) {
                message.origin = ValidateChkpOrigin.fromObject(data.origin);
            }
            return message;
        }
        toObject() {
            const data: {
                checkpoint?: ReturnType<typeof dependency_4.checkpointpb.StableCheckpoint.prototype.toObject>;
                epoch_nr?: number;
                memberships?: ReturnType<typeof dependency_3.trantorpb.Membership.prototype.toObject>[];
                origin?: ReturnType<typeof ValidateChkpOrigin.prototype.toObject>;
            } = {};
            if (this.checkpoint != null) {
                data.checkpoint = this.checkpoint.toObject();
            }
            if (this.epoch_nr != null) {
                data.epoch_nr = this.epoch_nr;
            }
            if (this.memberships != null) {
                data.memberships = this.memberships.map((item: dependency_3.trantorpb.Membership) => item.toObject());
            }
            if (this.origin != null) {
                data.origin = this.origin.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_checkpoint)
                writer.writeMessage(1, this.checkpoint, () => this.checkpoint.serialize(writer));
            if (this.epoch_nr != 0)
                writer.writeUint64(2, this.epoch_nr);
            if (this.memberships.length)
                writer.writeRepeatedMessage(3, this.memberships, (item: dependency_3.trantorpb.Membership) => item.serialize(writer));
            if (this.has_origin)
                writer.writeMessage(4, this.origin, () => this.origin.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ValidateCheckpoint {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ValidateCheckpoint();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.checkpoint, () => message.checkpoint = dependency_4.checkpointpb.StableCheckpoint.deserialize(reader));
                        break;
                    case 2:
                        message.epoch_nr = reader.readUint64();
                        break;
                    case 3:
                        reader.readMessage(message.memberships, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_3.trantorpb.Membership.deserialize(reader), dependency_3.trantorpb.Membership));
                        break;
                    case 4:
                        reader.readMessage(message.origin, () => message.origin = ValidateChkpOrigin.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ValidateCheckpoint {
            return ValidateCheckpoint.deserialize(bytes);
        }
    }
    export class CheckpointValidated extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            error?: string;
            origin?: ValidateChkpOrigin;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("error" in data && data.error != undefined) {
                    this.error = data.error;
                }
                if ("origin" in data && data.origin != undefined) {
                    this.origin = data.origin;
                }
            }
        }
        get error() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set error(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get origin() {
            return pb_1.Message.getWrapperField(this, ValidateChkpOrigin, 2) as ValidateChkpOrigin;
        }
        set origin(value: ValidateChkpOrigin) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_origin() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            error?: string;
            origin?: ReturnType<typeof ValidateChkpOrigin.prototype.toObject>;
        }): CheckpointValidated {
            const message = new CheckpointValidated({});
            if (data.error != null) {
                message.error = data.error;
            }
            if (data.origin != null) {
                message.origin = ValidateChkpOrigin.fromObject(data.origin);
            }
            return message;
        }
        toObject() {
            const data: {
                error?: string;
                origin?: ReturnType<typeof ValidateChkpOrigin.prototype.toObject>;
            } = {};
            if (this.error != null) {
                data.error = this.error;
            }
            if (this.origin != null) {
                data.origin = this.origin.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.error.length)
                writer.writeString(1, this.error);
            if (this.has_origin)
                writer.writeMessage(2, this.origin, () => this.origin.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CheckpointValidated {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CheckpointValidated();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.error = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.origin, () => message.origin = ValidateChkpOrigin.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): CheckpointValidated {
            return CheckpointValidated.deserialize(bytes);
        }
    }
    export class ValidateChkpOrigin extends pb_1.Message {
        #one_of_decls: number[][] = [[2, 3]];
        constructor(data?: any[] | ({
            module?: string;
        } & (({
            context_store?: dependency_1.contextstorepb.Origin;
            dsl?: never;
        } | {
            context_store?: never;
            dsl?: dependency_2.dslpb.Origin;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("module" in data && data.module != undefined) {
                    this.module = data.module;
                }
                if ("context_store" in data && data.context_store != undefined) {
                    this.context_store = data.context_store;
                }
                if ("dsl" in data && data.dsl != undefined) {
                    this.dsl = data.dsl;
                }
            }
        }
        get module() {
            return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
        }
        set module(value: string) {
            pb_1.Message.setField(this, 1, value);
        }
        get context_store() {
            return pb_1.Message.getWrapperField(this, dependency_1.contextstorepb.Origin, 2) as dependency_1.contextstorepb.Origin;
        }
        set context_store(value: dependency_1.contextstorepb.Origin) {
            pb_1.Message.setOneofWrapperField(this, 2, this.#one_of_decls[0], value);
        }
        get has_context_store() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get dsl() {
            return pb_1.Message.getWrapperField(this, dependency_2.dslpb.Origin, 3) as dependency_2.dslpb.Origin;
        }
        set dsl(value: dependency_2.dslpb.Origin) {
            pb_1.Message.setOneofWrapperField(this, 3, this.#one_of_decls[0], value);
        }
        get has_dsl() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get type() {
            const cases: {
                [index: number]: "none" | "context_store" | "dsl";
            } = {
                0: "none",
                2: "context_store",
                3: "dsl"
            };
            return cases[pb_1.Message.computeOneofCase(this, [2, 3])];
        }
        static fromObject(data: {
            module?: string;
            context_store?: ReturnType<typeof dependency_1.contextstorepb.Origin.prototype.toObject>;
            dsl?: ReturnType<typeof dependency_2.dslpb.Origin.prototype.toObject>;
        }): ValidateChkpOrigin {
            const message = new ValidateChkpOrigin({});
            if (data.module != null) {
                message.module = data.module;
            }
            if (data.context_store != null) {
                message.context_store = dependency_1.contextstorepb.Origin.fromObject(data.context_store);
            }
            if (data.dsl != null) {
                message.dsl = dependency_2.dslpb.Origin.fromObject(data.dsl);
            }
            return message;
        }
        toObject() {
            const data: {
                module?: string;
                context_store?: ReturnType<typeof dependency_1.contextstorepb.Origin.prototype.toObject>;
                dsl?: ReturnType<typeof dependency_2.dslpb.Origin.prototype.toObject>;
            } = {};
            if (this.module != null) {
                data.module = this.module;
            }
            if (this.context_store != null) {
                data.context_store = this.context_store.toObject();
            }
            if (this.dsl != null) {
                data.dsl = this.dsl.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.module.length)
                writer.writeString(1, this.module);
            if (this.has_context_store)
                writer.writeMessage(2, this.context_store, () => this.context_store.serialize(writer));
            if (this.has_dsl)
                writer.writeMessage(3, this.dsl, () => this.dsl.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ValidateChkpOrigin {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ValidateChkpOrigin();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.module = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.context_store, () => message.context_store = dependency_1.contextstorepb.Origin.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.dsl, () => message.dsl = dependency_2.dslpb.Origin.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ValidateChkpOrigin {
            return ValidateChkpOrigin.deserialize(bytes);
        }
    }
}