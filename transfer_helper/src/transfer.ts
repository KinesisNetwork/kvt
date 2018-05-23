import * as fs from 'fs'
import * as path from 'path'
import Web3 from 'web3'
import { default as Web3Class } from 'web3'
import { Account, Contract, Signature, Transaction } from 'web3/types'
import { Token } from './token'

export interface Transfer {
  to: string
  amount: string
}

export enum Network {
  local = 'local',
  test = 'test',
  prod = 'prod',
}

export interface EnvironmentVariables {
  privateKey: string
  contractAddress: string
}

type Networks = { [key in Network]?: string }
const NETWORKS: Networks = {
  [Network.local]: 'http://localhost:8545',
  [Network.test]: 'https://ropsten.infura.io/',
}

export async function transferFromCSV(filename: string, network = Network.local) {
  const web3 = new Web3(NETWORKS[network])
  const environment = validateEnvironment(web3)

  const client = new Token(web3, environment)
  await client.validateIsOwner()

  const transfers = getDetailsFromCSV(filename)
  if (areValidTransfers(transfers, web3)) {
    await client.createTransfers(transfers)
  } else {
    logInvalidTransfers(transfers, web3)
  }
}

function validateEnvironment(web3: Web3): EnvironmentVariables {
  if (!process.env.OWNER_KEY) {
    throw new Error('OWNER_KEY is required')
  }
  if (!process.env.CONTRACT_ADDRESS || !web3.utils.isAddress(process.env.CONTRACT_ADDRESS)) {
    throw new Error('CONTRACT_ADDRESS needs to be a valid address')
  }

  return {
    privateKey: process.env.OWNER_KEY,
    contractAddress: process.env.CONTRACT_ADDRESS,
  }
}

function getDetailsFromCSV(filename: string): Transfer[] {
  const file = fs.readFileSync(filename, 'utf8')
  return file.split('\n')
    .map((line) => line.split(','))
    .map(([amount, to]) => ({ amount, to }))
    .filter(({ amount, to }) => amount && to)
}

function areValidTransfers(transfers: Transfer[], web3: Web3): boolean {
  return transfers.every(({ to }) => web3.utils.isAddress(to))
}

function logInvalidTransfers(transfers: Transfer[], web3: Web3) {
  transfers.forEach(({ to }, index) => {
    if (!web3.utils.isAddress(to)) {
      console.error(`Address ${to} is invalid on line ${index + 1}`)
    }
  })
}
