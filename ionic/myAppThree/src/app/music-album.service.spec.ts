import { TestBed } from '@angular/core/testing';

import { MusicAlbumService } from './music-album.service';

describe('MusicAlbumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicAlbumService = TestBed.get(MusicAlbumService);
    expect(service).toBeTruthy();
  });
});
