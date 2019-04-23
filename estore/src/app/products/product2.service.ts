import { Injectable } from "@angular/core";
import { Product } from "./product.interface";

@Injectable()
export class Product2Service {
  constructor() {}

  getProducts(): Product[] {
    return [
      { title: "2galaxy note1", price: 1000, stock: 10 },
      { title: "2galaxy note2", price: 1000, stock: 0 },
      { title: "2galaxy note3", price: 1000, stock: 40 }
    ];
  }
}
