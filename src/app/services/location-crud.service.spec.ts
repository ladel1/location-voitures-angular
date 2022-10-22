import { TestBed } from '@angular/core/testing';

import { LocationCrudService } from './location-crud.service';

describe('LocationCrudService', () => {
  let service: LocationCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
