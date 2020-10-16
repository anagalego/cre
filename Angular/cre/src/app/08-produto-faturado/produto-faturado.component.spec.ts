import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoFaturadoComponent } from './produto-faturado.component';

describe('ProdutoFaturadoComponent', () => {
  let component: ProdutoFaturadoComponent;
  let fixture: ComponentFixture<ProdutoFaturadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutoFaturadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoFaturadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
