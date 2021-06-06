import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrearsagreementsbytenantPage } from './arrearsagreementsbytenant.page';

describe('ArrearsagreementsbytenantPage', () => {
  let component: ArrearsagreementsbytenantPage;
  let fixture: ComponentFixture<ArrearsagreementsbytenantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrearsagreementsbytenantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrearsagreementsbytenantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
