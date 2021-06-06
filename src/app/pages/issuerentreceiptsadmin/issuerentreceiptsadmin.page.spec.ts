import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuerentreceiptsadminPage } from './issuerentreceiptsadmin.page';

describe('IssuerentreceiptsadminPage', () => {
  let component: IssuerentreceiptsadminPage;
  let fixture: ComponentFixture<IssuerentreceiptsadminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuerentreceiptsadminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuerentreceiptsadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
