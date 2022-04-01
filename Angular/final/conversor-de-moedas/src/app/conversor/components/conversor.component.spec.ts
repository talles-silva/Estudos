import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ConversorComponent } from './conversor.component';
import { MoedaService, ConversorService } from '../services';
import { NumeroDirective } from '../directives';
import { DataBrPipe } from '../pipes';
import { ModalCotacaoComponent } from '../utils';

describe('ConversorComponent', () => {
  let component: ConversorComponent;
  let fixture: ComponentFixture<ConversorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ConversorComponent,
        NumeroDirective,
        DataBrPipe,
        ModalCotacaoComponent
      ],
      providers: [
        MoedaService,
        ConversorService
      ],
      imports: [
        FormsModule,
        HttpModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
