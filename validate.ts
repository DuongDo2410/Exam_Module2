import { ProductManagement } from "./product-management";
import * as readline from "readline-sync";
const productManagement = new ProductManagement();
export class Validate {
  inputName() {
    let name = "";
    let isValidNmae = true;
    do {
      name = readline.question("Nhap ten san pham):");
      let regexForEmail: RegExp = /^[0-9a-zA-Z]{6,}$/g;
      if (!regexForEmail.test(name)) {
        isValidNmae = false;
        console.log("Tên ít nhất 6 ký tự");
      } else {
        let nameProduct = productManagement.findProductByName(name);
        if (nameProduct) {
          console.log("tên đã tồn tại");
          isValidNmae = false;
        } else {
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
      let regexForEmail: RegExp = /^[0-9a-zA-Z]{20,}$/g;
      if (!regexForEmail.test(description)) {
        isValid = false;
        console.log("Tên ít nhất 20 ký tự");
      } else {
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
      } else if (typeof number == "string") {
        console.log("Tên phải là số");
      } else {
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
      } else if (typeof number == "string") {
        console.log("Tên phải là số");
      } else {
        isValidNumber = true;
      }
    } while (!isValidNumber);
    return number;
  }
}
