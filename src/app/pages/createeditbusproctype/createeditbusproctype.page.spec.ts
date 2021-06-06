import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateeditbusproctypePage } from './createeditbusproctype.page';

describe('CreateeditbusproctypePage', () => {
  let component: CreateeditbusproctypePage;
  let fixture: ComponentFixture<CreateeditbusproctypePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateeditbusproctypePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateeditbusproctypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
