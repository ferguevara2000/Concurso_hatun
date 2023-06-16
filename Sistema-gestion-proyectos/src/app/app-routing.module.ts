import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/pages/login/login.component';

const routes: Routes = [
  {path : '', component:LoginComponent},
  {path: "gerente", loadChildren:()=>import("../app/gerente-proyecto/gerente-proyecto.module").then(m=>m.GerenteProyectoModule)}
]
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
