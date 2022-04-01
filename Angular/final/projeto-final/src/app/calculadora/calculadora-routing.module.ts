import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalculadoraComponent } from './components';
import { CalculadoraRoutingComponent } from './calculadora-routing.component';

export const CalculadoraRoutes: Routes = [
	{
		path: 'calculadora',
		component: CalculadoraRoutingComponent,
		children: [
		  {
			path: '', 
			component: CalculadoraComponent 
		  }
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(CalculadoraRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CalculadoraRoutingModule {
}
