"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var products_1 = require("../controllers/products");
var router = express_1.Router();
router.get('/products', products_1.getProducts);
router.get('/product/:id', products_1.getProduct);
router.post('/products', products_1.addProduct);
exports.default = router;
