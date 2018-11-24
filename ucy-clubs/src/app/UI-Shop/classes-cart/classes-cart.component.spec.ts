import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesCartComponent } from './classes-cart.component';

describe('ClassesCartComponent', () => {
  let component: ClassesCartComponent;
  let fixture: ComponentFixture<ClassesCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassesCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
