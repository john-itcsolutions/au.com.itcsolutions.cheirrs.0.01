import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyregisterassetsPage } from './keyregisterassets.page';

describe('KeyregisterassetsPage', () => {
  let component: KeyregisterassetsPage;
  let fixture: ComponentFixture<KeyregisterassetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyregisterassetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyregisterassetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
