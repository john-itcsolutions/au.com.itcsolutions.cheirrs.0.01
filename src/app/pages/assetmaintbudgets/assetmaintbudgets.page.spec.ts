import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetmaintbudgetsPage } from './assetmaintbudgets.page';

describe('AssetmaintbudgetsPage', () => {
  let component: AssetmaintbudgetsPage;
  let fixture: ComponentFixture<AssetmaintbudgetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetmaintbudgetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetmaintbudgetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
