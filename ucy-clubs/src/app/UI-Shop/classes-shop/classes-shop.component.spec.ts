import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesShopComponent } from './classes-shop.component';

describe('ClassesShopComponent', () => {
  let component: ClassesShopComponent;
  let fixture: ComponentFixture<ClassesShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
