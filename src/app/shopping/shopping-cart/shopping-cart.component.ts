import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardItem} from '../../models/card-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  @Input()
  cardItems: CardItem[];
  @Output()
  removeCartEventEmitter = new EventEmitter<CardItem>();

  constructor() {
  }

  ngOnInit() {
  }

  getTotalValue() {
    let total: number = 0;
    if (this.cardItems) {
      this.cardItems.forEach(item => {
        total += (item.product.price * item.quantity);
      });
      return total;
    }
  }

  onRemoveClick(productId: number) {
    const cartItem: CardItem = this.cardItems.find(item => item.product.id == productId);
    this.removeCartEventEmitter.emit(cartItem);
  }
}
