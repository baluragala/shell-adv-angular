import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./item/item.component";
import { DetailComponent } from "./detail/detail.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ListComponent, ItemComponent, DetailComponent],
  imports: [CommonModule, RouterModule.forChild([])],
  exports: [ListComponent]
})
export class ProductsModule {}
