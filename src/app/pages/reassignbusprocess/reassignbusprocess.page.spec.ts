import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReassignbusprocessPage } from './reassignbusprocess.page';

describe('ReassignbusprocessPage', () => {
  let component: ReassignbusprocessPage;
  let fixture: ComponentFixture<ReassignbusprocessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReassignbusprocessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReassignbusprocessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
