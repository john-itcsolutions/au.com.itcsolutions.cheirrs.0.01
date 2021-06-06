import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentcomplaintPage } from './governmentcomplaint.page';

describe('GovernmentcomplaintPage', () => {
  let component: GovernmentcomplaintPage;
  let fixture: ComponentFixture<GovernmentcomplaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovernmentcomplaintPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentcomplaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
