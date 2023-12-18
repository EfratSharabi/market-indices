import { TestBed } from '@angular/core/testing';

import { IndiceSideMenuService } from './indice-side-menu.service';

describe('IndiceSideMenuService', () => {
  let service: IndiceSideMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndiceSideMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
