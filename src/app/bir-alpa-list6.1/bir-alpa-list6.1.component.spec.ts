import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirAlpaList6.1Component } from './bir-alpa-list6.1.component';

describe('BirAlpaList6.1Component', () => {
  let component: BirAlpaList6.1Component;
  let fixture: ComponentFixture<BirAlpaList6.1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirAlpaList6.1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirAlpaList6.1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
