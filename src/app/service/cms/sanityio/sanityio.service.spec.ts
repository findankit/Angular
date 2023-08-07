import { TestBed } from '@angular/core/testing';

import { SanityioService } from './sanityio.service';

describe('SanityioService', () => {
  let service: SanityioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SanityioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
