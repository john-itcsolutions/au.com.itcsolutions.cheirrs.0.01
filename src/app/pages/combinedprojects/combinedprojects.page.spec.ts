import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CombinedprojectsPage } from './combinedprojects.page';

describe('CombinedprojectsPage', () => {
  let component: CombinedprojectsPage;
  let fixture: ComponentFixture<CombinedprojectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombinedprojectsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombinedprojectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
