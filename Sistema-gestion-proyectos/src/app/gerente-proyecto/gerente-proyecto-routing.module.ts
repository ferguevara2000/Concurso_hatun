import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GerenteComponent } from './components/gerente/gerente.component';

const routes: Routes = [
  {path:"", component:GerenteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GerenteProyectoRoutingModule { }
