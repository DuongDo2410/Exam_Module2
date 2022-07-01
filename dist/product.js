"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(id, name, category, price, quantity, date, description) {
        this._id = id;
        this._name = name;
        this._category = category;
        this._price = price;
        this._quantity = quantity;
        this._date = date;
        this._description = description;
    }
    /**
     * Getter id
     * @return {string}
     */
    get id() {
        return this._id;
    }
    /**
     * Getter name
     * @return {string}
     */
    get name() {
        return this._name;
    }
    /**
     * Getter category
     * @return {string}
     */
    get category() {
        return this._category;
    }
    /**
     * Getter price
     * @return {number}
     */
    get price() {
        return this._price;
    }
    /**
     * Getter quantity
     * @return {number}
     */
    get quantity() {
        return this._quantity;
    }
    /**
     * Getter date
     * @return {Date}
     */
    get date() {
        return this._date;
    }
    /**
     * Getter description
     * @return {string}
     */
    get description() {
        return this._description;
    }
    /**
     * Setter id
     * @param {string} value
     */
    set id(value) {
        this._id = value;
    }
    /**
     * Setter name
     * @param {string} value
     */
    set name(value) {
        this._name = value;
    }
    /**
     * Setter category
     * @param {string} value
     */
    set category(value) {
        this._category = value;
    }
    /**
     * Setter price
     * @param {number} value
     */
    set price(value) {
        this._price = value;
    }
    /**
     * Setter quantity
     * @param {number} value
     */
    set quantity(value) {
        this._quantity = value;
    }
    /**
     * Setter date
     * @param {Date} value
     */
    set date(value) {
        this._date = value;
    }
    /**
     * Setter description
     * @param {string} value
     */
    set description(value) {
        this._description = value;
    }
}
exports.Product = Product;
