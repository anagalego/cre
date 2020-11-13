import { TestBed } from '@angular/core/testing';

import { ProdutosFaturadosEquipaService } from './produtos-faturados-equipa.service';

describe('ProdutosFaturadosEquipaService', () => {
  let service: ProdutosFaturadosEquipaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosFaturadosEquipaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
