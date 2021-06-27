import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShequregistershequitymtgageagrmntPage } from './shequregistershequitymtgageagrmnt.page';

describe('ShequregistershequitymtgageagrmntPage', () => {
  let component: ShequregistershequitymtgageagrmntPage;
  let fixture: ComponentFixture<ShequregistershequitymtgageagrmntPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShequregistershequitymtgageagrmntPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShequregistershequitymtgageagrmntPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
