import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogConfirmVoteComponent } from './dialog-confirm-vote.component';

describe('DialogConfirmVoteComponent', () => {
  let component: DialogConfirmVoteComponent;
  let fixture: ComponentFixture<DialogConfirmVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogConfirmVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogConfirmVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
