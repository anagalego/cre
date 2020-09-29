import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoCriadoComponent } from './produto-criado.component';

describe('ProdutoCriadoComponent', () => {
  let component: ProdutoCriadoComponent;
  let fixture: ComponentFixture<ProdutoCriadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoCriadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoCriadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
