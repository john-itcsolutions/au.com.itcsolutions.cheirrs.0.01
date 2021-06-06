import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchownersllordsPage } from './searchownersllords.page';

describe('SearchownersllordsPage', () => {
  let component: SearchownersllordsPage;
  let fixture: ComponentFixture<SearchownersllordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchownersllordsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchownersllordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
