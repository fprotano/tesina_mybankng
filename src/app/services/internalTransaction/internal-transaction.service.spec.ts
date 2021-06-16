import { TestBed } from '@angular/core/testing';

import { InternalTransactionService } from './internal-transaction.service';

describe('InternalTransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InternalTransactionService = TestBed.get(InternalTransactionService);
    expect(service).toBeTruthy();
  });
});
