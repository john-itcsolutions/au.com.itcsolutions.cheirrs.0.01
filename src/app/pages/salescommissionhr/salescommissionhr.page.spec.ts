import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalescommissionhrPage } from './salescommissionhr.page';

describe('SalescommissionhrPage', () => {
  let component: SalescommissionhrPage;
  let fixture: ComponentFixture<SalescommissionhrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalescommissionhrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalescommissionhrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
