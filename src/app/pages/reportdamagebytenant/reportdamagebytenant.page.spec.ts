import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportdamagebytenantPage } from './reportdamagebytenant.page';

describe('ReportdamagebytenantPage', () => {
  let component: ReportdamagebytenantPage;
  let fixture: ComponentFixture<ReportdamagebytenantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportdamagebytenantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportdamagebytenantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
