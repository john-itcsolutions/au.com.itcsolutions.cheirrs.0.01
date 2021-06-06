import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterotheragreementPage } from './registerotheragreement.page';

describe('RegisterotheragreementPage', () => {
  let component: RegisterotheragreementPage;
  let fixture: ComponentFixture<RegisterotheragreementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterotheragreementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterotheragreementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
