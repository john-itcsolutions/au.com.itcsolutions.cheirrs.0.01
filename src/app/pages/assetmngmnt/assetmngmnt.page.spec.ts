import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetmngmntPage } from './assetmngmnt.page';

describe('AssetmngmntPage', () => {
  let component: AssetmngmntPage;
  let fixture: ComponentFixture<AssetmngmntPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetmngmntPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetmngmntPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
