import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { FooterComponent } from "./footer.component";
import { ProductsModule } from "./products/products.module";
import { FormsModule } from "@angular/forms";
import { ProductService } from "./products/product.service";
import { HttpClientModule } from "@angular/common/http";
import { NotFoundComponent } from './not-found/not-found.component';
import { NavComponent } from './nav/nav.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent, NotFoundComponent, NavComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: ProductService,
      useClass: ProductService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
