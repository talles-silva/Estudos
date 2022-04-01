import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConversorComponent } from './components';
import { ConversorRoutingComponent } from './conversor-routing.component';

export const ConversorRoutes: Routes = [
	{
		path: 'conversor-moedas',
		component: ConversorRoutingComponent,
		children: [
		  {
			path: '', 
			component: ConversorComponent 
		  }
		]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(ConversorRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ConversorRoutingModule {
}
