import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesandemployeesPage } from './rolesandemployees.page';

describe('RolesandemployeesPage', () => {
  let component: RolesandemployeesPage;
  let fixture: ComponentFixture<RolesandemployeesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolesandemployeesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolesandemployeesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
