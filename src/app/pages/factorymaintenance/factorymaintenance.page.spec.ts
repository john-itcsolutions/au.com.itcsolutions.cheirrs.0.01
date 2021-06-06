import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactorymaintenancePage } from './factorymaintenance.page';

describe('FactorymaintenancePage', () => {
  let component: FactorymaintenancePage;
  let fixture: ComponentFixture<FactorymaintenancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactorymaintenancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactorymaintenancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
