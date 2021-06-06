import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleanupvacatedpropertyPage } from './cleanupvacatedproperty.page';

describe('CleanupvacatedpropertyPage', () => {
  let component: CleanupvacatedpropertyPage;
  let fixture: ComponentFixture<CleanupvacatedpropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleanupvacatedpropertyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleanupvacatedpropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
