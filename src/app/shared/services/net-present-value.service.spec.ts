import { TestBed, inject } from '@angular/core/testing';

import { NetPresentValueService } from './net-present-value.service';

describe('NetPresentValueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetPresentValueService]
    });
  });

  it('should be created', inject([NetPresentValueService], (service: NetPresentValueService) => {
    expect(service).toBeTruthy();
  }));
});
