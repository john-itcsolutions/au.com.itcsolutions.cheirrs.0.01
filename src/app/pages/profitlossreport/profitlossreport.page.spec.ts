import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitlossreportPage } from './profitlossreport.page';

describe('ProfitlossreportPage', () => {
  let component: ProfitlossreportPage;
  let fixture: ComponentFixture<ProfitlossreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitlossreportPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitlossreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
