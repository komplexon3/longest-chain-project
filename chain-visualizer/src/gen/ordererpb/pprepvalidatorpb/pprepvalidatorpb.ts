/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.24.4
 * source: ordererpb/pprepvalidatorpb/pprepvalidatorpb.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../../contextstorepb/contextstorepb";
import * as dependency_2 from "./../../dslpb/dslpb";
import * as dependency_3 from "./../../trantorpb/trantorpb";
import * as dependency_4 from "./../../pbftpb/pbftpb";
import * as dependency_5 from "./../../mir/codegen_extensions";
import * as pb_1 from "google-protobuf";
export namespace pprepvalidatorpb {
    export class Event extends pb_1.Message {
        #one_of_decls: number[][] = [[1, 2]];
        constructor(data?: any[] | ({} & (({
            validate_preprepare?: ValidatePreprepare;
            preprepare_validated?: never;
        } | {
            validate_preprepare?: never;
            preprepare_validated?: PreprepareValidated;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("validate_preprepare" in data && data.validate_preprepare != undefined) {
                    this.validate_preprepare = data.validate_preprepare;
                }
                if ("preprepare_validated" in data && data.preprepare_validated != undefined) {
                    this.preprepare_validated = data.preprepare_validated;
                }
            }
        }
        get validate_preprepare() {
            return pb_1.Message.getWrapperField(this, ValidatePreprepare, 1) as ValidatePreprepare;
        }
        set validate_preprepare(value: ValidatePreprepare) {
            pb_1.Message.setOneofWrapperField(this, 1, this.#one_of_decls[0], value);
        }
        get has_validate_preprepare() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get preprepare_validated() {
            return pb_1.Message.getWrapperField(this, PreprepareValidated, 2) as PreprepareValidated;
        }
        set preprepare_validated(value: PreprepareValidated) {
            pb_1.Message.setOneofWrapperField(this, 2, this.#one_of_decls[0], value);
        }
        get has_preprepare_validated() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get type() {
            const cases: {
                [index: number]: "none" | "validate_preprepare" | "preprepare_validated";
            } = {
                0: "none",
                1: "validate_preprepare",
                2: "preprepare_validated"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2])];
        }
        static fromObject(data: {
            validate_preprepare?: ReturnType<typeof ValidatePreprepare.prototype.toObject>;
            preprepare_validated?: ReturnType<typeof PreprepareValidated.prototype.toObject>;
        }): Event {
            const message = new Event({});
            if (data.validate_preprepare != null) {
                message.validate_preprepare = ValidatePreprepare.fromObject(data.validate_preprepare);
            }
            if (data.preprepare_validated != null) {
                message.preprepare_validated = PreprepareValidated.fromObject(data.preprepare_validated);
            }
            return message;
        }
        toObject() {
            const data: {
                validate_preprepare?: ReturnType<typeof ValidatePreprepare.prototype.toObject>;
                preprepare_validated?: ReturnType<typeof PreprepareValidated.prototype.toObject>;
            } = {};
            if (this.validate_preprepare != null) {
                data.validate_preprepare = this.validate_preprepare.toObject();
            }
            if (this.preprepare_validated != null) {
                data.preprepare_validated = this.preprepare_validated.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_validate_preprepare)
                writer.writeMessage(1, this.validate_preprepare, () => this.validate_preprepare.serialize(writer));
            if (this.has_preprepare_validated)
                writer.writeMessage(2, this.preprepare_validated, () => this.preprepare_validated.serialize(writer));
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
                        reader.readMessage(message.validate_preprepare, () => message.validate_preprepare = ValidatePreprepare.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.preprepare_validated, () => message.preprepare_validated = PreprepareValidated.deserialize(reader));
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
    export class ValidatePreprepare extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            preprepare?: dependency_4.pbftpb.Preprepare;
            origin?: ValidatePreprepareOrigin;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("preprepare" in data && data.preprepare != undefined) {
                    this.preprepare = data.preprepare;
                }
                if ("origin" in data && data.origin != undefined) {
                    this.origin = data.origin;
                }
            }
        }
        get preprepare() {
            return pb_1.Message.getWrapperField(this, dependency_4.pbftpb.Preprepare, 1) as dependency_4.pbftpb.Preprepare;
        }
        set preprepare(value: dependency_4.pbftpb.Preprepare) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_preprepare() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get origin() {
            return pb_1.Message.getWrapperField(this, ValidatePreprepareOrigin, 2) as ValidatePreprepareOrigin;
        }
        set origin(value: ValidatePreprepareOrigin) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_origin() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            preprepare?: ReturnType<typeof dependency_4.pbftpb.Preprepare.prototype.toObject>;
            origin?: ReturnType<typeof ValidatePreprepareOrigin.prototype.toObject>;
        }): ValidatePreprepare {
            const message = new ValidatePreprepare({});
            if (data.preprepare != null) {
                message.preprepare = dependency_4.pbftpb.Preprepare.fromObject(data.preprepare);
            }
            if (data.origin != null) {
                message.origin = ValidatePreprepareOrigin.fromObject(data.origin);
            }
            return message;
        }
        toObject() {
            const data: {
                preprepare?: ReturnType<typeof dependency_4.pbftpb.Preprepare.prototype.toObject>;
                origin?: ReturnType<typeof ValidatePreprepareOrigin.prototype.toObject>;
            } = {};
            if (this.preprepare != null) {
                data.preprepare = this.preprepare.toObject();
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
            if (this.has_preprepare)
                writer.writeMessage(1, this.preprepare, () => this.preprepare.serialize(writer));
            if (this.has_origin)
                writer.writeMessage(2, this.origin, () => this.origin.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ValidatePreprepare {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ValidatePreprepare();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.preprepare, () => message.preprepare = dependency_4.pbftpb.Preprepare.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.origin, () => message.origin = ValidatePreprepareOrigin.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ValidatePreprepare {
            return ValidatePreprepare.deserialize(bytes);
        }
    }
    export class PreprepareValidated extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            error?: string;
            origin?: ValidatePreprepareOrigin;
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
            return pb_1.Message.getWrapperField(this, ValidatePreprepareOrigin, 2) as ValidatePreprepareOrigin;
        }
        set origin(value: ValidatePreprepareOrigin) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_origin() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            error?: string;
            origin?: ReturnType<typeof ValidatePreprepareOrigin.prototype.toObject>;
        }): PreprepareValidated {
            const message = new PreprepareValidated({});
            if (data.error != null) {
                message.error = data.error;
            }
            if (data.origin != null) {
                message.origin = ValidatePreprepareOrigin.fromObject(data.origin);
            }
            return message;
        }
        toObject() {
            const data: {
                error?: string;
                origin?: ReturnType<typeof ValidatePreprepareOrigin.prototype.toObject>;
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PreprepareValidated {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PreprepareValidated();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.error = reader.readString();
                        break;
                    case 2:
                        reader.readMessage(message.origin, () => message.origin = ValidatePreprepareOrigin.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): PreprepareValidated {
            return PreprepareValidated.deserialize(bytes);
        }
    }
    export class ValidatePreprepareOrigin extends pb_1.Message {
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
        }): ValidatePreprepareOrigin {
            const message = new ValidatePreprepareOrigin({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ValidatePreprepareOrigin {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ValidatePreprepareOrigin();
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
        static deserializeBinary(bytes: Uint8Array): ValidatePreprepareOrigin {
            return ValidatePreprepareOrigin.deserialize(bytes);
        }
    }
    export class PPrepValidatorChkp extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            membership?: dependency_3.trantorpb.Membership;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("membership" in data && data.membership != undefined) {
                    this.membership = data.membership;
                }
            }
        }
        get membership() {
            return pb_1.Message.getWrapperField(this, dependency_3.trantorpb.Membership, 2) as dependency_3.trantorpb.Membership;
        }
        set membership(value: dependency_3.trantorpb.Membership) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_membership() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            membership?: ReturnType<typeof dependency_3.trantorpb.Membership.prototype.toObject>;
        }): PPrepValidatorChkp {
            const message = new PPrepValidatorChkp({});
            if (data.membership != null) {
                message.membership = dependency_3.trantorpb.Membership.fromObject(data.membership);
            }
            return message;
        }
        toObject() {
            const data: {
                membership?: ReturnType<typeof dependency_3.trantorpb.Membership.prototype.toObject>;
            } = {};
            if (this.membership != null) {
                data.membership = this.membership.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_membership)
                writer.writeMessage(2, this.membership, () => this.membership.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PPrepValidatorChkp {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PPrepValidatorChkp();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 2:
                        reader.readMessage(message.membership, () => message.membership = dependency_3.trantorpb.Membership.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): PPrepValidatorChkp {
            return PPrepValidatorChkp.deserialize(bytes);
        }
    }
}
