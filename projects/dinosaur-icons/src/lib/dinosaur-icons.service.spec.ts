import { TestBed } from '@angular/core/testing';

import { DinosaurIconsService } from './dinosaur-icons.service';

describe('DinosaurIconsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DinosaurIconsService = TestBed.get(DinosaurIconsService);
    expect(service).toBeTruthy();
  });
});
