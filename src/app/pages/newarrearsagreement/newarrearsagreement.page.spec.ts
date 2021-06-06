import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewarrearsagreementPage } from './newarrearsagreement.page';

describe('NewarrearsagreementPage', () => {
  let component: NewarrearsagreementPage;
  let fixture: ComponentFixture<NewarrearsagreementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewarrearsagreementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewarrearsagreementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
