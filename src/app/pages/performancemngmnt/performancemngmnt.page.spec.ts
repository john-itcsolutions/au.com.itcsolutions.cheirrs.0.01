import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformancemngmntPage } from './performancemngmnt.page';

describe('PerformancemngmntPage', () => {
  let component: PerformancemngmntPage;
  let fixture: ComponentFixture<PerformancemngmntPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformancemngmntPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformancemngmntPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
