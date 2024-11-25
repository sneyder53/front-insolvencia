import { TestBed } from '@angular/core/testing';

import { AcreedorService } from './acreedor.service';

describe('AcreedorService', () => {
  let service: AcreedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcreedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
