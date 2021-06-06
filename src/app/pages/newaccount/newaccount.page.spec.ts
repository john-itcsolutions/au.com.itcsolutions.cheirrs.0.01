import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewaccountPage } from './newaccount.page';

describe('NewaccountPage', () => {
  let component: NewaccountPage;
  let fixture: ComponentFixture<NewaccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewaccountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewaccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
