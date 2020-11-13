import { TestBed } from '@angular/core/testing';

import { FaturarProdutoService } from './faturar-produto.service';

describe('FaturarProdutoService', () => {
  let service: FaturarProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaturarProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
