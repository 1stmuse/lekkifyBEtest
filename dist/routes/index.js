"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var products_1 = require("../controllers/products");
var cache_1 = require("../cache");
var router = express_1.Router();
router.get('/products', cache_1.cacheAllProducts, products_1.getProducts);
// router.get('/products/:id', getProduct)
router.post('/products', products_1.addProduct);
exports.default = router;
