import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminateemployeeoragentPage } from './terminateemployeeoragent.page';

describe('TerminateemployeeoragentPage', () => {
  let component: TerminateemployeeoragentPage;
  let fixture: ComponentFixture<TerminateemployeeoragentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminateemployeeoragentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminateemployeeoragentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
