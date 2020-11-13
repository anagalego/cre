import { TestBed } from '@angular/core/testing';

import { ListarCategoriasService } from './listar-categorias.service';

describe('ListarCategoriasService', () => {
  let service: ListarCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
