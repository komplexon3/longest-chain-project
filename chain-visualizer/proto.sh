#!/bin/bash

protoc \
    --plugin="./node_modules/.bin/protoc-gen-ts" \
    --ts_opt=esModuleInterop=true \
    --ts_out="./src/gen" \
    --proto_path="../mir/protos" \
    mir/codegen_extensions.proto \
    blockchainpb/blockchainpb.proto