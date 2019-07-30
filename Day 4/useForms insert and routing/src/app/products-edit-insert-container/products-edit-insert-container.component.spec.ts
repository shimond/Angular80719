import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsEditInsertContainerComponent } from './products-edit-insert-container.component';

describe('ProductsEditInsertContainerComponent', () => {
  let component: ProductsEditInsertContainerComponent;
  let fixture: ComponentFixture<ProductsEditInsertContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsEditInsertContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsEditInsertContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
