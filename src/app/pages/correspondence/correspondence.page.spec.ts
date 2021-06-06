import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrespondencePage } from './correspondence.page';

describe('CorrespondencePage', () => {
  let component: CorrespondencePage;
  let fixture: ComponentFixture<CorrespondencePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrespondencePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrespondencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
