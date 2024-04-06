import { TestBed } from '@angular/core/testing';

import { VirtualHouseService } from './virtual-house.service';

describe('VirtualHouseService', () => {
  let service: VirtualHouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtualHouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
