import { TestBed } from '@angular/core/testing';

import { NodeJsDebugService } from './node-js-debug.service';

describe('NodeJsDebugService', () => {
  let service: NodeJsDebugService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodeJsDebugService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
