import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantcomplaintPage } from './tenantcomplaint.page';

describe('TenantcomplaintPage', () => {
  let component: TenantcomplaintPage;
  let fixture: ComponentFixture<TenantcomplaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantcomplaintPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantcomplaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
