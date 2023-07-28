import { TestBed } from '@angular/core/testing';

import { TableActionService } from './table-action.service';

describe('TableActionService', () => {
  let service: TableActionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableActionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
