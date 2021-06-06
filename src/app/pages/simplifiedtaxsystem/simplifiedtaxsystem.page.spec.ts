import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplifiedtaxsystemPage } from './simplifiedtaxsystem.page';

describe('SimplifiedtaxsystemPage', () => {
  let component: SimplifiedtaxsystemPage;
  let fixture: ComponentFixture<SimplifiedtaxsystemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplifiedtaxsystemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplifiedtaxsystemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
