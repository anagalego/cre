import { TestBed } from '@angular/core/testing';

import { ProdutosFaturadosFuncionarioService } from './produtos-faturados-funcionario.service';

describe('ProdutosFaturadosFuncionarioService', () => {
  let service: ProdutosFaturadosFuncionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosFaturadosFuncionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
