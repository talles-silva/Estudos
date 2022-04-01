import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';
import { DataBrPipe } from './pipes';
import { ConversorRoutingComponent } from './conversor-routing.component';
import { ConversorRoutingModule } from './conversor-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ConversorRoutingModule
  ],
  declarations: [
  	ConversorComponent,
  	NumeroDirective,
  	ModalCotacaoComponent,
  	DataBrPipe,
    ConversorRoutingComponent
  ],
  providers: [
  	MoedaService,
    ConversorService
  ]
})
export class ConversorModule { }
