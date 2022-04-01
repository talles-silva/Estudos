import { TestBed, inject } from '@angular/core/testing';
import { MoedaService } from './moeda.service';

describe('MoedaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoedaService]
    });
  });

  it('should ...', inject([MoedaService], (service: MoedaService) => {
    expect(service).toBeTruthy();
  }));
});
