import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantsandvoidsPage } from './vacantsandvoids.page';

describe('VacantsandvoidsPage', () => {
  let component: VacantsandvoidsPage;
  let fixture: ComponentFixture<VacantsandvoidsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacantsandvoidsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacantsandvoidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
