import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../models/product';
import {CardItem} from '../../models/card-item';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.scss']
})
export class ProductCatalogComponent implements OnInit {

  @Input()
  productCatalog: Product[];
  @Output()
  addedToCartEventEmitter = new EventEmitter<CardItem>();

  selectedProductId: number = -1;
  selectedProductPrice: number;
  productQuantity: number = 0;
  isAddValid: boolean = false;


  constructor() {
  }

  ngOnInit() {

  }

  onProductSelectionChange(selectedProductId: number) {
    this.selectedProductId = selectedProductId;
    const product: Product = this.productCatalog.find(p => p.id == selectedProductId);
    this.selectedProductPrice = product.price;
    this.productQuantity = 0;
    this.isAddValid = false;
  }

  onQuantitySelectionChange() {
    this.isAddValid = (this.productQuantity > 0) && (this.selectedProductId !== -1);
  }

  updateShoppingCart() {
    if (this.isAddValid) {
      this.addedToCartEventEmitter.emit({
        product: this.productCatalog.find(p => p.id == this.selectedProductId),
        quantity: this.productQuantity,
      });
    }
  }

  clearSelection() {
    this.selectedProductId = -1;
    this.selectedProductPrice = 0;
    this.productQuantity = 0;
  }
}
