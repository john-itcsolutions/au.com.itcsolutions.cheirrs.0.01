import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchdocsbyagentPage } from './searchdocsbyagent.page';

describe('SearchdocsbyagentPage', () => {
  let component: SearchdocsbyagentPage;
  let fixture: ComponentFixture<SearchdocsbyagentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchdocsbyagentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchdocsbyagentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
