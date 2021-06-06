import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantprivinterfacePage } from './tenantprivinterface.page';

describe('TenantprivinterfacePage', () => {
  let component: TenantprivinterfacePage;
  let fixture: ComponentFixture<TenantprivinterfacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantprivinterfacePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantprivinterfacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
