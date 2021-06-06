import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpropsassetsPage } from './searchpropsassets.page';

describe('SearchpropsassetsPage', () => {
  let component: SearchpropsassetsPage;
  let fixture: ComponentFixture<SearchpropsassetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchpropsassetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpropsassetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
