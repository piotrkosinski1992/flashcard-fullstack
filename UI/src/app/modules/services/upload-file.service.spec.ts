import { TestBed } from '@angular/core/testing';

import { UploadFlashCardsService } from './upload-flash-cards.service';

describe('UploadFlashCardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UploadFlashCardsService = TestBed.get(UploadFlashCardsService);
    expect(service).toBeTruthy();
  });
});
