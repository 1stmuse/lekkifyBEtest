"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheAllProducts = void 0;
var db_1 = require("./database/db");
var cacheAllProducts = function (req, res, next) {
    db_1.redixClient.get('allProducts', function (err, data) {
        if (err)
            throw err;
        if (data !== null) {
            console.log('from redis');
            res.json({
                message: 'found ',
                products: JSON.parse(data)
            });
        }
        else {
            next();
        }
    });
};
exports.cacheAllProducts = cacheAllProducts;
