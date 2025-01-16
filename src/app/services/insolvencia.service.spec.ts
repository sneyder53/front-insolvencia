import { TestBed } from '@angular/core/testing';

import { InsolvenciaService } from './insolvencia.service';

describe('InsolvenciaService', () => {
  let service: InsolvenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsolvenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
