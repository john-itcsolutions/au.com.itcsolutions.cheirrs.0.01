import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllsuppliersPage } from './allsuppliers.page';

describe('AllsuppliersPage', () => {
  let component: AllsuppliersPage;
  let fixture: ComponentFixture<AllsuppliersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllsuppliersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllsuppliersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
