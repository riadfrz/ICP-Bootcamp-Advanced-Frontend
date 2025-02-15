#!/bin/sh

npm i
dfx identity new codespace_dev --storage-mode=plaintext
dfx identity use codespace_dev
npx azle install-dfx-extension
dfx start --background
dfx stop
