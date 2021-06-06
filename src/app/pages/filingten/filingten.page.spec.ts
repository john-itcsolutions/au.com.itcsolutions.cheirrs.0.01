import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilingtenPage } from './filingten.page';

describe('FilingtenPage', () => {
  let component: FilingtenPage;
  let fixture: ComponentFixture<FilingtenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilingtenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilingtenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
