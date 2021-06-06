import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentmaintquotesPage } from './currentmaintquotes.page';

describe('CurrentmaintquotesPage', () => {
  let component: CurrentmaintquotesPage;
  let fixture: ComponentFixture<CurrentmaintquotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentmaintquotesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentmaintquotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
