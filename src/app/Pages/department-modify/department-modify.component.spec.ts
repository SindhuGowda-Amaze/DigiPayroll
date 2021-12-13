import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentModifyComponent } from './department-modify.component';

describe('DepartmentModifyComponent', () => {
  let component: DepartmentModifyComponent;
  let fixture: ComponentFixture<DepartmentModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
