import { TestBed } from '@angular/core/testing';

import { DataSynthesizerService } from './data-synthesizer.service';

describe('DataSynthesizerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataSynthesizerService = TestBed.get(DataSynthesizerService);
    expect(service).toBeTruthy();
  });
});
