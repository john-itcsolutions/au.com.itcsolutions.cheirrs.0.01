import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorroandcommswithtenantPage } from './corroandcommswithtenant.page';

describe('CorroandcommswithtenantPage', () => {
  let component: CorroandcommswithtenantPage;
  let fixture: ComponentFixture<CorroandcommswithtenantPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorroandcommswithtenantPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorroandcommswithtenantPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
