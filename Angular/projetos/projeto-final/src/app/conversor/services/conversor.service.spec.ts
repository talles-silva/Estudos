import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ConversorService } from './conversor.service';

describe('ConversorService', () => {
  let service: ConversorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ConversorService
      ],
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(ConversorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
