import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './shared';
import { JogoDaVelhaRoutingModule } from './jogo-da-velha-routing.module';
import { JogoDaVelhaRoutingComponent } from './jogo-da-velha-routing.component';

@NgModule({
  imports: [
    CommonModule,
    JogoDaVelhaRoutingModule
  ],
  declarations: [
  	JogoDaVelhaComponent,
  	JogoDaVelhaRoutingComponent
  ],
  providers: [
  	JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
