import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingwithchildrencheckingPage } from './workingwithchildrenchecking.page';

describe('WorkingwithchildrencheckingPage', () => {
  let component: WorkingwithchildrencheckingPage;
  let fixture: ComponentFixture<WorkingwithchildrencheckingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingwithchildrencheckingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingwithchildrencheckingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
