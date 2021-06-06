import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateinspectionsPage } from './privateinspections.page';

describe('PrivateinspectionsPage', () => {
  let component: PrivateinspectionsPage;
  let fixture: ComponentFixture<PrivateinspectionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateinspectionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateinspectionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
