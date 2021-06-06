import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchemplandagentstxesPage } from './searchemplandagentstxes.page';

describe('SearchemplandagentstxesPage', () => {
  let component: SearchemplandagentstxesPage;
  let fixture: ComponentFixture<SearchemplandagentstxesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchemplandagentstxesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchemplandagentstxesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
