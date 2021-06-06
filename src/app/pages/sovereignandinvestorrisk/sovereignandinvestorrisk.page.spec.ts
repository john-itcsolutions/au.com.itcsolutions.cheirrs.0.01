import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SovereignandinvestorriskPage } from './sovereignandinvestorrisk.page';

describe('SovereignandinvestorriskPage', () => {
  let component: SovereignandinvestorriskPage;
  let fixture: ComponentFixture<SovereignandinvestorriskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SovereignandinvestorriskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SovereignandinvestorriskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
