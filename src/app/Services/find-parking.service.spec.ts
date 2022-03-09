import { TestBed } from '@angular/core/testing';

import { FindParkingService } from './find-parking.service';

describe('FindParkingService', () => {
  let service: FindParkingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindParkingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
