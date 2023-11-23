/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.24.4
 * source: hasherpb/hasherpb.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../contextstorepb/contextstorepb";
import * as dependency_2 from "./../dslpb/dslpb";
import * as dependency_3 from "./../mir/codegen_extensions";
import * as pb_1 from "google-protobuf";
export namespace hasherpb {
    export class Event extends pb_1.Message {
        #one_of_decls: number[][] = [[1, 2, 3, 4]];
        constructor(data?: any[] | ({} & (({
            request?: Request;
            result?: never;
            request_one?: never;
            result_one?: never;
        } | {
            request?: never;
            result?: Result;
            request_one?: never;
            result_one?: never;
        } | {
            request?: never;
            result?: never;
            request_one?: RequestOne;
            result_one?: never;
        } | {
            request?: never;
            result?: never;
            request_one?: never;
            result_one?: ResultOne;
        })))) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("request" in data && data.request != undefined) {
                    this.request = data.request;
                }
                if ("result" in data && data.result != undefined) {
                    this.result = data.result;
                }
                if ("request_one" in data && data.request_one != undefined) {
                    this.request_one = data.request_one;
                }
                if ("result_one" in data && data.result_one != undefined) {
                    this.result_one = data.result_one;
                }
            }
        }
        get request() {
            return pb_1.Message.getWrapperField(this, Request, 1) as Request;
        }
        set request(value: Request) {
            pb_1.Message.setOneofWrapperField(this, 1, this.#one_of_decls[0], value);
        }
        get has_request() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get result() {
            return pb_1.Message.getWrapperField(this, Result, 2) as Result;
        }
        set result(value: Result) {
            pb_1.Message.setOneofWrapperField(this, 2, this.#one_of_decls[0], value);
        }
        get has_result() {
            return pb_1.Message.getField(this, 2) != null;
        }
        get request_one() {
            return pb_1.Message.getWrapperField(this, RequestOne, 3) as RequestOne;
        }
        set request_one(value: RequestOne) {
            pb_1.Message.setOneofWrapperField(this, 3, this.#one_of_decls[0], value);
        }
        get has_request_one() {
            return pb_1.Message.getField(this, 3) != null;
        }
        get result_one() {
            return pb_1.Message.getWrapperField(this, ResultOne, 4) as ResultOne;
        }
        set result_one(value: ResultOne) {
            pb_1.Message.setOneofWrapperField(this, 4, this.#one_of_decls[0], value);
        }
        get has_result_one() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get Type() {
            const cases: {
                [index: number]: "none" | "request" | "result" | "request_one" | "result_one";
            } = {
                0: "none",
                1: "request",
                2: "result",
                3: "request_one",
                4: "result_one"
            };
            return cases[pb_1.Message.computeOneofCase(this, [1, 2, 3, 4])];
        }
        static fromObject(data: {
            request?: ReturnType<typeof Request.prototype.toObject>;
            result?: ReturnType<typeof Result.prototype.toObject>;
            request_one?: ReturnType<typeof RequestOne.prototype.toObject>;
            result_one?: ReturnType<typeof ResultOne.prototype.toObject>;
        }): Event {
            const message = new Event({});
            if (data.request != null) {
                message.request = Request.fromObject(data.request);
            }
            if (data.result != null) {
                message.result = Result.fromObject(data.result);
            }
            if (data.request_one != null) {
                message.request_one = RequestOne.fromObject(data.request_one);
            }
            if (data.result_one != null) {
                message.result_one = ResultOne.fromObject(data.result_one);
            }
            return message;
        }
        toObject() {
            const data: {
                request?: ReturnType<typeof Request.prototype.toObject>;
                result?: ReturnType<typeof Result.prototype.toObject>;
                request_one?: ReturnType<typeof RequestOne.prototype.toObject>;
                result_one?: ReturnType<typeof ResultOne.prototype.toObject>;
            } = {};
            if (this.request != null) {
                data.request = this.request.toObject();
            }
            if (this.result != null) {
                data.result = this.result.toObject();
            }
            if (this.request_one != null) {
                data.request_one = this.request_one.toObject();
            }
            if (this.result_one != null) {
                data.result_one = this.result_one.toObject();
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.has_request)
                writer.writeMessage(1, this.request, () => this.request.serialize(writer));
            if (this.has_result)
                writer.writeMessage(2, this.result, () => this.result.serialize(writer));
            if (this.has_request_one)
                writer.writeMessage(3, this.request_one, () => this.request_one.serialize(writer));
            if (this.has_result_one)
                writer.writeMessage(4, this.result_one, () => this.result_one.serialize(writer));
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
                        reader.readMessage(message.request, () => message.request = Request.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.result, () => message.result = Result.deserialize(reader));
                        break;
                    case 3:
                        reader.readMessage(message.request_one, () => message.request_one = RequestOne.deserialize(reader));
                        break;
                    case 4:
                        reader.readMessage(message.result_one, () => message.result_one = ResultOne.deserialize(reader));
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
    export class Request extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            data?: HashData[];
            origin?: HashOrigin;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("data" in data && data.data != undefined) {
                    this.data = data.data;
                }
                if ("origin" in data && data.origin != undefined) {
                    this.origin = data.origin;
                }
            }
        }
        get data() {
            return pb_1.Message.getRepeatedWrapperField(this, HashData, 1) as HashData[];
        }
        set data(value: HashData[]) {
            pb_1.Message.setRepeatedWrapperField(this, 1, value);
        }
        get origin() {
            return pb_1.Message.getWrapperField(this, HashOrigin, 2) as HashOrigin;
        }
        set origin(value: HashOrigin) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_origin() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            data?: ReturnType<typeof HashData.prototype.toObject>[];
            origin?: ReturnType<typeof HashOrigin.prototype.toObject>;
        }): Request {
            const message = new Request({});
            if (data.data != null) {
                message.data = data.data.map(item => HashData.fromObject(item));
            }
            if (data.origin != null) {
                message.origin = HashOrigin.fromObject(data.origin);
            }
            return message;
        }
        toObject() {
            const data: {
                data?: ReturnType<typeof HashData.prototype.toObject>[];
                origin?: ReturnType<typeof HashOrigin.prototype.toObject>;
            } = {};
            if (this.data != null) {
                data.data = this.data.map((item: HashData) => item.toObject());
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
            if (this.data.length)
                writer.writeRepeatedMessage(1, this.data, (item: HashData) => item.serialize(writer));
            if (this.has_origin)
                writer.writeMessage(2, this.origin, () => this.origin.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Request {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Request();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.data, () => pb_1.Message.addToRepeatedWrapperField(message, 1, HashData.deserialize(reader), HashData));
                        break;
                    case 2:
                        reader.readMessage(message.origin, () => message.origin = HashOrigin.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Request {
            return Request.deserialize(bytes);
        }
    }
    export class Result extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            digests?: Uint8Array[];
            origin?: HashOrigin;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("digests" in data && data.digests != undefined) {
                    this.digests = data.digests;
                }
                if ("origin" in data && data.origin != undefined) {
                    this.origin = data.origin;
                }
            }
        }
        get digests() {
            return pb_1.Message.getFieldWithDefault(this, 1, []) as Uint8Array[];
        }
        set digests(value: Uint8Array[]) {
            pb_1.Message.setField(this, 1, value);
        }
        get origin() {
            return pb_1.Message.getWrapperField(this, HashOrigin, 2) as HashOrigin;
        }
        set origin(value: HashOrigin) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_origin() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            digests?: Uint8Array[];
            origin?: ReturnType<typeof HashOrigin.prototype.toObject>;
        }): Result {
            const message = new Result({});
            if (data.digests != null) {
                message.digests = data.digests;
            }
            if (data.origin != null) {
                message.origin = HashOrigin.fromObject(data.origin);
            }
            return message;
        }
        toObject() {
            const data: {
                digests?: Uint8Array[];
                origin?: ReturnType<typeof HashOrigin.prototype.toObject>;
            } = {};
            if (this.digests != null) {
                data.digests = this.digests;
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
            if (this.digests.length)
                writer.writeRepeatedBytes(1, this.digests);
            if (this.has_origin)
                writer.writeMessage(2, this.origin, () => this.origin.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Result {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Result();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        pb_1.Message.addToRepeatedField(message, 1, reader.readBytes());
                        break;
                    case 2:
                        reader.readMessage(message.origin, () => message.origin = HashOrigin.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): Result {
            return Result.deserialize(bytes);
        }
    }
    export class RequestOne extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            data?: HashData;
            origin?: HashOrigin;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("data" in data && data.data != undefined) {
                    this.data = data.data;
                }
                if ("origin" in data && data.origin != undefined) {
                    this.origin = data.origin;
                }
            }
        }
        get data() {
            return pb_1.Message.getWrapperField(this, HashData, 1) as HashData;
        }
        set data(value: HashData) {
            pb_1.Message.setWrapperField(this, 1, value);
        }
        get has_data() {
            return pb_1.Message.getField(this, 1) != null;
        }
        get origin() {
            return pb_1.Message.getWrapperField(this, HashOrigin, 2) as HashOrigin;
        }
        set origin(value: HashOrigin) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_origin() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            data?: ReturnType<typeof HashData.prototype.toObject>;
            origin?: ReturnType<typeof HashOrigin.prototype.toObject>;
        }): RequestOne {
            const message = new RequestOne({});
            if (data.data != null) {
                message.data = HashData.fromObject(data.data);
            }
            if (data.origin != null) {
                message.origin = HashOrigin.fromObject(data.origin);
            }
            return message;
        }
        toObject() {
            const data: {
                data?: ReturnType<typeof HashData.prototype.toObject>;
                origin?: ReturnType<typeof HashOrigin.prototype.toObject>;
            } = {};
            if (this.data != null) {
                data.data = this.data.toObject();
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
            if (this.has_data)
                writer.writeMessage(1, this.data, () => this.data.serialize(writer));
            if (this.has_origin)
                writer.writeMessage(2, this.origin, () => this.origin.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): RequestOne {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new RequestOne();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        reader.readMessage(message.data, () => message.data = HashData.deserialize(reader));
                        break;
                    case 2:
                        reader.readMessage(message.origin, () => message.origin = HashOrigin.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): RequestOne {
            return RequestOne.deserialize(bytes);
        }
    }
    export class ResultOne extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            digest?: Uint8Array;
            origin?: HashOrigin;
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("digest" in data && data.digest != undefined) {
                    this.digest = data.digest;
                }
                if ("origin" in data && data.origin != undefined) {
                    this.origin = data.origin;
                }
            }
        }
        get digest() {
            return pb_1.Message.getFieldWithDefault(this, 1, new Uint8Array(0)) as Uint8Array;
        }
        set digest(value: Uint8Array) {
            pb_1.Message.setField(this, 1, value);
        }
        get origin() {
            return pb_1.Message.getWrapperField(this, HashOrigin, 2) as HashOrigin;
        }
        set origin(value: HashOrigin) {
            pb_1.Message.setWrapperField(this, 2, value);
        }
        get has_origin() {
            return pb_1.Message.getField(this, 2) != null;
        }
        static fromObject(data: {
            digest?: Uint8Array;
            origin?: ReturnType<typeof HashOrigin.prototype.toObject>;
        }): ResultOne {
            const message = new ResultOne({});
            if (data.digest != null) {
                message.digest = data.digest;
            }
            if (data.origin != null) {
                message.origin = HashOrigin.fromObject(data.origin);
            }
            return message;
        }
        toObject() {
            const data: {
                digest?: Uint8Array;
                origin?: ReturnType<typeof HashOrigin.prototype.toObject>;
            } = {};
            if (this.digest != null) {
                data.digest = this.digest;
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
            if (this.digest.length)
                writer.writeBytes(1, this.digest);
            if (this.has_origin)
                writer.writeMessage(2, this.origin, () => this.origin.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ResultOne {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ResultOne();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        message.digest = reader.readBytes();
                        break;
                    case 2:
                        reader.readMessage(message.origin, () => message.origin = HashOrigin.deserialize(reader));
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): ResultOne {
            return ResultOne.deserialize(bytes);
        }
    }
    export class HashOrigin extends pb_1.Message {
        #one_of_decls: number[][] = [[2, 4]];
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
            return pb_1.Message.getWrapperField(this, dependency_2.dslpb.Origin, 4) as dependency_2.dslpb.Origin;
        }
        set dsl(value: dependency_2.dslpb.Origin) {
            pb_1.Message.setOneofWrapperField(this, 4, this.#one_of_decls[0], value);
        }
        get has_dsl() {
            return pb_1.Message.getField(this, 4) != null;
        }
        get type() {
            const cases: {
                [index: number]: "none" | "context_store" | "dsl";
            } = {
                0: "none",
                2: "context_store",
                4: "dsl"
            };
            return cases[pb_1.Message.computeOneofCase(this, [2, 4])];
        }
        static fromObject(data: {
            module?: string;
            context_store?: ReturnType<typeof dependency_1.contextstorepb.Origin.prototype.toObject>;
            dsl?: ReturnType<typeof dependency_2.dslpb.Origin.prototype.toObject>;
        }): HashOrigin {
            const message = new HashOrigin({});
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
                writer.writeMessage(4, this.dsl, () => this.dsl.serialize(writer));
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HashOrigin {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HashOrigin();
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
                    case 4:
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
        static deserializeBinary(bytes: Uint8Array): HashOrigin {
            return HashOrigin.deserialize(bytes);
        }
    }
    export class HashData extends pb_1.Message {
        #one_of_decls: number[][] = [];
        constructor(data?: any[] | {
            data?: Uint8Array[];
        }) {
            super();
            pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1], this.#one_of_decls);
            if (!Array.isArray(data) && typeof data == "object") {
                if ("data" in data && data.data != undefined) {
                    this.data = data.data;
                }
            }
        }
        get data() {
            return pb_1.Message.getFieldWithDefault(this, 1, []) as Uint8Array[];
        }
        set data(value: Uint8Array[]) {
            pb_1.Message.setField(this, 1, value);
        }
        static fromObject(data: {
            data?: Uint8Array[];
        }): HashData {
            const message = new HashData({});
            if (data.data != null) {
                message.data = data.data;
            }
            return message;
        }
        toObject() {
            const data: {
                data?: Uint8Array[];
            } = {};
            if (this.data != null) {
                data.data = this.data;
            }
            return data;
        }
        serialize(): Uint8Array;
        serialize(w: pb_1.BinaryWriter): void;
        serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
            const writer = w || new pb_1.BinaryWriter();
            if (this.data.length)
                writer.writeRepeatedBytes(1, this.data);
            if (!w)
                return writer.getResultBuffer();
        }
        static deserialize(bytes: Uint8Array | pb_1.BinaryReader): HashData {
            const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new HashData();
            while (reader.nextField()) {
                if (reader.isEndGroup())
                    break;
                switch (reader.getFieldNumber()) {
                    case 1:
                        pb_1.Message.addToRepeatedField(message, 1, reader.readBytes());
                        break;
                    default: reader.skipField();
                }
            }
            return message;
        }
        serializeBinary(): Uint8Array {
            return this.serialize();
        }
        static deserializeBinary(bytes: Uint8Array): HashData {
            return HashData.deserialize(bytes);
        }
    }
}