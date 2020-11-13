import { TestBed } from '@angular/core/testing';

import { CriarProdutoService } from './criar-produto.service';

describe('CriarProdutoService', () => {
  let service: CriarProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriarProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
