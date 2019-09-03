import {Component, OnInit} from '@angular/core';
import {ProductCatalogService} from '../core/product-catalog.service';
import {Product} from '../models/product';
import {CardItem} from '../models/card-item';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  productCatalog: Product[] = [];
  cardItems: CardItem[] = [];

  // TODO : Should be moved to service / Store
  private cardItems$ = new BehaviorSubject<CardItem>(null);
  currentCartItem$ = this.cardItems$.asObservable();

  constructor(private productCatalogService: ProductCatalogService) {

  }

  ngOnInit() {
    this.productCatalogService.getProductCatalog().subscribe(products => {
        this.productCatalog = products;
        // Lets as default lets sort dropdown by list
        this.productCatalog = this.productCatalog.sort((p1, p2) => {

            if (p1.name > p2.name) {
              return 1;
            }
            if (p1.name < p2.name) {
              return -1;
            }
            return 0;
          }
        )
        ;
      }, err => console.log(err)
    );

    this.updateShoppingCard();
  }

  /**
   * TODO : Move these logic to service / Store
   */
  private updateShoppingCard() {
    this.currentCartItem$.subscribe(cartItem => {
      if (cartItem) {
        if (cartItem.removeFlag) {
          // Quick hack to remove item from the list
          this.cardItems = this.cardItems.filter(item => item.product.id !== cartItem.product.id);
        } else {
          let updateItem: CardItem = cartItem;
          const existingItem: CardItem = this.cardItems.find(item => item.product.id == cartItem.product.id);
          if (existingItem) {
            updateItem = {product: existingItem.product, quantity: cartItem.quantity + existingItem.quantity};
            this.cardItems = this.cardItems.filter(item => item.product.id !== cartItem.product.id);
          }
          this.cardItems.push(updateItem);
        }
      }
    });
  }

  productSelected(cardItem: CardItem) {
    this.cardItems$.next(cardItem);
  }

  cardItemRemoved(cardItem: CardItem) {
    // TODO: Should go to store through service
    cardItem.removeFlag = true;
    this.cardItems$.next(cardItem);
  }
}
