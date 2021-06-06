import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyregisterllordsPage } from './keyregisterllords.page';

describe('KeyregisterllordsPage', () => {
  let component: KeyregisterllordsPage;
  let fixture: ComponentFixture<KeyregisterllordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyregisterllordsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyregisterllordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
