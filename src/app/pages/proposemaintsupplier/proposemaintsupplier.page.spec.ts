import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposemaintsupplierPage } from './proposemaintsupplier.page';

describe('ProposemaintsupplierPage', () => {
  let component: ProposemaintsupplierPage;
  let fixture: ComponentFixture<ProposemaintsupplierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposemaintsupplierPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposemaintsupplierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
