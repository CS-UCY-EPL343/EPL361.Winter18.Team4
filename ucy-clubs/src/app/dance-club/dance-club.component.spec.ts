import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceClubComponent } from './dance-club.component';

describe('DanceClubComponent', () => {
  let component: DanceClubComponent;
  let fixture: ComponentFixture<DanceClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceClubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
