import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrearsagreementsbypropPage } from './arrearsagreementsbyprop.page';

describe('ArrearsagreementsbypropPage', () => {
  let component: ArrearsagreementsbypropPage;
  let fixture: ComponentFixture<ArrearsagreementsbypropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrearsagreementsbypropPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrearsagreementsbypropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
