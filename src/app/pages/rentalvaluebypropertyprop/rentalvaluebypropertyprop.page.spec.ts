import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentalvaluebypropertypropPage } from './rentalvaluebypropertyprop.page';

describe('RentalvaluebypropertypropPage', () => {
  let component: RentalvaluebypropertypropPage;
  let fixture: ComponentFixture<RentalvaluebypropertypropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentalvaluebypropertypropPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentalvaluebypropertypropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
