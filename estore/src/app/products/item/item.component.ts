import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  SimpleChanges
} from "@angular/core";
import { Product } from "../product.interface";

@Component({
  selector: "sh-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input("prd")
  product: Product;

  @Output()
  selected: EventEmitter<Product> = new EventEmitter();

  stockStyle = { color: "yellow", fontSize: "30px" };
  noStockStyle = { color: "red" };

  constructor() {}

  ngOnInit() {
    //this.product = { title: "galaxy note", price: 1000 };
  }

  handleClick() {
    this.selected.emit(this.product);
  }
}
