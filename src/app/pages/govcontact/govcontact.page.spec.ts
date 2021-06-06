import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovcontactPage } from './govcontact.page';

describe('GovcontactPage', () => {
  let component: GovcontactPage;
  let fixture: ComponentFixture<GovcontactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovcontactPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovcontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
