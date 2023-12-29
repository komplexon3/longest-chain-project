/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.24.4
 * source: blockchainpb/interceptorpb/interceptorpb.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../blockchainpb";
import * as dependency_2 from "./../statepb/statepb";
import * as dependency_3 from "./../../mir/codegen_extensions";
import * as pb_1 from "google-protobuf";
export namespace interceptorpb {
    export class Event extends pb_1.Message {
        #one_of_decls: number[][] = [[1, 2, 3]];
        constructor(data?: any[] | ({} & (({
            tree_update?: TreeUpdate;
            new_orphan?: never;
            app_update?: never;
        } | {
            tree_update?: never;
            new_orphan?: NewOrphan;
            app_update?: never;
        } | {
            tree_update?: never;
            new_orphan?: never;
            app_update?: AppUpdate;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("tree_update" in data && data.tree_update != undefined) {
                    this.tree_update = data.tree_update;
                }
                if ("new_orphan" in data && data.new_orphan != undefined) {
                    this.new_orphan = data.new_orphan;
                }
                if ("app_update" in data && data.app_update != undefined) {
                    this.app_update = data.app_update;
                }
            }
        }
        get tree_update() {
            return pb_1.Message.getWrapperField(this, TreeUpdate, 1) as TreeUpdate;
        }
        set tree_update(value: TreeUpdate) {
            pb_1.Message.setOneofWrapperField(this, 1, this.#one_of_decls[0], value);
        }
        get has_tree_update() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get new_orphan() {
            return pb_1.Message.getWrapperField(this, NewOrphan, 2) as NewOrphan;
        }
        set new_orphan(value: NewOrphan) {
            pb_1.Message.setOneofWrapperField(this, 2, this.#one_of_decls[0], value);
        }
        get has_new_orphan() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get app_update() {
            return pb_1.Message.getWrapperField(this, AppUpdate, 3) as AppUpdate;
        }
        set app_update(value: AppUpdate) {
            pb_1.Message.setOneofWrapperField(this, 3, this.#one_of_decls[0], value);
        }
        get has_app_update() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get type() {
            const cases: {
                [index: number]: "none" | "tree_update" | "new_orphan" | "app_update";
            } = {
                0: "none",
                1: "tree_update",
                2: "new_orphan",
                3: "app_update"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2, 3])];
        }
        static fromObject(data: {
            tree_update?: ReturnType<typeof TreeUpdate.prototype.toObject>;
            new_orphan?: ReturnType<typeof NewOrphan.prototype.toObject>;
            app_update?: ReturnType<typeof AppUpdate.prototype.toObject>;
        }): Event {
            const message = new Event({});
            if (data.tree_update != null) {
                message.tree_update = TreeUpdate.fromObject(data.tree_update);
            }
            if (data.new_orphan != null) {
                message.new_orphan = NewOrphan.fromObject(data.new_orphan);
            }
            if (data.app_update != null) {
                message.app_update = AppUpdate.fromObject(data.app_update);
            }
            return message;
        }
        toObject() {
            const data: {
                tree_update?: ReturnType<typeof TreeUpdate.prototype.toObject>;
                new_orphan?: ReturnType<typeof NewOrphan.prototype.toObject>;
                app_update?: ReturnType<typeof AppUpdate.prototype.toObject>;
            } = {};
            if (this.tree_update != null) {
                data.tree_update = this.tree_update.toObject();
            }
            if (this.new_orphan != null) {
                data.new_orphan = this.new_orphan.toObject();
            }
            if (this.app_update != null) {
                data.app_update = this.app_update.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_tree_update)
                writer.writeMessage(1, this.tree_update, () => this.tree_update.serialize(writer));
            if (this.has_new_orphan)
                writer.writeMessage(2, this.new_orphan, () => this.new_orphan.serialize(writer));
            if (this.has_app_update)
                writer.writeMessage(3, this.app_update, () => this.app_update.serialize(writer));
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
                        reader.readMessage(message.tree_update, () => message.tree_update = TreeUpdate.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.new_orphan, () => message.new_orphan = NewOrphan.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.app_update, () => message.app_update = AppUpdate.deserialize(reader));
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
    export class TreeUpdate extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            tree?: dependency_1.blockchainpb.Blocktree;
            head_id?: number;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("tree" in data && data.tree != undefined) {
                    this.tree = data.tree;
                }
                if ("head_id" in data && data.head_id != undefined) {
                    this.head_id = data.head_id;
                }
            }
        }
        get tree() {
            return pb_1.Message.getWrapperField(this, dependency_1.blockchainpb.Blocktree, 1) as dependency_1.blockchainpb.Blocktree;
        }
        set tree(value: dependency_1.blockchainpb.Blocktree) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_tree() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get head_id() {
            return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
        }
        set head_id(value: number) {
            pb_1.Message.setField(this, 2, value);
        }
        static fromObject(data: {
            tree?: ReturnType<typeof dependency_1.blockchainpb.Blocktree.prototype.toObject>;
            head_id?: number;
        }): TreeUpdate {
            const message = new TreeUpdate({});
            if (data.tree != null) {
                message.tree = dependency_1.blockchainpb.Blocktree.fromObject(data.tree);
            }
            if (data.head_id != null) {
                message.head_id = data.head_id;
            }
            return message;
        }
        toObject() {
            const data: {
                tree?: ReturnType<typeof dependency_1.blockchainpb.Blocktree.prototype.toObject>;
                head_id?: number;
            } = {};
            if (this.tree != null) {
                data.tree = this.tree.toObject();
            }
            if (this.head_id != null) {
                data.head_id = this.head_id;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_tree)
                writer.writeMessage(1, this.tree, () => this.tree.serialize(writer));
            if (this.head_id != 0)
                writer.writeUint64(2, this.head_id);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TreeUpdate {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TreeUpdate();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.tree, () => message.tree = dependency_1.blockchainpb.Blocktree.deserialize(reader));
                        break;
                    case 2:
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
        static deserializeBinary(bytes: Uint8Array): TreeUpdate {
            return TreeUpdate.deserialize(bytes);
        }
    }
    export class NewOrphan extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            orphan?: dependency_1.blockchainpb.Block;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("orphan" in data && data.orphan != undefined) {
                    this.orphan = data.orphan;
                }
            }
        }
        get orphan() {
            return pb_1.Message.getWrapperField(this, dependency_1.blockchainpb.Block, 1) as dependency_1.blockchainpb.Block;
        }
        set orphan(value: dependency_1.blockchainpb.Block) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_orphan() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            orphan?: ReturnType<typeof dependency_1.blockchainpb.Block.prototype.toObject>;
        }): NewOrphan {
            const message = new NewOrphan({});
            if (data.orphan != null) {
                message.orphan = dependency_1.blockchainpb.Block.fromObject(data.orphan);
            }
            return message;
        }
        toObject() {
            const data: {
                orphan?: ReturnType<typeof dependency_1.blockchainpb.Block.prototype.toObject>;
            } = {};
            if (this.orphan != null) {
                data.orphan = this.orphan.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_orphan)
                writer.writeMessage(1, this.orphan, () => this.orphan.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): NewOrphan {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new NewOrphan();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.orphan, () => message.orphan = dependency_1.blockchainpb.Block.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): NewOrphan {
            return NewOrphan.deserialize(bytes);
        }
    }
    export class AppUpdate extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            state?: dependency_2.statepb.State;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("state" in data && data.state != undefined) {
                    this.state = data.state;
                }
            }
        }
        get state() {
            return pb_1.Message.getWrapperField(this, dependency_2.statepb.State, 1) as dependency_2.statepb.State;
        }
        set state(value: dependency_2.statepb.State) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_state() {
            return pb_1.Message.getField(this, 1) != null;
        }
        static fromObject(data: {
            state?: ReturnType<typeof dependency_2.statepb.State.prototype.toObject>;
        }): AppUpdate {
            const message = new AppUpdate({});
            if (data.state != null) {
                message.state = dependency_2.statepb.State.fromObject(data.state);
            }
            return message;
        }
        toObject() {
            const data: {
                state?: ReturnType<typeof dependency_2.statepb.State.prototype.toObject>;
            } = {};
            if (this.state != null) {
                data.state = this.state.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_state)
                writer.writeMessage(1, this.state, () => this.state.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AppUpdate {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AppUpdate();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.state, () => message.state = dependency_2.statepb.State.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): AppUpdate {
            return AppUpdate.deserialize(bytes);
        }
    }
}
