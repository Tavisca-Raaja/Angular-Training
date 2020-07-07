"use strict";
exports.__esModule = true;
var ProductLogic_1 = require("./ProductLogic");
var Product_1 = require("./Product");
var test = new ProductLogic_1.ProductLogic();
var product1 = new Product_1.Product("1", "UPS", "Electrical", "ABS", "Power back,long last", 100);
var product2 = new Product_1.Product("2", "Lays", "food", "Lays", "crunchy", 20);
var product3 = new Product_1.Product("3", "Lays", "food", "Lays", "crunchy", 20);
test.SaveAllProducts([product1, product2, product3]);
//Get all Products
console.log("Product List:");
console.log(JSON.stringify(test.getAllProducts()));
//Get product by category
console.log("By category: " + JSON.stringify(test.getProductsByCategory("food")));
//Get product by manufacturee
console.log("By manufacturer: " + JSON.stringify(test.getProductsByManufacturer("ABS")));
//Add new Product
// 1. Valid product
console.log("Add new Product:" + JSON.stringify(test.addProduct("4", "pendrive", "Electrical", "Sonic", "Fastest", 200)));
//Update product
console.log("Update product:" + JSON.stringify(test.updateProduct("4", "pendrive", "Electrical", "US", "Cheap", 100)));
//delete Product
console.log(test.deleteProduct("4"));
//  2. Product Already exists
console.log(test.addProduct("3", "pendrive", "Electrical", "Sonic", "Fastest", 200));
//3. Invalid Type
console.log(test.addProduct(4, "pendrive", "Electrical", "Sonic", "Fastest", 200));
