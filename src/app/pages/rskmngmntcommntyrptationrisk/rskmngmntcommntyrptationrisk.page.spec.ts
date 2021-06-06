import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RskmngmntcommntyrptationriskPage } from './rskmngmntcommntyrptationrisk.page';

describe('RskmngmntcommntyrptationriskPage', () => {
  let component: RskmngmntcommntyrptationriskPage;
  let fixture: ComponentFixture<RskmngmntcommntyrptationriskPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RskmngmntcommntyrptationriskPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RskmngmntcommntyrptationriskPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
