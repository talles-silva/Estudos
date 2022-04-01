import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { JogoDaVelhaModule } from './jogo-da-velha';
 
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        JogoDaVelhaModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
