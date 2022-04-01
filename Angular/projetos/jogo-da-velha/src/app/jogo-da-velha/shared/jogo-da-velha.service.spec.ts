import { TestBed } from '@angular/core/testing';

import { JogoDaVelhaService } from './jogo-da-velha.service';

describe('JogoDaVelhaService', () => {
  let service: JogoDaVelhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JogoDaVelhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
