import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilingassetsPage } from './filingassets.page';

describe('FilingassetsPage', () => {
  let component: FilingassetsPage;
  let fixture: ComponentFixture<FilingassetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilingassetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilingassetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
