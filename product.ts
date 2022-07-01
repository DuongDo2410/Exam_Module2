export class Product {
  private _id: string;
  private _name: string;
  private _category: string;
  private _price: number;
  private _quantity: number;
  private _date: Date;
  private _description: string;

  constructor(
    id: string,
    name: string,
    category: string,
    price: number,
    quantity: number,
    date: Date,
    description: string
  ) {
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
  public get id(): string {
    return this._id;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter category
   * @return {string}
   */
  public get category(): string {
    return this._category;
  }

  /**
   * Getter price
   * @return {number}
   */
  public get price(): number {
    return this._price;
  }

  /**
   * Getter quantity
   * @return {number}
   */
  public get quantity(): number {
    return this._quantity;
  }

  /**
   * Getter date
   * @return {Date}
   */
  public get date(): Date {
    return this._date;
  }

  /**
   * Getter description
   * @return {string}
   */
  public get description(): string {
    return this._description;
  }

  /**
   * Setter id
   * @param {string} value
   */
  public set id(value: string) {
    this._id = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter category
   * @param {string} value
   */
  public set category(value: string) {
    this._category = value;
  }

  /**
   * Setter price
   * @param {number} value
   */
  public set price(value: number) {
    this._price = value;
  }

  /**
   * Setter quantity
   * @param {number} value
   */
  public set quantity(value: number) {
    this._quantity = value;
  }

  /**
   * Setter date
   * @param {Date} value
   */
  public set date(value: Date) {
    this._date = value;
  }

  /**
   * Setter description
   * @param {string} value
   */
  public set description(value: string) {
    this._description = value;
  }
}
