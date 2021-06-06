import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriminalrecordcheckingPage } from './criminalrecordchecking.page';

describe('CriminalrecordcheckingPage', () => {
  let component: CriminalrecordcheckingPage;
  let fixture: ComponentFixture<CriminalrecordcheckingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriminalrecordcheckingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriminalrecordcheckingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
