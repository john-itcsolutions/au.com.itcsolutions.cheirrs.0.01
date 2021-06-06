import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtenantsbypropPage } from './searchtenantsbyprop.page';

describe('SearchtenantsbypropPage', () => {
  let component: SearchtenantsbypropPage;
  let fixture: ComponentFixture<SearchtenantsbypropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchtenantsbypropPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchtenantsbypropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
