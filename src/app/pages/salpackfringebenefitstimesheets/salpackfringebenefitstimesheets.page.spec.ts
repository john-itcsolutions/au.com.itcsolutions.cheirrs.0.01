import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalpackfringebenefitstimesheetsPage } from './salpackfringebenefitstimesheets.page';

describe('SalpackfringebenefitstimesheetsPage', () => {
  let component: SalpackfringebenefitstimesheetsPage;
  let fixture: ComponentFixture<SalpackfringebenefitstimesheetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalpackfringebenefitstimesheetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalpackfringebenefitstimesheetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
