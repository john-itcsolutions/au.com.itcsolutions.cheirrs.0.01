import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlordinvestorcomplaintPage } from './llordinvestorcomplaint.page';

describe('LlordinvestorcomplaintPage', () => {
  let component: LlordinvestorcomplaintPage;
  let fixture: ComponentFixture<LlordinvestorcomplaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlordinvestorcomplaintPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlordinvestorcomplaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
