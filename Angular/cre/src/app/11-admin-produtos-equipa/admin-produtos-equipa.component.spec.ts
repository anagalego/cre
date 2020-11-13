import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProdutosEquipaComponent } from './admin-produtos-equipa.component';

describe('AdminProdutosEquipaComponent', () => {
  let component: AdminProdutosEquipaComponent;
  let fixture: ComponentFixture<AdminProdutosEquipaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminProdutosEquipaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProdutosEquipaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
