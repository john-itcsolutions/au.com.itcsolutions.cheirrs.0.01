import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcharrearsagreementsbytenantPage } from './searcharrearsagreementsbytenant.page';

describe('SearcharrearsagreementsbytenantPage', () => {
  let component: SearcharrearsagreementsbytenantPage;
  let fixture: ComponentFixture<SearcharrearsagreementsbytenantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcharrearsagreementsbytenantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcharrearsagreementsbytenantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
