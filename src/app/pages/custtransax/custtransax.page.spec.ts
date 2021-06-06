import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusttransaxPage } from './custtransax.page';

describe('CusttransaxPage', () => {
  let component: CusttransaxPage;
  let fixture: ComponentFixture<CusttransaxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusttransaxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusttransaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
