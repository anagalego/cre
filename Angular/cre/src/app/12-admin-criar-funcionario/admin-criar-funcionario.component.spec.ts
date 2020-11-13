import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCriarFuncionarioComponent } from './admin-criar-funcionario.component';

describe('AdminCriarFuncionarioComponent', () => {
  let component: AdminCriarFuncionarioComponent;
  let fixture: ComponentFixture<AdminCriarFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCriarFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCriarFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
