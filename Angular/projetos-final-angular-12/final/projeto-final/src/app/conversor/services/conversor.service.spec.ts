import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ConversorService } from './conversor.service';

describe('ConversorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
      	ConversorService
      ],
      imports: [
      	HttpClientModule
      ]
    });
  });

  it('should ...', inject([ConversorService], (service: ConversorService) => {
    expect(service).toBeTruthy();
  }));
});
