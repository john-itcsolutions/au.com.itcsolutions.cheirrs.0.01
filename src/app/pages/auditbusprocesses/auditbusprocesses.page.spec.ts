import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditbusprocessesPage } from './auditbusprocesses.page';

describe('AuditbusprocessesPage', () => {
  let component: AuditbusprocessesPage;
  let fixture: ComponentFixture<AuditbusprocessesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuditbusprocessesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditbusprocessesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
