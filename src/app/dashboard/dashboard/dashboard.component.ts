import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  salir(){

    window.localStorage.removeItem('token_binar10')

    Swal.fire({
      icon: 'success',
      title: 'Sesión finalizada',
      showConfirmButton: false,
      timer: 1500
    })

    this.router.navigate(['/login']);

  }

}
