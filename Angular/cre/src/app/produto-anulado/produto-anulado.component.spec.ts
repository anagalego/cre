import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoAnuladoComponent } from './produto-anulado.component';

describe('ProdutoAnuladoComponent', () => {
  let component: ProdutoAnuladoComponent;
  let fixture: ComponentFixture<ProdutoAnuladoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoAnuladoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoAnuladoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
