import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraComponent } from './components';
import { CalculadoraService } from './services';
import { CalculadoraRoutingModule } from './calculadora-routing.module';
import { CalculadoraRoutingComponent } from './calculadora-routing.component';

@NgModule({
  imports: [
    CommonModule,
    CalculadoraRoutingModule
  ],
  declarations: [
  	CalculadoraComponent,
  	CalculadoraRoutingComponent
  ],
  providers: [
  	CalculadoraService
  ]
})
export class CalculadoraModule { }
