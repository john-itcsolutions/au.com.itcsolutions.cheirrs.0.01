import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GovtxesPage } from './govtxes.page';

describe('GovtxesPage', () => {
  let component: GovtxesPage;
  let fixture: ComponentFixture<GovtxesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GovtxesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GovtxesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
