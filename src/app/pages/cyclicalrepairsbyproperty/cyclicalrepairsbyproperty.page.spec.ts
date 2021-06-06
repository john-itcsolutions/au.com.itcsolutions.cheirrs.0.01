import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclicalrepairsbypropertyPage } from './cyclicalrepairsbyproperty.page';

describe('CyclicalrepairsbypropertyPage', () => {
  let component: CyclicalrepairsbypropertyPage;
  let fixture: ComponentFixture<CyclicalrepairsbypropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyclicalrepairsbypropertyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyclicalrepairsbypropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
