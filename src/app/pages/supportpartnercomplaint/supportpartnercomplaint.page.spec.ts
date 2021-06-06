import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportpartnercomplaintPage } from './supportpartnercomplaint.page';

describe('SupportpartnercomplaintPage', () => {
  let component: SupportpartnercomplaintPage;
  let fixture: ComponentFixture<SupportpartnercomplaintPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportpartnercomplaintPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportpartnercomplaintPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
