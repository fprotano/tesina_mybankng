import { TestBed } from '@angular/core/testing';

import { HelpCenterThreadService } from './help-center-thread.service';

describe('HelpCenterThreadServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelpCenterThreadService = TestBed.get(HelpCenterThreadService);
    expect(service).toBeTruthy();
  });
});
