import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitycomplaintPage } from './communitycomplaint.page';

describe('CommunitycomplaintPage', () => {
  let component: CommunitycomplaintPage;
  let fixture: ComponentFixture<CommunitycomplaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitycomplaintPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitycomplaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
