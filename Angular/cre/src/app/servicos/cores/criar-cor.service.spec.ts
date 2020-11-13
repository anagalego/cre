import { TestBed } from '@angular/core/testing';

import { CriarCorService } from './criar-cor.service';

describe('CriarCorService', () => {
  let service: CriarCorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriarCorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
