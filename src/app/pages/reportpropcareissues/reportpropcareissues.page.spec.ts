import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportpropcareissuesPage } from './reportpropcareissues.page';

describe('ReportpropcareissuesPage', () => {
  let component: ReportpropcareissuesPage;
  let fixture: ComponentFixture<ReportpropcareissuesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportpropcareissuesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportpropcareissuesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
