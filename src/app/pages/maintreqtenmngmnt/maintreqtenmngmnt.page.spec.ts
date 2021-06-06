import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintreqtenmngmntPage } from './maintreqtenmngmnt.page';

describe('MaintreqtenmngmntPage', () => {
  let component: MaintreqtenmngmntPage;
  let fixture: ComponentFixture<MaintreqtenmngmntPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintreqtenmngmntPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintreqtenmngmntPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
