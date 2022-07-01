import * as readline from "readline-sync";

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
        isValidNmae = true;
      }
    } while (!isValidNmae);
    return name;
  }
  checkQuantity() {
    let number;
    let isValidNumber = true;
    do {
      number = +readline.question("Nhap so luong san pham):");
      if (number <= 0) {
        isValidNumber = false;
        console.log("Tên phải là số dương");
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
      } else {
        isValidNumber = true;
      }
    } while (!isValidNumber);
    return number;
  }
}
