import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrearsbypropPage } from './arrearsbyprop.page';

describe('ArrearsbypropPage', () => {
  let component: ArrearsbypropPage;
  let fixture: ComponentFixture<ArrearsbypropPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrearsbypropPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrearsbypropPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
