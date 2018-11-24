import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceClassProductComponent } from './dance-class-product.component';

describe('DanceClassProductComponent', () => {
  let component: DanceClassProductComponent;
  let fixture: ComponentFixture<DanceClassProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceClassProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceClassProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
