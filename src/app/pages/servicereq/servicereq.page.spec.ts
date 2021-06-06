import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicereqPage } from './servicereq.page';

describe('ServicereqPage', () => {
  let component: ServicereqPage;
  let fixture: ComponentFixture<ServicereqPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicereqPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicereqPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
