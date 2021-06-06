import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedequitycustomersPage } from './sharedequitycustomers.page';

describe('SharedequitycustomersPage', () => {
  let component: SharedequitycustomersPage;
  let fixture: ComponentFixture<SharedequitycustomersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharedequitycustomersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedequitycustomersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
