import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCatalogComponent} from './product-catalog/product-catalog.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {ShoppingComponent} from './shopping.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ProductCatalogComponent,
    ShoppingCartComponent,
    ShoppingComponent
  ],
  exports: [
    ProductCatalogComponent,
    ShoppingCartComponent,
    ShoppingComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ShoppingModule {
}
