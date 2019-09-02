import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShoppingComponent} from './shopping.component';
import {ProductCatalogComponent} from './product-catalog/product-catalog.component';
import {ShoppingCartComponent} from './shopping-cart/shopping-cart.component';
import {CoreModule} from '../core/core.module';

describe('ShoppingComponent', () => {
  let component: ShoppingComponent;
  let fixture: ComponentFixture<ShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      declarations: [ShoppingComponent, ProductCatalogComponent, ShoppingCartComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
