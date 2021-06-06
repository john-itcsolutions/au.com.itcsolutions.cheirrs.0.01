import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegcontractdetailsPage } from './regcontractdetails.page';

describe('RegcontractdetailsPage', () => {
  let component: RegcontractdetailsPage;
  let fixture: ComponentFixture<RegcontractdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegcontractdetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegcontractdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
