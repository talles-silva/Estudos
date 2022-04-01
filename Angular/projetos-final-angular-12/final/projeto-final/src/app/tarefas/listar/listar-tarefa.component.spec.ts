import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListarTarefaComponent } from './listar-tarefa.component';

describe('ListarTarefaComponent', () => {
  let component: ListarTarefaComponent;
  let fixture: ComponentFixture<ListarTarefaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarTarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    /*fixture = TestBed.createComponent(ListarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();*/
  });
  
});
