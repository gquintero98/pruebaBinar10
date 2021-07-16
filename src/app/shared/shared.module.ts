import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';


import { SharedRoutingModule } from './shared-routing.module';

//Shared module Para compartir servicios entre el login y el dashboard
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule

  ],
  exports:[
    ModalModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
