import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantsledgerPage } from './tenantsledger.page';

describe('TenantsledgerPage', () => {
  let component: TenantsledgerPage;
  let fixture: ComponentFixture<TenantsledgerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenantsledgerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenantsledgerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
