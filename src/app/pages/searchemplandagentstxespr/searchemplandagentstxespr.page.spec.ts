import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchemplandagentstxesprPage } from './searchemplandagentstxespr.page';

describe('SearchemplandagentstxesprPage', () => {
  let component: SearchemplandagentstxesprPage;
  let fixture: ComponentFixture<SearchemplandagentstxesprPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchemplandagentstxesprPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchemplandagentstxesprPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
