import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsuppliersassetsPage } from './searchsuppliersassets.page';

describe('SearchsuppliersassetsPage', () => {
  let component: SearchsuppliersassetsPage;
  let fixture: ComponentFixture<SearchsuppliersassetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchsuppliersassetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchsuppliersassetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
