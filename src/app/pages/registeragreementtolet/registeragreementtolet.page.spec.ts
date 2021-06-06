import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteragreementtoletPage } from './registeragreementtolet.page';

describe('RegisteragreementtoletPage', () => {
  let component: RegisteragreementtoletPage;
  let fixture: ComponentFixture<RegisteragreementtoletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteragreementtoletPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteragreementtoletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
