import { TestBed } from '@angular/core/testing';

import { TripseriveService } from './tripserive.service';

describe('TripseriveService', () => {
  let service: TripseriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripseriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
