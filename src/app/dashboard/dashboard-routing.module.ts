import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { UsuariosComponent } from './dashboard/usuarios/usuarios.component';


const routes: Routes = [{
  path:'',
  component: DashboardComponent,
  children: [
    {
      path: 'users',
      component: UsuariosComponent
    },
    {
      path: '**',
      component: UsuariosComponent
    }
  ]
}];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]

})
export class DashboardRoutingModule { }
