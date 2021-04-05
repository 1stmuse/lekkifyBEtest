// Update with your config settings.
require('ts-node/register');

import * as dotenv from 'dotenv'
import * as path from 'path';
const BASE_PATH = path.join(__dirname, 'src', 'database');

dotenv.config()

export default  {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool:{
      min: 2,
      max:10
    },
    migrations:{
      tableName: 'knex_migrations',
    },
    seeds:{
      tableName: 'knex_seeds',
      directory: path.resolve(__dirname, 'seeds')
    }
  },

};
