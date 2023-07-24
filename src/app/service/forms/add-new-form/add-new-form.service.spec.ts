import { TestBed } from '@angular/core/testing';

import { AddNewFormService } from './add-new-form.service';

describe('AddNewFormService', () => {
  let service: AddNewFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddNewFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
