import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsDanceComponent } from './contact-us-dance.component';

describe('ContactUsDanceComponent', () => {
  let component: ContactUsDanceComponent;
  let fixture: ComponentFixture<ContactUsDanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsDanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsDanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
