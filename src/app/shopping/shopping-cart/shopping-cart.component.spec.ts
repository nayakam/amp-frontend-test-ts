import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ShoppingCartComponent} from './shopping-cart.component';
import {CoreModule} from '../../core/core.module';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      declarations: [ShoppingCartComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    component.cardItems = [
      {product: {id: 1, name: 'p1', price: 2.0}, quantity: 2},
      {product: {id: 2, name: 'p2', price: 2.5}, quantity: 2},
      {product: {id: 3, name: 'p3', price: 3.5}, quantity: 3}
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should get total price', () => {
    expect(component.cardItems.length).toEqual(3);
    expect(component.getTotalValue()).toEqual(19.5);
  });

  xit('Should remove product from the card', () => {
    expect(component.cardItems.length).toEqual(3);
    const removeButton = fixture.debugElement.query((el) => {
      return el.nativeElement.id === 'product-id-2';
    });
    removeButton.nativeElement.click();
    expect(removeButton.nativeElement.textContent).toContain('X');
    // TODO :::
    // expect(component.cardItems.length).toEqual(2);
  });
});
