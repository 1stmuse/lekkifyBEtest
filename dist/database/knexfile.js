"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Update with your config settings.
require('ts-node/register');
var dotenv = __importStar(require("dotenv"));
// import { Config } from 'knex';
var path = __importStar(require("path"));
var BASE_PATH = path.join(__dirname, 'src', 'database');
dotenv.config();
exports.default = {
    development: {
        client: "pg",
        connection: {
            database: 'lekkTest',
            user: 'muse',
            password: 'Yourmuse1'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'knex_migrations',
        },
        seeds: {
            directory: path.join(BASE_PATH, 'seeds')
        }
    },
};
