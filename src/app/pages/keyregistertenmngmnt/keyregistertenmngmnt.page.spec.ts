import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyregistertenmngmntPage } from './keyregistertenmngmnt.page';

describe('KeyregistertenmngmntPage', () => {
  let component: KeyregistertenmngmntPage;
  let fixture: ComponentFixture<KeyregistertenmngmntPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyregistertenmngmntPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyregistertenmngmntPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
