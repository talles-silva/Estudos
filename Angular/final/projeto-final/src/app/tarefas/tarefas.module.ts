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
import { TarefasRoutingModule } from './tarefas-routing.module';
import { TarefasRoutingComponent } from './tarefas-routing.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    TarefasRoutingModule
  ],
  declarations: [
  	ListarTarefaComponent,
  	CadastrarTarefaComponent,
  	EditarTarefaComponent,
  	TarefaConcluidaDirective,
    TarefasRoutingComponent
  ],
  providers: [
  	TarefaService
  ]
})
export class TarefasModule { }
