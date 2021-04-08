import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }


  fecha = new Date().getFullYear();

  email: string = "";
  error: boolean = false;

  ingresar() {
    console.log(this.error, this.email);
    if(this.email === "") {
      this.error = true;     
    } else {
      this.error = false;
      sessionStorage.setItem('email', this.email);
      this.route.navigate(['test']);      
    }    
  }

}
