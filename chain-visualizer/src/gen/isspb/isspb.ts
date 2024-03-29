/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.24.4
 * source: isspb/isspb.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../trantorpb/trantorpb";
import * as dependency_2 from "./../checkpointpb/checkpointpb";
import * as dependency_3 from "./../availabilitypb/availabilitypb";
import * as dependency_4 from "./../mir/codegen_extensions";
import * as dependency_5 from "./../net/codegen_extensions";
import * as pb_1 from "google-protobuf";
export namespace isspb {
    export class ISSMessage extends pb_1.Message {
        #one_of_decls: number[][] = [[3]];
        constructor(data?: any[] | ({} & (({
            stable_checkpoint?: dependency_2.checkpointpb.StableCheckpoint;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("stable_checkpoint" in data && data.stable_checkpoint != undefined) {
                    this.stable_checkpoint = data.stable_checkpoint;
                }
            }
        }
        get stable_checkpoint() {
            return pb_1.Message.getWrapperField(this, dependency_2.checkpointpb.StableCheckpoint, 3) as dependency_2.checkpointpb.StableCheckpoint;
        }
        set stable_checkpoint(value: dependency_2.checkpointpb.StableCheckpoint) {
            pb_1.Message.setOneofWrapperField(this, 3, this.#one_of_decls[0], value);
        }
        get has_stable_checkpoint() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get type() {
            const cases: {
                [index: number]: "none" | "stable_checkpoint";
            } = {
                0: "none",
                3: "stable_checkpoint"
            };
            return cases[pb_1.Message.computeOneofCase(this, [3])];
        }
        static fromObject(data: {
            stable_checkpoint?: ReturnType<typeof dependency_2.checkpointpb.StableCheckpoint.prototype.toObject>;
        }): ISSMessage {
            const message = new ISSMessage({});
            if (data.stable_checkpoint != null) {
                message.stable_checkpoint = dependency_2.checkpointpb.StableCheckpoint.fromObject(data.stable_checkpoint);
            }
            return message;
        }
        toObject() {
            const data: {
                stable_checkpoint?: ReturnType<typeof dependency_2.checkpointpb.StableCheckpoint.prototype.toObject>;
            } = {};
            if (this.stable_checkpoint != null) {
                data.stable_checkpoint = this.stable_checkpoint.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_stable_checkpoint)
                writer.writeMessage(3, this.stable_checkpoint, () => this.stable_checkpoint.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ISSMessage {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ISSMessage();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 3:
                        reader.readMessage(message.stable_checkpoint, () => message.stable_checkpoint = dependency_2.checkpointpb.StableCheckpoint.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ISSMessage {
            return ISSMessage.deserialize(bytes);
        }
    }
    export class Event extends pb_1.Message {
        #one_of_decls: number[][] = [[1, 2, 3, 4]];
        constructor(data?: any[] | ({} & (({
            push_checkpoint?: PushCheckpoint;
            sb_deliver?: never;
            deliver_cert?: never;
            new_config?: never;
        } | {
            push_checkpoint?: never;
            sb_deliver?: SBDeliver;
            deliver_cert?: never;
            new_config?: never;
        } | {
            push_checkpoint?: never;
            sb_deliver?: never;
            deliver_cert?: DeliverCert;
            new_config?: never;
        } | {
            push_checkpoint?: never;
            sb_deliver?: never;
            deliver_cert?: never;
            new_config?: NewConfig;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("push_checkpoint" in data && data.push_checkpoint != undefined) {
                    this.push_checkpoint = data.push_checkpoint;
                }
                if ("sb_deliver" in data && data.sb_deliver != undefined) {
                    this.sb_deliver = data.sb_deliver;
                }
                if ("deliver_cert" in data && data.deliver_cert != undefined) {
                    this.deliver_cert = data.deliver_cert;
                }
                if ("new_config" in data && data.new_config != undefined) {
                    this.new_config = data.new_config;
                }
            }
        }
        get push_checkpoint() {
            return pb_1.Message.getWrapperField(this, PushCheckpoint, 1) as PushCheckpoint;
        }
        set push_checkpoint(value: PushCheckpoint) {
            pb_1.Message.setOneofWrapperField(this, 1, this.#one_of_decls[0], value);
        }
        get has_push_checkpoint() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get sb_deliver() {
            return pb_1.Message.getWrapperField(this, SBDeliver, 2) as SBDeliver;
        }
        set sb_deliver(value: SBDeliver) {
            pb_1.Message.setOneofWrapperField(this, 2, this.#one_of_decls[0], value);
        }
        get has_sb_deliver() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get deliver_cert() {
            return pb_1.Message.getWrapperField(this, DeliverCert, 3) as DeliverCert;
        }
        set deliver_cert(value: DeliverCert) {
            pb_1.Message.setOneofWrapperField(this, 3, this.#one_of_decls[0], value);
        }
        get has_deliver_cert() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get new_config() {
            return pb_1.Message.getWrapperField(this, NewConfig, 4) as NewConfig;
        }
        set new_config(value: NewConfig) {
            pb_1.Message.setOneofWrapperField(this, 4, this.#one_of_decls[0], value);
        }
        get has_new_config() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get type() {
            const cases: {
                [index: number]: "none" | "push_checkpoint" | "sb_deliver" | "deliver_cert" | "new_config";
            } = {
                0: "none",
                1: "push_checkpoint",
                2: "sb_deliver",
                3: "deliver_cert",
                4: "new_config"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2, 3, 4])];
        }
        static fromObject(data: {
            push_checkpoint?: ReturnType<typeof PushCheckpoint.prototype.toObject>;
            sb_deliver?: ReturnType<typeof SBDeliver.prototype.toObject>;
            deliver_cert?: ReturnType<typeof DeliverCert.prototype.toObject>;
            new_config?: ReturnType<typeof NewConfig.prototype.toObject>;
        }): Event {
            const message = new Event({});
            if (data.push_checkpoint != null) {
                message.push_checkpoint = PushCheckpoint.fromObject(data.push_checkpoint);
            }
            if (data.sb_deliver != null) {
                message.sb_deliver = SBDeliver.fromObject(data.sb_deliver);
            }
            if (data.deliver_cert != null) {
                message.deliver_cert = DeliverCert.fromObject(data.deliver_cert);
            }
            if (data.new_config != null) {
                message.new_config = NewConfig.fromObject(data.new_config);
            }
            return message;
        }
        toObject() {
            const data: {
                push_checkpoint?: ReturnType<typeof PushCheckpoint.prototype.toObject>;
                sb_deliver?: ReturnType<typeof SBDeliver.prototype.toObject>;
                deliver_cert?: ReturnType<typeof DeliverCert.prototype.toObject>;
                new_config?: ReturnType<typeof NewConfig.prototype.toObject>;
            } = {};
            if (this.push_checkpoint != null) {
                data.push_checkpoint = this.push_checkpoint.toObject();
            }
            if (this.sb_deliver != null) {
                data.sb_deliver = this.sb_deliver.toObject();
            }
            if (this.deliver_cert != null) {
                data.deliver_cert = this.deliver_cert.toObject();
            }
            if (this.new_config != null) {
                data.new_config = this.new_config.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_push_checkpoint)
                writer.writeMessage(1, this.push_checkpoint, () => this.push_checkpoint.serialize(writer));
            if (this.has_sb_deliver)
                writer.writeMessage(2, this.sb_deliver, () => this.sb_deliver.serialize(writer));
            if (this.has_deliver_cert)
                writer.writeMessage(3, this.deliver_cert, () => this.deliver_cert.serialize(writer));
            if (this.has_new_config)
                writer.writeMessage(4, this.new_config, () => this.new_config.serialize(writer));
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
                        reader.readMessage(message.push_checkpoint, () => message.push_checkpoint = PushCheckpoint.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.sb_deliver, () => message.sb_deliver = SBDeliver.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.deliver_cert, () => message.deliver_cert = DeliverCert.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.new_config, () => message.new_config = NewConfig.deserialize(reader));
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
    export class PushCheckpoint extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {}) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") { }
        }
        static fromObject(data: {}): PushCheckpoint {
            const message = new PushCheckpoint({});
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
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): PushCheckpoint {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new PushCheckpoint();
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
        static deserializeBinary(bytes: Uint8Array): PushCheckpoint {
            return PushCheckpoint.deserialize(bytes);
        }
    }
    export class SBDeliver extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            sn?: number;
            data?: Uint8Array;
            aborted?: boolean;
            leader?: string;
            instance_id?: string;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("sn" in data && data.sn != undefined) {
                    this.sn = data.sn;
                }
                if ("data" in data && data.data != undefined) {
                    this.data = data.data;
                }
                if ("aborted" in data && data.aborted != undefined) {
                    this.aborted = data.aborted;
                }
                if ("leader" in data && data.leader != undefined) {
                    this.leader = data.leader;
                }
                if ("instance_id" in data && data.instance_id != undefined) {
                    this.instance_id = data.instance_id;
                }
            }
        }
        get sn() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set sn(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get data() {
            return pb_1.Message.getFieldWithDefault(this, 2, new Uint8Array(0)) as Uint8Array;
        }
        set data(value: Uint8Array) {
            pb_1.Message.setField(this, 2, value);
        }
        get aborted() {
            return pb_1.Message.getFieldWithDefault(this, 3, false) as boolean;
        }
        set aborted(value: boolean) {
            pb_1.Message.setField(this, 3, value);
        }
        get leader() {
            return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
        }
        set leader(value: string) {
            pb_1.Message.setField(this, 4, value);
        }
        get instance_id() {
            return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
        }
        set instance_id(value: string) {
            pb_1.Message.setField(this, 5, value);
        }
        static fromObject(data: {
            sn?: number;
            data?: Uint8Array;
            aborted?: boolean;
            leader?: string;
            instance_id?: string;
        }): SBDeliver {
            const message = new SBDeliver({});
            if (data.sn != null) {
                message.sn = data.sn;
            }
            if (data.data != null) {
                message.data = data.data;
            }
            if (data.aborted != null) {
                message.aborted = data.aborted;
            }
            if (data.leader != null) {
                message.leader = data.leader;
            }
            if (data.instance_id != null) {
                message.instance_id = data.instance_id;
            }
            return message;
        }
        toObject() {
            const data: {
                sn?: number;
                data?: Uint8Array;
                aborted?: boolean;
                leader?: string;
                instance_id?: string;
            } = {};
            if (this.sn != null) {
                data.sn = this.sn;
            }
            if (this.data != null) {
                data.data = this.data;
            }
            if (this.aborted != null) {
                data.aborted = this.aborted;
            }
            if (this.leader != null) {
                data.leader = this.leader;
            }
            if (this.instance_id != null) {
                data.instance_id = this.instance_id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.sn != 0)
                writer.writeUint64(1, this.sn);
            if (this.data.length)
                writer.writeBytes(2, this.data);
            if (this.aborted != false)
                writer.writeBool(3, this.aborted);
            if (this.leader.length)
                writer.writeString(4, this.leader);
            if (this.instance_id.length)
                writer.writeString(5, this.instance_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): SBDeliver {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new SBDeliver();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.sn = reader.readUint64();
                        break;
                    case 2:
                        message.data = reader.readBytes();
                        break;
                    case 3:
                        message.aborted = reader.readBool();
                        break;
                    case 4:
                        message.leader = reader.readString();
                        break;
                    case 5:
                        message.instance_id = reader.readString();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): SBDeliver {
            return SBDeliver.deserialize(bytes);
        }
    }
    export class DeliverCert extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            sn?: number;
            cert?: dependency_3.availabilitypb.Cert;
            empty?: boolean;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("sn" in data && data.sn != undefined) {
                    this.sn = data.sn;
                }
                if ("cert" in data && data.cert != undefined) {
                    this.cert = data.cert;
                }
                if ("empty" in data && data.empty != undefined) {
                    this.empty = data.empty;
                }
            }
        }
        get sn() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set sn(value: number) {
            pb_1.Message.setField(this, 1, value);
        }
        get cert() {
            return pb_1.Message.getWrapperField(this, dependency_3.availabilitypb.Cert, 2) as dependency_3.availabilitypb.Cert;
        }
        set cert(value: dependency_3.availabilitypb.Cert) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_cert() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get empty() {
            return pb_1.Message.getFieldWithDefault(this, 3, false) as boolean;
        }
        set empty(value: boolean) {
            pb_1.Message.setField(this, 3, value);
        }
        static fromObject(data: {
            sn?: number;
            cert?: ReturnType<typeof dependency_3.availabilitypb.Cert.prototype.toObject>;
            empty?: boolean;
        }): DeliverCert {
            const message = new DeliverCert({});
            if (data.sn != null) {
                message.sn = data.sn;
            }
            if (data.cert != null) {
                message.cert = dependency_3.availabilitypb.Cert.fromObject(data.cert);
            }
            if (data.empty != null) {
                message.empty = data.empty;
            }
            return message;
        }
        toObject() {
            const data: {
                sn?: number;
                cert?: ReturnType<typeof dependency_3.availabilitypb.Cert.prototype.toObject>;
                empty?: boolean;
            } = {};
            if (this.sn != null) {
                data.sn = this.sn;
            }
            if (this.cert != null) {
                data.cert = this.cert.toObject();
            }
            if (this.empty != null) {
                data.empty = this.empty;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.sn != 0)
                writer.writeUint64(1, this.sn);
            if (this.has_cert)
                writer.writeMessage(2, this.cert, () => this.cert.serialize(writer));
            if (this.empty != false)
                writer.writeBool(3, this.empty);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): DeliverCert {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new DeliverCert();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.sn = reader.readUint64();
                        break;
                    case 2:
                        reader.readMessage(message.cert, () => message.cert = dependency_3.availabilitypb.Cert.deserialize(reader));
                        break;
                    case 3:
                        message.empty = reader.readBool();
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): DeliverCert {
            return DeliverCert.deserialize(bytes);
        }
    }
    export class NewConfig extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            epoch_nr?: number;
            membership?: dependency_1.trantorpb.Membership;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("epoch_nr" in data && data.epoch_nr != undefined) {
                    this.epoch_nr = data.epoch_nr;
                }
                if ("membership" in data && data.membership != undefined) {
                    this.membership = data.membership;
                }
            }
        }
        get epoch_nr() {
            return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
        }
        set epoch_nr(value: number) {
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
        static fromObject(data: {
            epoch_nr?: number;
            membership?: ReturnType<typeof dependency_1.trantorpb.Membership.prototype.toObject>;
        }): NewConfig {
            const message = new NewConfig({});
            if (data.epoch_nr != null) {
                message.epoch_nr = data.epoch_nr;
            }
            if (data.membership != null) {
                message.membership = dependency_1.trantorpb.Membership.fromObject(data.membership);
            }
            return message;
        }
        toObject() {
            const data: {
                epoch_nr?: number;
                membership?: ReturnType<typeof dependency_1.trantorpb.Membership.prototype.toObject>;
            } = {};
            if (this.epoch_nr != null) {
                data.epoch_nr = this.epoch_nr;
            }
            if (this.membership != null) {
                data.membership = this.membership.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.epoch_nr != 0)
                writer.writeUint64(1, this.epoch_nr);
            if (this.has_membership)
                writer.writeMessage(2, this.membership, () => this.membership.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): NewConfig {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new NewConfig();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.epoch_nr = reader.readUint64();
                        break;
                    case 2:
                        reader.readMessage(message.membership, () => message.membership = dependency_1.trantorpb.Membership.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): NewConfig {
            return NewConfig.deserialize(bytes);
        }
    }
}
