import {Component, OnInit} from '@angular/core';
import {ProductCatalogService} from '../core/product-catalog.service';
import {Product} from '../models/product';
import {CardItem} from '../models/card-item';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  productCatalog: Product[] = [];

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
  }

  productSelected(cardItem: CardItem) {
  }
}
