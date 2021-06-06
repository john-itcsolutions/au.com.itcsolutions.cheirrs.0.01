import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistersalesagentPage } from './registersalesagent.page';

describe('RegistersalesagentPage', () => {
  let component: RegistersalesagentPage;
  let fixture: ComponentFixture<RegistersalesagentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistersalesagentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistersalesagentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
