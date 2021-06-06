import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanresourcesPage } from './humanresources.page';

describe('HumanresourcesPage', () => {
  let component: HumanresourcesPage;
  let fixture: ComponentFixture<HumanresourcesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanresourcesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanresourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
