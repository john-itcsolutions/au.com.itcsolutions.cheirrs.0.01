import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TribunalPage } from './tribunal.page';

describe('TribunalPage', () => {
  let component: TribunalPage;
  let fixture: ComponentFixture<TribunalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TribunalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TribunalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
