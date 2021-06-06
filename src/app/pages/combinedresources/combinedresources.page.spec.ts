import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedresourcesPage } from './combinedresources.page';

describe('CombinedresourcesPage', () => {
  let component: CombinedresourcesPage;
  let fixture: ComponentFixture<CombinedresourcesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinedresourcesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinedresourcesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
