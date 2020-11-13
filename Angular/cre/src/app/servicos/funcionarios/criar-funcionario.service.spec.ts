import { TestBed } from '@angular/core/testing';

import { CriarFuncionarioService } from './criar-funcionario.service';

describe('CriarFuncionarioService', () => {
  let service: CriarFuncionarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriarFuncionarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
