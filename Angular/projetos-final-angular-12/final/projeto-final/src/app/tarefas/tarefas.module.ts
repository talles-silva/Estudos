import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { 
  TarefaService, 
  TarefaConcluidaDirective 
} from './shared';
import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
  	ListarTarefaComponent,
  	CadastrarTarefaComponent,
  	EditarTarefaComponent,
  	TarefaConcluidaDirective
  ],
  providers: [
  	TarefaService
  ]
})
export class TarefasModule { }
