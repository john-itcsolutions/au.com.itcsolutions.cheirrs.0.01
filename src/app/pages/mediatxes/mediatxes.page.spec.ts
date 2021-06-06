import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediatxesPage } from './mediatxes.page';

describe('MediatxesPage', () => {
  let component: MediatxesPage;
  let fixture: ComponentFixture<MediatxesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediatxesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediatxesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
