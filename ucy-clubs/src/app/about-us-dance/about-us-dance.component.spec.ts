import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsDanceComponent } from './about-us-dance.component';

describe('AboutUsDanceComponent', () => {
  let component: AboutUsDanceComponent;
  let fixture: ComponentFixture<AboutUsDanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsDanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsDanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
