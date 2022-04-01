import { Component, OnInit } from '@angular/core';

import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit() {
  	this.jogoDaVelhaService.inicializar();
  }

  /**
   * Retorna se a tela de início deve ser exibida.
   * 
   * @return boolean
   */
  get showInicio(): boolean {
  	return this.jogoDaVelhaService.showInicio;
  }

  /**
   * Retorna se o tabuleiro deve ser exibido.
   * 
   * @return boolean
   */
  get showTabuleiro(): boolean {
  	return this.jogoDaVelhaService.showTabuleiro;
  }

  /**
   * Retorna se a tela de fim de jogo deve ser exibida.
   * 
   * @return boolean
   */
  get showFinal(): boolean {
  	return this.jogoDaVelhaService.showFinal;
  }

  /**
   * Inicializa os dados de um novo jogo.
   *
   * @return void
   */
  iniciarJogo(): void {
  	this.jogoDaVelhaService.iniciarJogo();
  }

  /**
   * Realiza uma jogada ao clicar um local no tabuleiro.
   *
   * @param number posX
   * @param number posY
   * @return void
   */
  jogar(posX: number, posY: number): void {
  	this.jogoDaVelhaService.jogar(posX, posY);
  }

  /**
   * Retorna se a peça X deve ser exibida para a 
   * coordena informada.
   *
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirX(posX: number, posY: number): boolean {
  	return this.jogoDaVelhaService.exibirX(posX, posY);
  }

  /**
   * Retorna se a peça O deve ser exibida para a 
   * coordena informada.
   *
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirO(posX: number, posY: number): boolean {
  	return this.jogoDaVelhaService.exibirO(posX, posY);
  }

  /**
   * Retorna se a marcação de vitória deve ser exibida para a 
   * coordena informada.
   *
   * @param number posX
   * @param number posY
   * @return boolean
   */
  exibirVitoria(posX: number, posY: number): boolean {
  	return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }

  /**
   * Retorna o número do jogador a jogar.
   * 
   * @return number
   */
  get jogador(): number {
  	return this.jogoDaVelhaService.jogador;
  }

  /**
   * Inicia um novo jogo.
   * 
   * @return void
   */
  novoJogo(): void {
  	this.jogoDaVelhaService.novoJogo();
  }

}
