import { TestBed } from '@angular/core/testing';

import { EliminarProdutoService } from './eliminar-produto.service';

describe('EliminarProdutoService', () => {
  let service: EliminarProdutoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliminarProdutoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
