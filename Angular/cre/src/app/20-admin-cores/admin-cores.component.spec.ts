import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCoresComponent } from './admin-cores.component';

describe('AdminCoresComponent', () => {
  let component: AdminCoresComponent;
  let fixture: ComponentFixture<AdminCoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
