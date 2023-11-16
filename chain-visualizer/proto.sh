#!/bin/bash

protoc \
    --plugin="./node_modules/.bin/protoc-gen-ts" \
    --ts_opt=esModuleInterop=true \
    --ts_out="./src/gen" \
    --proto_path="../mir/protos" \
    $(find ../mir/protos -name '*.proto')