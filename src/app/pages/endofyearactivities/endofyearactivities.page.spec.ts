import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndofyearactivitiesPage } from './endofyearactivities.page';

describe('EndofyearactivitiesPage', () => {
  let component: EndofyearactivitiesPage;
  let fixture: ComponentFixture<EndofyearactivitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndofyearactivitiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndofyearactivitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
