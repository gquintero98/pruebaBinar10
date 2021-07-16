import { Component, OnInit } from '@angular/core';
import{RegisterService} from '../services/register.service';
// import { loginService } from '../services/login.service';

import { FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  selectedFile: File=null;

  constructor(
    private formbuilder: FormBuilder,
    private registerService: RegisterService,

  ) { }

  form

  ngOnInit(): void {
    this.form = this.formbuilder.group({
      username: [null],
      password: [null],
      password2: [null],
      email: [null],
      nombre: [null],
      apellido: [null],
      cedula: [null],
      entidad: [null]   
    });

   
  }

  cargarImagen(event){
    this.selectedFile=<File>event.target.files[0]
  }


  Register(){
    // if(!this.form.controls.numero_documento.invalid && !this.form.controls.email.invalid && !this.form.controls.password.invalid){
      let value = this.form.value;
      // value = value.fecha_nac ? 
      //   {...value, fecha_nac: value.fecha_nac.toISOString().substring(0, 10)}
      // : value;
  
      console.log(value);
      this.registerService.registro(value,this.selectedFile).subscribe((data) => {
        console.log(data)
      },(error) => {
        console.log(error)
        // this._swal.errorHandler(error);
      })
    }
    // else{
    //   console.log('Campos requeridos')
    // }
  }

// }
