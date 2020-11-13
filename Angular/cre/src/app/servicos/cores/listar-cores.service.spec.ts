import { TestBed } from '@angular/core/testing';

import { ListarCoresService } from './listar-cores.service';

describe('ListarCoresService', () => {
  let service: ListarCoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarCoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
