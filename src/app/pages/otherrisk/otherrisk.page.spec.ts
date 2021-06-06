import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherriskPage } from './otherrisk.page';

describe('OtherriskPage', () => {
  let component: OtherriskPage;
  let fixture: ComponentFixture<OtherriskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherriskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherriskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
