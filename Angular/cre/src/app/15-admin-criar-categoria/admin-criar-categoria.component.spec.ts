import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCriarCategoriaComponent } from './admin-criar-categoria.component';

describe('AdminCriarCategoriaComponent', () => {
  let component: AdminCriarCategoriaComponent;
  let fixture: ComponentFixture<AdminCriarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCriarCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCriarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
