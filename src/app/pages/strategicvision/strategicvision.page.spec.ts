import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicvisionPage } from './strategicvision.page';

describe('StrategicvisionPage', () => {
  let component: StrategicvisionPage;
  let fixture: ComponentFixture<StrategicvisionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategicvisionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicvisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
