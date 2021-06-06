import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenancymngmntriskPage } from './tenancymngmntrisk.page';

describe('TenancymngmntriskPage', () => {
  let component: TenancymngmntriskPage;
  let fixture: ComponentFixture<TenancymngmntriskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenancymngmntriskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenancymngmntriskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
