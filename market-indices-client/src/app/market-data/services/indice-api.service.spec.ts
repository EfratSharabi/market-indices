import { TestBed } from '@angular/core/testing';

import { IndiceApiService } from './indice-api.service';

describe('IndiceApiService', () => {
  let service: IndiceApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndiceApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
