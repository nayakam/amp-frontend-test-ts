import {Product} from './product';

export interface CardItem {
  // id: number;
  product: Product;
  quantity: number;
  // total: number;
  // Add / Remove item -- Damn , Just a quick hack !!!
  removeFlag?: boolean;
}
