import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceClassCatalogueComponent } from './dance-class-catalogue.component';

describe('DanceClassCatalogueComponent', () => {
  let component: DanceClassCatalogueComponent;
  let fixture: ComponentFixture<DanceClassCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanceClassCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanceClassCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
