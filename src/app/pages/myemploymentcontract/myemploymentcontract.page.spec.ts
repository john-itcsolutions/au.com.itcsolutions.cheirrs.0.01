import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyemploymentcontractPage } from './myemploymentcontract.page';

describe('MyemploymentcontractPage', () => {
  let component: MyemploymentcontractPage;
  let fixture: ComponentFixture<MyemploymentcontractPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyemploymentcontractPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyemploymentcontractPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
