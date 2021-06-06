import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstaidhrPage } from './firstaidhr.page';

describe('FirstaidhrPage', () => {
  let component: FirstaidhrPage;
  let fixture: ComponentFixture<FirstaidhrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstaidhrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstaidhrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
