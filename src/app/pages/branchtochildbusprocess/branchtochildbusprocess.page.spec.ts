import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchtochildbusprocessPage } from './branchtochildbusprocess.page';

describe('BranchtochildbusprocessPage', () => {
  let component: BranchtochildbusprocessPage;
  let fixture: ComponentFixture<BranchtochildbusprocessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchtochildbusprocessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchtochildbusprocessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
