import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalvaluebypropertyPage } from './rentalvaluebyproperty.page';

describe('RentalvaluebypropertyPage', () => {
  let component: RentalvaluebypropertyPage;
  let fixture: ComponentFixture<RentalvaluebypropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalvaluebypropertyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalvaluebypropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
