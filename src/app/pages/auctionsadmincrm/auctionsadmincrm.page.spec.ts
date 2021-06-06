import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuctionsadmincrmPage } from './auctionsadmincrm.page';

describe('AuctionsadmincrmPage', () => {
  let component: AuctionsadmincrmPage;
  let fixture: ComponentFixture<AuctionsadmincrmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionsadmincrmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionsadmincrmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
