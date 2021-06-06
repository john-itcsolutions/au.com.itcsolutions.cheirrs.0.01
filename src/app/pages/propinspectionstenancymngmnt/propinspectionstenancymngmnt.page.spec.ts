import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropinspectionstenancymngmntPage } from './propinspectionstenancymngmnt.page';

describe('PropinspectionstenancymngmntPage', () => {
  let component: PropinspectionstenancymngmntPage;
  let fixture: ComponentFixture<PropinspectionstenancymngmntPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropinspectionstenancymngmntPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropinspectionstenancymngmntPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
