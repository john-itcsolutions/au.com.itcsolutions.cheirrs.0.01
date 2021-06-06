import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecontractPage } from './createcontract.page';

describe('CreatecontractPage', () => {
  let component: CreatecontractPage;
  let fixture: ComponentFixture<CreatecontractPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecontractPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecontractPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
