import { TestBed, inject } from '@angular/core/testing';

import { OrienteererService } from './orienteerer.service';

describe('OrienteererService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrienteererService]
    });
  });

  it('should be created', inject([OrienteererService], (service: OrienteererService) => {
    expect(service).toBeTruthy();
  }));
});
