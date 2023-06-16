import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GerenteProyectoRoutingModule } from './gerente-proyecto-routing.module';
import { GerenteComponent } from './components/gerente/gerente.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    GerenteComponent
  ],
  imports: [
    CommonModule,
    GerenteProyectoRoutingModule,
    CoreModule,
  ]
})
export class GerenteProyectoModule { }
