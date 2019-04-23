import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../product.interface";
import { ProductService } from "../product.service";

@Component({
  selector: "sh-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  @Input()
  products: Product[];
  selectedProduct: string;
  constructor(private service: ProductService) {}

  ngOnInit() {
    this.service
      .getProducts()
      .subscribe(products => (this.products = products));
  }

  handleClick(e) {
    console.log(e);
    alert("hello");
  }

  handleSelected(product: Product) {
    this.selectedProduct = product.title;
  }
}
