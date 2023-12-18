import { TestBed } from '@angular/core/testing';

import { IndexCompositionGridColumnsService } from './index-composition-grid-columns.service';

describe('IndexCompositionGridColumnsService', () => {
  let service: IndexCompositionGridColumnsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexCompositionGridColumnsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
