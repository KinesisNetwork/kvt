#!/usr/bin/env node

import program from 'commander'
import { transferFromCSV, Network } from './transfer'

program
  .usage('<file> [env]')
  .description('File to parse and network to run on. Options are local, test or prod. Defaults to local')
  .parse(process.argv)

const [filename, env] = program.args

transferFromCSV(filename, env as Network)
  .catch((err) => {
    console.error(err.message)
    process.exit(1)
  })
