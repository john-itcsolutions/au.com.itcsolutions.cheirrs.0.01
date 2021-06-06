import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyregisterpropertyPage } from './keyregisterproperty.page';

describe('KeyregisterpropertyPage', () => {
  let component: KeyregisterpropertyPage;
  let fixture: ComponentFixture<KeyregisterpropertyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyregisterpropertyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyregisterpropertyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
