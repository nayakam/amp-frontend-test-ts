import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {Observable, of} from 'rxjs';

const PRODUCT_CATALOG: Product[] = [
  {id: 1, name: 'Bread', price: 4.90},
  {id: 2, name: 'Egg', price: 7.90},
  {id: 3, name: 'Sugar 1kg', price: 5},
  {id: 4, name: 'Self-raising flour 1kg', price: 6.90},
  {id: 5, name: 'Baking powder 25g', price: 2.40},
  {id: 6, name: 'Icing sugar 50g', price: 3},
  {id: 7, name: 'Banana', price: 3.50},
];

@Injectable({
  providedIn: 'root'
})
export class ProductCatalogService {

  constructor() {
  }

  getProductCatalog(): Observable<Product[]> {
    return of(PRODUCT_CATALOG);
  }

  getProductCatalogById(id: number): Observable<Product> {
    // TODO : Validate input parameter
    const product: Product = PRODUCT_CATALOG.find(p => p.id === id);
    return of(product);
  }
}
