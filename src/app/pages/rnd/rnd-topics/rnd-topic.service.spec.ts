import { TestBed } from '@angular/core/testing';

import { RndTopicService } from './rnd-topic.service';

describe('RndTopicService', () => {
  let service: RndTopicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RndTopicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
