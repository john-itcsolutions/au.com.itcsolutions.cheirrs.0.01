import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquirepropertyPage } from './acquireproperty.page';

describe('AcquirepropertyPage', () => {
  let component: AcquirepropertyPage;
  let fixture: ComponentFixture<AcquirepropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcquirepropertyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquirepropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
