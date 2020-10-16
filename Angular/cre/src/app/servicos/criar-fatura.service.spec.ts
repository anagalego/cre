import { TestBed } from '@angular/core/testing';

import { CriarFaturaService } from './criar-fatura.service';

describe('CriarFaturaService', () => {
  let service: CriarFaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriarFaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
