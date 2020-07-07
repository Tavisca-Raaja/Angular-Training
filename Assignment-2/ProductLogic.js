"use strict";
exports.__esModule = true;
exports.ProductLogic = void 0;
var Product_1 = require("./Product");
var ProductLogic = /** @class */ (function () {
    function ProductLogic() {
        this.Products = new Array();
    }
    ProductLogic.prototype.getAllProducts = function () {
        return this.Products;
    };
    ProductLogic.prototype.getProductsByCategory = function (category) {
        return this.Products.filter(function (product) {
            return product.Category === category;
        });
    };
    ProductLogic.prototype.getProductsByManufacturer = function (manufacturer) {
        return this.Products.filter(function (product) {
            return product.Manufacturer === manufacturer;
        });
    };
    ProductLogic.prototype.addProduct = function (id, name, description, manufacturer, category, price) {
        if (this.IsValidProductId(id)) {
            if (this.IsValidateProduct(name, category, description, price)) {
                var newProduct = this.createProduct(id, name, category, manufacturer, description, price);
                this.Products.push(newProduct);
                return this.Products;
            }
        }
        else {
            throw new Error("product already exists");
        }
    };
    ProductLogic.prototype.updateProduct = function (id, name, description, manufacturer, category, price) {
        if (this.IsValidateProduct(name, category, description, price)) {
            var index = this.Products.findIndex(function (prod) { return prod.ProductId === id; });
            if (index == -1) {
                throw new Error('Product not found');
            }
            else {
                this.Products[index] = this.createProduct(id, name, description, category, manufacturer, price);
                return this.Products[index];
            }
        }
    };
    ProductLogic.prototype.deleteProduct = function (productId) {
        var requiredProduct = this.Products.findIndex(function (prod) { return prod.ProductId === productId; });
        this.Products.splice(requiredProduct, 1);
        return this.Products;
    };
    ProductLogic.prototype.SaveAllProducts = function (products) {
        var _a;
        (_a = this.Products).push.apply(_a, products);
    };
    ProductLogic.prototype.createProduct = function (id, name, description, category, manufacturer, price) {
        return new Product_1.Product(id, name, category, manufacturer, description, price);
    };
    ProductLogic.prototype.IsValidProductId = function (id) {
        for (var _i = 0, _a = this.Products; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.ProductId === id) {
                return false;
            }
        }
        return true;
    };
    ProductLogic.prototype.IsValidateProduct = function (name, category, description, price) {
        if (typeof (name) !== 'string' || typeof (category) !== 'string' || typeof (description) !== 'string' || typeof (price) !== 'number') {
            throw new Error("Invalid type is provided");
        }
        if (description.length > 100) {
            throw new Error("Description is too long");
        }
        return true;
    };
    return ProductLogic;
}());
exports.ProductLogic = ProductLogic;
