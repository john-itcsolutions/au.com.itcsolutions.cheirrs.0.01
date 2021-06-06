import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeetransaxPage } from './employeetransax.page';

describe('EmployeetransaxPage', () => {
  let component: EmployeetransaxPage;
  let fixture: ComponentFixture<EmployeetransaxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeetransaxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeetransaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
