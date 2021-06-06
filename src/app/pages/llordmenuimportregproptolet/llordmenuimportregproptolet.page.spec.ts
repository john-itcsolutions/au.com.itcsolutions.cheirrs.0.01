import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LlordmenuimportregproptoletPage } from './llordmenuimportregproptolet.page';

describe('LlordmenuimportregproptoletPage', () => {
  let component: LlordmenuimportregproptoletPage;
  let fixture: ComponentFixture<LlordmenuimportregproptoletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LlordmenuimportregproptoletPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LlordmenuimportregproptoletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
