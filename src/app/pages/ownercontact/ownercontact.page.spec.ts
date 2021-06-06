import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnercontactPage } from './ownercontact.page';

describe('OwnercontactPage', () => {
  let component: OwnercontactPage;
  let fixture: ComponentFixture<OwnercontactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnercontactPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnercontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
