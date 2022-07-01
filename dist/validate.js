"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validate = void 0;
const product_management_1 = require("./product-management");
const readline = __importStar(require("readline-sync"));
const productManagement = new product_management_1.ProductManagement();
class Validate {
    inputName() {
        let name = "";
        let isValidNmae = true;
        do {
            name = readline.question("Nhap ten san pham):");
            let regexForEmail = /^[0-9a-zA-Z]{6,}$/g;
            if (!regexForEmail.test(name)) {
                isValidNmae = false;
                console.log("Tên ít nhất 6 ký tự");
            }
            else {
                let nameProduct = productManagement.findProductByName(name);
                if (nameProduct) {
                    console.log("tên đã tồn tại");
                    isValidNmae = false;
                }
                else {
                    isValidNmae = true;
                }
            }
        } while (!isValidNmae);
        return name;
    }
    inputDesc() {
        let description = "";
        let isValid = true;
        do {
            description = readline.question("Nhap mo ta san pham:");
            let regexForEmail = /^[0-9a-zA-Z]{20,}$/g;
            if (!regexForEmail.test(description)) {
                isValid = false;
                console.log("Tên ít nhất 20 ký tự");
            }
            else {
                isValid = true;
            }
        } while (!isValid);
        return description;
    }
    checkQuantity() {
        let number;
        let isValidNumber = true;
        do {
            number = +readline.question("Nhap so luong san pham):");
            if (number <= 0) {
                isValidNumber = false;
                console.log("Tên phải là số dương");
            }
            else if (typeof number == "string") {
                console.log("Tên phải là số");
            }
            else {
                isValidNumber = true;
            }
        } while (!isValidNumber);
        return number;
    }
    checkPrice() {
        let number;
        let isValidNumber = true;
        do {
            number = +readline.question("Nhap gia san pham):");
            if (number <= 0) {
                isValidNumber = false;
                console.log("Tên phải là số dương");
            }
            else if (typeof number == "string") {
                console.log("Tên phải là số");
            }
            else {
                isValidNumber = true;
            }
        } while (!isValidNumber);
        return number;
    }
}
exports.Validate = Validate;
