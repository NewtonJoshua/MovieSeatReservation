import { TestBed, inject } from '@angular/core/testing';

import { ReservationDataService } from './reservation-data.service';

describe('ReservationDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReservationDataService]
    });
  });

  it('should be created', inject([ReservationDataService], (service: ReservationDataService) => {
    expect(service).toBeTruthy();
  }));
});
