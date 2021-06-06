import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RenegotiatearrearsagreementPage } from './renegotiatearrearsagreement.page';

describe('RenegotiatearrearsagreementPage', () => {
  let component: RenegotiatearrearsagreementPage;
  let fixture: ComponentFixture<RenegotiatearrearsagreementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RenegotiatearrearsagreementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RenegotiatearrearsagreementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
