import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommencebusprocessPage } from './commencebusprocess.page';

describe('CommencebusprocessPage', () => {
  let component: CommencebusprocessPage;
  let fixture: ComponentFixture<CommencebusprocessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommencebusprocessPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommencebusprocessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
