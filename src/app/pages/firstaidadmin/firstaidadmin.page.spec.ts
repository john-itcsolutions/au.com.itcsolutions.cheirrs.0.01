import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstaidadminPage } from './firstaidadmin.page';

describe('FirstaidadminPage', () => {
  let component: FirstaidadminPage;
  let fixture: ComponentFixture<FirstaidadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstaidadminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstaidadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
