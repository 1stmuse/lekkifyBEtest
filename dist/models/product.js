"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: true }
}, { timestamps: true });
exports.default = mongoose_1.model('Product', productSchema);
