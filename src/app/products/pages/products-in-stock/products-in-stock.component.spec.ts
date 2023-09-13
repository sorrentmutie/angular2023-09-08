import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsInStockComponent } from './products-in-stock.component';

describe('ProductsInStockComponent', () => {
  let component: ProductsInStockComponent;
  let fixture: ComponentFixture<ProductsInStockComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsInStockComponent]
    });
    fixture = TestBed.createComponent(ProductsInStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
