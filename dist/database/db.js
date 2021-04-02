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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redixClient = void 0;
var knex_1 = __importDefault(require("knex"));
var redis = __importStar(require("redis"));
var dotenv = __importStar(require("dotenv"));
dotenv.config();
var REDIS_PORT = Number(process.env.REDIS_PORT) || 6379;
var REDIS_HOST = process.env.REDIS_HOST || "127.0.0.1";
exports.redixClient = redis.createClient(REDIS_PORT, REDIS_HOST);
var knexfile_1 = __importDefault(require("./knexfile"));
console.log('connecting to databsaae');
var db = knex_1.default(knexfile_1.default === null || knexfile_1.default === void 0 ? void 0 : knexfile_1.default.development);
exports.default = db;
