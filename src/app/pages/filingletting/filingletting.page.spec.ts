import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilinglettingPage } from './filingletting.page';

describe('FilinglettingPage', () => {
  let component: FilinglettingPage;
  let fixture: ComponentFixture<FilinglettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilinglettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilinglettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
