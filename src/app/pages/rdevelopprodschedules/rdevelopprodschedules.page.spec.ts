import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RdevelopprodschedulesPage } from './rdevelopprodschedules.page';

describe('RdevelopprodschedulesPage', () => {
  let component: RdevelopprodschedulesPage;
  let fixture: ComponentFixture<RdevelopprodschedulesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RdevelopprodschedulesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RdevelopprodschedulesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
