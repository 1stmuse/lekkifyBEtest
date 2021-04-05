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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = exports.getProduct = exports.getProducts = void 0;
var db_1 = __importStar(require("../database/db"));
var Products = function () { return db_1.default('products'); };
var getProducts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var products, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Products()];
            case 1:
                products = _a.sent();
                db_1.redixClient.setex('allProducts', 86000, JSON.stringify(products));
                return [2 /*return*/, res.status(200).json({
                        message: 'products found',
                        products: products
                    })];
            case 2:
                error_1 = _a.sent();
                throw error_1;
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getProducts = getProducts;
var getProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id_1;
    return __generator(this, function (_a) {
        try {
            id_1 = req.params.id;
            db_1.redixClient.get("product-" + id_1, function (err, data) { return __awaiter(void 0, void 0, void 0, function () {
                var product;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (err)
                                throw err;
                            if (!(data !== null)) return [3 /*break*/, 1];
                            console.log('from redis');
                            res.json({
                                message: 'product found',
                                product: JSON.parse(data)
                            });
                            return [3 /*break*/, 3];
                        case 1: return [4 /*yield*/, Products().select("*")
                                .where({ id: id_1 })];
                        case 2:
                            product = _a.sent();
                            if (!product)
                                res.status(404).json({
                                    message: 'product not found'
                                });
                            res.status(200).json({
                                message: 'product found',
                                product: product
                            });
                            _a.label = 3;
                        case 3: return [2 /*return*/];
                    }
                });
            }); });
        }
        catch (error) {
            throw error;
        }
        return [2 /*return*/];
    });
}); };
exports.getProduct = getProduct;
var addProduct = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, price, image, products, error_2;
    var _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _a = req.body, name_1 = _a.name, price = _a.price, image = _a.image;
                return [4 /*yield*/, Products().insert({
                        name: name_1,
                        price: price,
                        image: image
                    }).returning("*")];
            case 1:
                products = _c.sent();
                db_1.redixClient.setex("product-" + ((_b = products[0]) === null || _b === void 0 ? void 0 : _b.id), 84000, JSON.stringify(products[0]));
                res.status(200).json({
                    message: 'added succesfully', product: products
                });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _c.sent();
                console.log(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.addProduct = addProduct;
