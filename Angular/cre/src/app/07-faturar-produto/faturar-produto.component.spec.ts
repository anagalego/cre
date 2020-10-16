import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaturarProduto } from './faturar-produto.component';

describe('CriarFaturaComponent', () => {
  let component: FaturarProduto;
  let fixture: ComponentFixture<FaturarProduto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaturarProduto ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaturarProduto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
