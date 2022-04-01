import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { ConversorService } from './conversor.service';

describe('ConversorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
      	ConversorService
      ],
      imports: [
      	HttpModule
      ]
    });
  });

  it('should ...', inject([ConversorService], (service: ConversorService) => {
    expect(service).toBeTruthy();
  }));
});
