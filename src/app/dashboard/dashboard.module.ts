import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { UsuariosComponent } from './dashboard/usuarios/usuarios.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [DashboardComponent, UsuariosComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
