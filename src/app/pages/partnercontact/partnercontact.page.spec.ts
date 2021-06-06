import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnercontactPage } from './partnercontact.page';

describe('PartnercontactPage', () => {
  let component: PartnercontactPage;
  let fixture: ComponentFixture<PartnercontactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnercontactPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnercontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
