import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProductCatalogComponent} from './product-catalog.component';
import {CoreModule} from '../../core/core.module';

describe('ProductCatalogComponent', () => {
  let component: ProductCatalogComponent;
  let fixture: ComponentFixture<ProductCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      declarations: [ProductCatalogComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCatalogComponent);
    component = fixture.componentInstance;
    component.productCatalog = [{id: 1, name: 'p1', price: 2.0},
      {id: 2, name: 'p2', price: 2.5},
      {id: 3, name: 'p3', price: 3.5}];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.productCatalog.length).toEqual(3);
  });

  it('Should validate', () => {
    component.onProductSelectionChange(1);
    component.productQuantity = 2;
    component.onQuantitySelectionChange();
    fixture.detectChanges();
    expect(component.selectedProductPrice).toEqual(2.0);
    expect(component.isAddValid).toEqual(true);
  });
});
