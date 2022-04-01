import { TestBed, inject } from '@angular/core/testing';
import { JogoDaVelhaService } from './jogo-da-velha.service';

describe('JogoDaVelhaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JogoDaVelhaService]
    });
  });

  it('should ...', inject([JogoDaVelhaService], (service: JogoDaVelhaService) => {
    expect(service).toBeTruthy();
  }));
});
