import { TestBed } from '@angular/core/testing';

import { CriarCategoriaService } from './criar-categoria.service';

describe('CriarCategoriaService', () => {
  let service: CriarCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriarCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
