import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyregistersalesPage } from './keyregistersales.page';

describe('KeyregistersalesPage', () => {
  let component: KeyregistersalesPage;
  let fixture: ComponentFixture<KeyregistersalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyregistersalesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyregistersalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
