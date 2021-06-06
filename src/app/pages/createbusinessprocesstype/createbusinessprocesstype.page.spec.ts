import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatebusinessprocesstypePage } from './createbusinessprocesstype.page';

describe('CreatebusinessprocesstypePage', () => {
  let component: CreatebusinessprocesstypePage;
  let fixture: ComponentFixture<CreatebusinessprocesstypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatebusinessprocesstypePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatebusinessprocesstypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
