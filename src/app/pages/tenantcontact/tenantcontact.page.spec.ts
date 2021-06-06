import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantcontactPage } from './tenantcontact.page';

describe('TenantcontactPage', () => {
  let component: TenantcontactPage;
  let fixture: ComponentFixture<TenantcontactPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantcontactPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantcontactPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
