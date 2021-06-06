import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportregpropertytoletPage } from './importregpropertytolet.page';

describe('ImportregpropertytoletPage', () => {
  let component: ImportregpropertytoletPage;
  let fixture: ComponentFixture<ImportregpropertytoletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportregpropertytoletPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportregpropertytoletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
