import { Component, OnInit, TemplateRef} from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service'
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  modalRef: BsModalRef;
  nombre="";
  config = {
    animated: true,
    class: 'modal-dialog-centered',
    backdrop: true,
    ignoreBackdropClick: true
  };


  constructor(private usuarioService:UsuariosService,
    private modalService: BsModalService,
    private formbuilder: FormBuilder,
    private router: Router,


    ) { }

  form

  usuarios:any = [];

  ngOnInit(): void {
    this.usuario();
  }
// Funcion para listar usuarios
  usuario(){
    this.usuarioService.usuario(this.nombre).toPromise().then(data => {
      console.log(data)
      this.usuarios = data;
    }).catch(error => console.log(error))
  }

// Funcion para levantar modal
 async AbrirModal(template: TemplateRef<any>,item) {

// Funcion para ver detalle de un usuario
  this.loadingAlert(
  this.usuarioService.detalleUsuario(item.id).toPromise().then((data: any) => {    
    this.form = this.formbuilder.group({
      cedula:[data.cedula],
      nombre:[data.nombre],
      apellido:[data.apellido],
      email:[data.email],
      id:[data.id],
      entidad:[data?.entidad]
    }); 

    this.modalRef = this.modalService.show(template,this.config);
    Swal.close()

  }).catch(error => console.log(error))
);

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
  actualizar(){
    let value = this.form.value;
    console.log(value);
    this.usuarioService.actualizar(this.form.value).subscribe((data) => {


      Swal.fire({
        icon: 'success',
        title: 'Usuario actualizado con éxito',
        showConfirmButton: false,
        timer: 1500
      }).then((result) => {
        location.reload();
      });
      

      console.log(data)
    },(error) => {
      console.log(error)
    })
  }

}
