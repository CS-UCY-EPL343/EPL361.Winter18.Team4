import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceClassProductsInCartComponent } from './dance-class-products-in-cart.component';

describe('DanceClassProductsInCartComponent', () => {
  let component: DanceClassProductsInCartComponent;
  let fixture: ComponentFixture<DanceClassProductsInCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceClassProductsInCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceClassProductsInCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
