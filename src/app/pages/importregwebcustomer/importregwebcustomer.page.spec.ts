import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportregwebcustomerPage } from './importregwebcustomer.page';

describe('ImportregwebcustomerPage', () => {
  let component: ImportregwebcustomerPage;
  let fixture: ComponentFixture<ImportregwebcustomerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportregwebcustomerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportregwebcustomerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
