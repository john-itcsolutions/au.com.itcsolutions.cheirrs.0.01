import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckapplicantsbackgroundbypropertyPage } from './checkapplicantsbackgroundbyproperty.page';

describe('CheckapplicantsbackgroundbypropertyPage', () => {
  let component: CheckapplicantsbackgroundbypropertyPage;
  let fixture: ComponentFixture<CheckapplicantsbackgroundbypropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckapplicantsbackgroundbypropertyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckapplicantsbackgroundbypropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
