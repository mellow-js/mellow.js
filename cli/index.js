#!/usr/bin/env node

import yargs from "yargs/yargs"
import { hideBin } from "yargs/helpers"
import server from "./server.js"
import create from "./create.js"
import packages from "./packages.js"
import build from "./build.js"
const argv = yargs(hideBin(process.argv)).argv

if (argv.server != null) {
  server.main()
}

if (argv.create != null) {
  create.main()
}

if (argv.install != null) {
  packages.main()
}

if (argv.build == "android") {
  android.android()
}

if (argv.build == "windows") {
  windows.windows()
}