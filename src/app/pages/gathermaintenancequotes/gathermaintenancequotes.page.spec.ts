import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GathermaintenancequotesPage } from './gathermaintenancequotes.page';

describe('GathermaintenancequotesPage', () => {
  let component: GathermaintenancequotesPage;
  let fixture: ComponentFixture<GathermaintenancequotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GathermaintenancequotesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GathermaintenancequotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
