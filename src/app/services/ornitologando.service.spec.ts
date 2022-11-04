import { TestBed } from '@angular/core/testing';

import { OrnitologandoService } from './ornitologando.service';

describe('OrnitologandoService', () => {
  let service: OrnitologandoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrnitologandoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
