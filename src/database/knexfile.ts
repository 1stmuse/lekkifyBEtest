// Update with your config settings.
require('ts-node/register');

import * as dotenv from 'dotenv'
// import { Config } from 'knex';
import * as path from 'path';
const BASE_PATH = path.join(__dirname, 'src', 'database');

dotenv.config()

export default  {
  development: {
    client: "pg",
    connection: {
      database: 'lekkTest',
      user: 'muse',
      password:'Yourmuse1'
    },
    pool:{
      min: 2,
      max:10
    },
    migrations:{
      tableName: 'knex_migrations',
    },
    seeds:{
      directory: path.join(BASE_PATH, 'seeds')
    }
  },

};
