import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/pages/login/login.component';

const routes: Routes = [
  {path : '', component:LoginComponent},
  {path : 'usuarios', loadChildren:() => import('./administrador/administrador.module').then(m => m.AdministradorModule)}
  ]
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
