import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFuncionarioCriadoComponent } from './admin-funcionario-criado.component';

describe('AdminFuncionarioCriadoComponent', () => {
  let component: AdminFuncionarioCriadoComponent;
  let fixture: ComponentFixture<AdminFuncionarioCriadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFuncionarioCriadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFuncionarioCriadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
