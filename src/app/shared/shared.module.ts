import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';


import { SharedRoutingModule } from './shared-routing.module';

//Shared module Para compartir servicios entre el login y el dashboard
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ModalModule.forRoot()

  ],
  exports:[
    ModalModule
  ]
})
export class SharedModule { }
