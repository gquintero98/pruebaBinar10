import { Component, OnInit, TemplateRef} from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  modalRef: BsModalRef;

  config = {
    animated: true,
    class: 'modal-dialog-centered',
    backdrop: true,
    ignoreBackdropClick: true
  };


  constructor(private usuarioService:UsuariosService,
    private modalService: BsModalService,
    private formbuilder: FormBuilder

    ) { }

  form
  detalleUsuario

  usuarios:any = [];

  ngOnInit(): void {
    this.usuario();
  }

  usuario(){
    this.usuarioService.usuario().toPromise().then(data => {
      console.log(data)
      this.usuarios = data;
    }).catch(error => console.log(error))
  }

  async getDetail(id){

    this.usuarioService.detalleUsuario(id).toPromise().then((data: any) => {
      
      this.detalleUsuario=data
      
      return data

    }).catch(error => console.log(error))
    

  }


 async AbrirModal(template: TemplateRef<any>,id) {

  this.loadingAlert();
  await this.getDetail(id);
  Swal.close()
  this.modalRef = this.modalService.show(template,this.config);
  this.form = this.formbuilder.group({
    cedula:[this.detalleUsuario.cedula],
    nombre:[this.detalleUsuario.nombre],
    apellido:[this.detalleUsuario.apellido],
    email:[this.detalleUsuario.email]
  }); 
  console.log(this.detalleUsuario)
    // await this.getDetail(id)  
}

  loadingAlert(data?) {
    Swal.fire({
      title: '',
      showConfirmButton: false,
      allowOutsideClick:false,
      customClass: {
        popup:'bg-transparent'
      },
      willOpen: () => {
        Swal.showLoading();
      },
      didClose: () => {
        data;
        Swal.close();
      }
    });
  }

}
