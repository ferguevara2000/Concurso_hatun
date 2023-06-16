import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerenteProyectoRoutingModule } from './gerente-proyecto-routing.module';
import { GerenteComponent } from './components/gerente/gerente.component';


@NgModule({
  declarations: [
    GerenteComponent
  ],
  imports: [
    CommonModule,
    GerenteProyectoRoutingModule
  ]
})
export class GerenteProyectoModule { }
