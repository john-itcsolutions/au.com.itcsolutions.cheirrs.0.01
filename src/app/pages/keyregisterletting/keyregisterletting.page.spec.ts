import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyregisterlettingPage } from './keyregisterletting.page';

describe('KeyregisterlettingPage', () => {
  let component: KeyregisterlettingPage;
  let fixture: ComponentFixture<KeyregisterlettingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyregisterlettingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyregisterlettingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
