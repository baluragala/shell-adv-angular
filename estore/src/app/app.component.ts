import { Component } from "@angular/core";
import { Product } from "./products/product.interface";
import { ProductService } from "./products/product.service";

@Component({
  selector: "sh-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  products: Product[];

  constructor(private service: ProductService) {}

  ngOnInit() {
    this.service
      .getProducts()
      .subscribe(products => (this.products = products));
  }
}
