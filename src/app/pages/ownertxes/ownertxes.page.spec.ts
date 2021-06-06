import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnertxesPage } from './ownertxes.page';

describe('OwnertxesPage', () => {
  let component: OwnertxesPage;
  let fixture: ComponentFixture<OwnertxesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnertxesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnertxesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
