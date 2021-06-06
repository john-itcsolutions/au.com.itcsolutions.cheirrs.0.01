import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuepurchorderPage } from './issuepurchorder.page';

describe('IssuepurchorderPage', () => {
  let component: IssuepurchorderPage;
  let fixture: ComponentFixture<IssuepurchorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuepurchorderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuepurchorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
