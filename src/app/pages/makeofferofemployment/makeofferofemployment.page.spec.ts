import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeofferofemploymentPage } from './makeofferofemployment.page';

describe('MakeofferofemploymentPage', () => {
  let component: MakeofferofemploymentPage;
  let fixture: ComponentFixture<MakeofferofemploymentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeofferofemploymentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeofferofemploymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
