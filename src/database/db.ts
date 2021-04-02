import knex from 'knex';
import * as redis from 'redis'
import * as dotenv from 'dotenv'

dotenv.config()

const REDIS_PORT = Number(process.env.REDIS_PORT) || 6379
const REDIS_HOST = process.env.REDIS_HOST || "127.0.0.1"

export const redixClient = redis.createClient(REDIS_PORT, REDIS_HOST )


import connecttion from './knexfile'

console.log('connecting to databsaae')

const db = knex(connecttion?.development)

export default db