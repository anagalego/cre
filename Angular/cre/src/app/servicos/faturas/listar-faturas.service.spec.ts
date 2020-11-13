import { TestBed } from '@angular/core/testing';

import { ListarFaturasService } from './listar-faturas.service';

describe('ListarFaturasService', () => {
  let service: ListarFaturasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarFaturasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
