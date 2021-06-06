import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegsmartcontrctpartyPage } from './regsmartcontrctparty.page';

describe('RegsmartcontrctpartyPage', () => {
  let component: RegsmartcontrctpartyPage;
  let fixture: ComponentFixture<RegsmartcontrctpartyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegsmartcontrctpartyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegsmartcontrctpartyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
