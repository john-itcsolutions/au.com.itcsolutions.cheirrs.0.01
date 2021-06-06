import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilingPage } from './filing.page';

describe('FilingPage', () => {
  let component: FilingPage;
  let fixture: ComponentFixture<FilingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
