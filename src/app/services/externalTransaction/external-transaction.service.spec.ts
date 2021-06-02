import { TestBed } from '@angular/core/testing';

import { ExternalTransactionService } from './external-transaction.service';

describe('ExternalTransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExternalTransactionService = TestBed.get(ExternalTransactionService);
    expect(service).toBeTruthy();
  });
});
