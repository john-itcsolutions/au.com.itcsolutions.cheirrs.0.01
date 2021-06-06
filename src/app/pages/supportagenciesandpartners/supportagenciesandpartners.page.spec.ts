import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportagenciesandpartnersPage } from './supportagenciesandpartners.page';

describe('SupportagenciesandpartnersPage', () => {
  let component: SupportagenciesandpartnersPage;
  let fixture: ComponentFixture<SupportagenciesandpartnersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportagenciesandpartnersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportagenciesandpartnersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
