import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateinspectionsadmincrmPage } from './privateinspectionsadmincrm.page';

describe('PrivateinspectionsadmincrmPage', () => {
  let component: PrivateinspectionsadmincrmPage;
  let fixture: ComponentFixture<PrivateinspectionsadmincrmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateinspectionsadmincrmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateinspectionsadmincrmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
