import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportregproptoletlettingPage } from './importregproptoletletting.page';

describe('ImportregproptoletlettingPage', () => {
  let component: ImportregproptoletlettingPage;
  let fixture: ComponentFixture<ImportregproptoletlettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportregproptoletlettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportregproptoletlettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
