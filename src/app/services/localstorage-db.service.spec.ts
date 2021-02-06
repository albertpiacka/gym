import { TestBed } from '@angular/core/testing';

import { LocalstorageDbService } from './localstorage-db.service';

describe('LocalstorageDbService', () => {
  let service: LocalstorageDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalstorageDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
