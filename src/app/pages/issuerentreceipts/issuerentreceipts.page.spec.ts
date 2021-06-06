import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuerentreceiptsPage } from './issuerentreceipts.page';

describe('IssuerentreceiptsPage', () => {
  let component: IssuerentreceiptsPage;
  let fixture: ComponentFixture<IssuerentreceiptsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuerentreceiptsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuerentreceiptsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
