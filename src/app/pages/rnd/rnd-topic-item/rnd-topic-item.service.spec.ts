import { TestBed } from '@angular/core/testing';

import { RndTopicItemService } from './rnd-topic-item.service';

describe('RndTopicItemService', () => {
  let service: RndTopicItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RndTopicItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
