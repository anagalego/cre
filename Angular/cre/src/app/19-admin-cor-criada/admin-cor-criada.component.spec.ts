import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCorCriadaComponent } from './admin-cor-criada.component';

describe('AdminCorCriadaComponent', () => {
  let component: AdminCorCriadaComponent;
  let fixture: ComponentFixture<AdminCorCriadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCorCriadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCorCriadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
