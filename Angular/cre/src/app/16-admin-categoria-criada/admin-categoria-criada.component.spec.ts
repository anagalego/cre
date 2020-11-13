import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoriaCriadaComponent } from './admin-categoria-criada.component';

describe('AdminCategoriaCriadaComponent', () => {
  let component: AdminCategoriaCriadaComponent;
  let fixture: ComponentFixture<AdminCategoriaCriadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCategoriaCriadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoriaCriadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
