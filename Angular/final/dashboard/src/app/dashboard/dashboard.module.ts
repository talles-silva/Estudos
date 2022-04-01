import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';
import { DadosService } from './dados.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
  	DashboardComponent
  ],
  exports: [
  	DashboardComponent
  ],
  providers: [
  	DadosService
  ]
})
export class DashboardModule { }
