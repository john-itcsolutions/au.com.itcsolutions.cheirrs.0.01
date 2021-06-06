import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnertxesPage } from './partnertxes.page';

describe('PartnertxesPage', () => {
  let component: PartnertxesPage;
  let fixture: ComponentFixture<PartnertxesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnertxesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnertxesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
