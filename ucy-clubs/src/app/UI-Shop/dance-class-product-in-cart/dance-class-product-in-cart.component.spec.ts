import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceClassProductInCartComponent } from './dance-class-product-in-cart.component';

describe('DanceClassProductInCartComponent', () => {
  let component: DanceClassProductInCartComponent;
  let fixture: ComponentFixture<DanceClassProductInCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceClassProductInCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceClassProductInCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
