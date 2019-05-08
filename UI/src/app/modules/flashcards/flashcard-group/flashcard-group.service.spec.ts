import { TestBed } from '@angular/core/testing';

import { FlashcardGroupService } from './flashcard-group.service';

describe('FlashcardGroupService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlashcardGroupService = TestBed.get(FlashcardGroupService);
    expect(service).toBeTruthy();
  });
});
