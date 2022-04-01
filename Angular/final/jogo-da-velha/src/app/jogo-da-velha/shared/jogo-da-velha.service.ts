import { Injectable } from '@angular/core';

@Injectable()
export class JogoDaVelhaService {

  private readonly TAM_TAB: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly VAZIO: number = 0;

  private tabuleiro: any;
  private numMovimentos: number;
  private vitoria: any;

  private _jogador: number;
  private _showInicio: boolean;
  private _showTabuleiro: boolean;
  private _showFinal: boolean;

  constructor() { }

  /**
   * Inicializa o jogo. Define exibição da tela inicial.
   *
   * @return void
   */
  inicializar(): void {
    this._showInicio = true;
    this._showTabuleiro = false;
    this._showFinal = false;
    this.numMovimentos = 0;
    this._jogador = this.X;
    this.vitoria = false;
    this.inicializarTabuleiro();
  }

  /**
   * Inicializa o tabuleiro do jogo com vazio para todas 
   * as posições.
   *
   * @return void
   */
  inicializarTabuleiro(): void {
    this.tabuleiro = [this.TAM_TAB];
    for (let i = 0; i < this.TAM_TAB; i++) {
      this.tabuleiro[i] = [this.VAZIO, this.VAZIO, this.VAZIO];
    }
  }

  /**
   * Retorna se a tela de início deve ser exibida.
   * 
   * @return boolean
   */
  get showInicio(): boolean {
    return this._showInicio;
  }

  /**
   * Retorna se o tabuleiro deve ser exibido.
   * 
   * @return boolean
   */
  get showTabuleiro(): boolean {
    return this._showTabuleiro;
  }

  /**
   * Retorna se a tela de fim de jogo deve ser exibida.
   * 
   * @return boolean
   */
  get showFinal(): boolean {
    return this._showFinal;
  }

  /**
   * Retorna o número do jogador a jogar.
   * 
   * @return number
   */
  get jogador(): number {
    return this._jogador;
  }

  /**
   * Exibe o tabuleiro.
   *
   * @return void
   */
  iniciarJogo(): void {
    this._showInicio = false;
    this._showTabuleiro = true;
  }

  /**
   * Realiza uma jogada dado as coordenadas do tabuleiro.
   *
   * @param number posX
   * @param number posY
   * @return void
   */
  jogar(posX: number, posY: number): void {
    // jogada inválida
    if (this.tabuleiro[posX][posY] !== this.VAZIO || 
      this.vitoria) {
      return;
    }

    this.tabuleiro[posX][posY] = this._jogador;
    this.numMovimentos++;
    this.vitoria = this.fimJogo(posX, posY, 
      this.tabuleiro, this._jogador);
    this._jogador = (this._jogador === this.X) ? this.O : this.X;

    if (!this.vitoria && this.numMovimentos < 9) {
      this.cpuJogar();
    }

    // houve vitória
    if (this.vitoria !== false) {
      this._showFinal = true;
    }

    // empate
    if (!this.vitoria && this.numMovimentos === 9) {
      this._jogador = 0;
      this._showFinal = true;
    }
  }

  /**
   * Verifica e retorna se o jogo terminou.
   *
   * @param number linha
   * @param number coluna
   * @param any tabuleiro
   * @param number jogador
   * @return array
   */
  fimJogo(linha: number, coluna: number, 
      tabuleiro: any, jogador: number) {
    let fim: any = false;

    // valida a linha
    if (tabuleiro[linha][0] === jogador && 
      tabuleiro[linha][1] === jogador && 
      tabuleiro[linha][2] === jogador) {
      fim = [[linha, 0], [linha, 1], [linha, 2]];
    }

    // valida a coluna
    if (tabuleiro[0][coluna] === jogador && 
      tabuleiro[1][coluna] === jogador && 
      tabuleiro[2][coluna] === jogador) {
      fim = [[0, coluna], [1, coluna], [2, coluna]];
    }

    // valida as diagonais
    if (tabuleiro[0][0] === jogador && 
      tabuleiro[1][1] === jogador && 
      tabuleiro[2][2] === jogador) {
      fim = [[0, 0], [1, 1], [2, 2]];
    }

    if (tabuleiro[0][2] === jogador && 
      tabuleiro[1][1] === jogador && 
      tabuleiro[2][0] === jogador) {
      fim = [[0, 2], [1, 1], [2, 0]];
    }

    return fim;
  }

  /**
   * Lógica para simular jogada do computador em modo aleatório.
   *
   * @return void
   */
  cpuJogar(): void {
    // verifica jogada de vitória
    let jogada: number[] = this.obterJogada(this.O);

    if (jogada.length <= 0) {
      // tenta jogar para evitar derrota
      jogada = this.obterJogada(this.X);
    }

    if (jogada.length <= 0) {
      // joga aleatório
      let jogadas: any = [];
      for (let i=0; i<this.TAM_TAB; i++) {
        for (let j=0; j<this.TAM_TAB; j++) {
          if (this.tabuleiro[i][j] === this.VAZIO) {
            jogadas.push([i, j]);
          }
        }
      }
      let k = Math.floor((Math.random() * (jogadas.length - 1)));
      jogada = [jogadas[k][0], jogadas[k][1]];
    }

    this.tabuleiro[jogada[0]][jogada[1]] = this._jogador;
    this.numMovimentos++;
    this.vitoria = this.fimJogo(jogada[0], jogada[1],
        this.tabuleiro, this._jogador);
    this._jogador = (this._jogador === this.X) ? this.O : this.X;
  }

  /**
   * Obtém uma jogada válida para vitória de um jogador.
   *
   * @param number jogador
   * @return nomber[]
   */
  obterJogada(jogador: number): number[] {
    let tab = this.tabuleiro;
    for (let lin = 0; lin < this.TAM_TAB; lin++) {
      for (let col = 0; col < this.TAM_TAB; col++) {
        if (tab[lin][col] !== this.VAZIO) {
          continue;
        }
        tab[lin][col] = jogador;
        if (this.fimJogo(lin, col, tab, jogador)) {
          return [lin, col];
        }
        tab[lin][col] = this.VAZIO;
      }
    }
    return [];
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
    return this.tabuleiro[posX][posY] === this.X;
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
    return this.tabuleiro[posX][posY] === this.O;
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
    let exibirVitoria: boolean = false;

    if (!this.vitoria) {
      return exibirVitoria;
    }

    for (let pos of this.vitoria) {
      if (pos[0] === posX && pos[1] === posY) {
        exibirVitoria = true;
        break;
      }
    }

    return exibirVitoria;
  }

  /**
   * Inicializa um novo jogo, assim como exibe o tabuleiro.
   *
   * @return void
   */
  novoJogo(): void {
    this.inicializar();
    this._showFinal = false;
    this._showInicio = false;
    this._showTabuleiro = true;
  }

}
