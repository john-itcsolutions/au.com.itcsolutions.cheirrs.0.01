import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverduechargesinvoicessentPage } from './overduechargesinvoicessent.page';

describe('OverduechargesinvoicessentPage', () => {
  let component: OverduechargesinvoicessentPage;
  let fixture: ComponentFixture<OverduechargesinvoicessentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverduechargesinvoicessentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverduechargesinvoicessentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
