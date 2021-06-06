import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotentialdevelprojectsPage } from './potentialdevelprojects.page';

describe('PotentialdevelprojectsPage', () => {
  let component: PotentialdevelprojectsPage;
  let fixture: ComponentFixture<PotentialdevelprojectsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotentialdevelprojectsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotentialdevelprojectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
