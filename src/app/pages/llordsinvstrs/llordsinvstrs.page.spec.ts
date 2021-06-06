import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlordsinvstrsPage } from './llordsinvstrs.page';

describe('LlordsinvstrsPage', () => {
  let component: LlordsinvstrsPage;
  let fixture: ComponentFixture<LlordsinvstrsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlordsinvstrsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlordsinvstrsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
