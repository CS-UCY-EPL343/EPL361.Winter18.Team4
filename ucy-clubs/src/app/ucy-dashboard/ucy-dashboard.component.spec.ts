import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UcyDashboardComponent } from './ucy-dashboard.component';

describe('UcyDashboardComponent', () => {
  let component: UcyDashboardComponent;
  let fixture: ComponentFixture<UcyDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UcyDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UcyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
