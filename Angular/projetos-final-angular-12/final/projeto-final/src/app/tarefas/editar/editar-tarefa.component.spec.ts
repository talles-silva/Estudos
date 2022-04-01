import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditarTarefaComponent } from './editar-tarefa.component';

describe('EditarTarefaComponent', () => {
  let component: EditarTarefaComponent;
  let fixture: ComponentFixture<EditarTarefaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTarefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    /*fixture = TestBed.createComponent(EditarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();*/
  });

});
