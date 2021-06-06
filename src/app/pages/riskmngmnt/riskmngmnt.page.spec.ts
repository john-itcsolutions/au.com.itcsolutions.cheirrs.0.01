import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskmngmntPage } from './riskmngmnt.page';

describe('RiskmngmntPage', () => {
  let component: RiskmngmntPage;
  let fixture: ComponentFixture<RiskmngmntPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskmngmntPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskmngmntPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
