import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCriarCorComponent } from './admin-criar-cor.component';

describe('AdminCriarCorComponent', () => {
  let component: AdminCriarCorComponent;
  let fixture: ComponentFixture<AdminCriarCorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCriarCorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCriarCorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
