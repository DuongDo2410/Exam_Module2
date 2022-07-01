import { Product } from "./product";
export class ProductManagement {
  private static products: Product[] = [
    new Product("1", "product1", "category1", 1, 1, new Date(), "mota1"),
    new Product("2", "product2", "category1", 2, 2, new Date(), "mota2"),
    new Product("3", "product3", "category1", 3, 3, new Date(), "mota3"),
    new Product("4", "product4", "category1", 4, 4, new Date(), "mota4"),
    new Product("5", "product5", "category1", 5, 5, new Date(), "mota5"),
  ];

  getAll(): Product[] {
    return ProductManagement.products;
  }

  create(product: Product): void {
    ProductManagement.products.push(product);
  }
  delete(id: string) {
    let index = this.findProductById(id);
    ProductManagement.products.splice(index, 1);
  }
  update(id: string, product: Product): void {
    let index = this.findProductById(id);
    ProductManagement.products[index] = product;
  }
  findProductByName(name: string): Product | undefined {
    let product = undefined;
    let products = ProductManagement.products;
    for (const item of products) {
      if (item.name == name) {
        product = item;
      }
    }
    return product;
  }
  findProductById(id: string): number {
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
