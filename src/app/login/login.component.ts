import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { loginService } from '../services/login.service';
import { Router } from '@angular/router';
import { TokenService } from '../shared/services/token.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, 
    private loginService: loginService, 
    private router: Router,
    private token: TokenService
    ) { }

  form;

  ngOnInit(): void {

    this.form=this.formbuilder.group({
      email:[null],
      password:[null]
    })
  }

  //funcion para loguearse al sistema
  Ingresar(){
    this.loginService.login(this.form.value).subscribe((data) => {
      
      this.token.setToken(data['key']);
      this.router.navigate(['/dashboard/users']);
      //alert que indica que ya se inicio sesión
      Swal.fire(
        'Sesión iniciada!',
        '',
        'success',
      )
      
    },(error) => {
      alert('ocurrió un error' + error);
      console.log(error)
    })
    console.log(this.form.value);
    }
    
  }

