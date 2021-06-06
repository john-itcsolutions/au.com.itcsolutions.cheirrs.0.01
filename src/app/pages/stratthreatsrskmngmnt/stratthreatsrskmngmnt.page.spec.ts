import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StratthreatsrskmngmntPage } from './stratthreatsrskmngmnt.page';

describe('StratthreatsrskmngmntPage', () => {
  let component: StratthreatsrskmngmntPage;
  let fixture: ComponentFixture<StratthreatsrskmngmntPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StratthreatsrskmngmntPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StratthreatsrskmngmntPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
