import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratweaknessesrskmngmntPage } from './stratweaknessesrskmngmnt.page';

describe('StratweaknessesrskmngmntPage', () => {
  let component: StratweaknessesrskmngmntPage;
  let fixture: ComponentFixture<StratweaknessesrskmngmntPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratweaknessesrskmngmntPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratweaknessesrskmngmntPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
