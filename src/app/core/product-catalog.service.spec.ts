import {async, TestBed} from '@angular/core/testing';

import {ProductCatalogService} from './product-catalog.service';

// TODO: Mock model data
describe('ProductCatalogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductCatalogService = TestBed.get(ProductCatalogService);
    expect(service).toBeTruthy();
  });

  it('Retrieve all product details', async(() => {
    const service: ProductCatalogService = TestBed.get(ProductCatalogService);
    return service.getProductCatalog().subscribe(p => {
      expect(p.length).toEqual(7);
    });
  }));

  it('Retrieve product id with 1', async(() => {
    const service: ProductCatalogService = TestBed.get(ProductCatalogService);
    return service.getProductCatalogById(1).subscribe(p => {
      expect(p.id).toEqual(1);
      expect(p.price).toEqual(4.90);
      expect(p.name).toEqual('Bread');
    });
  }));
});
