import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./products/list/list.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { DetailComponent } from "./products/detail/detail.component";

const routes: Routes = [
  { path: "products", component: ListComponent },
  { path: "products/:title", component: DetailComponent },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
