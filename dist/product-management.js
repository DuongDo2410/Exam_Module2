"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductManagement = void 0;
const product_1 = require("./product");
class ProductManagement {
    getAll() {
        return ProductManagement.products;
    }
    create(product) {
        ProductManagement.products.push(product);
    }
    delete(id) {
        let index = this.findProductById(id);
        ProductManagement.products.splice(index, 1);
    }
    update(id, product) {
        let index = this.findProductById(id);
        ProductManagement.products[index] = product;
    }
    findProductByName(name) {
        let product = [];
        let products = ProductManagement.products;
        for (const item of products) {
            if (item.name == name) {
                product.push(item);
            }
        }
        return product;
    }
    findProductById(id) {
        let index = -1;
        let products = ProductManagement.products;
        for (let i = 0; i < products.length; i++) {
            if (products[i].id == id) {
                index = i;
            }
        }
        return index;
    }
}
exports.ProductManagement = ProductManagement;
ProductManagement.products = [
    new product_1.Product("1", "product1", "category1", 1, 1, new Date(), "mota1"),
    new product_1.Product("2", "product2", "category1", 2, 2, new Date(), "mota2"),
    new product_1.Product("3", "product3", "category1", 3, 3, new Date(), "mota3"),
    new product_1.Product("4", "product4", "category1", 4, 4, new Date(), "mota4"),
    new product_1.Product("5", "product5", "category1", 5, 5, new Date(), "mota5"),
];
