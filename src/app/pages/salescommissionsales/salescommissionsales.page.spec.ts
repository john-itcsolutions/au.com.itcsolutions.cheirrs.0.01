import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalescommissionsalesPage } from './salescommissionsales.page';

describe('SalescommissionsalesPage', () => {
  let component: SalescommissionsalesPage;
  let fixture: ComponentFixture<SalescommissionsalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalescommissionsalesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalescommissionsalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
