import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliercomplaintPage } from './suppliercomplaint.page';

describe('SuppliercomplaintPage', () => {
  let component: SuppliercomplaintPage;
  let fixture: ComponentFixture<SuppliercomplaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliercomplaintPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliercomplaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
