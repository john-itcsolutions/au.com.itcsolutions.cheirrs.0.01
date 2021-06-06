import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitytxesPage } from './communitytxes.page';

describe('CommunitytxesPage', () => {
  let component: CommunitytxesPage;
  let fixture: ComponentFixture<CommunitytxesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitytxesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitytxesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
