import { Component, OnInit } from '@angular/core';
import{RegisterService} from '../services/register.service';
import { FormBuilder} from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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
    private router: Router,


  ) { }

  form

  //Inicializar el formulario de registro
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
//funcion cargar para adjuntar archivo de imagenes
  cargarImagen(event){
    this.selectedFile=<File>event.target.files[0]
  }

//funcion para realizar el registro de usuario
  Register(){
      let value = this.form.value;
      console.log(value);
      this.registerService.registro(this.form.value).subscribe((data) => {
        Swal.fire({
          icon: 'success',
          title: 'Usuario creado con éxito',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/login']);
        console.log(data)
      },(error) => {
        console.log(error)
      })
    }
 
  }

