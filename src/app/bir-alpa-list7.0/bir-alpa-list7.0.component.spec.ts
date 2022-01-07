import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirAlpaList7.0Component } from './bir-alpa-list7.0.component';

describe('BirAlpaList7.0Component', () => {
  let component: BirAlpaList7.0Component;
  let fixture: ComponentFixture<BirAlpaList7.0Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirAlpaList7.0Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirAlpaList7.0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
