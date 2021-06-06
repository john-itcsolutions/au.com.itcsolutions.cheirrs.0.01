import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegemployeePage } from './regemployee.page';

describe('RegemployeePage', () => {
  let component: RegemployeePage;
  let fixture: ComponentFixture<RegemployeePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegemployeePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegemployeePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
