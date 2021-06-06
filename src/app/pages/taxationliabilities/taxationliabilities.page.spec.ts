import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxationliabilitiesPage } from './taxationliabilities.page';

describe('TaxationliabilitiesPage', () => {
  let component: TaxationliabilitiesPage;
  let fixture: ComponentFixture<TaxationliabilitiesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxationliabilitiesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxationliabilitiesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
