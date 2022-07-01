import { ProductManagement } from "./product-management";
import * as readline from "readline-sync";
import { Product } from "./product";
import { Validate } from "./validate";

const productManagement = new ProductManagement();
const validate = new Validate();
let choice = -1;
const zero = 0;
const getAll = 1;
const create = 2;
const update = 3;
const findProductByName = 4;
const dalete = 5;
do {
  menu();
  choice = +readline.question("Nhap lua chon cua ban:");
  switch (choice) {
    case getAll:
      console.log(
        "--------------------------Danh sách sản phẩm-----------------------------------"
      );
      let Products = productManagement.getAll();
      if (Products.length == 0) {
        console.log(
          "-----------------------Không có sản phẩm nào----------------------------"
        );
      } else {
        console.table(Products);
      }
      break;
    case create:
      console.log(
        "-------------------------Thêm sản phẩm---------------------------------"
      );
      inputCreate();
      break;
    case update:
      console.log(
        "-------------------------Cập nhật sản phẩm--------------------------------"
      );
      inputUpdate();
      break;
    case findProductByName:
      console.log(
        "-------------------------Tìm kiếm sản phẩm theo tên-----------------------------"
      );
      inputFindProductByName();

      break;
    case dalete:
      console.log(
        "-----------------------------xóa sản phẩm-----------------------------"
      );
      inputDelete();
      break;
    case zero:
      console.log(
        "-----------------------------Thoát-----------------------------"
      );
      break;
    default:
      console.log("Lựa chọn không hợp lệ, mời chọn lại.");
      break;
  }
} while (choice != zero);

function menu() {
  console.log("Menu quản sản phẩm");
  console.log("1. Danh sách sản phẩm");
  console.log("2. Thêm sản phẩm");
  console.log("3. Cập nhật sản phẩm");
  console.log("4. Tìm kiếm sản phẩm theo tên");
  console.log("5. Xóa sản phẩm");
  console.log("0. Thoát");
}

function inputFindProductByName() {
  let name = readline.question("Nhap ten san pham muon tim kiem:");
  let product = productManagement.findProductByName(name);
  if (product.length == 0) {
    console.log("Không tìm thấy sản phẩm");
  } else {
    console.table(product);
  }
}

function inputDelete() {
  let id = readline.question("Nhap ma san pham muon xoa:");
  let index = productManagement.findProductById(id);
  if (index == -1) {
    console.log("Không tìm thấy sản phẩm");
  } else {
    productManagement.delete(id);
    console.log("Xóa thành công");
  }
}

function inputUpdate() {
  let d = new Date();
  let id = readline.question("Nhap ma san pham muon cap nhat:");
  let index = productManagement.findProductById(id);
  let product = productManagement.getAll()[index];
  if (index == -1) {
    console.log("Không tìm thấy sản phẩm");
  } else {
    console.log("Sản Phẩm bạn muôn cập nhật.");
    console.table(product);
    let name = validate.inputName();
    let category = readline.question("Nhap loai san pham:");
    let price = validate.checkPrice();
    let quantity = validate.checkQuantity();
    let date = new Date();
    let description = readline.question("Nhap mo ta san pham:");
    let productUpdate = new Product(
      id,
      name,
      category,
      price,
      quantity,
      date,
      description
    );
    productManagement.update(id, productUpdate);
    console.log("Cập nhật thành công");
  }
}

function inputCreate() {
  let d = new Date();
  let id = Math.random().toString(36).slice(2);
  let name = validate.inputName();
  let category = readline.question("Nhap loai san pham:");
  let price = validate.checkPrice();
  let quantity = validate.checkQuantity();
  let date = new Date();
  let description = readline.question("Nhap mo ta san pham:");
  let product = new Product(
    id,
    name,
    category,
    price,
    quantity,
    date,
    description
  );
  productManagement.create(product);
  console.log("Thêm thành công");
}
