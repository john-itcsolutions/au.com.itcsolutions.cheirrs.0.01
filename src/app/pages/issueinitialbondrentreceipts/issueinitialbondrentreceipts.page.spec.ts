import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueinitialbondrentreceiptsPage } from './issueinitialbondrentreceipts.page';

describe('IssueinitialbondrentreceiptsPage', () => {
  let component: IssueinitialbondrentreceiptsPage;
  let fixture: ComponentFixture<IssueinitialbondrentreceiptsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueinitialbondrentreceiptsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueinitialbondrentreceiptsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
