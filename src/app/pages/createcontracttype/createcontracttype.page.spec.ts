import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecontracttypePage } from './createcontracttype.page';

describe('CreatecontracttypePage', () => {
  let component: CreatecontracttypePage;
  let fixture: ComponentFixture<CreatecontracttypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecontracttypePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecontracttypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
