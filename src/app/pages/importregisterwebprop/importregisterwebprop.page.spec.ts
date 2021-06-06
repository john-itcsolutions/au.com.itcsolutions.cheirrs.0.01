import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportregisterwebpropPage } from './importregisterwebprop.page';

describe('ImportregisterwebpropPage', () => {
  let component: ImportregisterwebpropPage;
  let fixture: ComponentFixture<ImportregisterwebpropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportregisterwebpropPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportregisterwebpropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
