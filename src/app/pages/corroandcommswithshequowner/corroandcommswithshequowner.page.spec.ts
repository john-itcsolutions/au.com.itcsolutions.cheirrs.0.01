import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorroandcommswithshequownerPage } from './corroandcommswithshequowner.page';

describe('CorroandcommswithshequownerPage', () => {
  let component: CorroandcommswithshequownerPage;
  let fixture: ComponentFixture<CorroandcommswithshequownerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorroandcommswithshequownerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorroandcommswithshequownerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
